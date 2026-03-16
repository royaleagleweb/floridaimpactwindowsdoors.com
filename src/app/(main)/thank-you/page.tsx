import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Your Request Has Been Received",
  description:
    "Thank you for contacting Florida Impact Windows & Doors. We have received your request and will be in touch within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950 py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-palm-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-palm-500/20 rounded-full mb-8">
            <svg
              className="w-10 h-10 text-palm-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Your request has been received. A member of our team will contact
            you within <span className="text-palm-400 font-semibold">24 hours</span>.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-ocean-900 font-display text-center mb-12">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "We Review Your Request",
                description:
                  "Our team reviews your project details to prepare for a personalized consultation.",
              },
              {
                step: "2",
                title: "We Call to Schedule",
                description:
                  "A specialist will call you to schedule a convenient time for your free in-home estimate.",
              },
              {
                step: "3",
                title: "Free In-Home Estimate",
                description:
                  "We visit your home, take measurements, and provide a detailed no-obligation quote.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-palm-500 text-white rounded-full font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-ocean-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6">
            Need immediate assistance? Give us a call.
          </p>
          <a
            href="tel:+17546004876"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
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
          <div className="mt-10">
            <Link
              href="/"
              className="text-ocean-700 hover:text-palm-600 font-medium transition-colors"
            >
              &larr; Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
