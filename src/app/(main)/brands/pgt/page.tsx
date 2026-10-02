import Link from "next/link";
import type { Metadata } from "next";
import PageFaqSection from "@/components/PageFaqSection";
import { faqPageJsonLd } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "PGT Impact Windows South Florida | Authorized Dealer-Installer",
  description:
    "Florida Impact Windows & Doors installs PGT impact windows in South Florida — WinGuard dealer-installer, not the manufacturer. Permits pulled, Hollywood shop. Free estimates. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/brands/pgt/" },
};

const pgtFaqs = [
  {
    question: "Are you the PGT factory, or a South Florida installer?",
    answer:
      "We are a dealer-installer. PGT manufactures in Venice, Florida. Florida Impact Windows & Doors measures, permits, and installs PGT impact windows and doors from our Hollywood shop at 3000 Stirling Rd. Factory warranties stay valid when the unit is installed to PGT specifications.",
  },
  {
    question: "Who should choose PGT WinGuard instead of ES Windows or CGI?",
    answer:
      "Choose PGT when you want one Florida catalog that covers a typical house — vinyl and aluminum, single-hungs, rollers, and sliding glass doors — with consistent Broward and Miami-Dade NOA paperwork. Pick ES Windows when covering every opening on a tighter budget or a shorter local production story matters more. Pick CGI when an oceanfront opening, high-rise elevation, or oversized slider needs a heavier coastal assembly than a standard WinGuard residential size.",
  },
  {
    question: "Is PGT approved for HVHZ homes in Broward and Miami-Dade?",
    answer:
      "PGT impact lines, including WinGuard, carry Miami-Dade Notices of Acceptance and Florida Product Approvals. Approval is by model and glass package, not by the logo on the truck. We put the exact NOA on the permit so the inspector sees the same unit we set in the wall.",
  },
  {
    question: "How long do PGT impact windows take to arrive?",
    answer:
      "PGT runs a large Venice campus, so common WinGuard sizes are a predictable production path compared with one-off coastal custom work. Lead time still depends on color, configuration, and season — we give a written production window on the estimate, not a verbal “about a month.” ES Windows, made in South Florida, is often the faster conversation on simple aluminum openings. CGI oversized sliders can run longer because the opening is the hard part.",
  },
  {
    question: "Can I finance a PGT installation?",
    answer:
      "Yes. Ask about financing on your free estimate. We pull the permit and install; lending is a separate application. Call (754) 600-4876 or start from the financing page.",
  },
];

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
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://floridaimpactwindowsdoors.com/brands/" },
      { "@type": "ListItem", position: 3, name: "PGT Windows & Doors" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(pgtFaqs)) }} />
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
              PGT Impact Windows{" "}
              <span className="gradient-text">Installed in South Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We are a Hollywood-based PGT dealer-installer — not the Venice factory. If you want WinGuard impact windows and doors set, permitted, and inspected in Broward or Miami-Dade HVHZ (or an FL# path in Palm Beach), the crew that shows up is ours.
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

      {/* Who should buy PGT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Who PGT is for</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            When a typical South Florida house should specify PGT
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              PGT is the brand we reach for when the job is a whole house, not a single trophy opening. WinGuard is the impact line most Broward and Miami-Dade inspectors already know how to read on a permit. EnergyVue is the conversation when vinyl thermal performance is the priority on that same impact path. We do not need a custom coastal series to replace fifteen single-hungs and a two-panel slider in Hollywood Hills or west Miramar.
            </p>
            <p>
              Inland and suburban openings — CBS ranches, two-story planned-community homes, typical lanai sliders — are PGT&apos;s home turf. Oceanfront condos and floor-to-ceiling glass still can be PGT when the NOA and design pressure match the elevation; they are not automatically a CGI job. The split is the opening, not the zip code. If the unit is a standard residential size with an HVHZ approval, WinGuard is usually the simpler specification. If the unit is an oversized multi-slide facing the Atlantic, we price{" "}
              <Link href="/brands/cgi/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">CGI</Link>{" "}
              on the same list so you can see why the heavier assembly costs more.
            </p>
            <p>
              HVHZ (Broward and Miami-Dade) jobs need a current Miami-Dade NOA that matches glass and anchors. Palm Beach jobs, including Boca Raton, often run on a Florida Product Approval instead. PGT publishes both. We pull the permit either way from 3000 Stirling Rd, Hollywood.
            </p>
          </div>
        </div>
      </section>

      {/* PGT vs ES vs CGI — catalog / availability angle */}
      <section id="compare" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">PGT vs ES vs CGI</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Why we still stock ES and CGI if PGT covers so much
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A dealer with one logo has to make every opening look like that logo&apos;s problem. We install three impact makers so the catalog, the lead time, and the coastal spec can disagree. This comparison is from the PGT chair — the other brand pages argue the same facts from their side.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-ocean-950 text-white">
                <tr>
                  <th className="p-4 font-display font-bold">If this is the job…</th>
                  <th className="p-4 font-display font-bold">We usually start with</th>
                  <th className="p-4 font-display font-bold">Lead-time story</th>
                  <th className="p-4 font-display font-bold">DP / exposure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="bg-palm-50/60">
                  <td className="p-4 font-semibold text-gray-900">Typical house, mixed vinyl + aluminum, one permit set</td>
                  <td className="p-4">PGT WinGuard (this page)</td>
                  <td className="p-4">Large Venice campus — common sizes are a known production path</td>
                  <td className="p-4">HVHZ NOA on standard residential DPs; FL# available in Palm Beach</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Every opening on a tighter budget; simple aluminum sizes</td>
                  <td className="p-4">
                    <Link href="/brands/es-windows/" className="text-palm-600 font-semibold hover:text-palm-700">ES Windows</Link>
                  </td>
                  <td className="p-4">South Florida maker — often the shorter wait on common configs</td>
                  <td className="p-4">NOA / FBC for typical inland and suburban openings</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Oceanfront, high-rise, or a slider other plants will not stamp</td>
                  <td className="p-4">
                    <Link href="/brands/cgi/" className="text-palm-600 font-semibold hover:text-palm-700">CGI Sentinel / Estate</Link>
                  </td>
                  <td className="p-4">Miami plant — oversized and high-DP units can take longer</td>
                  <td className="p-4">Built for higher coastal / elevation design pressures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-600">
            Side-by-side writeups: this table for{" "}
            <Link href="/brands/es-windows/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs ES Windows</Link>
            , and the longer{" "}
            <Link href="/blog/pgt-vs-cgi-impact-windows-comparison/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs CGI comparison</Link>.
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">PGT jobs we actually bid next</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/get-estimate/", label: "Free PGT estimate" },
              { href: "/financing/", label: "Financing" },
              { href: "/services/window-types/single-hung/", label: "Single-hung impact windows" },
              { href: "/services/door-types/sliding-glass/", label: "Impact sliding glass doors" },
              { href: "/services/energy-efficient-windows/", label: "Energy-efficient impact glass" },
              { href: "/faq/do-i-need-permit-for-impact-window-installation/", label: "Permits for impact windows" },
              { href: "/blog/pgt-vs-cgi-impact-windows-comparison/", label: "PGT vs CGI comparison" },
              { href: "/blog/impact-windows-cost-south-florida-2026/", label: "What impact windows cost in South Florida" },
              { href: "/blog/high-velocity-hurricane-zone-miami-dade-broward/", label: "HVHZ rules in Miami-Dade and Broward" },
              { href: "/brands/", label: "All brands we install" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:border-palm-300 hover:bg-palm-50 transition-all font-medium text-gray-700"
              >
                {item.label}
                <span aria-hidden className="text-palm-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection
        heading="PGT impact windows — questions we get in the Hollywood shop"
        faqs={pgtFaqs}
      />

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
