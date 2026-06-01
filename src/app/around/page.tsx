"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Compass } from "lucide-react";
import { locations, categoryColors, transports, islandHighlights } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";

export default function AroundUs() {
  const islandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: iY } = useScroll({ target: islandRef, offset: ["start start", "end start"] });
  const islandParallax = useTransform(iY, [0, 1], ["0%", "22%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/images/experiences-hero.png"
        altText="The Aurelia Atoll"
        eyebrow="The Aurelia Atoll &amp; Beyond"
        title={
          <>
            Around<br /><span className="text-amber-400 italic">Us</span>
          </>
        }
        subtitle="The resort is a sanctuary — the world beyond is equally extraordinary"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      {/* ── Transport Strip ── */}
      <section className="py-14 md:py-18 bg-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-amber-400 uppercase tracking-widest text-xs mb-10"
          >
            Getting Here from Velana International Airport
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {transports.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-5 md:p-7 bg-stone-800/50 border border-stone-700/50 rounded-xl gap-3 hover:border-amber-400/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400">
                  <t.icon size={20} />
                </div>
                <div>
                  <p className="text-stone-200 font-medium text-sm">{t.type}</p>
                  <p className="text-amber-400 font-serif text-2xl my-0.5">{t.duration}</p>
                  <p className="text-stone-500 text-xs">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Atoll Highlights ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-7">
              <Compass size={16} className="text-primary" />
              <p className="text-primary uppercase tracking-[0.3em] text-xs">The Atoll at a Glance</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-7">
              An Ocean of<br /><span className="text-primary italic">Possibilities</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Aurelia sits at the heart of a 74 sq km atoll — a living, breathing ecosystem of reefs, sandbars, channels, and wildlife sanctuaries. Every direction holds a new discovery.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {islandHighlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass p-4 rounded-xl"
                >
                  <div className="font-serif text-3xl text-primary">{h.value}</div>
                  <p className="text-foreground text-sm font-medium mt-0.5">{h.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">{h.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src="/images/home-hero.png" alt="Aerial atoll view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl px-5 py-4">
              <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="text-white font-serif text-lg">North Malé Atoll, Maldives</p>
              <p className="text-white/50 text-xs mt-0.5">4°12'N 73°31'E</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Location Cards ── */}
      <section className="bg-card/40 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-widest text-xs mb-3">Local Discoveries</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">What Awaits <span className="text-primary italic">Beyond</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl overflow-hidden shadow-sm group"
                data-testid={`location-card-${i}`}
              >
                <div className="h-1 bg-gradient-to-r from-primary/60 to-transparent" />
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary group-hover:border-primary/40 transition-colors">
                      <loc.icon size={18} />
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-3xl text-primary leading-none">{loc.distance}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{loc.unit}</div>
                    </div>
                  </div>
                  <p className={`text-xs uppercase tracking-widest mb-1.5 ${categoryColors[loc.category] || "text-primary"}`}>{loc.category}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{loc.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{loc.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-primary/65 uppercase tracking-wider border-t border-border pt-3">
                    <MapPin size={11} /><span>{loc.travel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Island Discovery ── */}
      <section ref={islandRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden grain-overlay">
        <motion.div style={{ y: islandParallax }} className="absolute inset-0 z-0">
          <img src="/images/dining-saltwater.png" alt="Private island discovery" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-6">Private Island Access</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-7 text-shadow-hero">
            Seven Uninhabited Islands,<br /><span className="text-amber-400 italic">Exclusively Yours</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Our concierge can arrange exclusive half-day or full-day access to nearby uninhabited atolls. Your team, your picnic, your stretch of paradise.
          </p>
          <Link href="/contact">
            <Button
              className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20"
              data-testid="button-around-enquire"
            >
              Plan Your Discovery
            </Button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

