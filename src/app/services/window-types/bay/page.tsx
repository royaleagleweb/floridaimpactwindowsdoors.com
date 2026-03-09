import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Impact Windows | Florida Impact Windows & Doors",
  description:
    "Bay impact windows with three-panel projection for panoramic views and extra interior space. Hurricane-rated architectural statement pieces for South Florida homes. Free estimates.",
};

const features = [
  "Three-panel configuration projecting outward from the wall",
  "Center picture panel flanked by operable side panels",
  "Miami-Dade County NOA approved laminated impact glass",
  "Side panels available as casement, double hung, or single hung",
  "Structural seat board creates interior shelf or seating area",
  "Low-E glass and argon gas fill for energy efficiency",
  "Custom angles typically at 30 or 45 degrees",
  "Heavy-duty aluminum or vinyl frame construction",
  "Integrated head and seat board flashing for waterproofing",
  "Available with decorative grid options",
];

const benefits = [
  {
    title: "Panoramic Views",
    description:
      "The angled three-panel design captures views from multiple directions, expanding your visual connection to the outdoors far beyond what a flat window can achieve.",
  },
  {
    title: "Extra Interior Space",
    description:
      "Bay windows project outward from the wall, creating a shelf, seating nook, or display area inside your home. This added depth makes rooms feel larger and more open.",
  },
  {
    title: "Architectural Interest",
    description:
      "A bay window transforms a flat wall into a dramatic focal point, adding dimension and character to your home&apos;s exterior and creating a distinctive interior feature.",
  },
  {
    title: "Hurricane Certified",
    description:
      "Every panel in our bay impact windows is built with laminated impact glass meeting Miami-Dade County standards, providing full hurricane protection across the entire projection.",
  },
  {
    title: "Versatile Ventilation",
    description:
      "The operable side panels can be casement, single hung, or double hung style, giving you ventilation from two angles while the center picture panel maximizes your view.",
  },
  {
    title: "Natural Light",
    description:
      "The angled configuration captures light from three directions throughout the day, brightening your interior more effectively than a single flat window of the same width.",
  },
];

const bestFor = [
  "Living rooms and family rooms as a focal point",
  "Dining rooms with a view",
  "Master bedrooms for a cozy reading nook",
  "Kitchens with a garden window effect",
  "Traditional, colonial, and Victorian-style homes",
  "Any room where you want to add dimension and character",
];

export default function BayPage() {
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
              Bay{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Add dimension, views, and interior space with bay impact windows. This three-panel projection extends beyond the wall to create panoramic sightlines and a charming interior nook, all while meeting South Florida&apos;s strictest hurricane protection standards.
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
            About Bay Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            A Dramatic Focal Point with Real Function
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Bay impact windows consist of three panels arranged in a projecting configuration that extends outward from the exterior wall of your home. The center panel is typically a large fixed picture window oriented parallel to the wall, while the two flanking panels are set at angles, usually 30 or 45 degrees, and can be operable for ventilation. This arrangement creates a three-dimensional window that captures views and light from multiple angles while adding genuine interior space in the form of a shelf, seating area, or decorative nook.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In South Florida, bay impact windows serve both aesthetic and practical purposes. Architecturally, they break up the flat plane of a wall, adding visual depth and character to your home&apos;s exterior. From the inside, the projecting design makes a room feel noticeably larger and more open. The angled side panels capture light from directions that a flat window cannot reach, brightening corners and adding warmth throughout the day. For homes on waterfront lots, canal-front properties, or landscaped gardens, bay windows provide an immersive viewing experience that draws the outdoors into your living space.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every panel in a Florida Impact Windows & Doors bay impact installation features Miami-Dade County approved laminated impact glass. The structural frame system is engineered to support the projection weight while resisting the extreme wind loads encountered during hurricanes. The head board and seat board assemblies include integrated flashing and weatherproofing to prevent water infiltration at the roof and sill junctions, which are critical detailing points unique to projecting window installations. Our experienced installers understand these details and ensure every bay window is properly supported, sealed, and finished.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The operable side panels in a bay impact window can be configured as casement, single hung, or double hung style, depending on your preference for ventilation control and aesthetic. Casement side panels provide the widest opening and tightest seal, while hung-style panels offer a more traditional appearance. All configurations include multi-point locking hardware, Low-E glass options, and argon gas fill for energy efficiency. Bay impact windows are a premium upgrade that adds measurable value to your South Florida home while delivering the hurricane protection, energy savings, and noise reduction benefits of all impact window products.
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
              Precision-Built Projection Windows
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
              Why Choose Bay Impact Windows
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
                Bay impact windows make a statement in rooms where architectural character and panoramic views are desired. Consider them for these applications in your South Florida home:
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
                  { label: "Configuration", value: "3-panel projection" },
                  { label: "Projection Angles", value: "30 or 45 degrees" },
                  { label: "Side Panel Options", value: "Casement, SH, or DH" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Best Feature", value: "Adds interior space" },
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
              Bay vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bay vs. Bow</h3>
              <p className="text-gray-600 leading-relaxed">
                Both bay and bow windows project outward, but bay windows use three panels at defined angles creating a more angular profile, while bow windows use four or more panels in a gentle curve for a softer, more rounded appearance. Bay windows create a more defined interior nook; bow windows offer a wider, more graceful curve. Bay windows are generally more affordable than bow due to fewer panels and simpler framing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bay vs. Picture</h3>
              <p className="text-gray-600 leading-relaxed">
                Picture windows are flat and flush with the wall, offering the largest uninterrupted glass area. Bay windows project outward for multi-angle views and interior space but have mullions between panels. If pure glass area is the priority, choose picture. If architectural dimension and a built-in nook are the priority, choose bay.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bay vs. Sliding</h3>
              <p className="text-gray-600 leading-relaxed">
                Sliding windows are flat, space-saving, and budget-friendly. Bay windows are a premium upgrade that adds architectural dimension, extra interior space, and multi-angle views. Choose sliding for a simple, practical solution; choose bay when you want to make a statement and add real value to a feature room.
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
              { name: "Bow", slug: "bow", description: "Four or more panels in a graceful curve for a softer, wider panoramic projection." },
              { name: "Picture", slug: "picture", description: "Fixed windows for maximum glass area and unobstructed views, flush with the wall." },
              { name: "Casement", slug: "casement", description: "Crank-operated side panels commonly used in bay window configurations for ventilation." },
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
            Florida Impact Windows & Doors installs bay impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Coral Gables, Fort Lauderdale, Boca Raton, West Palm Beach, Aventura, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Add Dimension with Bay Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your room with panoramic views, extra space, and full hurricane protection. Get your free bay window consultation from Florida Impact Windows & Doors.
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
