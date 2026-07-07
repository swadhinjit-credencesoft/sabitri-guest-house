"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function RoomSanctuarySection() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-5">Pilgrim Sanctuary</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-7">
            A Sanctuary of<br />Comfort &amp; <span className="text-primary italic">Peace</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            At Sabitri Guest House, our rooms are designed with one goal: providing a clean, spacious, and quiet environment to relax after a long day of travel, pilgrimage, or beach walking.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Every room is equipped with comfortable bedding, fresh linen, attached modern bathrooms, and standard ventilation. Our dedicated housekeeping team ensures high standards of cleanliness for all guests.
          </p>
          <Link href="/about">
            <Button variant="ghost" className="text-primary hover:text-primary/80 uppercase tracking-widest text-xs gap-2 px-0" data-testid="link-architecture">
              Our Story <ArrowRight size={13} />
            </Button>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <img src="/room2 (1).avif" alt="Deluxe AC Room interior at Sabitri Guest House" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-3 pt-8">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img src="/sabitri5 (1).avif" alt="Sabitri Guest House room corridor" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
              <img src="/sabitri6 (1).avif" alt="Sabitri Guest House exterior and garden" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
