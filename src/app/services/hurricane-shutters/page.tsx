import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hurricane Shutters Installation in South Florida | Accordion, Roll-Down & Panel",
  description:
    "Professional hurricane shutter installation in Miami-Dade, Broward & Palm Beach County. Accordion, roll-down, Bahama, colonial & storm panel shutters. Free estimates from Florida Impact Windows & Doors.",
};

const benefits = [
  {
    icon: "🌊",
    title: "Proven Storm Protection",
    description:
      "Our hurricane shutters are tested and approved for Florida's High Velocity Hurricane Zone, providing reliable protection against Category 5 winds and flying debris during South Florida's hurricane season.",
  },
  {
    icon: "💲",
    title: "Budget-Friendly Option",
    description:
      "Hurricane shutters offer effective storm protection at a lower upfront cost than full impact window replacement, making them an accessible option for South Florida homeowners on a tighter budget.",
  },
  {
    icon: "🏗️",
    title: "Quick Installation",
    description:
      "Most hurricane shutter installations can be completed in one to two days, providing immediate protection for your home without the longer lead times associated with custom impact window orders.",
  },
  {
    icon: "🎨",
    title: "Multiple Style Options",
    description:
      "Choose from accordion, roll-down, Bahama, colonial, and clear storm panels. Each type offers different aesthetics, operating methods, and price points to suit your preferences and property style.",
  },
  {
    icon: "📜",
    title: "Insurance Qualification",
    description:
      "Properly installed hurricane shutters qualify for wind mitigation insurance discounts from Florida carriers. Protecting all openings with approved shutters can reduce your windstorm premiums significantly.",
  },
  {
    icon: "🔧",
    title: "Low Maintenance Requirements",
    description:
      "Modern hurricane shutters are made from corrosion-resistant aluminum designed to withstand South Florida's salt air and tropical climate. Simple annual lubrication keeps them operating smoothly for decades.",
  },
];

const shutterTypes = [
  {
    name: "Accordion Shutters",
    description: "Permanently mounted folding shutters that slide along a track. Easy one-person operation, ideal for large openings and sliding glass doors.",
  },
  {
    name: "Roll-Down Shutters",
    description: "Premium motorized or manual shutters that roll into a compact housing above the window. Offer the most convenient operation and clean aesthetics.",
  },
  {
    name: "Bahama Shutters",
    description: "Hinged aluminum shutters that prop open for shade and ventilation, then lower flat for storm protection. Popular tropical and coastal style.",
  },
  {
    name: "Colonial Shutters",
    description: "Decorative louvered shutters that mount on either side of the window and fold closed for hurricane protection. Classic Southern elegance.",
  },
  {
    name: "Storm Panels",
    description: "Removable corrugated aluminum or clear polycarbonate panels that bolt into permanent tracks. The most affordable hurricane protection option.",
  },
];

const faqs = [
  {
    question: "What type of hurricane shutters are best for South Florida homes?",
    answer:
      "The best shutter type depends on your budget, aesthetics, and lifestyle. Accordion shutters are the most popular choice in South Florida because they offer strong protection, easy operation, and mid-range pricing. Roll-down shutters are the premium option, offering motorized one-button deployment and the cleanest appearance. Bahama and colonial shutters add decorative value to coastal-style homes. Storm panels are the most economical but require manual installation before each storm.",
  },
  {
    question: "How much do hurricane shutters cost in Miami and South Florida?",
    answer:
      "Hurricane shutter pricing varies by type and the number of openings. Storm panels typically cost $7 to $15 per square foot, accordion shutters run $15 to $25 per square foot, and roll-down shutters range from $25 to $55 per square foot. For an average South Florida home with 10 to 15 openings, total costs generally range from $2,000 for basic storm panels to $15,000 or more for fully motorized roll-down shutters.",
  },
  {
    question: "Are hurricane shutters required by Florida building code?",
    answer:
      "Florida Building Code requires hurricane protection on all glazed openings for new construction and major renovations, especially in the High Velocity Hurricane Zone that includes Miami-Dade and Broward counties. Hurricane shutters are one approved method of compliance alongside impact windows and doors. For existing homes, shutters are not legally required but are strongly recommended and incentivized through insurance discounts.",
  },
  {
    question: "Should I choose hurricane shutters or impact windows?",
    answer:
      "The choice depends on your priorities and budget. Impact windows provide permanent, always-on protection with year-round benefits like energy savings, noise reduction, and UV blocking. Hurricane shutters cost less upfront but only protect during storms and require deployment before each event. Many South Florida homeowners start with shutters for immediate protection and later upgrade to impact windows room by room over time.",
  },
  {
    question: "How long do hurricane shutters last in South Florida's climate?",
    answer:
      "Quality aluminum hurricane shutters last 15 to 25 years or more in South Florida when properly maintained. The salt air, humidity, and UV exposure common in coastal areas can affect lower-grade products, which is why we only install commercial-grade aluminum shutters with marine-quality finishes designed specifically for the South Florida environment. Annual lubrication and occasional rinsing extend their lifespan significantly.",
  },
  {
    question: "Can I install hurricane shutters on my condo or HOA-managed property?",
    answer:
      "Yes, but you will typically need approval from your condo association or HOA before installation. Most South Florida associations have established guidelines for acceptable shutter types, colors, and installation methods. We work directly with your association to ensure our product selection and installation plan meet their requirements. We provide all necessary documentation including engineering specifications and product approvals.",
  },
];

