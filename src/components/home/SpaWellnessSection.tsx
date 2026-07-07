"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { spaStats } from "@/data/resortData";
import { GSAPStaggerReveal } from "@/components/ui/gsap-reveal";

export function SpaWellnessSection() {
  const spaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: spaScrollY } = useScroll({ target: spaRef, offset: ["start start", "end start"] });
  const spaY = useTransform(spaScrollY, [0, 1], ["0%", "20%"]);

  return (
    <section ref={spaRef} className="relative h-screen flex items-center justify-center overflow-hidden grain-overlay">
      <motion.div style={{ y: spaY }} className="absolute inset-0 z-0">
        <img
          src="/seabeach.jpg"
          alt="Puri beach near Sabitri Guest House"
          loading="lazy"
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
        <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-7 gsap-item">Devotional Rest & Comfort</p>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8 text-shadow-hero gsap-item">
          Find Peace in the<br /><span className="text-amber-400 italic">Holy Dham</span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed gsap-item">
          Unwind in our clean and peaceful guest rooms. Whether returning from early morning temple rituals or an evening walk at Puri beach, our guest house provides the quiet comfort you need.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12 gsap-item">
          {spaStats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-amber-400">{s.v}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="gsap-item">
          <Link href="/rooms">
            <Button
              variant="outline"
              className="rounded-full px-10 py-6 border-white/30 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm"
              data-testid="button-spa"
            >
              View Rooms
            </Button>
          </Link>
        </div>
      </GSAPStaggerReveal>
    </section>
  );
}
