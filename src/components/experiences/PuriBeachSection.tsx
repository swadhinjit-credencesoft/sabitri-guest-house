"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PuriBeachSection() {
  const islandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: iY } = useScroll({ target: islandRef, offset: ["start start", "end start"] });
  const islandParallax = useTransform(iY, [0, 1], ["0%", "22%"]);

  return (
    <section ref={islandRef} className="relative h-[75vh] flex items-center justify-center overflow-hidden grain-overlay">
      <motion.div style={{ y: islandParallax }} className="absolute inset-0 z-0">
        <img src="/puribeachnear.jpg" alt="Scenic Puri Beach Sunset" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-black/65" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-6">Local Coastal Serenity</p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-7 text-shadow-hero">
          Puri Golden Beach,<br /><span className="text-amber-400 italic">Minutes Away</span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Puri's famous clean and tranquil Golden Beach is located just 1 km from Sabitri Guest House. Take a peaceful walk along the Bay of Bengal shore, watch the fishermen, and browse local seashell market stalls.
        </p>
        <Link href="/contact">
          <Button className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg" data-testid="button-private-island">Plan Your Visit</Button>
        </Link>
      </motion.div>
    </section>
  );
}
