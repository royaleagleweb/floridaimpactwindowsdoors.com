import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Energy Efficient Impact Windows Fort Lauderdale | Low-E Glass & FPL Savings",
  description:
    "Save up to 30% on FPL bills with energy efficient impact windows in Fort Lauderdale & Broward County. Low-E coatings, argon gas fill, solar heat reduction. Hurricane rated. Free estimates.",
  alternates: { canonical: "/services/energy-efficient-windows/" },
};

const benefits = [
  {
    icon: "❄️",
    title: "Dramatically Lower Cooling Costs",
    description:
      "Energy efficient impact windows with Low-E glass reduce solar heat gain by up to 70%, significantly cutting your air conditioning costs during South Florida's 8+ months of hot, humid weather.",
  },
  {
    icon: "🌿",
    title: "Reduced Carbon Footprint",
    description:
      "By lowering your home's energy consumption, energy efficient windows reduce your carbon footprint and contribute to a more sustainable South Florida environment for future generations.",
  },
  {
    icon: "🛡️",
    title: "Hurricane Protection Included",
    description:
      "Unlike standard energy efficient windows sold elsewhere, ours are impact-rated for Category 5 hurricanes. You get energy savings and full storm protection in a single product.",
  },
  {
    icon: "🌡️",
    title: "Consistent Indoor Temperatures",
    description:
      "Argon gas fills and Low-E coatings create an insulating barrier that minimizes hot spots near windows, maintaining more consistent and comfortable temperatures throughout your home.",
  },
  {
    icon: "☀️",
    title: "UV Protection for Interiors",
    description:
      "Low-E coated glass blocks up to 99% of harmful ultraviolet rays, preventing fading and damage to your furniture, hardwood floors, rugs, and artwork throughout your South Florida home.",
  },
  {
    icon: "💵",
    title: "Increased Home Resale Value",
    description:
      "Energy efficient impact windows are a top value-adding upgrade for South Florida real estate. Buyers actively seek homes with impact windows that also lower ongoing energy costs.",
  },
];

const windowTypes = [
  { name: "Single Hung Windows", href: "/services/window-types/single-hung/" },
  { name: "Double Hung Windows", href: "/services/window-types/double-hung/" },
  { name: "Casement Windows", href: "/services/window-types/casement/" },
  { name: "Sliding Windows", href: "/services/window-types/sliding/" },
  { name: "Picture Windows", href: "/services/window-types/picture/" },
  { name: "Awning Windows", href: "/services/window-types/awning/" },
];

const faqs = [
  {
    question: "How do energy efficient impact windows reduce my energy bills?",
    answer:
      "Energy efficient impact windows use three key technologies to reduce energy costs. Low-E (low emissivity) coatings reflect solar infrared heat away from your interior while allowing visible light through. Argon gas fills between the glass panes provide better insulation than air alone. And laminated impact glass adds an additional insulating layer. Together, these features reduce solar heat gain by up to 70%, meaning your air conditioning system works far less to maintain comfortable temperatures during South Florida's long, hot seasons.",
  },
  {
    question: "What is Low-E glass and why does it matter in South Florida?",
    answer:
      "Low-E stands for low emissivity, referring to a microscopically thin metallic coating applied to the glass surface. This coating reflects infrared energy (heat) while transmitting visible light. In South Florida's tropical climate, where air conditioning accounts for 40% to 60% of a typical electricity bill, Low-E glass makes a significant impact by reducing the amount of solar heat that enters your home. The result is lower energy consumption, lower bills, and more consistent indoor comfort without sacrificing natural light.",
  },
  {
    question: "How much can I save on energy bills with new impact windows?",
    answer:
      "South Florida homeowners who replace old single-pane or standard double-pane windows with energy efficient impact windows typically see energy bill reductions of 15% to 30%. For an average household spending $200 to $350 per month on electricity, that translates to annual savings of $360 to $1,260. The exact savings depend on your home's size, the number of windows, the age and condition of your current windows, and your specific energy usage patterns.",
  },
  {
    question: "Are energy efficient windows the same as impact windows?",
    answer:
      "Not necessarily. Standard energy efficient windows sold in northern climates focus on insulation but are not impact-rated. In South Florida, you need windows that are both energy efficient and hurricane rated. At Florida Impact Windows & Doors, every energy efficient window we install is also a certified impact window, giving you the dual benefits of energy savings and Category 5 storm protection in a single product. This is especially important since Miami-Dade and Broward counties require impact-rated glazing.",
  },
  {
    question: "Do energy efficient impact windows qualify for any rebates or incentives?",
    answer:
      "Yes. Energy efficient windows may qualify for federal tax credits under the Energy Efficient Home Improvement Credit, which can offset a portion of the product cost. Additionally, some Florida utilities offer rebates for energy efficient home improvements. Beyond rebates, the wind mitigation insurance discount for whole-home impact windows typically saves 20% to 45% on annual windstorm premiums. We help you identify all available incentives during your consultation.",
  },
];

