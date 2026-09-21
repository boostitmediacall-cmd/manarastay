import { cn } from "@/lib/cn";
import { useId } from "react";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function LighthouseMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const fill = inverted ? "#F7F1E8" : "#1E2A4A";

  return (
    <svg
      viewBox="0 0 72 92"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <mask id={`${uid}-cut`}>
          <rect width="72" height="92" fill="white" />
          <rect x="36.2" y="14.2" width="1.9" height="9.2" rx="0.4" fill="black" />
          <rect x="39.05" y="14.2" width="1.9" height="9.2" rx="0.4" fill="black" />
          <rect x="41.9" y="14.2" width="1.9" height="9.2" rx="0.4" fill="black" />
          <rect x="44.75" y="14.2" width="1.9" height="9.2" rx="0.4" fill="black" />
          <circle cx="41" cy="50" r="5.1" fill="black" />
          <path
            d="M38.7 50h4.6v9.2c0 .8-.7 1.5-1.5 1.5h-1.6c-.8 0-1.5-.7-1.5-1.5V50Z"
            fill="black"
          />
        </mask>
      </defs>
      <g fill="#E8734A">
        <path d="M32 16.8C22.2 12.2 10.2 7.4 3.2 5.6c.5 1.4.8 2.6 1 3.6 7 1.5 18.2 6 26.4 10.2l1.4-2.6Z" />
        <path d="M32 22.2C21.4 20.2 9.6 19 2.4 19v3.6c7.6 0 18.8 1.2 28.6 3.2l1-3.6Z" />
        <path d="M32 27.4C22.6 30.6 10.6 35.6 3.8 38.6l1.8 3.2c6.8-2.8 18.2-7.6 26.4-10.8v-3.6Z" />
      </g>
      <g fill={fill} mask={`url(#${uid}-cut)`}>
        <circle cx="41" cy="6.2" r="1.55" />
        <path d="M36.2 8.4c0-2.6 2.1-4.2 4.8-4.2s4.8 1.6 4.8 4.2v1.4H36.2V8.4Z" />
        <rect x="35.2" y="9.8" width="11.6" height="2" rx="0.4" />
        <rect x="35.4" y="12.4" width="11.2" height="12.2" rx="0.8" />
        <rect x="31.6" y="24.2" width="18.8" height="3.2" rx="0.6" />
        <path d="M36.4 27.4h9.2L48.6 74.2H33.4L36.4 27.4Z" />
        <path d="M30.4 74.2h21.2l1.2 7.4H29.2l1.2-7.4Z" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LighthouseMark
        inverted={inverted}
        className={cn("h-11 w-9", markClassName)}
      />
      {showWordmark ? (
        <span className="leading-[1.05]">
          <span
            className={cn(
              "block font-heading text-[15px] font-semibold uppercase tracking-[0.14em] sm:text-base",
              inverted ? "text-white" : "text-navy",
            )}
          >
            Manara
          </span>
          <span className="block font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-coral sm:text-xs">
            Stay
          </span>
        </span>
      ) : null}
    </span>
  );
}
