"use client";

import { useTranslations } from "next-intl";

const DAYS = [
  { d: 12, booked: true },
  { d: 13, booked: true },
  { d: 14, booked: true },
  { d: 15, booked: false },
  { d: 16, booked: false },
  { d: 17, booked: true },
  { d: 18, booked: true },
  { d: 19, booked: false },
  { d: 20, booked: true },
  { d: 21, booked: true },
  { d: 22, booked: false },
  { d: 23, booked: false },
  { d: 24, booked: true },
  { d: 25, booked: true },
];

export function CalendarPreview() {
  const t = useTranslations("trust");

  return (
    <div className="rounded-3xl bg-sand p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs font-medium">
        <span className="inline-flex items-center gap-2 text-navy">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          {t("booked")}
        </span>
        <span className="inline-flex items-center gap-2 text-navy">
          <span className="h-2.5 w-2.5 rounded-full bg-white ring-1 ring-navy/15" />
          {t("free")}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2" dir="ltr">
        {DAYS.map((day) => (
          <div
            key={day.d}
            className={`flex aspect-square flex-col items-center justify-center rounded-2xl text-sm font-semibold transition ${
              day.booked
                ? "bg-coral text-white shadow-sm"
                : "bg-white text-navy/70 ring-1 ring-navy/10"
            }`}
          >
            {day.d}
          </div>
        ))}
      </div>
    </div>
  );
}
