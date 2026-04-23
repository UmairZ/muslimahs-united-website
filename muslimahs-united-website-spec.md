# Website Specification Document
## Muslimahs United — Multi-Page Nonprofit Website

---

## 1. Project Overview

**Organization Name:** Muslimahs United
**Tax Status:** 501(c)(3) nonprofit
**EIN:** 47-3593495
**Location:** Portland, Oregon / Pacific Northwest
**Founded:** 2011
**Contact Email:** *[PLACEHOLDER — client to provide]*
**Contact Phone:** *[PLACEHOLDER — client to provide]*

**Project Type:** Multi-page website for a grassroots nonprofit organization serving Muslim women in the Pacific Northwest.

**Primary Goals:**
- Communicate the organization's mission, history, and range of programs (not just HWRAP)
- Provide a safe, secure intake path for Muslim women in crisis seeking HWRAP services
- Drive donations to sustain and grow the organization's work
- Surface upcoming community activities (hikes, potlucks, retreats) without requiring the client to maintain a CMS
- Serve a diverse community with multilingual support (English, Arabic, Somali)

**Target Audiences:**
1. **Muslim women in the Pacific Northwest** — primary community members seeking connection, events, and support
2. **Muslim women in crisis** — seeking HWRAP services (domestic violence, hate crimes, Islamophobia, homelessness support)
3. **Donors and supporters** — both within and outside the Muslim community, wanting to fund grassroots work
4. **Partner organizations and allied nonprofits** — coordinators and advocates who may refer clients

**Languages:** English (primary), Arabic, Somali

---

## 2. Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js (App Router)** | Multi-page routing, SEO-friendly SSG/SSR, image optimization, built-in i18n |
| Styling | **Tailwind CSS** | Rapid development, responsive by default, easy theming |
| Language | **TypeScript** | Type safety, better developer experience |
| i18n | **next-intl** | Clean internationalization with RTL support for Arabic |
| HWRAP intake form | **Resend** (email forwarding) | Submissions sent directly to staff email — matches current setup, no admin portal needed for first pass |
| Contact form | **Resend** | Simple email forwarding |
| Events data | **Google Calendar API** | Client manages events in Google Calendar; site pulls and displays |
| Donations | **PayPal** (embedded donate button) | Client already has PayPal set up — minimize client-side friction |
| Hosting | **Vercel** | Free tier, seamless Next.js integration, automatic HTTPS, good i18n routing |
| Analytics | **Google Analytics 4** | Privacy-respecting traffic insights |

### Why this stack for this project

- **HWRAP via email (for now):** The client's current intake form emails submissions directly. We're matching that pattern — simpler, familiar to staff, and gets the site relaunched faster. An admin dashboard with a database backend (Supabase, etc.) is a sensible future enhancement but is out of scope for this first pass.
- **Google Calendar over a CMS:** The client is not highly technical. Google Calendar is a tool she likely already uses. No new login, no new interface to learn — she adds events to the calendar and the website updates automatically.
- **PayPal only (for now):** Per client preference. Donorbox/Stripe can be added later if the organization outgrows PayPal.

---

## 3. Branding & Design Direction

### Brand Identity: "Muslimahs United"

