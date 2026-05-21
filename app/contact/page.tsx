"use client";

import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.contact.title}</h1>
      <p className="text-ink-700 mt-2 mb-8">{t.contact.subtitle}</p>

      <a
        href="https://line.me/R/ti/p/@your-line-id"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04c] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 mb-10"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.7 7.4 8.8 8 .4.1.9.3 1 .6.1.3.1.7 0 1l-.2 1.1c0 .4-.3 1.4 1.2.8 1.5-.6 8-4.7 10.9-8 2-2.2 3.3-4.5 3.3-7.5C26.9 5.6 22.4 2 12 2z"/>
        </svg>
        {t.contact.lineButton}
      </a>

      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard label={t.contact.phone} value={t.contact.phoneValue} href={`tel:${t.contact.phoneValue.replace(/\s/g, "")}`} />
        <InfoCard label={t.contact.email} value={t.contact.emailValue} href={`mailto:${t.contact.emailValue}`} />
        <InfoCard label={t.contact.address} value={t.contact.addressValue} />
        <InfoCard label={t.contact.hours} value={t.contact.hoursValue} />
      </div>

      <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mt-8">
        <p className="text-sm text-ink-800">📍 {t.contact.walkin}</p>
      </div>

      <div className="mt-10 rounded-xl overflow-hidden border border-brand-200">
        <iframe
          title="Studio location"
          width="100%"
          height="320"
          loading="lazy"
          allowFullScreen
          src="https://www.openstreetmap.org/export/embed.html?bbox=121.5%2C25.02%2C121.56%2C25.05&layer=mapnik"
        />
      </div>
    </section>
  );
}

function InfoCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="bg-brand-50 border border-brand-200 p-5 rounded-xl h-full hover:border-brand-400 transition">
      <p className="text-xs uppercase tracking-wider text-brand-700 font-medium">{label}</p>
      <p className="text-ink-900 mt-1">{value}</p>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
