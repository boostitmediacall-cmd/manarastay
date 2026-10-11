import { Reveal } from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";

const FAQ = ["1", "2", "3", "4", "5"] as const;

export async function AdsFaq() {
  const t = await getTranslations("ads");

  return (
    <section className="py-14 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="heading text-3xl sm:text-4xl">{t("faqTitle")}</h2>
          </Reveal>
          <dl className="mt-8 space-y-4">
            {FAQ.map((key) => (
              <Reveal key={key}>
                <div className="rounded-3xl border border-navy/8 bg-white p-5 shadow-sm sm:p-6">
                  <dt className="font-heading text-base font-semibold text-navy">
                    {t(`faq.${key}.q`)}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-navy/70">
                    {t(`faq.${key}.a`)}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
