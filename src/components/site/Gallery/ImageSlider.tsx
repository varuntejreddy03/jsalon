import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
};

export function ImageSlider({ images }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const newIndex = ((index % images.length) + images.length) % images.length;
    setCurrent(newIndex);
    gsap.to(track, {
      x: `-${newIndex * 100}%`,
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  // Pause on hover
  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resume = () => {
    intervalRef.current = setInterval(next, 3500);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-soft-lg"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex"
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <div className="aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-ink/70 hover:text-gold hover:bg-white transition-all shadow-soft"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-ink/70 hover:text-gold hover:bg-white transition-all shadow-soft"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-gold" : "w-2 bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
