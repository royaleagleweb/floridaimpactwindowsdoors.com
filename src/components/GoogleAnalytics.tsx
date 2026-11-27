import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/** Loads the site's existing GA4 property. The library waits until idle so it does not compete with the hero image. */
export default function GoogleAnalytics() {
  const id = GA_MEASUREMENT_ID;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${id}');`}
      </Script>
    </>
  );
}
