import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedDoorTypes from "@/components/RelatedDoorTypes";
import PageFaqSection from "@/components/PageFaqSection";
import { faqPageJsonLd } from "@/lib/faqSchema";

export const metadata: Metadata = {
  title: "Impact Garage Doors in South Florida | Wind-Rated Openings",
  description:
    "Impact garage doors for South Florida homes. The door, track, and reinforcement are one tested opening. Permitted from Hollywood. Free estimates. (754) 600-4876.",
  alternates: {
    canonical: "https://floridaimpactwindowsdoors.com/services/door-types/garage/",
  },
};

const features = [
  { name: "Wind Load Rated", detail: "Engineered and tested for the High Velocity Hurricane Zone, meeting Miami-Dade and Florida Building Code requirements for garage door wind loads" },
  { name: "Reinforced Bracing System", detail: "Heavy-duty steel or aluminum bracing reinforces every section against the extreme pressure differentials created during hurricane-force winds" },
  { name: "Insulated Panel Construction", detail: "Double-layer steel or aluminum panels with polyurethane foam insulation cores provide thermal efficiency and structural strength" },
  { name: "Impact-Rated Glass Options", detail: "Available with laminated impact glass windows in a variety of styles to allow natural light into your garage without compromising protection" },
  { name: "Heavy-Duty Track System", detail: "Reinforced vertical and horizontal tracks with wind-load rated hardware and brackets ensure reliable operation even under extreme conditions" },
  { name: "Smart Opener Compatibility", detail: "Compatible with modern smart garage door openers featuring battery backup, smartphone control, and automatic storm closure capabilities" },
];

const benefits = [
  {
    title: "Largest Vulnerability Sealed",
    description: "Your garage door is the single largest opening in your home. In a hurricane, a failed garage door can lead to catastrophic pressurization and roof loss. Impact garage doors eliminate this risk.",
  },
  {
    title: "Vehicle & Property Protection",
    description: "Protect your vehicles, tools, workshop, and stored belongings from wind, rain, and flying debris with a garage door engineered for the worst South Florida storms.",
  },
  {
    title: "Insurance Compliance",
    description: "Many South Florida insurers require wind-rated garage doors for full hurricane coverage. An impact garage door can help you meet these requirements and qualify for premium discounts.",
  },
  {
    title: "Energy Efficiency",
    description: "Insulated garage door panels reduce heat transfer from your garage into your home, lowering the cooling load on your air conditioning system during hot South Florida months.",
  },
  {
    title: "Curb Appeal",
    description: "Modern impact garage doors come in a wide range of styles, colors, and finishes that dramatically improve your home\u2019s exterior appearance and overall street presence.",
  },
  {
    title: "Quiet, Reliable Operation",
    description: "Heavy-duty hardware and precision-balanced panels ensure smooth, quiet operation day after day, even with the reinforced construction needed for hurricane rating.",
  },
];

const bestFor = [
  "All South Florida homes with attached or detached garages",
  "Properties in Miami-Dade County High Velocity Hurricane Zone",
  "Homes seeking full-envelope hurricane protection for insurance",
  "Garages used as workshops, home gyms, or additional living space",
  "Homeowners replacing older non-rated garage doors",
  "New construction requiring code-compliant garage door installation",
];

const relatedDoors = [
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Storm Doors", href: "/services/door-types/storm/" },
  { name: "Sliding Glass & Patio Doors", href: "/services/door-types/sliding-glass/" },
];

const garageFaqs = [
  {
    question: "What is an impact garage door?",
    answer:
      "An impact garage door is a wind-rated door assembly: the sections, the track, the reinforcement, and any glass in the sections, tested together. A rated section on an unrated track, or a window lite that was never part of the test, is not the approved door.",
  },
  {
    question: "Why do inspectors look at the garage first?",
    answer:
      "The garage is often the largest opening on the house. On form OIR-B1-1802 it is its own line. Impact windows on the living area do not cover an unrated garage door. Leaving it unprotected is a common reason a wind-mitigation credit is limited. The carrier sets any premium change.",
  },
  {
    question: "Does design pressure apply to a garage door?",
    answer:
      "Yes. The approval states the wind load the assembly was tested to. A wide two-car door is not the same test as a single-car door. We match the width, the glass option, and the reinforcement to the approval before it goes on the permit.",
  },
  {
    question: "Is the garage door rule different in Palm Beach?",
    answer:
      "The garage is still an opening. Miami-Dade and Broward are the High-Velocity Hurricane Zone. Palm Beach County is a wind-borne debris region, not the HVHZ, and often accepts a Florida Product Approval. We install from 3000 Stirling Rd, Hollywood. Call (754) 600-4876.",
  },
];

