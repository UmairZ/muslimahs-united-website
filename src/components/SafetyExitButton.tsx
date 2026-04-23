"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function SafetyExitButton() {
  const t = useTranslations("hwrap");

  function exit() {
    // Replace the current HWRAP entry in history with /api/safe-exit
    history.replaceState(null, "", "/api/safe-exit");
    // Flood the back stack with 14 more /api/safe-exit entries so every back
    // press bounces the user to weather.com via server 302 instead of MU pages
    for (let i = 0; i < 14; i++) {
      history.pushState(null, "", "/api/safe-exit");
    }
    window.location.replace("https://weather.com");
  }

  useEffect(() => {
    // Overwrite the history entry that brought the user here so "back" won't return
    history.replaceState(null, "", window.location.href);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") exit();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <button
      onClick={exit}
      className="fixed top-4 right-4 z-[9999] min-w-[44px] min-h-[44px] px-4 py-3 bg-[#c94a67] text-white font-bold text-sm rounded-lg shadow-lg hover:bg-[#b03a57] focus:outline-none focus:ring-4 focus:ring-[#c94a67]/50 transition-colors"
      aria-label="Safety Exit — click to leave this page immediately"
    >
      {t("exitButton")}
    </button>
  );
}
