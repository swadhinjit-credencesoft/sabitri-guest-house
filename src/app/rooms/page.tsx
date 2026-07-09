"use client";
import { motion } from "framer-motion";
import { villas } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { RoomSanctuarySection } from "@/components/rooms/RoomSanctuarySection";
import { RoomsGrid } from "@/components/rooms/RoomsGrid";
import { AmenitiesSection } from "@/components/rooms/AmenitiesSection";
import { BookCTASection } from "@/components/rooms/BookCTASection";

export default function Rooms() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <CinematicHero
        bgImage="/sabitri5 (1).avif"
        altText="Sabitri Guest House rooms"
        eyebrow="Comfortable Lodgings"
        title={
          <>
            AC Rooms in<br /><span className="text-amber-400 italic">Puri</span>
          </>
        }
        subtitle="Budget-friendly Deluxe AC room near Jagannath Temple — ideal for pilgrims and families"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      <RoomSanctuarySection />

      <RoomsGrid />

      <ComparisonTable villas={villas} />

      <AmenitiesSection />

      <BookCTASection />
    </motion.div>
  );
}
