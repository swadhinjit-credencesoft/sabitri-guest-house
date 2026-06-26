"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { restaurants } from "@/data/resortData";

export function RestaurantSections() {
  return (
    <div className="flex flex-col gap-0">
      {restaurants.map((venue) => (
        <section key={venue.id} className="relative min-h-[90vh] flex items-center overflow-hidden grain-overlay">
          <div className="absolute inset-0 z-0">
            <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
            {venue.align === "right"
              ? <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/10" />
              : <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
            }
          </div>
          <div className={`container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex ${venue.align === "right" ? "justify-end" : "justify-start"}`}>
            <motion.div initial={{ opacity: 0, x: venue.align === "right" ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
              className="glass p-8 md:p-12 max-w-md lg:max-w-xl rounded-2xl my-14">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-1">{venue.name}</h2>
              <h3 className="text-muted-foreground tracking-widest uppercase text-xs mb-6">{venue.concept}</h3>
              <p className="text-foreground/75 leading-relaxed mb-6 text-base md:text-lg">{venue.description}</p>
              <div className="flex items-center gap-2 mb-8 text-xs text-primary uppercase tracking-wider">
                <Clock size={12} /><span>{venue.hours}</span>
              </div>
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest text-xs" data-testid={`button-reserve-${venue.id}`}>
                  Reserve a Table
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
