import Link from "next/link";
import type { Metadata } from "next";
import PageFaqSection from "@/components/PageFaqSection";
import { faqPageJsonLd } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "CGI Impact Windows South Florida | Sentinel Dealer-Installer",
  description:
    "Florida Impact Windows & Doors installs CGI impact windows in South Florida — Sentinel and Estate for coastal, high-rise, and oversized sliders. Dealer-installer, not the Miami factory. Free estimates. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/brands/cgi/" },
};

const cgiFaqs = [
  {
    question: "Do I need CGI if I am not on the ocean?",
    answer:
      "Not automatically. CGI earns the bid when the opening is large, tall, or needs a higher design pressure than a standard residential series is built for — a west Miramar lanai wall can qualify; a typical bedroom single-hung usually does not. Inland houses more often land on PGT or ES. We will not specify Sentinel on every window to make the proposal look premium.",
  },
  {
    question: "What is CGI Sentinel, in installer terms?",
    answer:
      "Sentinel is CGI’s widely specified aluminum impact line for demanding residential and high-rise work. Estate is the more architectural residential conversation. We only use series names that are already on this site. The NOA on the permit is the document that matters — not the brochure title.",
  },
  {
    question: "CGI vs PGT on a Hollywood Beach condo slider?",
    answer:
      "We price both. PGT WinGuard covers a large share of condo replacements when the size and DP fit. CGI is the call when the elevation, missile rating, or panel width is outside what we are comfortable stamping with a standard residential series. Salt and hardware finish matter on A1A either way. Read PGT vs CGI for the longer version.",
  },
  {
    question: "Why can a CGI lead time be longer than ES?",
    answer:
      "ES is a South Florida plant optimized for common aluminum sizes. CGI’s Miami shop is where the odd, wide, and high-DP units go. Those units take longer because they are not a stock punch list. If your openings are ordinary, you probably should not be waiting on CGI.",
  },
  {
    question: "Do you install CGI in Palm Beach as well as the HVHZ?",
    answer:
      "Yes. Broward and Miami-Dade HVHZ jobs need the NOA path. Boca Raton and other Palm Beach cities are a wind-borne debris region — FL# is often accepted. CGI publishes the approvals; we pull the local permit from our Hollywood shop and install to that sheet.",
  },
];

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
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://floridaimpactwindowsdoors.com/brands/" },
      { "@type": "ListItem", position: 3, name: "CGI Windows & Doors" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(cgiFaqs)) }} />
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
              CGI Impact Windows{" "}
              <span className="gradient-text">for Coastal and High-Load Openings</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              CGI is the Miami-made line we install when the opening is the problem — ocean fetch, high-rise design pressure, a slider other plants will not stamp. We are the Hollywood dealer-installer, not the factory. If your house is fifteen ordinary single-hungs, start on the PGT or ES pages instead of this one. MITER discontinued most CGI retail lines in late 2025; existing CGI glass still has valid approvals, and new quotes that used to specify Sentinel or Estate are re-specified to a current approved line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
              >
                Protect Your Home Now
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

      {/* Who should buy CGI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Who CGI is for</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Specify CGI when the opening — not the brand story — is hard
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Hollywood Beach sliders on A1A, east Boca glass facing the Intracoastal, a high-rise elevation that needs a DP the residential punch list does not list — those are CGI conversations. Sentinel is the aluminum impact line we already describe on this site for high-rise and coastal work. Estate is the finer residential profile. We are not going to invent a third series name to sound complete.
            </p>
            <p>
              CGI&apos;s Miami plant is why oversized and high-load units exist in our bid stack at all. Other makers hit a width or pressure wall; CGI&apos;s reputation in this market is that they keep engineering past that wall. That is also why a CGI lead time can outlast an{" "}
              <Link href="/brands/es-windows/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">ES Windows</Link>{" "}
              aluminum single-hung. If your openings are ordinary, paying CGI-wait for CGI-spec is the wrong move — use{" "}
              <Link href="/brands/pgt/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT WinGuard</Link>{" "}
              or ES and keep the calendar honest.
            </p>
            <p>
              Salt is a hardware problem as much as a glass problem. Coastal CGI jobs get the corrosion conversation (finishes, stainless, rinse habits) that a west Miramar shutter-to-glass swap does not. HVHZ still means a Miami-Dade NOA on the exact configuration. Palm Beach still often accepts an FL#. We pull whichever permit the city wants from 3000 Stirling Rd.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison — opening-difficulty angle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">CGI vs PGT vs ES</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Three brands, one question: can this opening be built?
          </h2>
          <ol className="space-y-6 text-gray-600 leading-relaxed text-lg list-decimal list-inside">
            <li>
              <strong className="text-gray-900">If another dealer said they cannot make the slider</strong> — start here. CGI is the Miami shop we use for widths, heights, and design pressures that fall off a standard residential matrix. You will wait longer than an ES punch-list window. That wait is the point.
            </li>
            <li>
              <strong className="text-gray-900">If the house is a normal HVHZ replacement</strong> — start on{" "}
              <Link href="/brands/pgt/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT</Link>.
              WinGuard exists so fifteen openings can share one factory, one color story, and paperwork Broward already knows. CGI on every bedroom is how bids get silly.
            </li>
            <li>
              <strong className="text-gray-900">If the bottleneck is money and calendar, not engineering</strong> — start on{" "}
              <Link href="/brands/es-windows/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">ES Windows</Link>.
              Local aluminum, NOA on the units we install, built to glaze the whole house. Mix an ES bedroom with a CGI lanai door when the openings disagree.
            </li>
          </ol>
          <p className="mt-8 text-gray-600">
            Longer reads:{" "}
            <Link href="/faq/pgt-vs-cgi/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs CGI</Link>
            ,{" "}
            <Link href="/faq/pgt-vs-es-windows/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs ES Windows</Link>
            , and the{" "}
            <Link href="/blog/pgt-vs-cgi-impact-windows-comparison/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs CGI blog comparison</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">CGI-related work on this site</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/get-estimate/", label: "Free CGI estimate" },
              { href: "/financing/", label: "Financing" },
              { href: "/services/door-types/sliding-glass/", label: "Impact sliding glass doors" },
              { href: "/services/door-types/patio/", label: "Impact patio doors" },
              { href: "/services/window-types/picture/", label: "Picture / fixed impact glass" },
              { href: "/services/commercial-services/", label: "Commercial impact glazing" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:border-ocean-300 hover:bg-ocean-50 transition-all font-medium text-gray-700"
              >
                {item.label}
                <span aria-hidden className="text-ocean-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection
        heading="CGI impact windows — coastal and high-load FAQs"
        faqs={cgiFaqs}
        accent="ocean"
      />

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
              Protect Your Home Now
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