The name and imagery reflect **sisterhood, solidarity, and uplift** — the logo shows three diverse hands raised together against an Islamic geometric pattern, holding a pick comb (a symbol of Black pride and solidarity, reflecting the organization's Black-founded, Black-led roots). The brand should feel **warm, vibrant, community-rooted, and culturally grounded** — not corporate, not clinical, not generic-nonprofit.

### Logo Usage Notes

- **Logo provided:** `muslimahs_united_logo.jpg` — a circular illustration by a local youth artist from the community.
- **Important:** The logo has charming, hand-drawn qualities but is not highly polished. **Use it at modest sizes throughout the site** (e.g., 60–80px in the navbar, moderate size in footer, not blown up as a huge hero element). This preserves its character without drawing attention to artifacts of the illustration.
- **In the hero section:** Do not use the logo as the main visual. Instead, use photography (community photos from existing site or placeholder) with the logo as a small brand mark.
- **HWRAP logo:** `HWRAP_logo.png` — distinct purple-and-tan logo for the HWRAP program. Used on the HWRAP page and in the "Programs" dropdown. Intentionally different from the Muslimahs United brand — HWRAP has its own identity.

### Brand Colors — Muslimahs United (Derived from Logo)

| Role | Hex | Description |
|------|-----|-------------|
| Primary | `#2C6E7F` | Teal blue — from the banner and outer ring of the logo, anchor color for navbar/footer |
| Secondary | `#E8C547` | Warm gold/yellow — from the geometric pattern, use for accents and highlights |
| Accent | `#B83A4B` | Deep rose/red — from the nail polish and pick comb in the logo, use for CTAs (Donate, Get Help) |
| Background | `#FAF7F2` | Warm off-white — soft, welcoming page background |
| Dark text | `#1F2937` | Near-black for body copy |
| Muted | `#6B7280` | Secondary text, borders |

### Brand Colors — HWRAP (Used ONLY on HWRAP page)

| Role | Hex | Description |
|------|-----|-------------|
| Primary | `#6B2D8C` | Deep purple — dominant HWRAP logo color |
| Secondary | `#C89B6D` | Warm tan — from the figure in the HWRAP logo |
| Accent | `#2C6E7F` | Muslimahs United teal — subtle tie-back to the parent organization |
| Background | `#FAF7F2` | Consistent with parent site |

The HWRAP page should feel like a **distinct but related** sub-brand — purple/tan dominant, with a small visual connection to the Muslimahs United identity (e.g., a breadcrumb or "A program of Muslimahs United" tag using teal).

### Typography

- **Headings:** `Plus Jakarta Sans` or `DM Sans` — modern sans-serif with a friendly, community feel
- **Body:** `Inter` or system sans-serif stack
- **Arabic:** `Noto Sans Arabic` or `IBM Plex Sans Arabic`
- **Somali:** Standard Latin sans-serif works (Somali uses Latin script)

### Design Principles

- **Warm, not clinical** — this is a community organization, not a hospital or government agency
- Generous whitespace, clear hierarchy
- Use photography of community (existing site has some) — placeholder warm/diverse stock where needed
- Rounded corners, soft shadows, community-feel
- Mobile-first (the target audience likely browses primarily on phones)
- Respectful of cultural context — no imagery that would be inappropriate in Islamic contexts

---

## 4. Site Structure (Multi-Page)

### Page Map

```
Home
About
  └─ Our Team
Programs ▾
  └─ HWRAP (Hidaya Women's Resource and Advocacy Project)
       └─ Intake Form (secure)
Activities
Contact
Donate
```

A **sticky navigation bar** appears on all pages with a language switcher (EN | عربي | Soomaali).

---

### 4.1 Navigation Bar (Sticky — All Pages)

- Muslimahs United logo (small, ~60–80px) + text mark on the left
- Page links: **Home | About | Programs ▾ | Activities | Contact**
- **Donate** CTA button — styled prominently in accent rose (`#B83A4B`) on the right
- Language switcher: **EN | عربي | Soomaali** (top right, small/subtle)
- Mobile: hamburger menu
- Background: warm off-white with subtle border, or teal `#2C6E7F` with light text — designer's choice

**Programs dropdown:**
- HWRAP (linked)
- *Subtle line of text: "More programs coming soon"* — per founder's intent to communicate the organization is more than HWRAP

---

### 4.2 Home Page

**Purpose:** Establish who Muslimahs United is, feature the range of what they do (not only HWRAP), and drive visitors toward donations, HWRAP intake, or events.

#### Hero Section
- Warm community photo (existing site has usable photos under `/wp-content/uploads/2021/`)
- Headline: **"Fostering Resilience in Our Community Since 2011"**
- Subheadline: "A grassroots sisterhood of Muslim women across the Pacific Northwest — supporting, uplifting, and connecting our community."
- Two CTAs:
  - **"Support Our Work"** → Donate page
  - **"Learn About Our Programs"** → Programs / HWRAP

#### Mission Snapshot
- Short 2–3 sentence statement. **⚠️ PLACEHOLDER (pulled from current site):**

> "We are a grassroots organization comprised of sisters from Portland, Oregon and Washington, serving sisters throughout the Pacific Northwest. We've been a group that Muslim sisters can turn to when other organizations or agencies can't or are no longer able to help — a resource for connection, networking, and inspiration for positive change in our communities."

#### What We Do (Three-Pillar Overview)
Three visually balanced cards or sections — this is the **critical section** for communicating the organization is more than HWRAP:

1. **Community Activities** — "Monthly hikes, potlucks, retreats, and wilderness skills — building sisterhood through shared experiences." → links to Activities
2. **HWRAP (Hidaya Project)** — "Culturally-specific advocacy and support for Muslim women facing crisis, violence, or injustice." → links to HWRAP. **Shown with HWRAP's distinct purple accent** to visually signal it's a distinct program, but styled as a card consistent with the others.
3. **Resources & Connection** — "Networking, mentorship, and referrals to trusted community resources."

#### Featured HWRAP Section
- A dedicated, prominent section below the three pillars
- Use HWRAP logo (modest size) + brief description
- Language that acknowledges sensitivity: "If you or someone you know needs support, we are here." → links to HWRAP page
- Crisis resource line: "In immediate danger? Call 911. National DV Hotline: 1-800-799-7233."

#### Upcoming Activities Preview
- Pull next 2–3 events from Google Calendar (see Section 5.4)
- "View All Activities" → Activities page

#### Meet Our Team Preview
- Small grid showing the team members (Samira, Nadia, Layla) — names, titles, short intro
- "Meet the Full Team" → About page

#### Donation Banner
- Full-width warm-colored banner (gold `#E8C547` or accent rose `#B83A4B`)
- "Your support keeps our mission alive. Muslimahs United is a 501(c)(3) nonprofit — all donations are tax-deductible."
- **"Donate"** button → Donate page

---

### 4.3 About Page

**Purpose:** Tell the Muslimahs United story. Build trust. Introduce the team.

#### Our Story
- **⚠️ PLACEHOLDER (pulled from current site, to be expanded by client):**

> "Muslimahs United is a unique organization that has grown out of the need for Muslim women of Color to connect to a sisterhood, in a non-judgmental space where Muslim sisters from all backgrounds are welcome. We combine charity, physical activity, art, and activism to facilitate a safe space for healing, women's voices, and community connections. We are a grassroots organization founded by a Black woman and growing with the collaboration of many women."

#### Our Approach
- **⚠️ PLACEHOLDER (pulled from current site):**

> "One of the goals of our organization is to create a healthy and inclusive environment. We do this by hosting a wide range of events and specific services. Some of the events we organize are community symposiums that address matters of equity and social justice. We offer events outside of the masjid that allow women to connect with nature, to meet new people, connect with old friends, and network. We believe it is important to be connected to our surroundings, and being a part of the Pacific Northwest that means spending a lot of time outdoors. We do monthly hikes and we teach wilderness survival skills."

#### Our Team
Grid of team member cards. Data pulled from current site (placeholder until client confirms/updates):

- **Samira** — *Founder and Executive Director*
  "Samira is the Founder of Muslimahs United and the Hidaya Women's Resource and Advocacy Project. She is a mother, a wilderness First Aid Responder, and a hike organizer."

- **Nadia** — *Board President*
  **⚠️ PLACEHOLDER — bio needed from client.**

- **Layla** — *Board of Directors*
  "Sister Layla has been in the community for many years and is a beloved elder. She has dedicated much of her life to community service locally and internationally, assisting marginalized communities throughout the state."

#### Gallery
- Community photos from existing site (available under `/wp-content/uploads/2021/`)
- Simple masonry or grid layout

---

### 4.4 Programs Page (Parent page for dropdown)

Optional: Either a dedicated Programs landing page, or the Programs dropdown links directly to HWRAP. **Recommendation: build a simple Programs landing page** so that:

1. The founder's goal of "we're more than HWRAP" is supported structurally
2. Future programs can be added without restructuring navigation

**Content:**
- Brief intro: "Our programs are rooted in the needs of our community — direct support for those in crisis, and community-building activities that foster resilience and sisterhood."
- HWRAP card — featured prominently, links to HWRAP page
- Placeholder cards for future programs (e.g., "Youth Mentorship — coming soon") — client to fill in as programs expand
- Note: if client doesn't have future programs to list, this page can simply redirect to HWRAP with a small "More programs coming soon" element. Developer to confirm with client before building out.

---

### 4.5 HWRAP Page — CRITICAL SENSITIVE PAGE

**Purpose:** Provide information about HWRAP services and a secure intake path for women in crisis. Designed with safety of users who may be in domestic violence situations as a primary consideration.

#### Safety Features (Top of Page — Always Visible)

**1. Quick Exit Button**
- Fixed position, top-right of viewport, visible on every HWRAP page
- Large, clearly labeled: **"Safety Exit"** (or just **"EXIT"** in bold)
- High contrast, tappable (min 44x44px)
- **Behavior:**
  - On click OR on pressing **Escape key** → `window.location.replace("https://weather.com")` (replaces current history entry so "back" won't return to HWRAP)
  - Also calls `history.replaceState()` on page load so the entry that brought them to HWRAP is overwritten

**2. Safety Notice Box**
- Prominent, near the top of the page, simple language:

> **Your Safety Matters**
>
> If you are in a situation where your internet use is being monitored, we recommend:
> - Using **private / incognito browsing** mode
> - Clearing your browser history after visiting this page
> - Using a device or network that is not shared with your abuser
>
> **If you are in immediate danger, call 911.**
>
> **National Domestic Violence Hotline:** 1-800-799-7233 (call) or text START to 88788
> **Crisis Text Line:** text HOME to 741741

**3. No-Cache Headers**
- HWRAP routes must send `Cache-Control: no-store, no-cache, must-revalidate` and `Pragma: no-cache` headers so pages aren't retained in back/forward cache

**4. Form Field Privacy**
- All form fields have `autocomplete="off"`
- No browser auto-save of form data

**Note on limitations (for developer awareness):** Browsers do not allow websites to clear user history — this is a privacy protection by design. We can prevent *future* history entries (via `replaceState`) but cannot wipe existing ones. The safety notice must be honest about this.

#### Page Content (Below Safety Features)

**Header**
- HWRAP logo (purple + tan, moderate size)
- Page title: "Hidaya Women's Resource and Advocacy Project"
- Subtitle: "A program of Muslimahs United"

**Our Mission** *(PLACEHOLDER — from current site)*

> "The mission of the Hidaya Women's Resource and Advocacy Project is to offer support grounded in the Islamic practice of justice for Muslim Women of Color and all women who are affected by intimate partner violence, hate crimes, Islamophobia, homelessness, and other crimes. HWRAP aims to educate, support, and guide survivors and their children who have been affected by intimate partner violence to self-determination by offering culturally-specific crisis counseling, advocacy, connection to resources, connection to community, and community outreach."

**What We Offer**
- Display as a simple list or icon grid:
  - Culturally-specific crisis counseling
  - Advocacy and case support
  - Connection to community resources
  - Referrals to trusted partners
  - Community outreach and education

**How We Can Help**
- Brief, non-clinical explanation of what happens when someone submits an intake form:
  - A trained advocate will reach out privately
  - All information is kept confidential
  - There is no cost for HWRAP services
  - You are not obligated to proceed — reaching out is just the first step

**Intake Form** (see Section 5.3 for full technical spec)

**Crisis Resources Footer Strip**
- Always visible at bottom of HWRAP pages
- 911 | National DV Hotline: 1-800-799-7233 | Crisis Text Line: HOME to 741741

---

### 4.6 Activities Page

**Purpose:** Show upcoming community events (hikes, potlucks, retreats) pulled live from Google Calendar.

#### Content

**Intro**

> "Our goal is to host activities on a monthly basis. We offer hikes, retreats, potlucks, and other community-building activities. All Muslim women are welcome."

**Upcoming Events**
- Pulled from Google Calendar API (see Section 5.4 for technical spec)
- Each event card displays:
  - Event title
  - Date and time
  - Location (if available)
  - Description (parsed — see below)
  - **Register** button — if the event description contains `Registration: [URL]`, extract that URL and render as a button

**Description Parsing Convention** (for client reference):
- Client adds events to Google Calendar normally
- To add a registration link, include a line in the event description: `Registration: https://forms.google.com/...`
- To mark an event as "RSVP required," include: `RSVP: required`
- Developer should document this for the client in a simple one-page guide

**Past Events / Gallery (Optional)**
- A simple grid of past community photos, no calendar integration needed

---

### 4.7 Contact Page

**Purpose:** Simple way for community members, allies, partners, and press to reach Muslimahs United. **Not** for HWRAP intake — that has its own dedicated form.

#### Contact Form (Simplified from current site)

Form fields:
- **Name** (required)
- **Email** (required)
- **Phone** (optional) — helper text: "Optional — for urgent matters only"
- **Preferred method of contact** (radio: Email / Phone / Either) — default: Email
- **Subject** (optional, single-line text)
- **Message** (required, textarea)

Spam protection:
- Hidden honeypot field
- Basic rate limiting (e.g., 3 submissions per IP per hour)
- No CAPTCHA (user-hostile, especially for non-native-English speakers)

On submit:
- Send email to `[PLACEHOLDER staff email]` via Resend or Nodemailer
- Show success confirmation on page
- No data stored on server (fire-and-forget)

#### Contact Information Block
- Email: *[PLACEHOLDER]*
- Phone: *[PLACEHOLDER]*
- Mailing address (if client provides one): *[PLACEHOLDER]*
- Social media links (if any): *[client to provide]*

---

### 4.8 Donate Page

**Purpose:** Clear, simple donation path. Trust signals for donors.

#### Content

**Header**
- "Support Muslimahs United"
- "Your donation sustains our grassroots work supporting Muslim women across the Pacific Northwest."

**501(c)(3) Trust Signals**
- **"Muslimahs United is a registered 501(c)(3) nonprofit organization."**
- **"EIN: 47-3593495"**
- **"All donations are tax-deductible to the fullest extent allowed by law."**

**Impact Statement** *(PLACEHOLDER — to be refined by client)*

> "Your support directly funds culturally-specific advocacy, community activities, and emergency resources for Muslim women in crisis. As a grassroots organization, every dollar we raise goes back into the community we serve."

**Donation Method**
- Embedded PayPal Donate button (client's existing PayPal)
- Clear call to action
- Note: "Recurring donations can be set up through PayPal after clicking Donate."

**Alternative Giving** (for future — placeholder only)
- Mention that mailed checks are welcome: *"Prefer to donate by mail? Please contact us at [email] for details."*

---

### 4.9 Footer (All Pages)

- Muslimahs United logo (small)
- Tagline: "Fostering Resilience in Our Community Since 2011"
- Navigation links (mirrors nav)
- Contact info (email, phone)
- 501(c)(3) + EIN line
- Social media icons (if client provides)
- Copyright: "© 2026 Muslimahs United. All rights reserved."
- Small link: "Privacy Policy" (see Section 7)

---

## 5. Technical Implementation Details

### 5.1 Multilingual Support (English, Arabic, Somali)

- Use `next-intl` for i18n
- URL structure: `/en/...`, `/ar/...`, `/so/...`
- Language switcher in navbar
- Arabic pages: `dir="rtl"` on `<html>`, mirror layouts
- AI-assisted translation drafts as starting point (client to review — especially for culturally sensitive HWRAP content)
- `hreflang` tags for SEO

**Priority note:** English is the priority language for launch. Arabic and Somali translations should be built into the infrastructure from the start (so the routing, switcher, and data structures support them), but the actual translated content can be added in a second pass. Communicate this clearly to the client so she understands the site will launch English-only with translations following.

### 5.2 Google Calendar Events Integration

**Setup:**
1. Client creates a dedicated Google Calendar for Muslimahs United events (e.g., `events@muslimahsunited.org` or similar)
2. Calendar is made publicly readable (or a service account is granted read access)
3. Site fetches events via Google Calendar API v3 — key endpoint: `GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events`
4. Cache results (e.g., ISR with 1-hour revalidation on Vercel) to avoid hitting API limits

**Event Description Parsing:**
Parse event description for structured fields:
```
Registration: https://forms.google.com/xyz
RSVP: required
Capacity: 35
Location notes: Bring a sajjada
```
Render these as structured UI elements (button for registration, badge for RSVP required, etc.).

**Fallback:** If Google Calendar API is unavailable, show a simple "Check back soon for upcoming events" message with contact info.

**Client documentation:** Developer should provide a one-page PDF or Google Doc showing the client how to add events with the correct description format. Keep it short — screenshots of the calendar UI with annotations are ideal.

### 5.3 HWRAP Intake Form — Email Forwarding Implementation

**Approach:** Match the client's existing pattern — submissions are sent directly to staff email via a transactional email service (Resend). No database, no admin dashboard in this first pass.

**Stack:**
- Form rendered on a Next.js route (`/hwrap/intake`)
- Submission goes to a Next.js API route (`/api/hwrap/intake`)
- API route validates input, then sends a formatted email via **Resend** to the staff HWRAP inbox
- All submission data lives only in the staff email inbox — same model as the current site

**Form fields** (matching current intake form):
- First Name, Last Name
- Address, How long at address
- Email, Phone (both optional — some users can't safely share these)
- "Are you in Oregon?" (Yes/No) → conditional state dropdown
- Family type (Single / Couple / With Children)
- Number of children (conditional)
- Open text: "Please describe your situation and what kind of support you're seeking"

**Email format (to staff):**
- Subject: `New HWRAP intake submission — [First Name]`
- Body: cleanly formatted submission data (all fields, readable layout)
- Reply-to: set to the submitter's email if they provided one, so staff can reply directly
- Sent to: `[PLACEHOLDER HWRAP staff email]` — client to provide; consider a dedicated inbox (e.g., `hwrap@muslimahsunited.org`) rather than a shared general inbox

**On submission (user-facing):**
- Redirect to a confirmation page: *"Thank you. A trained advocate will reach out to you at the contact info you provided. If you are in immediate danger, please call 911 or the National DV Hotline: 1-800-799-7233."*

**Security-in-transit notes:**
- All form data is submitted over HTTPS (enforced by Vercel)
- Resend handles transport encryption (TLS) to the staff inbox
- **Important caveat to communicate to the client:** Once a submission reaches the staff inbox, its security depends on the security of that email account. Staff should use strong passwords, 2FA, and avoid forwarding HWRAP emails to unsecured addresses. A short written guidance document for staff is recommended.

**Rate limiting & abuse:**
- Rate limit API route: max 3 submissions per IP per hour
- Honeypot field for bots
- No CAPTCHA (user-hostile, especially for non-native-English speakers in crisis)

**Safety features on the form page:**
- All features from Section 4.5 active (quick exit, Escape key, no-cache headers, safety notice)
- `autocomplete="off"` on all fields
- Form fields do not persist across page reloads (no browser auto-save)

**Future enhancement (out of scope for this phase):** When the organization is ready, migrate to a database-backed intake system (Supabase or similar) with an admin dashboard, audit log, and no-sensitive-data-in-email notifications. This provides stronger security and case management but adds complexity the client doesn't need right now.

### 5.4 Email Forwarding (Contact Form)

- API route: `/api/contact`
- Uses **Resend** (simple, modern) or **Nodemailer** via SMTP
- Sends formatted email to staff contact address
- Rate limiting: 3 per IP per hour
- Success response → client-side confirmation

### 5.5 Donations (PayPal)

- Embed PayPal Donate button (client's existing PayPal account)
- PayPal provides a button generator — the resulting HTML snippet is embedded
- No custom payment logic needed
- Link in multiple prominent locations: nav CTA, home donation banner, dedicated Donate page, footer

---

## 6. SEO & Metadata

- Unique `<title>` and meta description per page
- Open Graph tags for social sharing
- JSON-LD schema:
  - `Organization` schema on home page (with EIN, founding date, location, etc.)
  - `NonProfit` subtype if applicable
- Sitemap.xml (auto-generated by Next.js)
- `robots.txt`
- `hreflang` tags for multilingual pages
- Local SEO: address/service area for Pacific Northwest

---

## 7. Privacy Policy Page

Required because the site collects personal data (HWRAP intake is highly sensitive, plus general contact form data). Developer should draft a basic privacy policy covering:

- What data is collected (HWRAP intake, contact form, analytics)
- How it's stored (HWRAP intake and contact: staff email inboxes; analytics: Google)
- Who has access (named staff roles)
- Retention (HWRAP submissions: however long the staff email inbox retains them — client to confirm retention practices)
- User rights (request deletion, correction)
- Third-party services (Google Analytics, PayPal, Resend for email delivery)

**Client must review this before launch.** A nonprofit working with DV survivors needs their privacy policy to be accurate. Flag to client — may want to have it reviewed by legal counsel.

---

## 8. Accessibility

- WCAG 2.1 AA compliance
- Alt text on all images (including the hand-drawn logo)
- Sufficient color contrast (4.5:1 for text)
- Keyboard navigable; visible focus states
- Screen reader-friendly landmarks and ARIA labels
- Skip-to-content link
- Minimum 16px body text
- Language attributes set correctly on each locale (`lang="en"`, `lang="ar"`, `lang="so"`)
- Form labels properly associated with inputs
- Error messages announced to screen readers

---

## 9. Responsive Design

- Mobile-first breakpoints
- Navigation collapses to hamburger on mobile/tablet
- Cards stack to 1 column on mobile, 2 on tablet, 3+ on desktop
- All tap targets minimum 44x44px
- **Safety Exit button must remain prominent and tappable on mobile** (this is critical — most HWRAP users will be on phones)
- RTL layout mirrors correctly on all breakpoints

---

## 10. Hosting & Deployment

**Recommended: Vercel**
- Free tier sufficient for current traffic
- Automatic HTTPS / SSL
- Custom domain support
- Automatic deployments from GitHub
- Good i18n/routing support
- Edge caching for performance

**Domain:** `muslimahsunited.org` (already owned by client)
- Client will need to update DNS to point to new hosting

**Resend:** Free tier (3,000 emails/month) — more than sufficient for contact + HWRAP intake volume.

---

## 11. Project File Structure (Suggested)

```
muslimahs-united/
├── public/
│   ├── images/
│   │   ├── muslimahs-united-logo.jpg
│   │   ├── hwrap-logo.png
│   │   └── community/          # Photos from existing site
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── [locale]/           # i18n routing (en, ar, so)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx        # Home
│   │   │   ├── about/
│   │   │   ├── programs/
│   │   │   │   ├── page.tsx    # Programs landing
│   │   │   │   └── hwrap/
│   │   │   │       ├── page.tsx
│   │   │   │       └── intake/
│   │   │   │           └── page.tsx
│   │   │   ├── activities/
│   │   │   ├── contact/
│   │   │   └── donate/
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   ├── hwrap/intake/route.ts
│   │   │   └── calendar/events/route.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── SafetyExitButton.tsx
│   │   ├── CrisisResources.tsx
│   │   ├── HwrapIntakeForm.tsx
│   │   ├── ContactForm.tsx
│   │   ├── EventsList.tsx
│   │   ├── DonateEmbed.tsx
│   │   └── TeamGrid.tsx
│   ├── lib/
│   │   ├── calendar.ts
│   │   ├── email.ts
│   │   └── constants.ts
│   └── messages/
│       ├── en.json
│       ├── ar.json
│       └── so.json
├── .env.local
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 12. Environment Variables

```env
# Google Calendar API
GOOGLE_CALENDAR_ID=
GOOGLE_CALENDAR_API_KEY=

# Email (Resend)
RESEND_API_KEY=
CONTACT_FORM_TO_EMAIL=
HWRAP_INTAKE_TO_EMAIL=

# Analytics
NEXT_PUBLIC_GA_ID=

# Site
NEXT_PUBLIC_SITE_URL=https://muslimahsunited.org
```

---

## 13. Assets Checklist

| Asset | Status |
|-------|--------|
| Muslimahs United logo | ✅ Provided (`muslimahs_united_logo.jpg`) — use at modest sizes |
| HWRAP logo | ✅ Provided (`HWRAP_logo.png`) |
| Brand colors (MU) | ✅ Derived from logo (Section 3) |
| Brand colors (HWRAP) | ✅ Derived from logo (Section 3) |
| Community photos | ✅ Available from existing site under `/wp-content/uploads/2021/` |
| Team bios | ✅ Placeholder from current site |
| Mission copy | ✅ Placeholder from current site |
| Contact email | 🔧 Client to provide |
| Contact phone | 🔧 Client to provide |
| Mailing address | 🔧 Client to provide (optional) |
| Social media links | 🔧 Client to provide (optional) |
| PayPal donate link/button code | 🔧 Client to provide (existing account) |
| Google Calendar ID | 🔧 Client to create dedicated calendar and share |
| Arabic translations | 🔧 AI-assisted draft, client to review |
| Somali translations | 🔧 AI-assisted draft, client to review |
| Domain DNS access | 🔧 Client to provide |
| 501(c)(3) EIN | ✅ 47-3593495 |

---

## 14. Content Still Needed From Client

Before launch, the following must be provided or confirmed:

1. **Contact email and phone** (for footer, contact form destination)
2. **HWRAP intake destination email** — ideally a dedicated inbox (e.g., `hwrap@muslimahsunited.org`) rather than a shared general inbox
3. **PayPal donate button embed code** from their existing PayPal account
4. **Google Calendar** — create a dedicated events calendar, make readable, share ID
5. **Review and confirmation** of all placeholder copy (mission statements, team bios) — client may want to update
6. **Bio for Nadia (Board President)** — currently a placeholder, needs to be written
6. **Review of AI-assisted translations** (Arabic, Somali) before those locales go live
7. **Privacy policy review** — especially retention policy for HWRAP submissions (in this phase, retention = however long the staff email inbox retains them)
8. **Confirm** whether client wants a dedicated Programs landing page or wants Programs dropdown to link straight to HWRAP
9. **Social media links** (if any) for footer
10. **Any logos/branding** for partner organizations the client wants to credit

---

## 15. Out of Scope (for initial build)

Explicitly **not** included in this phase:

- **HWRAP admin dashboard / database-backed intake** — submissions go to staff email directly, matching current setup. Database + admin portal is a solid future enhancement but not needed to get the site relaunched.
- Newsletter signup / email marketing integration (Mailchimp, etc.)
- Volunteer signup form / application
- Members-only / gated resource area *(noted as a future enhancement — requires proper auth, not DIY)*
- Blog / CMS for articles
- Donor portal / tax receipt generation (PayPal handles receipts for now)
- Stripe / Donorbox integration (PayPal only for now, per client preference)
- Events RSVP handled directly on the site (external Google Forms used instead, linked from calendar description)
- E-commerce / merchandise
- Live chat / chatbot
- Multi-organization / multi-chapter support

---

## 16. Future Enhancements

Features to consider in later phases:

- **Database-backed HWRAP intake with admin dashboard** — migrate from email-based intake to Supabase (or similar) with RLS, authenticated admin portal, submission status tracking (new → contacted → closed), internal notes, and audit logs. This adds security and case-management capability as the organization grows.
- **Members-only resource area** — would require proper authentication (Supabase Auth, Clerk, or Auth0) and careful access control. Should not be built DIY.
- **Newsletter signup** — integrate with Mailchimp, Buttondown, or ConvertKit
- **Volunteer application form** — standard form with email forwarding, similar pattern to contact form
- **Expanded donation options** — Donorbox for recurring donations with tax-receipt automation; option for donors to designate funds to specific programs
- **Blog / Resources section** — useful for SEO and community education (e.g., know-your-rights content)
- **Event RSVP tracking built-in** — replacing Google Forms with on-site RSVP
- **Partner organization directory** — for referrals

---

## 17. Key Risks & Flags for Developer

1. **HWRAP data sensitivity** — submissions are emailed to staff, matching the current site's pattern. The safety features on the form page (quick exit, no-cache, privacy notices) are the main protections for the *submitter*. Once submissions reach the staff inbox, their confidentiality depends on email account security — staff should use strong passwords + 2FA, and avoid forwarding HWRAP emails. A short written handling guidance for staff is recommended. A database-backed system with an admin dashboard is noted as a future enhancement.
2. **Client is not highly technical** — UX for any client-facing setup (Google Calendar, PayPal embed) must be documented in plain language with screenshots. A short handoff / training session is recommended.
3. **Translation quality** — AI drafts are a starting point, not a final product. Culturally sensitive content (especially HWRAP, which discusses DV and religious context) should be reviewed by native speakers before going live. Infrastructure-first, content second.
4. **Privacy policy** — a nonprofit dealing with DV survivors has legal and ethical obligations beyond a boilerplate privacy policy. Recommend client have it reviewed by an attorney or a nonprofit legal clinic.
5. **Existing HWRAP form is broken** — developer should confirm the current form is not functioning before assuming any submissions need to be migrated. Most likely nothing to migrate.

---

## 18. Summary

| Attribute | Value |
|----------|-------|
| Organization | Muslimahs United (501(c)(3), EIN 47-3593495) |
| Type | Multi-page nonprofit website |
| Pages | Home, About, Programs (→ HWRAP → Intake), Activities, Contact, Donate |
| Stack | Next.js + Tailwind + TypeScript + Resend + Google Calendar API |
| Languages | English (primary), Arabic, Somali (translations in second pass) |
| Key programs | HWRAP (flagship), Community Activities, Resources |
| Donations | Embedded PayPal (client's existing account) |
| Events | Google Calendar API integration (client manages via calendar) |
| HWRAP intake | Form submits to staff email (matches current setup); full safety-exit and no-cache protections for submitters |
| Contact form | Simple email forwarding via Resend |
| Hosting | Vercel (free tier) |
| Design | Warm, community-rooted, culturally grounded — NOT corporate/clinical |
| Critical feature | Safety exit + no-cache on HWRAP pages for DV survivor safety |

---

*This spec is ready to be used with Claude Code. The HWRAP page is the most sensitive component of the build and should receive extra scrutiny. Placeholder copy and contact info need client review before launch. Translations should be infrastructure-ready at launch, with translated content added in a second pass.*
