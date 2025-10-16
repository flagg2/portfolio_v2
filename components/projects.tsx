"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects } from "@/lib/data";
import Image from "next/image";

type Project = (typeof projects)[0];

type Category = "all" | "web" | "mobile" | "internal";

export function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects: Project[] =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white bg-grid"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-balance"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
          >
            {t("all")}
          </Button>
          <Button
            variant={activeFilter === "web" ? "default" : "outline"}
            onClick={() => setActiveFilter("web")}
          >
            {t("webApps")}
          </Button>
          <Button
            variant={activeFilter === "mobile" ? "default" : "outline"}
            onClick={() => setActiveFilter("mobile")}
          >
            {t("mobileApps")}
          </Button>
          <Button
            variant={activeFilter === "internal" ? "default" : "outline"}
            onClick={() => setActiveFilter("internal")}
          >
            {t("internalSystems")}
          </Button>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow pt-0">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={t(`items.${project.id}.title`)}
                      className="w-full h-64 object-cover object-top"
                    />
                    {project.illustrative && (
                      <span className="absolute bottom-2 right-2 rounded-md bg-background/80 px-2 py-1 text-xs text-foreground backdrop-blur-sm">
                        {t("illustrative")}
                      </span>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t(`items.${project.id}.title`)}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {t(`items.${project.id}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            {t("code")}
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button className="shadow-xs" size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t("demo")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild>
            <a href="#contact">{t("letsBuildSomethingSimilar")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
