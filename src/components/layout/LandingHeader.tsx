"use client";

import { Logo } from "@/components/brand/Logo";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { useTranslations } from "next-intl";

export function LandingHeader() {
  const ads = useTranslations("ads");
  const nav = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-white/90 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <Link href="/" aria-label="Manara Stay" className="shrink-0">
            <Logo />
          </Link>
          <Link
            href="/"
            className="whitespace-nowrap text-[13px] font-medium text-navy/70 transition hover:text-navy"
          >
            {nav("home")}
          </Link>
        </div>
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <WhatsAppLink
            variant="plain"
            label={SITE.phoneDisplay}
            className="!gap-1.5 max-sm:[&>span]:sr-only"
          />
          <a
            href="#estimer"
            className="btn-primary max-w-[11.5rem] !px-3 !py-2 !text-center !text-[12px] !leading-tight sm:max-w-none sm:!px-5 sm:!py-2.5 sm:!text-[13px]"
          >
            {ads("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
