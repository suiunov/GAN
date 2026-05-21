"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-brand-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl text-brand-200 mb-2">{t.siteName}</h3>
          <p className="text-sm text-brand-100/80">{t.siteTagline}</p>
        </div>
        <div className="text-sm text-brand-100/90">
          <div>{t.contact.address}: {t.contact.addressValue}</div>
          <div className="mt-1">{t.contact.phone}: {t.contact.phoneValue}</div>
          <div className="mt-1">{t.contact.email}: {t.contact.emailValue}</div>
          <div className="mt-1">{t.contact.hours}: {t.contact.hoursValue}</div>
        </div>
        <div className="text-sm text-brand-100/70">
          <p>{t.footer.builtBy}</p>
          <p className="mt-3">© {year} {t.siteName} · {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
