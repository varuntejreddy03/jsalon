import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

const INSTAGRAM_URL = "https://www.instagram.com/jsalon_anantapur";
const PHONE_DISPLAY = "079012 36700";
const PHONE_HREF = "tel:07901236700";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black-deep/97 backdrop-blur-lg py-2.5 border-b border-gold/20 shadow-[0_2px_20px_-8px_rgba(184,134,11,0.3)]"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 items-center justify-between">
        <Link to="/" aria-label="J Salon Unisex — Home" className="shrink-0">
          <span className="font-display text-4xl font-bold text-gold tracking-tight">
            J<span className="font-accent text-base tracking-[0.2em] text-off-white/90 ml-2 uppercase">Salon</span>
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `relative font-body text-[13px] uppercase tracking-[0.16em] py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  isActive
                    ? "text-gold after:w-full"
                    : "text-off-white/80 hover:text-gold after:w-0 hover:after:w-full"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-off-white/60 hover:text-gold transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={PHONE_HREF}
            className="text-off-white/60 hover:text-gold text-[13px] tracking-wide flex items-center gap-1.5 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-black-deep transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 flex items-center justify-between">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-off-white p-2 -ml-1 rounded-sm hover:text-gold active:scale-95 transition"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" onClick={() => setOpen(false)} aria-label="J Salon Unisex — Home">
          <span className="font-display text-3xl font-bold text-gold">
            J<span className="font-accent text-base tracking-[0.2em] text-off-white/90 ml-1.5 uppercase">Salon</span>
          </span>
        </Link>

        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE_DISPLAY}`}
          className="text-gold p-2 -mr-1 rounded-sm hover:text-gold-light active:scale-95 transition"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        } bg-black-deep/98 backdrop-blur-lg border-t border-gold/15`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-xl py-3 border-b border-gold/10 transition-colors ${
                  isActive ? "text-gold border-gold/40" : "text-off-white hover:text-gold"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black-deep hover:bg-gold-light"
          >
            Book Appointment
          </Link>
          <div className="mt-4 flex items-center justify-center gap-5 text-sm">
            <a href={PHONE_HREF} className="text-gold flex items-center gap-2">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gold flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" /> @jsalon_anantapur
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
