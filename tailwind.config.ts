import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mu: {
          primary: "#8C4F6B",
          secondary: "#E8C547",
          accent: "#C94A67",
          bg: "#FEF8F6",
          dark: "#1F2937",
          muted: "#6B7280",
        },
        hwrap: {
          primary: "#6B2D8C",
          secondary: "#C89B6D",
          accent: "#8C4F6B",
          bg: "#FEF8F6",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "DM Sans", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Sans Arabic", "IBM Plex Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
