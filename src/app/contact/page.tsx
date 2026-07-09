"use client";
import { motion } from "framer-motion";
import { faqs } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConciergePromiseSection } from "@/components/contact/ConciergePromiseSection";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection";
import { FaqJsonLd } from "@/components/contact/FaqJsonLd";

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <FaqJsonLd faqs={faqs} />

      <section className="relative">
        <div className="absolute top-20 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <PageBreadcrumb light items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
        </div>
        <CinematicHero
        bgImage="/sabitri5 (1).avif"
        altText="Begin your journey"
        eyebrow="We Are Here For You"
        title={
          <>
            Contact Your<br /><span className="text-amber-400 italic">Puri Guest House</span>
          </>
        }
        subtitle="Available 24/7 — call, WhatsApp, or email to book your budget stay near Jagannath Temple"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/45 via-black/25 to-black/85"
      />
      </section>

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
