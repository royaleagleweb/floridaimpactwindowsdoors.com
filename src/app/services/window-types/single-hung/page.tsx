import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Hung Impact Windows | Florida Impact Windows & Doors",
  description:
    "Single hung impact windows for South Florida homes. Hurricane-rated protection with a classic vertical-sliding design. Serving Miami-Dade, Broward & Palm Beach. Free estimates from Florida Impact Windows & Doors.",
};

const features = [
  "Miami-Dade County NOA approved impact glass",
  "Bottom sash slides vertically for ventilation",
  "Fixed upper sash for enhanced structural integrity",
  "Multi-point locking system for superior security",
  "Low-E glass options to reduce solar heat gain",
  "Argon gas-filled chambers for energy efficiency",
  "Aluminum or vinyl frame options available",
  "Meets Florida Building Code for High-Velocity Hurricane Zones",
  "Available in custom sizes and configurations",
  "Integrated weep system for water drainage",
];

const benefits = [
  {
    title: "Affordable Protection",
    description:
      "Single hung impact windows offer one of the most cost-effective paths to full hurricane protection, making them a smart choice for budget-conscious homeowners across South Florida.",
  },
  {
    title: "Low Maintenance",
    description:
      "With fewer moving parts than double hung or casement windows, single hung windows require minimal maintenance and have a longer operational lifespan in the salty coastal air.",
  },
  {
    title: "Energy Efficient",
    description:
      "The fixed upper sash creates a tighter seal, reducing air infiltration and keeping your South Florida home cooler without overworking your AC system.",
  },
  {
    title: "Hurricane Rated",
    description:
      "Every single hung impact window we install is tested and certified to withstand Category 5 hurricane winds and large missile impact per Miami-Dade protocols.",
  },
  {
    title: "Noise Reduction",
    description:
      "Laminated impact glass reduces outside noise by up to 50%, creating a quieter interior environment whether you live near a busy road or the ocean.",
  },
  {
    title: "Insurance Savings",
    description:
      "Qualifying impact windows can reduce your homeowner insurance premiums by up to 45%, often paying for themselves within a few years.",
  },
];

const bestFor = [
  "Bedrooms and guest rooms",
  "Living rooms and family rooms",
  "Home offices",
  "Hallways and stairwells",
  "Traditional and colonial-style homes",
  "Budget-conscious whole-home replacements",
];

export default function SingleHungPage() {
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
              Single Hung{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              The most popular and affordable impact window style in South Florida. Classic vertical-sliding operation with the bottom sash moving upward while the top sash stays fixed, delivering reliable hurricane protection for homes across Miami-Dade, Broward, and Palm Beach counties.
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
            About Single Hung Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            The Classic Choice for South Florida Homes
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Single hung impact windows are the most widely installed window style in South Florida for good reason. Their straightforward design features a fixed upper sash and a lower sash that slides vertically to open, providing reliable ventilation and a clean, traditional appearance that complements virtually any architectural style from Mediterranean revival to mid-century modern. Because of their simple mechanism, single hung windows offer excellent value without compromising on hurricane protection or energy performance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In the demanding South Florida climate, single hung impact windows perform exceptionally well. The fixed upper sash contributes to a stronger overall frame structure, and the single moving panel means fewer potential points of air and water infiltration. When equipped with laminated impact glass, these windows meet the stringent Miami-Dade County testing protocols for large missile impact and cyclic pressure, ensuring your home is protected even in Category 5 conditions. The laminated interlayer also blocks up to 99% of harmful UV rays, protecting your furniture, flooring, and artwork from the intense Florida sun.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For homeowners looking to replace every window in their home, single hung impact windows offer the best balance between cost and performance. They are available in both aluminum and vinyl frames, with options for custom colors, decorative grids, and specialty glass coatings like Low-E and argon gas fill. Whether you are outfitting a new construction home in Doral or upgrading a 1970s ranch in Coral Springs, single hung impact windows provide proven protection at a price point that makes whole-home installation achievable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond hurricane protection, single hung impact windows deliver meaningful everyday benefits. The laminated glass construction reduces exterior noise from traffic, construction, and neighborhood activity by up to 50%. Energy-efficient glass options can cut solar heat gain by as much as 70%, lowering your monthly cooling costs substantially in the South Florida heat. And because impact windows are always in place, there are no shutters to put up before a storm and no panels to store in your garage between hurricane seasons.
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
              Built for South Florida Conditions
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
              Why Choose Single Hung Impact Windows
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
                Single hung impact windows are extremely versatile and work well in nearly every room. They are especially suited for the following applications in South Florida homes:
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
                  { label: "Operation", value: "Bottom sash slides up" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Energy Rating", value: "ENERGY STAR Certified" },
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
              Single Hung vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Single Hung vs. Double Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Double hung windows allow both sashes to move, providing more ventilation options and easier cleaning with tilt-in sashes. Single hung windows cost less and have a slightly tighter seal since the upper sash is fixed. For budget-focused projects, single hung is the better value; for maximum ventilation and cleaning convenience, consider double hung.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Single Hung vs. Sliding</h3>
              <p className="text-gray-600 leading-relaxed">
                Sliding windows operate horizontally and are ideal for wide openings, while single hung windows operate vertically and fit better in taller, narrower openings. Sliding windows offer a more contemporary look, while single hung windows pair well with traditional architectural styles common throughout South Florida.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Single Hung vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows crank open outward for full airflow and an unobstructed view, while single hung windows slide vertically with half the opening area. Casement windows are more expensive but provide better ventilation. Single hung windows are more traditional in appearance and work better in spaces near walkways where an outward-swinging window could be an obstruction.
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
              { name: "Double Hung", slug: "double-hung", description: "Both sashes slide for maximum ventilation and tilt-in cleaning convenience." },
              { name: "Sliding", slug: "sliding", description: "Horizontal operation perfect for wide openings and contemporary homes." },
              { name: "Casement", slug: "casement", description: "Crank-operated windows that swing outward for full airflow and unobstructed views." },
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
            Florida Impact Windows & Doors installs single hung impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami, Fort Lauderdale, West Palm Beach, Coral Gables, Boca Raton, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready for Single Hung Impact Windows?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free in-home estimate for single hung impact windows. Our experts will measure, recommend, and provide a competitive quote tailored to your South Florida home.
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
