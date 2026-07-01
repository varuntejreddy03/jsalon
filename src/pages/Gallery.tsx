import { useEffect, useRef, useState } from "react";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { IMAGES } from "@/components/site/data";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  { src: IMAGES.reception01, alt: "Reception & Lounge" },
  { src: IMAGES.hairStation01, alt: "Hair Styling Station" },
  { src: IMAGES.facialRoom01, alt: "Facial Treatment Room" },
  { src: IMAGES.barberChair01, alt: "Barber Chair" },
  { src: IMAGES.nailBar01, alt: "Nail Bar" },
  { src: IMAGES.pedicure01, alt: "Pedicure Lounge" },
  { src: IMAGES.stylingRow01, alt: "Styling Mirrors" },
  { src: IMAGES.facialRoom02, alt: "Skincare Suite" },
  { src: IMAGES.reception02, alt: "Reception Area" },
  { src: IMAGES.pedicure02, alt: "Pedicure Station" },
  { src: IMAGES.facialRoom03, alt: "Treatment Chair" },
  { src: IMAGES.stylingRow02, alt: "Styling Stations" },
  { src: IMAGES.pedicure03, alt: "Nail Care Area" },
  { src: IMAGES.portraitWall01, alt: "Portrait Gallery" },
];

export function GalleryPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (!items) return;
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 90%" } }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((selected + 1) % GALLERY_IMAGES.length);
      if (e.key === "ArrowLeft") setSelected((selected - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  return (
    <>
      <PageHero
        eyebrow="Our Space"
        title="Gallery"
        subtitle="A peek inside J Salon Unisex — every corner designed for your comfort."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        image={IMAGES.stylingRow01}
      />

      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="gallery-item break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % GALLERY_IMAGES.length); }}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          <img
            src={GALLERY_IMAGES[selected].src}
            alt={GALLERY_IMAGES[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {GALLERY_IMAGES[selected].alt} &middot; {selected + 1}/{GALLERY_IMAGES.length}
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="bg-cream py-16 px-6 border-y border-hairline">
        <div className="max-w-4xl mx-auto text-center">
          <Instagram className="h-9 w-9 text-gold mx-auto" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink">
            Follow Us on Instagram
          </h2>
          <p className="mt-3 text-gray-muted text-sm sm:text-base">
            Fresh looks, behind-the-scenes and styling tips — every week.
          </p>
          <a
            href="https://instagram.com/jsalon_anantapur"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-white transition-all"
          >
            <Instagram className="h-4 w-4" /> @jsalon_anantapur
          </a>
        </div>
      </section>

      <CTAStrip heading="Like What You See?" subtext="Book your appointment and experience J Salon yourself." />
    </>
  );
}
