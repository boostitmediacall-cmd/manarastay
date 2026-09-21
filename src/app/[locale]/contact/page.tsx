import { LeadForm } from "@/components/home/LeadForm";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { Photo } from "@/components/ui/Photo";
import { IMAGES } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function ContactPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("contactPage");
  const footer = await getTranslations("footer");

  return (
    <>
      <section className="bg-sandfade pt-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="heading text-4xl sm:text-5xl">{t("title")}</h1>
            <p className="mt-5 max-w-xl text-lg text-navy/70">{t("intro")}</p>
            <div className="mt-8 rounded-3xl border border-navy/8 bg-white p-6 shadow-card">
              <p className="font-heading text-sm font-semibold text-navy">
                {footer("contactTitle")}
              </p>
              <div className="mt-4">
                <ContactDetails />
              </div>
            </div>
          </div>
          <Photo
            src={IMAGES.living}
            alt={t("imageAlt")}
            className="h-72 w-full rounded-3xl sm:h-80"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
      <LeadForm source="contact" />
    </>
  );
}
