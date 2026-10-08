import Link from "next/link";
import type { Metadata } from "next";
import PageFaqSection from "@/components/PageFaqSection";
import { faqPageJsonLd } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "ES Windows Impact Windows South Florida | We Install ES Products",
  description:
    "Florida Impact Windows & Doors installs ES Windows products in South Florida. South Florida-made aluminum, HVHZ NOA on the lines we specify. We are not the factory and we do not claim authorized-dealer status. Free estimates. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/brands/es-windows/" },
};

const esFaqs = [
  {
    question: "Is ES Windows a cheaper version of PGT, or a different plant?",
    answer:
      "Different plant. ES Windows is a South Florida manufacturer. PGT builds in Venice. We install both. ES is the conversation when you want code-legal impact glass on every opening without paying for a broader catalog you will not use. It is not a downgrade of laminated glass or a skip on Miami-Dade NOA — it is a tighter options list and a local production story.",
  },
  {
    question: "When is ES the wrong brand for my house?",
    answer:
      "If you need vinyl EnergyVue-style thermal packages across the house, a huge options list, or an oversized oceanfront slider that needs a high design-pressure custom stamp, we will steer you to PGT or CGI instead of forcing ES into that opening. Inland Miramar two-stories, Hollywood Hills ranches, and typical aluminum single-hungs are where ES earns the bid.",
  },
  {
    question: "Does ES Windows meet Broward HVHZ / Miami-Dade NOA?",
    answer:
      "ES impact products we install carry Miami-Dade Notices of Acceptance and Florida Product Approvals. Approval is by the exact model on the permit. Hollywood and Miramar (Broward HVHZ) typically need that NOA path. Boca Raton (Palm Beach) often accepts an FL# — we submit what the city asks for, not a copied Broward packet.",
  },
  {
    question: "Why do people say ES is faster than PGT?",
    answer:
      "ES builds in South Florida for this market. PGT’s Venice campus is large and consistent, but a local plant can beat a statewide queue on common aluminum sizes. We will not promise a week count on a webpage. The estimate has the production window for the units on your opening list.",
  },
  {
    question: "Can I mix ES windows with a CGI slider?",
    answer:
      "Yes, when the openings disagree. A house can wear ES single-hungs and a CGI or PGT sliding door if the permit lists each approval. Mixing brands to save money on bedrooms and spend it on the lanai is a normal South Florida bid — mixing unapproved leftover openings next to new glass is not.",
  },
];

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
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://floridaimpactwindowsdoors.com/brands/" },
      { "@type": "ListItem", position: 3, name: "ES Windows" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(esFaqs)) }} />
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
              <span className="text-sm text-sun-300 font-medium">We install ES Windows products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              ES Windows Impact Windows{" "}
              <span className="gradient-text">from a South Florida Installer</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              ES is the South Florida-made line we install when the job is every opening, not a showroom wall. We install ES products from Hollywood — we pull the permit and set the units. ES builds the frames. We do not claim authorized-dealer status. If you wanted PGT&apos;s catalog or CGI&apos;s coastal work, those pages are a click away; this page is the value-and-lead-time argument.
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

      {/* Who should buy ES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Who ES is for</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Buy ES when the goal is a finished house, not a longer options list
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              The homeowners who leave this page with an ES bid are usually protecting every bedroom, not agonizing over a powder-coat fan deck. They live in inland Broward — Miramar two-stories that still have shutter tracks, Hollywood Hills ranches west of US-1, Pembroke-adjacent CBS — and they want laminated glass that a Broward inspector will stamp. They do not need a Venice-sized catalog to replace a horizontal roller over the kitchen sink.
            </p>
            <p>
              ES is a South Florida maker. That is the lead-time argument, not a romance about craft. Common aluminum single-hungs, picture windows, and two-panel sliders do not have to sit in a statewide queue behind someone else&apos;s custom arch-top. We still will not print a week count here; the estimate has the production window for your sizes.{" "}
              <Link href="/brands/pgt/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT</Link>{" "}
              remains the pick when you want vinyl EnergyVue, a wider color and style grid, or one factory for an odd mix of shapes.{" "}
              <Link href="/brands/cgi/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">CGI</Link>{" "}
              remains the pick when the opening itself is the problem — ocean fetch, high-rise DP, a slider other plants will not stamp.
            </p>
            <p>
              HVHZ (Hollywood, Miramar, the rest of Broward and Miami-Dade) still means a current NOA on the exact unit. Palm Beach (Boca Raton) is a wind-borne debris region, not HVHZ — an FL# is often enough. ES products we install are built for that South Florida paperwork. We pull the permit from 3000 Stirling Rd. You are not buying a box of glass from a website.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison — lead time / value angle, not the PGT table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">ES vs PGT vs CGI</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Lead time and coverage — not a logo hierarchy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you came from the PGT page, you already saw a table about catalogs. This page is the calendar and the checkbook. Same three brands, different question: how fast can we glaze the whole house without leaving a shutter on the guest room.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-sun-200 shadow-sm">
              <p className="text-sm font-semibold text-sun-600 uppercase tracking-wider mb-2">This page</p>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">ES Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                South Florida manufacturing, aluminum-forward lineup, NOA on the impact units we install. Best when the opening list is ordinary and you want every hole covered this season.
              </p>
              <p className="text-sm text-gray-500">Inland / typical DP · often the shorter local queue</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-sm font-semibold text-palm-600 uppercase tracking-wider mb-2">Sibling brand</p>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                <Link href="/brands/pgt/" className="hover:text-palm-600">PGT WinGuard</Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Venice-scale catalog: vinyl and aluminum, EnergyVue when thermal is the brief, one factory for a messy mix of styles. Best when the house is not all the same opening.
              </p>
              <p className="text-sm text-gray-500">Consistent campus lead times · broader options</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-sm font-semibold text-ocean-600 uppercase tracking-wider mb-2">Sibling brand</p>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                <Link href="/brands/cgi/" className="hover:text-ocean-600">CGI</Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Miami plant aimed at high-load and oversized work. Wrong default for a standard Miramar bedroom. Right default when the lanai slider is the reason the other bids came back &quot;can&apos;t build.&quot;
              </p>
              <p className="text-sm text-gray-500">Coastal / high DP · custom sizes can wait longer</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600">
            Written comparisons: the{" "}
            <Link href="/brands/pgt/#compare" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs ES vs CGI table</Link>
            {" "}and{" "}
            <Link href="/blog/pgt-vs-cgi-impact-windows-comparison/" className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">PGT vs CGI</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Next steps on an ES bid</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/get-estimate/", label: "Free ES Windows estimate" },
              { href: "/financing/", label: "Financing" },
              { href: "/services/window-replacement/", label: "Whole-house window replacement" },
              { href: "/services/window-types/single-hung/", label: "Single-hung impact windows" },
              { href: "/services/door-types/sliding-glass/", label: "Impact sliding glass doors" },
              { href: "/faq/how-much-do-impact-windows-cost-in-south-florida/", label: "What impact windows cost" },
              { href: "/blog/vinyl-vs-aluminum-impact-window-frames/", label: "Vinyl vs aluminum frames" },
              { href: "/blog/impact-windows-cost-south-florida-2026/", label: "South Florida cost guide" },
              { href: "/brands/", label: "All brands we install" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:border-sun-300 hover:bg-sun-50 transition-all font-medium text-gray-700"
              >
                {item.label}
                <span aria-hidden className="text-sun-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection
        heading="ES Windows — installer questions, not factory marketing"
        faqs={esFaqs}
        accent="sun"
      />

      {/* Installer section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Local ES Windows Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
            Florida Impact Windows & Doors Installs ES Windows Products
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            We install ES Windows products. That is not an authorized-dealer claim and it is not dealer-direct pricing. We pair the ES line we specify with measurement, permitting, and installation from the Hollywood shop.
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
              Protect Your Home Now
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
