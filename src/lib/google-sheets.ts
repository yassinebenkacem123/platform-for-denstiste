import "server-only";
import { createSign } from "node:crypto";
import type { AppointmentValues } from "@/lib/appointment";

type GoogleTokenResponse = { access_token?: string; error?: string };

function base64Url(value: string | Buffer): string {
  return Buffer.from(value).toString("base64url");
}

function requireEnvironment(name: "GOOGLE_SHEET_ID" | "GOOGLE_SERVICE_ACCOUNT_EMAIL" | "GOOGLE_PRIVATE_KEY"): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server environment variable: ${name}`);
  return value;
}

async function createAccessToken(): Promise<string> {
  const email = requireEnvironment("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = requireEnvironment("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64Url(JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claim}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const assertion = `${unsignedToken}.${signer.sign(privateKey).toString("base64url")}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });
  const data = await response.json() as GoogleTokenResponse;
  if (!response.ok || !data.access_token) throw new Error(`Google OAuth failed with status ${response.status}: ${data.error ?? "unknown error"}`);
  return data.access_token;
}

export async function appendAppointmentToSheet(values: AppointmentValues): Promise<void> {
  const sheetId = requireEnvironment("GOOGLE_SHEET_ID");
  const range = process.env.GOOGLE_SHEET_RANGE?.trim() || "Leads!A:I";
  const token = await createAccessToken();
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      majorDimension: "ROWS",
      values: [[
        new Date().toISOString(),
        values.fullName,
        values.email,
        values.phone,
        values.appointmentDate,
        values.preferredTime,
        values.service,
        values.message,
        "New",
      ]],
    }),
    cache: "no-store",
  });
  if (!response.ok) {
    const diagnostic = (await response.text()).slice(0, 500);
    throw new Error(`Google Sheets append failed with status ${response.status}: ${diagnostic}`);
  }
}
