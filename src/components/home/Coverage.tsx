import { AREA_KEYS } from "@/lib/site";
import { CoverageMap } from "@/components/home/CoverageMap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Coverage({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  const t = await getTranslations("zone");

  return (
    <section id="zone" className="scroll-mt-24 bg-sandfade py-20 sm:py-24">
      <div className="container-site">
        {withHeading ? (
          <Reveal>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
          </Reveal>
        ) : null}

        <div
          className={`grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr] ${withHeading ? "mt-12" : ""}`}
        >
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-card">
              <CoverageMap />
              <p className="px-5 py-3 text-xs text-navy/50">
                {t("mapCaption")} © OpenStreetMap
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {AREA_KEYS.map((key, index) => (
              <Reveal key={key} delay={index * 40}>
                <li className="flex min-w-0 items-center gap-3 rounded-2xl border border-navy/8 bg-white px-4 py-4 shadow-sm">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8E4DB] text-coral">
                    <MapPin size={16} />
                  </span>
                  <span className="text-sm font-medium text-navy">
                    {t(`areas.${key}`)}
                  </span>
                  <span className="ms-auto font-heading text-sm font-semibold text-coral/70">
                    0{index + 1}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-navy/60">{t("note")}</p>
      </div>
    </section>
  );
}
