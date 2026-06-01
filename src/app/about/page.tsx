"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Leaf, Users } from "lucide-react";
import { aboutAwards as awards, values, timeline, founders } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TeamGrid } from "@/components/sections/TeamGrid";

export default function About() {
  const conservationRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cY } = useScroll({ target: conservationRef, offset: ["start start", "end start"] });
  const conservationParallax = useTransform(cY, [0, 1], ["0%", "22%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/images/about-hero.png"
        altText="Aurelia Resort Architecture"
        eyebrow="Est. 1998 — Maldives"
        title={
          <>
            Crafted for Those<br />Who Expect<span className="text-amber-400 italic">Everything</span>
          </>
        }
        subtitle=""
        align="left"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-t from-black/90 via-black/40 to-black/15"
      />

      {/* ── Story ── */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 max-w-4xl">
        <div className="space-y-8">
          {[
            "Aurelia was born from a single conviction: that true luxury is not about excess, but about the extraordinary precision of moments. Founded in 1998 by a marine architect and a Maldivian hospitality dynasty, the resort was built over seven years — by hand, with purpose.",
            "Every overwater villa was positioned to capture the exact angle of sunrise. The coral gardens beneath the main jetty were planted personally by our founding team, who still returns each year to tend them. The kitchens were designed around the rhythms of the local fishing community, not the other way around.",
            "Twenty-six years later, Aurelia has welcomed heads of state, Nobel laureates, and newly-weds who honeymooned here and return every anniversary. We have never changed the occupancy limit. We never will.",
          ].map((para, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
              className={i === 0 ? "text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed" : "text-base md:text-lg text-muted-foreground leading-relaxed"}>
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── Marine Conservation ── */}
      <section ref={conservationRef} className="relative h-screen flex items-center overflow-hidden grain-overlay">
        <motion.div style={{ y: conservationParallax }} className="absolute inset-0 z-0">
          <img src="/images/experiences-hero.png" alt="Coral reef conservation" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-xl">
            <div className="flex items-center gap-2 mb-8">
              <Leaf size={16} className="text-emerald-400" />
              <p className="text-emerald-400 uppercase tracking-[0.35em] text-xs">Marine Conservation</p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8 text-shadow-hero">
              The Reef Belongs<br /><span className="text-emerald-400 italic">To All of Us</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-7">
              Since 2009, Aurelia has maintained a full-time marine biologist, a coral nursery, and a reef monitoring program covering 12 hectares of lagoon. Guests are invited — encouraged — to take part.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-9">
              {[
                { v: "18,400", l: "Coral Fragments Planted" },
                { v: "12ha", l: "Reef Under Protection" },
                { v: "100%", l: "Renewable Energy" },
              ].map((s, i) => (
                <div key={i} className="glass-dark rounded-xl p-4 text-center">
                  <div className="font-serif text-xl md:text-2xl text-emerald-400">{s.v}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest">Virtuoso Award — Best Sustainable Luxury Resort 2023</p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-widest text-xs mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our <span className="text-primary italic">Philosophy</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full border border-primary/25 flex items-center justify-center text-primary bg-primary/5">
                  <v.icon size={22} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <TimelineSection
        eyebrow="Our Journey"
        title={<>Twenty-Six Years of <span className="text-primary italic">Excellence</span></>}
        timeline={timeline}
      />

      {/* ── Team ── */}
      <TeamGrid
        eyebrow="The Team"
        title={<>The People <span className="text-amber-400 italic">Behind Aurelia</span></>}
        members={founders}
      />

      {/* ── Awards ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award size={22} className="text-primary" />
            <p className="text-primary uppercase tracking-widest text-xs">Recognition</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Awards &amp; <span className="text-primary italic">Honours</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {awards.map((award, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="glass p-7 rounded-2xl hover:shadow-md transition-shadow border border-primary/10" data-testid={`award-card-${i}`}>
              <p className="text-primary text-xs uppercase tracking-widest mb-2">{award.year}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">{award.name}</p>
              <h4 className="font-serif text-lg text-foreground">{award.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

