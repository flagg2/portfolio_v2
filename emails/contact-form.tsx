import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Preview,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  locale: string;
}

const translations = {
  en: {
    preview: "New message from your portfolio site",
    heading: "New message from {name}",
    intro: "You received a new message from your portfolio contact form.",
    from: "From:",
    email: "Email:",
    message: "Message:",
  },
  sk: {
    preview: "Nová správa z Vášho portfólia",
    heading: "Nová správa od {name}",
    intro: "Dostali ste novú správu z kontaktného formulára Vášho portfólia.",
    from: "Odosielateľ:",
    email: "Email:",
    message: "Správa:",
  },
};

export const ContactFormEmail = ({
  name,
  email,
  message,
  locale,
}: ContactFormEmailProps) => {
  const t = locale === "sk" ? translations.sk : translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{t.heading.replace("{name}", name)}</Heading>
          <Text style={text}>{t.intro}</Text>
          <Text style={text}>
            <strong>{t.from}</strong> {name}
          </Text>
          <Text style={text}>
            <strong>{t.email}</strong> {email}
          </Text>
          <Text style={text}>
            <strong>{t.message}</strong>
          </Text>
          <Text style={text}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
};
