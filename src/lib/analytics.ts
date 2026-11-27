/** Existing GA4 measurement ID from the site layout. Not an invented ID. */
export const GA_MEASUREMENT_ID = "G-SKF6705HJM";

export type LeadFormName = "contact" | "get_estimate" | "hero" | "lp" | "chatbot";

export type EventParams = Record<string, string | number | boolean | undefined>;

type Gtag = (
  command: "event" | "js" | "config",
  target: string | Date,
  params?: EventParams,
) => void;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
};

function analyticsWindow(): AnalyticsWindow | undefined {
  if (typeof globalThis === "undefined") return undefined;
  return (globalThis as { window?: AnalyticsWindow }).window;
}

/** Send a GA4 event. No-ops during SSR and whenever `gtag` is not a function. */
export function trackEvent(eventName: string, params?: EventParams): void {
  const gtag = analyticsWindow()?.gtag;
  if (typeof gtag !== "function") return;

  if (!params) {
    gtag("event", eventName);
    return;
  }

  const cleaned: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) cleaned[key] = value;
  }
  gtag("event", eventName, cleaned);
}

/** GA4 recommended `generate_lead` event. Call only after `/api/lead` succeeds. */
export function trackGenerateLead(formName: LeadFormName): void {
  trackEvent("generate_lead", {
    form_name: formName,
    page_path: analyticsWindow()?.location?.pathname,
  });
}
