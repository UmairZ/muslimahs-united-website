import { useTranslations } from "next-intl";

export default function CrisisResources() {
  const t = useTranslations("hwrap");
  return (
    <div className="bg-[#6b2d8c] text-white py-4 px-6" role="complementary" aria-label="Crisis resources">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-center">
        <span>⚠️ {t("crisisFooter")}</span>
      </div>
    </div>
  );
}
