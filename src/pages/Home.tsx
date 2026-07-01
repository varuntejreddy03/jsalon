import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { VideoHero } from "@/components/site/VideoHero";
import { ServicesGrid } from "@/components/site/Services/ServicesGrid";
import { StatPillar } from "@/components/site/Stats/StatPillar";
import { ReviewCard } from "@/components/site/Reviews/ReviewCard";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { SectionLabel } from "@/components/site/shared/SectionLabel";
import { ScrollReveal, StaggerChildren } from "@/components/site/shared/ScrollReveal";
import { ImageSlider } from "@/components/site/Gallery/ImageSlider";
import { LettermarkJ } from "@/components/site/Logo";
import { REVIEWS, STATS, IMAGES } from "@/components/site/data";

export function HomePage() {
  const galleryImages = [
    { src: IMAGES.reception01, alt: "Reception" },
    { src: IMAGES.hairStation01, alt: "Hair station" },
    { src: IMAGES.facialRoom01, alt: "Facial room" },
    { src: IMAGES.barberChair01, alt: "Barber chair" },
    { src: IMAGES.nailBar01, alt: "Nail bar" },
    { src: IMAGES.stylingRow01, alt: "Styling row" },
  ];

  return (
    <>
      <VideoHero />

      {/* SERVICES PREVIEW — cream bg */}
      <section className="relative py-16 sm:py-24 px-6 max-w-7xl mx-auto bg-cream">
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <SectionLabel>Crafted for Men &amp; Women</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-ink">
            Our Services
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" />
        </ScrollReveal>
        <ServicesGrid limit={3} />
        <ScrollReveal animation="fade-up" delay={0.3} className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-wider uppercase border-b border-gold/40 pb-1 hover:gap-3 hover:border-gold transition-all"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* BRAND QUOTE */}
      <section className="bg-cream py-16 sm:py-24 px-6 border-y border-hairline">
        <ScrollReveal animation="scale" className="relative max-w-3xl mx-auto text-center">
          <Quote className="absolute -top-4 -left-2 md:-left-12 h-20 w-20 text-gold/20" />
          <p className="font-display italic text-2xl md:text-3xl text-ink leading-relaxed text-balance">
            J is a promising, fashion-forward brand that will make you feel comfortably stylish
            and enhance your salon experience.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-gold" />
          <p className="mt-4 font-accent text-xs text-gold tracking-wider">&mdash; J SALON UNISEX</p>
        </ScrollReveal>
      </section>

      {/* STATS */}
      <section className="bg-cream py-14 sm:py-20 px-6 border-b border-hairline">
        <StaggerChildren className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10" stagger={0.15}>
          {STATS.map((s) => (
            <div key={s.label}>
              <StatPillar {...s} />
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* ABOUT TEASER — cream bg */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto bg-cream">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-left">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-ink">
              Our Pride is Our Professionals
            </h2>
            <p className="mt-6 text-ink/80 leading-relaxed">
              At J Salon, we excel in providing services to both men and women at the most
              affordable rates &mdash; services that resonate with your personality.
            </p>
            <p className="mt-4 text-gray-muted leading-relaxed">
              Our hair products are exceptional. Our nail products are non-toxic. Our skin
              products are miraculous. And our professionals? They are our greatest pride.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-gold font-accent text-sm tracking-wider uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={0.2}>
            <div className="relative min-h-[340px] sm:min-h-[400px] rounded-lg border border-hairline-strong overflow-hidden">
              <img
                src={IMAGES.reception01}
                alt="J Salon reception"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-white/30 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <LettermarkJ size={200} className="relative" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY — auto-sliding */}
      <section className="bg-cream py-16 sm:py-24 px-6 border-y border-hairline">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-10">
            <SectionLabel>Our Space</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-ink">
              Step Inside J Salon
            </h2>
            <div className="mx-auto mt-5 h-px w-20 bg-gold" />
          </ScrollReveal>

          <ImageSlider images={galleryImages} />

          <ScrollReveal animation="fade-up" className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-wider uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* REVIEWS TEASER — cream bg */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto bg-cream">
        <ScrollReveal animation="fade-up" className="text-center mb-14">
          <SectionLabel>1,168+ Five-Star Reviews</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-ink">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" />
        </ScrollReveal>
        <StaggerChildren className="grid md:grid-cols-3 gap-6" stagger={0.2}>
          {REVIEWS.slice(0, 3).map((r) => (
            <div key={r.name} className="w-full">
              <ReviewCard review={r} />
            </div>
          ))}
        </StaggerChildren>
        <ScrollReveal animation="fade-up" delay={0.4} className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-wider uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
          >
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>

      <CTAStrip bgImage={IMAGES.stylingRow01} />
    </>
  );
}
