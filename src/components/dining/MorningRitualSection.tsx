"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sunrise } from "lucide-react";
import { morningItems } from "@/data/resortData";

export function MorningRitualSection() {
  const morningRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mY } = useScroll({ target: morningRef, offset: ["start start", "end start"] });
  const morningParallax = useTransform(mY, [0, 1], ["0%", "22%"]);

  return (
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
  );
}
