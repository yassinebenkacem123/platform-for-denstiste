import "server-only";

type RateRecord = { count: number; resetAt: number };

const records = new Map<string, RateRecord>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

export function checkAppointmentRateLimit(key: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const current = records.get(key);
  if (!current || current.resetAt <= now) {
    records.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }
  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}
