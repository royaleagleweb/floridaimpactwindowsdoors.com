import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Door Types | Florida Impact Windows & Doors",
  description:
    "Explore our full range of impact-rated door types for South Florida homes. Sliding glass, French, entry, patio, pivot, garage, and storm doors built for hurricane protection.",
};

const doorTypes = [
  {
    name: "Sliding Glass Doors",
    href: "/services/door-types/sliding-glass/",
    description:
      "Wide-opening impact sliding glass doors that flood your South Florida home with natural light while providing hurricane-rated protection and effortless indoor-outdoor living.",
    features: ["Large glass panels", "Smooth gliding operation", "Indoor-outdoor living", "Maximum natural light"],
  },
  {
    name: "French Doors",
    href: "/services/door-types/french/",
    description:
      "Elegant double-swing impact French doors that add timeless sophistication to any South Florida home. Perfect for patios, balconies, and interior transitions.",
    features: ["Classic double-swing design", "Timeless elegance", "Wide entryway", "Versatile placement"],
  },
  {
    name: "Entry Doors",
    href: "/services/door-types/entry/",
    description:
      "Make a powerful first impression with impact-rated entry doors designed for South Florida. Combining curb appeal, security, and Category 5 hurricane protection.",
    features: ["Bold curb appeal", "Maximum security", "Custom designs", "Energy efficient"],
  },
  {
    name: "Patio Doors",
    href: "/services/door-types/patio/",
    description:
      "Impact patio doors built for the South Florida lifestyle. Seamlessly connect your living space with your outdoor area while maintaining full storm protection.",
    features: ["Seamless transitions", "Wide openings", "Weather sealed", "Multiple configurations"],
  },
  {
    name: "Pivot Doors",
    href: "/services/door-types/pivot/",
    description:
      "Statement-making impact pivot doors that rotate on a central axis for a dramatic, modern entrance. Ideal for contemporary South Florida homes and grand foyers.",
    features: ["Dramatic entrance", "Modern design", "Central pivot rotation", "Oversized options"],
  },
  {
    name: "Garage Doors",
    href: "/services/door-types/garage/",
    description:
      "Hurricane-rated impact garage doors that protect your vehicles and belongings. Engineered to withstand Category 5 winds while complementing your home\u2019s exterior.",
    features: ["Wind-rated protection", "Insulated panels", "Multiple styles", "Automatic operation"],
  },
  {
    name: "Storm Doors",
    href: "/services/door-types/storm/",
    description:
      "Heavy-duty impact storm doors that add an extra layer of hurricane protection to your South Florida home. Screen and glass options for year-round versatility.",
    features: ["Extra protection layer", "Ventilation options", "Screen & glass combos", "Corrosion resistant"],
  },
];

export default function DoorTypesPage() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Impact Door Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Door Types for{" "}
              <span className="gradient-text">South Florida</span>{" "}
              Homes
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              From sliding glass doors that embrace the Florida sunshine to hurricane-rated entry doors that protect your family, we offer every style of impact door to suit your home and lifestyle.
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

      {/* Door Types Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Selection</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Every Impact Door Style You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each door type is available with impact-rated glass and hardware, meeting Miami-Dade County&apos;s stringent building codes and Florida Building Code requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((door) => (
              <Link
                key={door.name}
                href={door.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center group-hover:from-ocean-100 group-hover:to-palm-100 transition-colors">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" />
                      <rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-palm-600 transition-colors">
                    {door.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    {door.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {door.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Impact Doors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Impact Doors</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Hurricane Protection Meets Everyday Performance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every impact door we install is engineered with laminated glass and reinforced frames that meet or exceed Florida Building Code and Miami-Dade County requirements. But the benefits extend far beyond hurricane season.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Impact doors reduce outside noise by up to 60%, block 99% of UV rays, improve energy efficiency, and provide 24/7 security against break-ins. Combined with beautiful aesthetics, they are the smartest upgrade for any South Florida home.
              </p>
              <ul className="space-y-4">
                {[
                  "Category 5 hurricane rated (up to 200 mph winds)",
                  "Insurance premium discounts up to 45%",
                  "Energy savings with Low-E glass options",
                  "24/7 security with laminated impact glass",
                  "Noise reduction up to 60%",
                  "UV protection blocks 99% of harmful rays",
                ].map((item) => (
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
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-12 border border-ocean-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "200 mph", label: "Wind Rating" },
                  { value: "45%", label: "Insurance Savings" },
                  { value: "99%", label: "UV Blocked" },
                  { value: "60%", label: "Noise Reduction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="text-2xl md:text-3xl font-bold font-display text-ocean-700 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Serving All of South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We install impact doors throughout Miami-Dade, Broward, and Palm Beach County. From Miami Beach to Boca Raton, our certified installers deliver expert service to every community.
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

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Find the Perfect Impact Door for Your Home
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Not sure which door type is right for you? Schedule a free consultation and our experts will help you choose the best impact doors for your South Florida home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Schedule Free Consultation
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
