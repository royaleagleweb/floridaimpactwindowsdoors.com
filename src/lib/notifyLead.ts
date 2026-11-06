const LEAD_TIMEOUT_MS = 5000;

export const FORMSUBMIT_AJAX_URL = "https://formsubmit.co/ajax/roy@royaleagleweb.com";

/** Best-effort WhatsApp notification. Resolves even when /api/lead fails or times out. */
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

/**
 * Best-effort FormSubmit email. The request is not awaited: a Cloudflare
 * error or a hung connection must not block the thank-you redirect.
 * `keepalive` lets the POST finish if the page navigates away.
 */
export function emailLead(fields: Record<string, string>): void {
  fetch(FORMSUBMIT_AJAX_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
    keepalive: true,
  }).catch(() => undefined);
}

/**
 * Email via FormSubmit when it is reachable, and always attempt WhatsApp.
 * Settles when the WhatsApp attempt finishes, not when FormSubmit does.
 */
export function deliverLead(
  emailFields: Record<string, string>,
  whatsappFields: Record<string, string>,
): Promise<void> {
  emailLead(emailFields);
  return notifyLead(whatsappFields);
}
