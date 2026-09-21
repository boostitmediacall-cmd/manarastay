"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useLocale } from "next-intl";
import { useTransition } from "react";

const LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  ar: "AR",
  nl: "NL",
};

export function LanguageSwitcher({
  compact = false,
}: {
  compact?: boolean;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-0.5 rounded-full bg-sand/80 p-1",
        compact && "justify-center",
      )}
      role="group"
      dir="ltr"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            disabled={pending}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: code });
              });
            }}
            className={cn(
              "rounded-full px-2 py-1 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs",
              active
                ? "bg-navy text-white"
                : "text-navy/60 hover:bg-white hover:text-navy",
            )}
            aria-current={active ? "true" : undefined}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
