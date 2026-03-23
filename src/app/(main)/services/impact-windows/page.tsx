import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Windows Installation Fort Lauderdale | #1 Hurricane Windows Broward County",
  description:
    "Premium impact window installation in Fort Lauderdale, Broward & Palm Beach County. Category 5 hurricane-rated glass. Energy savings up to 70%, insurance discounts up to 45%. Free estimates. Call (754) 600-4876.",
  alternates: { canonical: "/services/impact-windows/" },
};

const benefits = [
  {
    icon: "🛡️",
    title: "Category 5 Hurricane Protection",
    description:
      "Our impact windows are tested and certified to withstand wind speeds up to 200 mph and large missile impacts, meeting Florida Building Code and Miami-Dade NOA requirements.",
  },
  {
    icon: "💰",
    title: "Insurance Premium Discounts",
    description:
      "South Florida homeowners save up to 45% on windstorm insurance premiums by installing impact windows. Our products qualify for all major carrier discount programs.",
  },
  {
    icon: "⚡",
    title: "Energy Efficiency Savings",
    description:
      "Low-E coated impact glass reduces solar heat gain by up to 70%, dramatically lowering your air conditioning costs during South Florida's long, hot summers.",
  },
  {
    icon: "🔇",
    title: "Superior Noise Reduction",
    description:
      "Laminated impact glass reduces outside noise by up to 60%, shielding your home from traffic, construction, lawn equipment, and neighborhood noise throughout the day.",
  },
  {
    icon: "☀️",
    title: "99% UV Ray Blocking",
    description:
      "Protect your furniture, hardwood floors, artwork, and interior finishes from fading and sun damage with impact glass that blocks 99% of harmful ultraviolet radiation.",
  },
  {
    icon: "🔒",
    title: "Year-Round Home Security",
    description:
      "Impact windows provide 24/7 burglary deterrence. The laminated interlayer holds the glass together even when struck, making forced entry extremely difficult for intruders.",
  },
];

const windowTypes = [
  { name: "Single Hung Windows", href: "/services/window-types/single-hung/" },
  { name: "Double Hung Windows", href: "/services/window-types/double-hung/" },
  { name: "Casement Windows", href: "/services/window-types/casement/" },
  { name: "Awning Windows", href: "/services/window-types/awning/" },
  { name: "Sliding Windows", href: "/services/window-types/sliding/" },
  { name: "Picture Windows", href: "/services/window-types/picture/" },
  { name: "Bay Windows", href: "/services/window-types/bay/" },
  { name: "Bow Windows", href: "/services/window-types/bow/" },
];

const faqs = [
  {
    question: "How much do impact windows cost in South Florida?",
    answer:
      "Impact window pricing varies based on size, style, glass type, and manufacturer. On average, South Florida homeowners invest between $500 and $1,500 per window including installation. Single hung impact windows are typically the most affordable, while large sliding or custom shapes cost more. We provide free in-home estimates with transparent pricing and flexible financing options starting at $89 per month.",
  },
  {
    question: "Do impact windows really lower insurance premiums?",
    answer:
      "Yes. Florida law requires insurance companies to offer premium discounts for hurricane mitigation features, and impact windows qualify for some of the largest discounts available. Most South Florida homeowners see insurance savings of 20% to 45% on their windstorm premiums after full impact window installation. The exact savings depend on your carrier, policy, and whether you protect all openings.",
  },
  {
    question: "What is the difference between impact windows and hurricane shutters?",
    answer:
      "Impact windows provide permanent, always-on hurricane protection built directly into the window frame and glass. Unlike shutters, there is nothing to deploy, store, or maintain before a storm. Impact windows also deliver year-round benefits like energy savings, noise reduction, UV blocking, and security. Hurricane shutters only protect during storms and must be manually installed or activated before each event.",
  },
  {
    question: "How long does impact window installation take?",
    answer:
      "A typical whole-home impact window installation in South Florida takes 1 to 3 days depending on the number of windows and the complexity of the project. Our experienced crews usually complete an average-sized home (10 to 15 windows) in about two days. We handle all permits, inspections, and cleanup so you can enjoy your new windows with no hassle.",
  },
  {
    question: "Are impact windows required by Florida building code?",
    answer:
      "Florida Building Code requires that all new construction and major renovations in the High Velocity Hurricane Zone (HVHZ), which includes Miami-Dade and Broward counties, use impact-rated windows or an approved alternative. Even outside the HVHZ, most South Florida municipalities require some form of hurricane protection on all glazed openings for new permits.",
  },
  {
    question: "What brands of impact windows do you install?",
    answer:
      "We are authorized dealers for the top impact window manufacturers including PGT, CGI, ES Windows, and Custom Window Systems (CWS). Each brand offers unique advantages in terms of design, performance, and warranty coverage. During your free consultation, we help you choose the best brand and product line for your home and budget.",
  },
];

