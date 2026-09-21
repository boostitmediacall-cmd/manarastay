"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LandingFooter } from "@/components/layout/LandingFooter";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const landing = pathname === "/conciergerie";
  const t = useTranslations("whatsapp");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {landing ? <LandingHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      {landing ? <LandingFooter /> : <Footer />}
      <WhatsAppLink floating label={t("label")} />
    </div>
  );
}
