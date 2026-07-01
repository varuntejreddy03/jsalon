import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

type Props = {
  heading?: string;
  subtext?: string;
  bgImage?: string;
};

export function CTAStrip({
  heading = "Ready for Your Transformation?",
  subtext = "Walk in or call ahead. We're open 7 days a week, 8 AM to 9 PM.",
  bgImage,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-cream py-24 px-6">
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(251,224,210,0.5)" }} />
        </>
      )}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl animate-orb-pulse"
      />
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
          {heading}
        </h2>
        <p className="mt-4 text-gray-muted text-lg font-body max-w-xl mx-auto">{subtext}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:07901236700"
            className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3.5 text-base font-medium text-white hover:bg-gold-light transition-all hover:scale-105 shadow-soft"
          >
            Call 079012 36700
          </a>
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-md border border-ink/20 bg-white/70 px-7 py-3.5 text-base font-medium text-ink hover:border-gold hover:text-gold transition-colors"
          >
            Book Online
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
