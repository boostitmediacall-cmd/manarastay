type ConversionPayload = {
  method: "form" | "whatsapp";
  page?: string;
  lead_type?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConversion(payload: ConversionPayload) {
  if (typeof window === "undefined") return;

  const event =
    payload.method === "whatsapp" ? "whatsapp_click" : "generate_lead";
  const detail = {
    event,
    method: payload.method,
    lead_type: payload.lead_type ?? "owner_estimate",
    page: payload.page ?? "site",
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(detail);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, {
      method: detail.method,
      lead_type: detail.lead_type,
      page: detail.page,
    });
  }
}

export function trackLeadConversion(payload: {
  lead_type?: string;
  page?: string;
} = {}) {
  pushConversion({
    method: "form",
    page: payload.page,
    lead_type: payload.lead_type,
  });
}

export function trackWhatsAppClick(payload: { page?: string } = {}) {
  pushConversion({
    method: "whatsapp",
    page: payload.page,
    lead_type: "owner_whatsapp",
  });
}
