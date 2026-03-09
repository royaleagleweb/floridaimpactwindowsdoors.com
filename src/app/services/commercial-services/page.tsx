import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Impact Windows & Doors in South Florida | Storefronts & Buildings",
  description:
    "Commercial impact window and door solutions for South Florida businesses. Storefronts, office buildings, HOA communities & multi-family properties in Miami-Dade, Broward & Palm Beach County.",
};

const benefits = [
  {
    icon: "🏢",
    title: "Complete Building Protection",
    description:
      "Protect your entire commercial property with impact-rated windows and doors that meet Florida Building Code requirements for commercial structures in the High Velocity Hurricane Zone.",
  },
  {
    icon: "📊",
    title: "Lower Operating Costs",
    description:
      "Energy efficient impact glass reduces solar heat gain and lowers HVAC costs across large commercial spaces, delivering meaningful operational savings for South Florida businesses year-round.",
  },
  {
    icon: "🏗️",
    title: "Minimal Business Disruption",
    description:
      "Our commercial installation crews work around your business schedule, including evenings and weekends, to minimize disruption to your operations, tenants, and customers during the project.",
  },
  {
    icon: "📋",
    title: "Full Code Compliance",
    description:
      "We handle all commercial permitting, engineering requirements, and inspections to ensure your project meets Florida Building Code, ADA accessibility standards, and local municipal regulations.",
  },
  {
    icon: "🔒",
    title: "Enhanced Property Security",
    description:
      "Impact windows and doors provide 24/7 security for commercial properties, deterring break-ins and protecting valuable inventory, equipment, and tenant spaces against forced entry.",
  },
  {
    icon: "📈",
    title: "Increased Property Value",
    description:
      "Commercial properties with full impact window and door systems command higher rents, attract quality tenants, and achieve stronger valuations in the competitive South Florida real estate market.",
  },
];

const commercialTypes = [
  {
    name: "Storefronts & Retail",
    description: "Impact-rated storefront glazing systems and entry doors that protect your business while maintaining attractive, inviting window displays and entrances for customers.",
  },
  {
    name: "Office Buildings",
    description: "Full impact window replacement and curtain wall solutions for office buildings of all sizes, improving tenant comfort, energy efficiency, and building code compliance.",
  },
  {
    name: "Multi-Family Residential",
    description: "Impact window and door packages for condominiums, apartments, and townhome communities. We work with HOAs and property managers for large-scale, coordinated installations.",
  },
  {
    name: "Hospitality & Hotels",
    description: "Impact glazing solutions for hotels, resorts, and vacation rental properties that protect guests, reduce energy costs, and minimize noise for a better hospitality experience.",
  },
  {
    name: "Healthcare Facilities",
    description: "Specialized impact window and door installations for medical offices, clinics, and healthcare facilities that require specific performance, safety, and accessibility standards.",
  },
  {
    name: "Educational Institutions",
    description: "Impact windows and doors for schools, universities, and daycare facilities. We prioritize student safety, energy efficiency, and minimal disruption to educational operations.",
  },
];

