import { LighthouseMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";

export async function Story() {
  const t = await getTranslations("story");

  return (
    <section
      id="concept"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute -end-8 top-8 opacity-[0.12] sm:end-8 sm:top-10"
        aria-hidden
      >
        <LighthouseMark inverted className="h-56 w-44 sm:h-72 sm:w-56" />
      </div>
      <div className="container-site relative grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow text-coral-light">{t("eyebrow")}</p>
          <h2 className="heading mt-3 max-w-xl whitespace-pre-line text-3xl text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t("body")}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t("vision")}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <p className="text-sm leading-relaxed text-white/70">{t("principlesLead")}</p>
            <p className="mt-5 font-heading text-2xl font-semibold tracking-tight text-coral-light sm:text-3xl">
              {t("principles")}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/75">{t("closing")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
