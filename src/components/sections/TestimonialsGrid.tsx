import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialItem {
  quote: string;
  guest: string;
  origin: string;
  stars: number;
}

interface TestimonialsGridProps {
  testimonials: TestimonialItem[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export function TestimonialsGrid({
  testimonials,
  eyebrow = "Guest Stories",
  title
}: TestimonialsGridProps) {
  return (
    <section className="py-20 md:py-28 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full border border-amber-400/20" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full border border-amber-400/20" />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 uppercase tracking-widest text-xs mb-4">{eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            {title || (
              <>
                Voices of <span className="text-amber-400 italic">Aurelia</span>
              </>
            )}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8 flex flex-col gap-5 hover:border-amber-400/20 transition-colors"
              data-testid={`testimonial-card-${i}`}
            >
              <Quote size={28} className="text-amber-400/50" />
              <p className="font-serif text-lg md:text-xl text-stone-200 italic leading-relaxed flex-grow">
                {t.quote}
              </p>
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm font-medium">{t.guest}</p>
                <p className="text-stone-600 text-xs uppercase tracking-wider mt-1">{t.origin}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
