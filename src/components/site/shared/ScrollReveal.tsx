import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
};

const animConfigs = {
  "fade-up": { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } },
  "fade-left": { from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 } },
  "fade-right": { from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 } },
  "scale": { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } },
  "rotate": { from: { opacity: 0, y: 50, rotation: 3 }, to: { opacity: 1, y: 0, rotation: 0 } },
};

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.9,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const config = animConfigs[animation];
    const ctx = gsap.context(() => {
      gsap.fromTo(el, config.from, {
        ...config.to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/**
 * Wrap children in a container where each direct child animates in one-by-one on scroll.
 */
export function StaggerChildren({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
