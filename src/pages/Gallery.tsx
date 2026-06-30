import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { IMAGES } from "@/components/site/data";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  { src: IMAGES.reception01, alt: "Reception & Lounge" },
  { src: IMAGES.reception02, alt: "Reception Area" },
  { src: IMAGES.hairStation01, alt: "Hair Styling Station" },
  { src: IMAGES.barberChair01, alt: "Barber Chair" },
  { src: IMAGES.facialRoom01, alt: "Facial Treatment Room" },
  { src: IMAGES.facialRoom02, alt: "Skincare Suite" },
  { src: IMAGES.facialRoom03, alt: "Treatment Chair" },
  { src: IMAGES.pedicure01, alt: "Pedicure Lounge" },
  { src: IMAGES.pedicure02, alt: "Pedicure Station" },
  { src: IMAGES.pedicure03, alt: "Nail Care Area" },
  { src: IMAGES.nailBar01, alt: "Nail Bar" },
  { src: IMAGES.stylingRow01, alt: "Styling Mirrors" },
  { src: IMAGES.stylingRow02, alt: "Styling Stations" },
  { src: IMAGES.portraitWall01, alt: "Portrait Gallery" },
];

export function GalleryPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (!items) return;

      items.forEach((item, i) => {
        const direction = i % 3 === 0 ? -1 : i % 3 === 2 ? 1 : 0;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 60,
            x: direction * 30,
            scale: 0.92,
            rotateZ: direction * 2,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateZ: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Space"
        title="Gallery"
        subtitle="A peek inside J Salon Unisex — every corner designed for your comfort."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        image={IMAGES.stylingRow01}
      />

      {/* Gallery Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 || i === 7
                  ? "sm:col-span-2 lg:col-span-2 aspect-[2/1]"
                  : "aspect-[4/3]"
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-50"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % GALLERY_IMAGES.length);
            }}
          >
            &#8250;
          </button>
          <img
            src={GALLERY_IMAGES[selected].src}
            alt={GALLERY_IMAGES[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
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
