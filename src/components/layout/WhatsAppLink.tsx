"use client";

import { usePathname } from "@/i18n/navigation";
import { trackWhatsAppClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <FaWhatsapp className={className} aria-hidden="true" />;
}

type WhatsAppLinkProps = {
  className?: string;
  label?: string;
  floating?: boolean;
  /** Bouton flottant réduit à l'icône sur mobile. */
  compact?: boolean;
  /** Masque le bouton flottant tant que l'élément portant cet id est à l'écran. */
  hideWhileVisibleId?: string;
  variant?: "button" | "plain";
};

export function WhatsAppLink({
  className = "",
  label,
  floating = false,
  compact = false,
  hideWhileVisibleId,
  variant = "button",
}: WhatsAppLinkProps) {
  const pathname = usePathname();
  const page = pathname === "/conciergerie" ? "conciergerie" : "site";
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
    if (!floating || !hideWhileVisibleId) return;
    const target = document.getElementById(hideWhileVisibleId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setHidden(entry.isIntersecting),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [floating, hideWhileVisibleId, pathname]);

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
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={
        floating
          ? cn(
              "fixed z-40 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-lift transition hover:-translate-y-0.5",
              compact
                ? "bottom-4 end-4 h-14 w-14 sm:bottom-5 sm:end-5 sm:h-auto sm:min-h-12 sm:w-auto sm:px-4 sm:py-3 sm:text-sm"
                : "bottom-5 end-5 min-h-12 px-4 py-3 text-sm",
              hidden && "pointer-events-none translate-y-4 opacity-0",
            )
          : `inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-95 ${className}`
      }
    >
      <WhatsAppIcon
        className={floating && compact ? "h-7 w-7 sm:h-5 sm:w-5" : undefined}
      />
      <span className={floating && compact ? "sr-only sm:not-sr-only" : undefined}>
        {label ?? "WhatsApp"}
      </span>
    </a>
  );
}
