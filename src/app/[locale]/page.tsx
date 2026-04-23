import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: t("heroHeadline") };
}

function PillarCard({ title, desc, cta, href, accent }: { title: string; desc: string; cta: string; href: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col gap-3 shadow-sm border ${accent ? "border-[#6b2d8c]/20 bg-white" : "border-[#edd8de] bg-white"}`}>
      <h3 className={`font-bold text-lg ${accent ? "text-[#6b2d8c]" : "text-[#8c4f6b]"}`} style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
        {title}
      </h3>
      <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{desc}</p>
      <Link href={href} className={`self-start text-sm font-semibold hover:underline ${accent ? "text-[#6b2d8c]" : "text-[#8c4f6b]"}`}>
        {cta} →
      </Link>
    </div>
  );
}

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#8c4f6b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 70% 50%, #e8c547 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {t("heroHeadline")}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">{t("heroSubheadline")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="donate" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#c94a67] text-white font-bold hover:bg-[#b03a57] transition-colors text-base">
                {t("heroCtaDonate")}
              </Link>
              <Link href="programs/hwrap" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-colors text-base border border-white/30">
                {t("heroCtaPrograms")}
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/images/muslimahs-united-logo.jpg"
              alt="Muslimahs United — three diverse hands raised in solidarity against an Islamic geometric pattern"
              width={200}
              height={200}
              className="rounded-full shadow-xl border-4 border-white/30"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="text-2xl font-bold text-[#8c4f6b] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("missionTitle")}</h2>
        <p className="text-[#4b5563] text-lg leading-relaxed">{t("missionText")}</p>
      </section>

      {/* Three Pillars */}
      <section className="bg-[#f5ecf0] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1f2937] text-center mb-8" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("whatWeDoTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard title={t("pillar1Title")} desc={t("pillar1Desc")} cta={t("pillar1Cta")} href="activities" />
            <PillarCard title={t("pillar2Title")} desc={t("pillar2Desc")} cta={t("pillar2Cta")} href="programs/hwrap" accent />
            <PillarCard title={t("pillar3Title")} desc={t("pillar3Desc")} cta="Learn More" href="about" />
          </div>
        </div>
      </section>

      {/* Featured HWRAP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-[#6b2d8c]/20 bg-white shadow-sm overflow-hidden">
          <div className="bg-[#6b2d8c] px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
            <Image src="/images/hwrap-logo.png" alt="HWRAP" width={64} height={64} className="object-contain" />
            <h2 className="text-2xl font-bold text-white text-center sm:text-left" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("hwrapSectionTitle")}</h2>
          </div>
          <div className="px-8 py-6">
            <p className="text-[#4b5563] mb-4 leading-relaxed">{t("hwrapSectionDesc")}</p>
            <p className="text-sm text-[#c94a67] font-semibold mb-6">{t("hwrapCrisis")}</p>
            <Link href="programs/hwrap" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#6b2d8c] text-white font-semibold hover:bg-[#5a2478] transition-colors text-sm">
              {t("hwrapSectionCta")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-[#f5ecf0] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1f2937] mb-8 text-center" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("teamTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Samira", title: "Founder & Executive Director", bio: "Founder of Muslimahs United and the Hidaya Project. Mother, wilderness First Aid Responder, and hike organizer." },
              { name: "Nadia", title: "Board President", bio: "Board President of Muslimahs United." },
              { name: "Layla", title: "Board of Directors", bio: "A beloved elder dedicated to community service locally and internationally." },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#edd8de]">
                <div className="w-16 h-16 rounded-full bg-[#8c4f6b]/15 flex items-center justify-center text-2xl font-bold text-[#8c4f6b] mx-auto mb-3" aria-hidden="true">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-[#1f2937]">{member.name}</h3>
                <p className="text-sm text-[#6b7280] mb-2">{member.title}</p>
                <p className="text-sm text-[#4b5563] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="about" className="text-[#8c4f6b] font-semibold hover:underline text-sm">{t("teamCtaAll")} →</Link>
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="bg-[#e8c547]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-[#1f2937] text-lg font-semibold mb-6">{t("donationBannerText")}</p>
          <Link href="donate" className="inline-flex items-center px-8 py-3 rounded-xl bg-[#c94a67] text-white font-bold text-lg hover:bg-[#b03a57] transition-colors shadow-md">
            {t("donationBannerCta")}
          </Link>
        </div>
      </section>
    </>
  );
}
