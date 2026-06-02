import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  img: string;
}

interface TeamGridProps {
  members: TeamMember[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export function TeamGrid({
  members,
  eyebrow = "The Team",
  title
}: TeamGridProps) {
  return (
    <section className="py-16 md:py-24 bg-stone-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={20} className="text-amber-400" />
            <p className="text-amber-400 uppercase tracking-widest text-xs">{eyebrow}</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            {title || (
              <>
                The People <span className="text-amber-400 italic">Behind Sabitri</span>
              </>
            )}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {members.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="overflow-hidden rounded-2xl group"
              data-testid={`founder-card-${i}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="bg-stone-800/70 border border-stone-700/50 border-t-0 rounded-b-2xl p-6">
                <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">{person.role}</p>
                <h3 className="font-serif text-xl text-stone-100 mb-3">{person.name}</h3>
                <p className="font-serif text-stone-400 text-sm italic leading-relaxed">
                  "{person.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
