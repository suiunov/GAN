"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function PricingPage() {
  const { t } = useI18n();

  const tiers = [
    { title: t.pricing.tierSmallTitle, desc: t.pricing.tierSmallDesc, price: t.pricing.tierSmallPrice },
    { title: t.pricing.tierMediumTitle, desc: t.pricing.tierMediumDesc, price: t.pricing.tierMediumPrice, featured: true },
    { title: t.pricing.tierLargeTitle, desc: t.pricing.tierLargeDesc, price: t.pricing.tierLargePrice },
    { title: t.pricing.tierCustomTitle, desc: t.pricing.tierCustomDesc, price: t.pricing.tierCustomPrice },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.pricing.title}</h1>
      <p className="text-ink-700 mt-2 mb-10">{t.pricing.subtitle}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border ${
              tier.featured
                ? "bg-brand-700 text-brand-50 border-brand-700 shadow-lg scale-[1.02]"
                : "bg-brand-50 border-brand-200"
            }`}
          >
            <h3 className={`font-display text-xl font-bold mb-1 ${tier.featured ? "text-white" : "text-ink-900"}`}>
              {tier.title}
            </h3>
            <p className={`text-sm mb-4 ${tier.featured ? "text-brand-100" : "text-ink-700"}`}>
              {tier.desc}
            </p>
            <p className={`text-2xl font-bold ${tier.featured ? "text-white" : "text-brand-700"}`}>
              {tier.price}
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-brand-100/50 p-6 rounded-xl">
          <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
            ✓ {t.pricing.includes}
          </h3>
          <ul className="space-y-2 text-sm text-ink-800">
            <li>• {t.pricing.include1}</li>
            <li>• {t.pricing.include2}</li>
            <li>• {t.pricing.include3}</li>
            <li>• {t.pricing.include4}</li>
          </ul>
        </div>
        <div className="bg-ink-900/5 p-6 rounded-xl">
          <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
            ✗ {t.pricing.notIncludes}
          </h3>
          <ul className="space-y-2 text-sm text-ink-800">
            <li>• {t.pricing.notInclude1}</li>
            <li>• {t.pricing.notInclude2}</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/appointment"
          className="inline-block bg-brand-700 hover:bg-brand-800 text-white px-8 py-3 rounded-md font-medium transition"
        >
          {t.pricing.requestQuote}
        </Link>
      </div>
    </section>
  );
}
