import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, type ReactNode } from "react";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale" | "flip";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
  variant?: Variant;
};

const variants = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  "scale": { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  "flip": { hidden: { opacity: 0, rotateX: -15, y: 30 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
};

export function Reveal({ children, delay = 0, y = 40, className, as = "div", variant = "fade-up" }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const MotionTag = motion[as] as typeof motion.div;
  const v = variants[variant];

  return (
    <MotionTag
      ref={ref}
      initial={variant === "fade-up" ? { opacity: 0, y } : v.hidden}
      animate={inView ? v.visible : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Parallax wrapper — children move at a different scroll speed for depth effect.
 */
export function Parallax({
  children,
  className,
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Image that scales up slightly as it enters the viewport — great for galleries.
 */
export function ScaleImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03 }}
      className={className}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}
