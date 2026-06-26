"use client";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/resortData";

export function GalleryMosaic() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="text-primary uppercase tracking-widest text-xs mb-3">As Seen Through Our Lens</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
          Life at <span className="text-primary italic">Sabitri</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[70vw] md:h-[50vw] max-h-[640px]">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.7 }}
            className={`${img.span} relative overflow-hidden rounded-xl group cursor-pointer`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
