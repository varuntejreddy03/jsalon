import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTAStrip } from "@/components/site/shared/CTAStrip";
import { Reveal } from "@/components/site/shared/Reveal";
import {
  ADDRESS_LINE,
  PHONE,
  PHONE_HREF,
  HOURS,
  MAP_QUERY,
  SERVICES,
  IMAGES,
} from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — J Salon Unisex" },
      {
        name: "description",
        content:
          "Visit J Salon Unisex at 8/293 Court Rd, Anantapur — beside Max Mall. Open 7 days, 8 AM–9 PM. Call 079012 36700.",
      },
      { property: "og:title", content: "Contact — J Salon Unisex" },
      { property: "og:description", content: "Find us in Anantapur. Open 7 days a week." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Service interest: ${fd.get("service")}`,
      "",
      `${fd.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:hello@jsalonunisex.com?subject=${encodeURIComponent(
      "Enquiry — J Salon Unisex"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Find Us"
        subtitle="Walk in, call ahead, or drop us a message — we'd love to see you."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        image={IMAGES.reception01}
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info card */}
          <Reveal>
            <div className="bg-charcoal border border-gold/20 rounded-sm p-8 md:p-10 h-full">
              <h2 className="font-display text-3xl text-off-white">Visit Us</h2>
              <div className="mt-2 h-px w-16 bg-gold" />

              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-accent text-[11px] text-gold tracking-widest uppercase">
                      Address
                    </div>
                    <p className="mt-1 text-off-white leading-relaxed">{ADDRESS_LINE}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-accent text-[11px] text-gold tracking-widest uppercase">
                      Phone
                    </div>
                    <a
                      href={PHONE_HREF}
                      className="mt-1 inline-block text-off-white text-lg hover:text-gold transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-accent text-[11px] text-gold tracking-widest uppercase">
                      Hours
                    </div>
                    <p className="mt-1 text-off-white">{HOURS}</p>
                    <span className="mt-2 inline-block bg-gold text-black-deep text-xs font-accent tracking-widest uppercase px-3 py-1 rounded-sm">
                      Open 7 Days
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-gold/15 flex items-center gap-5">
                <a
                  href="https://instagram.com/jsalonunisex"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-gold hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-gold hover:scale-110 transition-transform"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@jsalonunisex.com"
                  aria-label="Email"
                  className="text-gold hover:scale-110 transition-transform"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] rounded-sm overflow-hidden border border-gold/30">
              {!mapLoaded ? (
                <button
                  onClick={() => setMapLoaded(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal hover:bg-black-deep transition-colors"
                >
                  <MapPin className="h-12 w-12 text-gold" />
                  <span className="mt-4 font-display text-2xl text-off-white">View Map</span>
                  <span className="mt-1 text-xs text-gray-muted font-accent tracking-widest uppercase">
                    Click to load
                  </span>
                </button>
              ) : (
                <iframe
                  title="J Salon Unisex location"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-charcoal py-20 px-6 border-y border-gold/15">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-off-white">Send Us a Message</h2>
            <p className="mt-3 text-gray-muted">
              Quick question or a service enquiry? Drop us a line.
            </p>
          </Reveal>
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="bg-black-deep border border-gold/20 rounded-sm p-7 md:p-10 grid gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-charcoal border border-gold/25 rounded-sm px-4 py-3 text-off-white text-sm placeholder:text-gray-muted focus:outline-none focus:border-gold"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="bg-charcoal border border-gold/25 rounded-sm px-4 py-3 text-off-white text-sm placeholder:text-gray-muted focus:outline-none focus:border-gold"
                />
              </div>
              <select
                name="service"
                defaultValue=""
                className="bg-charcoal border border-gold/25 rounded-sm px-4 py-3 text-off-white text-sm focus:outline-none focus:border-gold"
              >
                <option value="" disabled>
                  I'm interested in...
                </option>
                {SERVICES.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="bg-charcoal border border-gold/25 rounded-sm px-4 py-3 text-off-white text-sm placeholder:text-gray-muted focus:outline-none focus:border-gold resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-base font-medium text-black-deep hover:bg-gold-light transition-all hover:shadow-gold"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <p className="text-sm text-center text-gold">
                  Your mail client just opened — send it and we'll reply soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* Getting there */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl text-off-white text-center">Getting There</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-8 text-off-white/80 leading-relaxed text-center">
            We're on the first floor of <span className="text-gold">8/293, Court Road</span>, right
            next to <span className="text-gold">Max Mall</span> in Adimurthy Nagar, Gulzarpet —
            easy parking on the side road and well-marked entrance from the main street.
          </p>
        </Reveal>
      </section>

      <CTAStrip />
    </>
  );
}
