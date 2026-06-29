import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Service } from "../data";

type Props = { service: Service; expanded?: boolean; image?: string };

export function ServiceCard({ service, expanded = false, image }: Props) {
  const Icon = service.icon;
  return (
    <article className="group relative bg-charcoal border border-gold/15 rounded-sm overflow-hidden transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
      )}
      <div className="p-7 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-4">
        <div className="h-12 w-12 rounded-sm border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black-deep transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        {expanded && (
          <span className="font-accent text-[10px] text-gold tracking-wider border border-gold/40 rounded-sm px-2.5 py-1">
            {service.price}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-xl text-off-white">{service.title}</h3>
      <p className="mt-2.5 text-sm text-gray-muted font-body leading-relaxed flex-1">
        {expanded ? service.long : service.short}
      </p>
      <div className="mt-5 relative">
        <div className="h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
      </div>
      {expanded && (
        <Link
          to="/book"
          className="mt-5 inline-flex items-center gap-2 text-gold text-sm font-body hover:gap-3 transition-all"
        >
          Book This Service <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
      </div>
    </article>
  );
}


