import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SERVICES } from "../data";

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
  "08:00 PM",
];

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Email: ${fd.get("email")}`,
      `Service: ${fd.get("service")}`,
      `Date: ${date ? format(date, "PPP") : "—"}`,
      `Time: ${fd.get("time")}`,
      `Notes: ${fd.get("notes")}`,
    ].join("\n");
    const subject = encodeURIComponent("Appointment Request — J Salon Unisex");
    window.location.href = `mailto:hello@jsalonunisex.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-cream border border-hairline-strong rounded-sm p-7 md:p-10 grid gap-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your Name" name="name" required placeholder="Jane Doe" />
        <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 9XXXXXXXXX" />
      </div>
      <Field label="Email" name="email" type="email" required placeholder="you@email.com" />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label>Service</Label>
          <select
            name="service"
            required
            defaultValue=""
            className="mt-2 w-full bg-white border border-hairline-strong rounded-sm px-4 py-3 text-ink font-body text-sm focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Preferred Time</Label>
          <select
            name="time"
            required
            defaultValue=""
            className="mt-2 w-full bg-white border border-hairline-strong rounded-sm px-4 py-3 text-ink font-body text-sm focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Pick a time slot
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label>Preferred Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className={cn(
                "mt-2 w-full justify-start bg-white border-hairline-strong rounded-sm px-4 py-3 h-auto text-left font-normal text-ink hover:bg-white hover:border-gold hover:text-gold",
                !date && "text-gray-muted"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Choose a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-cream border-gold/30">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label>Notes (optional)</Label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Any special requests, references, or questions..."
          className="mt-2 w-full bg-white border border-hairline-strong rounded-sm px-4 py-3 text-ink font-body text-sm focus:outline-none focus:border-gold resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-base font-medium text-black-deep hover:bg-gold-light transition-all hover:shadow-soft"
      >
        Request Appointment
      </button>

      {submitted && (
        <p className="text-center text-sm text-gold font-body">
          Your mail client just opened — send it and we'll call you back to confirm.
        </p>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-accent text-[11px] text-gold tracking-wider uppercase">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-white border border-hairline-strong rounded-sm px-4 py-3 text-ink font-body text-sm placeholder:text-gray-muted focus:outline-none focus:border-gold"
      />
    </div>
  );
}



