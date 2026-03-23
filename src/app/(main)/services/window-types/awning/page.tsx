import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awning Impact Windows | Florida Impact Windows & Doors",
  description:
    "Awning impact windows hinged at the top for rain-friendly ventilation. Hurricane-rated protection ideal for bathrooms, kitchens, and high placements. Serving South Florida.",
};

const features = [
  "Top-hinged sash opens outward from the bottom",
  "Crank-operated mechanism for smooth, easy control",
  "Miami-Dade County NOA approved impact glass",
  "Allows ventilation even during light rain",
  "Compression seal for watertight closure",
  "Multi-point locking for enhanced security",
  "Low-E glass and argon gas fill options",
  "Aluminum and vinyl frame options",
  "Ideal for high wall placements above furniture",
  "Custom sizes for unique openings",
];

const benefits = [
  {
    title: "Rain-Friendly Ventilation",
    description:
      "The top-hinged design creates a natural canopy when open, deflecting rain away from the interior while still allowing fresh air to flow into your home during South Florida showers.",
  },
  {
    title: "Privacy with Airflow",
    description:
      "Awning windows can be placed high on walls to allow ventilation and natural light while maintaining privacy, making them ideal for bathrooms and bedrooms in South Florida homes.",
  },
  {
    title: "Hurricane Certified",
    description:
      "Engineered with laminated impact glass and reinforced frames, our awning windows meet Miami-Dade County standards for large missile impact and cyclic wind pressure testing.",
  },
  {
    title: "Tight Seal Performance",
    description:
      "The compression seal mechanism pulls the sash firmly against the frame when closed, providing excellent resistance to air and water infiltration during storms and everyday weather.",
  },
  {
    title: "Space Efficient",
    description:
      "Awning windows project outward rather than inward, preserving interior space and allowing you to place furniture, counters, or fixtures directly below the window.",
  },
  {
    title: "Energy Efficient",
    description:
      "Combined with Low-E coatings and argon gas fill, awning impact windows minimize solar heat gain while maintaining a tight seal that keeps conditioned air inside.",
  },
];

const bestFor = [
  "Bathrooms requiring privacy and ventilation",
  "Kitchens above countertops and sinks",
  "Basements and utility rooms",
  "High wall placements in any room",
  "Paired below picture windows for ventilation",
  "Garages, laundry rooms, and workshops",
];

export default function AwningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                Awning{" "}
                <span className="gradient-text">Impact Windows</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Keep the fresh air flowing even when it rains. Awning impact windows hinge at the top and open outward from the bottom, creating a natural rain shield while delivering hurricane-rated protection for your South Florida home.
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
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/types of windows.jpg"
                  alt="Awning impact windows on a South Florida home"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            About Awning Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Ventilation That Works Rain or Shine
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Awning impact windows are uniquely designed for climates like South Florida, where afternoon rain showers are a daily occurrence for much of the year. Hinged at the top and opening outward from the bottom via a smooth crank mechanism, the open sash forms a natural awning that deflects rain away from the interior while still allowing fresh air to circulate freely. This means you can leave your awning windows cracked open during a passing shower without worrying about water damage to your floors, furniture, or window sills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The versatility of awning impact windows makes them a popular choice for rooms where other window types fall short. In bathrooms, they can be placed high on the wall to provide ventilation and daylight while preserving privacy. In kitchens, they fit neatly above countertops and backsplashes, letting steam and cooking odors escape without requiring you to reach over obstacles. In garages and laundry rooms, they admit light and air in spaces that often lack adequate ventilation. Their compact design and outward-opening mechanism also make them ideal for placement below fixed picture windows, creating combination units that deliver both views and airflow.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Like casement windows, awning impact windows use a compression seal that pulls the sash tightly against the frame when closed. This seal type is inherently more watertight and airtight than the sliding-track seals found on hung or sliding windows, providing superior resistance to both storm-driven rain and everyday energy loss. During a hurricane, the multi-point locking hardware distributes wind load forces across the entire frame perimeter, ensuring the window remains securely closed under extreme cyclic pressure conditions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All awning impact windows installed by Florida Impact Windows & Doors feature Miami-Dade County approved laminated impact glass that meets Florida Building Code requirements for High-Velocity Hurricane Zones. Available with Low-E coatings and argon gas fill for maximum energy performance, these windows reduce solar heat gain, block UV radiation, and contribute to lower cooling bills throughout the year. Choose from aluminum or vinyl frames in multiple colors and finishes to complement any South Florida architectural style, from coastal contemporary to Mediterranean revival.
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
              Designed for Tropical Weather
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
              Why Choose Awning Impact Windows
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
                Awning impact windows excel in locations where rain-friendly ventilation, privacy, or compact sizing are needed. Consider them for these areas of your South Florida home:
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
                  { label: "Operation", value: "Top-hinged, opens outward" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Best Feature", value: "Rain-proof ventilation" },
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
              Awning vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Awning vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Both use crank mechanisms and compression seals for a tight closure. Casement windows hinge on the side for larger openings and maximum airflow, while awning windows hinge at the top, making them better for rainy conditions and high-wall placements. Awning windows are typically smaller and more compact than casements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Awning vs. Hopper</h3>
              <p className="text-gray-600 leading-relaxed">
                Hopper windows hinge at the bottom and open inward, while awning windows hinge at the top and open outward. Awning windows provide rain protection while open, but hoppers are better where exterior clearance is limited. Both work well for compact spaces like bathrooms and utility rooms.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Awning vs. Single Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Single hung windows are more affordable and offer a traditional look, but they cannot provide ventilation during rain without letting water in. Awning windows cost slightly more but deliver the unique benefit of rain-proof airflow, along with a tighter compression seal for better energy performance.
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
              { name: "Casement", slug: "casement", description: "Side-hinged with crank operation for full airflow and clean sightlines." },
              { name: "Hopper", slug: "hopper", description: "Bottom-hinged, opens inward for compact spaces where exterior clearance is limited." },
              { name: "Picture", slug: "picture", description: "Fixed windows for maximum light. Pair with awning windows below for ventilation." },
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
            Florida Impact Windows & Doors installs awning impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Hollywood, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Stay Fresh with Awning Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Enjoy rain-friendly ventilation and certified hurricane protection with awning impact windows. Get your free in-home estimate from Florida Impact Windows & Doors.
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
