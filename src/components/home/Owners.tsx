import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTranslations } from "next-intl/server";

const NEEDS = ["local", "contact", "stays", "visibility"] as const;

export async function Owners() {
  const t = await getTranslations("owners");

  return (
    <section id="proprietaires" className="scroll-mt-24 bg-sandfade py-20 sm:py-24">
      <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <p className="mt-8 text-base text-navy">{t("closing")}</p>
          <Link href="/contact" className="btn-primary mt-6">
            {t("cta")}
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-coral">
            {t("needsTitle")}
          </p>
          <ul className="mt-5 space-y-3">
            {NEEDS.map((key) => (
              <li
                key={key}
                className="rounded-2xl border border-navy/8 bg-white px-5 py-4 text-sm leading-relaxed text-navy/80 shadow-sm"
              >
                {t(`needs.${key}`)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
