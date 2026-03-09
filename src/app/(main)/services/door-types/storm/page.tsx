import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Storm Doors | Florida Impact Windows & Doors",
  description:
    "Heavy-duty impact storm doors for South Florida homes. Add an extra layer of hurricane protection with screen and glass options for year-round ventilation in Miami-Dade, Broward & Palm Beach.",
};

const features = [
  { name: "Impact-Rated Frame & Glass", detail: "Full aluminum or steel frame with laminated impact glass panels that meet Florida Building Code and Miami-Dade NOA requirements" },
  { name: "Retractable Screen System", detail: "Built-in retractable or interchangeable screen panels allow fresh air ventilation while keeping insects and debris out" },
  { name: "Self-Storing Glass Panels", detail: "Slide-away or swing-away glass panels let you switch between full protection and open-air ventilation in seconds" },
  { name: "Heavy-Duty Closer System", detail: "Pneumatic or hydraulic door closers with adjustable speed ensure smooth, controlled closing that resists wind gusts" },
  { name: "Corrosion-Resistant Construction", detail: "Marine-grade aluminum with anodized or powder-coated finishes stands up to South Florida salt air without pitting or discoloration" },
  { name: "Full Perimeter Weatherstripping", detail: "Compression weatherstripping around the entire frame perimeter seals against wind-driven rain, dust, and air infiltration" },
];

const benefits = [
  {
    title: "Double-Layer Protection",
    description: "A storm door adds a second barrier in front of your primary entry door, providing an additional layer of defense against hurricane winds, rain, and debris for enhanced safety.",
  },
  {
    title: "Year-Round Ventilation",
    description: "Open the glass panels and use the screen option to enjoy South Florida breezes through your front door without inviting insects, providing natural airflow on pleasant days.",
  },
  {
    title: "Entry Door Preservation",
    description: "Storm doors shield your primary entry door from direct sun exposure, rain, and salt air, dramatically extending the life and appearance of your main door investment.",
  },
  {
    title: "Additional Security",
    description: "The reinforced frame and multi-point latching of an impact storm door add another locking barrier between your home and potential intruders, enhancing everyday security.",
  },
  {
    title: "Energy Savings",
    description: "The dead air space created between a storm door and your entry door acts as thermal insulation, reducing heat transfer and helping lower your air conditioning costs.",
  },
  {
    title: "Bug-Free Fresh Air",
    description: "The integrated screen system lets you open your front door on beautiful South Florida days and enjoy cross-ventilation without mosquitoes, no-see-ums, or other insects entering.",
  },
];

const bestFor = [
  "Homes wanting extra protection in front of existing entry doors",
  "Properties in high-exposure coastal and waterfront locations",
  "Homeowners who enjoy opening their front door for fresh air",
  "Homes with decorative entry doors worth protecting from the elements",
  "Rental and investment properties needing affordable storm upgrades",
  "Older homes where replacing the main entry door is not desired",
];

const relatedDoors = [
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Garage Doors", href: "/services/door-types/garage/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
];

export default function StormDoorsPage() {
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
              Impact Storm{" "}
              <span className="gradient-text">Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Add an extra layer of hurricane protection and year-round versatility to your South Florida home. Our impact storm doors combine glass and screen options with full hurricane rating for the ultimate in front-door functionality.
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
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Storm Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Extra Protection, Everyday Versatility
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Storm doors occupy a unique and valuable position in the South Florida homeowner&apos;s protection strategy. Installed in front of your primary entry door, an impact storm door creates a second line of defense against hurricanes while also serving as a ventilation system, insect barrier, and protective shield for your main door throughout the year. For homeowners who want maximum protection at their front entrance, or who simply love the idea of opening their door to the fresh tropical air without worrying about bugs, an impact storm door from Florida Impact Windows & Doors is the perfect solution.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our impact storm doors are built with heavy-duty aluminum or steel frames and feature laminated impact glass that meets the stringent requirements of the Florida Building Code and Miami-Dade County Notice of Acceptance. The glass panels can be raised or lowered, swung aside, or retracted to reveal a built-in screen, giving you complete control over ventilation and visibility. When closed and locked, the storm door creates a sealed barrier with compression weatherstripping around the full perimeter, blocking wind-driven rain and creating an insulating air pocket between itself and your entry door.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                One of the most compelling benefits of storm doors in South Florida is their ability to extend the life of your primary entry door. South Florida&apos;s intense UV radiation, driving rain, and salt-laden air are brutal on door finishes, especially on wood and decorative entry doors. A storm door shields your main door from direct exposure to these elements, preserving its appearance and reducing maintenance requirements. If you have invested in a beautiful custom entry door, a storm door is a smart way to protect that investment for years to come.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From a practical standpoint, impact storm doors are among the most affordable hurricane protection upgrades available. They install quickly over your existing door frame, require minimal modification to your home, and provide immediate benefits in terms of security, ventilation, energy efficiency, and storm protection. Our storm doors are available in a range of styles, from full-view glass for maximum light to half-screen configurations for balanced ventilation and privacy. Marine-grade finishes in white, bronze, sandstone, and custom colors ensure a match with any South Florida home exterior. Whether you live in a bungalow in Hollywood, a townhouse in Pembroke Pines, or a canalfront home in Delray Beach, Florida Impact Windows & Doors has the right storm door to enhance your entrance.
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
              Built Tough for Year-Round Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every storm door combines hurricane-grade construction with everyday convenience features designed for the South Florida lifestyle.
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
              Why Choose Impact Storm Doors
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
                Impact storm doors are an excellent choice for homeowners who want to add hurricane protection and ventilation to their front entrance without replacing their existing entry door.
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
                  { label: "Frame Material", value: "Aluminum or Steel" },
                  { label: "Glass Type", value: "Laminated impact glass" },
                  { label: "Screen Type", value: "Retractable or interchangeable" },
                  { label: "Finish Options", value: "White, Bronze, Custom" },
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
            Impact Storm Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Quick, professional storm door installation for homeowners throughout Miami-Dade, Broward, and Palm Beach County. Enhance your entrance protection today.
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
            Add Storm Door Protection Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Enhance your entry with an impact storm door that offers hurricane protection and fresh-air ventilation. Schedule a free consultation for your South Florida home.
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
