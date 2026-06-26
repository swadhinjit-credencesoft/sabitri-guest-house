"use client";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

export function KitchenSpotlightSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden grain-overlay">
      <div className="absolute inset-0 z-0">
        <img src="/images/dining-saltwater.png" alt="Authentic local cooking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <ChefHat size={17} />
              </div>
              <p className="text-amber-400 uppercase tracking-[0.3em] text-xs">Our Kitchen</p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-7 leading-[0.9] text-shadow-hero">
              Sabitri<br /><span className="text-amber-400 italic">Traditional Kitchen</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-7">
              Our kitchen is dedicated to serving simple, pure, and wholesome vegetarian food. We source fresh regional vegetables daily from the local markets and prepare each meal using traditional Odia home methods. Pure vegetarian thalis without onion and garlic can also be prepared on request.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-6 mb-9">
              <p className="font-serif text-xl md:text-2xl text-white/85 italic leading-relaxed">
                "Serving wholesome, sacred meals to pilgrims is our highest form of worship."
              </p>
            </blockquote>
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-stone-500">
              <span>Traditional Home Methods</span>
              <span className="text-amber-400/30">|</span>
              <span>Pure Vegetarian</span>
              <span className="text-amber-400/30">|</span>
              <span>Fresh Local Sourcing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
