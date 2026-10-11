import { IMAGES } from "@/lib/site";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function AdsHero() {
  const t = await getTranslations("ads");

  return (
    <section id="top" className="bg-sandfade">
      <div className="container-site grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-coral/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-coral">
            {t("badge")}
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[52px]">
            {t("title")}
            <span className="mt-2 block text-2xl text-navy/60 sm:text-3xl lg:text-4xl">
              {t("tagline")}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/65 sm:text-lg">
            {t("subtitle")}
          </p>
          <a
            href="#estimer"
            className="btn-primary mt-8 w-full px-7 py-3.5 text-base sm:w-auto"
          >
            {t("cta")}
          </a>
        </div>

        <div className="relative h-[280px] overflow-hidden rounded-[2rem] shadow-card sm:h-[400px] lg:h-[520px]">
          <Image
            src={IMAGES.hero}
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[80%_28%]"
          />
        </div>
      </div>
    </section>
  );
}
