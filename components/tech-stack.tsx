"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { technologies } from "@/lib/data";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStack() {
  const t = useTranslations("techStack");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="tech-stack"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-balance"
        >
          {t("title")}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.category} variants={item}>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {t(tech.category)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {tech.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <div className="relative h-8 w-8">
                        <Image
                          fill
                          src={item.icon || "/placeholder.svg"}
                          alt={item.name}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-center">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
