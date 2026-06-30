import { Scissors, Paintbrush, Sparkles, Hand, Heart, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Image imports (WebP interiors)
import reception01 from "@/assets/jsalon-reception-01.webp";
import reception02 from "@/assets/jsalon-reception-02.webp";
import pedicure01 from "@/assets/jsalon-pedicure-01.webp";
import pedicure02 from "@/assets/jsalon-pedicure-02.webp";
import pedicure03 from "@/assets/jsalon-pedicure-03.webp";
import hairStation01 from "@/assets/jsalon-hair-station-01.webp";
import barberChair01 from "@/assets/jsalon-barber-chair-01.webp";
import stylingRow01 from "@/assets/jsalon-styling-row-01.webp";
import stylingRow02 from "@/assets/jsalon-styling-row-02.webp";
import facialRoom01 from "@/assets/jsalon-facial-room-01.webp";
import facialRoom02 from "@/assets/jsalon-facial-room-02.webp";
import facialRoom03 from "@/assets/jsalon-facial-room-03.webp";
import portraitWall01 from "@/assets/jsalon-portrait-wall-01.webp";
import nailBar01 from "@/assets/jsalon-nail-bar-01.webp";

export const IMAGES = {
  reception01,
  reception02,
  pedicure01,
  pedicure02,
  pedicure03,
  hairStation01,
  barberChair01,
  stylingRow01,
  stylingRow02,
  facialRoom01,
  facialRoom02,
  facialRoom03,
  portraitWall01,
  nailBar01,
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "hair-cutting-styling",
    title: "Hair Cutting & Styling",
    short: "Precision cuts and styling that match your face shape and personality.",
    long: "From classic to fashion-forward — our stylists deliver cuts that fit your face, hair type, and lifestyle. Includes wash, cut, blow-dry and finish.",
    icon: Scissors,
  },
  {
    slug: "hair-color-highlights",
    title: "Hair Color & Highlights",
    short: "Global color, balayage, ombré and statement highlights.",
    long: "Premium ammonia-friendly colors and expert highlighting. Whether you want a subtle gloss or a bold transformation, our colorists deliver salon-quality results.",
    icon: Paintbrush,
  },
  {
    slug: "skincare-treatments",
    title: "Skincare Treatments",
    short: "Facials, cleanups and treatments using miraculous products.",
    long: "Deep cleansing facials, brightening treatments, anti-acne and hydration therapies. Our skin range is dermatologically tested and result-oriented.",
    icon: Sparkles,
  },
  {
    slug: "nail-care",
    title: "Nail Care",
    short: "Manicures, pedicures and nail art with non-toxic products.",
    long: "Classic manicures, gel polish, French tips and creative nail art — all using non-toxic, breathable formulas safe for regular wear.",
    icon: Hand,
  },
  {
    slug: "bridal-party-makeup",
    title: "Bridal & Party Makeup",
    short: "Picture-perfect makeup for your biggest moments.",
    long: "Engagement, wedding day, reception and party looks — full bridal packages with trial sessions, draping, hairstyling and HD makeup that lasts all day.",
    icon: Heart,
  },
  {
    slug: "hair-spa-keratin",
    title: "Hair Spa & Keratin",
    short: "Deep nourishment, smoothening and frizz-control treatments.",
    long: "Hair spa rituals, keratin smoothening, botox treatments and scalp therapies that restore shine, strength and manageability.",
    icon: Droplets,
  },
];

export const SERVICE_IMAGES: Record<string, string> = {
  "hair-cutting-styling": hairStation01,
  "hair-color-highlights": stylingRow02,
  "skincare-treatments": facialRoom01,
  "nail-care": nailBar01,
  "bridal-party-makeup": portraitWall01,
  "hair-spa-keratin": facialRoom03,
};

export const ADDITIONAL_SERVICES = [
  "Threading & waxing",
  "Beard sculpting & shave",
  "Hair wash & blow-dry",
  "Head massage",
  "Hair fall treatment",
  "Eyebrow tinting",
  "Body polishing",
  "Saree draping",
];

export type Review = {
  name: string;
  text: string;
  stars: number;
};

export const REVIEWS: Review[] = [
  {
    name: "Priya M.",
    stars: 5,
    text: "Best salon in Anantapur, hands down. Got my bridal makeup done here and everyone kept asking who did it. The team is so warm and professional.",
  },
  {
    name: "Rahul K.",
    stars: 5,
    text: "Finally a salon that does men's haircuts properly. The fade I got is exactly what I asked for. Affordable too.",
  },
  {
    name: "Sneha R.",
    stars: 5,
    text: "Loved the balayage! The colorist took time to understand what I wanted. Hair feels healthy too — not damaged at all.",
  },
  {
    name: "Anil V.",
    stars: 5,
    text: "Clean place, friendly staff, fair prices. Been coming here for over a year now.",
  },
  {
    name: "Divya P.",
    stars: 5,
    text: "The hair spa treatment was so relaxing and my hair has never felt softer. Will be back monthly.",
  },
  {
    name: "Karthik S.",
    stars: 5,
    text: "Quick service even on a Sunday. Great experience overall, highly recommend.",
  },
  {
    name: "Meena G.",
    stars: 5,
    text: "Got a manicure and pedicure here — they use such good products and the staff is careful and gentle.",
  },
  {
    name: "Lakshmi N.",
    stars: 5,
    text: "Trusted them with my daughter's wedding look. Flawless work. Worth every rupee.",
  },
  {
    name: "Vamsi C.",
    stars: 5,
    text: "Affordable luxury — that's exactly what J Salon is. Five stars from me.",
  },
  {
    name: "Harika T.",
    stars: 5,
    text: "Booked a keratin treatment and the result lasted months. The team really knows their craft.",
  },
  {
    name: "Suresh M.",
    stars: 5,
    text: "Walked in for a haircut and walked out with a complete makeover. Loved it.",
  },
  {
    name: "Anita L.",
    stars: 5,
    text: "My favourite salon in Anantapur. Clean, modern, and the staff treats you like family.",
  },
];