export default function GarageDoorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(garageFaqs)) }} />
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services/door-types/" className="inline-flex items-center gap-2 text-palm-300 hover:text-palm-200 transition-colors text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Door Types
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                Impact Garage Doors in{" "}
                <span className="gradient-text">South Florida</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                An impact garage door is a tested opening, not a decorative panel. The sections, the track, and any glass have to be the assembly on the approval. We permit them from Hollywood.
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
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/doors.jpg"
                  alt="Impact-rated garage door on a South Florida home"
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

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Garage Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Your Home&apos;s Biggest Opening Deserves the Strongest Protection
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                In hurricane engineering, the garage door is often called the weakest link in a home&apos;s building envelope. It is the largest single opening on most South Florida houses, and if it fails during a storm, the sudden pressurization of the interior can blow out windows, lift the roof, and cause catastrophic structural damage. This is why impact-rated garage doors are not just a smart upgrade in South Florida; in many jurisdictions they are a code requirement. Florida Impact Windows & Doors provides hurricane-rated garage doors that eliminate this critical vulnerability while dramatically improving your home&apos;s appearance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our impact garage doors are constructed with double-layer steel or aluminum panels filled with high-density polyurethane foam insulation. This sandwich construction provides exceptional strength-to-weight ratio, resisting the positive and negative pressure cycles created by hurricane winds while also providing meaningful thermal insulation. Heavy-duty wind load bracing reinforces each section of the door, and reinforced track systems with wind-rated brackets keep the door anchored to your garage opening even under extreme conditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Style options for impact garage doors have expanded enormously in recent years. Gone are the days when wind-rated meant a plain, industrial-looking panel. Today you can choose from raised panel, flush panel, carriage house, modern aluminum and glass, and contemporary full-view designs, all with impact-rated construction. Optional impact glass windows bring natural light into your garage in a variety of insert shapes and patterns. Color options range from classic white and almond to designer shades, wood grain finishes, and custom paint matching, so your garage door complements rather than detracts from your home&apos;s curb appeal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every impact garage door from Florida Impact Windows & Doors is professionally installed by our certified team, including reinforced header brackets, wind load rated end hinges, and proper bottom seal weatherstripping. We handle all permitting and inspections required by your local building department. Compatible with modern smart openers that provide battery backup, smartphone monitoring, and even automatic storm closure features, our garage doors bring your home into full code compliance while adding everyday convenience and significant curb appeal. Serving homeowners from Homestead to Jupiter, Florida Impact Windows & Doors is South Florida&apos;s trusted choice for impact garage door installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Features & Specifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Engineered for Hurricane Country
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every component is designed to withstand the extreme wind loads and debris impacts that South Florida hurricane seasons bring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Choose Impact Garage Doors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Ideal Applications</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Best For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Impact garage doors are essential for any South Florida home with a garage. They are the critical piece that completes your whole-home hurricane protection envelope and ensures insurance compliance.
              </p>
              <ul className="space-y-4">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-10 border border-ocean-100">
              <h3 className="text-xl font-bold font-display text-gray-900 mb-6">Quick Specs</h3>
              <dl className="space-y-4">
                {[
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Sizes", value: "Single, Double, Custom" },
                  { label: "Insulation", value: "Polyurethane foam core" },
                  { label: "Panel Material", value: "Steel or Aluminum" },
                  { label: "Glass Options", value: "Impact laminated" },
                  { label: "Warranty", value: "Lifetime limited" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <dt className="text-gray-500 font-medium">{spec.label}</dt>
                    <dd className="text-gray-900 font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
            Impact Garage Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            From Homestead to Jupiter, our team provides professional impact garage door installation throughout Miami-Dade, Broward, and Palm Beach County. In Broward HVHZ the garage is its own opening on a wind-mitigation form. Two-story houses in{" "}
            <Link href="/areas/pembroke-pines/" className="text-palm-700 font-semibold hover:underline">Pembroke Pines</Link>,{" "}
            <Link href="/areas/cooper-city/" className="text-palm-700 font-semibold hover:underline">Cooper City</Link>,{" "}
            <Link href="/areas/coral-springs/" className="text-palm-700 font-semibold hover:underline">Coral Springs</Link>,{" "}
            <Link href="/areas/weston/" className="text-palm-700 font-semibold hover:underline">Weston</Link>,{" "}
            <Link href="/areas/davie/" className="text-palm-700 font-semibold hover:underline">Davie</Link>, and{" "}
            <Link href="/areas/plantation/" className="text-palm-700 font-semibold hover:underline">Plantation</Link>{" "}
            are where we most often find new windows and the original garage door. Coastal houses in{" "}
            <Link href="/areas/deerfield-beach/" className="text-palm-700 font-semibold hover:underline">Deerfield Beach</Link>,{" "}
            <Link href="/areas/fort-lauderdale/" className="text-palm-700 font-semibold hover:underline">Fort Lauderdale</Link>, and{" "}
            <Link href="/areas/hollywood/" className="text-palm-700 font-semibold hover:underline">Hollywood</Link>{" "}
            have the same rule. How that changes a Broward quote is in{" "}
            <Link href="/blog/impact-window-cost-broward-county/" className="text-palm-700 font-semibold hover:underline">impact window cost in Broward County</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["Miami", "/areas/miami/"],
              ["Fort Lauderdale", "/areas/fort-lauderdale/"],
              ["West Palm Beach", "/areas/west-palm-beach/"],
              ["Boca Raton", "/areas/boca-raton/"],
              ["Hollywood", "/areas/hollywood/"],
              ["Pembroke Pines", "/areas/pembroke-pines/"],
              ["Deerfield Beach", "/areas/deerfield-beach/"],
              ["Weston", "/areas/weston/"],
              ["Davie", "/areas/davie/"],
              ["Miramar", "/areas/miramar/"],
            ].map(([city, href]) => (
              <Link key={city} href={href} className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:border-palm-300 hover:text-palm-700">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Door Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Explore More</span>
            <h2 className="text-3xl font-bold font-display text-gray-900">Related Door Types</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedDoors.map((door) => (
              <Link
                key={door.name}
                href={door.href}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
                  <svg className="w-7 h-7 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" />
                    <rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} />
                  </svg>
                </div>
                <h3 className="font-bold font-display text-gray-900 group-hover:text-palm-600 transition-colors">{door.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold font-display text-gray-900">The garage is an opening, not a wall</h2>
          <p>
            Wind load on a garage door is a pressure number for that width and height. A two-car door sees more area than a single-car door, and glass lites change the assembly. The Notice of Acceptance or Florida Product Approval has to name the door you are buying, including the reinforcement and the track hardware that were in the test.
          </p>
          <p>
            Mixing a rated section with an unrated track, or cutting in a decorative window that was never tested, is how a door can look finished and still fail inspection. If the existing opening is out of square, the repair is the opening, not a smaller number on a quote. We measure before we order.
          </p>
          <p>
            Field notes are in{" "}
            <Link href="/blog/impact-garage-doors-hvhz-south-florida/" className="text-palm-700 font-semibold">impact garage doors and the HVHZ</Link>
            . The rest of the door family is on the{" "}
            <Link href="/services/impact-doors/" className="text-palm-700 font-semibold">impact doors</Link> page. Shop: 3000 Stirling Rd, Hollywood, FL 33021. (754) 600-4876.
          </p>
        </div>
      </section>
      <PageFaqSection heading="Impact garage door questions" faqs={garageFaqs} />
      <RelatedDoorTypes current="/services/door-types/garage/" />

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Protect Your Garage, Protect Your Home
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Complete your home&apos;s hurricane protection with an impact-rated garage door. Schedule a free consultation and get a custom quote for your South Florida home.
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
