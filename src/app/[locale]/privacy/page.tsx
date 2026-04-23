import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-extrabold text-[#8c4f6b] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t("title")}</h1>
      <p className="text-[#6b7280] text-sm mb-10">{t("lastUpdated")}</p>

      <div className="prose prose-sm max-w-none text-[#4b5563] space-y-8">
        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">What data we collect</h2>
          <p>We collect information you voluntarily provide through our contact form and HWRAP intake form. This includes your name, email address, phone number, and any details you share in your message or intake submission. We also collect standard website analytics data through Google Analytics 4, which may include your approximate location, device type, and pages visited.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">How it is stored</h2>
          <p>Contact form and HWRAP intake submissions are sent directly to staff email inboxes via Resend, a transactional email service. No submission data is stored in a database on our servers. Once a submission reaches a staff inbox, its security depends on the security of that email account.</p>
          <p className="mt-2">Analytics data is processed by Google Analytics and is subject to Google's privacy policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Who has access</h2>
          <p>Contact form submissions are accessible to Muslimahs United staff. HWRAP intake submissions are accessible only to trained HWRAP advocates. Analytics data is accessible to authorized Muslimahs United staff.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Retention</h2>
          <p>HWRAP and contact form submissions are retained in staff email inboxes according to the organization's internal retention practices. If you would like your information removed, please contact us.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us. We will respond within a reasonable time.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Third-party services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Resend</strong> — email delivery service used to transmit form submissions to staff</li>
            <li><strong>Google Analytics 4</strong> — website analytics</li>
            <li><strong>PayPal</strong> — donation processing (governed by PayPal's privacy policy)</li>
            <li><strong>Google Calendar API</strong> — events data (publicly available calendar)</li>
            <li><strong>Vercel</strong> — website hosting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Contact</h2>
          <p>For privacy questions or data requests, please use our <a href="/contact" className="text-[#8c4f6b] underline">contact form</a>.</p>
          <p className="mt-3 text-xs text-[#6b7280]"><em>This privacy policy is a draft and should be reviewed by the organization and, for HWRAP-related matters, by legal counsel before the site goes live.</em></p>
        </section>
      </div>
    </div>
  );
}