export const STATS = [
  { value: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
  { value: 1168, suffix: "+", label: "Happy Reviews", decimals: 0 },
  { value: 7, suffix: "", label: "Days a Week", decimals: 0 },
  { value: 13, suffix: "+", label: "Hours Open Daily", decimals: 0 },
];

export type GalleryCategory = "Interior" | "Hair" | "Color" | "Skin" | "Nails" | "Bridal";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const GALLERY: GalleryItem[] = [
  // Real interior shots
  { src: reception01, alt: "Reception desk with green sofa", category: "Interior" },
  { src: reception02, alt: "Reception alternate angle", category: "Interior" },
  { src: pedicure01, alt: "Twin pedicure chairs", category: "Interior" },
  { src: pedicure02, alt: "Pedicure lounge wall art", category: "Interior" },
  { src: pedicure03, alt: "Pedicure and sofa angle", category: "Interior" },
  { src: hairStation01, alt: "Styling chair with round mirror and dryer", category: "Interior" },
  { src: barberChair01, alt: "Green barber chair with arched mirror", category: "Interior" },
  { src: stylingRow01, alt: "Row of styling mirrors with portraits", category: "Interior" },
  { src: stylingRow02, alt: "Styling stations alternate view", category: "Interior" },
  { src: facialRoom01, alt: "Facial bed with vanity mirror", category: "Interior" },
  { src: facialRoom02, alt: "Facial treatment bed close-up", category: "Interior" },
  { src: facialRoom03, alt: "Facial room with green chair", category: "Interior" },
  { src: portraitWall01, alt: "Portrait gallery wall", category: "Interior" },
  { src: nailBar01, alt: "Manicure bar with chairs", category: "Interior" },
  // Curated Unsplash
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=75&auto=format&fit=crop", alt: "Modern haircut styling", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=75&auto=format&fit=crop", alt: "Balayage hair color", category: "Color" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=75&auto=format&fit=crop", alt: "Glowing skin facial", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=75&auto=format&fit=crop", alt: "Manicure nail art", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=75&auto=format&fit=crop", alt: "Bridal makeup look", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=75&auto=format&fit=crop", alt: "Men's haircut", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=75&auto=format&fit=crop", alt: "Hair color transformation", category: "Color" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=75&auto=format&fit=crop", alt: "Skincare treatment", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=75&auto=format&fit=crop", alt: "French manicure", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=900&q=75&auto=format&fit=crop", alt: "Bridal hairstyle", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=75&auto=format&fit=crop", alt: "Beard grooming", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=75&auto=format&fit=crop", alt: "Highlights closeup", category: "Color" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=75&auto=format&fit=crop", alt: "Face mask treatment", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1604654894611-6973b76de0b4?w=900&q=75&auto=format&fit=crop", alt: "Nail polish detail", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&q=75&auto=format&fit=crop", alt: "Bridal portrait", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=75&auto=format&fit=crop", alt: "Salon styling chair", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1626015449300-9ae8a8e6d2e2?w=900&q=75&auto=format&fit=crop", alt: "Caramel highlights", category: "Color" },
  { src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=75&auto=format&fit=crop", alt: "Spa skincare", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=75&auto=format&fit=crop", alt: "Pedicure care", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=900&q=75&auto=format&fit=crop", alt: "Party makeup look", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1599387737658-04f5d4435e3b?w=900&q=75&auto=format&fit=crop", alt: "Sleek straight blowout", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1635368441591-c898ab07d92e?w=900&q=75&auto=format&fit=crop", alt: "Curly hair styling", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=75&auto=format&fit=crop", alt: "Long layered cut", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=900&q=75&auto=format&fit=crop", alt: "Rose gold color", category: "Color" },
  { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&q=75&auto=format&fit=crop", alt: "Honey blonde balayage", category: "Color" },
  { src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=75&auto=format&fit=crop", alt: "Brightening facial", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=900&q=75&auto=format&fit=crop", alt: "Hydrating mask therapy", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=900&q=75&auto=format&fit=crop", alt: "Almond shape gel nails", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1607779097040-f06f4f6f7c43?w=900&q=75&auto=format&fit=crop", alt: "Minimal nail art", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1583001809873-a128495da465?w=900&q=75&auto=format&fit=crop", alt: "South Indian bridal look", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=75&auto=format&fit=crop", alt: "Reception glam makeup", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=900&q=75&auto=format&fit=crop", alt: "Salon interior ambience", category: "Hair" },
];

export const ADDRESS_LINE = "8/293, First Floor, Court Rd, beside Max Mall, Adimurthy Nagar, Gulzarpet, Anantapur, AP 515001";
export const PHONE = "079012 36700";
export const PHONE_HREF = "tel:07901236700";
export const HOURS = "Monday \u2013 Sunday: 8:00 AM \u2013 9:00 PM";
export const MAP_QUERY = encodeURIComponent("J Salon Unisex, Court Rd, Anantapur");
