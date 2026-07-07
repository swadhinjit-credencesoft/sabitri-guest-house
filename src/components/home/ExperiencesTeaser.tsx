"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GSAPStaggerReveal } from "@/components/ui/gsap-reveal";

export function ExperiencesTeaser() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <GSAPStaggerReveal selector=".gsap-item" className="w-full">
          <p className="text-primary uppercase tracking-widest text-xs mb-4 gsap-item">Spiritual & Scenic Tours</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 gsap-item">
            Curated <span className="text-primary italic">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 gsap-item">
            Early morning Jagannath Temple Darshan guide. Scenic beachside strolls on Golden Beach. Excursions to Konark Sun Temple and Chilika Lake. Experience Odisha at its spiritual and cultural best.
          </p>
          <div className="gsap-item">
            <Link href="/experiences">
              <Button
                variant="outline"
                className="rounded-full px-8 py-5 border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-widest text-xs gap-2"
                data-testid="button-view-experiences"
              >
                View All Experiences <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </GSAPStaggerReveal>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="/rathayatra1.png"
            alt="Rath Yatra festival near Jagannath Temple Puri"
            loading="lazy"
            className="w-full object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
