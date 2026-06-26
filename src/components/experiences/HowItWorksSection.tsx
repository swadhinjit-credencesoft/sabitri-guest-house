"use client";
import { motion } from "framer-motion";
import { steps } from "@/data/resortData";

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-card/40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-xs mb-3">Simple by Design</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">How It <span className="text-primary italic">Works</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border" />
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-6 md:p-8 gap-5 relative">
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-primary/25 bg-background flex flex-col items-center justify-center gap-1 shadow-md">
                <step.icon size={18} className="text-primary" />
                <span className="text-[9px] uppercase tracking-widest text-primary/55">{step.num}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
