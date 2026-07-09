"use client";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { TempleDarshanSection } from "@/components/experiences/TempleDarshanSection";
import { HowItWorksSection } from "@/components/experiences/HowItWorksSection";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { PuriBeachSection } from "@/components/experiences/PuriBeachSection";
import { SeasonsStrip } from "@/components/experiences/SeasonsStrip";

export default function Experiences() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <section className="relative">
        <div className="absolute top-20 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <PageBreadcrumb light items={[{ name: "Home", href: "/" }, { name: "Experiences" }]} />
        </div>
        <CinematicHero
        bgImage="/sabitri13 (1).avif"
        altText="Curated Experiences in Puri"
        eyebrow="Discover Puri &amp; Odisha"
        title={
          <>
            Things to Do<br /><span className="text-amber-400 italic">in Puri</span>
          </>
        }
        subtitle="Temple darshan, beach walks, Konark day trips & Chilika Lake — all from your guest house near Jagannath Temple"
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />
      </section>

      <TempleDarshanSection />

      <HowItWorksSection />

      <ExperiencesGrid />

      <PuriBeachSection />

      <SeasonsStrip />
    </motion.div>
  );
}
