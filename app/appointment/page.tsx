"use client";

import { FormEvent, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function AppointmentPage() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const date = data.get("date") as string;

    if (date < minDate) {
      setStatus("error");
      setErrMsg(t.appointment.errorDate);
      return;
    }

    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrMsg(t.appointment.errorRequired);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.appointment.title}</h1>
      <p className="text-ink-700 mt-2 mb-8">{t.appointment.subtitle}</p>

      <div className="bg-brand-100/60 border-l-4 border-brand-600 p-5 rounded mb-8">
        <h3 className="font-bold text-ink-900 mb-2">{t.appointment.noticeTitle}</h3>
        <ul className="text-sm text-ink-800 space-y-1">
          <li>• {t.appointment.notice1}</li>
          <li>• {t.appointment.notice2}</li>
          <li>• {t.appointment.notice3}</li>
        </ul>
      </div>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-900 p-6 rounded text-center">
          <p className="font-medium">{t.appointment.success}</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 underline text-green-800"
          >
            {t.appointment.title}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-brand-50 p-6 rounded-xl border border-brand-200">
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
            <label className="block text-sm font-medium text-ink-800 mb-1">
              {t.appointment.project}
            </label>
            <textarea
              name="project"
              rows={4}
              placeholder={t.appointment.projectPlaceholder}
              className="w-full px-3 py-2 rounded-md border border-brand-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {status === "error" && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">
              {errMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-md font-medium transition disabled:opacity-60"
          >
            {status === "loading" ? t.appointment.submitting : t.appointment.submit}
          </button>
        </form>
      )}
    </section>
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
