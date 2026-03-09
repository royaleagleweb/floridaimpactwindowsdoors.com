import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Pivot Doors | Florida Impact Windows & Doors",
  description:
    "Statement-making impact pivot doors for South Florida homes. Hurricane-rated modern pivot doors with dramatic central rotation, oversized options, and Category 5 protection.",
};

const features = [
  { name: "Central Pivot Mechanism", detail: "Precision-engineered top and bottom pivot hardware allows the door to rotate on a central axis, creating a dramatic, balanced opening motion" },
  { name: "Oversized Panels", detail: "Available in heights up to 12 feet and widths up to 5 feet, pivot doors make a bold architectural statement in grand foyers and entranceways" },
  { name: "Impact Laminated Glass", detail: "Full-panel or partial impact laminated glass options meet Florida Building Code and Miami-Dade NOA standards for hurricane protection" },
  { name: "Premium Materials", detail: "Constructed from solid wood, aluminum-clad wood, steel, or fiberglass composite, each with marine-grade finishes for coastal durability" },
  { name: "Concealed Hardware", detail: "Floor-mounted and ceiling-mounted pivot hardware is completely concealed, creating a clean, minimalist appearance with no visible hinges" },
  { name: "Weighted Balance System", detail: "Precision counterbalancing allows even the heaviest pivot doors to operate with a single finger push, despite weighing several hundred pounds" },
];

const benefits = [
  {
    title: "Dramatic First Impression",
    description: "Nothing makes a statement quite like a pivot door. The sweeping rotation on a central axis creates a sense of arrival and grandeur that traditional hinged doors simply cannot match.",
  },
  {
    title: "Modern Architecture",
    description: "Pivot doors are the preferred entrance for contemporary and modern South Florida home designs, perfectly complementing clean lines, open floor plans, and minimalist aesthetics.",
  },
  {
    title: "Oversized Openings",
    description: "Standard hinged doors are limited in size by hinge capacity, but pivot mechanisms support doors up to 12 feet tall and 5 feet wide, filling even the grandest foyer openings.",
  },
  {
    title: "Hurricane Certified",
    description: "Despite their striking modern appearance, our pivot doors are fully impact-rated and engineered to withstand Category 5 hurricane conditions per Florida Building Code.",
  },
  {
    title: "Effortless Operation",
    description: "Advanced counterbalancing means even a 500-pound pivot door swings open smoothly with minimal effort, a feat of engineering that impresses every time.",
  },
  {
    title: "Design Flexibility",
    description: "Customize your pivot door with solid panels, glass inserts, mixed materials, custom colors, and unique textures to create a one-of-a-kind entrance for your South Florida home.",
  },
];

const bestFor = [
  "Contemporary and modern South Florida home designs",
  "Grand double-height foyers and entrance halls",
  "Luxury waterfront properties seeking a signature entrance",
  "Homes where the front door is a focal architectural element",
  "Architects and designers seeking custom statement pieces",
  "New construction projects with oversized door openings",
];

const relatedDoors = [
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
];

export default function PivotDoorsPage() {
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
              Impact Pivot{" "}
              <span className="gradient-text">Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Make the ultimate architectural statement with our impact-rated pivot doors. Oversized panels that rotate on a central axis deliver jaw-dropping entrances with full Category 5 hurricane protection for South Florida homes.
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
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Pivot Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Architecture in Motion
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                A pivot door is more than an entrance. It is a statement of architectural ambition. Unlike traditional hinged doors that swing on side-mounted hinges, a pivot door rotates around a vertical axis set in from the edge of the door panel. This creates a sweeping, balanced rotation that turns the simple act of opening a door into a dramatic experience. In South Florida, where modern and contemporary architecture is flourishing from Miami to Palm Beach, impact-rated pivot doors from Florida Impact Windows & Doors are increasingly the entrance of choice for homeowners who refuse to compromise between style and storm protection.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The engineering challenge of building an impact-rated pivot door is significant. These doors can weigh 500 pounds or more, yet they must rotate effortlessly on a single top and bottom pivot point while also meeting the extreme wind load and impact testing required by the Florida Building Code and Miami-Dade County. Florida Impact Windows & Doors works with premium manufacturers who have solved this challenge through precision counterbalancing, reinforced structural frames, and impact laminated glass that can withstand large missile impacts at hurricane velocities. The result is a door that a child could push open with one finger, yet that stands firm against Category 5 winds.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Design options for our pivot doors are extraordinarily broad. Choose from solid wood panels in species like mahogany, walnut, or white oak; aluminum-clad wood for a contemporary exterior with warm interior; steel and glass combinations for an industrial-modern look; or fiberglass composite for the ultimate in weather resistance and low maintenance. Heights up to 12 feet and widths up to 5 feet are available, allowing you to fill even the most generous double-height foyer opening with a single, breathtaking door panel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every pivot door from Florida Impact Windows & Doors is a custom project, tailored to the specific dimensions, materials, and finishes that your South Florida home requires. Our team manages every step from measurement and engineering through permitting, fabrication, and installation. The concealed pivot hardware is completely hidden, leaving nothing to interrupt the clean visual lines that make these doors so compelling. Whether you are building new in Key Biscayne, remodeling in Weston, or designing your dream home in Palm Beach Gardens, a pivot door from Florida Impact Windows & Doors will be the feature your guests remember.
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
              Precision Engineering, Bold Design
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every pivot door is a masterpiece of engineering, combining massive scale with effortless operation and hurricane-grade protection.
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
              Why Choose Impact Pivot Doors
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
                Impact pivot doors are the choice for homeowners and architects who want their entrance to be the defining feature of the property. They excel in modern, luxury, and architecturally ambitious South Florida homes.
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
                  { label: "Max Height", value: "Up to 12 feet" },
                  { label: "Max Width", value: "Up to 5 feet" },
                  { label: "Materials", value: "Wood, Steel, Aluminum, FG" },
                  { label: "Hardware", value: "Concealed top/bottom pivot" },
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
            Impact Pivot Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            From modern mansions in Miami Beach to contemporary new builds in Palm Beach Gardens, our team delivers custom pivot door installations throughout South Florida.
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
            Design Your Statement Entrance
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Create a one-of-a-kind entrance for your South Florida home. Schedule a free consultation to explore custom impact pivot door options tailored to your vision.
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
