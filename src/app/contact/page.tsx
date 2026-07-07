"use client";
import { motion } from "framer-motion";
import { faqs } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConciergePromiseSection } from "@/components/contact/ConciergePromiseSection";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection";
import { FaqJsonLd } from "@/components/contact/FaqJsonLd";

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <FaqJsonLd faqs={faqs} />

      <CinematicHero
        bgImage="/sabitri5 (1).avif"
        altText="Begin your journey"
        eyebrow="We Are Here For You"
        title={
          <>
            Begin Your<br /><span className="text-amber-400 italic">Journey</span>
          </>
        }
        subtitle="Available 24 hours a day, seven days a week, in every time zone"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/45 via-black/25 to-black/85"
      />

      <ConciergePromiseSection />

      <ContactDetailsSection />

      <FaqSection
        faqs={faqs}
        eyebrow="Common Questions"
        title={<>Frequently <span className="text-primary italic">Asked</span></>}
      />
    </motion.div>
  );
}
