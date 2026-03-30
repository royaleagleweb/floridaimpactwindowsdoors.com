import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getCitiesByCounty } from "@/data/cities";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Hurricane Shutters in ${city.name}, FL | Florida Impact Windows & Doors`,
    description: `Professional hurricane shutter installation in ${city.name}, Florida. Accordion, roll-down, and colonial shutters for ${city.county} County homes. Free estimates. Call (754) 600-4876.`,
    alternates: { canonical: `https://floridaimpactwindowsdoors.com/areas/${slug}/hurricane-shutters/` },
  };
}

export default async function CityHurricaneShuttersPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const countyCities = getCitiesByCounty(city.county).filter((c) => c.slug !== city.slug).slice(0, 8);

  const shutterTypes = [
    { name: "Accordion Shutters", slug: "accordion", description: "Permanently mounted folding shutters that slide along a top and bottom track. Fast deployment and reliable protection for any opening size." },
    { name: "Roll-Down Shutters", slug: "roll-down", description: "Motorized or manual roll-down shutters housed in a compact overhead box. The ultimate in convenience with one-touch storm protection." },
    { name: "Colonial Shutters", slug: "colonial", description: "Decorative louvered shutters that flank your windows and latch closed for storms. Classic Southern charm meets hurricane-grade strength." },
    { name: "Bahama Shutters", slug: "bahama", description: "Top-hinged tropical-style shutters that prop open for shade and lower to lock position for hurricane protection." },
    { name: "Storm Panel Shutters", slug: "storm-panels", description: "Removable aluminum or clear polycarbonate panels that bolt into pre-installed tracks. An affordable and proven protection option." },
    { name: "Clear Storm Panels", slug: "clear-panels", description: "Transparent polycarbonate panels that let natural light in while providing tested hurricane protection. See outside during the storm." },
  ];

  const benefits = [
    { title: "Affordable Storm Protection", description: `Hurricane shutters offer ${city.name} homeowners a budget-friendly alternative to full impact window replacement while still meeting ${city.county} County code requirements for hurricane protection.` },
    { title: "Rapid Deployment", description: `When a storm threatens ${city.name}, accordion and roll-down shutters can be closed in minutes. No scrambling for plywood or waiting for installation crews.` },
    { title: "Insurance Discount Eligible", description: `${city.name} homeowners with approved hurricane shutters on all openings qualify for wind mitigation insurance discounts, often reducing premiums by 20% to 35%.` },
    { title: "Flexible Coverage Options", description: `Protect specific openings in your ${city.name} home or cover every window and door. Mix and match shutter types based on each opening's needs and your budget.` },
    { title: "Durable in Salt Air", description: `Our shutters are constructed from corrosion-resistant aluminum designed to withstand the salt air and humidity that ${city.name} and ${city.county} County are known for.` },
    { title: "Increased Property Security", description: `Closed hurricane shutters also deter break-ins, providing an extra layer of physical security for your ${city.name} home when you travel or during off-season.` },
  ];

  const faqs = [
    {
      q: `How much do hurricane shutters cost in ${city.name}?`,
      a: `Hurricane shutter costs in ${city.name} depend on the type and number of openings. Storm panels are the most affordable option, starting around $7 to $15 per square foot. Accordion shutters typically range from $15 to $30 per square foot, while motorized roll-down shutters range from $25 to $60 per square foot. Florida Impact Windows & Doors provides free in-home estimates in ${city.name} so you can compare options and find the best solution for your budget.`,
    },
    {
      q: `Which hurricane shutters are best for ${city.name} homes?`,
      a: `The ideal shutter type for your ${city.name} home depends on your priorities. Roll-down shutters offer the most convenience, especially for multi-story homes or if you travel frequently. Accordion shutters provide excellent value with easy manual operation. Colonial and Bahama shutters add daily curb appeal to ${city.name} homes while providing on-demand storm protection. Our experts will recommend the best option during your free consultation based on your home layout and ${city.county} County requirements.`,
    },
    {
      q: `Do hurricane shutters meet ${city.county} County building codes?`,
      a: `Yes, all hurricane shutters we install in ${city.name} are tested and approved to meet Florida Building Code requirements, including the strict High Velocity Hurricane Zone standards enforced in ${city.county} County. Every product carries a Florida Product Approval number, and Florida Impact Windows & Doors handles all required ${city.county} County permits and inspections for your installation.`,
    },
    {
      q: `Can I install hurricane shutters on a home that already has impact windows in ${city.name}?`,
      a: `While most ${city.name} homes choose one system or the other, you can add hurricane shutters over non-impact windows and standard doors while keeping impact products on other openings. This hybrid approach is common in ${city.name} when homeowners want full protection but have budget constraints. Our team will help you design a coverage plan that meets ${city.county} County code for every opening.`,
    },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" }, { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://floridaimpactwindowsdoors.com/areas/" }, { "@type": "ListItem", position: 3, name: city.name, item: `https://floridaimpactwindowsdoors.com/areas/${city.slug}/` }, { "@type": "ListItem", position: 4, name: "Hurricane Shutters" }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: `Hurricane Shutter Installation in ${city.name}, FL`, description: `Professional hurricane shutter installation in ${city.name}, ${city.county} County, Florida.`, provider: { "@type": "HomeAndConstructionBusiness", name: "Florida Impact Windows & Doors", telephone: "+1-754-600-4876" }, areaServed: { "@type": "City", name: city.name, containedIn: { "@type": "State", name: "Florida" } }, serviceType: "Hurricane Shutter Installation" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-palm-600">Home</Link>
            <span>/</span>
            <Link href="/areas/" className="hover:text-palm-600">Service Areas</Link>
            <span>/</span>
            <Link href={`/areas/${city.slug}/`} className="hover:text-palm-600">{city.name}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Hurricane Shutters</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">{city.county} County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Hurricane Shutters in{" "}
              <span className="gradient-text">{city.name}, Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Professional hurricane shutter installation in {city.name}. From accordion and roll-down to colonial and storm panels, we provide trusted storm protection solutions for every {city.county} County home and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-estimate/" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25">
                Get Free Estimate in {city.name}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+17546004876" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (754) 600-4876
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hurricane Shutters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Hurricane Shutters?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why {city.name} Homeowners Choose Hurricane Shutters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hurricane shutters have been the go-to storm protection for South Florida homeowners for decades. In {city.name}, where {city.county} County enforces some of the nation&apos;s strictest building codes, approved hurricane shutters provide a reliable and cost-effective way to protect every opening in your home against Category 5 winds and flying debris.
                </p>
                <p>
                  Unlike impact windows, which are a permanent fixture, hurricane shutters give {city.name} homeowners the flexibility of on-demand protection. Modern options like motorized roll-down shutters can be deployed with the press of a button, while accordion shutters fold neatly to the side when not in use. For homeowners who want traditional aesthetics, colonial and Bahama shutters double as attractive architectural features year-round.
                </p>
                <p>
                  Florida Impact Windows & Doors offers every type of hurricane shutter approved for use in {city.county} County. Our installation team ensures that your shutters are properly anchored, sealed, and tested to pass the required {city.county} County inspection. We handle all permitting, and we stand behind every installation with a comprehensive warranty.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "185 MPH", label: "Wind Protection" },
                { value: "Up to 35%", label: "Insurance Savings" },
                { value: "< 5 Min", label: "Deployment Time" },
                { value: "25+ Years", label: "Product Lifespan" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                  <div className="text-2xl font-bold font-display gradient-text-green mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shutter Types Available */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Shutter Styles</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Hurricane Shutter Types Available in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We install every major type of hurricane shutter approved for {city.county} County. Choose the style that fits your {city.name} home&apos;s architecture, your lifestyle, and your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shutterTypes.map((type) => (
              <div key={type.slug} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 group-hover:bg-palm-100 transition-colors">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v18M15 3v18M3 9h18M3 15h18" /><rect x="3" y="3" width="18" height="18" rx="1" strokeWidth={1.5} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">{type.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              Benefits of Hurricane Shutters in {city.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3 font-display">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Hurricane Shutters FAQ for {city.name}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-palm-600 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">
            Other Services in {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Impact Windows", href: `/areas/${city.slug}/impact-windows/` },
              { name: "Impact Doors", href: `/areas/${city.slug}/impact-doors/` },
              { name: "Window Replacement", href: `/areas/${city.slug}/window-replacement/` },
              { name: "Door Replacement", href: `/areas/${city.slug}/door-replacement/` },
            ].map((service) => (
              <Link key={service.name} href={service.href} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all font-semibold text-gray-700 hover:text-palm-600">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">
            Hurricane Shutters Near {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countyCities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}/hurricane-shutters/`} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-palm-50 hover:text-palm-600 transition-all text-gray-700 font-medium border border-gray-100 hover:border-palm-200">
                Shutters in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready for Hurricane Shutters in {city.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for hurricane shutter installation in {city.name}. We will assess every opening, discuss your options, and recommend the best shutter system for your home and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-white text-ocean-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
