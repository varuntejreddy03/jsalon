import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServicesGrid } from "@/components/site/Services/ServicesGrid";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { SectionLabel } from "@/components/site/shared/SectionLabel";
import { Reveal } from "@/components/site/shared/Reveal";
import { ADDITIONAL_SERVICES } from "@/components/site/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — J Salon Unisex Anantapur" },
      {
        name: "description",
        content:
          "Hair cuts & styling, color, skincare, nails, bridal makeup and keratin treatments — all under one roof at J Salon Unisex, Anantapur.",
      },
      { property: "og:title", content: "Services — J Salon Unisex" },
      {
        property: "og:description",
        content: "Cuts, color, skincare, nails, bridal & more at affordable rates.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Salon services crafted for men and women — from everyday cuts to bridal transformations."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-off-white/85 text-lg leading-relaxed">
            Every treatment at J Salon uses fashion-forward technique, premium products and
            attention to your individual style. Whether you're walking in for a quick fade or
            planning your wedding-day look, we've got you.
          </p>
        </Reveal>

        <ServicesGrid expanded />
      </section>

      {/* Additional Services */}
      <section className="bg-charcoal py-20 px-6 border-y border-gold/15">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <SectionLabel>Also Available</SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-off-white">
              Additional Treatments
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {ADDITIONAL_SERVICES.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 bg-black-deep border border-gold/15 rounded-sm px-4 py-3 hover:border-gold/40 transition-colors"
                >
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-sm text-off-white font-body">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products We Use */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <SectionLabel>Premium Range</SectionLabel>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-off-white">
            Products We Use
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Hair", desc: "Exceptional professional hair care brands selected for performance and shine." },
            { name: "Nails", desc: "Non-toxic, breathable nail formulas that are safe for everyday wear." },
            { name: "Skin", desc: "Miraculous, dermatologically-tested skincare range for visible results." },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="border border-gold/20 rounded-sm p-7 h-full hover:border-gold/50 transition-colors">
                <div className="font-display text-3xl text-gold">{p.name}</div>
                <div className="mt-4 h-px w-12 bg-gold/50" />
                <p className="mt-4 text-gray-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip
        heading="Found Something You'd Love?"
        subtext="Book your service in under a minute — we'll call back to confirm."
      />
    </>
  );
}
