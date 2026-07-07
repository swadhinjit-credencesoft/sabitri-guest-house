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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Around Sabitri Guest House - Puri",
            "description": "Explore the spiritual landscape around Sabitri Guest House in Puri, Odisha. Located in the heart of Puri's holy district near Jagannath Temple.",
            "thumbnailUrl": "https://sabitriguesthouse.in/jagannathmandir3.jpg",
            "contentUrl": "https://bookonelocal.in/cdn/aoundusvideo.mp4",
            "embedUrl": "https://bookonelocal.in/cdn/aoundusvideo.mp4",
            "uploadDate": "2026-01-01",
            "duration": "PT30S",
          }),
        }}
      />

      <CinematicHero
        bgImage="https://bookonelocal.in/cdn/aoundusvideo.mp4"
        altText="Sabitri Guest House located in the heart of Puri near Jagannath Temple"
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
