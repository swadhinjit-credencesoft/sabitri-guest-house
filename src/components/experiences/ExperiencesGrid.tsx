"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { experiences } from "@/data/resortData";

export function ExperiencesGrid() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary uppercase tracking-widest text-xs mb-3">All Experiences</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Choose Your <span className="text-primary italic">Moment</span></h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {experiences.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08, duration: 0.75 }}
            whileHover={{ y: -6 }} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md" data-testid={`experience-card-${i}`}>
            <img src={exp.image} alt={exp.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
              <div className="glass p-5 rounded-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">{exp.title}</h3>
                <div className="flex items-center gap-1.5 text-primary text-xs uppercase tracking-wider mb-3"><Clock size={11} /><span>{exp.duration}</span></div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 opacity-0 group-hover:opacity-100">{exp.description}</p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest" data-testid={`button-enquire-${i}`}>Enquire</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
