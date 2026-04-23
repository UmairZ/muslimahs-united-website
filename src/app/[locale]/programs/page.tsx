import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs" });
  return { title: t("title") };
}

export default function ProgramsPage() {
  const t = useTranslations("programs");
  const locale = useLocale();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8c4f6b] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
      <p className="text-[#4b5563] text-lg leading-relaxed mb-12 max-w-3xl">{t("intro")}</p>

      {/* HWRAP featured card */}
      <div className="rounded-2xl overflow-hidden shadow-md border border-[#6b2d8c]/20 mb-8">
        <div className="bg-[#6b2d8c] px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
          <Image src="/images/hwrap-logo.png" alt="HWRAP" width={72} height={72} className="object-contain" />
          <div>
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("hwrapTitle")}</h2>
            <p className="text-white/70 text-xs mt-1">A program of Muslimahs United</p>
          </div>
        </div>
        <div className="bg-white px-8 py-6 flex flex-col sm:flex-row items-start gap-4">
          <p className="text-[#4b5563] leading-relaxed flex-1">{t("hwrapDesc")}</p>
          <Link href={`/${locale}/programs/hwrap`} className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-lg bg-[#6b2d8c] text-white font-semibold hover:bg-[#5a2478] transition-colors text-sm whitespace-nowrap">
            {t("hwrapCta")} →
          </Link>
        </div>
      </div>

      {/* Coming soon */}
      <div className="rounded-2xl border border-dashed border-[#6b7280]/30 bg-white p-8 text-center">
        <p className="text-xl font-bold text-[#6b7280] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("comingSoonTitle")}</p>
        <p className="text-[#6b7280] text-sm">{t("comingSoonDesc")}</p>
      </div>
    </div>
  );
}
