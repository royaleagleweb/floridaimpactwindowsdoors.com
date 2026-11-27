import assert from "node:assert/strict";
import test from "node:test";
import { trackEvent, trackGenerateLead } from "./analytics.ts";

type FakeWindow = {
  location?: { pathname: string };
  gtag?: (...args: unknown[]) => void;
};

function setWindow(value: FakeWindow | undefined) {
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    writable: true,
    value,
  });
}

test("trackEvent no-ops when gtag is not loaded", () => {
  setWindow({ location: { pathname: "/contact/" } });
  assert.doesNotThrow(() => trackEvent("phone_click", { page_path: "/contact/" }));
  assert.doesNotThrow(() => trackGenerateLead("contact"));
  setWindow(undefined);
  assert.doesNotThrow(() => trackEvent("text_click"));
});

test("trackGenerateLead sends generate_lead with form_name and page path", () => {
  const calls: unknown[][] = [];
  setWindow({
    location: { pathname: "/get-estimate/" },
    gtag: (...args: unknown[]) => {
      calls.push(args);
    },
  });

  trackGenerateLead("get_estimate");
  trackEvent("phone_click", { page_path: "/get-estimate/" });
  trackEvent("text_click", { page_path: "/get-estimate/", unused: undefined });

  assert.deepEqual(calls, [
    ["event", "generate_lead", { form_name: "get_estimate", page_path: "/get-estimate/" }],
    ["event", "phone_click", { page_path: "/get-estimate/" }],
    ["event", "text_click", { page_path: "/get-estimate/" }],
  ]);

  setWindow(undefined);
});
