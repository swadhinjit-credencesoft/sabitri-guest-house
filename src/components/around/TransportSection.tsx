"use client";
import { motion } from "framer-motion";
import { transports } from "@/data/resortData";

export function TransportSection() {
  return (
    <section className="py-14 md:py-18 bg-stone-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-amber-400 uppercase tracking-widest text-xs mb-10">
          Getting Here: Transportation &amp; Accessibility
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {transports.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-5 md:p-7 bg-stone-800/50 border border-stone-700/50 rounded-xl gap-3 hover:border-amber-400/20 transition-colors">
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
  );
}