export default function HurricaneShuttersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-sun-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-sun-400 rounded-full animate-pulse" />
              <span className="text-sm text-sun-300 font-medium">Accordion, Roll-Down & Panel Shutters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Professional <span className="gradient-text">Hurricane Shutters</span> for South Florida
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Affordable, reliable hurricane shutter installation throughout Miami-Dade, Broward, and Palm Beach County. Accordion, roll-down, Bahama, colonial, and storm panel options to protect every opening on your property.
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

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Hurricane Shutters</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Reliable Storm Protection for Every South Florida Property
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Hurricane shutters have been a cornerstone of storm protection in South Florida for decades. As one of the most proven and cost-effective methods for safeguarding windows, doors, and other openings against hurricane-force winds and debris, shutters remain a popular choice among homeowners throughout Miami-Dade, Broward, and Palm Beach counties. At Florida Impact Windows & Doors, we install every major type of hurricane shutter and help you choose the right product based on your home, budget, and protection needs.
            </p>
            <p>
              The most important factor in hurricane shutter performance is proper installation. Shutters must be anchored into the structural framing of your home using approved fasteners and mounting hardware. Incorrect installation can cause shutters to fail during a storm, leaving your home vulnerable to wind and water intrusion. Our installation crews are trained specifically in South Florida building requirements and follow manufacturer specifications precisely for every project, ensuring your shutters will perform when it matters most.
            </p>
            <p>
              For homeowners who want a budget-friendly path to full hurricane protection, shutters offer an excellent starting point. Protecting every opening in your home with approved shutters qualifies you for wind mitigation insurance discounts that can offset a meaningful portion of the investment over time. Many of our clients begin with hurricane shutters to secure immediate protection and insurance savings, then gradually transition to impact windows and doors as their budget allows.
            </p>
            <p>
              South Florida&apos;s unique climate demands shutter products built from corrosion-resistant materials. We exclusively install commercial-grade extruded aluminum shutters with powder-coat or anodized finishes designed to resist the salt air, humidity, and intense UV exposure that characterize life along the coast from Key Biscayne to Jupiter. Whether your home faces the Atlantic, sits on an Intracoastal lot in Fort Lauderdale, or is nestled in a western Broward suburb like Weston or Coral Springs, our shutter products are engineered for lasting performance in every South Florida environment.
            </p>
          </div>
        </div>
      </section>

      {/* Shutter Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Shutter Types</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Hurricane Shutter Styles We Install
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer the full range of hurricane shutter types to match every budget, aesthetic, and operational preference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shutterTypes.map((type) => (
              <div
                key={type.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{type.name}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Benefits of Hurricane Shutters for Your Home
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Florida Impact Windows & Doors */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Why Florida Impact Windows & Doors for Hurricane Shutters
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With extensive experience installing shutters across South Florida, we bring the precision and product knowledge needed to ensure your shutters protect your home reliably for years.
              </p>
              <ul className="space-y-4">
                {[
                  "Commercial-grade aluminum shutters with marine finishes",
                  "Structural anchoring per Florida Building Code requirements",
                  "Full permitting and inspection coordination",
                  "Custom color matching to your home exterior",
                  "Motorized roll-down options with battery backup",
                  "HOA and condo association compliance assistance",
                  "Competitive pricing with flexible financing available",
                  "Lifetime hardware warranty on all installations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 font-display">Compare Shutter Options</h3>
              <p className="text-gray-400 mb-6">
                Not sure which shutter type is right for your home? Our specialists will evaluate your property and recommend the best combination of style, protection, and value.
              </p>
              <Link
                href="/get-estimate/"
                className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
              >
                Get Free Shutter Estimate
              </Link>
              <p className="text-center text-gray-500 text-sm mt-4">No obligation. No pressure. No cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Explore Our Other Protection Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Impact Windows", href: "/services/impact-windows/", description: "Permanent hurricane protection with year-round energy and comfort benefits." },
              { title: "Impact Doors", href: "/services/impact-doors/", description: "Hurricane-rated sliding, French, and entry doors for every opening." },
              { title: "Window Replacement", href: "/services/window-replacement/", description: "Full-service window replacement to upgrade aging or damaged windows." },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-palm-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Hurricane Shutter Installation Across South Florida
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { county: "Miami-Dade County", cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Homestead", "Key Biscayne"], href: "/areas/miami/" },
              { county: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Coral Springs", "Plantation", "Weston", "Davie"], href: "/areas/fort-lauderdale/" },
              { county: "Palm Beach County", cities: ["West Palm Beach", "Boca Raton", "Boynton Beach", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Lake Worth"], href: "/areas/west-palm-beach/" },
            ].map((area) => (
              <div key={area.county} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{area.county}</h3>
                <ul className="space-y-2 mb-6">
                  {area.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {city}
                    </li>
                  ))}
                </ul>
                <Link href={area.href} className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors text-sm">
                  View All Cities <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Hurricane Shutter Questions Answered
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Protect Your Home Before Hurricane Season
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the next storm warning. Get hurricane shutters installed now and enjoy peace of mind all season long. Free estimates available throughout South Florida.
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
