"use client";

import { Logo } from "@/components/brand/Logo";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";

function homeHref(locale: string, hash?: string) {
  const base = locale === "fr" ? "/" : `/${locale}`;
  if (!hash) return base;
  return `${base}#${hash}`;
}

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex">
            <Logo inverted />
          </Link>
          <p className="mt-5 font-heading text-base font-semibold leading-snug">
            {SITE.name} — {t("slogan")}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">
            {t("location")}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {t("tagline")}
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold">{t("linksTitle")}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={homeHref(locale)} className="hover:text-white">
                {nav("home")}
              </a>
            </li>
            <li>
              <a href={homeHref(locale, "services")} className="hover:text-white">
                {nav("services")}
              </a>
            </li>
            <li>
              <Link href="/comment-ca-marche" className="hover:text-white">
                {nav("how")}
              </Link>
            </li>
            <li>
              <Link href="/garanties" className="hover:text-white">
                {nav("guarantees")}
              </Link>
            </li>
            <li>
              <Link href="/avis" className="hover:text-white">
                {nav("reviews")}
              </Link>
            </li>
            <li>
              <Link href="/zone" className="hover:text-white">
                {nav("zone")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                {nav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold">{t("contactTitle")}</p>
          <div className="mt-4">
            <ContactDetails inverted />
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold">{t("languages")}</p>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
          <p className="mt-6 text-xs text-white/40">{SITE.parent}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site py-6">
          <p className="text-xs text-white/35">
            © {year} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
