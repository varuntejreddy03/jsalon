import { Star, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Marquee } from "@/components/site/Reviews/Marquee";
import { ReviewCard } from "@/components/site/Reviews/ReviewCard";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { Reveal } from "@/components/site/shared/Reveal";
import { REVIEWS, IMAGES } from "@/components/site/data";

export function ReviewsPage() {
  const rowA = REVIEWS.slice(0, 6);
  const rowB = REVIEWS.slice(6, 12);
  return (
    <>
      <PageHero
        eyebrow="Loved by Anantapur"
        title="What Our Clients Say"
        subtitle="1,168+ five-star reviews on Google — and counting."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        image={IMAGES.portraitWall01}
      />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <Reveal>
          <div className="bg-charcoal border border-gold/25 rounded-sm p-10 text-center">
            <div className="flex justify-center gap-1 text-gold mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold" />
              ))}
            </div>
            <div className="font-display text-6xl md:text-7xl text-gold font-semibold">4.9</div>
            <p className="mt-3 text-off-white font-body">
              Based on <span className="text-gold font-semibold">1,168+</span> Google Reviews
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=J+Salon+Unisex+Anantapur"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-gold text-sm font-accent tracking-widest uppercase border-b border-gold/40 pb-1 hover:gap-3 transition-all"
            >
              View on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="py-12 space-y-6 overflow-hidden">
        <Marquee reviews={rowA} direction="left" />
        <Marquee reviews={rowB} direction="right" />
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 6) * 0.06} className="flex">
              <div className="w-full">
                <ReviewCard review={r} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
