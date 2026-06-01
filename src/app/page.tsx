"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { stats, awards, testimonials, galleryImages } from "@/data/resortData";

import { CinematicHero } from "@/components/layout/CinematicHero";
import { EditorialSplit } from "@/components/layout/EditorialSplit";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { GSAPStaggerReveal } from "@/components/ui/gsap-reveal";

export default function Home() {
  const spaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: spaScrollY } = useScroll({ target: spaRef, offset: ["start start", "end start"] });
  const spaY = useTransform(spaScrollY, [0, 1], ["0%", "20%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-x-hidden">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/images/home-hero.png"
        altText="Aurelia Resort at golden hour"
        eyebrow="Aurelia Resort & Spa — Maldives"
        title={
          <>
            Where Time<br />Dissolves<br />
            <span className="text-amber-400 italic">Into Luxury</span>
          </>
        }
        subtitle="An exclusive sanctuary at the edge of the world"
        ctas={
          <>
            <Link href="/rooms">
              <Button
                className="rounded-full px-10 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20 w-48 sm:w-auto"
                data-testid="button-explore-rooms"
              >
                Explore Villas
              </Button>
            </Link>
            <Link href="/experiences">
              <Button
                variant="outline"
                className="rounded-full px-10 py-6 border-white/40 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm w-48 sm:w-auto"
                data-testid="button-discover"
              >
                Discover More
              </Button>
            </Link>
          </>
        }
      />

      {/* ── Booking Widget ── */}
      {/* <BookingWidget /> */}

      {/* ── Awards Ticker ── */}
      <section className="py-10 md:py-14 border-y border-border/50 overflow-hidden mt-14 bg-card/40">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
            <span key={i} className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {award}<span className="ml-16 text-primary/25">◆</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Philosophy Editorial ── */}
      <section className="py-24 md:py-36 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <GSAPStaggerReveal className="relative max-w-5xl mx-auto" selector=".gsap-item">
          <div className="section-divider gsap-item" />
          <p className="text-primary uppercase tracking-[0.35em] text-xs mb-10 gsap-item">Our Belief</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-10 gsap-item">
            True luxury is not the<br />
            <span className="text-primary italic">accumulation of things.</span><br />
            It is the precision of moments.
          </h2>
          <div className="section-divider gsap-item" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-10 leading-relaxed gsap-item">
            For 26 years, Aurelia has curated experiences that cannot be purchased elsewhere — only felt, remembered, and returned to. Every sunrise we witness from our jetty is proof that the world still holds wonder.
          </p>
        </GSAPStaggerReveal>
      </section>

      {/* ── Stats Grid ── */}
      <StatsGrid stats={stats} layout="divided" theme="stone-dark" />

      {/* ── Villa Showcase (editorial split) ── */}
      <EditorialSplit
        imageSrc="/images/home-hero.png"
        imageAlt="Overwater Villa"
        eyebrow="Signature Accommodation"
        title={
          <>
            The Overwater <span className="text-amber-400 italic">Villa</span>
          </>
        }
        description="Suspended above the turquoise lagoon. Glass floor panels reveal the ocean below. A private infinity plunge pool extends to the horizon. Wake to the sound of nothing but the sea."
        features={["1,200 sq ft", "Private Pool", "Butler Service", "Ocean Access"]}
        cta={
          <Link href="/rooms">
            <Button
              className="w-full sm:w-auto rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs"
              data-testid="button-villa-showcase"
            >
              Explore Villas
            </Button>
          </Link>
        }
        imageSide="left"
        boxed={true}
      />

      {/* ── Gallery Mosaic ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-primary uppercase tracking-widest text-xs mb-3">As Seen Through Our Lens</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Life at <span className="text-primary italic">Aurelia</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[70vw] md:h-[50vw] max-h-[640px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7 }}
              className={`${img.span} relative overflow-hidden rounded-xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Dining Teaser (cinematic full-bleed) ── */}
      <section className="relative h-[85vh] flex items-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dining-saltwater.png"
            alt="Saltwater dining at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-6">Three Dining Concepts</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8 text-shadow-hero">
              Dining As<br /><span className="text-amber-400 italic">Theatre</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg mb-10 leading-relaxed">
              Beachfront seafood. Fire-roasted jungle cuisine. A rooftop champagne bar under the stars.
            </p>
            <Link href="/dining">
              <Button
                className="rounded-full px-10 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg"
                data-testid="button-explore-dining"
              >
                Explore Dining
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Spa & Wellness Cinematic ── */}
      <section ref={spaRef} className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
        <motion.div style={{ y: spaY }} className="absolute inset-0 z-0">
          <img
            src="/images/rooms-hero.png"
            alt="Aurelia Spa & Wellness"
            className="w-full h-full object-cover scale-115"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        </motion.div>
        <GSAPStaggerReveal
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          selector=".gsap-item"
        >
          <div className="flex items-center justify-center gap-3 mb-8 gsap-item">
            <div className="w-8 h-px bg-amber-400/50" />
            <Sparkles size={14} className="text-amber-400" />
            <div className="w-8 h-px bg-amber-400/50" />
          </div>
          <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-7 gsap-item">Aurelia Spa & Wellness</p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8 text-shadow-hero gsap-item">
            Surrender to the<br /><span className="text-amber-400 italic">Art of Stillness</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed gsap-item">
            63 bespoke treatments. Ancient Maldivian rituals. Open-air pavilions suspended above the lagoon. Our spa biologist personalises every journey.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12 gsap-item">
            {[{ v: "63", l: "Treatments" }, { v: "4", l: "Pavilions" }, { v: "∞", l: "Ocean Views" }].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-amber-400">{s.v}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="gsap-item">
            <Link href="/experiences">
              <Button
                variant="outline"
                className="rounded-full px-10 py-6 border-white/30 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm"
                data-testid="button-spa"
              >
                Discover Wellness
              </Button>
            </Link>
          </div>
        </GSAPStaggerReveal>
      </section>

      {/* ── Experiences Teaser ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <GSAPStaggerReveal selector=".gsap-item" className="w-full">
            <p className="text-primary uppercase tracking-widest text-xs mb-4 gsap-item">Beyond the Villa</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 gsap-item">
              Curated <span className="text-primary italic">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 gsap-item">
              Sunrise yoga on the reef. Private yacht charters at dusk. Coral restoration dives. Helicopter tours over the atolls. Every moment engineered to astonish.
            </p>
            <div className="gsap-item">
              <Link href="/experiences">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-5 border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-widest text-xs gap-2"
                  data-testid="button-view-experiences"
                >
                  View All Experiences <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </GSAPStaggerReveal>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/experiences-hero.png"
              alt="Ocean experiences at Aurelia"
              className="w-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 glass-dark rounded-xl px-5 py-3">
              <p className="text-amber-400 text-xs uppercase tracking-widest">From</p>
              <p className="text-white font-serif text-2xl">$180 <span className="text-white/50 text-sm font-sans">/ person</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <TestimonialsGrid testimonials={testimonials} />

      {/* ── Final CTA ── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-hero.png" alt="Aurelia CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center"
        >
          <p className="text-amber-400 uppercase tracking-widest text-xs mb-6">Your Escape Awaits</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white mb-12 max-w-4xl mx-auto leading-[0.9] text-shadow-hero">
            Begin Your <span className="text-amber-400 italic">Aurelia</span> Story
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20"
                data-testid="button-cta-book"
              >
                Reserve Now
              </Button>
            </Link>
            <Link href="/rooms">
              <Button
                variant="outline"
                className="rounded-full px-12 py-6 border-white/30 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm"
                data-testid="button-cta-rooms"
              >
                View All Villas
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
