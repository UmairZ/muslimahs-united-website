"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const US_STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

export default function HwrapIntakeForm() {
  const t = useTranslations("intake");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inOregon, setInOregon] = useState("");
  const [familyType, setFamilyType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/hwrap/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call the National DV Hotline: 1-800-799-7233.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#6b2d8c] text-white p-8 text-center shadow-md">
        <div className="text-4xl mb-4" aria-hidden="true">✓</div>
        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("successTitle")}</h3>
        <p className="text-white/90 leading-relaxed">{t("successText")}</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-[#edd8de] bg-white text-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-[#6b2d8c]/40 focus:border-[#6b2d8c]";
  const labelClass = "block text-sm font-medium text-[#1f2937] mb-1";

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>{t("firstName")} <span className="text-[#c94a67]" aria-label={t("required")}>*</span></label>
          <input id="firstName" name="firstName" type="text" required autoComplete="off" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>{t("lastName")} <span className="text-[#c94a67]" aria-label={t("required")}>*</span></label>
          <input id="lastName" name="lastName" type="text" required autoComplete="off" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>{t("address")}</label>
        <input id="address" name="address" type="text" autoComplete="off" className={inputClass} />
      </div>
      <div>
        <label htmlFor="addressLength" className={labelClass}>{t("addressLength")}</label>
        <input id="addressLength" name="addressLength" type="text" autoComplete="off" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>{t("email")}</label>
          <input id="email" name="email" type="email" autoComplete="off" className={inputClass} />
          <p className="text-xs text-[#6b7280] mt-1">{t("emailHelper")}</p>
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>{t("phone")}</label>
          <input id="phone" name="phone" type="tel" autoComplete="off" className={inputClass} />
          <p className="text-xs text-[#6b7280] mt-1">{t("phoneHelper")}</p>
        </div>
      </div>

      <div>
        <fieldset>
          <legend className={labelClass}>{t("inOregon")}</legend>
          <div className="flex gap-6 mt-1">
            {[["yes", t("yes")], ["no", t("no")]].map(([val, label]) => (
              <label key={val} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="inOregon" value={val} onChange={() => setInOregon(val)} className="text-[#6b2d8c]" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {inOregon === "no" && (
        <div>
          <label htmlFor="state" className={labelClass}>{t("state")}</label>
          <select id="state" name="state" className={inputClass}>
            <option value="">Select state</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      <div>
        <fieldset>
          <legend className={labelClass}>{t("familyType")}</legend>
          <div className="flex flex-wrap gap-6 mt-1">
            {[["single", t("single")], ["couple", t("couple")], ["withChildren", t("withChildren")]].map(([val, label]) => (
              <label key={val} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="familyType" value={val} onChange={() => setFamilyType(val)} className="text-[#6b2d8c]" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {familyType === "withChildren" && (
        <div>
          <label htmlFor="numChildren" className={labelClass}>{t("numChildren")}</label>
          <input id="numChildren" name="numChildren" type="number" min="1" max="20" className={`${inputClass} w-28`} />
        </div>
      )}

      <div>
        <label htmlFor="situation" className={labelClass}>{t("situation")} <span className="text-[#c94a67]" aria-label={t("required")}>*</span></label>
        <textarea id="situation" name="situation" required rows={5} autoComplete="off" className={inputClass + " resize-y"} />
      </div>

      {error && (
        <div role="alert" className="rounded-lg bg-[#c94a67]/10 border border-[#c94a67]/30 p-4 text-sm text-[#c94a67]">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#6b2d8c] text-white font-bold hover:bg-[#5a2478] disabled:opacity-60 transition-colors focus:outline-none focus:ring-4 focus:ring-[#6b2d8c]/50 text-base"
      >
        {loading ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
