import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  preferredContact?: string;
  subject?: string;
  message: string;
}

export interface HwrapIntakeData {
  firstName: string;
  lastName: string;
  address?: string;
  addressLength?: string;
  email?: string;
  phone?: string;
  inOregon?: string;
  state?: string;
  familyType?: string;
  numChildren?: string;
  situation: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  if (!to) throw new Error("Contact email not configured");

  const resend = getResend();
  return resend.emails.send({
    from: "Muslimahs United Website <noreply@muslimahsunited.org>",
    to,
    replyTo: data.email,
    subject: `Contact Form: ${data.subject || "(no subject)"} — from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Preferred Contact: ${data.preferredContact || "Email"}
Subject: ${data.subject || ""}

Message:
${data.message}
    `.trim(),
  });
}

export async function sendHwrapIntakeEmail(data: HwrapIntakeData) {
  const to = process.env.HWRAP_INTAKE_TO_EMAIL;
  if (!to) throw new Error("HWRAP email not configured");

  const resend = getResend();
  return resend.emails.send({
    from: "Muslimahs United HWRAP <noreply@muslimahsunited.org>",
    to,
    replyTo: data.email,
    subject: `New HWRAP intake submission — ${data.firstName}`,
    text: `
NEW HWRAP INTAKE SUBMISSION
===========================

First Name: ${data.firstName}
Last Name: ${data.lastName}
Address: ${data.address || "Not provided"}
Time at Address: ${data.addressLength || "Not provided"}
Email: ${data.email || "Not provided"}
Phone: ${data.phone || "Not provided"}
In Oregon: ${data.inOregon || "Not specified"}
State: ${data.state || "Not provided"}
Family Type: ${data.familyType || "Not specified"}
Number of Children: ${data.numChildren || "N/A"}

Situation:
${data.situation}

---
Submitted via HWRAP intake form on muslimahsunited.org
    `.trim(),
  });
}
