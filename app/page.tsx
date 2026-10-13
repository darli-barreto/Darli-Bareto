import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main id="inicio" className="bg-(--canvas)">
      <Hero />
      <SelectedWork />
      <Reveal><AboutSection /></Reveal>
      <Reveal><CapabilitiesSection /></Reveal>
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><ImpactSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <SiteFooter />
    </main>
  );
}
