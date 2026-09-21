import { Reveal } from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";

export async function AdsCompliance() {
  const t = await getTranslations("ads");

  return (
    <section className="bg-sandfade py-16 sm:py-20">
      <div className="container-site max-w-3xl text-center mx-auto">
        <Reveal>
          <h2 className="heading text-3xl sm:text-4xl">{t("complianceTitle")}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
            {t("complianceBody")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
