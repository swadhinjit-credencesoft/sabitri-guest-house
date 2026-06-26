"use client";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { MorningRitualSection } from "@/components/dining/MorningRitualSection";
import { RestaurantSections } from "@/components/dining/RestaurantSections";
import { RefreshmentsSection } from "@/components/dining/RefreshmentsSection";
import { KitchenSpotlightSection } from "@/components/dining/KitchenSpotlightSection";

export default function Dining() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <CinematicHero
        bgImage="/images/dining-saltwater.png"
        altText="Sabitri Guest House dining"
        eyebrow="Pure Vegetarian Kitchen"
        title={
          <>
            Sacred<br /><span className="text-amber-400 italic">Flavours</span>
          </>
        }
        subtitle="Simple, authentic home-style thalis and Lord Jagannath's Mahaprasad"
        overlayGradient="bg-gradient-to-b from-black/45 via-black/25 to-black/85"
      />

      <MorningRitualSection />

      <RestaurantSections />

      <RefreshmentsSection />

      <KitchenSpotlightSection />
    </motion.div>
  );
}
