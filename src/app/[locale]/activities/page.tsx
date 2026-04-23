import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getUpcomingEvents } from "@/lib/calendar";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });
  return { title: t("title") };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function formatTime(dateStr: string) {
  if (!dateStr.includes("T")) return null;
  const d = new Date(dateStr);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

export default async function ActivitiesPage() {
  const t = await getTranslations("activities");
  let events: import("@/lib/calendar").CalendarEvent[] = [];
  let loadError = false;

  try {
    events = await getUpcomingEvents(20);
  } catch {
    loadError = true;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8c4f6b] mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
      <p className="text-[#4b5563] text-lg leading-relaxed mb-12 max-w-3xl">{t("intro")}</p>

      <section>
        <h2 className="text-2xl font-bold text-[#1f2937] mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("upcomingTitle")}</h2>

        {loadError && (
          <div className="rounded-xl bg-[#c94a67]/10 border border-[#c94a67]/20 p-6 text-[#c94a67] text-sm">
            {t("loadError")}
          </div>
        )}

        {!loadError && events.length === 0 && (
          <div className="rounded-xl bg-[#f5ecf0] border border-[#edd8de] p-8 text-center">
            <p className="text-[#6b7280]">{t("noEvents")}</p>
          </div>
        )}

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl border border-[#edd8de] shadow-sm overflow-hidden">
              <div className="border-l-4 border-[#8c4f6b] px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1f2937] text-lg" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{event.title}</h3>
                      {event.rsvpRequired && (
                        <span className="px-2 py-0.5 rounded-full bg-[#e8c547]/30 text-[#92750a] text-xs font-semibold">{t("rsvpRequired")}</span>
                      )}
                    </div>
                    <p className="text-sm text-[#8c4f6b] font-medium">
                      {formatDate(event.start)}{formatTime(event.start) ? ` · ${formatTime(event.start)}` : ""}
                    </p>
                    {event.location && <p className="text-sm text-[#6b7280] mt-0.5">📍 {event.location}</p>}
                    {event.description && <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">{event.description}</p>}
                  </div>
                  {event.registrationUrl && (
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-[#8c4f6b] text-white text-sm font-semibold hover:bg-[#7a3e5a] transition-colors">
                      {t("register")} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
