import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Window Systems (CWS) | Authorized Dealer | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors is an authorized Custom Window Systems dealer in South Florida. Innovative impact windows and doors with sleek modern designs. Free estimates.",
};

const productLines = [
  {
    name: "CWS Contour Series",
    description:
      "A modern aluminum impact window line featuring narrow frame profiles and generous glass area for maximum natural light. The Contour Series provides a clean, contemporary aesthetic ideal for modern Florida homes.",
  },
  {
    name: "CWS Pinnacle Series",
    description:
      "Premium impact windows with enhanced thermal performance through thermally broken aluminum frames. The Pinnacle Series delivers superior energy efficiency alongside hurricane protection.",
  },
  {
    name: "CWS Advantage Series",
    description:
      "An entry-level impact window line that balances affordability with solid structural performance. The Advantage Series makes impact protection attainable for budget-conscious homeowners.",
  },
  {
    name: "CWS Multi-Slide Doors",
    description:
      "Large-format sliding door systems that open up entire walls to outdoor living spaces. CWS multi-slide doors feature pocket or stacking configurations for expansive indoor-outdoor transitions.",
  },
  {
    name: "CWS Pivot & Entry Doors",
    description:
      "Statement-making impact-rated pivot and entry doors with oversized dimensions and modern hardware. Perfect for dramatic entryways in contemporary South Florida architecture.",
  },
  {
    name: "CWS Fixed & Geometric Windows",
    description:
      "Custom-shaped impact windows including circles, triangles, trapezoids, and archtop configurations. CWS excels at fabricating non-standard shapes that other manufacturers decline.",
  },
];

const features = [
  {
    title: "Modern Design Language",
    description:
      "CWS products feature clean lines, narrow sightlines, and contemporary hardware that complement modern and transitional architecture popular across South Florida.",
  },
  {
    title: "Custom Shape Specialists",
    description:
      "CWS is known for their ability to produce impact-rated windows in virtually any geometric shape, giving architects and homeowners creative freedom without sacrificing hurricane protection.",
  },
  {
    title: "Thermally Broken Frames",
    description:
      "Select CWS product lines incorporate thermally broken aluminum frame construction, significantly reducing heat transfer and improving energy efficiency in the hot Florida climate.",
  },
  {
    title: "Miami-Dade NOA Certified",
    description:
      "CWS impact products hold current Miami-Dade County Notices of Acceptance, meeting the most demanding hurricane protection standards in the nation.",
  },
  {
    title: "Architectural Finish Options",
    description:
      "CWS offers an extensive palette of anodized and powder coat finishes including matte black, bronze, champagne, and custom colors for seamless integration with your home design.",
  },
  {
    title: "Limited Lifetime Warranty",
    description:
      "CWS backs their products with a limited lifetime warranty that covers frame integrity, glass seal performance, and hardware function for the original homeowner.",
  },
];

const whyChoose = [
  "Innovative designs that push the boundaries of impact window aesthetics",
  "Extensive custom shape and size capabilities for unique architectural requirements",
  "Thermally broken frame technology for enhanced energy performance",
  "Wide range of modern finishes including matte black and custom colors",
  "Large-format door systems that other manufacturers cannot produce in impact-rated configurations",
  "Growing reputation among South Florida architects for design-forward impact products",
];

export default function CWSBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Authorized CWS Dealer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Custom Window Systems{" "}
              <span className="gradient-text">Authorized Dealer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Florida Impact Windows & Doors is your authorized Custom Window Systems dealer in South Florida. CWS delivers innovative, design-forward impact windows and doors that bring modern architectural vision to life without compromising hurricane protection.
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About CWS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Where Design Meets Hurricane Protection
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Custom Window Systems, commonly known as CWS, has established itself as one of the more innovative impact window and door manufacturers operating in the South Florida market. While the brand may not have the sheer size of some competitors, CWS has built a loyal following among architects, custom home builders, and design-conscious homeowners who demand impact products that do more than just meet code. CWS products are engineered to make a visual statement while delivering the structural performance required by the Florida Building Code and Miami-Dade County standards.
            </p>
            <p>
              What distinguishes CWS from the rest of the field is their willingness to push design boundaries. Where traditional impact window manufacturers stick to standard rectangular shapes and conventional frame profiles, CWS embraces custom geometry, ultra-narrow sightlines, and large-format door systems that blur the line between indoor and outdoor living. Their multi-slide doors, oversized pivot entries, and custom geometric fixed windows give architects tools that previously were only available in non-impact configurations, unlocking design possibilities for hurricane-zone homes that were difficult or impossible to achieve a decade ago.
            </p>
            <p>
              CWS manufactures their products in Florida and maintains the Miami-Dade NOA certifications and Florida Product Approvals that are non-negotiable for any impact product sold in South Florida. When you choose CWS through Florida Impact Windows & Doors, you are getting a manufacturer that treats design and performance as equally important priorities, paired with a local dealer that knows how to install these innovative products correctly. If your vision for your home goes beyond standard windows and doors, CWS is a brand worth exploring.
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
              CWS Product Lineup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From sleek standard windows to dramatic oversized doors and custom-shaped openings, CWS has a solution for every architectural vision.
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

      {/* Why Choose CWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why CWS?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Why Architects and Homeowners Choose CWS
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CWS appeals to homeowners and design professionals who refuse to settle for ordinary when it comes to their windows and doors. Here is what makes CWS stand out in the South Florida impact market.
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
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-10 border border-ocean-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">Custom</div>
                  <div className="text-sm text-gray-500">Shape Specialists</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">Modern</div>
                  <div className="text-sm text-gray-500">Design Focus</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">Cat 5</div>
                  <div className="text-sm text-gray-500">Hurricane Rated</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">FL Made</div>
                  <div className="text-sm text-gray-500">Local Manufacturer</div>
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
              CWS Innovation and Quality
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Local CWS Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Florida Impact Windows & Doors: Your Authorized CWS Dealer
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            As an authorized CWS dealer, Florida Impact Windows & Doors gives you direct access to the complete CWS product portfolio including their most innovative and custom-fabricated items. Our installation crews understand the precision required to install CWS products correctly, especially the large-format doors and custom geometric windows that demand exacting technique to maintain performance and warranty integrity.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            If you are working with an architect or builder on a custom home or a major renovation, our team can collaborate directly with your design professionals to specify the right CWS products, confirm structural requirements, and coordinate installation scheduling. We bring the local knowledge and hands-on expertise that turns architectural drawings into a finished home protected by some of the most design-forward impact products available.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Get a Free CWS Quote Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Bring your architectural vision to life with CWS impact windows and doors. Schedule your free consultation with Florida Impact Windows & Doors and explore what is possible when design and hurricane protection come together.
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
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors"
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
