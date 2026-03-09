import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PGT Windows & Doors | Authorized Dealer | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors is a PGT authorized dealer in South Florida. Premium PGT impact windows and doors with professional installation. WinGuard, EnergyVue, ClassicVue and more. Free estimates.",
};

const productLines = [
  {
    name: "WinGuard Impact-Resistant",
    description:
      "PGT's flagship impact line featuring laminated glass that meets the strictest building codes in Florida. Available in aluminum and vinyl frames with a full range of window and door styles.",
  },
  {
    name: "EnergyVue Impact-Resistant",
    description:
      "Vinyl impact windows engineered for maximum energy efficiency. Features insulating glass units with Low-E coatings and argon gas fill for outstanding thermal performance.",
  },
  {
    name: "ClassicVue Max",
    description:
      "An affordable aluminum impact window line offering dependable hurricane protection with a slim profile design that maximizes your glass area and natural light.",
  },
  {
    name: "PGT Eze-Breeze",
    description:
      "Vertical four-track sliding panels ideal for enclosing porches and lanais. Allows fresh air circulation while providing protection from wind, rain, and insects.",
  },
  {
    name: "WinGuard Sliding Glass Doors",
    description:
      "Impact-rated sliding glass doors available in two-panel, three-panel, and four-panel configurations with smooth-gliding rollers and multi-point locking systems.",
  },
  {
    name: "PGT Aluminum Swing Doors",
    description:
      "Impact-rated entry and French doors with heavy-duty aluminum frames, decorative glass options, and concealed multi-point locking hardware for security and style.",
  },
];

const features = [
  {
    title: "Miami-Dade NOA Approved",
    description:
      "PGT products carry Miami-Dade County Notice of Acceptance, meeting the most stringent building code requirements in the United States for hurricane impact resistance.",
  },
  {
    title: "Florida Product Approval",
    description:
      "Every PGT product line holds current Florida Product Approvals, ensuring code compliance across all Florida building jurisdictions from the Keys to the Panhandle.",
  },
  {
    title: "ENERGY STAR Certified",
    description:
      "Select PGT product lines carry the ENERGY STAR certification, qualifying for utility rebates and delivering measurable energy cost savings in hot South Florida climates.",
  },
  {
    title: "Industry-Leading Warranties",
    description:
      "PGT backs their products with limited lifetime warranties covering manufacturing defects, glass seal failure, and hardware malfunction for as long as you own your home.",
  },
  {
    title: "Made in Florida",
    description:
      "PGT manufactures all of their products right here in Florida at their Venice headquarters, meaning shorter lead times and products engineered specifically for Florida conditions.",
  },
  {
    title: "Custom Sizing Available",
    description:
      "Every PGT window and door is manufactured to your exact measurements. No stock sizes, no shimming, no compromises on fit or performance for your South Florida home.",
  },
];

const whyChoose = [
  "Largest impact window and door manufacturer in the southeastern United States",
  "Over 40 years of experience engineering products for Florida hurricanes",
  "Complete product line spanning aluminum, vinyl, single hung, sliding, casement, and more",
  "Extensive color and finish options including bronze, white, and custom powder coats",
  "Superior laminated glass technology with PVB and SGP interlayer options",
  "Consistent lead times backed by a 1.2-million-square-foot manufacturing facility",
];

export default function PGTBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Authorized PGT Dealer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              PGT Windows & Doors{" "}
              <span className="gradient-text">Authorized Dealer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Florida Impact Windows & Doors is proud to be an authorized PGT dealer serving South Florida. As the largest impact window manufacturer in the Southeast, PGT delivers unmatched quality, selection, and hurricane protection for your home.
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

      {/* Brand Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About PGT</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Florida&apos;s Most Trusted Impact Window Manufacturer
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              PGT Innovations, headquartered in Venice, Florida, has been manufacturing impact-resistant windows and doors for more than four decades. Founded in 1980, PGT grew from a small regional fabricator into the largest producer of impact-resistant openings in the southeastern United States. Their expansive 1.2-million-square-foot manufacturing campus turns out thousands of custom-sized units every week, serving homeowners, builders, and commercial developers throughout Florida and the Gulf Coast states.
            </p>
            <p>
              What sets PGT apart from competitors is the breadth and depth of their product catalog. Whether you need an affordable aluminum single hung window, a high-performance vinyl casement with triple-pane insulating glass, or an oversized multi-slide door system, PGT offers a solution engineered specifically for the demands of the Florida climate. Every product undergoes rigorous testing at their in-house test lab, which simulates hurricane-force wind pressures, large and small missile impacts, and forced-entry attempts before any unit leaves the factory floor.
            </p>
            <p>
              PGT holds Miami-Dade County Notices of Acceptance and Florida Product Approvals across their entire lineup, giving South Florida homeowners confidence that their windows and doors will perform when the next major storm arrives. Beyond hurricane protection, PGT products deliver tangible everyday benefits including significant reductions in energy consumption, outside noise, and harmful UV radiation that damages interior furnishings. When you choose PGT through Florida Impact Windows & Doors, you get the full backing of Florida&apos;s premier manufacturer combined with our expert local installation.
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
              PGT Product Lineup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From entry-level impact protection to premium high-performance systems, PGT offers a product for every budget and architectural style.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-palm-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} /><line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PGT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why PGT?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Why Homeowners Choose PGT
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                PGT has earned its reputation as Florida&apos;s go-to impact window brand through decades of consistent quality, innovation, and service. Here are the reasons South Florida homeowners trust PGT for their hurricane protection.
              </p>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">40+</div>
                  <div className="text-sm text-gray-500">Years in Business</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">1.2M</div>
                  <div className="text-sm text-gray-500">Sq Ft Factory</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">Cat 5</div>
                  <div className="text-sm text-gray-500">Hurricane Rated</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">Lifetime</div>
                  <div className="text-sm text-gray-500">Ltd Warranty</div>
                </div>
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
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Features & Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              PGT Quality You Can Count On
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all"
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Local PGT Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Florida Impact Windows & Doors: Your Authorized PGT Dealer in South Florida
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            As an authorized PGT dealer, Florida Impact Windows & Doors has direct access to the full PGT product catalog at dealer-direct pricing. Our installation crews are factory-trained on PGT specifications, and we carry the certifications required to maintain your PGT warranty in full effect. When you buy PGT through Florida Impact Windows & Doors, you get manufacturer-backed quality combined with local expertise, personalized service, and competitive pricing that big-box retailers simply cannot match.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            We handle every step of your PGT project from initial consultation and measurement through permitting, installation, and final inspection. Our team knows the South Florida building code inside and out, and we ensure every PGT product is installed to factory specifications so your warranty remains intact for the life of your home.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Get a Free PGT Quote Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a free in-home consultation and discover why PGT is the top choice for impact windows and doors in South Florida. Our experts will help you find the perfect PGT products for your home and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Schedule Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors"
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
