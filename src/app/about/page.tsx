"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { timeline, founders } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { StorySection } from "@/components/about/StorySection";
import { PilgrimHospitalitySection } from "@/components/about/PilgrimHospitalitySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AwardsSection } from "@/components/about/AwardsSection";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <section className="relative">
        <div className="absolute top-20 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <PageBreadcrumb light items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        </div>
        <CinematicHero
        bgImage="/sabitri3 (1).avif"
        altText="Sabitri Guest House lobby"
        eyebrow="Est. 2008 — Puri, Odisha"
        title={
          <>
            Family Guest House<br />in Puri <span className="text-amber-400 italic">Since 2008</span>
          </>
        }
        subtitle="A budget-friendly family stay just 200m from Shree Jagannath Temple"
        align="left"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-t from-black/90 via-black/40 to-black/15"
      />
      </section>

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

      <section className="bg-stone-900 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-amber-400 uppercase tracking-widest text-xs font-medium">Book Direct & Save</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-4">
            Experience the Best Budget <span className="text-amber-400 italic">Guest House in Puri</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-8">
            Located just 200m from Jagannath Temple &bull; 1km from Puri Beach &bull; Rooms from ₹2,000/night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="rounded-full px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-sm font-semibold transition-colors shadow-lg shadow-amber-500/30">
              Book Your Stay
            </Link>
            <Link href="/rooms" className="rounded-full px-8 py-4 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors">
              View Rooms
            </Link>
            <Link href="/contact" className="rounded-full px-8 py-4 border border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
