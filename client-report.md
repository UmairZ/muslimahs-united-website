# Muslimahs United — Website Rebuild: Project Summary

**Prepared by:** Umair (Humsub)
**Date:** April 2026
**For:** Muslimahs United

---

## What Was Delivered

A full rebuild of muslimahsunited.org — replacing the outdated WordPress site with a modern, mobile-first website that better represents your organization and the full range of your work.

**Pages built:**
- **Home** — Mission statement, program overview, upcoming events preview, team preview, donation banner
- **About** — Organization story, approach, team bios, community gallery
- **Programs** — Landing page that positions Muslimahs United as more than HWRAP, with room to add future programs
- **HWRAP (Hidaya Project)** — Full program page with mission, services, and safety features (see below)
- **HWRAP Intake Form** — Secure intake form that emails submissions directly to staff
- **Activities** — Live events pulled automatically from Google Calendar
- **Contact** — General contact form with email forwarding
- **Donate** — PayPal embed with 501(c)(3) trust signals
- **Privacy Policy** — Covering data collection, HWRAP intake, and third-party services

---

## Why We Rebuilt It

The old WordPress site had a number of problems:

- **Outdated and hard to maintain** — the platform required constant plugin updates and was not optimized for mobile
- **The HWRAP intake form was broken** — a critical component for women seeking help was not functioning
- **The site led with HWRAP** — which didn't reflect the full scope of your programs (hikes, retreats, community-building, mentorship)
- **No multilingual support** — your community includes Arabic and Somali-speaking sisters; the old site served English only
- **Events required manual updates** — no live calendar integration meant the site was frequently out of date

---

## Key Decisions and Why

**Next.js (instead of WordPress)**
Next.js is fast, SEO-friendly, and built for the kind of multi-page, multilingual site Muslimahs United needs. It deploys to Vercel for free with automatic HTTPS — no hosting fees.

**Google Calendar for events**
Rather than adding a CMS or requiring you to learn a new admin portal, you manage events directly in Google Calendar. Add an event there, and it appears on the website automatically. This is a tool you likely already use.

**Email-based HWRAP intake (no database)**
Intake submissions are emailed directly to your HWRAP staff inbox — matching how your current site works and keeping the launch simple. A database-backed system with a case management dashboard is a solid future upgrade, but it's not needed to get the site relaunched.

**No CAPTCHA on any forms**
CAPTCHAs are frustrating for all users and particularly hostile to non-native English speakers and people in crisis. We use honeypot spam protection and rate limiting instead.

**Multilingual infrastructure (English-first launch)**
The site is built to support English, Arabic, and Somali from day one. Arabic and Somali translations are drafted and in the codebase — but they should be reviewed by native speakers, especially the HWRAP content, before those languages go live. The infrastructure is ready; the translated content follows in a second pass.

---

## HWRAP Safety Features

The HWRAP pages required special attention. Women using this page may be in danger and their internet activity may be monitored. The following protections are built in:

- **Quick-exit button** — visible on every HWRAP page. One click (or pressing Escape) immediately navigates away to weather.com and replaces the browser history entry so "back" won't return to the page.
- **No-cache headers** — prevents the browser from storing HWRAP pages in history cache.
- **Safety notice** — displayed prominently on the page: recommends private/incognito browsing, clearing history, and using a device not shared with an abuser.
- **Form fields marked `autocomplete="off"`** — prevents browsers from saving or autofilling intake data.
- **Crisis hotlines always visible** — 911, National DV Hotline (1-800-799-7233), and Crisis Text Line are displayed throughout.

**One thing to communicate to HWRAP staff:** once intake submissions arrive in your email inbox, their confidentiality depends on the security of that email account. Staff should use strong passwords and two-factor authentication on the HWRAP inbox, and avoid forwarding submissions to unsecured addresses.

---

## What We Still Need From You

The site is built, but several pieces require your input before it can go live:

| Item | Notes |
|------|-------|
| Contact email and phone | For the footer and contact form |
| HWRAP intake email address | Ideally a dedicated inbox like `hwrap@muslimahsunited.org` |
| PayPal donate button code | From your existing PayPal account |
| Google Calendar ID | Create a dedicated events calendar and share the ID |
| Nadia's board bio | Placeholder is live; her bio needs to be written |
| Review of all placeholder copy | Mission statements and team bios were pulled from the old site — confirm or update them |
| Arabic and Somali translation review | AI-assisted drafts are ready; need review by native speakers before those locales go live |
| Privacy policy review | Especially the HWRAP data retention section — recommend having it reviewed by a nonprofit attorney |
| DNS access | You'll need to point `muslimahsunited.org` to Vercel once we're ready to launch |
| Social media links | For the footer, if you have any |

---

## What's Not Included (This Phase)

To keep the launch focused, the following are out of scope for now but can be added later:

- Newsletter signup / email list integration
- Volunteer application form
- Donor portal or recurring donation management beyond PayPal
- Blog or articles section
- Members-only resource area
- HWRAP case management dashboard (database-backed intake)

These are all reasonable next steps as the organization grows.

---

## Next Steps

1. You provide the items in the "What We Still Need" table above
2. We plug them in, do final testing, and review on a staging URL
3. You point your domain DNS to the new site
4. Site goes live

Happy to walk through any of this on a call.
