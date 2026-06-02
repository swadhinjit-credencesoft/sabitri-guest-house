"use client";
import { motion } from "framer-motion";
import { contactDetails, promises, faqs } from "@/data/resortData";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">

      {/* ── Cinematic Hero ── */}
      <CinematicHero
        bgImage="/images/dining-saltwater.png"
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

      {/* ── Contact Details + Form ── */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">

          {/* ── Left: Details Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Get In Touch</h2>
            {contactDetails.map((detail, i) => (
              <motion.a
                key={i}
                href={detail.href}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 border border-transparent transition-all hover:shadow-sm"
                data-testid={`contact-detail-${i}`}
              >
                <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <detail.icon size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">{detail.label}</p>
                  <p className="text-foreground text-sm">{detail.value}</p>
                </div>
              </motion.a>
            ))}
            <div className="glass rounded-2xl p-7 mt-2 border border-primary/8 shadow-sm">
              <p className="font-serif text-xl text-foreground italic mb-2 leading-relaxed">
                "The moment you enquire,<br />you become our guest."
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">— Sabitri Hospitality Creed</p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
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

