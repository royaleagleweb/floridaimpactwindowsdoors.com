import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ES Windows | Authorized Dealer | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors is an authorized ES Windows dealer in South Florida. Affordable high-quality impact windows and doors. Series 100, 200, 300 and more. Free estimates.",
};

const productLines = [
  {
    name: "ES Series 100 Single Hung",
    description:
      "An economical aluminum single hung impact window designed for cost-conscious homeowners who still demand reliable hurricane protection. Features a clean profile and dependable operation.",
  },
  {
    name: "ES Series 200 Horizontal Roller",
    description:
      "A smooth-gliding horizontal sliding impact window perfect for Florida rooms, bedrooms, and kitchens. The Series 200 offers easy operation and solid structural performance.",
  },
  {
    name: "ES Series 300 Picture Window",
    description:
      "A fixed impact picture window that maximizes your view and natural light. The Series 300 is ideal for living rooms and areas where ventilation is not required but unobstructed glass is desired.",
  },
  {
    name: "ES Casement & Awning Windows",
    description:
      "Crank-operated impact windows that provide excellent ventilation and a tight seal when closed. Ideal for bathrooms, kitchens, and hard-to-reach locations above counters or tubs.",
  },
  {
    name: "ES Sliding Glass Doors",
    description:
      "Impact-rated aluminum sliding glass doors available in two and three-panel configurations. Feature heavy-duty tandem rollers and a corrosion-resistant track system.",
  },
  {
    name: "ES Swing & Entry Doors",
    description:
      "Impact-rated aluminum swing doors for both front entry and interior-to-exterior transitions. Available with decorative glass inserts and multi-point locking hardware.",
  },
];

const features = [
  {
    title: "Value-Engineered Design",
    description:
      "ES Windows focuses on delivering the essential performance homeowners need without unnecessary upgrades, resulting in a lower price point that makes impact protection accessible to more families.",
  },
  {
    title: "Miami-Dade Approved",
    description:
      "All ES Windows impact products carry current Miami-Dade County Notices of Acceptance, satisfying the most demanding building code jurisdiction in Florida.",
  },
  {
    title: "Fast Production Times",
    description:
      "ES Windows maintains efficient production schedules that translate to shorter lead times for homeowners, often delivering custom-sized units weeks faster than larger competitors.",
  },
  {
    title: "Florida Building Code Compliant",
    description:
      "Every ES product holds Florida Product Approval, ensuring full compliance with the Florida Building Code for both new construction and replacement projects.",
  },
  {
    title: "Durable Aluminum Frames",
    description:
      "ES Windows uses quality aluminum extrusions with protective finishes that resist corrosion and fading, ensuring long-lasting performance in the South Florida climate.",
  },
  {
    title: "Straightforward Warranty",
    description:
      "ES Windows provides a clear, no-nonsense limited warranty covering manufacturing defects and glass seal failure for peace of mind after your installation.",
  },
];

const whyChoose = [
  "Exceptional value for homeowners seeking impact protection on a budget",
  "Locally manufactured in South Florida with quick turnaround times",
  "Full range of impact window and door styles in aluminum frames",
  "Miami-Dade NOA and Florida Product Approvals on all impact products",
  "Simplified product line makes selection straightforward and hassle-free",
  "Proven track record across thousands of South Florida installations",
];

export default function ESWindowsBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-32 right-20 w-72 h-72 bg-sun-400/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-sun-400 rounded-full animate-pulse" />
              <span className="text-sm text-sun-300 font-medium">Authorized ES Windows Dealer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              ES Windows{" "}
              <span className="gradient-text">Authorized Dealer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Florida Impact Windows & Doors is your authorized ES Windows dealer in South Florida. ES Windows delivers reliable impact protection at an exceptional value, making hurricane-rated windows and doors accessible for every homeowner.
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

      {/* Brand Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About ES Windows</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Quality Impact Protection at an Honest Price
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              ES Windows has carved out a strong niche in the South Florida impact window market by focusing on what matters most to homeowners: reliable hurricane protection at a price that does not break the bank. While premium manufacturers compete on luxury features and exotic finishes, ES Windows concentrates on engineering solid, code-compliant impact products that perform when it counts. The result is a brand that delivers genuine value without sacrificing the structural integrity your family depends on during hurricane season.
            </p>
            <p>
              Manufactured locally in South Florida, ES Windows benefits from proximity to its primary market. This local production translates into shorter lead times, lower shipping costs, and a manufacturer that understands the specific demands of the South Florida climate. ES Windows uses quality aluminum extrusions and laminated impact glass sourced from reputable suppliers, assembling every unit with attention to the details that matter for long-term performance in a hot, humid, salt-air environment.
            </p>
            <p>
              ES Windows products carry the Miami-Dade County NOA and Florida Product Approval certifications that are essential for any impact product installed in South Florida. When you choose ES Windows through Florida Impact Windows & Doors, you get a product that is fully code-compliant, properly tested, and backed by warranty coverage, all at a price point that makes it realistic to protect every opening in your home rather than cutting corners to stay on budget.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Product Lines</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              ES Windows Product Lineup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A focused lineup of impact windows and doors that covers every opening type your home requires.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-sun-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sun-50 to-palm-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sun-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} /><line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ES Windows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why ES Windows?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Smart Protection for Every Budget
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Not every homeowner needs the most expensive impact window on the market. ES Windows delivers the protection, code compliance, and durability you need at a price that allows you to protect your entire home.
              </p>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sun-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-sun-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-sun-50 to-palm-50 rounded-3xl p-10 border border-sun-100">
              <div className="text-center mb-8">
                <div className="text-sm font-semibold text-palm-600 uppercase tracking-wider mb-2">Best Value Impact Windows</div>
                <div className="text-5xl font-bold font-display text-gray-900 mb-2">Save 20-30%</div>
                <p className="text-gray-600">vs. premium brand alternatives</p>
              </div>
              <div className="space-y-3">
                {["Miami-Dade NOA approved", "Category 5 hurricane rated", "Full code compliance", "Manufacturer warranty included", "Professional installation by Florida Impact Windows & Doors"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-3">
                    <svg className="w-5 h-5 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-sun-400 uppercase tracking-wider mb-3">Features & Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              ES Windows: Built for Florida
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-sun-500/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Dealer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Local ES Windows Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Florida Impact Windows & Doors: Your Authorized ES Windows Dealer
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            As an authorized ES Windows dealer, Florida Impact Windows & Doors offers the complete ES product line at competitive dealer-direct pricing. We pair ES Windows&apos; value-driven products with our own expert installation, full permitting service, and attentive customer support. The result is a turnkey impact window project that protects your home and your wallet.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Our team will help you determine whether ES Windows is the right fit for your home based on your priorities, your budget, and the specific requirements of your property. We are transparent about the differences between brands and will always recommend the product that best matches your situation, because our goal is a satisfied customer, not just a sale.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sun-500 via-palm-600 to-ocean-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Get a Free ES Windows Quote
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Protect your entire home without stretching your budget. Schedule a free consultation and see how ES Windows through Florida Impact Windows & Doors makes impact protection affordable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-palm-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Schedule Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-sun-200 transition-colors"
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
