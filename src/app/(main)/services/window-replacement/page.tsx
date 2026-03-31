import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Window Replacement Fort Lauderdale | Upgrade to Hurricane Impact Windows",
  description:
    "Full-service window replacement in Fort Lauderdale, Broward & Palm Beach County. Replace aging windows with hurricane-rated impact glass. Energy efficient & insurance savings. Free estimates.",
  alternates: { canonical: "/services/window-replacement/" },
};

const benefits = [
  {
    icon: "🏠",
    title: "Complete Home Transformation",
    description:
      "New impact windows dramatically upgrade your home's appearance inside and out. Modern frames, sleek profiles, and crystal-clear glass replace the aged, oxidized aluminum windows common in older South Florida homes.",
  },
  {
    icon: "🌀",
    title: "Modern Hurricane Protection",
    description:
      "Replace outdated non-impact windows with current-generation hurricane-rated glass that meets today's stringent Florida Building Code requirements and Miami-Dade High Velocity Hurricane Zone standards.",
  },
  {
    icon: "📉",
    title: "Lower Monthly Energy Bills",
    description:
      "Replacing old single-pane aluminum windows with insulated impact glass can reduce your cooling costs by 15% to 30%, a significant savings given South Florida's year-round air conditioning demands.",
  },
  {
    icon: "🔕",
    title: "Quieter Indoor Living",
    description:
      "New impact windows with laminated glass dramatically reduce outside noise from traffic, lawn equipment, construction, and neighborhood activity throughout your South Florida home.",
  },
  {
    icon: "📈",
    title: "Increased Property Value",
    description:
      "Impact window replacement is one of the highest-return home improvements in South Florida real estate. Buyers pay a premium for homes already protected with modern impact windows.",
  },
  {
    icon: "🛠️",
    title: "Eliminate Maintenance Problems",
    description:
      "Say goodbye to stuck windows, broken balances, foggy glass, corroded frames, and leaking seals. Modern impact windows are engineered for decades of trouble-free performance in South Florida's harsh climate.",
  },
];

const replacementSigns = [
  "Windows that are difficult to open, close, or lock properly",
  "Visible condensation or fog between the glass panes",
  "Drafts, air leaks, or whistling sounds during windy weather",
  "Cracked, chipped, or deteriorating window frames",
  "Single-pane glass that provides no insulation or storm protection",
  "Excessive outside noise that penetrates through closed windows",
  "Rising energy bills due to poor window insulation",
  "Non-impact windows in a hurricane-prone area",
];

const windowTypes = [
  { name: "Single Hung", href: "/services/window-types/single-hung/" },
  { name: "Double Hung", href: "/services/window-types/double-hung/" },
  { name: "Casement", href: "/services/window-types/casement/" },
  { name: "Awning", href: "/services/window-types/awning/" },
  { name: "Sliding", href: "/services/window-types/sliding/" },
  { name: "Picture", href: "/services/window-types/picture/" },
  { name: "Bay Windows", href: "/services/window-types/bay/" },
  { name: "Bow Windows", href: "/services/window-types/bow/" },
];

const faqs = [
  {
    question: "How do I know if my South Florida windows need to be replaced?",
    answer:
      "Common signs that your windows need replacement include difficulty opening or closing, visible frame deterioration or corrosion, condensation between glass panes, drafts or air leaks, excessive noise penetration, and rising energy bills. If your home was built before 2002 in South Florida, your windows almost certainly pre-date current impact requirements and should be evaluated. We offer free in-home assessments to determine the condition of your windows and recommend the best course of action.",
  },
  {
    question: "How much does window replacement cost in South Florida?",
    answer:
      "Window replacement costs in South Florida depend on the number of windows, sizes, styles, and the impact glass options selected. On average, homeowners invest between $500 and $1,500 per window including professional installation and permit handling. A full-home replacement for an average-sized South Florida home with 12 to 18 windows typically ranges from $8,000 to $25,000. We provide free detailed estimates and offer financing options starting at $89 per month.",
  },
  {
    question: "Can I replace my windows one room at a time?",
    answer:
      "Yes. Many South Florida homeowners choose to replace their windows in phases, prioritizing the most critical or visible areas first. Common approaches include starting with the front-facing windows for curb appeal, replacing the largest openings first for maximum protection, or doing one floor at a time. We structure our proposals to accommodate phased replacement and can schedule multiple visits over time as your budget allows.",
  },
  {
    question: "How long does a full window replacement take?",
    answer:
      "A complete window replacement for an average South Florida home takes 1 to 3 days of on-site installation work. Our crews typically replace 6 to 10 windows per day depending on size and complexity. The total project timeline from order to completion is usually 4 to 8 weeks, with most of that time dedicated to manufacturing your custom-sized impact windows. We coordinate all permits before installation and schedule inspections after completion.",
  },
  {
    question: "Will replacing my windows require drywall or stucco repair?",
    answer:
      "In most cases, impact window replacement can be completed with minimal disruption to your interior drywall or exterior stucco. Our installation method involves removing the old window and installing the new impact window into the existing opening, then sealing and finishing the interior and exterior trim. Some homes with unusual framing conditions or significant structural deterioration may require minor stucco patching, which our crew handles as part of the installation.",
  },
  {
    question: "Do I need a permit to replace windows in South Florida?",
    answer:
      "Yes. All window replacements in Miami-Dade, Broward, and Palm Beach counties require a building permit. The permit ensures that the new windows meet current Florida Building Code requirements for hurricane protection, energy efficiency, and structural integrity. Florida Impact Windows & Doors handles the entire permit process for you, from application through final inspection, at no additional charge. This is included in every window replacement project.",
  },
];

