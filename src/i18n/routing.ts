import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "es", "ar", "nl"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/comment-ca-marche": {
      fr: "/comment-ca-marche",
      en: "/how-it-works",
      es: "/como-funciona",
      ar: "/kayfa-naamal",
      nl: "/hoe-het-werkt",
    },
    "/garanties": {
      fr: "/garanties",
      en: "/transparency",
      es: "/garantias",
      ar: "/damanat",
      nl: "/garanties",
    },
    "/avis": {
      fr: "/avis",
      en: "/reviews",
      es: "/opiniones",
      ar: "/araa",
      nl: "/beoordelingen",
    },
    "/zone": {
      fr: "/zone",
      en: "/area",
      es: "/zona",
      ar: "/mintaqa",
      nl: "/regio",
    },
    "/contact": {
      fr: "/contact",
      en: "/contact",
      es: "/contacto",
      ar: "/ittisal",
      nl: "/contact",
    },
    "/conciergerie": "/conciergerie",
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
