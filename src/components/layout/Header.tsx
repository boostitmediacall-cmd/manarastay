"use client";

import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import type { Pathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

type NavItem =
  | { kind: "hash"; hash: string; key: "services" }
  | { kind: "path"; href: Pathname; key: "home" | "how" | "guarantees" | "reviews" | "zone" };

const LINKS: NavItem[] = [
  { kind: "path", href: "/", key: "home" },
  { kind: "hash", hash: "services", key: "services" },
  { kind: "path", href: "/comment-ca-marche", key: "how" },
  { kind: "path", href: "/garanties", key: "guarantees" },
  { kind: "path", href: "/avis", key: "reviews" },
  { kind: "path", href: "/zone", key: "zone" },
];

function homeHref(locale: string, hash?: string) {
  const base = locale === "fr" ? "/" : `/${locale}`;
  if (!hash) return base;
  return `${base}#${hash}`;
}

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-white/90 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center gap-4">
        <Link
          href="/"
          aria-label="Manara Stay"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 2xl:gap-6 xl:flex"
          aria-label="Principal"
        >
          {LINKS.map((link) => {
            const className =
              "whitespace-nowrap text-[13px] font-medium text-navy/70 transition hover:text-navy";
            if (link.kind === "hash") {
              return (
                <a
                  key={link.key}
                  href={homeHref(locale, link.hash)}
                  className={className}
                >
                  {t(link.key)}
                </a>
              );
            }
            return (
              <Link key={link.key} href={link.href} className={className}>
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Link href="/contact" className="btn-primary !py-2.5 !text-[13px]">
            {t("cta")}
          </Link>
        </div>

        <div className="ms-auto flex items-center gap-2 xl:hidden">
          <Link
            href="/contact"
            className="btn-primary !px-3.5 !py-2 !text-[12px] sm:!px-4"
          >
            {t("cta")}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-navy/5 bg-white xl:hidden">
          <nav
            className="container-site flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {LINKS.map((link) => {
              const className =
                "rounded-2xl px-3 py-3 text-sm font-medium text-navy hover:bg-sand";
              if (link.kind === "hash") {
                return (
                  <a
                    key={link.key}
                    href={homeHref(locale, link.hash)}
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                );
              }
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={className}
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              {t("cta")}
            </Link>
            <div className="mt-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
