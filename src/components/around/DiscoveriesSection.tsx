"use client";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { islandHighlights } from "@/data/resortData";

export function DiscoveriesSection() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2 mb-7">
            <Compass size={16} className="text-primary" />
            <p className="text-primary uppercase tracking-[0.3em] text-xs">Puri at a Glance</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-7">
            A Pilgrimage of<br /><span className="text-primary italic">Discoveries</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Sabitri Guest House sits at the spiritual core of Puri. Experience a landscape rich with ancient heritage temples, tranquil golden sands, sacred lakes, and artistic heritage craft villages.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {islandHighlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-4 rounded-xl">
                <div className="font-serif text-3xl text-primary">{h.value}</div>
                <p className="text-foreground text-sm font-medium mt-0.5">{h.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{h.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
          <img src="/jagannathmandir3.jpg" alt="Shree Jagannath Temple Puri near Sabitri Guest House" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl px-5 py-4">
            <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Location</p>
            <p className="text-white font-serif text-lg">Puri, Odisha, India</p>
            <p className="text-white/50 text-xs mt-0.5">19.8049° N, 85.8179° E</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
