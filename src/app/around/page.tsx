"use client";
import { motion } from "framer-motion";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { TransportSection } from "@/components/around/TransportSection";
import { DiscoveriesSection } from "@/components/around/DiscoveriesSection";
import { LocationCards } from "@/components/around/LocationCards";
import { GuidedExcursionsSection } from "@/components/around/GuidedExcursionsSection";

export default function AroundUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      <section className="relative">
        <div className="absolute top-20 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <PageBreadcrumb light items={[{ name: "Home", href: "/" }, { name: "Around Us" }]} />
        </div>

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "VideoObject",
                "name": "Around Sabitri Guest House - Puri",
                "description": "Explore the spiritual landscape around Sabitri Guest House in Puri, Odisha. Located in the heart of Puri's holy district near Jagannath Temple.",
                "thumbnailUrl": "https://sabitriguesthouse.in/jagannathmandir3.jpg",
                "contentUrl": "https://bookonelocal.in/cdn/aoundusvideo.mp4",
                "embedUrl": "https://bookonelocal.in/cdn/aoundusvideo.mp4",
                "uploadDate": "2026-01-01",
                "duration": "PT30S",
              },
              {
                "@type": "TouristAttraction",
                "name": "Shree Jagannath Temple Puri",
                "description": "One of the most sacred Hindu temples, home to Lord Jagannath. Built in the 12th century, located 200m from Sabitri Guest House.",
                "url": "https://sabitriguesthouse.in/around",
                "image": "https://sabitriguesthouse.in/jagannathmandir3.jpg",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Puri",
                    "addressRegion": "Odisha",
                    "addressCountry": "IN"
                  }
                },
                "nearby": [
                  { "@type": "Place", "name": "Puri Beach", "distance": "1 km" },
                  { "@type": "Place", "name": "Konark Sun Temple", "distance": "35 km" }
                ]
              },
              {
                "@type": "TouristAttraction",
                "name": "Puri Golden Beach",
                "description": "Beautiful golden sand beach on the Bay of Bengal, located 1 km from Sabitri Guest House. Known for sunrise views and spiritual significance.",
                "url": "https://sabitriguesthouse.in/puri-beach-guide",
                "image": "https://sabitriguesthouse.in/puribeach.jpg",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Puri",
                    "addressRegion": "Odisha",
                    "addressCountry": "IN"
                  }
                }
              },
              {
                "@type": "TouristAttraction",
                "name": "Konark Sun Temple",
                "description": "13th-century UNESCO World Heritage Sun Temple, designed as a colossal stone chariot. Located 35 km from Puri.",
                "url": "https://sabitriguesthouse.in/blog/konark-sun-temple-guide",
                "image": "https://sabitriguesthouse.in/konarktemple.jpg",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Konark",
                    "addressRegion": "Odisha",
                    "addressCountry": "IN"
                  }
                }
              },
              {
                "@type": "TouristAttraction",
                "name": "Chilika Lake",
                "description": "Asia's largest brackish water lagoon, famous for Irrawaddy dolphins and migratory birds. Located 50 km from Puri.",
                "url": "https://sabitriguesthouse.in/blog/chilika-lake-travel-guide",
                "image": "https://sabitriguesthouse.in/chilikalake.jpg",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Satpada",
                    "addressRegion": "Odisha",
                    "addressCountry": "IN"
                  }
                }
              }
            ]
          }),
        }}
      />

      <CinematicHero
        bgImage="/jagannathmandir3.jpg"
        altText="Sabitri Guest House located in the heart of Puri near Jagannath Temple"
        eyebrow="Land of Lord Jagannath"
        title={
          <>
            Places to Visit<br /><span className="text-amber-400 italic">in Puri</span>
          </>
        }
        subtitle="Jagannath Temple (200m), Puri Beach (1km), Konark (35km), Chilika (50km) — explore from our budget guest house"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />
      </section>

      <TransportSection />

      <DiscoveriesSection />

      <LocationCards />

      <GuidedExcursionsSection />
    </motion.div>
  );
}