const faqs = [
  {
    question: "Do you handle large-scale commercial impact window projects?",
    answer:
      "Yes. We have extensive experience with large-scale commercial projects including multi-story office buildings, condominium associations with hundreds of units, retail plazas, and hospitality properties across South Florida. Our commercial division manages projects from initial engineering and product specification through permitting, phased installation, and final inspection. We assign a dedicated project manager to every commercial engagement to ensure clear communication, timeline adherence, and quality control throughout the project.",
  },
  {
    question: "How do you minimize disruption to business operations?",
    answer:
      "We develop a custom installation schedule around your business needs. For retail and hospitality properties, we can perform work during off-hours, evenings, or weekends. For multi-family buildings, we coordinate a unit-by-unit schedule with property management. For office buildings, we work floor-by-floor or zone-by-zone to keep the majority of the building operational at all times. We also maintain a clean, safe work area throughout the project and manage all debris removal daily.",
  },
  {
    question: "Can you work with our HOA or condo association board?",
    answer:
      "Absolutely. We regularly work with HOA boards, condo associations, and property management companies throughout South Florida. We provide detailed product specifications, engineering documentation, and reference projects for board review. We attend board meetings when requested, provide bulk pricing for association-wide projects, and coordinate installation schedules that work for the community. Many South Florida associations have chosen us as their preferred impact window vendor.",
  },
  {
    question: "What commercial permitting is required in South Florida?",
    answer:
      "Commercial impact window and door projects in Miami-Dade, Broward, and Palm Beach counties require building permits with engineering documentation, product approvals (including NOA for Miami-Dade), and inspections at multiple stages. The specific requirements vary by municipality, building type, and project scope. Our commercial team handles the entire permitting process, including coordination with your architect or engineer of record when required.",
  },
  {
    question: "Do you offer financing for commercial projects?",
    answer:
      "Yes. We offer commercial financing options including equipment financing, business lines of credit, and structured payment plans for qualifying businesses and property associations. For condo associations, we can structure bulk project pricing with flexible payment schedules that align with special assessment collection timelines. Contact our commercial division for a customized financing proposal tailored to your project.",
  },
  {
    question: "What warranty do you provide on commercial installations?",
    answer:
      "All commercial installations carry the full manufacturer product warranty, which typically ranges from 10 years to lifetime depending on the product line. Our installation workmanship warranty covers all labor and installation-related issues. For commercial projects, we also provide an extended service agreement option that includes periodic hardware adjustment, seal inspection, and preventive maintenance to keep your windows and doors performing optimally over the long term.",
  },
];

