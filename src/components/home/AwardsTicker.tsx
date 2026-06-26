"use client";
import { motion } from "framer-motion";
import { awards } from "@/data/resortData";

export function AwardsTicker() {
  return (
    <section className="py-10 md:py-14 border-y border-border/50 overflow-hidden mt-14 bg-card/40">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap"
      >
        {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {award}<span className="ml-16 text-primary/25">◆</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
