"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SpiritualComfortSection() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden grain-overlay">
      <div className="absolute inset-0 z-0">
        <img
          src="/sabitri10 (1).avif"
          alt="Peaceful stay near Jagannath Temple in Puri"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8 text-shadow-hero">
            Stay in<br />
            <span className="text-amber-400 italic">Spiritual Comfort</span>
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-10 leading-relaxed">
            Experience a peaceful stay near Shri Jagannath Temple with clean rooms,
            warm Odia hospitality, pure vegetarian meals, and a serene atmosphere
            designed for pilgrims and families seeking comfort in Puri.
          </p>
          <Link href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true">
            <Button
              className="rounded-full px-10 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg"
              data-testid="button-book-now"
            >
              Book Your Stay
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
