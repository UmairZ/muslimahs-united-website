import { NextRequest, NextResponse } from "next/server";
import { sendHwrapIntakeEmail } from "@/lib/email";

const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const requests = (ipRequests.get(ip) || []).filter((t) => now - t < windowMs);
  if (requests.length >= 3) return true;
  requests.push(now);
  ipRequests.set(ip, requests);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();

  // Honeypot
  if (body.website) return NextResponse.json({ ok: true });

  const { firstName, lastName, situation } = body;
  if (!firstName || !lastName || !situation) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendHwrapIntakeEmail(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("HWRAP intake email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
