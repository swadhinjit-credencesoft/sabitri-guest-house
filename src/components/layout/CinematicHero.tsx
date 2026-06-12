import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ChevronDown } from "lucide-react";

interface CinematicHeroProps {
  bgImage: string;
  altText?: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  ctas?: React.ReactNode;
  scrollIndicator?: boolean;
  align?: "center" | "left" | "bottom-left";
  overlayGradient?: string;
  heightClass?: string;
}

export function CinematicHero({
  bgImage,
  altText = "Resort view",
  eyebrow,
  title,
  subtitle,
  ctas,
  scrollIndicator = true,
  align = "center",
  overlayGradient = "bg-gradient-to-b from-black/45 via-black/25 to-black/85",
  heightClass = "relative h-screen min-h-[640px] flex flex-col overflow-hidden grain-overlay"
}: CinematicHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const isVideo = useMemo(() => /\.(mp4|webm|mov|ogg)$/i.test(bgImage), [bgImage]);

  // Adjust flex alignment classes based on the prop
  let alignmentClasses = "items-center justify-center text-center pt-24 pb-16";
  if (align === "left") {
    alignmentClasses = "items-start justify-center text-left pt-24 pb-16";
  } else if (align === "bottom-left") {
    alignmentClasses = "items-start justify-end text-left pb-20 md:pb-28";
  }

  return (
    <section ref={heroRef} className={heightClass}>
      {/* Background parallax image */}
      <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
        {isVideo ? (
          <video
            src={bgImage}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
          />
        ) : (
          <img
            src={bgImage}
            alt={altText}
            className="w-full h-full object-cover scale-110"
          />
        )}
        <div className={`absolute inset-0 ${overlayGradient}`} />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className={`relative z-10 px-6 max-w-5xl mx-auto w-full h-full flex flex-col ${alignmentClasses}`}
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : "justify-start"}`}
        >
          {align === "center" && <div className="w-10 h-px bg-amber-400/60" />}
          {align !== "center" && <div className="w-8 h-px bg-amber-400/60" />}
          <p className="text-amber-400 uppercase text-xs tracking-[0.4em] font-medium leading-none">
            {eyebrow}
          </p>
          {align === "center" && <div className="w-10 h-px bg-amber-400/60" />}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.88] tracking-tight mb-8 text-shadow-hero"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="text-white/60 uppercase tracking-[0.25em] text-xs max-w-md mb-10"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {ctas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className={`flex flex-col sm:flex-row items-center gap-4 w-full ${align === "center" ? "justify-center" : "justify-start"}`}
          >
            {ctas}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {/* {scrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: align === "bottom-left" ? 0.45 : 1 }}
          transition={{ delay: 2.2 }}
          className={`absolute bottom-8 z-10 flex flex-col items-center gap-2 ${
            align === "bottom-left" ? "right-12" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {align === "center" && <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="text-amber-400"
          >
            {align === "center" ? (
              <ChevronDown size={18} className="text-white/40" />
            ) : (
              <div className="w-px h-16 bg-gradient-to-b from-amber-400/70 to-transparent" />
            )}
          </motion.div>
        </motion.div>
      )} */}
    </section>
  );
}
