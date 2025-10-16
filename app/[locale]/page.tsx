import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
