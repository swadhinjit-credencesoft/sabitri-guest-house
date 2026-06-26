"use client";
import { motion } from "framer-motion";
import { values } from "@/data/resortData";

export function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase tracking-widest text-xs mb-4">What We Stand For</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our <span className="text-primary italic">Philosophy</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full border border-primary/25 flex items-center justify-center text-primary bg-primary/5">
                <v.icon size={22} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
