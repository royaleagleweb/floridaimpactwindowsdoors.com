import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casement Impact Windows | Florida Impact Windows & Doors",
  description:
    "Casement impact windows with crank-operated, outward-swinging design for maximum airflow and unobstructed views. Hurricane-rated protection for South Florida homes. Free estimates.",
};

const features = [
  "Side-hinged with smooth crank handle operation",
  "Full opening for maximum ventilation",
  "Miami-Dade County NOA approved impact glass",
  "Compression seal for airtight and watertight closure",
  "Multi-point locking engages at multiple frame points",
  "Low-E glass with argon gas fill available",
  "Aluminum and vinyl frame options",
  "Unobstructed glass area with no center rail",
  "Left-hand or right-hand hinge configurations",
  "Folding crank handle sits flush when closed",
];

const benefits = [
  {
    title: "Maximum Airflow",
    description:
      "Casement windows open fully to catch side breezes, directing 100% of the opening area to ventilation. No other operable window style provides as much airflow per square foot.",
  },
  {
    title: "Unobstructed Views",
    description:
      "With no meeting rail dividing the glass, casement impact windows provide a clean, uninterrupted view of your South Florida landscape, garden, or waterfront.",
  },
  {
    title: "Superior Seal",
    description:
      "When closed, the sash presses tightly against the frame using a compression seal. This creates one of the tightest closures of any window type, reducing air and water infiltration.",
  },
  {
    title: "Hurricane Certified",
    description:
      "Engineered and tested for the Florida High-Velocity Hurricane Zone, our casement impact windows resist winds up to 200 mph and large missile impact.",
  },
  {
    title: "Energy Savings",
    description:
      "The tight compression seal combined with Low-E glass reduces solar heat gain and minimizes air leakage, keeping your home cooler and your energy bills lower.",
  },
  {
    title: "Modern Aesthetic",
    description:
      "Clean lines and an uncluttered profile make casement windows a natural fit for contemporary, modern, and transitional South Florida home designs.",
  },
];

const bestFor = [
  "Kitchens, especially above counters and sinks",
  "Living rooms with scenic views",
  "Contemporary and modern-style homes",
  "Rooms needing maximum cross-ventilation",
  "Hard-to-reach locations (crank operation)",
  "Pairing with picture windows for combination units",
];

export default function CasementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/services/window-types/"
              className="inline-flex items-center gap-2 text-palm-400 hover:text-palm-300 transition-colors text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Window Types
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              Casement{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Crank open for full, unobstructed airflow and panoramic views. Casement impact windows swing outward to catch breezes from any direction, making them the top choice for South Florida homeowners who value fresh air and clean sightlines alongside certified hurricane protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+17865551234"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (786) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            About Casement Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Full Airflow, Full Protection, Full Views
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Casement impact windows are hinged on one side and swing outward when you turn the crank handle. Unlike sliding or hung windows that only open 50% of their area, casement windows open their entire sash, directing 100% of the opening toward incoming breezes. In South Florida, where evening ocean breezes and cross-ventilation can make a meaningful difference in comfort, this full-opening capability makes casement windows an exceptionally practical choice for bedrooms, living rooms, and kitchens.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The outward-swinging sash also acts as a scoop, catching side breezes that parallel the wall of your home and funneling them indoors. This is particularly effective in South Florida neighborhoods where homes are closely spaced and prevailing winds may not blow directly perpendicular to your window openings. By angling the sash to intercept breezes, casement windows can ventilate rooms that other window types struggle to air out, reducing your need for constant air conditioning and lowering energy costs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When closed, casement impact windows create one of the tightest seals available in any window type. The crank mechanism pulls the sash firmly against the frame using a compression seal, eliminating the gaps and rattling common in sliding-track windows during storms. Multi-point locking hardware engages at several points along the height of the sash, distributing wind pressure evenly and maintaining the watertight integrity of the window even under the extreme cyclic pressure conditions tested in Miami-Dade County hurricane certification protocols.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aesthetically, casement impact windows offer a clean, modern profile with no meeting rail to interrupt your view. The unbroken glass expanse is ideal for framing South Florida vistas, from canal views in Fort Lauderdale to garden landscapes in Coral Gables. They pair beautifully with fixed picture windows in combination units, where the picture window provides the view and the flanking casements provide the ventilation. Available in aluminum or vinyl frames with a range of finishes, casement impact windows integrate seamlessly into contemporary, transitional, and even traditional South Florida architectural styles.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Features & Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Precision Engineering for Tropical Climates
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Choose Casement Impact Windows
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                Best For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Ideal Rooms & Situations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Casement impact windows shine in locations where full airflow and unobstructed views are top priorities. Consider them for these applications in your South Florida home:
              </p>
              <ul className="space-y-4">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">Quick Specs</h3>
              <div className="space-y-4">
                {[
                  { label: "Operation", value: "Crank-operated, swings out" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Seal Type", value: "Compression seal" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-palm-200/50 pb-3">
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Casement vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Casement vs. Single Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Single hung windows are more affordable and have a traditional look, but only offer about 50% ventilation through the bottom sash. Casement windows deliver full-opening airflow and a tighter seal, making them the better choice for rooms where ventilation and energy performance are priorities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Casement vs. Awning</h3>
              <p className="text-gray-600 leading-relaxed">
                Both casement and awning windows use crank mechanisms and compression seals. Casement windows are hinged on the side for a vertical opening, while awning windows are hinged at the top for a horizontal opening. Choose casement for larger openings and maximum airflow; choose awning for rain-friendly ventilation and high-wall placements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Casement vs. Sliding</h3>
              <p className="text-gray-600 leading-relaxed">
                Sliding windows glide horizontally on tracks and never project outward, making them practical for areas next to walkways and patios. Casement windows provide better airflow and a tighter seal but require clearance outside for the swinging sash. For wide openings without exterior obstructions, casement delivers superior ventilation performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Window Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Explore More
            </span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Related Window Types
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Awning", slug: "awning", description: "Top-hinged with crank operation for rain-friendly ventilation in bathrooms and kitchens." },
              { name: "Picture", slug: "picture", description: "Fixed non-operable windows for maximum light and unobstructed views, often paired with casements." },
              { name: "Double Hung", slug: "double-hung", description: "Both sashes slide vertically for flexible ventilation with tilt-in cleaning convenience." },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/services/window-types/${type.slug}/`}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-palm-200 hover:bg-palm-50/30 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">
                  {type.name} Impact Windows
                </h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Florida Impact Windows & Doors installs casement impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Coral Gables, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Open Up to Casement Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience full airflow and unobstructed views with casement impact windows from Florida Impact Windows & Doors. Schedule your free in-home consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
            >
              Schedule Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