export default function EnergyEfficientWindowsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-sun-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/energy-efficient-windows/" }, { label: "Energy Efficient Windows" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Cut Energy Bills Up to 30%</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              <span className="gradient-text">Energy Efficient</span> Impact Windows for South Florida
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Low-E glass and argon gas technology that slashes your energy bills while providing Category 5 hurricane protection. Engineered specifically for the South Florida climate in Miami-Dade, Broward, and Palm Beach County.
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
                  src="/images/windows2.jpg"
                  alt="Energy efficient impact windows on a South Florida home"
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Energy Efficiency in South Florida</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Why Energy Efficient Windows Matter More in South Florida
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              South Florida&apos;s subtropical climate creates unique challenges for maintaining comfortable, affordable indoor environments. With average temperatures above 80 degrees for eight months of the year, intense UV radiation, and humidity levels that routinely exceed 70%, homes in Miami-Dade, Broward, and Palm Beach counties rely heavily on air conditioning. For most South Florida households, cooling costs represent 40% to 60% of the total electricity bill. Windows are the single largest source of unwanted heat gain in any home, making energy efficient glass technology one of the most impactful upgrades you can make.
            </p>
            <p>
              At Florida Impact Windows & Doors, we specialize in energy efficient impact windows that combine the latest glass technology with full hurricane protection. Our windows feature Low-E coatings that reflect solar infrared heat before it enters your home, argon gas fills between the glass panes that provide superior insulation compared to air, and laminated impact interlayers that add an additional thermal barrier. The result is a window that blocks up to 70% of solar heat gain while still allowing abundant natural light to brighten your interior.
            </p>
            <p>
              The practical impact of energy efficient windows on a South Florida home is immediate and measurable. Homeowners who replace old single-pane aluminum windows from the 1970s or 1980s with modern Low-E impact windows typically report energy bill reductions of 15% to 30% from the very first month. Over a year, those savings accumulate to hundreds or even thousands of dollars depending on the home&apos;s size and usage patterns. Beyond the financial savings, energy efficient windows also reduce the workload on your air conditioning system, extending its lifespan and reducing maintenance costs.
            </p>
            <p>
              Another often-overlooked benefit of energy efficient glass in South Florida is UV protection. The same Low-E coatings that block heat also block up to 99% of harmful ultraviolet radiation. For homeowners with hardwood floors, leather furniture, fine rugs, or artwork, this UV blocking prevents the gradual fading and deterioration caused by the region&apos;s intense tropical sun. The interior of your home stays vibrant and well-preserved for years longer than it would with standard clear glass.
            </p>
            <p>
              Because every energy efficient window we install is also a certified impact window, you receive the full spectrum of benefits in a single product: hurricane protection that meets Miami-Dade HVHZ standards, energy savings that lower your monthly bills, noise reduction for quieter living, UV blocking to preserve your interiors, and enhanced security against break-ins. There is no other home improvement in South Florida that delivers this combination of value, and our flexible financing makes the investment accessible to homeowners at every budget level.
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
              Benefits of Energy Efficient Impact Windows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Energy efficient impact windows deliver daily comfort and financial benefits that far exceed their cost over time.
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
                South Florida&apos;s Energy Efficient Window Experts
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We understand the specific energy challenges of the South Florida climate and recommend the optimal glass packages and window configurations to maximize your savings.
              </p>
              <ul className="space-y-4">
                {[
                  "Climate-specific glass selection for maximum heat rejection",
                  "Low-E coatings optimized for South Florida's solar angles",
                  "Argon gas fills for superior thermal insulation performance",
                  "Energy audit assistance to quantify your potential savings",
                  "Federal tax credit and utility rebate guidance",
                  "Combined hurricane protection and energy efficiency in one product",
                  "Premium brands including PGT, CGI, ES Windows, and CWS",
                  "Financing options that can be offset by energy savings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 font-display">Calculate Your Savings</h3>
              <p className="text-gray-400 mb-6">
                Schedule a free consultation and we will evaluate your current windows, estimate your energy savings, and provide a detailed proposal with all available incentives.
              </p>
              <Link
                href="/get-estimate/"
                className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
              >
                Get Free Energy Assessment
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
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Available Styles</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Energy Efficient Window Styles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our impact window styles are available with energy efficient Low-E glass and argon gas fills.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {windowTypes.map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="flex items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-palm-300 hover:bg-palm-50 transition-all group bg-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-palm-100 flex items-center justify-center group-hover:bg-palm-200 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-palm-700 transition-colors">{type.name}</span>
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
              Energy Efficient Windows Across South Florida
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { county: "Miami-Dade County", cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Homestead", "Pinecrest"], href: "/areas/miami/" },
              { county: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Weston", "Coral Springs", "Plantation", "Sunrise", "Davie"], href: "/areas/fort-lauderdale/" },
              { county: "Palm Beach County", cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Boynton Beach", "Lake Worth"], href: "/areas/west-palm-beach/" },
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
              Energy Efficient Window Questions Answered
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
            Start Saving on Energy Bills Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Upgrade to energy efficient impact windows and enjoy lower energy bills, hurricane protection, and a more comfortable home. Free consultations available across South Florida.
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
