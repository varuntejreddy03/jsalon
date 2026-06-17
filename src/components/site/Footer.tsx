import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-black-deep border-t border-gold/20 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Logo size={48} />
          <p className="mt-5 font-accent italic text-gold text-sm tracking-widest">
            COMFORTABLY STYLISH
          </p>
          <p className="mt-4 text-gray-muted text-sm leading-relaxed max-w-sm">
            Anantapur's premier unisex salon. Fashion-forward cuts, color & care for men and women.
          </p>
        </div>

        <div>
          <h3 className="font-accent text-gold text-xs tracking-widest mb-5">EXPLORE</h3>
          <ul className="space-y-2.5 text-sm font-body">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Contact" },
              { to: "/book", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-off-white hover:text-gold transition-colors inline-block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-accent text-gold text-xs tracking-widest mb-5">VISIT US</h3>
          <ul className="space-y-3 text-sm text-off-white">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span className="text-gray-muted">
                8/293, First Floor, Court Rd, beside Max Mall, Adimurthy Nagar, Gulzarpet, Anantapur, AP 515001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a href="tel:07901236700" className="hover:text-gold transition-colors">
                079012 36700
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gold shrink-0" />
              <span className="text-gray-muted">Mon – Sun, 8:00 AM – 9:00 PM</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://instagram.com/jsalonunisex"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gold hover:text-gold-light hover:scale-110 transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gold hover:text-gold-light hover:scale-110 transition-all"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-muted font-body">
            © {new Date().getFullYear()} J Salon Unisex. All rights reserved.
          </p>
          <p className="text-xs text-gray-muted font-body">Anantapur, Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
