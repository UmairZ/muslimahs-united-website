import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8c4f6b] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
      <p className="text-[#4b5563] text-lg leading-relaxed mb-10 max-w-2xl">{t("intro")}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ContactForm />
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#edd8de]">
            <h2 className="font-bold text-[#1f2937] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("infoTitle")}</h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[#6b7280] text-xs uppercase tracking-wide">{t("emailLabel")}</dt>
                <dd className="text-[#4b5563] italic">{t("emailPlaceholder")}</dd>
              </div>
              <div>
                <dt className="text-[#6b7280] text-xs uppercase tracking-wide">{t("phoneLabel")}</dt>
                <dd className="text-[#4b5563] italic">{t("phonePlaceholder")}</dd>
              </div>
              <div>
                <dt className="text-[#6b7280] text-xs uppercase tracking-wide">Location</dt>
                <dd className="text-[#4b5563]">Portland, Oregon / Pacific Northwest</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
