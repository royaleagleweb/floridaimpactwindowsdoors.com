import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ServiceAreaLinks from "@/components/ServiceAreaLinks";

export const metadata: Metadata = {
  title: "Door Replacement in South Florida | Impact Sliding, Entry & French Doors",
  description:
    "Professional door replacement in Miami-Dade, Broward & Palm Beach County. Upgrade to impact-rated sliding glass, French, entry & patio doors. Free in-home estimates from Florida Impact Windows & Doors.",
};

const benefits = [
  {
    icon: "🚪",
    title: "Transform Your Entryways",
    description:
      "New impact doors completely refresh your home's entrances with modern designs, premium hardware, and expansive glass that enhances both street-side curb appeal and backyard living areas.",
  },
  {
    icon: "🌀",
    title: "Hurricane-Rated Upgrades",
    description:
      "Replace outdated non-impact doors with modern hurricane-rated models that meet current Florida Building Code and Miami-Dade HVHZ standards. Full Category 5 wind and debris resistance.",
  },
  {
    icon: "🌤️",
    title: "Indoor-Outdoor Flow",
    description:
      "New impact sliding glass and French doors create seamless transitions between your interior living spaces and outdoor patios, pools, and lanais, perfect for South Florida's year-round warm climate.",
  },
  {
    icon: "🔒",
    title: "Advanced Security Systems",
    description:
      "Modern impact doors feature multi-point locking mechanisms, reinforced strike plates, and laminated glass that provide far superior security compared to older single-lock door systems.",
  },
  {
    icon: "🌡️",
    title: "Better Energy Performance",
    description:
      "Replace drafty, poorly insulated doors with energy efficient impact models featuring Low-E glass and insulated frames that keep cool air inside and hot Florida air outside.",
  },
  {
    icon: "💰",
    title: "Strong Return on Investment",
    description:
      "Door replacement consistently ranks among the highest-ROI home improvements in South Florida. New impact doors increase property value, lower insurance costs, and reduce energy bills simultaneously.",
  },
];

