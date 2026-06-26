"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function BookCTASection() {
  return (
    <section className="py-20 md:py-24 container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Ready to <span className="text-primary italic">Reserve</span>?</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">Our reservation team is available 24/7. Let us find the perfect room for your stay.</p>
        <a href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true" target="_blank" rel="noopener noreferrer">
          <Button className="rounded-full px-12 py-5 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs" data-testid="button-rooms-book">Book Now</Button>
        </a>
      </motion.div>
    </section>
  );
}
