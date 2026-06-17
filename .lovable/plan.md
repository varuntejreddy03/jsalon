# J Salon Unisex — Multi-Page Website Build Plan

A 7-page luxury salon site in deep black + gold, built on TanStack Start + Tailwind v4 with framer-motion animations and a video hero on the homepage.

## Page Structure

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services (detailed) |
| `/about` | About Us |
| `/gallery` | Gallery |
| `/reviews` | Reviews |
| `/contact` | Contact & Location |
| `/book` | Booking |

## Shared Layout (`src/routes/__root.tsx`)
- Fixed Navbar + Footer on every page
- Google Fonts via `<link>` tags (Playfair Display, Nunito Sans, Cinzel)
- Base SEO meta + `og:type: website` + Organization JSON-LD
- Scroll-to-top on route change

## Design Tokens (`src/styles.css`)
- Gold `#B8860B` / gold-light `#D4A843` / gold-shine `#F5D080`
- Black `#0A0A0A` / charcoal `#1A1A1A` / off-white `#F0EDE8` / gray-muted `#888`
- Fonts: Playfair Display (display), Nunito Sans (body), Cinzel (accent)
- Keyframes: shimmer, marquee, pulse-glow, rotate-slow, count-up timing
- Gold-glow shadow utility; all wrapped in `prefers-reduced-motion` guards

---

## Page-by-Page

### `/` Home
1. **VideoHero** — full viewport autoplay/muted/looped MP4 + WebM, poster fallback, `bg-black/60` overlay, gold shimmer layer, staggered text fade-in, two CTAs, bouncing chevron
2. **Services Preview** — 3 teaser cards + "View All Services →"
3. **Brand Quote Strip** — italic Playfair quote with gold decorative marks
4. **Stats Strip** — 4 count-up pillars
5. **About Teaser** — 2-col with rotating-ring J lettermark + "Learn More →"
6. **Gallery Teaser** — 4 images + "See All Transformations →"
7. **Reviews Teaser** — 3 static cards + "Read All Reviews →"
8. **Contact CTA Strip** — pulsing gold orb bg → `/book`

### `/services`
- PageHero (40vh) with breadcrumb
- Intro paragraph
- Full 6-card grid: icon + title + 3–4 line description + price-range badge + "Book This Service →"
- Additional services list (smaller treatments)
- "Products We Use" strip
- Bottom CTA → `/book`

### `/about`
- PageHero (40vh) "About J Salon Unisex"
- Our Story — 2-col text + large J lettermark with rotating ring
- Our Philosophy — 3 pillars (Fashion-forward / Affordable / Professional)
- Meet the Team — member cards (name, role, photo placeholder)
- Our Products — Hair / Nails / Skin
- By the Numbers — 4 stats with expanded context
- Bottom CTA → `/book`

### `/gallery`
- PageHero (40vh) "Transformations"
- Filter tabs: All | Hair | Color | Skin | Nails | Bridal
- Masonry grid, 20+ lazy-loaded images, hover overlay with service label
- Lightbox via framer-motion AnimatePresence
- Curated Unsplash placeholders with descriptive alt text
- "Follow us on Instagram" banner

### `/reviews`
- PageHero (40vh) "What Our Clients Say"
- Rating summary: 4.9★ huge + "Based on 1,168 Google Reviews" + Google Maps link
- Two-row opposite-direction infinite marquee
- Full review grid (12 cards, load-more)
- "Leave a Review" external CTA
- Bottom CTA → `/book`

### `/contact`
- PageHero (40vh) "Find Us"
- 2-col: info card (address, tel: phone, hours, socials) + Google Map iframe (click-to-load)
- Contact form (Name, Phone, Message, Service dropdown) — mailto handler for now
- "Getting There" written directions (beside Max Mall)
- Bottom CTA → `/book`

### `/book`
- PageHero (30vh) "Book Your Appointment"
- Booking form: Name, Phone, Email, Service dropdown, Date picker, Time slot (8AM–9PM), Message — mailto handler
- "What happens next" 3-step explainer
- Large "Or call directly: 079012 36700"
- Hours reminder card

---

## VideoHero technical notes

```tsx
<video autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover"
  poster={posterUrl}>
  <source src={mp4Url} type="video/mp4" />
  <source src={webmUrl} type="video/webm" />
</video>
```
Stacking: video → `bg-black/60` overlay → gold shimmer (opacity-30) → content. `prefers-reduced-motion` hides the video and shows poster + gold gradient. **Asset handling:** since we have no salon video yet, ship with a CSS gold-gradient fallback only and leave clearly-marked TODO source slots wired to `lovable-assets` URLs the user can drop in later.

## Per-page SEO

Each route's `head()` sets unique title, description, og:title, og:description, plus relative canonical / `og:url`. `og:image` only on leaf routes (never `__root.tsx`). Sample titles:
- `/` — J Salon Unisex — Anantapur's Premier Salon
- `/services` — Services — J Salon Unisex Anantapur
- `/about` — About Us — J Salon Unisex
- `/gallery` — Transformations Gallery — J Salon Unisex
- `/reviews` — Client Reviews — J Salon Unisex
- `/contact` — Contact & Location — J Salon Unisex
- `/book` — Book an Appointment — J Salon Unisex

## File plan

```
src/
├── styles.css
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── services.tsx
│   ├── about.tsx
│   ├── gallery.tsx
│   ├── reviews.tsx
│   ├── contact.tsx
│   └── book.tsx
└── components/site/
    ├── Logo.tsx
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── PageHero.tsx
    ├── VideoHero.tsx
    ├── Particles.tsx
    ├── Services/{ServiceCard,ServicesGrid}.tsx
    ├── Stats/StatPillar.tsx
    ├── Gallery/{MasonryGrid,GalleryFilter,Lightbox}.tsx
    ├── Reviews/{ReviewCard,Marquee}.tsx
    ├── Booking/BookingForm.tsx
    └── shared/{GoldDivider,SectionLabel,CTAStrip}.tsx
```

## Dependencies to install
`framer-motion`, `react-intersection-observer` (lucide-react + shadcn date picker already present).

## Technical Notes
Project is **TanStack Start + Tailwind v4** (still Vite under the hood), not Vite+React+Tailwind v3 as the original brief assumed. Practical impact: tokens go in `src/styles.css` `@theme` (no `tailwind.config.js`), fonts load via `<link>` in `__root.tsx` (not `@fontsource`), `react-scroll` is replaced by `scrollIntoView({ behavior: 'smooth' })`, and `react-router-dom` patterns are replaced by `@tanstack/react-router` `<Link>` / `useNavigate`. Every section has its own route file (not hash anchors) so each page is SSR'd with its own metadata.

Approve and I'll build page by page, starting with the shared shell (styles, fonts, Navbar, Footer, Logo) then `/` then the rest.