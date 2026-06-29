import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { SectionLabel } from "@/components/site/shared/SectionLabel";
import { Reveal } from "@/components/site/shared/Reveal";
import { StatPillar } from "@/components/site/Stats/StatPillar";
import { LettermarkJ } from "@/components/site/Logo";
import { STATS, IMAGES } from "@/components/site/data";
import { Sparkles, Wallet, Award } from "lucide-react";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About J Salon Unisex"
        subtitle="A salon where confidence is styled in, not styled on."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        image={IMAGES.stylingRow01}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel>The Story</SectionLabel>
            <h2 className="mt-3 font-display text-4xl text-off-white">
              Born in Anantapur. Built on Craft.
            </h2>
            <p className="mt-6 text-off-white/80 leading-relaxed">
              J Salon Unisex was founded with one simple promise — to make great salon experiences
              affordable for everyone.
            </p>
            <p className="mt-4 text-gray-muted leading-relaxed">
              Today we serve men and women across Anantapur with services that range from quick
              walk-in trims to full bridal packages. Our 4.9-star Google rating from over 1,100
              reviews speaks to the trust our clients place in us.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative flex items-center justify-center min-h-[400px]">
            <img
              src={IMAGES.reception02}
              alt="J Salon reception"
              className="absolute inset-0 w-full h-full object-cover rounded-sm opacity-30"
            />
            <div className="relative">
              <div className="absolute inset-0 -m-12 rounded-full border border-gold/30 animate-rotate-slow" />
              <div className="absolute inset-0 rounded-full bg-gold/15 blur-3xl" />
              <LettermarkJ size={280} className="relative" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Space */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>Our Space</SectionLabel>
          <h2 className="mt-3 font-display text-4xl text-off-white">Step Inside</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[IMAGES.reception01, IMAGES.hairStation01, IMAGES.facialRoom01].map((src, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={src} alt="J Salon interior" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-charcoal py-24 px-6 border-y border-gold/15">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="mt-3 font-display text-4xl text-off-white">
              Three Things We Stand For
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Fashion-Forward", desc: "We stay on top of trends so your look stays current." },
              { icon: Wallet, title: "Affordable", desc: "Luxury salon results at fair prices." },
              { icon: Award, title: "Professional", desc: "Trained stylists, hygienic stations and consistency." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="bg-black-deep border border-gold/20 rounded-sm p-8 h-full text-center hover:border-gold/50 transition-all">
                  <div className="mx-auto h-14 w-14 rounded-sm border border-gold/40 flex items-center justify-center text-gold">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-off-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-gray-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-charcoal py-20 px-6 border-b border-gold/15">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <StatPillar key={s.label} {...s} />
          ))}
        </div>
      </section>

      <CTAStrip heading="Come See Us" subtext="The best way to know J Salon is to step in. We're open seven days a week." />
    </>
  );
}
