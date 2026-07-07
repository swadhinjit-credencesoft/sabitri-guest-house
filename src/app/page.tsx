"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { stats, testimonials } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { EditorialSplit } from "@/components/layout/EditorialSplit";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { AwardsTicker } from "@/components/home/AwardsTicker";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { GalleryMosaic } from "@/components/home/GalleryMosaic";
import { SpiritualComfortSection } from "@/components/home/SpiritualComfortSection";
import { SpaWellnessSection } from "@/components/home/SpaWellnessSection";
import { ExperiencesTeaser } from "@/components/home/ExperiencesTeaser";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { ReviewJsonLd } from "@/components/home/ReviewJsonLd";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-x-hidden">

      <ReviewJsonLd
        testimonials={testimonials}
        itemReviewedName="Sabitri Guest House"
        itemReviewedUrl="https://sabitriguesthouse.in"
      />

      <CinematicHero
        bgImage="/IMG-20260517-WA0000(1).jpg.avif"
        altText="Sabitri Guest House exterior near Jagannath Temple Puri"
        eyebrow=""
        title={
          <>
            Comfortable Stay<br />Near Shree <span className="text-amber-400 italic">Jagannath Temple</span>
          </>
        }
        subtitle=""
        titleClass="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl"
        align="bottom-left"
        priority={true}
        ctas={
          <>
            <Link href="/rooms">
              <Button
                className="rounded-full px-10 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20 w-48 sm:w-auto"
                data-testid="button-explore-rooms"
              >
                Explore Rooms
              </Button>
            </Link>
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full px-10 py-6 border-white/40 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm w-48 sm:w-auto"
                data-testid="button-discover"
              >
                Book Now
              </Button>
            </a>
          </>
        }
      />

      <AwardsTicker />

      <PhilosophySection />

      <StatsGrid stats={stats} layout="divided" theme="stone-dark" />

      <EditorialSplit
        imageSrc="/room4 (1).avif"
        imageAlt="Deluxe AC Room"
        eyebrow="Signature Accommodation"
        title={
          <>
            The Deluxe AC <span className="text-amber-400 italic">Room</span>
          </>
        }
        description="Spacious and fully air-conditioned, our Deluxe Room is designed with comfort in mind. Features a comfortable king-size bed, a large attached bathroom with geyser, high-speed WiFi, and a flat-screen TV — perfect for couples and small families."
        features={["250 sq ft", "Air Conditioned", "Attached Bathroom", "High-Speed WiFi"]}
        cta={
          <Link href="/rooms">
            <Button
              className="w-full sm:w-auto rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs"
              data-testid="button-villa-showcase"
            >
              Explore Rooms
            </Button>
          </Link>
        }
        imageSide="left"
        boxed={true}
      />

      <GalleryMosaic />

      <SpiritualComfortSection />

      <SpaWellnessSection />

      <ExperiencesTeaser />

      <TestimonialsGrid testimonials={testimonials} />

      <FinalCTASection />

    </motion.div>
  );
}
