import { AdsCompliance } from "@/components/ads/AdsCompliance";
import { AdsFaq } from "@/components/ads/AdsFaq";
import { AdsHero } from "@/components/ads/AdsHero";
import { AdsReassurance } from "@/components/ads/AdsReassurance";
import { AdsTrust } from "@/components/ads/AdsTrust";
import { LeadForm } from "@/components/home/LeadForm";
import { SITE } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ads" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE.url}/conciergerie`,
      languages: {
        fr: `${SITE.url}/conciergerie`,
      },
    },
  };
}

export default async function ConciergeriePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <AdsHero />
      <AdsTrust />
      <AdsReassurance />
      <AdsCompliance />
      <AdsFaq />
      <LeadForm variant="simple" heading={false} source="conciergerie" />
    </>
  );
}
