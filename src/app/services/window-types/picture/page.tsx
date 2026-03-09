import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Impact Windows | Florida Impact Windows & Doors",
  description:
    "Picture impact windows for maximum natural light and unobstructed views. Fixed, non-operable hurricane-rated windows ideal for South Florida living rooms and great rooms. Free estimates.",
};

const features = [
  "Fixed non-operable design for maximum structural strength",
  "Largest available glass area of any window type",
  "Miami-Dade County NOA approved laminated impact glass",
  "No moving parts for zero maintenance operation",
  "Low-E glass and argon gas fill options",
  "Available in oversized custom dimensions",
  "Aluminum and vinyl frame choices",
  "Superior air and water infiltration resistance",
  "Decorative grid and mullion options",
  "Can be combined with operable flanking windows",
];

const benefits = [
  {
    title: "Maximum Natural Light",
    description:
      "With no rails, sashes, or dividers, picture windows deliver the most uninterrupted glass area of any window type, flooding your South Florida home with natural sunlight.",
  },
  {
    title: "Unobstructed Views",
    description:
      "Frame your South Florida landscape, waterfront, garden, or pool area with a clean, edge-to-edge view that makes the outdoors feel like part of your interior space.",
  },
  {
    title: "Strongest Structure",
    description:
      "Because the glass is permanently fixed in the frame with no moving parts, picture windows are inherently the strongest window type against wind pressure and impact forces.",
  },
  {
    title: "Zero Maintenance",
    description:
      "No hardware, no tracks, no moving parts means nothing to wear out, adjust, or replace. Picture windows deliver decades of trouble-free performance in the South Florida climate.",
  },
  {
    title: "Superior Energy Performance",
    description:
      "The permanently sealed design eliminates any possibility of air infiltration, delivering the best energy efficiency rating of any window style when paired with Low-E glass.",
  },
  {
    title: "Design Flexibility",
    description:
      "Available in virtually any shape including rectangular, arched, circular, and geometric configurations, picture windows serve as architectural focal points for any home design.",
  },
];

const bestFor = [
  "Living rooms and great rooms with scenic views",
  "Waterfront homes framing ocean, canal, or Intracoastal views",
  "Stairwells and double-height foyers",
  "Combination units flanked by operable casement or awning windows",
  "Rooms where ventilation is handled by other windows or HVAC",
  "Architectural feature walls and statement designs",
];

export default function PicturePage() {
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
              Picture{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Frame your world with floor-to-ceiling natural light and uninterrupted views. Picture impact windows are fixed, non-operable windows that maximize glass area while delivering the strongest hurricane protection available for South Florida homes.
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
                href="tel:+17546004876"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (754) 600-4876
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            About Picture Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Maximum Light, Maximum Views, Maximum Protection
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Picture impact windows are the simplest and most elegant window type: a single, fixed pane of laminated impact glass set permanently into a strong frame. With no sashes, rails, tracks, or hardware to interrupt the glass area, picture windows deliver the largest possible viewing surface of any window style. In South Florida, where many homes are designed to embrace outdoor living and spectacular views, picture windows serve as living artwork that frames your ocean vista, lush tropical landscaping, or sparkling pool area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The fixed, non-operable design of picture impact windows gives them an inherent structural advantage. Without the necessary gaps and moving mechanisms required by operable windows, the glass sits firmly in the frame, creating a rigid unit that resists wind pressure and impact forces more effectively than any other window type. This makes picture windows particularly well-suited for large openings and high-exposure locations where wind loads are highest, such as upper floors and waterfront-facing walls in South Florida coastal communities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Because picture windows do not open, they are often installed as part of combination units alongside operable windows. A popular South Florida configuration pairs a large center picture window with flanking casement or awning windows, giving you both the panoramic view of the picture window and the ventilation capability of the operable units. This approach allows you to enjoy expansive sightlines in your living room or great room without sacrificing fresh air circulation, all while maintaining full hurricane protection across the entire wall opening.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From an energy standpoint, picture impact windows are the best performers in the lineup. The permanently sealed design eliminates any possibility of air leakage around sashes or tracks, and when specified with Low-E glass coatings and argon gas fill, they can reduce solar heat gain by as much as 75%. For South Florida homeowners concerned about rising energy costs, picture windows paired with a well-designed HVAC system can meaningfully lower monthly cooling bills. They also block up to 99% of UV radiation, protecting interior furnishings, flooring, and artwork from the intense Florida sun that causes rapid fading and deterioration.
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
              Engineered for Views and Strength
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
              Why Choose Picture Impact Windows
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
                Picture impact windows are the go-to choice when maximum light, views, and structural strength are the priorities. They are perfect for these applications in South Florida homes:
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
                  { label: "Operation", value: "Fixed (non-operable)" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200+ mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Best Feature", value: "Maximum glass area" },
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
              Picture vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Picture vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows open fully for ventilation, while picture windows are fixed. For rooms where you need both views and airflow, combine a center picture window with flanking casements. Picture windows alone are ideal where ventilation is handled by other windows or your HVAC system.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Picture vs. Bay/Bow</h3>
              <p className="text-gray-600 leading-relaxed">
                Bay and bow windows project outward to create extra interior space and panoramic views with depth. Picture windows sit flush with the wall for a clean, flat profile. Bay and bow windows are more dramatic architectural features, while picture windows offer simplicity and the largest uninterrupted glass surface.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Picture vs. Sliding</h3>
              <p className="text-gray-600 leading-relaxed">
                Sliding windows provide ventilation through horizontal sash movement, while picture windows offer a larger unbroken viewing area with no center rail. If your main goal is light and views, picture windows are the clear winner. If you also need ventilation from the same opening, a sliding window is the practical alternative.
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
              { name: "Bay", slug: "bay", description: "Three-panel projection that adds space and panoramic views as an architectural focal point." },
              { name: "Bow", slug: "bow", description: "Curved multi-panel window for elegant panoramic views with a graceful arched profile." },
              { name: "Casement", slug: "casement", description: "Pair with picture windows for combination units that add ventilation to your views." },
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
            Florida Impact Windows & Doors installs picture impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami Beach, Fort Lauderdale, Boca Raton, West Palm Beach, Key Biscayne, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Frame Your View with Picture Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Maximize light, views, and hurricane protection with picture impact windows. Schedule your free in-home consultation with Florida Impact Windows & Doors today.
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
