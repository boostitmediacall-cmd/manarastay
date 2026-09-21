import { Link } from "@/i18n/navigation";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export async function Founder() {
  const t = await getTranslations("founder");

  return (
    <section id="apropos" className="scroll-mt-24 bg-navy py-14 text-white sm:py-16">
      <div className="container-site grid items-center gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12">
        <Reveal>
          <Photo
            src={IMAGES.founder}
            alt={t("imageAlt")}
            objectPosition="82% 30%"
            className="mx-auto aspect-[4/3] w-full max-w-[16rem] rounded-3xl border border-white/10 shadow-lift"
            sizes="(min-width: 1024px) 16rem, 16rem"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow text-coral-light">{t("eyebrow")}</p>
          <h2 className="heading mt-3 max-w-2xl text-3xl text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {t("body")}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {t("approach")}
          </p>
          <p className="mt-6 font-heading text-base font-semibold text-white">
            {t("name")}
          </p>
          <p className="mt-1 text-sm text-white/55">{t("role")}</p>
          <Link href="/contact" className="btn-primary mt-6">
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
