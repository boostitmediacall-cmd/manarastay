import { Analytics } from "@/components/layout/Analytics";
import { SiteShell } from "@/components/layout/SiteShell";
import { routing } from "@/i18n/routing";
import { SITE, IMAGES } from "@/lib/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Noto_Sans_Arabic, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      locale === routing.defaultLocale ? "/" : `/${locale}`,
    ]),
  );

  return {
    metadataBase: new URL(SITE.url),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/logo.svg",
      apple: "/logo.svg",
    },
    alternates: {
      canonical: "/",
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE.url,
      siteName: SITE.name,
      locale: params.locale,
      type: "website",
      images: [{ url: IMAGES.hero, alt: SITE.name }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${poppins.variable} ${inter.variable} ${arabic.variable}`}
    >
      <body
        data-locale={locale}
        className={`antialiased ${locale === "ar" ? "font-arabic" : "font-sans"}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Analytics />
          <SiteShell>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
