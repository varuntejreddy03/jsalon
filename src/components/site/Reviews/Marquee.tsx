import { ReviewCard } from "./ReviewCard";
import type { Review } from "../data";

type Props = { reviews: Review[]; direction?: "left" | "right" };

export function Marquee({ reviews, direction = "left" }: Props) {
  const items = [...reviews, ...reviews];
  return (
    <div className="relative overflow-hidden group" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
      <div
        className={`flex gap-6 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
      >
        {items.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}
