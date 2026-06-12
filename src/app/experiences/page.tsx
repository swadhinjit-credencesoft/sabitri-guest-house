"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Waves } from "lucide-react";
import { experiences, steps, seasons, darshantStats } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";

export default function Experiences() {
  const yachtRef = useRef<HTMLDivElement>(null);
  const islandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: yY } = useScroll({ target: yachtRef, offset: ["start start", "end start"] });
  const { scrollYProgress: iY } = useScroll({ target: islandRef, offset: ["start start", "end start"] });
  const yachtParallax = useTransform(yY, [0, 1], ["0%", "22%"]);
  const islandParallax = useTransform(iY, [0, 1], ["0%", "22%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/sabitri13 (1).avif"
        altText="Curated Experiences in Puri"
        eyebrow="Discover Puri &amp; Odisha"
        title={
          <>
            Sacred<br /><span className="text-amber-400 italic">Experiences</span>
          </>
        }
        subtitle="Immerse yourself in devotion, history, culture, and nature"
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      {/* ── Shree Jagannath Temple Darshan ── */}
      <section ref={yachtRef} className="relative h-screen flex items-center overflow-hidden grain-overlay">
        <motion.div style={{ y: yachtParallax }} className="absolute inset-0 z-0">
          <img src="/jagannathmandir3.jpg" alt="Shree Jagannath Temple Darshan" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-xl">
            <div className="flex items-center gap-3 mb-7">
              <Waves size={16} className="text-amber-400" />
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs">Signature Experience</p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-7 text-shadow-hero">
              Shree Jagannath<br /><span className="text-amber-400 italic">Temple Darshan</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-5">
              Located just 200m from the Jagannath Temple, Sabitri Guest House is the perfect base for pilgrims. Witness early morning rituals, participate in holy chants, and receive Lord Jagannath's blessings with ease.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-9">
              {darshantStats.map((s, i) => (
                <div key={i} className="glass-dark rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl text-amber-400">{s.v}</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/contact">
              <Button className="rounded-full px-10 py-5 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg" data-testid="button-yacht">Enquire Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary uppercase tracking-widest text-xs mb-3">Simple by Design</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">How It <span className="text-primary italic">Works</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border" />
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-6 md:p-8 gap-5 relative">
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-primary/25 bg-background flex flex-col items-center justify-center gap-1 shadow-md">
                  <step.icon size={18} className="text-primary" />
                  <span className="text-[9px] uppercase tracking-widest text-primary/55">{step.num}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experiences Grid ── */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-xs mb-3">All Experiences</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Choose Your <span className="text-primary italic">Moment</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08, duration: 0.75 }}
              whileHover={{ y: -6 }} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md" data-testid={`experience-card-${i}`}>
              <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                <div className="glass p-5 rounded-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-1.5 text-primary text-xs uppercase tracking-wider mb-3"><Clock size={11} /><span>{exp.duration}</span></div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 opacity-0 group-hover:opacity-100">{exp.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest" data-testid={`button-enquire-${i}`}>Enquire</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Golden Sands of Puri Beach ── */}
      <section ref={islandRef} className="relative h-[75vh] flex items-center justify-center overflow-hidden grain-overlay">
        <motion.div style={{ y: islandParallax }} className="absolute inset-0 z-0">
          <img src="/puribeachnear.jpg" alt="Scenic Puri Beach Sunset" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-black/65" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-6">Local Coastal Serenity</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-7 text-shadow-hero">
            Puri Golden Beach,<br /><span className="text-amber-400 italic">Minutes Away</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Puri's famous clean and tranquil Golden Beach is located just 1 km from Sabitri Guest House. Take a peaceful walk along the Bay of Bengal shore, watch the fishermen, and browse local seashell market stalls.
          </p>
          <Link href="/contact">
            <Button className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg" data-testid="button-private-island">Plan Your Visit</Button>
          </Link>
        </motion.div>
      </section>

      {/* ── Seasons Strip ── */}
      <section className="py-14 md:py-20 bg-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-amber-400 uppercase tracking-widest text-xs mb-10">Best Time to Visit</motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {seasons.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 md:p-6 bg-stone-800/50 border border-stone-700/50 rounded-xl hover:border-amber-400/20 transition-colors">
                <p className="text-amber-400 font-serif text-xl mb-1">{s.name}</p>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-2">{s.label}</p>
                <p className="text-stone-300 text-sm mb-1">{s.weather}</p>
                <p className="text-stone-600 text-xs">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

