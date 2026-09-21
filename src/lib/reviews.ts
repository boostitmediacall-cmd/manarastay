export const REVIEW_PREVIEW_COUNT = 6;

export type ReviewRegion = "morocco" | "tennessee" | "california";

export type GuestReview = {
  id: string;
  name: string;
  rating: number;
  quote: string;
  lang: "fr" | "en" | "zh";
  avatar: "coral" | "navy" | "turquoise";
  profile:
    | { kind: "airbnbYears"; years: number }
    | { kind: "city"; city: string; region: ReviewRegion };
  date: { kind: "weeksAgo"; count: number } | { kind: "month"; month: 7; year: 2026 };
};

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: "zaynab",
    name: "Zaynab",
    rating: 5,
    lang: "fr",
    avatar: "coral",
    profile: { kind: "airbnbYears", years: 3 },
    date: { kind: "weeksAgo", count: 3 },
    quote:
      "Logement conforme à la description, emplacement au top au cœur de la kasbah, à deux pas de tous les petits coins charmants à découvrir à pied. Un vrai plaisir pour profiter...",
  },
  {
    id: "dong",
    name: "Dong",
    rating: 5,
    lang: "zh",
    avatar: "navy",
    profile: { kind: "airbnbYears", years: 10 },
    date: { kind: "weeksAgo", count: 2 },
    quote:
      "我们很开心在Tarik的房子度过安静的一周，可爱的房子，有很多的上下楼梯的练习；)",
  },
  {
    id: "yanez",
    name: "Yanez",
    rating: 5,
    lang: "fr",
    avatar: "turquoise",
    profile: { kind: "airbnbYears", years: 9 },
    date: { kind: "month", month: 7, year: 2026 },
    quote:
      "Nous avons passé un peu plus de trois jours dans ce magnifique riad situé au cœur de Bab El Kasbah, et cette expérience a largement contribué à rendre notre premie...",
  },
  {
    id: "ghassan",
    name: "Ghassan",
    rating: 5,
    lang: "en",
    avatar: "coral",
    profile: { kind: "city", city: "Rabat", region: "morocco" },
    date: { kind: "month", month: 7, year: 2026 },
    quote: "Lovely stay in Tangier's Kasbah. Clean, comfortable, and perfectly located. Highly recommended!",
  },
  {
    id: "corey",
    name: "Corey",
    rating: 5,
    lang: "en",
    avatar: "navy",
    profile: { kind: "city", city: "Bristol", region: "tennessee" },
    date: { kind: "month", month: 7, year: 2026 },
    quote: "Great location and very spacious.",
  },
  {
    id: "loic",
    name: "Loic",
    rating: 5,
    lang: "en",
    avatar: "turquoise",
    profile: { kind: "city", city: "San Francisco", region: "california" },
    date: { kind: "month", month: 7, year: 2026 },
    quote: "A fantastic stay I recommend, thank you Tarik!",
  },
];
