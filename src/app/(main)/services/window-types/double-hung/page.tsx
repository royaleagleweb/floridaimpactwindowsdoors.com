import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double Hung Impact Windows | Florida Impact Windows & Doors",
  description:
    "Double hung impact windows with both sashes operable for maximum ventilation. Hurricane-rated, energy-efficient protection for South Florida homes. Free estimates from Florida Impact Windows & Doors.",
};

const features = [
  "Both upper and lower sashes slide independently",
  "Tilt-in sashes for easy interior cleaning",
  "Miami-Dade County NOA approved impact glass",
  "Multi-point locking hardware for security",
  "Low-E glass and argon gas fill options",
  "Aluminum and vinyl frame choices",
  "Half-screen or full-screen configurations",
  "Meets HVHZ Florida Building Code requirements",
  "Integrated balance system for smooth operation",
  "Custom sizing with decorative grid options",
];

const benefits = [
  {
    title: "Superior Ventilation",
    description:
      "Open the top and bottom sashes simultaneously to create a natural convection current, drawing fresh air in from the bottom while warm air escapes through the top.",
  },
  {
    title: "Easy Cleaning",
    description:
      "Tilt-in sashes let you clean the exterior glass from inside your home, eliminating the need for ladders or professional window cleaning services for upper floors.",
  },
  {
    title: "Category 5 Rated",
    description:
      "Our double hung impact windows are tested and certified for the strictest hurricane zones in Florida, withstanding winds up to 200 mph and large missile impact.",
  },
  {
    title: "Energy Performance",
    description:
      "ENERGY STAR certified options with Low-E coatings and argon gas fill reduce solar heat gain by up to 70%, keeping cooling costs low in South Florida heat.",
  },
  {
    title: "Noise Reduction",
    description:
      "The dual-pane laminated impact glass construction dampens exterior noise by up to 55%, creating a peaceful interior even in busy neighborhoods.",
  },
  {
    title: "Versatile Design",
    description:
      "Available with colonial, prairie, or custom grid patterns to complement any South Florida architectural style, from Key West cottages to Boca Raton estates.",
  },
];

const bestFor = [
  "Multi-story homes needing easy exterior cleaning",
  "Bedrooms requiring maximum cross-ventilation",
  "Living and dining rooms",
  "Colonial and traditional-style homes",
  "Historic home renovations",
  "Any room where airflow flexibility is important",
];

export default function DoubleHungPage() {
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
                Double Hung{" "}
                <span className="gradient-text">Impact Windows</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Maximum ventilation meets maximum protection. Double hung impact windows let you open both the top and bottom sashes independently, giving South Florida homeowners unmatched airflow control alongside certified hurricane resistance.
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
                  src="/images/Double Hung Impact Windows.jpg"
                  alt="Double hung impact windows installed on a South Florida home"
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
            About Double Hung Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            The Ultimate in Ventilation and Convenience
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Double hung impact windows represent a significant upgrade over single hung models by allowing both the upper and lower sashes to slide independently. This dual-operation design enables a natural ventilation technique known as stack ventilation: by opening the bottom sash to draw in cooler air while simultaneously opening the top sash to release warm air rising inside, you create a continuous airflow cycle that can reduce your reliance on air conditioning during South Florida&apos;s cooler months and pleasant evenings.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the most appreciated features of double hung impact windows is the tilt-in sash mechanism. With a simple release of the tilt latches, both the upper and lower sashes pivot inward, allowing you to clean the exterior glass from the comfort and safety of your home interior. This is especially valuable for second-story and third-story windows, where exterior cleaning would otherwise require ladders or professional window washers. In South Florida&apos;s coastal environment, where salt spray and mineral deposits can cloud glass quickly, the ability to clean your windows effortlessly is a genuine everyday benefit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From a hurricane protection standpoint, double hung impact windows are every bit as robust as any other style. The laminated impact glass meets Miami-Dade County&apos;s rigorous testing standards for both large missile impact and cyclic wind pressure. The multi-point locking system engages at multiple points along the sash rail, distributing wind load forces evenly across the frame and maintaining a watertight seal even under extreme conditions. These windows are engineered specifically for the High-Velocity Hurricane Zone and comply with all current Florida Building Code requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Double hung impact windows are available in a wide range of frame materials, colors, and finishes. Aluminum frames provide strength and slim sightlines popular in modern designs, while vinyl frames offer superior thermal performance and virtually zero maintenance. Decorative grid options including colonial, prairie, and diamond patterns allow you to match the specific architectural character of your home. With custom sizing available, double hung windows fit openings from compact bathroom windows to generous living room installations, making them one of the most versatile choices for whole-home hurricane protection in South Florida.
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
              Engineered for Florida Living
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
              Why Choose Double Hung Impact Windows
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
                Double hung impact windows excel in situations where ventilation flexibility and easy maintenance are priorities. Here are the best applications for South Florida homes:
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
                  { label: "Operation", value: "Both sashes slide vertically" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Glass Options", value: "Laminated, Low-E, Tinted" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Special Feature", value: "Tilt-in for cleaning" },
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
              Double Hung vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Double Hung vs. Single Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Single hung windows only allow the bottom sash to move, offering less ventilation flexibility and no tilt-in cleaning. Double hung windows cost slightly more but deliver significantly better airflow control and easier maintenance, making them the preferred upgrade for multi-story South Florida homes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Double Hung vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows provide a wider opening and better catch side breezes, while double hung windows offer top-and-bottom ventilation without projecting outward. Choose casement for maximum airflow in a single opening, and double hung where outward projection would be an issue, such as near walkways or patios.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Double Hung vs. Sliding</h3>
              <p className="text-gray-600 leading-relaxed">
                Sliding windows operate horizontally and work best in wide openings, while double hung windows operate vertically and suit taller, narrower openings. Double hung windows generally have a more traditional look, while sliders offer a more contemporary profile popular in newer South Florida construction.
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
              { name: "Single Hung", slug: "single-hung", description: "A budget-friendly classic with the bottom sash sliding upward and a fixed top sash." },
              { name: "Casement", slug: "casement", description: "Crank-operated windows that swing outward for full airflow and unobstructed views." },
              { name: "Awning", slug: "awning", description: "Top-hinged windows that open outward from the bottom, ideal for rain-friendly ventilation." },
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
            Florida Impact Windows & Doors installs double hung impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Fort Lauderdale, Miami, West Palm Beach, Coral Gables, Boca Raton, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Upgrade to Double Hung Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the ventilation, convenience, and hurricane protection that double hung impact windows deliver. Schedule your free in-home estimate with Florida Impact Windows & Doors today.
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
