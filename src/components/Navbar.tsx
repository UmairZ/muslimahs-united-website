"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const localeLabels: Record<string, string> = { en: "EN", ar: "عربي", so: "Soomaali" };

function useSafetyExit() {
  function exit() {
    history.replaceState(null, "", "/api/safe-exit");
    for (let i = 0; i < 14; i++) {
      history.pushState(null, "", "/api/safe-exit");
    }
    window.location.replace("https://weather.com");
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") exit();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return exit;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const tHwrap = useTranslations("hwrap");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === "ar";
  const exit = useSafetyExit();

  function localePath(path: string) {
    return `/${locale}${path}`;
  }

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    window.location.href = segments.join("/");
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/activities", label: t("activities") },
    { href: "/contact", label: t("contact") },
  ];

  const ctaClass = "inline-flex items-center px-4 py-2 rounded-lg text-white font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <header className="sticky top-0 z-50 bg-[#fef8f6] border-b border-[#edd8de] shadow-sm" dir={isRtl ? "rtl" : "ltr"}>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main navigation">

        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/muslimahs-united-logo.jpg"
            alt="Muslimahs United"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-bold text-[#8c4f6b] text-base leading-tight hidden sm:block" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Muslimahs<br />United
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1f2937]">
          {navLinks.map((link) => (
            <Link key={link.href} href={localePath(link.href)} className="hover:text-[#8c4f6b] transition-colors">
              {link.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="relative" ref={programsRef}>
            <button
              className="flex items-center gap-1 hover:text-[#8c4f6b] transition-colors"
              aria-haspopup="true"
              aria-expanded={programsOpen}
              onClick={() => setProgramsOpen((o) => !o)}
            >
              {t("programs")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programsOpen && (
              <div className="absolute top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#edd8de] py-2 z-50">
                <Link
                  href={localePath("/programs/hwrap")}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#fef8f6] transition-colors"
                  onClick={() => setProgramsOpen(false)}
                >
                  <Image src="/images/hwrap-logo.png" alt="" width={32} height={32} className="object-contain shrink-0" />
                  <span className="font-medium text-[#6b2d8c]">{t("hwrap")}</span>
                </Link>
                <div className="px-4 py-2 text-xs text-[#6b7280] italic border-t border-[#f5ecf0]">
                  {t("programsComingSoon")}
                </div>
              </div>
            )}
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs text-[#6b7280] border-l border-[#edd8de] pl-4 ml-2">
            {(["en", "ar", "so"] as const).map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1">|</span>}
                <button
                  onClick={() => switchLocale(loc)}
                  className={`hover:text-[#8c4f6b] transition-colors ${locale === loc ? "text-[#8c4f6b] font-semibold" : ""}`}
                  aria-label={`Switch to ${loc}`}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href={localePath("/donate")}
            className={`${ctaClass} bg-[#c94a67] hover:bg-[#b03a57] focus:ring-[#c94a67]`}
          >
            {t("donate")}
          </Link>
          <span className="text-[#edd8de] select-none" aria-hidden="true">|</span>
          <button
            onClick={exit}
            className={`${ctaClass} bg-[#6b2d8c] hover:bg-[#5a2478] focus:ring-[#6b2d8c]`}
            aria-label="Safety Exit — immediately leave this site"
          >
            {tHwrap("exitButton")}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1f2937] hover:bg-[#f5ecf0] transition-colors"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fef8f6] border-t border-[#edd8de] px-4 pb-4 space-y-1" dir={isRtl ? "rtl" : "ltr"}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={localePath(link.href)}
              className="block py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#f5ecf0] hover:text-[#8c4f6b]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={localePath("/programs/hwrap")}
            className="block py-2 px-3 rounded-lg text-sm font-medium text-[#6b2d8c] hover:bg-[#f5ecf0]"
            onClick={() => setMobileOpen(false)}
          >
            {t("programs")} → {t("hwrap")}
          </Link>
          <div className="flex gap-2 mt-2">
            <Link
              href={localePath("/donate")}
              className="flex-1 block py-2 px-3 rounded-lg text-sm font-semibold text-white bg-[#c94a67] hover:bg-[#b03a57] text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t("donate")}
            </Link>
            <button
              onClick={exit}
              className="flex-1 py-2 px-3 rounded-lg text-sm font-semibold text-white bg-[#6b2d8c] hover:bg-[#5a2478] text-center"
            >
              {tHwrap("exitButton")}
            </button>
          </div>
          <div className="flex items-center gap-2 pt-2 px-3 text-xs text-[#6b7280]">
            {(["en", "ar", "so"] as const).map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1">|</span>}
                <button onClick={() => switchLocale(loc)} className={`hover:text-[#8c4f6b] ${locale === loc ? "text-[#8c4f6b] font-semibold" : ""}`}>
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
