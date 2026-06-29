import { ServiceCard } from "./ServiceCard";
import { SERVICES, SERVICE_IMAGES } from "../data";
import { Reveal } from "../shared/Reveal";

type Props = { limit?: number; expanded?: boolean };

export function ServicesGrid({ limit, expanded = false }: Props) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.08}>
          <ServiceCard service={s} expanded={expanded} image={SERVICE_IMAGES[s.slug]} />
        </Reveal>
      ))}
    </div>
  );
}
