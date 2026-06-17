import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./shared/SectionLabel";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  minHeight?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  minHeight = "min-h-[45vh]",
}: Props) {
  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden border-b border-gold/15`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black-deep to-black-deep" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        {eyebrow && <SectionLabel className="mb-4">{eyebrow}</SectionLabel>}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-off-white text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-off-white/75 text-lg max-w-2xl mx-auto font-body">{subtitle}</p>
        )}
        {breadcrumbs && (
          <nav className="mt-8 flex justify-center items-center gap-2 text-xs font-accent text-gray-muted tracking-widest uppercase">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="text-gold/40">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
}
