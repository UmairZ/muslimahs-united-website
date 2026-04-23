"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#8c4f6b] text-white p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden="true">✓</div>
        <h3 className="text-xl font-bold mb-2">{t("successTitle")}</h3>
        <p className="text-white/90">{t("successText")}</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-[#edd8de] bg-white text-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-[#8c4f6b]/40 focus:border-[#8c4f6b]";
  const labelClass = "block text-sm font-medium text-[#1f2937] mb-1";

  return (
    <div>
      <div className="rounded-xl bg-[#8c4f6b]/8 border border-[#8c4f6b]/20 p-4 mb-6 text-sm text-[#4b5563]">
        {t("hwrapNote")}{" "}
        <Link href={`/${locale}/programs/hwrap/intake`} className="text-[#6b2d8c] font-semibold underline hover:no-underline">
          {t("hwrapLink")}
        </Link>.
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

        <div>
          <label htmlFor="name" className={labelClass}>{t("name")} *</label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClass}>{t("email")} *</label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>{t("phone")}</label>
            <input id="phone" name="phone" type="tel" className={inputClass} />
            <p className="text-xs text-[#6b7280] mt-1">{t("phoneHelper")}</p>
          </div>
        </div>

        <fieldset>
          <legend className={labelClass}>{t("preferredContact")}</legend>
          <div className="flex flex-wrap gap-4 mt-1">
            {[["email", t("contactEmail")], ["phone", t("contactPhone")], ["either", t("contactEither")]].map(([val, label]) => (
              <label key={val} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="preferredContact" value={val} defaultChecked={val === "email"} className="text-[#8c4f6b]" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="subject" className={labelClass}>{t("subject")}</label>
          <input id="subject" name="subject" type="text" className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>{t("message")} *</label>
          <textarea id="message" name="message" required rows={5} className={inputClass + " resize-y"} />
        </div>

        {error && <p role="alert" className="text-sm text-[#c94a67]">{error}</p>}

        <button type="submit" disabled={loading} className="px-8 py-3 rounded-xl bg-[#8c4f6b] text-white font-bold hover:bg-[#7a3e5a] disabled:opacity-60 transition-colors focus:outline-none focus:ring-4 focus:ring-[#8c4f6b]/40">
          {loading ? t("submitting") : t("submit")}
        </button>
      </form>
    </div>
  );
}
