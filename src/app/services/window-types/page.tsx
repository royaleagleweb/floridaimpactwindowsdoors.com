import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Window Types | Florida Impact Windows & Doors",
  description:
    "Explore all impact window styles available from Florida Impact Windows & Doors: single hung, double hung, casement, awning, picture, sliding, bay, bow, and hopper. Hurricane-rated options for every South Florida home.",
};

const windowTypes = [
  {
    name: "Single Hung",
    slug: "single-hung",
    description:
      "A classic and affordable impact window style where the bottom sash slides up while the top sash remains fixed. Ideal for traditional South Florida homes seeking dependable hurricane protection without sacrificing curb appeal.",
    features: ["Bottom sash operates vertically", "Fixed upper sash", "Easy to clean", "Budget-friendly"],
  },
  {
    name: "Double Hung",
    slug: "double-hung",
    description:
      "Both the upper and lower sashes slide vertically, giving you maximum ventilation control. Double hung impact windows are a popular upgrade for homeowners who want flexibility and airflow throughout the year.",
    features: ["Both sashes operable", "Tilt-in for cleaning", "Superior ventilation", "Versatile style"],
  },
  {
    name: "Casement",
    slug: "casement",
    description:
      "Hinged on the side and operated with a crank handle, casement impact windows swing outward to catch breezes and provide an unobstructed view. A top choice for modern and contemporary South Florida residences.",
    features: ["Crank-operated", "Full opening for airflow", "Tight seal when closed", "Unobstructed views"],
  },
  {
    name: "Awning",
    slug: "awning",
    description:
      "Hinged at the top and opening outward from the bottom, awning impact windows let you enjoy fresh air even during light rain. Perfect for bathrooms, kitchens, and hard-to-reach placements in South Florida homes.",
    features: ["Top-hinged design", "Rain-friendly ventilation", "Compact footprint", "Great for high placement"],
  },
  {
    name: "Picture",
    slug: "picture",
    description:
      "Fixed, non-operable impact windows designed to maximize natural light and frame stunning views. Picture windows are perfect for showcasing South Florida landscapes while providing full hurricane protection.",
    features: ["Fixed non-operable", "Maximum natural light", "Expansive views", "Superior structural strength"],
  },
  {
    name: "Sliding",
    slug: "sliding",
    description:
      "Horizontal sliding impact windows glide effortlessly on tracks, making them a smart choice for wide openings and rooms where outward-swinging windows are impractical. Extremely popular throughout South Florida.",
    features: ["Horizontal operation", "Space-saving design", "Wide opening capability", "Smooth gliding tracks"],
  },
  {
    name: "Bay",
    slug: "bay",
    description:
      "Bay impact windows project outward from the wall in a three-panel configuration, creating extra interior space and adding dramatic architectural interest to any South Florida home.",
    features: ["Three-panel projection", "Creates interior shelf space", "Panoramic views", "Architectural statement"],
  },
  {
    name: "Bow",
    slug: "bow",
    description:
      "Similar to bay windows but with four or more panels arranged in a graceful curve, bow impact windows add elegance and a sense of openness to living rooms, dining areas, and master bedrooms.",
    features: ["Four or more curved panels", "Elegant curved profile", "Expansive panoramic views", "Adds interior space"],
  },
  {
    name: "Hopper",
    slug: "hopper",
    description:
      "Hinged at the bottom and opening inward from the top, hopper impact windows are compact, secure, and excellent for basements, bathrooms, and utility rooms where space and privacy are priorities.",
    features: ["Bottom-hinged, opens inward", "Compact and secure", "Great for tight spaces", "Enhanced privacy"],
  },
];

export default function WindowTypesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-4">
            Window Types
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
            Impact Window Styles for{" "}
            <span className="gradient-text">Every Home</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            From traditional single hung windows to dramatic bay and bow configurations, Florida Impact Windows & Doors offers every impact window style to match your South Florida home&apos;s architecture and your personal taste. All styles are available with hurricane-rated impact glass.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (786) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Window Types Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Browse All Styles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              9 Impact Window Styles Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every window type below is available with Miami-Dade County approved impact glass, meeting Florida&apos;s strictest building codes for hurricane protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowTypes.map((windowType) => (
              <Link
                key={windowType.slug}
                href={`/services/window-types/${windowType.slug}/`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-palm-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 mb-5 group-hover:from-palm-100 group-hover:to-ocean-100 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                    <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
                    <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-palm-600 transition-colors font-display">
                  {windowType.name} Impact Windows
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  {windowType.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {windowType.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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

      {/* Why Choose Florida Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                Why Florida Impact Windows & Doors
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                The Right Window for Every Room
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Choosing the right impact window style depends on your home&apos;s architecture, the room&apos;s function, your ventilation needs, and your personal aesthetic preferences. Our expert consultants visit your home, assess each opening, and recommend the ideal window type for every space.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need picture windows to frame a stunning ocean view, casement windows for maximum airflow, or awning windows for rain-friendly ventilation in your bathroom, Florida Impact Windows & Doors has you covered across Miami-Dade, Broward, and Palm Beach counties.
              </p>
              <Link
                href="/get-estimate/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-600 to-palm-500 text-white px-8 py-4 rounded-full font-bold hover:from-palm-700 hover:to-palm-600 transition-all shadow-lg shadow-palm-500/25"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Window Styles", value: "9+" },
                { label: "Years Experience", value: "15+" },
                { label: "Happy Homeowners", value: "2,500+" },
                { label: "Counties Served", value: "3" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 text-center border border-palm-100">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Serving All of South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Florida Impact Windows & Doors installs every impact window type across Miami-Dade, Broward, and Palm Beach counties. From Miami Beach to Boca Raton, we bring expert service to your doorstep.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Miami-Dade County", "Broward County", "Palm Beach County"].map((area) => (
              <div key={area} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 font-display mb-2">{area}</h3>
                <p className="text-gray-600 text-sm">Full impact window installation and replacement services throughout {area}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Not Sure Which Window Type Is Right?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert consultants will visit your home, assess every opening, and recommend the perfect impact window style for each room. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
            >
              Get Free Estimate
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
