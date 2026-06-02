"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, GlassWater, Sunrise } from "lucide-react";
import { restaurants, morningItems, wines } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";

export default function Dining() {
  const morningRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mY } = useScroll({ target: morningRef, offset: ["start start", "end start"] });
  const morningParallax = useTransform(mY, [0, 1], ["0%", "22%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
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

      {/* ── Morning Ritual ── */}
      <section ref={morningRef} className="relative h-[80vh] flex items-center overflow-hidden grain-overlay">
        <motion.div style={{ y: morningParallax }} className="absolute inset-0 z-0">
          <img src="/images/experiences-hero.png" alt="Morning service in Puri" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="max-w-xl">
            <div className="flex items-center gap-2 mb-7">
              <Sunrise size={16} className="text-amber-400" />
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs">Morning Devotion</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-7 text-shadow-hero">
              Every Day Begins<br />with <span className="text-amber-400 italic">Devotion</span>
            </h2>
            <div className="space-y-5">
              {morningItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-dark rounded-xl p-5">
                  <h4 className="text-amber-300 text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Restaurant Sections ── */}
      <div className="flex flex-col gap-0">
        {restaurants.map((venue) => (
          <section key={venue.id} className="relative min-h-[90vh] flex items-center overflow-hidden grain-overlay">
            <div className="absolute inset-0 z-0">
              <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
              {venue.align === "right"
                ? <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/10" />
                : <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
              }
            </div>
            <div className={`container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex ${venue.align === "right" ? "justify-end" : "justify-start"}`}>
              <motion.div initial={{ opacity: 0, x: venue.align === "right" ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
                className="glass p-8 md:p-12 max-w-md lg:max-w-xl rounded-2xl my-14">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-1">{venue.name}</h2>
                <h3 className="text-muted-foreground tracking-widest uppercase text-xs mb-6">{venue.concept}</h3>
                <p className="text-foreground/75 leading-relaxed mb-6 text-base md:text-lg">{venue.description}</p>
                <div className="flex items-center gap-2 mb-8 text-xs text-primary uppercase tracking-wider">
                  <Clock size={12} /><span>{venue.hours}</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest text-xs" data-testid={`button-reserve-${venue.id}`}>
                    Reserve a Table
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Refreshments & Traditional Drinks ── */}
      <section className="py-20 md:py-28 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-7">
                <GlassWater size={18} className="text-amber-400" />
                <p className="text-amber-400 uppercase tracking-[0.3em] text-xs">Traditional Drinks</p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-7">
                Sacred Drinks &amp;<br /><span className="text-amber-400 italic">Local Refreshments</span>
              </h2>
              <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-6">
                Puri is famous not only for its temple food but also for its rich and refreshing traditional drinks. We curate a selection of local specialties served fresh to our guests.
              </p>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                From sacred temple offerings like dry Mahaprasad to refreshing coconut water, sweet lassi, and our special rooftop masala chai, enjoy the authentic taste of Odisha.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="rounded-full border-amber-400/30 text-amber-400 hover:bg-amber-400/10 px-8 uppercase tracking-widest text-xs" data-testid="button-cellar-tasting">Contact Kitchen</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
              {wines.map((wine, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-stone-800 rounded-xl p-5 md:p-6 hover:border-amber-400/20 transition-colors">
                  <p className="text-stone-600 text-xs uppercase tracking-widest mb-1">{wine.region}</p>
                  <p className="text-stone-200 font-medium mb-0.5">{wine.label}</p>
                  <p className="text-amber-400/70 text-xs italic">{wine.style}</p>
                </motion.div>
              ))}
              <p className="text-stone-700 text-xs text-center pt-2 uppercase tracking-widest">Sourced fresh daily from local vendors on Bada Danda</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Kitchen Spotlight ── */}
      <section className="relative py-28 md:py-36 overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0">
          <img src="/images/dining-saltwater.png" alt="Authentic local cooking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <ChefHat size={17} />
                </div>
                <p className="text-amber-400 uppercase tracking-[0.3em] text-xs">Our Kitchen</p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-7 leading-[0.9] text-shadow-hero">
                Sabitri<br /><span className="text-amber-400 italic">Traditional Kitchen</span>
              </h2>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-7">
                Our kitchen is dedicated to serving simple, pure, and wholesome vegetarian food. We source fresh regional vegetables daily from the local markets and prepare each meal using traditional Odia home methods. Pure vegetarian thalis without onion and garlic can also be prepared on request.
              </p>
              <blockquote className="border-l-2 border-amber-400 pl-6 mb-9">
                <p className="font-serif text-xl md:text-2xl text-white/85 italic leading-relaxed">
                  "Serving wholesome, sacred meals to pilgrims is our highest form of worship."
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-stone-500">
                <span>Traditional Home Methods</span>
                <span className="text-amber-400/30">|</span>
                <span>Pure Vegetarian</span>
                <span className="text-amber-400/30">|</span>
                <span>Fresh Local Sourcing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

