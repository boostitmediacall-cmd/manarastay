import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/site";
import { getTranslations } from "next-intl/server";

const ITEMS = [
  {
    key: "staging" as const,
    n: "01",
    src: IMAGES.staging,
    position: "50% 42%",
  },
  {
    key: "hospitality" as const,
    n: "02",
    src: IMAGES.hospitality,
    position: "50% 70%",
  },
  {
    key: "bookings" as const,
    n: "03",
    src: IMAGES.bookings,
    position: "50% 72%",
  },
  {
    key: "maintenance" as const,
    n: "04",
    src: IMAGES.maintenance,
    position: "50% 58%",
  },
];

export async function Services() {
  const t = await getTranslations("services");

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.key} delay={index * 70}>
              <article className="relative overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-card">
                <Photo
                  src={item.src}
                  alt={t(`${item.key}.imageAlt`)}
                  objectPosition={item.position}
                  className="h-40 w-full rounded-none sm:h-44"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-6">
                  <span className="font-heading text-3xl font-semibold text-coral/30">
                    {item.n}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {t(`${item.key}.body`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-navy/55">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
