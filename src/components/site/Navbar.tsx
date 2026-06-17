import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black-deep/95 backdrop-blur-md py-2 border-b border-gold/30"
          : "bg-black-deep/70 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo size={scrolled ? 36 : 42} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
              className="font-body text-sm tracking-wide text-off-white hover:text-gold transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:07901236700"
            className="text-gray-muted hover:text-gold text-sm flex items-center gap-1.5 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            079012 36700
          </a>
          <Link
            to="/book"
            className="ml-2 inline-flex items-center justify-center rounded-sm border border-gold bg-transparent px-5 py-2 text-sm font-medium tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-black-deep hover:shadow-gold"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-off-white p-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
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
            className="mt-4 inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3 text-base font-medium text-black-deep hover:bg-gold-light"
          >
            Book Appointment
          </Link>
          <a
            href="tel:07901236700"
            className="mt-3 text-center text-gold font-body flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" /> 079012 36700
          </a>
        </nav>
      </div>
    </header>
  );
}
