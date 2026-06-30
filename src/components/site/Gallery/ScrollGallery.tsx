import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images: { src: string; alt: string }[];
  layout?: "grid" | "vertical";
};

export function ScrollGallery({ images, layout = "grid" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".gallery-card");
      if (!cards) return;

      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 100, scale: 0.9 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (layout === "vertical") {
    return (
      <div ref={containerRef} className="flex flex-col gap-8 max-w-4xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card relative overflow-hidden rounded-lg shadow-soft-lg"
          >
            <div className="aspect-[16/9] sm:aspect-[2/1]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {images.map((img, i) => (
        <div
          key={i}
          className="gallery-card relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft group cursor-pointer"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
