import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Florida Impact Windows & Doors South Florida",
  description:
    "Request a free in-home estimate for impact windows and doors from Florida Impact Windows & Doors. No obligation, no pressure. Serving Miami-Dade, Broward & Palm Beach County.",
};

const steps = [
  {
    number: "1",
    title: "Fill Out the Form",
    description: "Provide your contact information and a few details about your project so we can prepare for your consultation.",
  },
  {
    number: "2",
    title: "We Schedule Your Visit",
    description: "A member of our team will call you within 24 hours to schedule a convenient time for your free in-home consultation.",
  },
  {
    number: "3",
    title: "In-Home Consultation",
    description: "Our expert visits your home, takes precise measurements, discusses your options, and answers all your questions on the spot.",
  },
  {
    number: "4",
    title: "Receive Your Proposal",
    description: "Within 48 hours you will receive a detailed written proposal with product recommendations, pricing, and financing options.",
  },
];

const included = [
  "Precise measurements of every opening",
  "Product recommendations tailored to your home and budget",
  "Detailed written proposal with itemized pricing",
  "Financing pre-qualification if desired",
  "Energy savings and insurance discount estimates",
  "Answers to all of your questions with zero pressure",
];

export default function GetEstimatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 right-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">100% Free, No Obligation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Get Your <span className="gradient-text">Free Estimate</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Take the first step toward protecting your South Florida home with impact windows and doors. Our free in-home estimate includes precise measurements, product recommendations, and a detailed written proposal with no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Getting your free estimate is simple. Here is what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-palm-300 to-palm-100 -translate-x-4" />
                )}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center mb-4 border border-palm-100">
                  <span className="text-2xl font-bold gradient-text-green font-display">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-2">Request Your Free Estimate</h2>
              <p className="text-gray-600 mb-8">Tell us about your project and we will reach out within 24 hours to schedule your consultation.</p>

              <form className="space-y-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Property Address *</label>
                  <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" placeholder="Street address, city, zip" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                    <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all bg-white">
                      <option value="">Select type</option>
                      <option value="windows">Impact Windows</option>
                      <option value="doors">Impact Doors</option>
                      <option value="both">Windows & Doors</option>
                      <option value="shutters">Hurricane Shutters</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="openings" className="block text-sm font-semibold text-gray-700 mb-2">Number of Openings</label>
                    <select id="openings" name="openings" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all bg-white">
                      <option value="">Select range</option>
                      <option value="1-5">1 - 5</option>
                      <option value="6-10">6 - 10</option>
                      <option value="11-15">11 - 15</option>
                      <option value="16-20">16 - 20</option>
                      <option value="20+">20+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget</label>
                  <select id="budget" name="budget" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all bg-white">
                    <option value="">Select range</option>
                    <option value="under10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea id="notes" name="notes" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all resize-none" placeholder="Any specific requirements, preferred brands, timeline, etc." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25">
                  Request Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 border border-palm-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">Prefer to Call?</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team to schedule your free estimate right now.</p>
                <a href="tel:+17865551234" className="inline-flex items-center gap-2 text-palm-600 font-bold text-xl hover:text-palm-700 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (786) 555-1234
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">Service Areas</h3>
                <p className="text-gray-600 text-sm mb-4">We provide free estimates throughout the tri-county South Florida area.</p>
                <div className="space-y-2">
                  {["Miami-Dade County", "Broward County", "Palm Beach County"].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      <span className="text-sm text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
