import { CalendarDays, MessagesSquare, Receipt, Shield } from "lucide-react";
import { CalendarPreview } from "@/components/home/CalendarPreview";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTranslations } from "next-intl/server";

const POINTS = [
  { key: "calendar" as const, icon: CalendarDays },
  { key: "income" as const, icon: Receipt },
  { key: "follow" as const, icon: Shield },
  { key: "exchange" as const, icon: MessagesSquare },
];

export async function Trust() {
  const t = await getTranslations("trust");

  return (
    <section id="transparence" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-navy/8 bg-white p-7 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-navy">
                {t("pointsTitle")}
              </h3>
              <div className="mt-6">
                <CalendarPreview />
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="rounded-3xl bg-navy p-7 text-white shadow-card sm:p-8">
              <ul className="space-y-5">
                {POINTS.map(({ key, icon: Icon }) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-coral-light">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-heading text-base font-semibold">
                        {t(`points.${key}.title`)}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">
                        {t(`points.${key}.body`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy/55">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
