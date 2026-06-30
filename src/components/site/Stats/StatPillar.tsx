import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export function StatPillar({ value, suffix = "", label, decimals = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const display = decimals > 0 ? n.toFixed(decimals) : Math.floor(n).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-gold font-semibold">
        {display}
        <span className="text-gold-light">{suffix}</span>
      </div>
      <div className="mt-3 font-accent text-xs text-ink/80 tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}



