"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { galleryItems } from "@/lib/data";

export default function HomePage() {
  const { t, locale } = useI18n();
  const featured = galleryItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="fade-up">
            <p className="uppercase text-sm tracking-widest text-brand-700 mb-3">
              {t.siteTagline}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-900 leading-tight mb-4">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg text-ink-800 mb-8 max-w-md">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-3 rounded-md font-medium transition"
              >
                {t.home.ctaAppointment}
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white px-6 py-3 rounded-md font-medium transition"
              >
                {t.home.ctaGallery}
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-96 fade-up">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2">
              {galleryItems.slice(0, 9).map((g, i) => (
                <div
                  key={g.id}
                  className="overflow-hidden rounded-lg shadow-lg"
                  style={{ animation: `float ${5 + (i % 3)}s ease-in-out infinite` }}
                >
                  <img src={g.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">
          {t.home.featuredTitle}
        </h2>
        <div className="w-16 h-1 bg-brand-600 mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-lg aspect-square mb-3">
                <img
                  src={item.image}
                  alt={locale === "zh" ? item.titleZh : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="font-medium text-ink-900">
                {locale === "zh" ? item.titleZh : item.titleEn}
              </h3>
              <p className="text-sm text-ink-700">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="text-brand-700 hover:text-brand-900 font-medium underline underline-offset-4"
          >
            {t.nav.gallery} →
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-100/60 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">
            {t.home.processTitle}
          </h2>
          <div className="w-16 h-1 bg-brand-600 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.home.step1Title, desc: t.home.step1Desc },
              { title: t.home.step2Title, desc: t.home.step2Desc },
              { title: t.home.step3Title, desc: t.home.step3Desc },
              { title: t.home.step4Title, desc: t.home.step4Desc },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-brand-50 p-6 rounded-lg shadow-sm border border-brand-200"
              >
                <h3 className="font-display text-lg font-bold text-brand-700 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-800 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
