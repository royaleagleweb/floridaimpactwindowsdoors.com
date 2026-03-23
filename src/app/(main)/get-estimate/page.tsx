import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Impact Window Estimate Fort Lauderdale | No Obligation Quote",
  description:
    "Get a free in-home estimate for impact windows and doors in Fort Lauderdale, Broward & Palm Beach County. No obligation, no pressure. Response within 2 hours. Call (754) 600-4876.",
  alternates: { canonical: "/get-estimate/" },
};

const steps = [
  {
    number: "1",
    title: "Fill Out the Form",
    description:
      "Provide your contact information and a few details about your project so we can prepare for your consultation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "We Call You",
    description:
      "A member of our team will call you within 24 hours to schedule a convenient time for your free in-home consultation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "In-Home Visit",
    description:
      "Our expert visits your home, takes precise measurements, discusses your options, and answers all your questions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Get Your Proposal",
    description:
      "Receive a detailed written proposal with product recommendations, pricing, and financing options — no obligation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const included = [
  { text: "Precise measurements of every opening", icon: "ruler" },
  { text: "Product recommendations for your home & budget", icon: "star" },
  { text: "Detailed written proposal with itemized pricing", icon: "doc" },
  { text: "Financing pre-qualification if desired", icon: "dollar" },
  { text: "Energy savings & insurance discount estimates", icon: "savings" },
  { text: "Zero pressure — your timeline, your decision", icon: "shield" },
];

const trustSignals = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Homes Protected" },
  { value: "4.9", label: "Google Rating" },
  { value: "24hr", label: "Response Time" },
];

export default function GetEstimatePage() {
  return (
    <>
      {/* Hero Section with Integrated Form */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Copy */}
            <div className="lg:pt-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
                <span className="text-sm text-palm-300 font-medium">100% Free &middot; No Obligation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                Get Your <span className="gradient-text">Free Estimate</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed mb-10">
                Take the first step toward protecting your South Florida home. Our free in-home consultation includes precise measurements, expert product recommendations, and a detailed proposal — all with zero obligation.
              </p>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {trustSignals.map((signal) => (
                  <div key={signal.label} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-palm-400 font-display">{signal.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{signal.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick Call CTA */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-palm-500 to-palm-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-palm-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Prefer to call? Speak with a specialist now.</p>
                  <a href="tel:+17546004876" className="text-xl font-bold text-white hover:text-palm-300 transition-colors font-display">
                    (754) 600-4876
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-palm-500/20 to-ocean-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold font-display text-gray-900 mb-1">Request Your Free Estimate</h2>
                  <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
                </div>

                <form action="https://formsubmit.co/roy@royaleagleweb.com" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New Estimate Request from Get Estimate Page" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/thank-you/" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_autoresponse" value="Thank you for requesting a free estimate from Florida Impact Windows & Doors! We've received your project details and a specialist will contact you within 24 hours to schedule your in-home consultation. If you need immediate assistance, please call us at (754) 600-4876. We look forward to helping protect your home! — The Florida Impact Windows & Doors Team" />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="john@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Property Address *</label>
                    <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="123 Main St, Fort Lauderdale, FL 33301" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Project Type</label>
                      <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white">
                        <option value="">Select type</option>
                        <option value="windows">Impact Windows</option>
                        <option value="doors">Impact Doors</option>
                        <option value="both">Windows & Doors</option>
                        <option value="shutters">Hurricane Shutters</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="openings" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Openings</label>
                      <select id="openings" name="openings" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white">
                        <option value="">How many?</option>
                        <option value="1-5">1 - 5</option>
                        <option value="6-10">6 - 10</option>
                        <option value="11-15">11 - 15</option>
                        <option value="16-20">16 - 20</option>
                        <option value="20+">20+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Additional Details</label>
                    <textarea id="notes" name="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none" placeholder="Timeline, preferred brands, budget range, etc." />
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-[1.02]">
                    Get My Free Estimate
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy/" className="underline hover:text-gray-600">Privacy Policy</Link>.
                    We will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              From request to proposal in four easy steps. No hassle, no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-palm-300 to-palm-100" />
                  </div>
                )}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-palm-100 to-ocean-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                    <div className="relative w-full h-full bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <span className="text-palm-500">{step.icon}</span>
                      <span className="text-xs font-bold text-palm-600 mt-1 font-display">STEP {step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                What You Get
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Every Estimate Includes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our free in-home consultation is comprehensive. Here is everything you will receive — at no cost and with no obligation to purchase.
              </p>
              <div className="space-y-4">
                {included.map((item) => (
                  <div key={item.text} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-palm-50 to-palm-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium pt-2">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — service areas + guarantees */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">Service Areas</h3>
                <p className="text-gray-600 text-sm mb-6">We provide free estimates throughout the tri-county South Florida area.</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "Miami-Dade County", cities: "Miami, Coral Gables, Doral, Homestead & 28 more" },
                    { name: "Broward County", cities: "Fort Lauderdale, Hollywood, Pembroke Pines & 25 more" },
                    { name: "Palm Beach County", cities: "West Palm Beach, Boca Raton, Jupiter & 23 more" },
                  ].map((area) => (
                    <div key={area.name} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">{area.name}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{area.cities}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/areas/" className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm mt-4 hover:text-palm-700 transition-colors">
                  View All Service Areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="bg-ocean-950 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 font-display">Our Promise to You</h3>
                  <div className="space-y-3">
                    {[
                      "No high-pressure sales tactics — ever",
                      "Transparent pricing with no hidden fees",
                      "Licensed, bonded & insured (FL License #)",
                      "Written warranty on every installation",
                    ].map((promise) => (
                      <div key={promise} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-300 text-sm">{promise}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of South Florida homeowners who have upgraded to impact windows and doors. Your free estimate is just a call or click away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/#top"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Fill Out the Form Above
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
