import { ReviewsBlock } from "@/components/home/ReviewsBlock";
import { LeadForm } from "@/components/home/LeadForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function ReviewsPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("reviewsPage");

  return (
    <>
      <PageIntro title={t("title")} intro={t("intro")} />
      <ReviewsBlock />
      <LeadForm source="reviews" />
    </>
  );
}
