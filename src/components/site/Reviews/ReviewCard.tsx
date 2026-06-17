import { Star } from "lucide-react";
import type { Review } from "../data";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-black-deep border border-gold/20 rounded-sm p-6 w-[300px] shrink-0 flex flex-col">
      <div className="flex gap-1 text-gold">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold" />
        ))}
      </div>
      <p className="mt-4 text-sm italic text-off-white/85 font-body leading-relaxed flex-1">
        "{review.text}"
      </p>
      <div className="mt-5 pt-4 border-t border-gold/15">
        <div className="text-gold font-semibold text-sm">{review.name}</div>
        <div className="text-gray-muted text-xs mt-0.5">Google Review</div>
      </div>
    </div>
  );
}
