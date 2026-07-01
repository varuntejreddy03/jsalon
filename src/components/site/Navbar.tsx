import { Link, NavLink } from "react-router-dom";
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

const PHONE_HREF = "tel:07901236700";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-soft py-1.5" : "bg-white/90 backdrop-blur-sm py-2.5"
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 items-center justify-between">
        <Link to="/" aria-label="J Salon Unisex" className="shrink-0">
          <Logo size={64} />
        </Link>

        <nav className="flex items-center gap-8">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `relative text-[13px] font-medium uppercase tracking-[0.08em] pb-1 transition-colors ${
                  isActive
                    ? "text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold"
                    : "text-ink/60 hover:text-gold"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/book"
          className="rounded-md bg-gold px-6 py-2.5 text-[13px] font-medium text-white tracking-wide hover:bg-gold-light transition-colors"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between px-4">
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink/70 p-2 hover:text-gold transition-colors"
          aria-label={open ? "Close" : "Menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" onClick={() => setOpen(false)}>
          <Logo size={52} />
        </Link>

        <a href={PHONE_HREF} className="text-gold p-2">
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-hairline px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-0">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3.5 text-[15px] font-medium tracking-wide border-b border-hairline transition-colors ${
                    isActive ? "text-gold" : "text-ink/70 hover:text-gold"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-5 block text-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-white tracking-wide"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
