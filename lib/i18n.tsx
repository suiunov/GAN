"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (saved === "zh" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