export default function WindowReplacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/window-replacement/" }, { label: "Window Replacement" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Full-Service Window Replacement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Professional <span className="gradient-text">Window Replacement</span> in South Florida
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Upgrade aging, damaged, or non-impact windows to modern hurricane-rated impact glass. Complete turnkey replacement service for homes throughout Miami-Dade, Broward, and Palm Beach County.
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
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/windows6.jpg"
                  alt="Window replacement with impact windows on a South Florida home"
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Window Replacement</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Upgrade Your South Florida Home with New Impact Windows
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Thousands of homes across South Florida still have their original windows from the 1960s, 1970s, 1980s, and even the 1990s. These older windows were typically single-pane aluminum designs that provided no hurricane protection, minimal insulation, and little resistance to noise or UV penetration. Over decades of exposure to South Florida&apos;s salt air, humidity, UV radiation, and occasional hurricane-force weather, these windows deteriorate significantly, with corroded frames, failed seals, foggy glass, and hardware that no longer functions properly.
            </p>
            <p>
              Replacing aging windows with modern impact-rated glass is one of the most transformative improvements you can make to a South Florida home. New impact windows deliver a complete upgrade in every measurable dimension: hurricane protection rated for Category 5 storms, energy efficiency that reduces cooling costs by 15% to 30%, noise reduction of up to 60%, UV blocking that preserves your interior finishes, and enhanced security against break-ins. The visual transformation is equally dramatic, with clean modern frames, crystal-clear glass, and smooth operation replacing the tired, corroded windows of the past.
            </p>
            <p>
              At Florida Impact Windows & Doors, window replacement is our core business. We have replaced thousands of windows across Miami-Dade, Broward, and Palm Beach counties in homes ranging from modest single-family residences in Hialeah and Miramar to luxury waterfront estates in Coral Gables, Fort Lauderdale, and Palm Beach. Every project begins with a thorough in-home assessment where we evaluate the condition of your existing windows, take precise measurements of every opening, and discuss your preferences for style, glass type, and budget.
            </p>
            <p>
              Our replacement process is designed to minimize disruption to your daily life. We handle all permitting with your local building department, order your custom-sized impact windows from our manufacturing partners, and schedule installation at a time that works for your family. Our in-house crews complete most whole-home replacements in one to three days, carefully removing old windows, installing new impact windows with proper structural anchoring and waterproofing, and finishing both interior and exterior trim. We clean up completely before leaving and schedule the final building inspection on your behalf.
            </p>
            <p>
              For homeowners concerned about cost, we offer flexible financing options that make window replacement accessible at every budget level. Many clients find that the combination of lower energy bills, reduced insurance premiums, and increased property value means their new impact windows effectively pay for themselves over time. We also accommodate phased replacement projects, allowing you to upgrade your home room by room or section by section as your budget permits.
            </p>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Is It Time?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Signs Your Windows Need Replacing
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                If you notice any of the following issues with your current windows, it is time to consider a professional replacement with modern impact windows.
              </p>
              <ul className="space-y-4">
                {replacementSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sun-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Free Window Assessment</h3>
              <p className="text-gray-600 mb-6">
                Not sure if your windows need replacing? Our experts will inspect your windows at no cost and provide an honest evaluation with no obligation to proceed.
              </p>
              <Link
                href="/get-estimate/"
                className="block w-full text-center bg-gradient-to-r from-palm-600 to-palm-500 text-white px-8 py-4 rounded-full font-bold hover:from-palm-700 hover:to-palm-600 transition-all shadow-lg shadow-palm-500/25"
              >
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Benefits of Professional Window Replacement
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
                Why Florida Impact Windows & Doors for Your Replacement Project
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Window replacement requires precise measurement, expert installation, and thorough waterproofing. Our team delivers professional results on every project across South Florida.
              </p>
              <ul className="space-y-4">
                {[
                  "Over 5,000 windows replaced across South Florida",
                  "Precise laser measurement for custom-fit windows",
                  "In-house crews with manufacturer-certified training",
                  "Complete removal, disposal, and cleanup included",
                  "Proper structural anchoring and waterproof sealing",
                  "Full permitting and final inspection coordination",
                  "Interior and exterior trim finishing included",
                  "Financing options starting at $89 per month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Start Your Window Replacement</h3>
              <p className="text-gray-400 mb-8">
                Get a detailed, no-pressure estimate for replacing your windows with modern impact glass. Our specialists handle everything from measurement to final inspection.
              </p>
              <Link
                href="/get-estimate/"
                className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
              >
                Get Free Replacement Estimate
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
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Replacement Options</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Window Styles Available for Replacement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Replace your old windows with any of these modern impact-rated styles to match your home and preferences.
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
                  <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-palm-700 transition-colors">{type.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services/door-replacement/" className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors">
              Also need door replacement? Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks
        serviceSlug="window-replacement"
        title="Window Replacement Throughout South Florida"
        counties={[
          { county: "Miami-Dade County", cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Kendall", "Pinecrest"], href: "/areas/miami/" },
          { county: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Coral Springs", "Plantation", "Weston", "Pompano Beach"], href: "/areas/fort-lauderdale/" },
          { county: "Palm Beach County", cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Boynton Beach", "Greenacres"], href: "/areas/west-palm-beach/" },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Window Replacement Questions Answered
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
            Ready to Replace Your Windows?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your home with modern impact windows. Schedule your free in-home assessment and get a detailed, no-obligation estimate for your window replacement project.
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
