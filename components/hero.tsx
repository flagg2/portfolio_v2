"use client";

import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div
        ref={cursorRef}
        className="absolute w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />

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
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t("greeting")}
            </p>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[160px]"
            >
              {t("viewWork")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="min-w-[160px]"
            >
              {t("getInTouch")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="animate-bounce"
              aria-label={t("scrollDownLabel")}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 flex items-center justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label={t("githubLabel")}
            >
              <a
                href="https://github.com/flagg2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.svg"
                  alt={t("githubLabel")}
                  width={20}
                  height={20}
                />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label={t("linkedinLabel")}
            >
              <a
                href="https://www.linkedin.com/in/samuel-wittlinger-51480620a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  alt={t("linkedinLabel")}
                  width={22}
                  height={22}
                />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label={t("xLabel")}
            >
              <a
                href="https://x.com/sam_wttg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/x.svg" alt={t("xLabel")} width={24} height={24} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label={t("emailLabel")}
            >
              <a href="mailto:samuel.wittlinger@looplabs.sk">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
