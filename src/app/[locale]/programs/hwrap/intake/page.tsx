import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import CrisisResources from "@/components/CrisisResources";
import HwrapIntakeForm from "@/components/HwrapIntakeForm";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "intake" });
  return { title: t("title"), robots: { index: false } };
}

export default function HwrapIntakePage() {
  const t = useTranslations("intake");

  return (
    <>
      <CrisisResources />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#6b2d8c] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
        <p className="text-[#6b7280] mb-8">{t("subtitle")}</p>
        <div className="bg-white rounded-2xl shadow-sm border border-[#edd8de] p-6 sm:p-8">
          <HwrapIntakeForm />
        </div>
      </div>

      <CrisisResources />
    </>
  );
}
