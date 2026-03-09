import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Entry Doors | Florida Impact Windows & Doors",
  description:
    "Premium impact entry doors for South Florida homes. Hurricane-rated front doors with stunning curb appeal, maximum security, and energy efficiency for Miami-Dade, Broward & Palm Beach.",
};

const features = [
  { name: "Impact-Rated Construction", detail: "Solid core or reinforced fiberglass construction with impact glass inserts, tested for large missile impact and Category 5 wind loads" },
  { name: "Decorative Glass Inserts", detail: "Choose from dozens of decorative, frosted, textured, and clear impact glass options to customize your entrance design" },
  { name: "Multi-Point Deadbolt System", detail: "Commercial-grade multi-point locking with deadbolt engages at three or more points for maximum forced-entry resistance" },
  { name: "Weather Stripping", detail: "Triple-layer compression weather stripping seals against wind-driven rain, dust, and air infiltration for a tight building envelope" },
  { name: "Custom Sizing", detail: "Available in standard and oversized dimensions including 8-foot tall configurations for grand foyer entrances" },
  { name: "Sidelite & Transom Options", detail: "Pair your entry door with matching impact sidelites and transoms to create an expansive, light-filled entryway" },
];

const benefits = [
  {
    title: "Commanding Curb Appeal",
    description: "Your front door is the first thing visitors see. An impact entry door from Florida Impact Windows & Doors makes a powerful statement with custom designs, finishes, and glass inserts that elevate your entire facade.",
  },
  {
    title: "Maximum Security",
    description: "Impact entry doors combine reinforced construction, multi-point deadbolts, and laminated glass to create the most secure entry point possible for your South Florida home.",
  },
  {
    title: "Hurricane Engineered",
    description: "Tested and certified to meet the strictest Florida Building Code and Miami-Dade County requirements, our entry doors withstand Category 5 winds and large missile impacts.",
  },
  {
    title: "Energy Performance",
    description: "Insulated cores and Low-E glass inserts dramatically reduce heat transfer, helping maintain comfortable indoor temperatures and lowering your cooling costs in the Florida heat.",
  },
  {
    title: "Insurance Savings",
    description: "Upgrading to an impact-rated entry door contributes to whole-home hurricane protection that can qualify you for significant homeowner insurance premium reductions.",
  },
  {
    title: "Lasting Durability",
    description: "Built with marine-grade finishes and corrosion-resistant hardware, our entry doors maintain their beauty and performance through years of South Florida sun, rain, and salt air.",
  },
];

const bestFor = [
  "Main front entrances of single-family homes",
  "Grand foyers with oversized door openings",
  "Homes seeking maximum curb appeal and first impressions",
  "Properties requiring the highest level of forced-entry security",
  "Entryways with sidelite and transom window combinations",
  "Homeowners replacing aging wood or non-impact front doors",
];

const relatedDoors = [
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
  { name: "Storm Doors", href: "/services/door-types/storm/" },
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
];

export default function EntryDoorsPage() {
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
              Impact Entry{" "}
              <span className="gradient-text">Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Make a powerful first impression while protecting your family. Our impact-rated entry doors combine striking design, unbreakable security, and Category 5 hurricane protection for South Florida homes.
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
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Entry Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Your Home&apos;s First Impression, Fortified
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Your entry door is the centerpiece of your home&apos;s facade. It sets the tone for everything inside and serves as the primary barrier between your family and the elements. In South Florida, where hurricane season brings the threat of Category 5 winds every year, your front door must be more than beautiful. It must be engineered to protect. Florida Impact Windows & Doors delivers impact entry doors that accomplish both, combining head-turning design with the serious structural performance required by Florida Building Code.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our impact entry doors are constructed with reinforced fiberglass or solid-core steel, fitted with laminated impact glass inserts that meet Miami-Dade County Notice of Acceptance standards. Every door is tested to resist large missile impact at the speeds specified for the High Velocity Hurricane Zone, ensuring that your home remains sealed against wind and debris when it matters most. The multi-point locking systems we install engage at three or more points in the frame, making these doors among the most forced-entry resistant products on the market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Design possibilities with our entry doors are virtually limitless. Choose from sleek modern slabs with full-lite impact glass to traditional raised-panel designs with ornate decorative inserts. We offer dozens of glass options including frosted, textured, reed, rain, and custom art glass, all in impact-rated laminated construction. Standard and oversized heights are available, with eight-foot doors creating the kind of grand entrance that luxury South Florida homes demand. Add matching impact sidelites and transoms to frame your entryway in light and style.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The practical performance of our entry doors matches their visual impact. Insulated cores deliver excellent thermal efficiency, reducing the heat that penetrates your foyer during sweltering South Florida summers. Triple-layer compression weather stripping blocks wind-driven rain and prevents air infiltration, contributing to a tighter building envelope and lower energy bills. Marine-grade hardware and finishes resist the corrosion caused by salt-laden coastal air, ensuring your door looks and operates like new for years. Backed by a lifetime limited warranty and installed by our certified team, an impact entry door from Florida Impact Windows & Doors is the upgrade your South Florida home deserves.
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
              Security Meets Sophistication
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every entry door is built to exceed Florida Building Code while delivering the curb appeal your home deserves.
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
              Why Choose Impact Entry Doors
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
                Impact entry doors are essential for every South Florida home. They are the focal point of your exterior design and the most important security barrier for your household.
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
                  { label: "Core Material", value: "Fiberglass or Steel" },
                  { label: "Heights Available", value: "6'8\" to 8'0\"" },
                  { label: "Glass Type", value: "Laminated impact glass" },
                  { label: "Lock System", value: "Multi-point deadbolt" },
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
            Impact Entry Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Our certified installers bring expert entry door service to homeowners throughout Miami-Dade, Broward, and Palm Beach County.
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
            Upgrade Your Front Door Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Give your South Florida home the entrance it deserves. Schedule a free consultation for a custom impact entry door that combines beauty, security, and hurricane protection.
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
