"use client";

import { usePathname } from "@/i18n/navigation";
import { trackWhatsAppClick } from "@/lib/analytics";
import { SITE } from "@/lib/site";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9 9 0 1 1 12 21zm5-6.6c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.3 8 8 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.2-.3c.1-.1.1-.2 0-.4l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a10.6 10.6 0 0 0 4 3.5c.6.3 1 .4 1.4.3.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1s-.2-.2-.5-.3z" />
    </svg>
  );
}

type WhatsAppLinkProps = {
  className?: string;
  label?: string;
  floating?: boolean;
  variant?: "button" | "plain";
};

export function WhatsAppLink({
  className = "",
  label,
  floating = false,
  variant = "button",
}: WhatsAppLinkProps) {
  const pathname = usePathname();
  const page = pathname === "/conciergerie" ? "conciergerie" : "site";

  function onClick() {
    trackWhatsAppClick({ page });
  }

  if (variant === "plain") {
    const text = label ?? SITE.phoneDisplay;
    return (
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={text}
        className={`inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-coral ${className}`}
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={
        floating
          ? "fixed bottom-5 end-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5"
          : `inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-95 ${className}`
      }
    >
      <WhatsAppIcon />
      {label ?? "WhatsApp"}
    </a>
  );
}
