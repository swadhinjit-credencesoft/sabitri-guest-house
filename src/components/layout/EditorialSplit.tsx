import { motion } from "framer-motion";

interface FeatureItem {
  label: string;
}

interface EditorialSplitProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  features?: string[];
  cta?: React.ReactNode;
  imageSide?: "left" | "right";
  boxed?: boolean;
}

export function EditorialSplit({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  features,
  cta,
  imageSide = "left",
  boxed = true
}: EditorialSplitProps) {
  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: imageSide === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden ${
        boxed ? "" : "rounded-3xl shadow-xl"
      }`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
      />
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden lg:block`} />
    </motion.div>
  );

  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: imageSide === "left" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="bg-stone-900 flex flex-col justify-center p-10 md:p-14 lg:p-16"
    >
      <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
        {title}
      </h2>
      <div className="text-stone-400 text-base md:text-lg leading-relaxed mb-8">
        {description}
      </div>

      {features && features.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-stone-400 text-sm">
              <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>
      )}

      {cta && <div className="w-full sm:w-auto">{cta}</div>}
    </motion.div>
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${
          boxed ? "rounded-3xl shadow-xl" : ""
        }`}>
          {imageSide === "left" ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
