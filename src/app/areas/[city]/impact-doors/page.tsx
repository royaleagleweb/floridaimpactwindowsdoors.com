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
    title: `Impact Doors in ${city.name}, FL | Florida Impact Windows & Doors`,
    description: `Professional impact door installation in ${city.name}, Florida. Hurricane-rated entry, sliding glass, and French doors for ${city.county} County homes. Free estimates. Call (786) 555-1234.`,
  };
}

export default async function CityImpactDoorsPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const countyCities = getCitiesByCounty(city.county).filter((c) => c.slug !== city.slug).slice(0, 8);

  const doorTypes = [
    { name: "Sliding Glass Impact Doors", slug: "sliding-glass", description: "Wide-panel hurricane-rated sliding doors that bring the outdoors in. Perfect for patios, lanais, and pool areas." },
    { name: "French Impact Doors", slug: "french", description: "Elegant double-swing doors with impact-rated glass. Classic style meets Category 5 hurricane protection." },
    { name: "Entry Impact Doors", slug: "entry", description: "Make a bold first impression with a hurricane-rated front door that combines curb appeal with maximum security." },
    { name: "Patio Impact Doors", slug: "patio", description: "Durable impact-rated patio doors built for South Florida living. Smooth operation and airtight seal." },
    { name: "Pivot Impact Doors", slug: "pivot", description: "Modern oversized pivot doors with impact glass. A striking architectural statement with full storm protection." },
    { name: "Multi-Slide Impact Doors", slug: "multi-slide", description: "Expansive multi-panel door systems that stack or pocket for a seamless indoor-outdoor transition." },
  ];

  const benefits = [
    { title: "Complete Storm Barrier", description: `Doors are among the largest openings in your ${city.name} home. Impact doors create an unbroken barrier against hurricane-force winds and airborne debris.` },
    { title: "Forced-Entry Resistance", description: `Laminated impact glass and reinforced frames make your ${city.name} home significantly harder for intruders to breach, providing round-the-clock security.` },
    { title: "Insurance Premium Savings", description: `${city.name} homeowners with fully protected openings, including impact doors, qualify for substantial wind mitigation insurance discounts of up to 45%.` },
    { title: "Energy Efficiency", description: `Impact doors with Low-E glass and thermal breaks dramatically reduce heat transfer, keeping your ${city.name} home cooler and lowering monthly energy bills.` },
    { title: "Noise Dampening", description: `Multi-layered impact glass in your doors reduces outside noise by up to 60%, creating a quieter interior for your ${city.name} home.` },
    { title: "Increased Home Value", description: `Impact doors are a top-tier home improvement in ${city.name}, boosting resale value and making your property more attractive to buyers in the South Florida market.` },
  ];

  const faqs = [
    {
      q: `How much do impact doors cost in ${city.name}?`,
      a: `Impact door prices in ${city.name} vary based on door type, size, and features. Sliding glass impact doors typically range from $1,500 to $5,000, while entry impact doors range from $1,200 to $4,000. French impact doors generally fall between $2,000 and $6,000 per set. Florida Impact Windows & Doors offers free in-home consultations in ${city.name} to provide exact pricing tailored to your home and budget.`,
    },
    {
      q: `What types of impact doors are best for ${city.name} homes?`,
      a: `The best impact door type for your ${city.name} home depends on the opening location and your lifestyle. Sliding glass impact doors are ideal for patio and pool areas, French impact doors suit formal living spaces, and reinforced entry doors provide maximum front-door security. During your free consultation, our team will recommend the best options for your ${city.name} property based on architecture, usage, and ${city.county} County code requirements.`,
    },
    {
      q: `Do impact doors require special maintenance in ${city.name}?`,
      a: `Impact doors installed in ${city.name} require minimal maintenance. We recommend cleaning the glass and frames quarterly, lubricating tracks and rollers on sliding doors twice a year, and inspecting weatherstripping annually. The salt air common in ${city.county} County can affect hardware over time, so periodic hardware inspection ensures long-term smooth operation. Florida Impact Windows & Doors provides maintenance guidance with every installation.`,
    },
    {
      q: `Can you replace my existing doors with impact doors in ${city.name}?`,
      a: `Yes, Florida Impact Windows & Doors specializes in retrofitting existing door openings with impact-rated doors throughout ${city.name}. We handle every step, from measuring and ordering to ${city.county} County permitting and final inspection. Most impact door replacements take 1-2 days per opening, and we ensure your home stays secure throughout the process.`,
    },
  ];

  return (
    <>
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
            <span className="text-gray-900 font-medium">Impact Doors</span>
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
              Impact Doors in{" "}
              <span className="gradient-text">{city.name}, Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Professional impact door installation and replacement in {city.name}. Our hurricane-rated entry doors, sliding glass doors, and French doors protect your {city.county} County home while enhancing its beauty and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-estimate/" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25">
                Get Free Estimate in {city.name}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+17865551234" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (786) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Impact Doors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Impact Doors?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why {city.name} Homeowners Choose Impact Doors
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Doors represent the largest and most vulnerable openings in any {city.name} home. A standard door can fail under hurricane-force winds, allowing pressure changes and wind-driven rain that cause catastrophic interior damage. Impact doors are engineered with laminated glass and reinforced frames to withstand the extreme conditions that {city.county} County faces during hurricane season.
                </p>
                <p>
                  Beyond storm protection, impact doors transform the way you live in your {city.name} home. Sliding glass impact doors open your living space to Florida&apos;s beautiful weather without sacrificing safety. Entry impact doors deliver a commanding first impression backed by tested hurricane resistance. Every door we install meets or exceeds the stringent {city.county} County building code requirements for the High Velocity Hurricane Zone.
                </p>
                <p>
                  Florida Impact Windows & Doors is the trusted impact door installer for {city.name} homeowners. We carry premium brands including PGT, CGI, and ES Windows, and offer a full selection of styles, finishes, and configurations. From initial consultation through {city.county} County permitting and final inspection, our team handles every detail so you can enjoy a seamless upgrade.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200 MPH", label: "Wind Rating" },
                { value: "Up to 45%", label: "Insurance Savings" },
                { value: "Cat 5", label: "Hurricane Rated" },
                { value: "60%", label: "Noise Reduction" },
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

      {/* Door Types Available */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Door Styles</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Impact Door Types Available in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our complete selection of hurricane-rated impact doors, all available for professional installation in {city.name} and throughout {city.county} County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((type) => (
              <Link key={type.slug} href={`/services/door-types/${type.slug}/`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 group-hover:bg-palm-100 transition-colors">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM10 3h7v18h-7M14 12h.01" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">{type.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
              </Link>
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
              Benefits of Impact Doors in {city.name}
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
              Impact Doors FAQ for {city.name}
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
              { name: "Hurricane Shutters", href: `/areas/${city.slug}/hurricane-shutters/` },
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
            Impact Doors Near {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countyCities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}/impact-doors/`} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-palm-50 hover:text-palm-600 transition-all text-gray-700 font-medium border border-gray-100 hover:border-palm-200">
                Impact Doors in {c.name}
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
            Ready for Impact Doors in {city.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for impact door installation in {city.name}. Our team will visit your home, measure every opening, and provide a detailed quote with options to fit your style and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-white text-ocean-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17865551234" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
