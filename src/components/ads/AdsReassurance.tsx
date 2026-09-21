import { Reveal } from "@/components/ui/Reveal";
import { CalendarDays, MessagesSquare, Receipt, Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";

const POINTS = [
  { key: "calendar" as const, icon: CalendarDays },
  { key: "income" as const, icon: Receipt },
  { key: "follow" as const, icon: Shield },
  { key: "exchange" as const, icon: MessagesSquare },
];

export async function AdsReassurance() {
  const t = await getTranslations("ads");

  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-site">
        <Reveal>
          <h2 className="heading text-3xl text-white sm:text-4xl">
            {t("reassuranceTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t("reassuranceSubtitle")}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {POINTS.map(({ key, icon: Icon }) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-coral-light">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-heading text-base font-semibold">
                    {t(`reassurance.${key}.title`)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {t(`reassurance.${key}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
