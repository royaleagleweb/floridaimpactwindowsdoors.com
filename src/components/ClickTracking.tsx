"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Delegated listener for tel: and sms: links. No-ops until gtag is loaded. */
export default function ClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const pagePath = window.location.pathname;
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: pagePath });
      } else if (href.startsWith("sms:")) {
        trackEvent("text_click", { page_path: pagePath });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
