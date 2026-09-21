import type { MetadataRoute } from "next";
import { routing, type Pathname } from "@/i18n/routing";
import { SITE } from "@/lib/site";

const PATHS: Pathname[] = [
  "/",
  "/comment-ca-marche",
  "/garanties",
  "/avis",
  "/zone",
  "/contact",
  "/conciergerie",
];

function localizedPath(locale: string, path: Pathname) {
  const entry = routing.pathnames[path];
  const localized =
    typeof entry === "string" ? entry : entry[locale as keyof typeof entry];
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE.url}${prefix}${localized === "/" ? "" : localized}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedPath(locale, path),
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localizedPath(l, path)]),
        ),
      },
    })),
  );
}
