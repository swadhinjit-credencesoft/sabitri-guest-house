"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/resortData";

export function RoomsGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
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
            <img src={room.image} alt={room.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="glass p-5 md:p-7 rounded-xl">
                <h3 className="font-serif text-2xl md:text-3xl mb-1 text-foreground">{room.name}</h3>
                {/* <span className="text-xs tracking-wider uppercase text-primary">From ₹{room.price.toLocaleString()} / night</span> */}
                <AnimatePresence>
                  {expandedId === room.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-3">{room.description}</p>
                      <div className="flex gap-4 mb-5 text-xs text-muted-foreground uppercase tracking-wider">
                        <span>{room.size}</span><span>&bull;</span><span>{room.guests}</span>
                      </div>
                      <a href={`https://bookone.io/Sabitri-Guest-House?bookingEngine=true&roomType=${room.id}`} target="_blank" rel="noopener noreferrer" className="w-full">
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
  );
}
