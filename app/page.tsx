"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { galleryItems, beforeAfterItems } from "@/lib/data";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const { t, locale } = useI18n();
  const featured = galleryItems.slice(0, 6);

  const tiers = [
    { title: t.pricing.tierSmallTitle, desc: t.pricing.tierSmallDesc, price: t.pricing.tierSmallPrice },
    { title: t.pricing.tierMediumTitle, desc: t.pricing.tierMediumDesc, price: t.pricing.tierMediumPrice, featured: true },
    { title: t.pricing.tierLargeTitle, desc: t.pricing.tierLargeDesc, price: t.pricing.tierLargePrice },
    { title: t.pricing.tierCustomTitle, desc: t.pricing.tierCustomDesc, price: t.pricing.tierCustomPrice },
  ];

  return (
    <>
      {/* Hero */}
      <section id="home" className="hero-gradient">
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
              <a
                href="#gallery"
                className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white px-6 py-3 rounded-md font-medium transition"
              >
                {t.home.ctaGallery}
              </a>
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
        <div className="text-center pb-8 text-brand-700 animate-pulse text-2xl">↓</div>
      </section>

      {/* Featured Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">
            {t.home.featuredTitle}
          </h2>
          <div className="w-16 h-1 bg-brand-600 mb-10" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div className="group">
                <div className="overflow-hidden rounded-lg aspect-[4/5] mb-3">
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
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-block border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white px-6 py-3 rounded-md font-medium transition"
            >
              {locale === "zh" ? "查看完整作品集" : "View Full Gallery"} →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Before / After */}
      <section id="before-after" className="bg-ink-900 text-brand-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.beforeAfter.title}</h2>
            <div className="w-16 h-1 bg-brand-400 mb-3" />
            <p className="text-brand-100/80 mb-10">{t.beforeAfter.subtitle}</p>
          </Reveal>
          <div className="space-y-12">
            {beforeAfterItems.map((item) => (
              <Reveal key={item.id}>
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                  beforeLabel={locale === "zh" ? "改造前" : "Before"}
                  afterLabel={locale === "zh" ? "改造後" : "After"}
                />
                <div className="text-center mt-4">
                  <h3 className="font-display text-lg text-brand-100">
                    {locale === "zh" ? item.titleZh : item.titleEn}
                  </h3>
                  <p className="text-sm text-brand-200/70 italic mt-1">{t.beforeAfter.dragHint}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-brand-100/60 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">
              {t.home.processTitle}
            </h2>
            <div className="w-16 h-1 bg-brand-600 mb-10" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.home.step1Title, desc: t.home.step1Desc },
              { title: t.home.step2Title, desc: t.home.step2Desc },
              { title: t.home.step3Title, desc: t.home.step3Desc },
              { title: t.home.step4Title, desc: t.home.step4Desc },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-brand-50 p-6 rounded-lg shadow-sm border border-brand-200 h-full">
                  <h3 className="font-display text-lg font-bold text-brand-700 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-800 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.pricing.title}</h2>
          <div className="w-16 h-1 bg-brand-600 mb-3" />
          <p className="text-ink-700 mb-10">{t.pricing.subtitle}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`p-6 rounded-xl border h-full ${
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
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-100/50 p-6 rounded-xl">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-3">✓ {t.pricing.includes}</h3>
              <ul className="space-y-1.5 text-sm text-ink-800">
                <li>• {t.pricing.include1}</li>
                <li>• {t.pricing.include2}</li>
                <li>• {t.pricing.include3}</li>
                <li>• {t.pricing.include4}</li>
              </ul>
            </div>
            <div className="bg-ink-900/5 p-6 rounded-xl">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-3">✗ {t.pricing.notIncludes}</h3>
              <ul className="space-y-1.5 text-sm text-ink-800">
                <li>• {t.pricing.notInclude1}</li>
                <li>• {t.pricing.notInclude2}</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/appointment"
              className="inline-block bg-brand-700 hover:bg-brand-800 text-white px-8 py-3 rounded-md font-medium transition"
            >
              {t.pricing.requestQuote}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-brand-100/40 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.contact.title}</h2>
            <div className="w-16 h-1 bg-brand-600 mb-3" />
            <p className="text-ink-700 mb-8">{t.contact.subtitle}</p>
          </Reveal>

          <Reveal>
            <a
              href="https://line.me/R/ti/p/@your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04c] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 mb-10"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.7 7.4 8.8 8 .4.1.9.3 1 .6.1.3.1.7 0 1l-.2 1.1c0 .4-.3 1.4 1.2.8 1.5-.6 8-4.7 10.9-8 2-2.2 3.3-4.5 3.3-7.5C26.9 5.6 22.4 2 12 2z" />
              </svg>
              {t.contact.lineButton}
            </a>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: t.contact.phone, value: t.contact.phoneValue, href: `tel:${t.contact.phoneValue.replace(/\s/g, "")}` },
              { label: t.contact.email, value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
              { label: t.contact.address, value: t.contact.addressValue },
              { label: t.contact.hours, value: t.contact.hoursValue },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                {c.href ? (
                  <a href={c.href} className="block bg-brand-50 border border-brand-200 p-5 rounded-xl hover:border-brand-400 transition">
                    <p className="text-xs uppercase tracking-wider text-brand-700 font-medium">{c.label}</p>
                    <p className="text-ink-900 mt-1">{c.value}</p>
                  </a>
                ) : (
                  <div className="bg-brand-50 border border-brand-200 p-5 rounded-xl">
                    <p className="text-xs uppercase tracking-wider text-brand-700 font-medium">{c.label}</p>
                    <p className="text-ink-900 mt-1">{c.value}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mt-8">
              <p className="text-sm text-ink-800">📍 {t.contact.walkin}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
