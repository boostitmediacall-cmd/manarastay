import { Reveal } from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";

export async function NoPromise() {
  const t = await getTranslations("trust");

  return (
    <section className="bg-sandfade py-16 sm:py-20">
      <div className="container-site max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow justify-center">{t("noPromiseEyebrow")}</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">{t("noPromiseTitle")}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
            {t("noPromiseBody")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
