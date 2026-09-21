import { HowItWorks } from "@/components/home/HowItWorks";
import { LeadForm } from "@/components/home/LeadForm";
import { Photo } from "@/components/ui/Photo";
import { IMAGES } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function HowPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("howPage");

  return (
    <>
      <section className="bg-sandfade pb-8 pt-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="heading text-4xl sm:text-5xl">{t("title")}</h1>
            <p className="mt-5 max-w-xl text-lg text-navy/70">{t("intro")}</p>
          </div>
          <Photo
            src={IMAGES.welcome}
            alt={t("imageAlt")}
            className="h-64 w-full rounded-3xl sm:h-80"
            sizes="(min-width: 1024px) 50vw, 100vw"
            objectPosition="50% 60%"
          />
        </div>
      </section>
      <HowItWorks withCta={false} />
      <section className="container-site grid gap-5 pb-8 sm:grid-cols-2">
        {(["detail1", "detail2", "detail3", "detail4"] as const).map((key, i) => (
          <article
            key={key}
            className="rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8"
          >
            <span className="font-heading text-sm font-semibold text-coral">
              0{i + 1}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-navy/75">{t(key)}</p>
          </article>
        ))}
      </section>
      <LeadForm source="how" />
    </>
  );
}
