import { Trust } from "@/components/home/Trust";
import { LeadForm } from "@/components/home/LeadForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function GuaranteesPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("guaranteesPage");

  return (
    <>
      <PageIntro title={t("title")} intro={t("intro")} />
      <Trust />
      <section className="container-site grid gap-5 pb-8 lg:grid-cols-3">
        <article className="rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-navy">{t("p1Title")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">{t("p1")}</p>
        </article>
        <article className="rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-navy">{t("p2Title")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">{t("p2")}</p>
        </article>
        <article className="rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-heading text-xl font-semibold text-navy">{t("p3Title")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">{t("p3")}</p>
        </article>
      </section>
      <LeadForm source="guarantees" />
    </>
  );
}
