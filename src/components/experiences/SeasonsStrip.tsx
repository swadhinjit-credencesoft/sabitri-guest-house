"use client";
import { motion } from "framer-motion";
import { seasons } from "@/data/resortData";

export function SeasonsStrip() {
  return (
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
  );
}
