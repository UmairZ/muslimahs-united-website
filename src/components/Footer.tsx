import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const locale = useLocale();

  function localePath(path: string) {
    return `/${locale}${path}`;
  }

  return (
    <footer className="bg-[#8c4f6b] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/muslimahs-united-logo.jpg"
                alt="Muslimahs United"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <span className="font-bold text-lg leading-tight" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Muslimahs<br />United
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">{t("tagline")}</p>
            <p className="text-xs text-white/60">{t("nonprofit")}</p>
            <p className="text-xs text-white/60">{t("ein")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/", tn("home")],
                ["/about", tn("about")],
                ["/programs/hwrap", tn("hwrap")],
                ["/activities", tn("activities")],
                ["/contact", tn("contact")],
                ["/donate", tn("donate")],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={localePath(href)} className="text-white/80 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Portland, Oregon / Pacific Northwest</li>
              <li>
                <span className="text-white/50 italic text-xs">Contact info coming soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>{t("copyright")}</p>
          <Link href={localePath("/privacy")} className="hover:text-white/80 transition-colors">
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
