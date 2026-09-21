import { Coverage } from "@/components/home/Coverage";
import { LeadForm } from "@/components/home/LeadForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function ZonePage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("zonePage");

  return (
    <>
      <PageIntro title={t("title")} intro={t("intro")} />
      <Coverage withHeading={false} />
      <LeadForm source="zone" />
    </>
  );
}
