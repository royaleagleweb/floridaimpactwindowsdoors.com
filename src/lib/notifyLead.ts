const LEAD_TIMEOUT_MS = 5000;

/** Best-effort WhatsApp notification. Email delivery does not depend on this. */
export function notifyLead(fields: Record<string, string>): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LEAD_TIMEOUT_MS);

  return fetch("/api/lead", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
    keepalive: true,
    signal: controller.signal,
  })
    .then(() => undefined)
    .catch(() => undefined)
    .finally(() => clearTimeout(timer));
}
