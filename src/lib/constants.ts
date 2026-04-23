export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://muslimahsunited.org";

export const CRISIS_RESOURCES = {
  emergency: "911",
  dvHotline: "1-800-799-7233",
  crisisTextLine: "HOME to 741741",
  crisisTextNumber: "741741",
} as const;

export const ORG = {
  name: "Muslimahs United",
  ein: "47-3593495",
  founded: "2011",
  location: "Portland, Oregon",
  email: process.env.CONTACT_FORM_TO_EMAIL || "",
  phone: "",
} as const;

export const LOCALES = ["en", "ar", "so"] as const;
export type Locale = (typeof LOCALES)[number];
