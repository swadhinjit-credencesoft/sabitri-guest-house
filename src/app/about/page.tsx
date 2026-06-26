"use client";
import { motion } from "framer-motion";
import { timeline, founders } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { StorySection } from "@/components/about/StorySection";
import { PilgrimHospitalitySection } from "@/components/about/PilgrimHospitalitySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AwardsSection } from "@/components/about/AwardsSection";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <CinematicHero
        bgImage="/sabitri3 (1).avif"
        altText="Sabitri Guest House lobby"
        eyebrow="Est. 2008 — Puri, Odisha"
        title={
          <>
            Crafted for Comfort<br />and Sacred<span className="text-amber-400 italic">Peace</span>
          </>
        }
        subtitle=""
        align="left"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-t from-black/90 via-black/40 to-black/15"
      />

      <StorySection />

      <PilgrimHospitalitySection />

      <ValuesSection />

      <TimelineSection
        eyebrow="Our Journey"
        title={<>Twenty-Six Years of <span className="text-primary italic">Excellence</span></>}
        timeline={timeline}
      />

      {false && <TeamGrid
        eyebrow="The Team"
        title={<>The People <span className="text-amber-400 italic">Behind Sabitri</span></>}
        members={founders}
      />}

      <AwardsSection />
    </motion.div>
  );
}
