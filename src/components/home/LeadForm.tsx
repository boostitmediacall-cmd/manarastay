"use client";

import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { trackLeadConversion } from "@/lib/analytics";
import { CITIES, PROPERTY_TYPES, SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, type FormEvent } from "react";

type Variant = "full" | "simple";

type LeadFormProps = {
  heading?: boolean;
  variant?: Variant;
  source?: string;
  className?: string;
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
] as const;

// Doit correspondre au formulaire de détection public/__forms.html.
const NETLIFY_FORM_NAME = "proprietaires";
const NETLIFY_FORM_ENDPOINT = "/__forms.html";

type LeadError = "invalid" | "failed";

function readTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  const values: Record<(typeof UTM_KEYS)[number], string> = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
  };
  for (const key of UTM_KEYS) {
    values[key] = params.get(key) ?? "";
  }
  return values;
}

function LeadFormInner({
  heading = true,
  variant = "full",
  source = "site",
  className = "",
}: LeadFormProps) {
  const t = useTranslations("lead");
  const ads = useTranslations("ads");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | LeadError | "ok">(
    "idle",
  );
  const [tracking, setTracking] = useState<Record<(typeof UTM_KEYS)[number], string>>(
    {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      gclid: "",
    },
  );
  const landing = source === "conciergerie";

  useEffect(() => {
    setTracking(readTrackingParams());
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (typeof window !== "undefined") {
      const params = readTrackingParams();
      for (const key of UTM_KEYS) {
        formData.set(key, params[key] || tracking[key] || "");
      }
    }

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    if (name.length < 2 || phone.length < 8) {
      setStatus("invalid");
      return;
    }

    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value.trim());
    });

    try {
      const response = await fetch(NETLIFY_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } catch {
      setStatus("failed");
      return;
    }

    setStatus("ok");
    form.reset();
    trackLeadConversion({ page: source, lead_type: "owner_estimate" });
  }

  const successCard = (
    <div className="rounded-3xl border border-navy/8 bg-white p-8 text-center shadow-card sm:p-10">
      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F8E4DB] text-coral">
        <CheckCircle2 size={32} strokeWidth={1.8} />
      </div>
      <h3 className="font-heading text-2xl text-navy">{t("successTitle")}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy/70">
        {t("success")}
      </p>
      <div className="mt-6">
        <WhatsAppLink label={t("whatsappCta")} />
      </div>
      <p className="mt-3 text-xs text-navy/50">{t("whatsappHint")}</p>
    </div>
  );

  const formCard = (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8"
    >
      {landing ? (
        <div className="mb-6">
          <h2 className="heading text-2xl sm:text-3xl">{ads("formTitle")}</h2>
        </div>
      ) : null}

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page" value={source} />
      {UTM_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={tracking[key]} />
      ))}
      {variant === "simple" ? (
        <input type="hidden" name="property_type" value="autre" />
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          {t("name")}
          <input name="name" required minLength={2} className="input mt-1.5" />
        </label>
        <label className="block text-sm font-medium text-navy">
          {t("phone")}
          <input
            name="phone"
            type="tel"
            required
            minLength={8}
            className="input mt-1.5"
          />
        </label>
        <label
          className={`block text-sm font-medium text-navy ${variant === "simple" ? "sm:col-span-2" : ""}`}
        >
          {t("city")}
          <select name="city" required className="input mt-1.5" defaultValue="tanger">
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {t(`cities.${city}`)}
              </option>
            ))}
          </select>
        </label>
        {variant === "full" ? (
          <label className="block text-sm font-medium text-navy">
            {t("type")}
            <select
              name="property_type"
              required
              className="input mt-1.5"
              defaultValue="appartement"
            >
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {t(`types.${type}`)}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>

      {variant === "full" ? (
        <label className="mt-4 block text-sm font-medium text-navy">
          {t("message")}
          <textarea
            name="message"
            rows={4}
            className="input mt-1.5 resize-none"
            placeholder={t("messagePlaceholder")}
          />
        </label>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading"
          ? t("sending")
          : landing
            ? ads("formSubmit")
            : t("submit")}
      </button>

      {status === "invalid" || status === "failed" ? (
        <p className="mt-4 text-sm text-coral-dark">{t("error")}</p>
      ) : null}

      <div className="mt-6 rounded-2xl border border-navy/8 bg-sand/70 p-4 text-center">
        <p className="text-sm font-medium text-navy">
          {landing ? ads("formWhatsappAlt") : t("whatsappAlt")}
        </p>
        <p className="mt-1 text-xs text-navy/60">{SITE.phoneDisplay}</p>
        <WhatsAppLink className="mt-3 w-full sm:w-auto" label={t("whatsappCta")} />
      </div>
    </form>
  );

  if (landing) {
    return (
      <section id="estimer" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            {status === "ok" ? successCard : formCard}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="estimer"
      className={`scroll-mt-24 bg-sandfade py-20 sm:py-24 ${className}`}
    >
      <div
        className={
          heading
            ? "container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            : "container-site max-w-2xl"
        }
      >
        {heading ? (
          <div>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">{t("title")}</h2>
            <p className="mt-4 max-w-md text-navy/70">{t("subtitle")}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/60">
              {t("estimateNote")}
            </p>
            <div className="mt-8 hidden lg:block">
              <p className="text-sm font-medium text-navy">{t("whatsappAlt")}</p>
              <p className="mt-1 text-xs text-navy/55">{SITE.phoneDisplay}</p>
              <WhatsAppLink className="mt-4" label={t("whatsappCta")} />
            </div>
          </div>
        ) : null}

        {status === "ok" ? successCard : formCard}
      </div>
    </section>
  );
}

export function LeadForm(props: LeadFormProps) {
  return <LeadFormInner {...props} />;
}
