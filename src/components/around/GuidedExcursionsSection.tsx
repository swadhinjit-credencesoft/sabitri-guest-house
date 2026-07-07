"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GuidedExcursionsSection() {
  const islandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: iY } = useScroll({ target: islandRef, offset: ["start start", "end start"] });
  const islandParallax = useTransform(iY, [0, 1], ["0%", "22%"]);

  return (
    <section ref={islandRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden grain-overlay">
      <motion.div style={{ y: islandParallax }} className="absolute inset-0 z-0">
        <img src="/images/dining-saltwater.png" alt="Guided excursions from Sabitri Guest House to Konark and Chilika" loading="lazy" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-amber-400 uppercase tracking-[0.35em] text-xs mb-6">Guided Excursions</p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-7 text-shadow-hero">
          Explore Sacred Lands &amp;<br /><span className="text-amber-400 italic">Scenic Wetlands</span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Our reception desk can arrange reliable auto-rickshaws or private taxis for guided day tours to Konark Sun Temple, Raghurajpur heritage crafts village, or dolphin spotting at Chilika Lake.
        </p>
        <Link href="/contact">
          <Button className="rounded-full px-12 py-6 bg-amber-500 text-white hover:bg-amber-600 uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20"
            data-testid="button-around-enquire">Plan Your Journey</Button>
        </Link>
      </motion.div>
    </section>
  );
}
