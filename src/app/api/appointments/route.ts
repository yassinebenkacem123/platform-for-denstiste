import type { AppointmentApiResponse } from "@/lib/appointment";
import { hasAppointmentErrors, normalizeAppointment, validateAppointment } from "@/lib/appointment";
import { appendAppointmentToSheet } from "@/lib/google-sheets";
import { checkAppointmentRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function json(body: AppointmentApiResponse, status: number, headers?: HeadersInit): Response {
  return Response.json(body, { status, headers });
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return json({ ok: false, message: "The submitted request is too large." }, 413);
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ ok: false, message: "Unsupported request format." }, 415);

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 20_000) return json({ ok: false, message: "The submitted request is too large." }, 413);
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return json({ ok: false, message: "The submitted request could not be read." }, 400);
  }

  const values = normalizeAppointment(payload);
  if (values.website) return json({ ok: false, message: "The request could not be submitted." }, 400);
  const errors = validateAppointment(values);
  if (hasAppointmentErrors(errors)) return json({ ok: false, message: "Review the highlighted fields and try again.", errors }, 422);

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const rateKey = forwarded || request.headers.get("x-real-ip") || "unknown";
  const rate = checkAppointmentRateLimit(rateKey);
  if (!rate.allowed) return json({ ok: false, message: "Too many requests. Please wait a few minutes and try again." }, 429, { "Retry-After": String(rate.retryAfter) });

  try {
    await appendAppointmentToSheet(values);
    return json({ ok: true, message: "Your appointment request was received. Our team will contact you to confirm the details." }, 201);
  } catch (error) {
    console.error("Appointment submission failed", error instanceof Error ? error.message : "Unknown server error");
    return json({ ok: false, message: "We could not save your request right now. Please try again later or contact the clinic directly." }, 502);
  }
}
