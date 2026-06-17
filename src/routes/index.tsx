import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { VideoHero } from "@/components/site/VideoHero";
import { ServicesGrid } from "@/components/site/Services/ServicesGrid";
import { StatPillar } from "@/components/site/Stats/StatPillar";
import { ReviewCard } from "@/components/site/Reviews/ReviewCard";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { SectionLabel } from "@/components/site/shared/SectionLabel";
import { Reveal } from "@/components/site/shared/Reveal";
import { LettermarkJ } from "@/components/site/Logo";
import { REVIEWS, STATS, GALLERY } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J Salon Unisex — Anantapur's Premier Hair, Skin & Nail Salon" },
      {
        name: "description",
        content:
          "Fashion-forward salon in Anantapur for men & women. Hair, color, skincare, nails, bridal — 4.9★ with 1,168+ Google reviews. Open 7 days, 8 AM–9 PM.",
      },
      { property: "og:title", content: "J Salon Unisex — Anantapur's Premier Salon" },
      {
        property: "og:description",
        content: "Cuts, color, skincare, nails & bridal — 4.9★ on Google.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <VideoHero />

      {/* SERVICES PREVIEW */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>Crafted for Men & Women</SectionLabel>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-off-white">
            Our Services
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" />
        </Reveal>
        <ServicesGrid limit={3} />
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-widest uppercase border-b border-gold/40 pb-1 hover:gap-3 hover:border-gold transition-all"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* BRAND QUOTE */}
      <section className="bg-gradient-to-r from-black-deep via-charcoal to-black-deep py-24 px-6">
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <Quote className="absolute -top-4 -left-2 md:-left-12 h-20 w-20 text-gold/20" />
          <p className="font-display italic text-2xl md:text-3xl text-off-white leading-relaxed text-balance">
            J is a promising, fashion-forward brand that will make you feel comfortably stylish
            and enhance your salon experience.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-gold" />
          <p className="mt-4 font-accent text-xs text-gold tracking-widest">— J SALON UNISEX</p>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="bg-charcoal py-20 px-6 border-y border-gold/15">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <StatPillar key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-off-white">
              Our Pride is Our Professionals
            </h2>
            <p className="mt-6 text-off-white/80 leading-relaxed">
              At J Salon, we excel in providing services to both men and women at the most
              affordable rates — services that resonate with your personality.
            </p>
            <p className="mt-4 text-gray-muted leading-relaxed">
              Our hair products are exceptional. Our nail products are non-toxic. Our skin
              products are miraculous. And our professionals? They are our greatest pride.
            </p>
            <ul className="mt-6 space-y-2.5 text-off-white">
              {[
                "Fashion-forward techniques",
                "Non-toxic nail products",
                "Miraculous skincare range",
                "Affordable luxury pricing",
              ].map((u) => (
                <li key={u} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-sm">{u}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-gold font-accent text-sm tracking-widest uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative flex items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-hidden">
            <div className="relative w-[260px] sm:w-[320px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-rotate-slow" />
              <div
                className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-gold/15 animate-rotate-slow"
                style={{ animationDuration: "40s", animationDirection: "reverse" }}
              />
              <div className="absolute inset-4 rounded-full bg-gold/10 blur-3xl" />
              <LettermarkJ size={220} className="relative" />
              <div className="absolute -top-2 right-0 sm:-right-6 bg-black-deep border border-gold/40 rounded-sm px-3 py-1.5 text-[10px] sm:text-xs font-accent text-gold tracking-widest">
                EST. ANANTAPUR
              </div>
              <div className="absolute -bottom-2 left-0 sm:-left-6 bg-black-deep border border-gold/40 rounded-sm px-3 py-1.5 text-[10px] sm:text-xs font-body text-off-white">
                <span className="text-gold">4.9 ★</span> Google
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <SectionLabel>Before & After</SectionLabel>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-off-white">
              Transformations
            </h2>
            <div className="mx-auto mt-5 h-px w-20 bg-gold" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.slice(0, 4).map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 font-accent text-[10px] text-gold tracking-widest">
                    {g.category}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-widest uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
            >
              See All Transformations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>1,168+ Five-Star Reviews</SectionLabel>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-off-white">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} className="flex">
              <div className="w-full">
                <ReviewCard review={r} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm tracking-widest uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
          >
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
