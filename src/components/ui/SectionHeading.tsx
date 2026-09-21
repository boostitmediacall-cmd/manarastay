import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  as = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const Title = as;
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", light && "text-coral-light")}>{eyebrow}</p>
      ) : null}
      <Title
        className={cn(
          "heading mt-3 whitespace-pre-line text-3xl sm:text-4xl",
          light && "text-white",
          titleClassName,
        )}
      >
        {title}
      </Title>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-navy/70",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
