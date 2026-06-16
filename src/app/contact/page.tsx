"use client";
import { motion } from "framer-motion";
import { contactDetails, promises, faqs } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/sabitri5 (1).avif"
        altText="Begin your journey"
        eyebrow="We Are Here For You"
        title={
          <>
            Begin Your<br /><span className="text-amber-400 italic">Journey</span>
          </>
        }
        subtitle="Available 24 hours a day, seven days a week, in every time zone"
        scrollIndicator={true}
        overlayGradient="bg-gradient-to-b from-black/45 via-black/25 to-black/85"
      />

      {/* ── Concierge Promise ── */}
      <section className="py-16 md:py-20 bg-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-amber-400 uppercase tracking-widest text-xs mb-3">The Sabitri Promise</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              What to Expect <span className="text-amber-400 italic">When You Reach Out</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {promises.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4 p-7 bg-stone-800/50 border border-stone-700/50 rounded-2xl hover:border-amber-400/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400">
                  <p.icon size={20} />
                </div>
                <h3 className="font-serif text-xl text-stone-100">{p.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Details ── */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">Connect With Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Get In <span className="text-primary italic">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {contactDetails.map((detail, i) => (
            <motion.a
              key={i}
              href={detail.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 md:p-7 transition-all hover:border-primary/30 hover:shadow-md hover:bg-card/80"
              data-testid={`contact-detail-${i}`}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:scale-105 transition-all">
                  <detail.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{detail.label}</p>
                  <p className="text-foreground font-medium">{detail.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 to-transparent p-7 md:p-8">
            <div className="absolute top-4 right-4 text-primary/10">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 21c3 0 7-1 7-8 0-3.5-2-5-2-5s1-3 4-4c.5-.2 1.5-.5 3-.5 1.5 0 4 .5 4 3s-1 6-4 9c-2 2-5 4-8 5.5"/></svg>
            </div>
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "The moment you enquire,<br />you become our guest."
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-4">— Sabitri Hospitality Creed</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-7 md:p-8">
            <div className="absolute top-4 right-4 text-amber-500/15">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <h3 className="font-serif text-xl text-amber-600 mb-2 font-semibold">Book Instantly</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Skip the enquiry form and book directly via our online reservation system.
            </p>
            <a
              href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xs uppercase tracking-widest rounded-xl py-5 shadow-lg shadow-amber-500/15">
                Use Booking Engine
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection
        faqs={faqs}
        eyebrow="Common Questions"
        title={<>Frequently <span className="text-primary italic">Asked</span></>}
      />
    </motion.div>
  );
}

