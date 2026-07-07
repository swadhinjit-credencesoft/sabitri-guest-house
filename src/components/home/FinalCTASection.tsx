"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/about-hero.png" alt="Sabitri Guest House CTA" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center"
      >
        <p className="text-amber-400 uppercase tracking-widest text-xs mb-6">Your Pilgrimage Awaits</p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white mb-12 max-w-4xl mx-auto leading-[0.9] text-shadow-hero">
          Begin Your <span className="text-amber-400 italic">Sabitri</span> Story
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20"
              data-testid="button-cta-book"
            >
              Reserve Now
            </Button>
          </a>
          <Link href="/rooms">
            <Button
              variant="outline"
              className="rounded-full px-12 py-6 border-white/30 text-white bg-white/10 hover:bg-white/20 uppercase tracking-widest text-xs backdrop-blur-sm"
              data-testid="button-cta-rooms"
            >
              View All Rooms
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
