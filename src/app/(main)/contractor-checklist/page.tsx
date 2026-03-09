import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Window Contractor Checklist | How to Hire the Right Contractor in Florida",
  description:
    "Use this comprehensive impact window contractor checklist to verify licensing, insurance, experience, and warranties before hiring. Protect your South Florida home by hiring the right contractor.",
  keywords: [
    "impact window contractor checklist florida",
    "how to hire impact window contractor",
    "impact window contractor near me",
    "hurricane window contractor checklist",
    "florida impact window installer checklist",
    "verify impact window contractor license florida",
    "impact window contractor insurance requirements",
    "hiring impact window contractor south florida",
  ],
  alternates: {
    canonical: "/contractor-checklist/",
  },
  openGraph: {
    title: "Impact Window Contractor Checklist | Florida Impact Windows & Doors",
    description:
      "The complete checklist for hiring an impact window contractor in Florida. Verify licensing, insurance, experience, and warranties before you sign a contract.",
  },
};

const checklistSections = [
  {
    id: "license-verification",
    number: "01",
    title: "License Verification",
    description:
      "Florida law requires all contractors performing impact window and door installations to hold a valid state license. Verifying a contractor's license is the single most important step you can take before signing a contract.",
    items: [
      "Verify the contractor holds a valid Florida contractor license (CGC or CCC prefix for general/certified contractors)",
      "Confirm the license is current and in good standing with the DBPR (Department of Business and Professional Regulation)",
      "Verify the license holder is the one legally qualifying the company",
      "Check for any complaints or disciplinary actions on their license at myfloridalicense.com",
    ],
  },
  {
    id: "insurance-coverage",
    number: "02",
    title: "Insurance Coverage",
    description:
      "A contractor without proper insurance leaves you financially liable for injuries and property damage on your project. Never accept a verbal claim that they are insured — always request documentation.",
    items: [
      "Confirm the contractor carries general liability insurance (minimum $1M)",
      "Verify workers' compensation coverage for all employees",
      "Request a Certificate of Insurance (COI) directly from their insurer",
      "Make sure the insurance policy is active and won't expire during your project",
    ],
  },
  {
    id: "experience-track-record",
    number: "03",
    title: "Experience & Track Record",
    description:
      "Impact window installation in South Florida is specialized work. A contractor who installs standard windows up north is not qualified for HVHZ installations in Miami-Dade or Broward County. Verify real-world experience before you move forward.",
    items: [
      "Verify a minimum of 5 years of impact window experience in South Florida",
      "Ask for examples of completed projects similar to yours",
      "Check online reviews on Google, BBB, and Angi",
      "Confirm experience with your specific window brands (PGT, CGI, ES, CWS)",
      "Ask about HVHZ (High Velocity Hurricane Zone) installation experience",
    ],
  },
  {
    id: "installation-details",
    number: "04",
    title: "Installation Details",
    description:
      "The quality of your installation matters just as much as the product itself. Ask the right questions about who performs the work, what is included, and what happens after installation day.",
    items: [
      "Clarify if installers are W-2 employees or subcontractors",
      "If subcontractors are used, request proof of their licensing and insurance",
      "Confirm the scope includes full cleanup and debris removal",
      "Verify that stucco, drywall, and trim repairs are included",
      "Ask about window and door disposal of old products",
    ],
  },
  {
    id: "permits-inspections",
    number: "05",
    title: "Permits & Inspections",
    description:
      "Every impact window and door installation in Florida requires a building permit and final inspection. A contractor who skips permits is putting your home, your warranty, and your insurance at risk.",
    items: [
      "Confirm the contractor pulls all required building permits",
      "Verify they handle Miami-Dade/Broward NOA (Notice of Acceptance) requirements",
      "Ask about scheduling county inspections",
      "Ensure final inspection sign-off is included in the contract",
    ],
  },
  {
    id: "warranty-contract",
    number: "06",
    title: "Warranty & Contract",
    description:
      "Your contract and warranty are your legal protection. Never sign a contract that is vague about timelines, payment schedules, or warranty coverage. Everything should be in writing before work begins.",
    items: [
      "Ask about both manufacturer product warranty and workmanship warranty",
      "Get warranty details in writing — duration, what's covered, and exclusions",
      "Ensure the contract includes start date, completion date, and scope of work",
      "Review the payment schedule — never pay more than 30% upfront",
      "Make sure change orders require written approval",
    ],
  },
];

const whyUsReasons = [
  {
    title: "Licensed",
    description: "Fully licensed Florida CGC contractor — verify us on myfloridalicense.com anytime",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    description: "General liability and workers' compensation coverage on every project — COI available on request",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "15+ Years Experience",
    description: "Over 5,000 impact window and door installations across Broward and Palm Beach County",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Own W-2 Installation Crews",
    description: "We never subcontract — our factory-trained W-2 employees handle every installation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "We Pull All Permits",
    description: "We handle the entire permitting process and schedule all required county inspections",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Manufacturer + Workmanship Warranty",
    description: "Full manufacturer product warranty plus our own written workmanship guarantee on every project",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function ContractorChecklistPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Homeowner Resource</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Window <span className="gradient-text">Contractor Checklist</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Hiring the wrong impact window contractor can cost you thousands and leave your home unprotected. Use this checklist to verify licensing, insurance, experience, and more before you sign a contract.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {checklistSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-palm-50 hover:text-palm-600 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">The Checklist</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              6 Things to Verify Before You Hire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Go through each section and check off every item. If a contractor cannot satisfy these requirements, keep looking.
            </p>
          </div>

          <div className="space-y-16">
            {checklistSections.map((section, index) => (
              <div key={section.id} id={section.id} className="relative scroll-mt-24">
                {index < checklistSections.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-palm-300 to-palm-100 -mb-16" />
                )}
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center border border-palm-100">
                    <span className="text-2xl font-bold gradient-text-green font-display">{section.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 font-display mb-3">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{section.description}</p>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-md border-2 border-palm-400 bg-white flex items-center justify-center">
                              <svg className="w-4 h-4 text-palm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tip Callout */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 md:p-10 border border-palm-200 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-24 h-24 bg-palm-200/30 rounded-full blur-2xl" />
            <div className="relative z-10 flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-palm-200 flex items-center justify-center">
                <svg className="w-7 h-7 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Pro Tip: Verify Licenses Yourself</h3>
                <p className="text-gray-700 leading-relaxed">
                  Do not take a contractor&apos;s word for it. Visit{" "}
                  <a
                    href="https://www.myfloridalicense.com/wl11.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-palm-600 font-semibold underline hover:text-palm-700 transition-colors"
                  >
                    myfloridalicense.com
                  </a>{" "}
                  and search for the contractor&apos;s name or license number directly. You can confirm the license type (CGC or CCC), check the status, and see if any complaints have been filed. It takes less than two minutes and can save you from a costly mistake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Florida Impact Windows Checks Every Box */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Florida Impact Windows & Doors Checks Every Box
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We built this checklist because we meet every single requirement — and we believe homeowners deserve transparency from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsReasons.map((reason) => (
              <div
                key={reason.title}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-palm-400/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-palm-500/20 to-ocean-500/20 flex items-center justify-center text-palm-400 mb-5 border border-palm-400/20">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Work With a Contractor You Can Trust?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Florida Impact Windows & Doors meets every item on this checklist. Schedule your free in-home consultation and see the difference a qualified contractor makes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
