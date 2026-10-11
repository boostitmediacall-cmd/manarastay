import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import {
  GUEST_REVIEWS,
  REVIEW_PREVIEW_COUNT,
  type GuestReview,
} from "@/lib/reviews";
import { Star } from "lucide-react";
import { getTranslations } from "next-intl/server";

const AVATAR_CLASS = {
  coral: "bg-[#F8E4DB] text-coral",
  navy: "bg-navy/10 text-navy",
  turquoise: "bg-[#D6EFEF] text-turquoise",
} as const;

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <span className="inline-flex gap-0.5 text-coral" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "" : "text-navy/20"}
          aria-hidden
        />
      ))}
    </span>
  );
}

type ReviewsT = Awaited<ReturnType<typeof getTranslations<"reviews">>>;

function reviewContext(review: GuestReview, t: ReviewsT) {
  if (review.profile.kind === "airbnbYears") {
    return t("yearsOnAirbnb", { count: review.profile.years });
  }

  const regions = {
    morocco: t("regions.morocco"),
    tennessee: t("regions.tennessee"),
    california: t("regions.california"),
  };

  return t("city", {
    city: review.profile.city,
    region: regions[review.profile.region],
  });
}

function reviewDate(review: GuestReview, t: ReviewsT) {
  if (review.date.kind === "weeksAgo") {
    return t("weeksAgo", { count: review.date.count });
  }

  return t("dateMonth", {
    month: t("months.7"),
    year: review.date.year,
  });
}

function quotedText(review: GuestReview) {
  if (review.lang === "zh") return review.quote;
  if (review.lang === "fr") return `\u00AB\u00A0${review.quote}\u00A0\u00BB`;
  return `\u201C${review.quote}\u201D`;
}

export async function ReviewsBlock({
  compact = false,
  dense = false,
}: {
  compact?: boolean;
  dense?: boolean;
}) {
  const t = await getTranslations("reviews");
  const published = GUEST_REVIEWS.filter((item) => item.quote);
  const visible = compact
    ? published.slice(0, REVIEW_PREVIEW_COUNT)
    : published;
  const showAllCta = compact && published.length > REVIEW_PREVIEW_COUNT;

  return (
    <section
      id="avis"
      className={
        compact
          ? cn(
              "scroll-mt-24 bg-sandfade",
              dense ? "py-14 sm:py-20" : "py-20 sm:py-24",
            )
          : "scroll-mt-24 pb-16 pt-4 sm:pb-20"
      }
    >
      <div className="container-site">
        {compact ? (
          <Reveal>
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
            <p className="mt-3 max-w-2xl text-sm text-navy/55">{t("caption")}</p>
          </Reveal>
        ) : null}

        {visible.length === 0 ? (
          <Reveal>
            <div
              className={cn(
                compact ? "mt-12" : "mt-4",
                "rounded-3xl border border-dashed border-navy/15 bg-[#FBF8F4] p-10 text-center",
              )}
            >
              <p className="font-heading text-xl text-navy">{t("emptyTitle")}</p>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy/65">
                {t("emptyBody")}
              </p>
              <Link href="/garanties" className="btn-secondary mt-8">
                {t("ctaCommitments")}
              </Link>
            </div>
          </Reveal>
        ) : (
          <div
            className={cn(
              "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
              compact && "mt-12",
            )}
          >
            {visible.map((item, index) => (
              <Reveal key={item.id} delay={index * 60} className="flex h-full">
                <article className="card flex min-h-full w-full flex-1 flex-col border border-navy/5 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold",
                        AVATAR_CLASS[item.avatar],
                      )}
                      aria-hidden
                    >
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading text-base font-semibold text-navy">
                        {item.name}
                      </p>
                      <p className="text-xs text-navy/50">
                        {reviewContext(item, t)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Stars
                      rating={item.rating}
                      label={t("rating", { rating: item.rating })}
                    />
                    <p className="mt-1.5 text-xs text-navy/50">
                      {reviewDate(item, t)}
                      <span aria-hidden> · </span>
                      {t("stayFewNights")}
                    </p>
                  </div>

                  <p
                    className="mt-4 text-sm leading-relaxed text-navy/80"
                    lang={item.lang === "zh" ? "zh-Hans" : item.lang}
                    dir="auto"
                  >
                    {quotedText(item)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {showAllCta ? (
          <div className="mt-10">
            <Link href="/avis" className="btn-secondary">
              {t("cta")}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
