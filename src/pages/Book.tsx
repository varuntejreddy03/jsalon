import { Phone, Clock, ClipboardList, PhoneCall, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/shared/Reveal";
import { BookingForm } from "@/components/site/Booking/BookingForm";
import { PHONE, PHONE_HREF, HOURS, IMAGES } from "@/components/site/data";

export function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Reserve Your Chair"
        title="Book Your Appointment"
        subtitle="Tell us when and what — we'll call back to confirm."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Book" }]}
        minHeight="min-h-[35vh]"
        image={IMAGES.barberChair01}
      />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 px-6 border-y border-gold/15">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-off-white">What Happens Next</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, step: "01", title: "Submit Your Request", desc: "Fill the form with your preferred date, time and service." },
              { icon: PhoneCall, step: "02", title: "We Call to Confirm", desc: "Our team gets in touch within a few hours to lock in your slot." },
              { icon: Sparkles, step: "03", title: "Come In & Transform", desc: "Walk in on the day — sit back, relax and let us do the rest." },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative bg-black-deep border border-gold/20 rounded-sm p-7 h-full hover:border-gold/50 transition-colors">
                  <span className="absolute top-4 right-5 font-display text-5xl text-gold/15">{s.step}</span>
                  <div className="h-12 w-12 rounded-sm border border-gold/40 flex items-center justify-center text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-off-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-muted leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="font-accent text-xs text-gold tracking-widest uppercase">Prefer to talk?</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-off-white">Call Us Directly</h2>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-xl font-medium text-black-deep hover:bg-gold-light transition-all shadow-gold hover:scale-105"
          >
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
          <div className="mt-10 inline-flex items-center gap-3 bg-charcoal border border-gold/20 rounded-sm px-5 py-3 text-sm">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-off-white">{HOURS}</span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
