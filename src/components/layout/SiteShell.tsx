"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LandingFooter } from "@/components/layout/LandingFooter";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const landing = pathname === "/conciergerie";
  const t = useTranslations("whatsapp");

  return (
    <div
      className={cn("flex min-h-screen flex-col bg-white", landing && "max-sm:pb-20")}
    >
      {landing ? <LandingHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      {landing ? <LandingFooter /> : <Footer />}
      <WhatsAppLink
        floating
        compact={landing}
        hideWhileVisibleId={landing ? "estimer" : undefined}
        label={t("label")}
      />
    </div>
  );
}
