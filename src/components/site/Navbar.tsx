import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Logo } from "./Logo";

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const logoSize = scrolled ? 48 : 60;
  const mobileLogoSize = scrolled ? 42 : 52;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black-deep/95 backdrop-blur-md py-2 border-b border-gold/30 shadow-[0_4px_24px_-12px_rgba(184,134,11,0.4)]"
          : "bg-black-deep/70 backdrop-blur-sm py-3 border-b border-transparent"
      }`}
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-8 grid-cols-[auto_1fr_auto] items-center gap-10">
        <Link
          to="/"
          className="flex items-center shrink-0 -my-1"
          aria-label="J Salon Unisex — Home"
        >
          <Logo size={logoSize} />
        </Link>

        <nav className="flex items-center justify-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
              className="font-body text-[13px] uppercase tracking-[0.18em] text-off-white hover:text-gold transition-colors relative group py-2"
            >
              {n.label}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @jsalon_anantapur"
            className="text-gray-muted hover:text-gold transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={PHONE_HREF}
            className="text-gray-muted hover:text-gold text-[13px] tracking-wide flex items-center gap-2 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-sm border border-gold bg-transparent px-5 py-2 text-[13px] font-medium uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-black-deep hover:shadow-gold"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile layout — centered logo */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 grid grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-2">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="justify-self-start text-off-white p-2.5 -ml-1 rounded-sm hover:text-gold active:scale-95 transition"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="J Salon Unisex — Home"
          className="flex items-center justify-center -my-1"
        >
          <Logo size={mobileLogoSize} />
        </Link>

        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE_DISPLAY}`}
          className="justify-self-end text-gold p-2.5 -mr-1 rounded-sm hover:text-gold-light active:scale-95 transition"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        } bg-black-deep border-t border-gold/20`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-gold border-gold/50" }}
              activeOptions={{ exact: true }}
              className="font-display text-2xl py-3 text-off-white border-b border-gold/10 hover:text-gold transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-base font-medium uppercase tracking-[0.15em] text-black-deep hover:bg-gold-light"
          >
            Book Appointment
          </Link>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a
              href={PHONE_HREF}
              className="text-gold font-body flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <span className="h-4 w-px bg-gold/30" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gold flex items-center gap-2 text-sm"
            >
              <Instagram className="h-4 w-4" /> @jsalon_anantapur
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
