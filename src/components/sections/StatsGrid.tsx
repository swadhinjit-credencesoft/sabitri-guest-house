import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  note?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  layout?: "divided" | "grid" | "boxed";
  theme?: "stone-dark" | "stone-light" | "emerald-dark" | "stone-card" | "glass-dark";
  eyebrow?: string;
  title?: React.ReactNode;
}

export function StatsGrid({
  stats,
  layout = "divided",
  theme = "stone-dark",
  eyebrow,
  title
}: StatsGridProps) {
  // Determine backgrounds and text colors based on theme
  let bgClass = "bg-stone-900";
  let valueColor = "text-amber-400";
  let labelColor = "text-stone-500";
  let divideClass = "divide-stone-700/50";
  let borderClass = "border-stone-700/50";

  if (theme === "stone-light") {
    bgClass = "bg-stone-100";
    valueColor = "text-amber-600";
    labelColor = "text-stone-600";
    divideClass = "divide-stone-200";
    borderClass = "border-stone-200";
  } else if (theme === "emerald-dark") {
    bgClass = "bg-stone-900"; // keep standard container bg but color numbers green
    valueColor = "text-emerald-400";
    labelColor = "text-white/40";
    divideClass = "divide-stone-800";
    borderClass = "border-stone-800";
  } else if (theme === "stone-card") {
    bgClass = "bg-card/40 border-y border-border/50";
    valueColor = "text-primary";
    labelColor = "text-muted-foreground";
    divideClass = "divide-border/50";
    borderClass = "border-border/50";
  } else if (theme === "glass-dark") {
    bgClass = "bg-transparent";
    valueColor = "text-amber-400";
    labelColor = "text-white/40";
    divideClass = "divide-white/10";
    borderClass = "border-white/10";
  }

  // ── Layout 1: Divided Row ──
  if (layout === "divided") {
    return (
      <section className={`py-14 md:py-20 ${bgClass}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-0 divide-x ${divideClass}`}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-8 md:py-10 px-4"
              >
                <div className={`font-serif text-4xl md:text-5xl lg:text-6xl ${valueColor} mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-xs uppercase tracking-widest ${labelColor}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Layout 2: Boxed Blocks (e.g. for custom sections) ──
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={`p-5 md:p-6 rounded-xl hover:border-amber-400/20 border transition-all ${
            theme === "glass-dark" 
              ? "glass-dark" 
              : "glass shadow-sm hover:shadow-md"
          } ${borderClass}`}
        >
          <div className={`font-serif text-3xl md:text-4xl ${valueColor}`}>{stat.value}</div>
          <div className="text-foreground text-sm font-medium mt-1">{stat.label}</div>
          {stat.note && <div className={`text-xs mt-1 ${labelColor}`}>{stat.note}</div>}
        </motion.div>
      ))}
    </div>
  );
}
