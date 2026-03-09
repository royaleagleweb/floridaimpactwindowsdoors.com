import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Impact Window Questions Answered",
  description:
    "Find answers to frequently asked questions about impact windows, hurricane protection, costs, installation, insurance savings, and maintenance for South Florida homeowners.",
  openGraph: {
    title: "FAQ | Impact Window Questions Answered | Florida Impact Windows & Doors",
    description:
      "Find answers to frequently asked questions about impact windows, hurricane protection, costs, installation, insurance savings, and maintenance.",
  },
};

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

const faqsByCategory = categories.map((category) => ({
  category,
  items: faqs.filter((faq) => faq.category === category),
}));

const categoryIcons: Record<string, ReactNode> = {
  "Cost & Pricing": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Product: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
    </svg>
  ),
  Installation: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Insurance: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  Maintenance: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
      />
    </svg>
  ),
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Window{" "}
              <span className="gradient-text">FAQ</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Get answers to the most common questions about impact windows,
              pricing, installation, insurance savings, and maintenance from
              South Florida&apos;s trusted impact window experts.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-palm-50 hover:text-palm-600 transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold font-display gradient-text-green mb-1">
                {faqs.length}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Questions Answered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-display gradient-text-green mb-1">
                {categories.length}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-display gradient-text-green mb-1">
                15+
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-display gradient-text-green mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {faqsByCategory.map((group) => (
              <div
                key={group.category}
                id={group.category
                  .toLowerCase()
                  .replace(/\s+&\s+/g, "-")
                  .replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 border border-palm-100">
                    {categoryIcons[group.category] || (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-display text-gray-900">
                      {group.category}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {group.items.length} question
                      {group.items.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Accordion Items */}
                <div className="space-y-3">
                  {group.items.map((faq) => (
                    <details
                      key={faq.id}
                      className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-palm-200 transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-palm-600 transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-open:bg-palm-50 group-open:border-palm-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-500 group-open:text-palm-600 group-open:rotate-180 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-gray-200">
                          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed mt-4 whitespace-pre-line">
                            {faq.answer}
                          </div>
                          <div className="mt-6 flex items-center gap-4">
                            <Link
                              href={`/faq/${faq.slug}/`}
                              className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors"
                            >
                              Read Full Answer
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center mb-5 border border-palm-100">
                <svg
                  className="w-8 h-8 text-palm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Speak with an impact window expert today
              </p>
              <a
                href="tel:+17865551234"
                className="text-palm-600 font-bold text-lg hover:text-palm-700 transition-colors"
              >
                (786) 555-1234
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center mb-5 border border-palm-100">
                <svg
                  className="w-8 h-8 text-palm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                Free Estimate
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get a custom quote for your home
              </p>
              <Link
                href="/get-estimate/"
                className="text-palm-600 font-bold text-lg hover:text-palm-700 transition-colors"
              >
                Request Estimate
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center mb-5 border border-palm-100">
                <svg
                  className="w-8 h-8 text-palm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See our showroom in South Florida
              </p>
              <Link
                href="/contact/"
                className="text-palm-600 font-bold text-lg hover:text-palm-700 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our impact window experts are ready to help. Schedule a free in-home
            consultation and get all your questions answered in person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Schedule Free Consultation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
