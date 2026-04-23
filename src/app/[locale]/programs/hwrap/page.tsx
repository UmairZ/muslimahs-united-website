import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import CrisisResources from "@/components/CrisisResources";
import type { Metadata } from "next";

export const headers = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
  "Pragma": "no-cache",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hwrap" });
  return {
    title: t("title"),
    robots: { index: false },
  };
}

export default function HwrapPage() {
  const t = useTranslations("hwrap");
  const locale = useLocale();

  const services = [
    t("service1"), t("service2"), t("service3"), t("service4"), t("service5"),
  ];
  const howItems = [
    t("how1"), t("how2"), t("how3"), t("how4"),
  ];

  return (
    <>
      <CrisisResources />

      {/* Safety notice */}
      <div className="bg-[#6b2d8c]/8 border-b border-[#6b2d8c]/20 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-white border border-[#6b2d8c]/30 p-6 shadow-sm">
            <h2 className="font-bold text-[#6b2d8c] text-lg mb-3 flex items-center gap-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              <span aria-hidden="true">🔒</span> {t("safetyTitle")}
            </h2>
            <p className="text-[#4b5563] text-sm mb-3">{t("safetyText")}</p>
            <ul className="list-disc list-inside text-sm text-[#4b5563] space-y-1 mb-4">
              <li>{t("safetyTip1")}</li>
              <li>{t("safetyTip2")}</li>
              <li>{t("safetyTip3")}</li>
            </ul>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#c94a67]">{t("safetyDanger")}</p>
              <p className="text-sm text-[#4b5563]">{t("safetyHotline")}</p>
              <p className="text-sm text-[#4b5563]">{t("safetyCrisisText")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12">
          <Image src="/images/hwrap-logo.png" alt="HWRAP" width={100} height={100} className="object-contain shrink-0" />
          <div>
            <p className="text-sm text-[#8c4f6b] font-medium mb-1">{t("subtitle")}</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#6b2d8c]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#edd8de]">
            <h2 className="text-xl font-bold text-[#6b2d8c] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("missionTitle")}</h2>
            <p className="text-[#4b5563] leading-relaxed text-sm">{t("missionText")}</p>
          </section>

          {/* Services */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#edd8de]">
            <h2 className="text-xl font-bold text-[#6b2d8c] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("servicesTitle")}</h2>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4b5563]">
                  <span className="w-5 h-5 rounded-full bg-[#6b2d8c]/15 flex items-center justify-center text-[#6b2d8c] font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* How we help */}
          <section className="bg-[#6b2d8c] rounded-2xl p-8 text-white md:col-span-2">
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("howTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {howItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c89b6d] font-bold text-lg shrink-0" aria-hidden="true">{i + 1}.</span>
                  <p className="text-white/90 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA to intake form */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#1f2937] mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("intakeTitle")}</h2>
          <p className="text-[#6b7280] mb-6">Confidential · No cost · No obligation to proceed</p>
          <Link href={`/${locale}/programs/hwrap/intake`} className="inline-flex items-center px-8 py-4 rounded-xl bg-[#6b2d8c] text-white font-bold text-lg hover:bg-[#5a2478] transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-[#6b2d8c]/50">
            {t("intakeTitle")} →
          </Link>
        </div>
      </div>

      <CrisisResources />
    </>
  );
}
