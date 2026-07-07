"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";
import { darshantStats } from "@/data/resortData";

export function TempleDarshanSection() {
  const yachtRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: yY } = useScroll({ target: yachtRef, offset: ["start start", "end start"] });
  const yachtParallax = useTransform(yY, [0, 1], ["0%", "22%"]);

  return (
    <section ref={yachtRef} className="relative h-screen flex items-center overflow-hidden grain-overlay">
      <motion.div style={{ y: yachtParallax }} className="absolute inset-0 z-0">
        <img src="/jagannathmandir3.jpg" alt="Shree Jagannath Temple Darshan near Sabitri Guest House" loading="lazy" className="w-full h-full object-cover scale-110" />
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
  );
}
