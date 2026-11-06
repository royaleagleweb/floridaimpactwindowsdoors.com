/**
 * Lead intake for WhatsApp. The Green API token is read from the Worker
 * environment only and is never written to a response or log line.
 */

export interface GreenApiEnv {
  GREEN_API_TOKEN?: string;
  GREEN_API_ID_INSTANCE?: string;
  GREEN_API_API_URL?: string;
  GREEN_API_GROUP_CHAT_ID?: string;
}

const MAX_BODY_BYTES = 16_384;
const MAX_FIELDS = 30;
const MAX_FIELD_LENGTH = 300;
const MAX_MESSAGE_LENGTH = 3500;

const FIELD_ORDER = [
  "name",
  "phone",
  "email",
  "service",
  "services",
  "address",
  "city",
  "property_type",
  "openings",
  "property_age",
  "brand_preferences",
  "brands",
  "budget",
  "timeline",
  "message",
] as const;

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  service: "Service",
  services: "Services",
  address: "Address",
  city: "City",
  property_type: "Property type",
  openings: "Openings",
  property_age: "Property age",
  brand_preferences: "Brand preferences",
  brands: "Brand preferences",
  budget: "Budget",
  timeline: "Timeline",
  message: "Message",
};

const SECRET_NAMES = [
  "GREEN_API_TOKEN",
  "GREEN_API_ID_INSTANCE",
  "GREEN_API_API_URL",
  "GREEN_API_GROUP_CHAT_ID",
] as const;

const SENSITIVE_KEY = /token|secret|password|authorization|api[_-]?key/i;

export function formatLeadMessage(fields: Record<string, string>): string | null {
  const clean = sanitizeFields(fields);
  const source = clean.source || "Website form";
  delete clean.source;

  const lines: string[] = [
    "New lead — Florida Impact Windows & Doors",
    `Source: ${source}`,
    "",
  ];

  const used = new Set<string>();
  for (const key of FIELD_ORDER) {
    const value = clean[key];
    if (!value) continue;
    used.add(key);
    lines.push(`${FIELD_LABELS[key] ?? labelFor(key)}: ${value}`);
  }

  const extras = Object.keys(clean)
    .filter((key) => !used.has(key) && clean[key])
    .sort();
  for (const key of extras) {
    lines.push(`${labelFor(key)}: ${clean[key]}`);
  }

  if (lines.length <= 3) return null;

  const message = lines.join("\n");
  return message.length > MAX_MESSAGE_LENGTH
    ? message.slice(0, MAX_MESSAGE_LENGTH)
    : message;
}

export function sanitizeFields(fields: Record<string, string>): Record<string, string> {
  const clean: Record<string, string> = {};
  let count = 0;
  for (const [rawKey, rawValue] of Object.entries(fields)) {
    if (count >= MAX_FIELDS) break;
    const key = rawKey.trim();
    if (!key || key.startsWith("_") || SENSITIVE_KEY.test(key)) continue;
    if (!/^[A-Za-z0-9_-]{1,40}$/.test(key)) continue;
    const value = oneLine(rawValue);
    if (!value) continue;
    clean[key] = value;
    count += 1;
  }
  return clean;
}

export async function handleLead(
  request: Request,
  env: GreenApiEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  if (!originAllowed(request)) {
    return json({ ok: false, error: "Origin not allowed" }, 403);
  }

  const raw = await readBodyLimited(request, MAX_BODY_BYTES);
  if (raw === null) {
    return json({ ok: false, error: "Payload too large" }, 413);
  }

  const fields = parseFields(request, raw);
  if (!fields) {
    return json({ ok: false, error: "Expected JSON or form data" }, 415);
  }

  const message = formatLeadMessage(fields);
  if (!message || !hasContact(fields)) {
    return json({ ok: false, error: "Name or phone is required" }, 400);
  }

  const outbound = buildSendMessageRequest(env, message);
  if ("error" in outbound) {
    console.error(
      JSON.stringify({
        message: "green_api_not_configured",
        reason: outbound.error,
      }),
    );
    return json({ ok: false, error: "Lead delivery is not configured" }, 500);
  }

  let response: Response;
  try {
    response = await fetchImpl(outbound.url, outbound.init);
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "green_api_request_failed",
        name: error instanceof Error ? error.name : "Error",
      }),
    );
    return json({ ok: false, error: "Unable to deliver lead" }, 502);
  }

  const upstream = await readUpstream(response);
  if (!response.ok || upstream.failed) {
    console.error(
      JSON.stringify({
        message: "green_api_rejected",
        status: response.status,
      }),
    );
    return json({ ok: false, error: "Unable to deliver lead" }, 502);
  }

  console.log(
    JSON.stringify({
      message: "lead_delivered",
      status: response.status,
    }),
  );
  return json({ ok: true }, 200);
}