export default function CommercialServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Storefronts, Buildings & Multi-Family</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              <span className="gradient-text">Commercial</span> Impact Windows & Doors
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Impact window and door solutions for South Florida businesses, commercial buildings, storefronts, and multi-family residential properties. Full-service from engineering through installation across Miami-Dade, Broward, and Palm Beach County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
              >
                Request Commercial Quote
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

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Commercial Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            Impact Protection for South Florida Businesses and Commercial Properties
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Commercial properties in South Florida face the same hurricane threats as residential homes, but the stakes are often higher. A damaged storefront, office building, or multi-family complex affects not just one family but potentially dozens of businesses, hundreds of tenants, and millions of dollars in property and inventory. Protecting commercial glazing openings with impact-rated windows and doors is both a code requirement and a sound business decision that safeguards your investment, reduces operating costs, and maintains business continuity during and after a storm.
            </p>
            <p>
              Florida Impact Windows & Doors has a dedicated commercial division that specializes in impact window and door projects for businesses, property managers, HOA communities, and building owners across Miami-Dade, Broward, and Palm Beach counties. Our commercial team has the experience and capacity to handle projects ranging from single-storefront retail spaces on Las Olas Boulevard in Fort Lauderdale to full-building window replacements on high-rise condominiums in Sunny Isles Beach, Aventura, and Boca Raton.
            </p>
            <p>
              The commercial impact window market offers a broader range of product solutions than the residential market. In addition to standard window and door types, commercial projects often involve storefront glazing systems, curtain wall sections, fixed panel systems, commercial-grade sliding doors, and ADA-compliant entrance assemblies. We work with architects, engineers, general contractors, and building owners to specify the right products for each application, ensuring that performance requirements, aesthetic goals, budget constraints, and code compliance are all met.
            </p>
            <p>
              For condominium associations and multi-family property managers, we offer a specialized program that streamlines association-wide window and door replacement. We provide bulk pricing for the entire community, coordinate a phased installation schedule that minimizes disruption to residents, handle all permitting and inspections for every unit, and provide consolidated warranty documentation for the association&apos;s records. Many South Florida condo boards have chosen Florida Impact Windows & Doors as their exclusive impact window vendor after evaluating our product quality, installation expertise, and association-friendly project management approach.
            </p>
            <p>
              Our commercial project management process ensures that every engagement runs smoothly from start to finish. We assign a dedicated project manager who serves as your single point of contact throughout the project. This manager coordinates site surveys, product specification, engineering documentation, permitting, material delivery, installation scheduling, quality control, inspections, and punch-list completion. For property managers and building owners who need a reliable, experienced commercial partner for impact window and door projects in South Florida, Florida Impact Windows & Doors delivers professional results at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Types Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Commercial Properties We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide impact window and door solutions for every type of commercial property in South Florida.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialTypes.map((type) => (
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
              Benefits of Commercial Impact Windows
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

      {/* Our Commercial Process */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              How We Deliver Commercial Impact Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our proven commercial process ensures every project is delivered on schedule, within budget, and to the highest quality and code compliance standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment & Consultation",
                description: "Our commercial team visits your property to evaluate existing glazing, take detailed measurements, review structural conditions, and discuss project objectives, timeline, and budget with your management team.",
              },
              {
                step: "02",
                title: "Engineering & Specification",
                description: "We prepare engineered product specifications, wind load calculations, and installation drawings. All products are specified with the required Florida Product Approvals and NOAs for your building location and exposure category.",
              },
              {
                step: "03",
                title: "Phased Installation",
                description: "Our crews execute the installation in organized phases to minimize disruption to tenants and business operations. We offer flexible scheduling including evenings and weekends for occupied commercial buildings.",
              },
              {
                step: "04",
                title: "Inspection & Closeout",
                description: "We coordinate all required building inspections, provide as-built documentation, register manufacturer warranties, and deliver a complete project closeout package to your property management team.",
              },
            ].map((process) => (
              <div key={process.step} className="relative">
                <div className="text-6xl font-bold text-white/10 font-display mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Florida Impact Windows & Doors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Why Florida Impact Windows & Doors for Commercial Projects
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commercial division brings the specialized expertise, project management capability, and product knowledge needed for successful commercial impact window and door installations.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated commercial project manager for every engagement",
                  "Experience with multi-story, multi-unit, and high-rise projects",
                  "HOA and condo association bulk pricing programs",
                  "Flexible installation scheduling around business operations",
                  "Commercial permitting and engineering coordination",
                  "ADA-compliant door and entrance assembly options",
                  "Storefront glazing and curtain wall system expertise",
                  "Commercial financing and structured payment options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ocean-950 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">Request a Commercial Proposal</h3>
                <p className="text-gray-400 mb-6">
                  Whether you manage a single storefront, a multi-building office campus, or a 300-unit condominium association, our commercial team will prepare a comprehensive proposal tailored to your project.
                </p>
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
                >
                  Request Commercial Quote
                </Link>
                <p className="text-center text-gray-500 text-sm mt-4">No obligation. Detailed proposals within 48 hours.</p>
              </div>
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
              Explore Our Full Range of Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Impact Windows", href: "/services/impact-windows/", description: "Residential impact windows for homes across South Florida." },
              { title: "Impact Doors", href: "/services/impact-doors/", description: "Hurricane-rated sliding glass, French, entry, and patio doors." },
              { title: "Hurricane Shutters", href: "/services/hurricane-shutters/", description: "Accordion, roll-down, and panel shutters for added protection." },
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
              Commercial Services Across South Florida
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We serve commercial properties throughout the tri-county area, from downtown Miami to northern Palm Beach County.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { county: "Miami-Dade County", cities: ["Downtown Miami", "Brickell", "Miami Beach", "Coral Gables", "Doral", "Aventura", "Sunny Isles", "Hialeah"], href: "/areas/miami/" },
              { county: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Plantation", "Coral Springs", "Weston", "Sunrise", "Pompano Beach"], href: "/areas/fort-lauderdale/" },
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
              Commercial Impact Window Questions Answered
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
            Protect Your Commercial Property
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            From storefronts to high-rise buildings, Florida Impact Windows & Doors delivers professional commercial impact window and door solutions across South Florida. Request your detailed proposal today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Request Commercial Quote
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
