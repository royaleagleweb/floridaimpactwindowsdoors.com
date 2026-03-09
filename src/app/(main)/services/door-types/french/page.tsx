import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact French Doors | Florida Impact Windows & Doors",
  description:
    "Elegant impact French doors for South Florida homes. Hurricane-rated double-swing doors with timeless style, energy efficiency, and Category 5 protection for Miami-Dade, Broward & Palm Beach.",
};

const features = [
  { name: "Double-Swing Operation", detail: "Both door panels swing open independently or together, creating a wide, unobstructed opening for maximum airflow and access" },
  { name: "Impact Laminated Glass", detail: "Meets Miami-Dade NOA requirements with laminated impact glass that holds together under extreme wind and debris impact" },
  { name: "Decorative Grid Options", detail: "Choose from colonial, prairie, diamond, or custom grid patterns between the glass panes for a classic architectural look" },
  { name: "Multi-Point Locking", detail: "Concealed multi-point locking hardware engages at the top, bottom, and center for airtight security and weather sealing" },
  { name: "Thermal Break Frames", detail: "Insulated aluminum or fiberglass frames with thermal breaks prevent heat transfer, keeping interiors cool in South Florida heat" },
  { name: "Adjustable Hinges", detail: "Heavy-duty adjustable hinges with stainless steel pins allow for precise alignment and smooth operation over decades of use" },
];

const benefits = [
  {
    title: "Timeless Elegance",
    description: "French doors bring a refined, classic architectural element to any South Florida home, complementing Mediterranean, colonial, transitional, and contemporary styles alike.",
  },
  {
    title: "Wide Open Access",
    description: "When both panels swing open, French doors create an expansive passageway that makes entertaining, moving furniture, and everyday living more gracious and convenient.",
  },
  {
    title: "Category 5 Rated",
    description: "Behind the elegant appearance is serious hurricane engineering. Impact laminated glass and reinforced frames protect your home against winds up to 200 mph.",
  },
  {
    title: "Natural Ventilation",
    description: "Open one or both panels to invite fresh ocean breezes into your home during South Florida\u2019s beautiful winter and spring months without compromising security.",
  },
  {
    title: "Property Value Boost",
    description: "Impact French doors are one of the highest-ROI upgrades you can make, increasing both your home\u2019s appraised value and its curb appeal for potential buyers.",
  },
  {
    title: "Versatile Placement",
    description: "Install French doors as patio exits, bedroom balcony access, dining room garden entries, interior room dividers, or as a grand front entrance pair.",
  },
];

const bestFor = [
  "Mediterranean and colonial-style South Florida homes",
  "Master bedroom access to balconies and terraces",
  "Dining room and living room garden or patio entries",
  "Interior transitions between formal living spaces",
  "Homes that prioritize classic architectural elegance",
  "Properties where wide doorway clearance is desired",
];

const relatedDoors = [
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
];

export default function FrenchDoorsPage() {
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
              Impact French{" "}
              <span className="gradient-text">Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Timeless double-swing elegance meets Category 5 hurricane protection. Our impact French doors add architectural beauty and gracious living to any South Florida home while keeping your family safe.
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
                href="tel:+17546004876"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (754) 600-4876
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About French Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Classic Sophistication, Modern Protection
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                French doors have been a hallmark of refined architecture for centuries, and in South Florida they take on a special significance. The gracious double-swing design invites the warm tropical air, frames your garden views, and lends an unmistakable sense of elegance to homes from Coral Gables to Palm Beach. At Florida Impact Windows & Doors, our impact-rated French doors preserve every bit of that classic beauty while incorporating the advanced hurricane engineering that coastal living demands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each pair of French doors we install is built with laminated impact glass that meets or exceeds the Miami-Dade County Notice of Acceptance requirements. The glass is bonded to a resilient PVB interlayer that prevents shattering under flying debris, while the reinforced frame system resists the enormous pressure differentials of a Category 5 hurricane. Multi-point locking hardware secures both panels at multiple engagement points, creating a seal that is both weather-tight and intrusion-resistant.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                French doors from Florida Impact Windows & Doors are available in a wide variety of configurations to suit your South Florida home. Choose from single-panel fixed with one operating panel, double-active where both panels swing, inswing or outswing operation, and a range of decorative grid patterns including colonial, prairie, and custom designs. Frame options include thermally broken aluminum, fiberglass composite, and premium vinyl, each with marine-grade finishes designed to resist the corrosive salt air that is a reality of coastal Florida living.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond their visual impact, our French doors deliver the same performance benefits as every product in our impact lineup. Low-E glass options cut solar heat gain significantly, reducing the strain on your air conditioning system during South Florida summers. The laminated construction reduces outside noise, blocks ultraviolet radiation that fades interiors, and provides around-the-clock security. Whether you are replacing aging wooden French doors in a historic Coral Gables estate or adding new French doors to a modern waterfront build in Jupiter, Florida Impact Windows & Doors has the expertise and product range to deliver a flawless result.
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
              Engineered Elegance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every detail is designed to deliver beauty, performance, and lasting durability in the South Florida climate.
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
              Why Choose Impact French Doors
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
                Impact French doors excel in settings where classic architectural style and wide-opening functionality are priorities. They are one of the most versatile door types we install across South Florida.
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
                  { label: "Operation", value: "Inswing or Outswing" },
                  { label: "Configurations", value: "Single or Double Active" },
                  { label: "Glass Type", value: "Laminated impact glass" },
                  { label: "Frame Options", value: "Aluminum, Fiberglass, Vinyl" },
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
            Impact French Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            From historic estates in Coral Gables to modern waterfront homes in Jupiter, our certified team installs impact French doors throughout the tri-county area.
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
            Ready for Impact French Doors?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Add timeless elegance and hurricane protection to your South Florida home. Schedule your free consultation and receive a custom quote for impact French doors.
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
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
