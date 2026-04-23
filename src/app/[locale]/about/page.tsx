import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8c4f6b] mb-10" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>

      {/* Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("storyTitle")}</h2>
        <p className="text-[#4b5563] text-lg leading-relaxed">{t("storyText")}</p>
      </section>

      {/* Approach */}
      <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-[#edd8de]">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("approachTitle")}</h2>
        <p className="text-[#4b5563] leading-relaxed">{t("approachText")}</p>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("teamTitle")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Samira",
              title: "Founder & Executive Director",
              bio: "Samira is the Founder of Muslimahs United and the Hidaya Women's Resource and Advocacy Project. She is a mother, a wilderness First Aid Responder, and a hike organizer.",
            },
            {
              name: "Nadia",
              title: "Board President",
              bio: "Bio coming soon. Muslimahs United is grateful for Nadia's leadership as Board President.",
            },
            {
              name: "Layla",
              title: "Board of Directors",
              bio: "Sister Layla has been in the community for many years and is a beloved elder. She has dedicated much of her life to community service locally and internationally, assisting marginalized communities throughout the state.",
            },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#edd8de] flex flex-col gap-3">
              <div className="w-16 h-16 rounded-full bg-[#8c4f6b]/15 flex items-center justify-center text-2xl font-bold text-[#8c4f6b]" aria-hidden="true">
                {member.name[0]}
              </div>
              <div>
                <h3 className="font-bold text-[#1f2937] text-lg">{member.name}</h3>
                <p className="text-sm text-[#6b7280]">{member.title}</p>
              </div>
              <p className="text-sm text-[#4b5563] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery placeholder */}
      <section>
        <h2 className="text-2xl font-bold text-[#1f2937] mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("galleryTitle")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-[#8c4f6b]/10 rounded-xl flex items-center justify-center text-[#6b7280] text-sm">
              Community photo
            </div>
          ))}
        </div>
        <p className="text-xs text-[#6b7280] mt-3">Community photos will be added here.</p>
      </section>
    </div>
  );
}
