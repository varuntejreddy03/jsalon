import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "./data";
import heroVideo from "@/assets/jsalon-hero.mp4";

import type { Variants } from "framer-motion";

const stagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function VideoHero() {
  return (
    <>
      {/* DESKTOP — full viewport video with overlay */}
      <section className="relative h-[100svh] w-full overflow-hidden hidden sm:flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.reception01}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(249,238,226,0.45) 0%, rgba(249,238,226,0.25) 50%, rgba(249,238,226,0.55) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div custom={0} initial="hidden" animate="show" variants={stagger}>
            <span className="font-accent text-xs text-gold tracking-wider uppercase">
              Anantapur's Premier Salon
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-ink text-balance leading-[1.1]"
          >
            Where <em className="text-gold not-italic italic">Style</em> Meets Confidence
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-4 text-ink/70 text-base md:text-lg max-w-lg mx-auto font-body leading-relaxed"
          >
            Fashion-forward cuts, color &amp; care for men and women.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="show" variants={stagger} className="mt-9">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-gold-light hover:scale-105"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gold"
        >
          <ChevronDown className="h-5 w-5 animate-chevron-bounce" />
        </motion.div>
      </section>

      {/* MOBILE — video with overlay, same as desktop but sized for mobile */}
      <section className="sm:hidden relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.reception01}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(249,238,226,0.45) 0%, rgba(249,238,226,0.25) 50%, rgba(249,238,226,0.55) 100%)" }} />

        <div className="relative z-10 text-center px-5">
          <span className="font-accent text-[11px] text-gold tracking-wider uppercase">
            Anantapur's Premier Salon
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink leading-[1.1]">
            Where <em className="text-gold not-italic italic">Style</em> Meets Confidence
          </h1>
          <p className="mt-3 text-ink/70 text-sm max-w-xs mx-auto leading-relaxed">
            Fashion-forward cuts, color &amp; care for men and women.
          </p>
          <div className="mt-7">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3 text-sm font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gold">
          <ChevronDown className="h-5 w-5 animate-chevron-bounce" />
        </div>
      </section>
    </>
  );
}
