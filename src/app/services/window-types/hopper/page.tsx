import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hopper Impact Windows | Florida Impact Windows & Doors",
  description:
    "Hopper impact windows hinged at the bottom, opening inward for compact spaces. Hurricane-rated protection ideal for basements, bathrooms, and utility rooms in South Florida. Free estimates.",
};

const features = [
  "Bottom-hinged sash opens inward from the top",
  "Compact design for small and narrow openings",
  "Miami-Dade County NOA approved laminated impact glass",
  "Compression seal for airtight and watertight closure",
  "Multi-point locking hardware for security",
  "Low-E glass and argon gas fill available",
  "Aluminum and vinyl frame options",
  "No exterior projection when open",
  "Enhanced privacy with high-wall placement",
  "Custom sizing for non-standard openings",
];

const benefits = [
  {
    title: "Compact & Secure",
    description:
      "Hopper windows are designed for tight spaces where larger window types cannot fit. Their inward-opening design and compact profile make them one of the most secure window types available.",
  },
  {
    title: "No Exterior Projection",
    description:
      "Because hopper windows open inward rather than outward, they are ideal for locations where exterior clearance is limited, such as walls near property lines, walkways, or dense landscaping.",
  },
  {
    title: "Enhanced Privacy",
    description:
      "Typically placed high on walls, hopper windows provide ventilation and natural light while maintaining privacy in sensitive spaces like bathrooms, bedrooms, and below-grade rooms.",
  },
  {
    title: "Hurricane Protection",
    description:
      "Equipped with laminated impact glass meeting Miami-Dade County standards, our hopper windows deliver full hurricane protection for even the smallest and most vulnerable openings in your home.",
  },
  {
    title: "Tight Seal",
    description:
      "The compression seal mechanism creates an exceptionally tight closure when the window is locked, minimizing air infiltration and providing excellent resistance to wind-driven rain.",
  },
  {
    title: "Easy Operation",
    description:
      "A simple push at the top of the sash opens the window inward, and the built-in stay arm holds it at the desired angle. Closing and locking requires just a gentle pull and a turn of the handle.",
  },
];

const bestFor = [
  "Basements and below-grade rooms",
  "Bathrooms where privacy is essential",
  "Utility rooms, laundry rooms, and mechanical rooms",
  "Garages and workshops",
  "Narrow openings and non-standard wall spaces",
  "Locations where exterior projection is not possible",
];

export default function HopperPage() {
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
              Hopper{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Compact, secure, and built for tight spaces. Hopper impact windows hinge at the bottom and open inward from the top, delivering hurricane-rated ventilation and natural light for basements, bathrooms, utility rooms, and other compact openings in your South Florida home.
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
            About Hopper Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            The Specialist Window for Compact Spaces
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Hopper impact windows are the inverse of awning windows: they hinge at the bottom and open inward from the top. This unique operation makes them exceptionally well-suited for locations where other window types simply do not fit or function properly. In South Florida homes, hopper windows are most commonly found in basements, bathrooms, utility rooms, garages, and other compact spaces where ventilation and daylight are needed but full-size windows are not practical. Their inward-opening mechanism means they never project beyond the exterior wall, making them the right choice for tight property lines and areas adjacent to walkways or dense landscaping.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The inward-opening design of hopper windows also contributes to enhanced security. When placed high on a wall, the narrow opening angle and inward tilt make it extremely difficult for anyone to access the window from the outside. Combined with multi-point locking hardware and laminated impact glass, hopper windows provide a level of intrusion resistance that is well-suited for ground-level and below-grade installations where security concerns are heightened. For South Florida homeowners with ground-floor bathrooms, garages, or utility rooms facing alleys or common areas, the security profile of a hopper window is a meaningful advantage.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From a weatherproofing perspective, hopper impact windows use a compression seal similar to casement and awning windows. When the sash is pulled closed and the locking handle is engaged, the window presses firmly against the frame, creating an airtight and watertight barrier. The multi-point locking mechanism distributes clamping force along the entire perimeter, ensuring the seal holds even under the extreme wind pressures encountered during a hurricane. All hopper impact windows installed by Florida Impact Windows & Doors meet Miami-Dade County testing requirements for large missile impact and cyclic pressure, providing full code compliance for High-Velocity Hurricane Zones.
            </p>
            <p className="text-gray-600 leading-relaxed">
              While hopper windows are typically smaller than other window types, they are available in a range of custom sizes to accommodate non-standard openings found in many South Florida homes. Energy-efficient options including Low-E glass coatings and argon gas fill are available to maximize thermal performance even in these smaller installations. Available in aluminum and vinyl frames with multiple color options, hopper impact windows integrate cleanly into any home exterior. Their unobtrusive profile and reliable operation make them the perfect complement to a whole-home impact window system where every opening, no matter how small, deserves hurricane-rated protection.
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
              Small Window, Full Protection
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
              Why Choose Hopper Impact Windows
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
                Hopper impact windows are the go-to solution for compact openings and spaces where security, privacy, or limited exterior clearance are factors. Consider them for these areas of your South Florida home:
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
                  { label: "Operation", value: "Bottom-hinged, opens inward" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Best Feature", value: "No exterior projection" },
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
              Hopper vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Hopper vs. Awning</h3>
              <p className="text-gray-600 leading-relaxed">
                Awning windows hinge at the top and open outward, while hopper windows hinge at the bottom and open inward. Awning windows provide better rain protection while open, but hopper windows require no exterior clearance. Choose awning where rain ventilation is needed; choose hopper where exterior space is limited or inward opening is preferred.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Hopper vs. Single Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Single hung windows are larger, more versatile, and better suited for primary living spaces. Hopper windows are designed for compact openings and specialized locations where single hung windows would be too large or impractical. Both are affordable options, but they serve different roles in a whole-home window plan.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Hopper vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows are side-hinged and open outward for maximum airflow, while hopper windows are bottom-hinged and open inward with a more limited opening area. Casement windows are better for rooms needing full ventilation; hopper windows are better for small spaces, high-wall placements, and locations where exterior projection must be avoided.
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
              { name: "Awning", slug: "awning", description: "Top-hinged, opens outward for rain-friendly ventilation in bathrooms and kitchens." },
              { name: "Casement", slug: "casement", description: "Side-hinged with crank operation for full airflow and clean sightlines." },
              { name: "Single Hung", slug: "single-hung", description: "Classic bottom-sash-slides-up design for versatile, budget-friendly hurricane protection." },
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
            Florida Impact Windows & Doors installs hopper impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami, Fort Lauderdale, West Palm Beach, Hialeah, Plantation, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Complete Your Home with Hopper Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Every opening deserves hurricane protection. Get a free estimate for hopper impact windows from Florida Impact Windows & Doors and secure even the smallest spaces in your South Florida home.
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
