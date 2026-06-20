"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { rooms, amenities, villas } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

export default function Rooms() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/sabitri5 (1).avif"
        altText="Sabitri Guest House rooms"
        eyebrow="Comfortable Lodgings"
        title={
          <>
            Rooms &amp;<br /><span className="text-amber-400 italic">Suites</span>
          </>
        }
        subtitle="24 clean and spacious rooms designed for families and pilgrims"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/40 via-black/20 to-black/85"
      />

      {/* ── Architecture of Retreat ── */}
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
              <img src="/room2 (1).avif" alt="Villa design detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-3 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img src="/sabitri5 (1).avif" alt="Lagoon view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                <img src="/sabitri6 (1).avif" alt="Tropical architecture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Rooms Grid ── */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-xs mb-3">Choose Your Sanctuary</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our <span className="text-primary italic">Residences</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <motion.div key={room.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer shadow-lg" onClick={() => setExpandedId(expandedId === room.id ? null : room.id)}
              data-testid={`room-card-${room.id}`}>
              <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="glass p-5 md:p-7 rounded-xl">
                  <h3 className="font-serif text-2xl md:text-3xl mb-1 text-foreground">{room.name}</h3>
                  <span className="text-xs tracking-wider uppercase text-primary">From ₹{room.price.toLocaleString()} / night</span>
                  <AnimatePresence>
                    {expandedId === room.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-3">{room.description}</p>
                        <div className="flex gap-4 mb-5 text-xs text-muted-foreground uppercase tracking-wider">
                          <span>{room.size}</span><span>&bull;</span><span>{room.guests}</span>
                        </div>
                        <a
                          href={`https://bookone.io/Sabitri-Guest-House?bookingEngine=true&roomType=${room.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest" data-testid={`button-reserve-${room.id}`}>Reserve</Button>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {expandedId !== room.id && (
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mt-4 group-hover:text-primary transition-colors">View Details →</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Villa Comparison Table ── */}
      <ComparisonTable villas={villas} />

      {/* ── Amenities ── */}
      <section className="py-16 md:py-24 bg-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-amber-400 uppercase tracking-widest text-xs mb-4">Every Room Includes</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">Standard <span className="text-amber-400 italic">Amenities</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {amenities.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-3 p-5 md:p-6 bg-stone-800/50 border border-stone-700/50 rounded-xl text-center hover:border-amber-400/25 transition-colors" data-testid={`amenity-${i}`}>
                <div className="w-12 h-12 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400">
                  <a.icon size={20} />
                </div>
                <p className="text-stone-300 text-xs uppercase tracking-wider">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book CTA ── */}
      <section className="py-20 md:py-24 container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Ready to <span className="text-primary italic">Reserve</span>?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">Our reservation team is available 24/7. Let us find the perfect room for your stay.</p>
          <a
            href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full px-12 py-5 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs" data-testid="button-rooms-book">Book Now</Button>
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}

