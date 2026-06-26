"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { aboutAwards as awards } from "@/data/resortData";

export function AwardsSection() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award size={22} className="text-primary" />
          <p className="text-primary uppercase tracking-widest text-xs">Recognition</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Awards &amp; <span className="text-primary italic">Honours</span></h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {awards.map((award, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="glass p-7 rounded-2xl hover:shadow-md transition-shadow border border-primary/10" data-testid={`award-card-${i}`}>
            <p className="text-primary text-xs uppercase tracking-widest mb-2">{award.year}</p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">{award.name}</p>
            <h4 className="font-serif text-lg text-foreground">{award.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