export function buildSendMessageRequest(
  env: GreenApiEnv,
  message: string,
): { url: string; init: RequestInit } | { error: string } {
  const missing = SECRET_NAMES.filter((key) => !env[key] || !String(env[key]).trim());
  if (missing.length > 0) {
    return { error: "missing_secret" };
  }

  let apiUrl: URL;
  try {
    apiUrl = new URL(String(env.GREEN_API_API_URL).trim());
  } catch {
    return { error: "invalid_api_url" };
  }

  if (apiUrl.protocol !== "https:" || !apiUrl.hostname.endsWith(".greenapi.com")) {
    return { error: "invalid_api_url" };
  }

  const idInstance = String(env.GREEN_API_ID_INSTANCE).trim();
  if (!/^\d{6,20}$/.test(idInstance)) {
    return { error: "invalid_id_instance" };
  }

  const token = String(env.GREEN_API_TOKEN).trim();
  if (!/^[A-Za-z0-9]{20,128}$/.test(token)) {
    return { error: "invalid_token" };
  }

  const chatId = String(env.GREEN_API_GROUP_CHAT_ID).trim();
  if (!/^\d{10,25}@g\.us$/.test(chatId)) {
    return { error: "invalid_chat_id" };
  }

  const url = `${apiUrl.origin}/waInstance${idInstance}/sendMessage/${token}`;
  return {
    url,
    init: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId, message }),
      signal: AbortSignal.timeout(10_000),
    },
  };
}

function hasContact(fields: Record<string, string>): boolean {
  const clean = sanitizeFields(fields);
  return Boolean(clean.name || clean.phone || clean.email);
}

function parseFields(request: Request, raw: string): Record<string, string> | null {
  const contentType = (request.headers.get("content-type") ?? "").toLowerCase();
  const trimmed = raw.trim();
  if (!trimmed) return {};

  const asJson =
    contentType.includes("application/json") ||
    (!contentType.includes("application/x-www-form-urlencoded") &&
      !contentType.includes("multipart/form-data") &&
      trimmed.startsWith("{"));

  if (asJson || contentType.includes("application/json")) {
    if (contentType && !contentType.includes("application/json") && !trimmed.startsWith("{")) {
      return null;
    }
    try {
      const data: unknown = JSON.parse(trimmed);
      if (!data || typeof data !== "object" || Array.isArray(data)) return null;
      const fields: Record<string, string> = {};
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
          fields[key] = String(value);
        }
      }
      return fields;
    } catch {
      return null;
    }
  }

  if (contentType.includes("multipart/form-data")) return null;

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    (!contentType.includes("application/json") && trimmed.includes("="))
  ) {
    const fields: Record<string, string> = {};
    const params = new URLSearchParams(trimmed);
    for (const [key, value] of params.entries()) {
      fields[key] = value;
    }
    return fields;
  }

  return null;
}

function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }

  const requestHost = new URL(request.url).hostname;
  if (originUrl.hostname === requestHost) return true;
  if (originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1") return true;
  return false;
}

async function readBodyLimited(request: Request, maxBytes: number): Promise<string | null> {
  const declared = request.headers.get("content-length");
  if (declared) {
    const length = Number(declared);
    if (!Number.isFinite(length) || length < 0 || length > maxBytes) return null;
  }
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const combined = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    combined.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(combined);
}

async function readUpstream(response: Response): Promise<{ failed: boolean }> {
  const declared = response.headers.get("content-length");
  if (declared && Number(declared) > 8_192) {
    await response.body?.cancel();
    return { failed: !response.ok };
  }

  let text = "";
  try {
    text = await response.text();
  } catch {
    return { failed: !response.ok };
  }
  if (text.length > 8_192) text = text.slice(0, 8_192);

  try {
    const data: unknown = JSON.parse(text);
    if (data && typeof data === "object" && !Array.isArray(data)) {
      const record = data as Record<string, unknown>;
      if (record.error || record.errorMessage) return { failed: true };
      if (typeof record.idMessage === "string" && record.idMessage) return { failed: false };
    }
  } catch {
    return { failed: !response.ok };
  }

  return { failed: !response.ok };
}

function oneLine(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, MAX_FIELD_LENGTH);
}

function labelFor(key: string): string {
  return key
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function json(body: { ok: boolean; error?: string }, status: number): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
