import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty Information | Product & Workmanship Warranties | Florida Impact Windows & Doors",
  description:
    "Learn about the product warranties and workmanship guarantees that protect your impact window and door investment. PGT, CGI, ES Windows, and CWS warranty details plus our labor guarantee.",
};

const manufacturerWarranties = [
  {
    brand: "PGT Windows & Doors",
    coverage: "Limited Lifetime",
    details: [
      "Covers original homeowner for as long as they own the home",
      "Includes frame, glass, hardware, and weatherstripping",
      "Glass seal failure covered against fogging and moisture",
      "Transferable to subsequent homeowner (prorated after transfer)",
      "Does not cover damage from improper installation, misuse, or acts of nature",
    ],
  },
  {
    brand: "CGI Windows & Doors",
    coverage: "Limited Lifetime",
    details: [
      "Covers the original purchaser for the useful life of the product",
      "Includes structural frame integrity and glass seal performance",
      "Hardware and operating mechanisms covered for 10 years",
      "Finish warranty covers fading and corrosion for 10 years",
      "Must be installed by an authorized dealer to maintain full warranty",
    ],
  },
  {
    brand: "ES Windows",
    coverage: "Limited Warranty",
    details: [
      "Frame and glass warranty for the original homeowner",
      "Glass seal failure (insulating glass units) covered for 10 years",
      "Hardware covered for 5 years from date of installation",
      "Frame integrity covered for 10 years against manufacturing defects",
      "Installation by authorized dealer required for warranty activation",
    ],
  },
  {
    brand: "Custom Window Systems",
    coverage: "Limited Lifetime",
    details: [
      "Frame and glass warranty for the original residential purchaser",
      "Insulating glass seal failure covered for the life of the product",
      "Hardware and rollers covered for 10 years",
      "Anodized and powder coat finishes covered for 10 years",
      "Warranty is non-transferable and applies only to original purchaser",
    ],
  },
];

const workmanshipCoverage = [
  {
    title: "Installation Labor",
    description:
      "Our workmanship warranty covers the labor and techniques used during installation. If a window leaks, fails to operate, or shows defects traceable to our installation, we return to correct the issue at no cost.",
  },
  {
    title: "Waterproofing & Flashing",
    description:
      "The sealants, flashings, and waterproofing membranes applied during installation are covered under our workmanship guarantee. We stand behind the integrity of our weatherproofing work.",
  },
  {
    title: "Structural Anchoring",
    description:
      "All anchoring and fastening of windows and doors to the building structure is covered. If an anchor point fails under normal conditions, we will repair it at our expense.",
  },
  {
    title: "Finish & Trim Work",
    description:
      "Interior and exterior trim, caulking, and finish work performed by our crews is covered. If trim separates, caulk fails, or finish work deteriorates prematurely, we make it right.",
  },
];

const coveredItems = [
  {
    category: "What Is Covered",
    items: [
      "Manufacturing defects in frames, sash, and glass",
      "Insulated glass seal failure causing fogging or moisture between panes",
      "Hardware malfunction under normal operating conditions",
      "Finish fading or corrosion beyond normal weathering (per manufacturer terms)",
      "Structural frame integrity failure under normal use",
      "Installation labor defects including water intrusion",
      "Flashing, waterproofing, and sealant failure from our installation",
      "Anchoring and fastening defects traceable to our workmanship",
      "Interior and exterior trim and caulking applied by our crews",
    ],
  },
  {
    category: "What Is Not Covered",
    items: [
      "Damage caused by hurricanes, tornadoes, or other acts of nature",
      "Physical damage from misuse, abuse, or improper maintenance",
      "Damage from building settlement, structural movement, or foundation issues",
      "Normal wear and tear including minor weathering of finishes",
      "Condensation on exterior glass surfaces (a normal occurrence with Low-E glass)",
      "Modifications or repairs performed by unauthorized parties",
      "Damage resulting from failure to perform recommended maintenance",
      "Cosmetic issues that do not affect product performance",
      "Screen damage or replacement (screens are consumable items)",
    ],
  },
];

const warrantyFaqs = [
  {
    q: "Does the manufacturer warranty transfer if I sell my home?",
    a: "It depends on the brand. PGT warranties are transferable (prorated). CGI, ES, and CWS warranties are generally non-transferable or limited after transfer. We recommend checking the specific terms for your product line.",
  },
  {
    q: "What voids the manufacturer warranty?",
    a: "Common exclusions include improper installation (which is why using an authorized dealer like Florida Impact Windows & Doors matters), physical damage from misuse or acts of nature, failure to perform routine maintenance, and modifications made by unauthorized parties.",
  },
  {
    q: "How do I file a warranty claim?",
    a: "Contact Florida Impact Windows & Doors directly at (754) 600-4876 and we will determine whether the issue falls under the manufacturer product warranty or our workmanship guarantee. We handle the entire claim process on your behalf.",
  },
  {
    q: "Is hurricane damage covered by the warranty?",
    a: "Manufacturer warranties typically exclude damage from acts of nature, including hurricanes. However, impact products are designed to prevent structural failure during storms. Cosmetic damage from flying debris during a hurricane would generally be covered by your homeowner's insurance, not the product warranty.",
  },
];

export default function WarrantiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Your Investment Protected</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Warranty <span className="gradient-text">Information</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              When you invest in impact windows and doors through Florida Impact Windows & Doors, your investment is protected by both the manufacturer&apos;s product warranty and our own workmanship guarantee. Here is everything you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Protection */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 -mt-12 relative z-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Manufacturer Product Warranty</h3>
              <p className="text-gray-600 text-sm">Covers the products themselves including frames, glass, hardware, and finishes. Provided directly by PGT, CGI, ES Windows, or CWS.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center text-ocean-600 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Florida Impact Windows & Doors Workmanship Guarantee</h3>
              <p className="text-gray-600 text-sm">Covers our installation labor, waterproofing, anchoring, and finish work. Provided directly by Florida Impact Windows & Doors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Warranties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Product Warranties</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Manufacturer Warranty Coverage by Brand
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each of our authorized brands provides their own product warranty. As an authorized dealer, Florida Impact Windows & Doors ensures your warranty is fully valid and properly registered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturerWarranties.map((warranty) => (
              <div key={warranty.brand} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-display">{warranty.brand}</h3>
                  <span className="text-sm font-bold bg-palm-100 text-palm-700 px-3 py-1 rounded-full">{warranty.coverage}</span>
                </div>
                <ul className="space-y-3">
                  {warranty.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workmanship Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-ocean-600 uppercase tracking-wider mb-3">Our Guarantee</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Florida Impact Windows & Doors Workmanship Guarantee
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond the manufacturer warranty, Florida Impact Windows & Doors stands behind our installation work with our own workmanship guarantee. If our work is not right, we make it right.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {workmanshipCoverage.map((item) => (
              <div key={item.title} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered / What's Not Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Coverage Details</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              What&apos;s Covered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clear breakdown of what is and is not covered under the combined manufacturer and Florida Impact Windows & Doors warranties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coveredItems.map((group) => (
              <div
                key={group.category}
                className={`rounded-2xl p-8 border ${
                  group.category === "What Is Covered"
                    ? "bg-white border-palm-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 font-display ${
                  group.category === "What Is Covered" ? "text-palm-700" : "text-gray-700"
                }`}>
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      {group.category === "What Is Covered" ? (
                        <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty FAQ */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Warranty FAQ</h2>
          </div>
          <div className="space-y-6">
            {warrantyFaqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2 font-display">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Invest with Confidence
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            With manufacturer warranties and our own workmanship guarantee, your impact window investment is fully protected. Schedule your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
