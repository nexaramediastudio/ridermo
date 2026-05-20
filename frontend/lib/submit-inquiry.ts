"use client";

import { API_ENABLED, API_URL, SOCIAL_LINKS } from "@/lib/constants";

export interface InquiryPayload {
  customerName: string;
  phoneNumber: string;
  message: string;
  bikeId?: string;
  bikeName?: string;
}

export type SubmitInquiryResult = {
  ok: boolean;
  error?: string;
  via?: "api" | "whatsapp";
};

function buildWhatsAppInquiryUrl(payload: InquiryPayload): string {
  const lines = [
    "Hi Ridermo,",
    "",
    `Name: ${payload.customerName}`,
    `Phone: ${payload.phoneNumber}`,
    ...(payload.bikeName ? [`Bike: ${payload.bikeName}`] : []),
    "",
    payload.message,
  ];
  return `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function sendViaWhatsApp(payload: InquiryPayload): SubmitInquiryResult {
  const url = buildWhatsAppInquiryUrl(payload);
  window.open(url, "_blank", "noopener,noreferrer");
  return { ok: true, via: "whatsapp" };
}

/**
 * Submits an inquiry. Without `NEXT_PUBLIC_API_URL`, opens WhatsApp only (no backend needed).
 */
export async function submitInquiry(
  payload: InquiryPayload
): Promise<SubmitInquiryResult> {
  if (!API_ENABLED) {
    return sendViaWhatsApp(payload);
  }

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${API_URL}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: payload.customerName,
        phoneNumber: payload.phoneNumber,
        message: payload.message,
        bikeId: payload.bikeId,
      }),
      signal: controller.signal,
    });

    window.clearTimeout(timeout);

    if (res.ok) {
      return { ok: true, via: "api" };
    }

    const err = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, error: err.error || "Submission failed. Please try again." };
  } catch {
    return sendViaWhatsApp(payload);
  }
}
