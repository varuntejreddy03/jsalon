import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images: { src: string; alt: string }[];
};

export function ScrollPinGallery({ images }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".pin-card");
      if (!cards || cards.length === 0) return;

      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" });
        } else {
          gsap.set(card, { opacity: 0, scale: 0.9, y: 60, filter: "blur(10px)" });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${images.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i >= cards.length - 1) return;
        const next = cards[i + 1];

        tl.to(card, {
          opacity: 0,
          scale: 1.1,
          filter: "blur(6px)",
          duration: 1,
          ease: "power2.in",
        }, i * 1.2);

        tl.to(next, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }, i * 1.2 + 0.3);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <div ref={sectionRef} className="relative h-[100svh] overflow-hidden bg-cream flex flex-col">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-30 h-[2px] bg-ink/5">
        <div
          className="h-full bg-gold origin-left"
          style={{ transform: "scaleX(0)" }}
          ref={(el) => {
            if (!el) return;
            gsap.to(el, {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${images.length * 100}%`,
                scrub: true,
              },
            });
          }}
        />
      </div>

      {/* 3D Container */}
      <div
        ref={containerRef}
        className="flex-1 relative flex items-center justify-center px-5 py-16 sm:px-12 sm:py-20"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="pin-card absolute inset-0 flex items-center justify-center px-5 py-16 sm:px-12 sm:py-20"
          >
            <div className="relative w-full max-w-5xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto max-h-[65svh] object-contain rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
              {/* Label */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10">
                <span className="inline-block bg-white/85 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-md text-xs sm:text-sm font-body text-ink/80 font-medium">
                  {img.alt}
                </span>
              </div>
              {/* Counter */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10">
                <span className="inline-block bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-accent text-gold">
                  {i + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft text-[10px] sm:text-xs font-accent text-ink/50 tracking-wider uppercase">
          <div className="w-3 h-5 rounded-full border border-gold/50 flex justify-center pt-1">
            <div className="w-[2px] h-[5px] rounded-full bg-gold animate-bounce" />
          </div>
          Scroll
        </div>
      </div>
    </div>
  );
}
