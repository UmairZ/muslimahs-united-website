import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muslimahs United — Fostering Resilience Since 2011",
  description: "A grassroots sisterhood of Muslim women across the Pacific Northwest — supporting, uplifting, and connecting our community.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") || "en";
  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fef8f6]">{children}</body>
    </html>
  );
}