const doorTypes = [
  { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
  { name: "Garage Doors", href: "/services/door-types/garage/" },
];

const faqs = [
  {
    question: "When should I replace my doors in South Florida?",
    answer:
      "You should consider door replacement when you notice difficulty opening or closing, visible rust or frame deterioration, air leaks around the edges, broken or cracked glass, outdated locks that compromise security, or when your doors are not impact-rated and you want hurricane protection. Many older South Florida homes from the 1960s through 1990s have original sliding glass doors and entry doors that are well past their effective lifespan and should be replaced with modern impact-rated products.",
  },
  {
    question: "How much does door replacement cost in South Florida?",
    answer:
      "Door replacement costs vary by type and size. Standard impact sliding glass door replacement typically costs $1,800 to $4,500 installed. Impact entry door replacement ranges from $2,000 to $6,000 depending on style and decorative options. French door replacement generally costs $2,500 to $5,500. These prices include removal of the old door, installation of the new impact door, hardware, weatherproofing, trim finishing, and permit handling. We offer flexible financing options for every budget.",
  },
  {
    question: "Can you replace a standard sliding door with a wider impact sliding door?",
    answer:
      "Yes. If you want to widen an existing door opening to install a larger impact sliding glass door, our team can modify the structural opening to accommodate the new size. This involves header and framing modifications, which we handle as part of the project. We also install multi-panel sliding door systems that provide extra-wide openings for homes that want to maximize their connection to outdoor living spaces.",
  },
  {
    question: "How long does door replacement take?",
    answer:
      "A single door replacement is typically completed in half a day to a full day depending on the type and any structural modifications needed. If you are replacing multiple doors throughout your home, expect 1 to 3 days of on-site work. The total project timeline from order to completion is usually 4 to 8 weeks, with manufacturing accounting for most of that lead time. We coordinate all permits and schedule inspections after installation.",
  },
  {
    question: "Do impact doors come in different colors and styles?",
    answer:
      "Absolutely. Modern impact doors are available in a wide range of frame colors including white, bronze, black, beige, and custom powder-coat options. Entry doors come in wood-grain finishes, smooth finishes, and decorative glass configurations. Sliding glass doors offer slim-profile modern designs or traditional styles. Hardware options range from contemporary minimalist to classic coastal. We bring samples and catalogs to your consultation so you can see and feel the options in person.",
  },
];

export default function DoorReplacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Sliding, Entry & French Doors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Expert <span className="gradient-text">Door Replacement</span> Across South Florida
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Upgrade your home&apos;s doors to modern impact-rated models that provide hurricane protection, enhanced security, and beautiful aesthetics. Serving Miami-Dade, Broward, and Palm Beach County.
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
                  src="/images/doors 3.jpg"
                  alt="Door replacement with impact doors on a South Florida home"
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
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Door Replacement</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Modernize Your South Florida Home with Impact Door Replacement
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Doors are among the most visible and frequently used elements of any South Florida home. The front entry door creates a first impression for every visitor. The sliding glass doors at the back of the house define how your family connects with the patio, pool, and outdoor living areas that are central to the South Florida lifestyle. When these doors become worn, damaged, or simply outdated, replacing them with modern impact-rated models delivers an immediate and transformative improvement to both the function and appearance of your home.
            </p>
            <p>
              At Florida Impact Windows & Doors, we specialize in door replacement projects of every size, from a single entry door upgrade to a complete replacement of every door in the home. Our most common project is sliding glass door replacement, which is in high demand across South Florida because so many homes built from the 1960s through the 1990s still have their original non-impact aluminum sliders. These aging doors are typically difficult to operate, poorly insulated, noisy, and provide zero hurricane protection. Replacing them with modern impact sliding glass doors is one of the best improvements a South Florida homeowner can make.
            </p>
            <p>
              Every door replacement project begins with a detailed assessment at your home. Our project manager evaluates the condition of your existing doors, measures each opening precisely, and discusses your preferences for style, color, hardware, and glass options. We then prepare a comprehensive proposal that includes product specifications, pricing, a timeline, and financing options. Once you approve the project, we handle all permitting, order your custom doors, and schedule installation at a date that works for your family.
            </p>
            <p>
              Installation quality is critical for doors because they must withstand both daily use and extreme storm conditions. Our certified crews use manufacturer-approved installation methods including proper structural anchoring, threshold waterproofing, and multi-point lock alignment. We set and adjust every door for smooth operation, ensure all weatherstripping creates a proper seal, and finish both the interior and exterior trim to a clean, professional standard. After installation, we coordinate the required building inspection and provide you with all warranty documentation.
            </p>
            <p>
              Whether your South Florida home needs a grand new entry door to make a statement in Coral Gables, a wider sliding glass system for a waterfront home in Fort Lauderdale, elegant French doors for a formal dining room in Boca Raton, or a complete door replacement package for a family home in Pembroke Pines, Florida Impact Windows & Doors has the product selection, installation expertise, and competitive pricing to make your project a success.
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
              Benefits of Professional Door Replacement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              New impact doors deliver immediate benefits that enhance your daily living and long-term property value.
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
                South Florida&apos;s Door Replacement Professionals
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Door replacement demands precision fitting, structural expertise, and attention to waterproofing details that only experienced specialists can deliver consistently.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert measurement for perfect custom door fit",
                  "Structural opening modifications when needed",
                  "Factory-trained installers for all major brands",
                  "Proper threshold and sill waterproofing systems",
                  "Multi-point lock installation and precision adjustment",
                  "Complete old door removal, disposal, and site cleanup",
                  "All permitting and inspection coordination included",
                  "Post-installation service for hardware adjustment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Plan Your Door Replacement</h3>
              <p className="text-gray-400 mb-8">
                Our door replacement specialists will assess your existing doors, show you product options, and provide a detailed estimate tailored to your needs and budget.
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

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              4 Simple Steps to New Impact Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final inspection, we handle every detail so your door replacement project is smooth and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We visit your home, assess your existing doors, take precise measurements, and discuss your style preferences, performance needs, and budget. You receive a detailed written estimate the same day.",
              },
              {
                step: "02",
                title: "Product Selection",
                description: "Choose from our curated lineup of premium impact door brands. We bring samples, color swatches, and hardware options so you can see and feel the materials before making your final selection.",
              },
              {
                step: "03",
                title: "Expert Installation",
                description: "Our certified crews remove your old doors and install your new impact doors with factory-approved methods. We handle structural anchoring, weatherproofing, hardware alignment, and trim finishing.",
              },
              {
                step: "04",
                title: "Final Inspection",
                description: "We coordinate the required building department inspection to verify code compliance. After approval, we walk you through your new doors, register warranties, and ensure your complete satisfaction.",
              },
            ].map((process) => (
              <div key={process.step} className="relative">
                <div className="text-6xl font-bold text-palm-100 font-display mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Carry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Brands</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Premium Impact Door Brands We Carry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are authorized dealers for the top impact door manufacturers in the industry. Each brand offers distinct advantages in design, durability, and warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "PGT Custom Windows + Doors",
                description: "Industry leader known for their WinGuard and EnergyVue product lines. Wide range of sliding glass, French, and entry door configurations with excellent warranty coverage.",
              },
              {
                name: "CGI Windows & Doors",
                description: "Premium manufacturer offering the Sentinel and Estate series. Renowned for architectural-grade designs, slim sightlines, and superior impact resistance ratings.",
              },
              {
                name: "ES Windows",
                description: "High-performance impact doors engineered for South Florida conditions. Known for competitive pricing, fast lead times, and strong energy efficiency ratings.",
              },
              {
                name: "Custom Window Systems",
                description: "Versatile manufacturer offering a broad catalog of impact door styles. Excellent value with reliable performance and a solid manufacturer warranty program.",
              },
            ].map((brand) => (
              <div key={brand.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{brand.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-ocean-600 uppercase tracking-wider mb-3">Door Styles</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Impact Door Styles for Replacement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a full range of impact door styles to replace any door in your South Florida home.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {doorTypes.map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="flex items-center gap-3 p-5 rounded-2xl border border-gray-200 hover:border-ocean-300 hover:bg-ocean-50 transition-all group bg-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center group-hover:bg-ocean-200 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" /><rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} /></svg>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-ocean-700 transition-colors">{type.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services/window-replacement/" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              Also need window replacement? Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks
        serviceSlug="door-replacement"
        title="Door Replacement Throughout South Florida"
        counties={[
          { county: "Miami-Dade County", cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Pinecrest", "Key Biscayne"], href: "/areas/miami/" },
          { county: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Weston", "Coral Springs", "Plantation", "Parkland", "Davie"], href: "/areas/fort-lauderdale/" },
          { county: "Palm Beach County", cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Boynton Beach", "Royal Palm Beach"], href: "/areas/west-palm-beach/" },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Door Replacement Questions Answered
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
            Upgrade Your Doors Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Replace aging, outdated doors with beautiful, hurricane-rated impact models. Free in-home consultations available throughout Miami-Dade, Broward, and Palm Beach County.
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
