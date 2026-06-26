"use client";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { TempleDarshanSection } from "@/components/experiences/TempleDarshanSection";
import { HowItWorksSection } from "@/components/experiences/HowItWorksSection";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { PuriBeachSection } from "@/components/experiences/PuriBeachSection";
import { SeasonsStrip } from "@/components/experiences/SeasonsStrip";

export default function Experiences() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <CinematicHero
        bgImage="/sabitri13 (1).avif"
        altText="Curated Experiences in Puri"
        eyebrow="Discover Puri &amp; Odisha"
        title={
          <>
            Sacred<br /><span className="text-amber-400 italic">Experiences</span>
          </>
        }
        subtitle="Immerse yourself in devotion, history, culture, and nature"
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      <TempleDarshanSection />

      <HowItWorksSection />

      <ExperiencesGrid />

      <PuriBeachSection />

      <SeasonsStrip />
    </motion.div>
  );
}
