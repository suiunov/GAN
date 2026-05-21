"use client";

import { useI18n } from "@/lib/i18n";
import { beforeAfterItems } from "@/lib/data";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function BeforeAfterPage() {
  const { t, locale } = useI18n();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.beforeAfter.title}</h1>
      <p className="text-ink-700 mt-2 mb-10">{t.beforeAfter.subtitle}</p>

      <div className="space-y-14">
        {beforeAfterItems.map((item) => (
          <div key={item.id}>
            <BeforeAfterSlider
              beforeSrc={item.before}
              afterSrc={item.after}
              beforeLabel={locale === "zh" ? "改造前" : "Before"}
              afterLabel={locale === "zh" ? "改造後" : "After"}
            />
            <div className="mt-4 text-center">
              <h2 className="font-display text-xl font-bold text-ink-900">
                {locale === "zh" ? item.titleZh : item.titleEn}
              </h2>
              <p className="text-sm text-ink-700 mt-1">
                {locale === "zh" ? item.descZh : item.descEn}
              </p>
              <p className="text-xs text-brand-700 mt-2 italic">{t.beforeAfter.dragHint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
