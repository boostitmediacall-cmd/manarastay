import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="container-site py-28 text-center">
      <p className="eyebrow">Manara Stay</p>
      <h1 className="heading mt-3 text-4xl sm:text-5xl">{t("title")}</h1>
      <p className="mx-auto mt-4 max-w-md text-navy/70">{t("body")}</p>
      <Link href="/" className="btn-primary mt-8">
        {t("cta")}
      </Link>
    </section>
  );
}
