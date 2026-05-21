"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function PaymentPage() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/payment-slip", { method: "POST", body: form });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.payment.title}</h1>
      <p className="text-ink-700 mt-2 mb-10">{t.payment.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl">
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

        <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#06C755] text-white grid place-items-center text-sm font-bold">L</span>
            <h3 className="font-display text-xl font-bold text-ink-900">{t.payment.linePayTitle}</h3>
          </div>
          <p className="text-sm text-ink-800 mb-3">{t.payment.linePayDesc}</p>
          <div className="w-32 h-32 bg-white border border-brand-200 rounded grid place-items-center text-xs text-ink-700">
            QR Code
          </div>
        </div>
      </div>

      <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mb-10">
        <h3 className="font-bold text-ink-900 mb-2">⏱ {t.payment.timingTitle}</h3>
        <ul className="text-sm text-ink-800 space-y-1">
          <li>• {t.payment.timing1}</li>
          <li>• {t.payment.timing2}</li>
          <li>• {t.payment.timing3}</li>
        </ul>
      </div>

      <div className="bg-ink-900/5 p-5 rounded mb-10">
        <h3 className="font-bold text-ink-900 mb-1">{t.payment.walkinTitle}</h3>
        <p className="text-sm text-ink-800">{t.payment.walkinDesc}</p>
      </div>

      <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl">
        <h3 className="font-display text-xl font-bold text-ink-900 mb-2">{t.payment.slipTitle}</h3>
        <p className="text-sm text-ink-700 mb-5">{t.payment.slipDesc}</p>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 text-green-900 p-4 rounded text-center">
            <p className="font-medium">{t.payment.slipSuccess}</p>
            <button onClick={() => setStatus("idle")} className="mt-2 underline text-sm">↺</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink-800 mb-1">
                  {t.payment.slipName}
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-800 mb-1">
                  {t.payment.slipAmount}
                </label>
                <input
                  name="amount"
                  type="number"
                  required
                  className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-800 mb-1">
                {t.payment.slipFile}
              </label>
              <input
                name="slip"
                type="file"
                accept="image/*"
                required
                className="w-full text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-2.5 rounded-md font-medium transition disabled:opacity-60"
            >
              {status === "loading" ? "…" : t.payment.slipSubmit}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-700">Error — please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
