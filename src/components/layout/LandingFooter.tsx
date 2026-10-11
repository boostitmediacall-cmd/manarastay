"use client";

import { Logo } from "@/components/brand/Logo";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { useTranslations } from "next-intl";

export function LandingFooter() {
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();
  const phoneHref = `tel:+${SITE.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-12">
        <Link href="/" className="inline-flex" aria-label="Manara Stay">
          <Logo inverted />
        </Link>
        <p className="mt-5 font-heading text-base font-semibold">{SITE.name}</p>
        <p className="mt-3 text-sm text-white/70">
          <a href={phoneHref} className="hover:text-white">
            {SITE.phoneDisplay}
          </a>
          {" · "}
          <a href={`mailto:${SITE.email}`} className="hover:text-white">
            {SITE.email}
          </a>
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
          {SITE.address}
        </p>
        <p className="mt-5">
          <Link
            href="/"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            {nav("home")}
          </Link>
        </p>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-5 text-xs text-white/40">
          © {year} {SITE.name}.
        </p>
      </div>
    </footer>
  );
}
