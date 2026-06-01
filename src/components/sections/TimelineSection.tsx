import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface TimelineSectionProps {
  timeline: TimelineItem[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export function TimelineSection({
  timeline,
  eyebrow = "Our Journey",
  title
}: TimelineSectionProps) {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-xs mb-4">{eyebrow}</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
          {title || (
            <>
              Twenty-Six Years of <span className="text-primary italic">Excellence</span>
            </>
          )}
        </h2>
      </motion.div>
      <div className="relative max-w-3xl mx-auto">
        {/* Central line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
        <div className="flex flex-col gap-8 md:gap-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="relative flex gap-5 md:gap-0"
            >
              {/* Mobile circle indicator */}
              <div className="flex-shrink-0 w-12 flex flex-col items-center md:hidden">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 ring-4 ring-background shadow-sm" />
              </div>
              <div className="md:hidden flex-1 pb-2">
                <div className="font-serif text-2xl text-primary mb-1">{item.year}</div>
                <h4 className="font-medium text-foreground mb-1.5">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Desktop left side */}
              <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? "justify-end pr-10" : "pr-10"}`}>
                {i % 2 === 0 && (
                  <div className="text-right max-w-xs">
                    <div className="font-serif text-3xl text-primary mb-1">{item.year}</div>
                    <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>

              {/* Desktop circle indicator */}
              <div className="hidden md:flex flex-shrink-0 w-0 items-start justify-center relative">
                <div className="absolute top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 shadow-sm" />
              </div>

              {/* Desktop right side */}
              <div className={`hidden md:flex flex-1 ${i % 2 !== 0 ? "pl-10" : "pl-10"}`}>
                {i % 2 !== 0 && (
                  <div className="max-w-xs">
                    <div className="font-serif text-3xl text-primary mb-1">{item.year}</div>
                    <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
