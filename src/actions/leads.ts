"use server";

import { CITIES, PROPERTY_TYPES } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";

export type LeadError = "unavailable" | "invalid" | "failed";

export type LeadResult = { ok: true } | { ok: false; error: LeadError };

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readUtmBlock(formData: FormData) {
  const keys = [
    "page",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
  ] as const;
  const parts = keys
    .map((key) => {
      const value = readString(formData, key);
      return value ? `${key}=${value}` : null;
    })
    .filter(Boolean);
  return parts.length ? parts.join(" | ") : "";
}

export async function submitOwnerLead(formData: FormData): Promise<LeadResult> {
  const honeypot = readString(formData, "company");
  if (honeypot) return { ok: true };

  const name = readString(formData, "name");
  const phone = readString(formData, "phone");
  const city = readString(formData, "city");
  const propertyType = readString(formData, "property_type") || "autre";
  const message = readString(formData, "message");
  const locale = readString(formData, "locale");
  const tracking = readUtmBlock(formData);

  if (name.length < 2 || phone.length < 8) {
    return { ok: false, error: "invalid" };
  }

  const cityOk = CITIES.includes(city as (typeof CITIES)[number]);
  const typeOk = PROPERTY_TYPES.includes(
    propertyType as (typeof PROPERTY_TYPES)[number],
  );

  if (!cityOk || !typeOk) {
    return { ok: false, error: "invalid" };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return { ok: false, error: "unavailable" };
  }

  const fullMessage = [message || null, tracking ? `[${tracking}]` : null]
    .filter(Boolean)
    .join("\n\n");

  const { error } = await supabase.from("leads_owners").insert({
    name,
    phone,
    city,
    property_type: propertyType,
    message: fullMessage || null,
    locale: locale || "fr",
  });

  if (error) {
    return { ok: false, error: "failed" };
  }

  return { ok: true };
}

export async function submitContact(formData: FormData): Promise<LeadResult> {
  const honeypot = readString(formData, "company");
  if (honeypot) return { ok: true };

  const name = readString(formData, "name");
  const phone = readString(formData, "phone");
  const message = readString(formData, "message");
  const locale = readString(formData, "locale");
  const email = readString(formData, "email");

  if (name.length < 2 || message.length < 4) {
    return { ok: false, error: "invalid" };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return { ok: false, error: "unavailable" };
  }

  const { error } = await supabase.from("contacts").insert({
    name,
    email: email || null,
    phone: phone || null,
    message,
    locale: locale || "fr",
  });

  if (error) {
    return { ok: false, error: "failed" };
  }

  return { ok: true };
}
