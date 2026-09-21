import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTranslations } from "next-intl/server";

const STEPS = ["1", "2", "3", "4"] as const;

export async function HowItWorks({
  withCta = true,
}: {
  withCta?: boolean;
}) {
  const t = await getTranslations("how");

  return (
    <section id="methode" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step} delay={index * 70}>
              <li className="relative overflow-hidden rounded-3xl border border-navy/8 bg-white p-6 shadow-card">
                <span className="font-heading text-4xl font-semibold text-coral/30">
                  0{step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {t(`steps.${step}.body`)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        {withCta ? (
          <Reveal>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                {t("cta")}
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
