import Link from "next/link";
import type { Metadata } from "next";
import { faqPageJsonLd } from "@/lib/faqSchema";
import PageFaqSection from "@/components/PageFaqSection";

export const metadata: Metadata = {
  title: "My Safe Florida Home Grant for Impact Windows | Hollywood",
  description:
    "My Safe Florida Home is a state grant of up to $10,000 for qualifying homesteaded homes, not a store discount. Free estimate from Hollywood. Call (754) 600-4876. Confirm rules at MySafeFLHome.com.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/my-safe-florida-home/" },
};

const faqs = [
  {
    question: "Is My Safe Florida Home the same as financing?",
    answer:
      "No. My Safe Florida Home is a Florida Department of Financial Services grant. Financing is a lender plan or, where it fits, PACE. The grant can reduce what you finance after written approval. It does not replace the lender terms, and it is not applied as a coupon on a proposal. See the financing page for the lender side.",
  },
  {
    question: "Who can receive up to $10,000?",
    answer:
      "The figure people repeat is a maximum, not a promise for every house. The version we follow, and that we ask you to confirm because the program changes, is a site-built homesteaded home with an original building permit dated before January 1, 2008, after a program inspection. Except for low-income applicants, the insured dwelling value is at or below $700,000. If MySafeFLHome.com disagrees with this page, the program site wins.",
  },
  {
    question: "Can work start before written approval?",
    answer:
      "No. Starting the work before written grant approval can disqualify the project. A measurement and a written proposal are planning. Demolition and installation are the work that has to wait. Call (754) 600-4876 or request a free estimate if you want a scope you can take into that process.",
  },
  {
    question: "Does the grant pick the windows or waive the permit?",
    answer:
      "No. Miami-Dade and Broward still require HVHZ product approvals. Palm Beach is a wind-borne debris region, not the HVHZ. The city permit and the product approval still have to match the opening. The grant also does not pick PGT, CGI, ES Windows, or Custom Window Systems. The inspection can prioritize a roof or another improvement instead of the windows.",
  },
];

export default function MySafeFloridaHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <section className="relative py-20 lg:py-28 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-sm text-palm-300 font-medium mb-4">Grant summary · not a financing plan</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
            My Safe Florida Home and impact windows
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            My Safe Florida Home is a state grant of up to $10,000 for qualifying homesteaded homes after a program inspection and written approval. It is not a discount we apply, and it is not the same thing as the lender plans on our financing page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold"
            >
              Free estimate
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-semibold"
            >
              (754) 600-4876
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold font-display text-gray-900">What the grant is</h2>
          <p>
            The program is run through the Florida Department of Financial Services. On a house that qualifies, it can help pay for hurricane-hardening work. Impact windows and impact doors are a common use when the program inspection recommends opening protection. They are not automatically what every inspection will fund. If the inspection prioritizes the roof, a window order does not override that.
          </p>
          <p>
            The rules we repeat, and that you should check against the current cycle, are: a site-built home, an original building permit dated before January 1, 2008, homestead status, and — except for low-income applicants — an insured dwelling value at or below $700,000. Condos, townhomes, and newer houses often fall outside that list. Geography does not create eligibility. Living in the HVHZ does not confer a grant.
          </p>
          <p>
            Current details live at MySafeFLHome.com. If that site and this page disagree, the program site wins. The longer write-up is the article{" "}
            <Link href="/blog/my-safe-florida-home-grant-impact-windows/" className="text-palm-700 font-semibold">
              My Safe Florida Home and impact windows
            </Link>
            . Lender plans, which are a separate path, are on the{" "}
            <Link href="/financing/" className="text-palm-700 font-semibold">
              financing page
            </Link>
            .
          </p>
          <h2 className="text-3xl font-bold font-display text-gray-900">Do not start the work early</h2>
          <p>
            Starting demolition or installation before written grant approval can disqualify the project. That is the rule that hurts people trying to beat hurricane season. A free in-home measure and a written proposal are planning. They are not the work the program is warning you not to start.
          </p>
          <p>
            Read the approval before treating $10,000 as the amount you will receive. The number is a maximum. A grant that covers part of the opening list is not the same as protecting every opening, and a later insurance form can treat a partial job differently. Any premium credit is set by the carrier.
          </p>
          <h2 className="text-3xl font-bold font-display text-gray-900">The permit still applies</h2>
          <p>
            A grant does not waive the building permit or the product approval. Miami-Dade and Broward are the High-Velocity Hurricane Zone. Palm Beach County is a wind-borne debris region, not the HVHZ. We specify PGT, CGI, ES Windows, or Custom Window Systems based on the opening. Installing those products is not an authorized-dealer claim.
          </p>
          <p>
            The program inspection and the insurance wind-mitigation form (OIR-B1-1802) are different visits. One is how the state decides whether it will help pay. The other is what a carrier uses after the glass is in. Keep the folders separate.
          </p>
          <p>
            Florida Impact Windows &amp; Doors, 3000 Stirling Rd, Hollywood, FL 33021. Email info@floridaimpactwindowsdoors.com or call (754) 600-4876. We do not publish a license number, a star rating, or a years-in-business figure.
          </p>
        </div>
      </section>

      <PageFaqSection heading="My Safe Florida Home questions" faqs={faqs} />
    </>
  );
}
