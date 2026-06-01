import { motion } from "framer-motion";

interface VillaComparisonItem {
  name: string;
  size: string;
  beds: number;
  pool: boolean;
  butler: boolean;
  sea: boolean;
  from: number;
}

interface ComparisonTableProps {
  villas: VillaComparisonItem[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export function ComparisonTable({
  villas,
  eyebrow = "At a Glance",
  title
}: ComparisonTableProps) {
  return (
    <section className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary uppercase tracking-widest text-xs mb-3">{eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {title || (
              <>
                Villa <span className="text-primary italic">Comparison</span>
              </>
            )}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[580px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-xs uppercase tracking-widest text-muted-foreground font-normal">Villa</th>
                <th className="py-4 px-3 text-xs uppercase tracking-widest text-muted-foreground font-normal text-center">Size</th>
                <th className="py-4 px-3 text-xs uppercase tracking-widest text-muted-foreground font-normal text-center">Beds</th>
                <th className="py-4 px-3 text-xs uppercase tracking-widest text-muted-foreground font-normal text-center">Pool</th>
                <th className="py-4 px-3 text-xs uppercase tracking-widest text-muted-foreground font-normal text-center">Butler</th>
                <th className="py-4 px-3 text-xs uppercase tracking-widest text-muted-foreground font-normal text-center">Sea View</th>
                <th className="text-right py-4 px-4 text-xs uppercase tracking-widest text-muted-foreground font-normal">From / night</th>
              </tr>
            </thead>
            <tbody>
              {villas.map((v, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="border-b border-border/50 hover:bg-card/60 transition-colors"
                >
                  <td className="py-4 px-4 font-serif text-lg text-foreground">{v.name}</td>
                  <td className="py-4 px-3 text-center text-sm text-muted-foreground">{v.size} sq ft</td>
                  <td className="py-4 px-3 text-center text-sm text-muted-foreground">{v.beds}</td>
                  <td className="py-4 px-3 text-center">
                    {v.pool ? <span className="text-primary font-medium">✓</span> : <span className="text-muted-foreground/30">—</span>}
                  </td>
                  <td className="py-4 px-3 text-center">
                    {v.butler ? <span className="text-primary font-medium">✓</span> : <span className="text-muted-foreground/30">—</span>}
                  </td>
                  <td className="py-4 px-3 text-center">
                    {v.sea ? <span className="text-primary font-medium">✓</span> : <span className="text-muted-foreground/30">—</span>}
                  </td>
                  <td className="py-4 px-4 text-right font-serif text-primary text-lg">
                    ${v.from.toLocaleString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