export default function ImpactWindowsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">South Florida&apos;s Impact Window Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Premium <span className="gradient-text">Impact Windows</span> for South Florida Homes
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Hurricane-rated impact windows engineered for Category 5 protection. Reduce energy costs, lower insurance premiums, and protect your family year-round in Miami-Dade, Broward, and Palm Beach County.
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
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/windows5.jpg"
                  alt="Premium impact windows installed on a South Florida home"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Impact Windows</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            The Gold Standard in South Florida Hurricane Protection
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Impact windows are the premier hurricane protection solution for homes and buildings throughout South Florida. Engineered with laminated glass bonded to a durable interlayer, these windows are designed to withstand the extreme wind pressures and flying debris produced by Category 5 hurricanes. Unlike temporary solutions such as plywood or hurricane shutters, impact windows provide continuous, maintenance-free protection every day of the year without any preparation when a storm approaches.
            </p>
            <p>
              At Florida Impact Windows & Doors, we specialize exclusively in impact window installation across Miami-Dade, Broward, and Palm Beach counties. Our team has installed over 5,000 impact windows in communities ranging from the coastal high-rises of Miami Beach and Fort Lauderdale to the suburban neighborhoods of Coral Springs, Weston, Boca Raton, and Palm Beach Gardens. Every installation is performed by our own certified crews, permitted through your local building department, and inspected to ensure full compliance with the Florida Building Code and the High Velocity Hurricane Zone standards.
            </p>
            <p>
              The technology behind modern impact windows has advanced significantly over the past decade. Today&apos;s impact glass features Low-E coatings that reflect solar heat, argon gas fills that improve insulation, and advanced laminated interlayers that hold the glass in place even under extreme force. These innovations mean your impact windows do far more than protect against hurricanes. They reduce energy consumption by blocking up to 70% of solar heat gain, cut outside noise by up to 60%, block 99% of harmful UV rays, and provide a permanent barrier against break-ins and forced entry.
            </p>
            <p>
              South Florida homeowners who install impact windows on every opening in their home typically qualify for the largest available discounts on windstorm insurance premiums. Savings of 20% to 45% are common, and for many families the annual insurance reduction alone offsets a significant portion of the monthly financing payment. Combined with lower energy bills and increased property value, impact windows are one of the smartest home improvement investments you can make in the Miami, Fort Lauderdale, and West Palm Beach metro areas.
            </p>
            <p>
              Whether you are building a new home, replacing aging aluminum windows from the 1970s or 1980s, or upgrading from hurricane shutters to a permanent solution, Florida Impact Windows & Doors provides a complete turnkey experience. We handle everything from the initial in-home consultation and product selection through permitting, professional installation, final inspection, and warranty registration. Our goal is to make the process simple, transparent, and stress-free so you can focus on enjoying your protected, comfortable, and energy-efficient home.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Why South Florida Homeowners Choose Impact Windows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Impact windows deliver a comprehensive package of protection, comfort, and value that no other home improvement can match.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
                Why Choose Florida Impact Windows & Doors for Your Impact Window Installation
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over 15 years of experience and more than 5,000 impact windows installed across South Florida, Florida Impact Windows & Doors is the trusted choice for homeowners who demand quality, reliability, and honest pricing.
              </p>
              <ul className="space-y-4">
                {[
                  "Authorized dealer for PGT, CGI, ES Windows, and CWS",
                  "Licensed, insured, and Florida-certified contractor",
                  "In-house installation crews, never subcontracted",
                  "Full permit handling and building department inspections",
                  "Lifetime manufacturer warranties on all products",
                  "Flexible financing with payments starting at $89/month",
                  "Free in-home consultations and transparent estimates",
                  "5-star rated with hundreds of verified Google reviews",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Request Your Free Estimate</h3>
              <p className="text-gray-400 mb-8">
                Get a detailed, no-obligation quote for impact windows tailored to your home. Our expert will visit, take measurements, and provide product recommendations on the spot.
              </p>
              <Link
                href="/get-estimate/"
                className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
              >
                Schedule Free Consultation
              </Link>
              <p className="text-center text-gray-500 text-sm mt-4">No obligation. No pressure. No cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Window Styles</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Impact Window Types We Install
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every home is unique. We offer a full range of impact window styles to match your architecture, preferences, and budget.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {windowTypes.map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="flex items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-palm-300 hover:bg-palm-50 transition-all group bg-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-palm-100 flex items-center justify-center group-hover:bg-palm-200 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} /></svg>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-palm-700 transition-colors">{type.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services/impact-doors/" className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors">
              Also explore our Impact Doors
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Impact Window Installation Across South Florida
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We install impact windows throughout the tri-county area, from the Florida Keys to Jupiter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                county: "Miami-Dade County",
                cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Homestead", "Key Biscayne", "Pinecrest", "Kendall"],
                href: "/areas/miami/",
              },
              {
                county: "Broward County",
                cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Coral Springs", "Plantation", "Weston", "Davie", "Sunrise", "Pompano Beach"],
                href: "/areas/fort-lauderdale/",
              },
              {
                county: "Palm Beach County",
                cities: ["West Palm Beach", "Boca Raton", "Boynton Beach", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Lake Worth", "Royal Palm Beach", "Greenacres"],
                href: "/areas/west-palm-beach/",
              },
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
                  View All {area.county} Cities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
              Frequently Asked Questions About Impact Windows
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
            Ready to Protect Your Home with Impact Windows?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your free in-home consultation today. Our impact window specialists will assess your home, provide expert recommendations, and deliver a transparent estimate with no obligation.
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
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
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
