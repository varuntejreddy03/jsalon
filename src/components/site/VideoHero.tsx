import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Particles } from "./Particles";

import type { Variants } from "framer-motion";

const stagger: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.18, duration: 0.8, ease: "easeOut" },
  }),
};

export function VideoHero() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[640px] w-full overflow-hidden flex items-center justify-center pt-24 pb-16 sm:py-0">
      {/* Background — gradient fallback (video can be added later) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-black-deep via-charcoal to-black-deep"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(184,134,11,0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(212,168,67,0.18), transparent 55%)",
        }}
      />
      {/* When a video asset is ready, drop it here:
          <video autoPlay muted loop playsInline poster={poster} className="absolute inset-0 w-full h-full object-cover">
            <source src={mp4} type="video/mp4" />
          </video>
      */}
      <div aria-hidden className="absolute inset-0 bg-black-deep/55" />
      <Particles count={36} className="opacity-70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div custom={0} initial="hidden" animate="show" variants={stagger}>
          <span className="font-accent text-xs sm:text-sm text-gold tracking-[0.35em] uppercase">
            Anantapur's Premier Salon
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-4 sm:mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-off-white text-balance leading-[1.08]"
        >
          Where <em className="text-gold not-italic font-display italic">Style</em> Meets Confidence
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-5 sm:mt-6 text-off-white/85 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          Fashion-forward cuts, color &amp; care for men and women. Book your transformation today.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
        >
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-base font-medium text-black-deep transition-all hover:bg-gold-light hover:scale-105 shadow-gold"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-sm border border-off-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-off-white hover:border-gold hover:text-gold transition-colors"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-12 flex justify-center"
        >
          <div className="h-px bg-gold animate-grow-width" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold animate-chevron-bounce">
        <ChevronDown className="h-7 w-7" />
      </div>
    </section>
  );
}
