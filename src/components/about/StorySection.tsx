"use client";
import { motion } from "framer-motion";
import { storyParagraphs } from "@/data/resortData";

export function StorySection() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 max-w-4xl">
      <div className="space-y-8">
        {storyParagraphs.map((para, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
            className={i === 0 ? "text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed" : "text-base md:text-lg text-muted-foreground leading-relaxed"}>
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
