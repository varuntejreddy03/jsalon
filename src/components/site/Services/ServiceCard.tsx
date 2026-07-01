import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "../data";

type Props = { service: Service; expanded?: boolean; image?: string };

export function ServiceCard({ service, expanded = false, image }: Props) {
  const Icon = service.icon;
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white border border-hairline-strong rounded-lg overflow-hidden flex flex-col shadow-soft"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
      )}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="h-12 w-12 rounded-md border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mt-5 font-display text-xl text-ink">{service.title}</h3>
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
    </motion.article>
  );
}
