"use client";
import { motion } from "framer-motion";
import { amenities } from "@/data/resortData";

export function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-xs mb-4">Every Room Includes</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">Standard <span className="text-amber-400 italic">Amenities</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 p-5 md:p-6 bg-stone-800/50 border border-stone-700/50 rounded-xl text-center hover:border-amber-400/25 transition-colors" data-testid={`amenity-${i}`}>
              <div className="w-12 h-12 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400">
                <a.icon size={20} />
              </div>
              <p className="text-stone-300 text-xs uppercase tracking-wider">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
