"use server";

import { render } from "@react-email/components";
import * as postmark from "postmark";
import { z } from "zod";
import { ContactFormEmail } from "@/emails/contact-form";
import { getLocale } from "next-intl/server";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const locale = await getLocale();
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  if (!process.env.POSTMARK_API_KEY) {
    throw new Error("POSTMARK_API_KEY is not defined");
  }

  const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

  const emailHtml = await render(
    <ContactFormEmail
      name={name}
      email={email}
      message={message}
      locale={locale}
    />
  );

  try {
    await client.sendEmail({
      From: "no-reply@wittlinger.dev", // This needs to be a verified sender in Postmark
      To: "samuel.wittlinger@looplabs.sk",
      ReplyTo: email,
      Subject:
        locale === "sk"
          ? "Nová správa z vašej stránky"
          : "New message from your portfolio",
      HtmlBody: emailHtml,
      MessageStream: "outbound", // Or whatever stream you want to use
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
