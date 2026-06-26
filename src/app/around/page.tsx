"use client";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { TransportSection } from "@/components/around/TransportSection";
import { DiscoveriesSection } from "@/components/around/DiscoveriesSection";
import { LocationCards } from "@/components/around/LocationCards";
import { GuidedExcursionsSection } from "@/components/around/GuidedExcursionsSection";

export default function AroundUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <CinematicHero
        bgImage="https://bookonelocal.in/cdn/aoundusvideo.mp4"
        altText="Spiritual landmark of Puri"
        eyebrow="Land of Lord Jagannath"
        title={
          <>
            Around<br /><span className="text-amber-400 italic">Us</span>
          </>
        }
        subtitle="Our guest house is located in the heart of Puri's holy landscape"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      <TransportSection />

      <DiscoveriesSection />

      <LocationCards />

      <GuidedExcursionsSection />
    </motion.div>
  );
}
