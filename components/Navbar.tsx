"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/before-after", label: t.nav.beforeAfter },
    { href: "/appointment", label: t.nav.appointment },
    { href: "/payment", label: t.nav.payment },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-brand-50/90 backdrop-blur border-b border-brand-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brand-400 to-brand-700 grid grid-cols-3 grid-rows-3 gap-px p-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-brand-50/80 rounded-sm" />
            ))}
          </div>
          <span className="font-display text-lg font-bold text-ink-900">{t.siteName}</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-ink-900 mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink-900 mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink-900" />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-brand-600 transition"
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-3 flex border border-brand-300 rounded overflow-hidden text-xs">
            <button
              onClick={() => setLocale("zh")}
              className={`px-2 py-1 ${locale === "zh" ? "bg-brand-600 text-white" : "text-ink-800"}`}
            >
              中文
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 ${locale === "en" ? "bg-brand-600 text-white" : "text-ink-800"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-200 bg-brand-50">
          <div className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-ink-800 hover:text-brand-600"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 mb-3 flex border border-brand-300 rounded overflow-hidden text-xs w-fit">
              <button
                onClick={() => setLocale("zh")}
                className={`px-3 py-1 ${locale === "zh" ? "bg-brand-600 text-white" : "text-ink-800"}`}
              >
                中文
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1 ${locale === "en" ? "bg-brand-600 text-white" : "text-ink-800"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
