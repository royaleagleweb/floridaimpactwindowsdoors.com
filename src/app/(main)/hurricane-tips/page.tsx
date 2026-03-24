import Link from "next/link";
import type { Metadata } from "next";
import HurricaneChecklist from "@/components/HurricaneChecklist";

export const metadata: Metadata = {
  title: "Hurricane Preparedness Tips South Florida | Protect Your Home Guide",
  description:
    "Complete hurricane preparedness guide for South Florida homeowners. Learn how impact windows and doors protect your home, plus essential tips before, during, and after a storm. Fort Lauderdale, Broward & Palm Beach County. Call (754) 600-4876.",
  keywords: [
    "hurricane preparedness tips south florida",
    "hurricane preparedness guide",
    "hurricane preparation checklist",
    "south florida hurricane tips",
    "protect home from hurricane",
    "impact windows hurricane protection",
    "hurricane season florida",
    "fort lauderdale hurricane preparedness",
    "broward county hurricane tips",
    "palm beach county hurricane guide",
    "hurricane shutters vs impact windows",
    "hurricane insurance discounts florida",
    "hurricane emergency kit",
    "hurricane evacuation plan south florida",
    "HVHZ hurricane protection",
  ],
  alternates: { canonical: "/hurricane-tips/" },
};

const beforeSeasonTips = [
  {
    title: "Schedule a Professional Window & Door Inspection",
    description:
      "Have a licensed contractor inspect all windows and doors for seal integrity, hardware function, and impact rating compliance. Aging frames and failed seals compromise your home's hurricane envelope.",
  },
  {
    title: "Replace Aging Windows with Impact-Rated Products",
    description:
      "If your home still has standard glass or outdated aluminum windows, upgrade to impact-rated windows before hurricane season begins. Impact windows provide permanent, always-on protection without any storm-day preparation.",
  },
  {
    title: "Trim Trees & Remove Dead Branches Near Your Home",
    description:
      "Overhanging limbs and dead branches become dangerous projectiles during a hurricane. Hire a certified arborist to trim trees within 10 feet of your home and remove any dead or weakened trees on your property.",
  },
  {
    title: "Review Your Homeowner's Insurance Coverage",
    description:
      "Confirm your policy covers wind damage, flood damage, and debris removal. Understand your hurricane deductible, which in Florida is typically 2% to 5% of your dwelling coverage. Consider adding flood insurance if you are in a flood zone.",
  },
  {
    title: "Create a Home Inventory with Photos & Video",
    description:
      "Walk through every room and document your belongings with photos and video. Store the inventory digitally in the cloud so you can access it from anywhere if you need to file an insurance claim after a storm.",
  },
  {
    title: "Assemble an Emergency Supply Kit",
    description:
      "Stock at least 7 days of supplies including one gallon of water per person per day, non-perishable food, a first aid kit, flashlights, extra batteries, medications, important documents in a waterproof container, and cash.",
  },
  {
    title: "Know Your Evacuation Zone & Route",
    description:
      "Broward and Palm Beach counties have designated evacuation zones. Visit your county's emergency management website to find your zone, plan your evacuation route, and identify shelters. Do not wait until a storm is approaching to make this plan.",
  },
];

const stormApproachingTips = [
  {
    title: "Monitor Local Weather & NOAA Updates",
    description:
      "Track the storm using the National Hurricane Center at hurricanes.gov. Follow your local emergency management office on social media and sign up for county alert notifications for real-time updates.",
  },
  {
    title: "Install Hurricane Shutters if You Don't Have Impact Windows",
    description:
      "If your home does not have impact-rated windows and doors, install your hurricane shutters or plywood coverings as soon as a hurricane watch is issued. Impact window owners can skip this step entirely.",
  },
  {
    title: "Secure or Bring in All Outdoor Items",
    description:
      "Move patio furniture, grills, potted plants, decorations, and any loose items inside your garage or home. In hurricane-force winds, even a small object becomes a dangerous projectile capable of penetrating standard glass.",
  },
  {
    title: "Fill Your Vehicle's Gas Tank",
    description:
      "Gas stations often run out of fuel or lose power in the days before and after a hurricane. Fill all vehicles as soon as a storm enters the Gulf or Atlantic tracking cone. Top off any portable gas cans for generators as well.",
  },
  {
    title: "Charge All Devices & Portable Battery Packs",
    description:
      "Fully charge your cell phones, laptops, tablets, and all portable battery packs. Power outages in South Florida after a hurricane can last days or even weeks in severely impacted areas.",
  },
  {
    title: "Fill Bathtubs with Water for Flushing Toilets",
    description:
      "If you lose water pressure after the storm, bathtub water can be used for flushing toilets and basic sanitation. Fill tubs and large containers 24 hours before the storm's expected arrival.",
  },
  {
    title: "Review Your Family Communication Plan",
    description:
      "Ensure every family member knows how to reach each other if cell service is disrupted. Designate an out-of-state contact person, share your evacuation plan, and agree on a meeting point if you get separated.",
  },
];

