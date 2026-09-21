"use client";

import { SITE } from "@/lib/site";
import { useTranslations } from "next-intl";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";

export function ContactDetails({ inverted = false }: { inverted?: boolean }) {
  const t = useTranslations("footer");
  const muted = inverted ? "text-white/70" : "text-navy/70";
  const strong = inverted ? "text-white" : "text-navy";

  return (
    <address className="not-italic">
      <p className={`font-heading text-sm font-semibold ${strong}`}>{SITE.name}</p>
      <ul className={`mt-4 space-y-2 text-sm ${muted}`}>
        <li>
          <a
            href={`tel:+${SITE.whatsapp.replace(/\D/g, "")}`}
            className="hover:text-coral"
          >
            {SITE.phoneDisplay}
          </a>
        </li>
        <li>
          <a href={`mailto:${SITE.email}`} className="hover:text-coral">
            {SITE.email}
          </a>
        </li>
        <li>
          <span className="block leading-relaxed">{SITE.address}</span>
        </li>
        <li>
          <WhatsAppLink className="!px-4 !py-2 !text-xs" label={t("whatsapp")} />
        </li>
      </ul>
    </address>
  );
}
