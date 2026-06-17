import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Instagram } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { MasonryGrid } from "@/components/site/Gallery/MasonryGrid";
import { GalleryFilter, type Category } from "@/components/site/Gallery/GalleryFilter";
import { Lightbox } from "@/components/site/Gallery/Lightbox";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { GALLERY } from "@/components/site/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Transformations Gallery — J Salon Unisex" },
      {
        name: "description",
        content:
          "Before & after hair, color, skincare, nails and bridal transformations from J Salon Unisex in Anantapur.",
      },
      { property: "og:title", content: "Transformations — J Salon Unisex" },
      { property: "og:description", content: "Real client transformations from J Salon Unisex." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow="The J Difference"
        title="Transformations"
        subtitle="Real client work — cuts, color, skin, nails and bridal looks straight from our chair."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <GalleryFilter active={active} onChange={setActive} />
        <div className="mt-12">
          <MasonryGrid items={filtered} onOpen={(i) => setLightboxIndex(i)} />
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((i) => (i == null ? null : (i - 1 + filtered.length) % filtered.length))
        }
        onNext={() => setLightboxIndex((i) => (i == null ? null : (i + 1) % filtered.length))}
      />

      {/* Instagram banner */}
      <section className="bg-charcoal py-16 px-6 border-y border-gold/15">
        <div className="max-w-4xl mx-auto text-center">
          <Instagram className="h-10 w-10 text-gold mx-auto" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-off-white">
            Follow Us on Instagram
          </h2>
          <p className="mt-3 text-gray-muted">
            Fresh transformations, behind-the-scenes and styling tips — every week.
          </p>
          <a
            href="https://instagram.com/jsalonunisex"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gold bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-gold hover:bg-gold hover:text-black-deep transition-all"
          >
            <Instagram className="h-4 w-4" /> @jsalonunisex
          </a>
        </div>
      </section>

      <CTAStrip heading="Want a Look Like These?" subtext="Pick your favourite and book — we'll recreate it for your features." />
    </>
  );
}