const impactAdvantages = [
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Hurricane Protection",
    description:
      "Impact windows are engineered to withstand wind pressures up to +/-100 PSF and meet High Velocity Hurricane Zone (HVHZ) code requirements. The laminated glass holds together even when shattered, preventing wind and water intrusion during a Category 5 storm.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Burglar Resistance",
    description:
      "Impact windows provide 24/7 security that replaces the need for a traditional home security monitoring system costing $30 to $90 per month. The laminated interlayer makes forced entry extremely difficult, deterring break-ins year-round.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "UV Protection",
    description:
      "Impact glass blocks 99% of harmful ultraviolet rays, protecting your furniture, hardwood flooring, artwork, and interior finishes from fading and sun damage. This preservation saves thousands of dollars in replacement costs over the life of your home.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: "Noise Reduction",
    description:
      "The laminated glass construction of impact windows reduces outside noise by up to 50%, creating a quieter, more comfortable living environment. This is especially valuable for homes near highways, airports, or busy commercial areas in South Florida.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Energy Savings",
    description:
      "Impact windows with Low-E coatings reduce cooling costs by 25% to 35% by blocking solar heat gain. In South Florida where air conditioning runs 10 months a year, this translates to significant savings on your monthly FPL bill.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Insurance Discounts",
    description:
      "South Florida homeowners with impact windows on all openings save up to 45% on hurricane insurance premiums. For many families, the annual insurance savings alone offset a significant portion of the monthly financing payment for their new windows.",
  },
];

const afterStormTips = [
  {
    title: "Don't Return Home Until Authorities Say It's Safe",
    description:
      "Follow official directives from Broward or Palm Beach County emergency management before returning to your home. Downed power lines, structural damage, and contaminated water can create life-threatening hazards that are not immediately visible.",
  },
  {
    title: "Document All Damage with Photos & Video",
    description:
      "Before touching or cleaning anything, thoroughly photograph and video all damage to your home, vehicles, and personal property. This documentation is critical for your insurance claim and can significantly speed up the claims process.",
  },
  {
    title: "Avoid Downed Power Lines & Standing Water",
    description:
      "Never approach or touch downed power lines, even if they appear inactive. Avoid walking or driving through standing water, which may be electrically charged from submerged power lines or contaminated with sewage and hazardous materials.",
  },
  {
    title: "Contact Your Insurance Company Promptly",
    description:
      "File your insurance claim as soon as possible after the storm. Most Florida insurers have deadlines for filing hurricane claims. Have your policy number, home inventory, and damage documentation ready when you call.",
  },
  {
    title: "Be Wary of Storm-Chasing Contractors",
    description:
      "After every hurricane, unlicensed and uninsured contractors flood South Florida looking for quick money. Always verify a contractor's Florida license number, insurance coverage, and references before signing any contract. Never pay the full amount upfront.",
  },
];

export default function HurricaneTipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Hurricane Season: June 1 &ndash; November 30</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Hurricane Preparedness Guide for{" "}
              <span className="gradient-text">South Florida Homeowners</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              Protecting your home and family starts long before a storm enters the cone. This comprehensive guide covers everything South Florida homeowners need to know before, during, and after hurricane season, including how impact windows and doors provide the ultimate year-round protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
              >
                Get Protected Today
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

      {/* Interactive Hurricane Prep Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Track Your Hurricane Readiness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our interactive checklist to track your preparation progress. Your selections are saved automatically so you can come back anytime.
            </p>
          </div>
          <HurricaneChecklist />
        </div>
      </section>

      {/* Before Hurricane Season */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Prepare Early</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Before Hurricane Season (June 1 &ndash; November 30)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The best time to prepare for a hurricane is months before one threatens. Complete these steps well before June 1 to ensure your home and family are ready.
            </p>
          </div>
          <div className="space-y-6">
            {beforeSeasonTips.map((tip, index) => (
              <div key={tip.title} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center border border-palm-100">
                  <span className="text-lg font-bold gradient-text-green font-display">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When a Storm is Approaching */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Storm Watch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              When a Storm is Approaching
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When a hurricane watch or warning is issued for South Florida, take these steps immediately to protect your home and family.
            </p>
          </div>
          <div className="space-y-6">
            {stormApproachingTips.map((tip, index) => (
              <div key={tip.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-ocean-700 font-display">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages of Impact Windows & Doors */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Year-Round Protection</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Advantages of Impact Windows & Doors
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Impact windows and doors are the single best investment South Florida homeowners can make for hurricane protection, home security, energy savings, and long-term property value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAdvantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-400/30 transition-all"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/impact-windows/"
              className="inline-flex items-center gap-2 text-palm-400 font-semibold hover:text-palm-300 transition-colors"
            >
              Learn More About Our Impact Windows
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* After the Storm */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Recovery</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              After the Storm
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Once the storm passes, safety remains the top priority. Follow these steps to protect yourself and begin the recovery process.
            </p>
          </div>
          <div className="space-y-6">
            {afterStormTips.map((tip, index) => (
              <div key={tip.title} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center border border-palm-100">
                  <span className="text-lg font-bold gradient-text-green font-display">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">Need Storm Damage Window or Door Replacement?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If your windows or doors were damaged during a hurricane, Florida Impact Windows & Doors can help. We work directly with your insurance company and provide fast turnaround on emergency replacements. Contact us for a free damage assessment.
            </p>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call (754) 600-4876 for Emergency Service
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Protect Your Home Before the Next Storm
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Do not wait until a hurricane is in the forecast. Schedule your free in-home consultation today and learn how impact windows and doors can protect your family, reduce your insurance premiums, and increase your home&apos;s value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
