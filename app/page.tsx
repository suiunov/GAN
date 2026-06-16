"use client";

import { FormEvent, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { galleryItems, beforeAfterItems, type GalleryCategory } from "@/lib/data";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";

type GalleryFilter = "all" | GalleryCategory;
type FormStatus = "idle" | "loading" | "success" | "error";

export default function HomePage() {
  const { t, locale } = useI18n();

  // Gallery state
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("all");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const galleryFilters: { key: GalleryFilter; label: string }[] = [
    { key: "all", label: t.gallery.filterAll },
    { key: "wall", label: t.gallery.filterWall },
    { key: "floor", label: t.gallery.filterFloor },
    { key: "table", label: t.gallery.filterTable },
    { key: "portrait", label: t.gallery.filterPortrait },
    { key: "custom", label: t.gallery.filterCustom },
  ];
  const filteredItems = galleryFilter === "all" ? galleryItems : galleryItems.filter((g) => g.category === galleryFilter);
  const activeItem = activeItemId ? galleryItems.find((g) => g.id === activeItemId) : null;

  // Appointment state
  const [apptStatus, setApptStatus] = useState<FormStatus>("idle");
  const [apptErr, setApptErr] = useState("");
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);
  async function handleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const date = data.get("date") as string;
    if (date < minDate) {
      setApptStatus("error");
      setApptErr(t.appointment.errorDate);
      return;
    }
    setApptStatus("loading");
    setApptErr("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setApptStatus("success");
      form.reset();
    } catch {
      setApptStatus("error");
      setApptErr(t.appointment.errorRequired);
    }
  }

  // Payment slip state
  const [payStatus, setPayStatus] = useState<FormStatus>("idle");
  async function handlePaymentSlip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPayStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/payment-slip", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setPayStatus("success");
      form.reset();
    } catch {
      setPayStatus("error");
    }
  }

  // Pricing tiers
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
            <p className="uppercase text-sm tracking-widest text-brand-700 mb-3">{t.siteTagline}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-900 leading-tight mb-4">{t.home.heroTitle}</h1>
            <p className="text-lg text-ink-800 mb-8 max-w-md">{t.home.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#appointment" className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-3 rounded-md font-medium transition">
                {t.home.ctaAppointment}
              </a>
              <a href="#gallery" className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white px-6 py-3 rounded-md font-medium transition">
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

      {/* Gallery (full, filterable) */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.gallery.title}</h2>
          <div className="w-16 h-1 bg-brand-600 mb-3" />
          <p className="text-ink-700 mb-8">{t.gallery.subtitle}</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setGalleryFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  galleryFilter === f.key ? "bg-brand-700 text-white" : "bg-brand-100 text-ink-800 hover:bg-brand-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <button onClick={() => setActiveItemId(item.id)} className="group text-left w-full">
                <div className="overflow-hidden rounded-lg aspect-[4/5] mb-3 shadow-sm">
                  <img
                    src={item.image}
                    alt={locale === "zh" ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="font-medium text-ink-900">{locale === "zh" ? item.titleZh : item.titleEn}</h3>
                <p className="text-sm text-ink-700">{item.price}</p>
              </button>
            </Reveal>
          ))}
        </div>

        {activeItem && (
          <div className="fixed inset-0 z-50 bg-ink-900/80 grid place-items-center p-4" onClick={() => setActiveItemId(null)}>
            <div
              className="bg-brand-50 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeItem.image} alt="" className="w-full md:w-2/3 object-cover h-64 md:h-auto" />
              <div className="p-6 md:w-1/3 overflow-auto">
                <h2 className="text-2xl font-bold text-ink-900 mb-4">
                  {locale === "zh" ? activeItem.titleZh : activeItem.titleEn}
                </h2>
                <dl className="text-sm space-y-2">
                  <div>
                    <dt className="text-ink-700 font-medium">{t.gallery.size}</dt>
                    <dd>{locale === "zh" ? activeItem.sizeZh : activeItem.sizeEn}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-700 font-medium">{t.gallery.material}</dt>
                    <dd>{locale === "zh" ? activeItem.materialZh : activeItem.materialEn}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-700 font-medium">{t.gallery.duration}</dt>
                    <dd>{locale === "zh" ? activeItem.durationZh : activeItem.durationEn}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-700 font-medium">{t.gallery.price}</dt>
                    <dd className="text-lg font-semibold text-brand-700">{activeItem.price}</dd>
                  </div>
                </dl>
                <button onClick={() => setActiveItemId(null)} className="mt-6 w-full bg-brand-700 hover:bg-brand-800 text-white py-2 rounded-md">
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
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
                  <h3 className="font-display text-lg text-brand-100">{locale === "zh" ? item.titleZh : item.titleEn}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.home.processTitle}</h2>
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
                  <h3 className="font-display text-lg font-bold text-brand-700 mb-2">{s.title}</h3>
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
                  tier.featured ? "bg-brand-700 text-brand-50 border-brand-700 shadow-lg scale-[1.02]" : "bg-brand-50 border-brand-200"
                }`}
              >
                <h3 className={`font-display text-xl font-bold mb-1 ${tier.featured ? "text-white" : "text-ink-900"}`}>{tier.title}</h3>
                <p className={`text-sm mb-4 ${tier.featured ? "text-brand-100" : "text-ink-700"}`}>{tier.desc}</p>
                <p className={`text-2xl font-bold ${tier.featured ? "text-white" : "text-brand-700"}`}>{tier.price}</p>
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
            <a href="#appointment" className="inline-block bg-brand-700 hover:bg-brand-800 text-white px-8 py-3 rounded-md font-medium transition">
              {t.pricing.requestQuote}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Appointment */}
      <section id="appointment" className="max-w-3xl mx-auto px-4 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.appointment.title}</h2>
          <div className="w-16 h-1 bg-brand-600 mb-3" />
          <p className="text-ink-700 mb-8">{t.appointment.subtitle}</p>
        </Reveal>

        <Reveal>
          <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mb-8">
            <h3 className="font-bold text-ink-900 mb-2">{t.appointment.noticeTitle}</h3>
            <ul className="text-sm text-ink-800 space-y-1">
              <li>• {t.appointment.notice1}</li>
              <li>• {t.appointment.notice2}</li>
              <li>• {t.appointment.notice3}</li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          {apptStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-900 p-6 rounded text-center">
              <p className="font-medium">{t.appointment.success}</p>
              <button onClick={() => setApptStatus("idle")} className="mt-4 underline text-green-800">
                {t.appointment.title}
              </button>
            </div>
          ) : (
            <form onSubmit={handleAppointment} className="space-y-5 bg-brand-50 p-6 rounded-xl border border-brand-200">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t.appointment.name} name="name" required />
                <Field label={t.appointment.phone} name="phone" type="tel" required />
                <Field label={t.appointment.lineId} name="lineId" />
                <Field label={t.appointment.email} name="email" type="email" />
                <Field label={t.appointment.date} name="date" type="date" min={minDate} required />
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-1">
                    {t.appointment.time} <span className="text-brand-700">*</span>
                  </label>
                  <select
                    name="time"
                    required
                    defaultValue=""
                    className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="" disabled>—</option>
                    <option value="morning">{t.appointment.timeMorning}</option>
                    <option value="afternoon">{t.appointment.timeAfternoon}</option>
                    <option value="evening">{t.appointment.timeEvening}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-800 mb-1">{t.appointment.project}</label>
                <textarea
                  name="project"
                  rows={4}
                  placeholder={t.appointment.projectPlaceholder}
                  className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              {apptStatus === "error" && (
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">{apptErr}</div>
              )}
              <button
                type="submit"
                disabled={apptStatus === "loading"}
                className="w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-md font-medium transition disabled:opacity-60"
              >
                {apptStatus === "loading" ? t.appointment.submitting : t.appointment.submit}
              </button>
            </form>
          )}
        </Reveal>
      </section>

      {/* Payment */}
      <section id="payment" className="bg-brand-100/40 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{t.payment.title}</h2>
            <div className="w-16 h-1 bg-brand-600 mb-3" />
            <p className="text-ink-700 mb-10">{t.payment.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Reveal>
              <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-brand-700 text-white grid place-items-center text-sm font-bold">$</span>
                  <h3 className="font-display text-xl font-bold text-ink-900">{t.payment.bankTitle}</h3>
                </div>
                <ul className="text-sm text-ink-800 space-y-1.5 mt-2">
                  <li>{t.payment.bankName}</li>
                  <li>{t.payment.bankAccount}</li>
                  <li>{t.payment.bankHolder}</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#06C755] text-white grid place-items-center text-sm font-bold">L</span>
                  <h3 className="font-display text-xl font-bold text-ink-900">{t.payment.linePayTitle}</h3>
                </div>
                <p className="text-sm text-ink-800 mb-3">{t.payment.linePayDesc}</p>
                <div className="w-32 h-32 bg-white border border-brand-200 rounded grid place-items-center text-xs text-ink-700">QR Code</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mb-8">
              <h3 className="font-bold text-ink-900 mb-2">⏱ {t.payment.timingTitle}</h3>
              <ul className="text-sm text-ink-800 space-y-1">
                <li>• {t.payment.timing1}</li>
                <li>• {t.payment.timing2}</li>
                <li>• {t.payment.timing3}</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-ink-900/5 p-5 rounded mb-8">
              <h3 className="font-bold text-ink-900 mb-1">{t.payment.walkinTitle}</h3>
              <p className="text-sm text-ink-800">{t.payment.walkinDesc}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl">
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">{t.payment.slipTitle}</h3>
              <p className="text-sm text-ink-700 mb-5">{t.payment.slipDesc}</p>
              {payStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-900 p-4 rounded text-center">
                  <p className="font-medium">{t.payment.slipSuccess}</p>
                  <button onClick={() => setPayStatus("idle")} className="mt-2 underline text-sm">↺</button>
                </div>
              ) : (
                <form onSubmit={handlePaymentSlip} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-800 mb-1">{t.payment.slipName}</label>
                      <input name="name" required className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-800 mb-1">{t.payment.slipAmount}</label>
                      <input name="amount" type="number" required className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-800 mb-1">{t.payment.slipFile}</label>
                    <input name="slip" type="file" accept="image/*" required className="w-full text-sm" />
                  </div>
                  <button
                    type="submit"
                    disabled={payStatus === "loading"}
                    className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-2.5 rounded-md font-medium transition disabled:opacity-60"
                  >
                    {payStatus === "loading" ? "…" : t.payment.slipSubmit}
                  </button>
                  {payStatus === "error" && <p className="text-sm text-red-700">Error — please try again.</p>}
                </form>
              )}
            </div>
          </Reveal>
        </div>
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

function Field({
  label,
  name,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-800 mb-1">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
