import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { faqs } from "@/data/faq";

export function generateStaticParams() {
  return faqs.map((faq) => ({
    slug: faq.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = faqs.find((f) => f.slug === slug);

  if (!faq) {
    return {
      title: "FAQ Not Found",
    };
  }

  return {
    title: faq.question,
    description: faq.answer.substring(0, 160).trim() + "...",
    openGraph: {
      title: `${faq.question} | Florida Impact Windows & Doors FAQ`,
      description: faq.answer.substring(0, 160).trim() + "...",
      type: "article",
    },
  };
}

export default async function FAQDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = faqs.find((f) => f.slug === slug);

  if (!faq) {
    notFound();
  }

  // Related FAQs: same category first, then others
  const relatedSameCategory = faqs.filter(
    (f) => f.id !== faq.id && f.category === faq.category
  );
  const relatedOtherCategory = faqs.filter(
    (f) =>
      f.id !== faq.id &&
      f.category !== faq.category &&
      !relatedSameCategory.find((r) => r.id === f.id)
  );
  const relatedFaqs = [...relatedSameCategory, ...relatedOtherCategory].slice(
    0,
    6
  );

  // Split answer into paragraphs
  const paragraphs = faq.answer
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.floridaimpactwindowsdoors.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://www.floridaimpactwindowsdoors.com/faq/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: faq.question,
        item: `https://www.floridaimpactwindowsdoors.com/faq/${faq.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero / Header */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 lg:py-24">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link href="/faq/" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-500 truncate max-w-xs">
              {faq.question}
            </span>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-palm-500/20 text-palm-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {faq.category}
            </span>
          </div>

          {/* Question */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
            {faq.question}
          </h1>
        </div>
      </section>

      {/* Answer Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Answer */}
            <article className="lg:col-span-2">
              {/* Structured Answer with FAQ Schema hint */}
              <div className="bg-gradient-to-br from-palm-50/50 to-ocean-50/50 rounded-2xl p-8 border border-palm-100/50 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-palm-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-palm-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">
                      Quick Answer
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {paragraphs[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Detailed Answer */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">
                  Detailed Answer
                </h2>
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Category Link */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Category:</span>
                  <Link
                    href={`/faq/#${faq.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors"
                  >
                    {faq.category}
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

              {/* Expert Tip Box */}
              <div className="mt-8 bg-ocean-950 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-palm-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display mb-2">
                      Expert Tip from Florida Impact Windows & Doors
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Have more questions about {faq.category.toLowerCase()}? Our
                      experienced team has helped thousands of South Florida
                      homeowners make informed decisions about impact windows.
                      Schedule a free consultation to get personalized answers for
                      your specific situation.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 border border-palm-100 mb-8">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                  Need Personal Guidance?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our impact window experts are happy to answer all your
                  questions during a free, no-obligation in-home consultation.
                </p>
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-6 py-3 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+17546004876"
                  className="block w-full text-center mt-3 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors"
                >
                  Or Call (754) 600-4876
                </a>
              </div>

              {/* Related FAQs */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold font-display text-gray-900 mb-6">
                  Related Questions
                </h3>
                <div className="space-y-4">
                  {relatedFaqs.map((related) => (
                    <Link
                      key={related.id}
                      href={`/faq/${related.slug}/`}
                      className="group block"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors -mx-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 group-hover:bg-palm-50 transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-palm-600 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-palm-600 transition-colors leading-snug">
                            {related.question}
                          </h4>
                          <span className="text-xs text-gray-400 mt-1 inline-block">
                            {related.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/faq/"
                    className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors"
                  >
                    View All FAQs
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

              {/* Browse Categories */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-8">
                <h3 className="text-lg font-bold font-display text-gray-900 mb-4">
                  Browse Categories
                </h3>
                <div className="space-y-2">
                  {Array.from(new Set(faqs.map((f) => f.category))).map(
                    (category) => {
                      const count = faqs.filter(
                        (f) => f.category === category
                      ).length;
                      const isActive = category === faq.category;
                      return (
                        <Link
                          key={category}
                          href={`/faq/#${category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                          className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors ${
                            isActive
                              ? "bg-palm-50 text-palm-700"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {category}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-palm-100 text-palm-600"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {count}
                          </span>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Now that you have the answers, take the next step. Schedule a free
            consultation and get a personalized quote for your South Florida
            home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Schedule Free Estimate
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
              href="tel:+17546004876"
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
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
