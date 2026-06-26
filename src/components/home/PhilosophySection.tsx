"use client";
import { motion } from "framer-motion";
import { GSAPStaggerReveal } from "@/components/ui/gsap-reveal";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-36 px-4 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <GSAPStaggerReveal className="relative max-w-5xl mx-auto" selector=".gsap-item">
        <div className="section-divider gsap-item" />
        <p className="text-primary uppercase tracking-[0.35em] text-xs mb-10 gsap-item">Our Belief</p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-10 gsap-item">
          Serving pilgrims is<br />
          <span className="text-primary italic">our highest devotion.</span><br />
          Experience true Odia warmth.
        </h2>
        <div className="section-divider gsap-item" />
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-10 leading-relaxed gsap-item">
          For over 15 years, Sabitri Guest House has welcomed devotees and families visiting the holy town of Puri. We offer a clean, peaceful sanctuary near Lord Jagannath holy temple, ensuring your spiritual journey is comfortable and worry-free.
        </p>
      </GSAPStaggerReveal>
    </section>
  );
}
