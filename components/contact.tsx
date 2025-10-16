"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useServerAction } from "@/lib/hooks/use-server-action";
import { sendEmail } from "@/app/actions/send-email";
import { toast } from "sonner";

type ServerErrors = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  message?: string[] | undefined;
};

export function Contact() {
  const t = useTranslations("contact");
  const [errors, setErrors] = useState<ServerErrors>({});

  const [runAction, isPending] = useServerAction(sendEmail, (response) => {
    console.log(response);
    if (response && !response.success && response.errors) {
      setErrors(response.errors);
    }
    if (response && response.success) {
      toast.success(t("success"));
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(t("error"));
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    await runAction(formData);
  };

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <span id="contact" className="absolute -top-16" />
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance text-center">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t("title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("emailLabel")}
                  </p>
                  <a
                    href="mailto:samuel.wittlinger@looplabs.sk"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    samuel.wittlinger@looplabs.sk
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("locationLabel")}
                  </p>
                  <p className="text-foreground">{t("locationValue")}</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{t("formTitle")}</CardTitle>
              <CardDescription>{t("formDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name[0]}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email[0]}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder={t("message")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    required
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message[0]}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {t("sendButton")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            {t("copyright", {
              year: new Date().getFullYear(),
            })}
          </p>
        </footer>
      </div>
    </section>
  );
}
