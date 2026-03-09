import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Impact Windows | Florida Impact Windows & Doors",
  description:
    "Sliding impact windows with smooth horizontal operation for wide openings. Hurricane-rated, space-saving design popular throughout South Florida. Free estimates from Florida Impact Windows & Doors.",
};

const features = [
  "Horizontal sash glides smoothly on stainless steel rollers",
  "Space-saving operation with no outward projection",
  "Miami-Dade County NOA approved laminated impact glass",
  "Tandem roller system for effortless sliding",
  "Multi-point cam-action locks for security",
  "Low-E glass and argon gas fill options",
  "Aluminum and vinyl frame options",
  "Available in two-panel and three-panel configurations",
  "Removable sash for easy cleaning",
  "Integrated drainage system prevents water intrusion",
];

const benefits = [
  {
    title: "Effortless Operation",
    description:
      "Tandem roller systems ensure your sliding impact windows glide open and closed with minimal effort, even in larger sizes. No cranking, no lifting, just a smooth horizontal slide.",
  },
  {
    title: "Wide Opening Capability",
    description:
      "Sliding windows accommodate wide openings that vertical windows cannot, making them ideal for Florida rooms, sunrooms, and any space where you want to maximize your connection to the outdoors.",
  },
  {
    title: "Space Saving Design",
    description:
      "Because sliding windows operate within their own plane, they never project inward or outward. This makes them perfect for areas adjacent to walkways, patios, decks, and landscaping.",
  },
  {
    title: "Hurricane Protection",
    description:
      "Our sliding impact windows meet Miami-Dade County testing standards for large missile impact and cyclic wind pressure, providing full Category 5 hurricane protection for your home.",
  },
  {
    title: "Contemporary Style",
    description:
      "Clean horizontal lines and wide glass panels give sliding windows a contemporary profile that pairs beautifully with modern, mid-century, and transitional South Florida home designs.",
  },
  {
    title: "Easy Maintenance",
    description:
      "Removable sashes allow you to clean both sides of the glass from inside your home. The track system is easy to keep clean and free of debris for smooth, long-lasting operation.",
  },
];

const bestFor = [
  "Florida rooms, sunrooms, and lanais",
  "Wide openings that suit horizontal proportions",
  "Rooms adjacent to walkways, patios, and decks",
  "Contemporary and mid-century modern homes",
  "Bedrooms where easy operation is preferred",
  "Areas where outward-swinging windows are impractical",
];

export default function SlidingPage() {
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
              Sliding{" "}
              <span className="gradient-text">Impact Windows</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Smooth, effortless, and space-saving. Sliding impact windows glide horizontally on precision rollers, making them the most popular choice for wide openings, Florida rooms, and contemporary South Florida homes. Full hurricane protection with a modern profile.
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
            About Sliding Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            The Go-To Window for Modern South Florida Living
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Sliding impact windows, also known as gliding or horizontal sliding windows, are one of the most popular window styles installed throughout South Florida. Their horizontal operation makes them a natural fit for the wide, low-slung architecture common in the region, from mid-century modern homes in Miami to contemporary waterfront residences in Fort Lauderdale. A sliding window consists of two or more panels on a horizontal track, where one or more panels glide past the fixed panels to open. The operation is smooth, intuitive, and requires minimal physical effort.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the greatest practical advantages of sliding impact windows is their space-saving operation. Because the sash moves laterally within its own plane, there is no inward or outward projection when the window is open. This is critically important in South Florida homes where windows often face patios, walkways, pool decks, and landscaped areas. An outward-swinging casement window adjacent to a walkway can obstruct foot traffic and pose a safety hazard, but a sliding window opens fully without impacting the space on either side of the wall. For similar reasons, sliding windows are ideal for bedrooms with furniture placed near the window, since no clearance is needed for operation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sliding impact windows engineered for South Florida are built with heavy-duty aluminum or vinyl frames and fitted with laminated impact glass that meets Miami-Dade County testing protocols. The tandem roller system uses stainless steel wheels that resist corrosion from salt air, an essential feature for coastal homes in Palm Beach, Broward, and Miami-Dade counties. Multi-point cam-action locks engage at multiple positions along the sash rail, creating a secure closure that distributes wind pressure evenly across the frame during a hurricane. Integrated weep holes and drainage channels direct any water infiltration safely to the exterior, keeping your home dry even under extreme wind-driven rain conditions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sliding impact windows are available in two-panel and three-panel configurations to accommodate a wide range of opening sizes. Three-panel models feature a fixed center panel with operable end panels, providing ventilation from both sides of the opening simultaneously. With Low-E glass coatings and argon gas fill, these windows achieve excellent energy ratings, reducing solar heat gain and cutting cooling costs in the South Florida heat. They are available in a variety of frame colors and finishes to coordinate with your home&apos;s exterior palette, and optional decorative grids add a touch of traditional character to the contemporary sliding profile.
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
              Built to Glide, Built to Protect
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
              Why Choose Sliding Impact Windows
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
                Sliding impact windows are the perfect solution for wide openings and spaces where outward projection is not practical. They excel in these South Florida applications:
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
                  { label: "Operation", value: "Horizontal slide" },
                  { label: "Configurations", value: "2-panel or 3-panel" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Roller System", value: "Stainless steel tandem" },
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
              Sliding vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Sliding vs. Single Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Single hung windows slide vertically and fit well in taller, narrower openings. Sliding windows operate horizontally and are better for wide openings. Both are similarly priced and easy to operate, but sliding windows have a more contemporary feel while single hungs offer a more traditional look.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Sliding vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows provide a tighter seal and catch side breezes more effectively, but they project outward when open and require exterior clearance. Sliding windows never project beyond the wall plane, making them better for patios, decks, and walkways. Choose casement for superior ventilation, sliding for space efficiency.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Sliding vs. Double Hung</h3>
              <p className="text-gray-600 leading-relaxed">
                Double hung windows offer tilt-in sash cleaning and top-and-bottom ventilation, while sliding windows offer a wider opening and horizontal aesthetics. For traditional homes, double hung windows are the better match; for contemporary Florida architecture with wide openings, sliding windows are the natural choice.
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
              { name: "Single Hung", slug: "single-hung", description: "Classic vertical sliding operation with a fixed top sash and budget-friendly pricing." },
              { name: "Picture", slug: "picture", description: "Fixed windows for maximum glass area. Combine with sliders for views plus ventilation." },
              { name: "Double Hung", slug: "double-hung", description: "Vertical operation with both sashes operable and tilt-in cleaning convenience." },
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
            Florida Impact Windows & Doors installs sliding impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Miami, Fort Lauderdale, West Palm Beach, Doral, Pembroke Pines, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Slide Into Hurricane Protection
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Smooth operation, wide views, and Category 5 protection. Get your free estimate for sliding impact windows from Florida Impact Windows & Doors today.
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
