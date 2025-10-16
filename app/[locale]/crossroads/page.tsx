"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Crossroads() {
  const t = useTranslations("crossroads");

  return (
    <section
      id="crossroads"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {t("title")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
          >
            <Card className="text-left">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/portfolio.png"
                    alt={t("portfolioImageAlt")}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardTitle>{t("portfolioTitle")}</CardTitle>
                <CardDescription>{t("portfolioDescription")}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="lg" asChild className="w-full">
                  <Link href="/">{t("portfolioButton")}</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/linkpal.png"
                    alt={t("linkpalImageAlt")}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardTitle>{t("linkpalTitle")}</CardTitle>
                <CardDescription>{t("linkpalDescription")}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="lg" variant="outline" asChild className="w-full">
                  <a
                    href="https://linkpal.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("linkpalButton")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
