import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGI Windows & Doors | Authorized Dealer | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors is an authorized CGI Windows & Doors dealer in South Florida. Commercial-grade impact windows and doors for homes and businesses. Sentinel, Estate, and Targa series. Free estimates.",
};

const productLines = [
  {
    name: "Sentinel by CGI",
    description:
      "A heavy-duty aluminum impact window and door series designed for high-rise condominiums and luxury coastal residences. Sentinel products deliver exceptional structural performance for large openings and high wind-load applications.",
  },
  {
    name: "Estate by CGI",
    description:
      "Premium residential impact windows and doors with refined aesthetics and architectural-grade aluminum frames. The Estate series offers slim sightlines and elegant hardware for upscale home designs.",
  },
  {
    name: "Targa by CGI",
    description:
      "Commercial-grade impact windows and doors engineered for storefronts, mid-rise buildings, and mixed-use developments. Targa products meet the demanding performance requirements of South Florida commercial construction.",
  },
  {
    name: "CGI Sliding Glass Doors",
    description:
      "Impact-rated sliding glass doors available in standard two-track and premium multi-track configurations. CGI sliders feature heavy-duty tandem rollers and corrosion-resistant stainless steel tracks.",
  },
  {
    name: "CGI French & Entry Doors",
    description:
      "Impact-rated swing doors with concealed multi-point locking systems. Available in single and double configurations with a wide range of decorative glass and panel options.",
  },
  {
    name: "CGI Storefront Systems",
    description:
      "Curtain wall and storefront glazing systems rated for impact and extreme wind pressures. Ideal for retail, hospitality, and office buildings throughout the South Florida market.",
  },
];

const features = [
  {
    title: "Commercial-Grade Engineering",
    description:
      "CGI products are engineered with the same structural rigor applied to high-rise commercial buildings, delivering exceptional strength and durability in residential applications.",
  },
  {
    title: "Large Missile Impact Rated",
    description:
      "All CGI impact products pass the large missile impact test, withstanding a nine-pound two-by-four lumber projectile traveling at 34 feet per second without penetration.",
  },
  {
    title: "Coastal Corrosion Resistance",
    description:
      "CGI uses marine-grade aluminum alloys and advanced anodizing processes that resist salt spray corrosion, making their products ideal for oceanfront and coastal properties.",
  },
  {
    title: "Oversized Opening Solutions",
    description:
      "CGI specializes in manufacturing impact products for extra-large openings that other manufacturers cannot accommodate, perfect for panoramic views and modern architectural designs.",
  },
  {
    title: "AAMA Gold Label Certified",
    description:
      "CGI products carry AAMA Gold Label certification, indicating that independent auditors have verified consistent manufacturing quality and performance testing compliance.",
  },
  {
    title: "Full System Warranty",
    description:
      "CGI provides a comprehensive limited lifetime warranty covering the frame, glass, hardware, and finish of their impact products when installed by an authorized dealer.",
  },
];

const whyChoose = [
  "Over 30 years specializing exclusively in impact-resistant products for Florida",
  "Preferred by architects and builders for demanding high-performance applications",
  "Extensive testing at independent AAMA-accredited laboratories",
  "Superior structural ratings ideal for high-rise and oceanfront installations",
  "Broad commercial and residential product portfolio under one manufacturer",
  "Dedicated South Florida service and support infrastructure",
];

export default function CGIBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-ocean-400 rounded-full animate-pulse" />
              <span className="text-sm text-ocean-300 font-medium">Authorized CGI Dealer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              CGI Windows & Doors{" "}
              <span className="gradient-text">Authorized Dealer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Florida Impact Windows & Doors is your authorized CGI dealer in South Florida. CGI brings commercial-grade engineering to residential impact windows and doors, delivering structural performance that exceeds standard hurricane protection.
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About CGI</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Commercial Strength, Residential Beauty
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              CGI Windows & Doors has been engineering impact-resistant fenestration products in South Florida for over three decades. Headquartered in Miami, CGI built its reputation by solving the toughest structural challenges in the commercial building sector before bringing that same engineering rigor to the residential market. Their dual expertise means that CGI residential products carry structural ratings that often surpass what other residential-focused manufacturers can achieve.
            </p>
            <p>
              The company operates a state-of-the-art manufacturing facility in Miami where every unit is fabricated, assembled, and quality-checked before shipping. CGI uses premium aluminum alloys sourced for coastal durability, and their proprietary finishing process provides outstanding resistance to the salt spray, intense UV exposure, and relentless humidity that define the South Florida environment. For homeowners living near the coast or in high-wind velocity zones, CGI offers a level of confidence that is hard to match.
            </p>
            <p>
              CGI is particularly well known for their ability to manufacture impact products for oversized and architecturally challenging openings. Where other manufacturers reach the limits of their engineering, CGI thrives. Floor-to-ceiling glass walls, extra-wide sliding door systems, and custom geometric shapes are all within CGI&apos;s wheelhouse. If your South Florida home demands large glass expanses with uncompromising hurricane protection, CGI is the brand to consider, and Florida Impact Windows & Doors is the dealer to call.
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
              CGI Product Lineup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From luxury residential series to heavy-duty commercial systems, CGI has the engineered solution for every application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-ocean-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} /><line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CGI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-10 border border-ocean-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display text-ocean-700 mb-1">30+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display text-ocean-700 mb-1">Miami</div>
                  <div className="text-sm text-gray-500">Manufactured</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display text-ocean-700 mb-1">AAMA</div>
                  <div className="text-sm text-gray-500">Gold Certified</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display text-ocean-700 mb-1">Cat 5</div>
                  <div className="text-sm text-gray-500">Hurricane Rated</div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why CGI?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Why Choose CGI for Your Home
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CGI brings a level of structural engineering to residential windows and doors that most manufacturers reserve for commercial buildings. Here is why discerning South Florida homeowners choose CGI.
              </p>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
              CGI Engineering Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-ocean-500/30 transition-all"
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Local CGI Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Florida Impact Windows & Doors: Your Authorized CGI Dealer
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            As an authorized CGI dealer, Florida Impact Windows & Doors provides access to the complete CGI product portfolio at competitive dealer pricing. Our installation teams are factory-trained in CGI installation techniques and we maintain the certifications needed to preserve your full CGI warranty coverage. From initial measurement to final inspection, we ensure every CGI product is installed to the exacting standards that CGI and the Florida Building Code require.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you are building a new oceanfront residence, renovating a high-rise condo unit, or upgrading the windows in your family home, Florida Impact Windows & Doors pairs CGI&apos;s commercial-grade products with the attentive local service you deserve. We handle permitting, HOA coordination, and scheduling so that your CGI project goes smoothly from start to finish.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-700 via-ocean-800 to-palm-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Get a Free CGI Quote Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Discover why CGI is the preferred choice for architects and builders across South Florida. Schedule your free in-home consultation and let our experts recommend the right CGI products for your project.
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
