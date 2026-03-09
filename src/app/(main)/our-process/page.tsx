import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Installation Process | 6 Easy Steps | Florida Impact Windows & Doors",
  description:
    "Learn about the Florida Impact Windows & Doors 6-step impact window and door installation process. From free consultation to final inspection, we handle everything for a smooth, stress-free experience in South Florida.",
};

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Your project begins with a free, no-obligation in-home consultation. One of our experienced estimators visits your home to assess your current windows and doors, take preliminary measurements, and discuss your goals, preferences, and budget. We answer every question and never pressure you into a decision.",
    details: [
      "Thorough assessment of existing windows and doors",
      "Discussion of product options across our four authorized brands",
      "Energy efficiency and insurance savings estimates",
      "Budget discussion and financing options reviewed",
      "Detailed written proposal delivered within 48 hours",
    ],
    duration: "60-90 minutes",
  },
  {
    step: "02",
    title: "Custom Measurement",
    description:
      "Once you decide to move forward, our measurement team visits your home to take precise, laser-accurate measurements of every opening. These custom measurements are critical for manufacturing windows and doors that fit perfectly and perform as designed. Every fraction of an inch matters for proper installation and hurricane protection.",
    details: [
      "Laser-precise digital measurements of every opening",
      "Structural assessment and framing evaluation",
      "Documentation of any existing damage or irregularities",
      "Photos captured for manufacturing reference",
      "Confirmation of product specifications and frame colors",
    ],
    duration: "1-2 hours",
  },
  {
    step: "03",
    title: "Product Selection",
    description:
      "With measurements in hand, we finalize your product selections. Whether you are choosing PGT WinGuard for its trusted reputation, CGI Sentinel for coastal durability, ES Windows for budget-friendly protection, or Custom Window Systems for architectural distinction, we help you select the right product for every opening in your home.",
    details: [
      "Select from 4 authorized premium brands",
      "Choose frame colors, glass options, and hardware finishes",
      "Review energy efficiency and noise reduction ratings",
      "Finalize grid patterns, screens, and accessories",
      "Final contract with complete specifications and pricing",
    ],
    duration: "Finalized within 1 week",
  },
  {
    step: "04",
    title: "Permitting",
    description:
      "Florida Impact Windows & Doors handles the entire permitting process on your behalf. We prepare and submit all required documentation to your local building department, coordinate with your HOA if applicable, and ensure every aspect of your project meets Florida Building Code requirements. You do not have to deal with a single piece of paperwork.",
    details: [
      "Complete permit application preparation and submission",
      "HOA architectural review package if required",
      "Building department liaison and follow-up",
      "Product approval and NOA verification",
      "Permit processing typically takes 2-4 weeks",
    ],
    duration: "2-4 weeks",
  },
  {
    step: "05",
    title: "Professional Installation",
    description:
      "Our factory-trained installation crews arrive on the scheduled date to begin your installation. We protect your home interior with drop cloths and plastic sheeting, carefully remove old windows and doors, prepare openings with proper flashing and waterproofing, and install your new impact products according to manufacturer specifications and Florida Building Code requirements.",
    details: [
      "Interior protection of furniture, floors, and walls",
      "Careful removal and disposal of old windows and doors",
      "Opening preparation including flashing and waterproofing",
      "Installation per manufacturer specifications",
      "Daily cleanup with final deep cleaning upon completion",
    ],
    duration: "1-5 days",
  },
  {
    step: "06",
    title: "Final Inspection",
    description:
      "After installation is complete, our lead installer conducts a thorough quality inspection of every window and door. We then schedule the building department final inspection to close your permit. Once passed, we do a complete walk-through with you to demonstrate operation, review maintenance tips, and ensure your complete satisfaction before we consider the project finished.",
    details: [
      "Internal quality inspection by lead installer",
      "Building department final inspection scheduled and passed",
      "Operation demonstration for every window and door",
      "Maintenance and care instructions provided",
      "Warranty registration and insurance documentation delivered",
    ],
    duration: "1-2 hours + inspection",
  },
];

