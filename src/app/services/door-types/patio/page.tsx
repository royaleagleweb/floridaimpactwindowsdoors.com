import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Patio Doors | Florida Impact Windows & Doors",
  description:
    "Impact patio doors designed for the South Florida lifestyle. Hurricane-rated doors that seamlessly connect indoor and outdoor living spaces in Miami-Dade, Broward & Palm Beach.",
};

const features = [
  { name: "Multi-Panel Configurations", detail: "Available in bi-fold, stacking, and pocket configurations that open entire walls to your patio, pool deck, or lanai" },
  { name: "Flush Threshold System", detail: "Low-profile or flush sill options create a seamless, ADA-compliant transition between interior floors and outdoor surfaces" },
  { name: "Impact Laminated Glass", detail: "Full-panel laminated impact glass meets Florida Building Code and Miami-Dade NOA standards for high velocity hurricane zones" },
  { name: "Integrated Screen Systems", detail: "Built-in retractable screen options let you enjoy fresh air and ventilation without insects while maintaining a clean sight line" },
  { name: "Water Management", detail: "Engineered drainage and water management systems handle the intense South Florida rain events without leaking" },
  { name: "Custom Panel Widths", detail: "Panels available in widths from 24 inches to 48 inches per panel, allowing configurations that span openings up to 24 feet" },
];

const benefits = [
  {
    title: "Seamless Indoor-Outdoor Flow",
    description: "Open your entire living area to your patio, pool, or garden with multi-panel configurations that eliminate the barrier between indoors and out, perfect for the South Florida climate.",
  },
  {
    title: "Entertaining Paradise",
    description: "Create the ultimate entertaining space by opening your patio doors wide during gatherings, allowing guests to flow between your kitchen, living room, and outdoor area effortlessly.",
  },
  {
    title: "Full Hurricane Protection",
    description: "Every patio door configuration is engineered with impact-rated glass and reinforced framing that meets Category 5 wind load requirements, keeping your home sealed during storms.",
  },
  {
    title: "Panoramic Views",
    description: "Slim frame profiles and expansive glass panels maximize your view of the South Florida landscape, whether it is a pool, garden, waterway, or the ocean beyond.",
  },
  {
    title: "Climate Control",
    description: "When closed, our patio doors form a tight thermal seal with Low-E glass that blocks solar heat gain, keeping your air conditioning from working overtime in the tropical heat.",
  },
  {
    title: "Flexible Configurations",
    description: "Choose bi-fold, stacking, pocket, or multi-slide systems to match your space, architectural style, and how you want to use the opening between your indoor and outdoor areas.",
  },
];

const bestFor = [
  "Pool and lanai access from great rooms and family rooms",
  "Outdoor kitchen and entertainment area connections",
  "Homes with covered patios and screened enclosures",
  "Waterfront properties that want to maximize views",
  "Modern open-concept South Florida home designs",
  "Properties where wide openings and flexibility are priorities",
];

const relatedDoors = [
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
];

export default function PatioDoorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Link href="/services/door-types/" className="inline-flex items-center gap-2 text-palm-300 hover:text-palm-200 transition-colors text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All Door Types
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Patio{" "}
              <span className="gradient-text">Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Built for the South Florida lifestyle, our impact patio doors open your home to the outdoors with multi-panel configurations, seamless thresholds, and full Category 5 hurricane protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:+17865551234"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (786) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Patio Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Where Indoor Comfort Meets Outdoor Paradise
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                South Florida living is defined by the relationship between indoor and outdoor space. From lazy Sunday mornings by the pool to lively evening barbecues on the patio, the way your home connects to the outdoors shapes how you experience every day. Impact patio doors from Florida Impact Windows & Doors are designed to make that connection effortless, with multi-panel systems that can open entire walls while still providing the hurricane protection that South Florida demands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our patio door systems go well beyond a standard sliding glass door. We offer bi-fold configurations where panels fold accordion-style to stack neatly to one side, multi-slide systems where panels glide and stack behind a fixed panel or into a wall pocket, and stacking slider configurations that allow you to choose exactly how much of the opening you want exposed. Each system uses impact-rated laminated glass and reinforced aluminum frames that meet Miami-Dade County and Florida Building Code requirements for the High Velocity Hurricane Zone.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The engineering behind our patio doors addresses the unique challenges of South Florida construction. Flush threshold options create a seamless, trip-free transition from your interior tile or hardwood to your outdoor pavers or deck. Advanced water management systems channel even the heaviest tropical downpours away from the interior, and corrosion-resistant hardware stands up to the salt air that is ever-present along the coast. Integrated retractable screens allow you to enjoy the breeze during those perfect South Florida evenings without inviting insects inside.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When closed, impact patio doors form a formidable barrier against hurricanes, intruders, and energy loss. Low-E glass options reflect solar radiation and reduce cooling costs, while the laminated glass construction blocks noise and nearly all UV radiation. Whether you are building a new waterfront home in Boca Raton, renovating a mid-century ranch in Fort Lauderdale, or upgrading your condo in Miami, Florida Impact Windows & Doors has patio door solutions that transform how you live in South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Features & Specifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Designed for the Florida Lifestyle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced engineering meets tropical living with features built specifically for South Florida homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.detail}</p>
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
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Choose Impact Patio Doors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all">
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
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Ideal Applications</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Best For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Impact patio doors are the ultimate choice for South Florida homeowners who want to maximize their connection to the outdoors while maintaining full storm protection and energy efficiency.
              </p>
              <ul className="space-y-4">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-10 border border-ocean-100">
              <h3 className="text-xl font-bold font-display text-gray-900 mb-6">Quick Specs</h3>
              <dl className="space-y-4">
                {[
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Configurations", value: "Bi-fold, Stacking, Pocket" },
                  { label: "Max Opening", value: "Up to 24 feet" },
                  { label: "Glass Type", value: "Laminated impact glass" },
                  { label: "Threshold", value: "Flush or low-profile" },
                  { label: "Warranty", value: "Lifetime limited" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <dt className="text-gray-500 font-medium">{spec.label}</dt>
                    <dd className="text-gray-900 font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
            Impact Patio Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Our certified team installs impact patio doors for homeowners throughout Miami-Dade, Broward, and Palm Beach County, from coastal condos to inland estates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Coral Gables", "Hollywood", "Pembroke Pines", "Aventura", "Doral", "Weston", "Jupiter", "Delray Beach"].map((city) => (
              <span key={city} className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Door Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Explore More</span>
            <h2 className="text-3xl font-bold font-display text-gray-900">Related Door Types</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedDoors.map((door) => (
              <Link
                key={door.name}
                href={door.href}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
                  <svg className="w-7 h-7 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" />
                    <rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} />
                  </svg>
                </div>
                <h3 className="font-bold font-display text-gray-900 group-hover:text-palm-600 transition-colors">{door.name}</h3>
              </Link>
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
            Open Your Home to South Florida
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your living space with impact patio doors that bring the outdoors in. Schedule a free consultation to explore configurations perfect for your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
