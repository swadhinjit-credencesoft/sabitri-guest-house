"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";
import { aboutMiniStats } from "@/data/resortData";

export function PilgrimHospitalitySection() {
  const conservationRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cY } = useScroll({ target: conservationRef, offset: ["start start", "end start"] });
  const conservationParallax = useTransform(cY, [0, 1], ["0%", "22%"]);

  return (
    <section ref={conservationRef} className="relative h-screen flex items-center overflow-hidden grain-overlay">
      <motion.div style={{ y: conservationParallax }} className="absolute inset-0 z-0">
        <img src="/rathayatra.jpg" alt="Rath Yatra festival at Jagannath Temple Puri near Sabitri Guest House" loading="lazy" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
      </motion.div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-xl">
          <div className="flex items-center gap-2 mb-8">
            <Leaf size={16} className="text-emerald-400" />
            <p className="text-emerald-400 uppercase tracking-[0.35em] text-xs">Pilgrim Service</p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8 text-shadow-hero">
            Serving You is<br /><span className="text-emerald-400 italic">Our Holy Duty</span>
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed mb-7">
            We treat every traveler as a guest of Lord Jagannath Himself. From early morning tea before darshan to guiding you through temple entry and Rath Yatra festival paths, we are here to support your journey.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-9">
            {aboutMiniStats.map((s, i) => (
              <div key={i} className="glass-dark rounded-xl p-4 text-center">
                <div className="font-serif text-xl md:text-2xl text-emerald-400">{s.v}</div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs uppercase tracking-widest">Recommended Budget Guest House on MakeMyTrip & Goibibo</p>
        </motion.div>
      </div>
    </section>
  );
}
