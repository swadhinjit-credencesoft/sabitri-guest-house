"use client";
import { motion } from "framer-motion";
import { promises } from "@/data/resortData";

export function ConciergePromiseSection() {
  return (
    <section className="py-16 md:py-20 bg-stone-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-amber-400 uppercase tracking-widest text-xs mb-3">The Sabitri Promise</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">What to Expect <span className="text-amber-400 italic">When You Reach Out</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {promises.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-4 p-7 bg-stone-800/50 border border-stone-700/50 rounded-2xl hover:border-amber-400/20 transition-colors">
              <div className="w-12 h-12 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400">
                <p.icon size={20} />
              </div>
              <h3 className="font-serif text-xl text-stone-100">{p.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
