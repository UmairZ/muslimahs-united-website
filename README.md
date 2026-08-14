# Muslimahs United

Website for Muslimahs United, a 501(c)(3) nonprofit in Portland, Oregon serving Muslim women in the Pacific Northwest. I built this pro bono.

Next.js with `next-intl`, in three languages: English, Arabic, and Somali. The organization runs community programming alongside HWRAP, a crisis-services program for women facing domestic violence, hate crimes, Islamophobia, or homelessness, so parts of the site are read by people in unsafe situations. That shaped two decisions below.

## Safe exit

`/api/safe-exit` redirects to an ordinary weather site and sends no-store cache headers. It backs a quick-exit control so that someone reading crisis resources can leave the page immediately, and the no-cache headers keep the page from lingering in history or the back button. It is a small route, but it is the reason the route exists as a server redirect rather than a client link.

## Intake by email

The HWRAP intake form forwards submissions to staff by email through Resend rather than writing to a database. The organization already worked from emailed submissions, so this matches an existing process and adds no admin portal to maintain or new store of sensitive personal data to secure. A database-backed intake with a staff dashboard is a reasonable later step, but it was out of scope for a first relaunch and would have introduced a data-protection burden the current setup avoids.

## Structure

```
src/app/[locale]/page.tsx                    home
src/app/[locale]/about/page.tsx
src/app/[locale]/programs/page.tsx
src/app/[locale]/programs/hwrap/page.tsx
src/app/[locale]/programs/hwrap/intake/page.tsx
src/app/[locale]/activities/page.tsx
src/app/[locale]/donate/page.tsx
src/app/[locale]/contact/page.tsx
src/app/[locale]/privacy/page.tsx
src/app/api/contact/route.ts                 contact email via Resend
src/app/api/hwrap/intake/route.ts            intake email via Resend
src/app/api/safe-exit/route.ts               quick-exit redirect
src/messages/{en,ar,so}.json                 all copy, three languages
```

## Running it

```bash
npm install
npm run dev       # localhost:3000
npm run build
```

`RESEND_API_KEY` is required for the contact and intake routes to send mail.
