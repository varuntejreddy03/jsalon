import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
};

export function ImageSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const animate = useCallback((next: number) => {
    if (!imgRef.current) { setCurrent(next); return; }
    gsap.to(imgRef.current, {
      opacity: 0, scale: 1.03, duration: 0.35, ease: "power2.in",
      onComplete: () => {
        setCurrent(next);
        gsap.fromTo(imgRef.current, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" });
      },
    });
  }, []);

  const go = useCallback((dir: number) => {
    const next = ((current + dir) % images.length + images.length) % images.length;
    animate(next);
  }, [current, images.length, animate]);

  // Stable auto-advance interval
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        const next = (current + 1) % images.length;
        animate(next);
      }
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, images.length, animate]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-soft-lg"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="aspect-[16/9] sm:aspect-[21/9]">
        <img
          ref={imgRef}
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left arrow */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5 text-ink" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronRight className="h-5 w-5 text-ink" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => animate(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-7 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
