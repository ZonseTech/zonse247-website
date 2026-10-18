"use server";

import { enquirySchema, type EnquiryResult, type EnquiryValues } from "@/lib/enquiry";
import { INTERESTS } from "@/lib/site";

const FAILED = "We couldn't send your enquiry. Please try again.";

export async function sendEnquiry(values: EnquiryValues): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(values);
  if (!parsed.success) return { ok: false, error: "Please check the form and try again." };

  const { website, ...enquiry } = parsed.data;
  if (website) return { ok: true };

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return { ok: false, error: "Enquiries aren't connected yet. Please try again later." };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...enquiry,
        interestLabel: INTERESTS.find((interest) => interest.key === enquiry.interest)?.label,
        source: "zonse247-website",
        receivedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? { ok: true } : { ok: false, error: FAILED };
  } catch {
    return { ok: false, error: FAILED };
  }
}
