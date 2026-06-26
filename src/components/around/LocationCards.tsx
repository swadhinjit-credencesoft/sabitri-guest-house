"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { locations, categoryColors } from "@/data/resortData";

export function LocationCards() {
  return (
    <section className="bg-card/40 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase tracking-widest text-xs mb-3">Local Discoveries</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">What Awaits <span className="text-primary italic">Beyond</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {locations.map((loc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08, duration: 0.7 }}
              whileHover={{ y: -4 }} className="glass rounded-2xl overflow-hidden shadow-sm group" data-testid={`location-card-${i}`}>
              <div className="h-1 bg-gradient-to-r from-primary/60 to-transparent" />
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary group-hover:border-primary/40 transition-colors">
                    <loc.icon size={18} />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-3xl text-primary leading-none">{loc.distance}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{loc.unit}</div>
                  </div>
                </div>
                <p className={`text-xs uppercase tracking-widest mb-1.5 ${categoryColors[loc.category] || "text-primary"}`}>{loc.category}</p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{loc.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{loc.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-primary/65 uppercase tracking-wider border-t border-border pt-3">
                  <MapPin size={11} /><span>{loc.travel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
