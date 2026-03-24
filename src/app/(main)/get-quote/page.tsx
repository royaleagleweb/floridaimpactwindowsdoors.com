import type { Metadata } from "next";
import Link from "next/link";
import MultiStepQuoteForm from "@/components/MultiStepQuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Florida Impact Windows & Doors",
  description:
    "Get a personalized quote for impact windows and doors. Tell us about your project and we'll provide a detailed estimate within 24 hours.",
  alternates: { canonical: "/get-quote/" },
};

export default function GetQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
          {/* Header copy */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">
                100% Free &middot; No Obligation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-4">
              Get Your <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us about your project in a few simple steps and we&apos;ll
              provide a personalized estimate within 24 hours.
            </p>
          </div>

          {/* Multi-step form */}
          <MultiStepQuoteForm />

          {/* Call CTA below form */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <p className="text-gray-400 text-sm">Prefer to call?</p>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-palm-300 transition-colors"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (754) 600-4876
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-ocean-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5,000+", label: "Homes Protected" },
              { value: "4.9", label: "Google Rating" },
              { value: "24hr", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-palm-400 font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-ocean-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Not ready to fill out the form?
          </h2>
          <p className="text-gray-300 mb-6">
            Browse our services, check out reviews, or learn more about our
            process first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/impact-windows/"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all"
            >
              <svg
                className="w-4 h-4 text-palm-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Our Services
            </Link>
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all"
            >
              <svg
                className="w-4 h-4 text-palm-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Reviews
            </Link>
            <Link
              href="/our-process/"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-all"
            >
              <svg
                className="w-4 h-4 text-palm-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