const timelinePhases = [
  { phase: "Consultation & Measurement", weeks: "Week 1-2", color: "from-palm-400 to-palm-500" },
  { phase: "Product Selection & Ordering", weeks: "Week 2-3", color: "from-palm-500 to-ocean-500" },
  { phase: "Permitting & Approvals", weeks: "Week 3-6", color: "from-ocean-500 to-ocean-600" },
  { phase: "Manufacturing", weeks: "Week 4-8", color: "from-ocean-600 to-ocean-700" },
  { phase: "Professional Installation", weeks: "Week 6-10", color: "from-ocean-700 to-palm-600" },
  { phase: "Final Inspection & Closeout", weeks: "Week 8-12", color: "from-palm-600 to-sun-500" },
];

const expectations = [
  {
    title: "Clear Communication",
    description:
      "You will have a dedicated project coordinator who keeps you informed at every stage. We provide regular updates via your preferred communication method and are always available to answer questions.",
  },
  {
    title: "Respect for Your Home",
    description:
      "Our crews protect your furniture, floors, and landscaping during installation. We clean up thoroughly at the end of each day and leave your home better than we found it.",
  },
  {
    title: "Minimal Disruption",
    description:
      "We work efficiently to minimize the time we spend in your home. Most residential projects are completed in two to five days depending on the number of openings. You can remain in your home during installation.",
  },
  {
    title: "No Surprises",
    description:
      "The price in your written contract is the price you pay. We do not spring hidden fees, change orders, or unexpected charges. If unforeseen conditions arise, we discuss them with you before any additional work begins.",
  },
  {
    title: "Code Compliance Guaranteed",
    description:
      "Every installation meets or exceeds Florida Building Code and Miami-Dade County requirements for impact-rated products. We pull proper permits and schedule official inspections for every project without exception.",
  },
  {
    title: "Post-Installation Support",
    description:
      "Our relationship does not end at installation. We register your warranties, provide insurance documentation for premium discounts, and are always available if you need service or have questions about your products.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Step by Step</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Our <span className="gradient-text">Installation Process</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              From your first call to the final inspection, we make the impact window and door installation process smooth, transparent, and completely hassle-free. Here is exactly what to expect at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              6 Steps to a Protected Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have refined our process over 15 years and 5,000+ installations to make your experience seamless and stress-free.
            </p>
          </div>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-palm-300 to-palm-100 -mb-16" />
                )}
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center border border-palm-100">
                    <span className="text-2xl font-bold gradient-text-green font-display">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-gray-900 font-display">{step.title}</h3>
                      <span className="text-xs font-semibold bg-ocean-100 text-ocean-700 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{step.description}</p>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">What&apos;s Included</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="text-gray-600 text-sm">{detail}</span>
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

      {/* Timeline */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Most residential projects are completed within 8 to 12 weeks from contract signing to final inspection. Here is a typical timeline breakdown.
            </p>
          </div>
          <div className="space-y-4">
            {timelinePhases.map((item) => (
              <div key={item.phase} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-sm text-gray-400 font-medium">{item.weeks}</span>
                </div>
                <div className={`flex-1 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center px-6`}>
                  <span className="text-white font-bold text-sm">{item.phase}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { phase: "Permitting", time: "2-4 weeks" },
              { phase: "Manufacturing", time: "4-8 weeks" },
              { phase: "Installation", time: "1-5 days" },
              { phase: "Final Inspection", time: "1-2 weeks" },
            ].map((phase) => (
              <div key={phase.phase} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl font-bold font-display text-palm-400 mb-1">{phase.time}</div>
                <div className="text-sm text-gray-400 font-medium">{phase.phase}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">* Timelines may vary based on product availability, permit processing times, and project complexity.</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Your Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe the installation experience should be as excellent as the products themselves. Here is what you can count on throughout your project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-palm-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            The first step is your free in-home consultation. Schedule yours today and start the journey toward a safer, more comfortable home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Schedule Free Consultation
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
