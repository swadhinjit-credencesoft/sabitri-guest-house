"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/resortData";
import { amenities } from "@/data/rooms";
import { Wifi, Droplets, Sparkles, Moon, ChevronDown, Star } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Hot & Cold Water": <Droplets size={16} />,
  "Daily Housekeeping": <Sparkles size={16} />,
  "Free WiFi": <Wifi size={16} />,
  "24-Hour Reception": <Moon size={16} />,
};

export function RoomsGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-stone-100" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block text-amber-600 uppercase tracking-[0.25em] text-xs font-medium mb-4">
            Choose Your Sanctuary
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900">
            Our <span className="text-amber-500 italic">Residences</span>
          </h2>
          <p className="text-stone-400 text-base md:text-lg mt-4 max-w-lg mx-auto">
            Thoughtfully designed rooms for rest, reflection, and renewal — just steps from Jagannath Temple
          </p>
        </motion.div>

        {rooms.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-xl shadow-stone-900/10">
              <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                      {room.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Star size={14} className="text-amber-400" />
                        4.7&starf; Rated
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{room.size}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{room.guests}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-amber-300 text-xs uppercase tracking-widest font-medium">From</p>
                      <p className="text-white font-bold text-3xl md:text-4xl">₹{room.price}</p>
                      <p className="text-white/50 text-xs">/ night</p>
                    </div>
                    <a
                      href="https://bookone.io/Sabitri-Guest-House?bookingEngine=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="rounded-full px-6 md:px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white uppercase tracking-widest text-xs font-semibold shadow-lg shadow-amber-500/30">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 max-w-4xl mx-auto">
              <motion.div
                initial={false}
                animate={{ height: expanded ? "auto" : "72px" }}
                className="overflow-hidden relative"
              >
                <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6">
                  {room.description}
                </p>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {amenities.slice(0, 4).map((a, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200">
                            <span className="text-amber-600 shrink-0">{amenityIcons[a.label] || <Star size={16} />}</span>
                            <span className="text-stone-700 text-xs md:text-sm font-medium">{a.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/booking">
                          <Button className="rounded-full px-8 py-5 bg-amber-600 text-white hover:bg-amber-700 uppercase tracking-widest text-xs w-full sm:w-auto">
                            Book Direct — Best Rate Guaranteed
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="rounded-full px-8 py-5 border-stone-300 text-stone-700 hover:bg-stone-50 uppercase tracking-widest text-xs w-full sm:w-auto">
                            Inquire Now
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!expanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                )}
              </motion.div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 flex items-center gap-2 text-amber-600 hover:text-amber-700 text-xs uppercase tracking-widest font-medium transition-colors mx-auto"
              >
                {expanded ? "Show Less" : "View Full Details"}
                <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
