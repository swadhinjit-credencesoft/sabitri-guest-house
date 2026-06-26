"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassWater } from "lucide-react";
import { wines } from "@/data/resortData";

export function RefreshmentsSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-7">
              <GlassWater size={18} className="text-amber-400" />
              <p className="text-amber-400 uppercase tracking-[0.3em] text-xs">Traditional Drinks</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-7">
              Sacred Drinks &amp;<br /><span className="text-amber-400 italic">Local Refreshments</span>
            </h2>
            <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-6">
              Puri is famous not only for its temple food but also for its rich and refreshing traditional drinks. We curate a selection of local specialties served fresh to our guests.
            </p>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              From sacred temple offerings like dry Mahaprasad to refreshing coconut water, sweet lassi, and our special rooftop masala chai, enjoy the authentic taste of Odisha.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full border-amber-400/30 text-amber-400 hover:bg-amber-400/10 px-8 uppercase tracking-widest text-xs" data-testid="button-cellar-tasting">Contact Kitchen</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
            {wines.map((wine, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-stone-800 rounded-xl p-5 md:p-6 hover:border-amber-400/20 transition-colors">
                <p className="text-stone-600 text-xs uppercase tracking-widest mb-1">{wine.region}</p>
                <p className="text-stone-200 font-medium mb-0.5">{wine.label}</p>
                <p className="text-amber-400/70 text-xs italic">{wine.style}</p>
              </motion.div>
            ))}
            <p className="text-stone-700 text-xs text-center pt-2 uppercase tracking-widest">Sourced fresh daily from local vendors on Bada Danda</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
