import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "donate" });
  return { title: t("title") };
}

export default function DonatePage() {
  const t = useTranslations("donate");
  const locale = useLocale();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8c4f6b] mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
        <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Trust signals */}
      <div className="bg-[#8c4f6b] text-white rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <div className="text-3xl" aria-hidden="true">🏛️</div>
        <div>
          <p className="font-bold text-lg">{t("nonprofitBadge")}</p>
          <p className="text-white/80 text-sm">{t("ein")}</p>
          <p className="text-white/80 text-sm">{t("taxDeductible")}</p>
        </div>
      </div>

      {/* Impact */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#edd8de] mb-8">
        <h2 className="text-xl font-bold text-[#1f2937] mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("impactTitle")}</h2>
        <p className="text-[#4b5563] leading-relaxed">{t("impactText")}</p>
      </div>

      {/* Donate button */}
      <div className="bg-[#f5ecf0] rounded-2xl p-8 mb-6 text-center border border-[#edd8de]">
        <h2 className="text-xl font-bold text-[#1f2937] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("donateTitle")}</h2>
        <p className="text-sm text-[#6b7280] mb-6">{t("donateNote")}</p>

        {/* PayPal embed placeholder */}
        <div className="inline-block bg-[#ffc439] rounded-xl px-8 py-4 font-bold text-[#003087] text-xl shadow-md">
          Pay<span className="text-[#009cde]">Pal</span> Donate Button
        </div>
        <p className="text-xs text-[#6b7280] mt-4 italic">
          PayPal donate button embed code will be placed here once provided by the client.
        </p>
      </div>

      {/* Mail option */}
      <div className="text-center text-sm text-[#6b7280]">
        <p className="font-semibold text-[#1f2937] mb-1">{t("mailTitle")}</p>
        <p>{t("mailText")}{" "}
          <Link href={`/${locale}/contact`} className="text-[#8c4f6b] font-semibold hover:underline">{t("contactUs")}</Link>
        </p>
      </div>
    </div>
  );
}
