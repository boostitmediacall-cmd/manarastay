const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "212679404527";

export const SITE = {
  name: "Manara Stay",
  parent: "Manara Keys",
  domain: "manarastay.com",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@manarastay.com",
  phoneDisplay: "+212 6 79 40 45 27",
  whatsapp: WHATSAPP,
  whatsappUrl: `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`,
  address: "16 Rue Ahmed Ben Ajiba, Kasbah, Tanger, Maroc",
  website: "www.manarastay.com",
  founder: "Tarik Soussi",
  founderRole: "Fondateur · Manara Stay",
  slogan: "La gestion locative courte durée, autrement.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://manarastay.com",
} as const;

export const IMAGES = {
  hero: "/images/hero3.jpg",
  living: "/images/welcome.jpg",
  welcome: "/images/welcome.jpg",
  founder: "/images/founder.jpg",
  staging: "/images/service-staging.png",
  hospitality: "/images/service-hospitality.png",
  bookings: "/images/service-bookings.png",
  maintenance: "/images/service-maintenance.png",
} as const;

export const PROPERTY_TYPES = [
  "appartement",
  "maison",
  "villa",
  "studio",
  "riad",
  "autre",
] as const;

export const CITIES = [
  "tanger",
  "malabata",
  "cap-spartel",
  "marshan",
  "california",
  "kasbah",
  "autre",
] as const;

export const AREA_KEYS = [
  "centre",
  "malabata",
  "marshan",
  "kasbah",
  "california",
  "spartel",
  "gzenaya",
] as const;

export const AREA_PINS = [
  { key: "centre", lat: 35.7595, lon: -5.833 },
  { key: "malabata", lat: 35.7765, lon: -5.798 },
  { key: "spartel", lat: 35.791, lon: -5.934 },
  { key: "marshan", lat: 35.7885, lon: -5.818 },
  { key: "kasbah", lat: 35.7878, lon: -5.8127 },
  { key: "california", lat: 35.768, lon: -5.805 },
  { key: "gzenaya", lat: 35.726, lon: -5.78 },
] as const;

export const MAP_CENTER = { lat: 35.765, lon: -5.84 } as const;
