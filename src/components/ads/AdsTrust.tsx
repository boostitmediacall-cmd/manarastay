import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eye, MapPin, UserRound } from "lucide-react";
import { getTranslations } from "next-intl/server";

const CARDS = [
  { key: "transparency" as const, icon: Eye, n: "01" },
  { key: "local" as const, icon: MapPin, n: "02" },
  { key: "one" as const, icon: UserRound, n: "03" },
];

export async function AdsTrust() {
  const t = await getTranslations("ads");

  return (
    <section className="scroll-mt-24 bg-sandfade py-14 sm:py-20">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title={t("trustTitle")}
            subtitle={t("trustSubtitle")}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {CARDS.map(({ key, icon: Icon, n }) => (
            <Reveal key={key}>
              <article className="card h-full border border-navy/5 p-7">
                <div className="mb-5 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8E4DB] text-coral">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className="font-heading text-lg font-semibold text-coral/70">
                    {n}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {t(`trust.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {t(`trust.${key}.body`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
