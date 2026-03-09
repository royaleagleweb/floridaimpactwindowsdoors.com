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
    title: `Impact Windows in ${city.name}, FL - Installation & Replacement`,
    description: `Professional impact window installation in ${city.name}, Florida. Hurricane-rated windows for ${city.county} County homes. Free estimates from Florida Impact Windows & Doors. Call (786) 555-1234.`,
  };
}

export default async function CityImpactWindowsPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const countyCities = getCitiesByCounty(city.county).filter((c) => c.slug !== city.slug).slice(0, 8);

  const windowTypes = [
    { name: "Single Hung Impact Windows", slug: "single-hung", description: "Classic vertical sliding design with fixed upper sash. Ideal for traditional and colonial-style homes." },
    { name: "Double Hung Impact Windows", slug: "double-hung", description: "Both sashes operate for maximum ventilation. Tilt-in design makes cleaning easy from inside." },
    { name: "Casement Impact Windows", slug: "casement", description: "Crank-operated side-hinged windows that swing outward. Provides the tightest seal against hurricanes." },
    { name: "Awning Impact Windows", slug: "awning", description: "Top-hinged windows that open outward, allowing ventilation even during light rain." },
    { name: "Sliding Impact Windows", slug: "sliding", description: "Horizontal sliding operation perfect for wide openings. Space-saving design ideal for condos." },
    { name: "Picture Impact Windows", slug: "picture", description: "Fixed non-operable windows that maximize natural light and provide unobstructed views." },
    { name: "Bay Impact Windows", slug: "bay", description: "Three-panel projection windows that add space and architectural interest to any room." },
    { name: "Bow Impact Windows", slug: "bow", description: "Curved multi-panel windows creating elegant panoramic views of your surroundings." },
  ];

  const benefits = [
    { title: "Category 5 Hurricane Protection", description: `Protect your ${city.name} home against the most powerful hurricanes with impact windows rated for winds up to 200 mph.` },
    { title: "Insurance Premium Discounts", description: `${city.name} homeowners with impact windows can save up to 45% on hurricane insurance premiums with a wind mitigation inspection.` },
    { title: "Energy Bill Reduction", description: `Low-E impact glass reduces solar heat gain by up to 70%, keeping your ${city.name} home cool and lowering AC costs year-round.` },
    { title: "Noise Reduction", description: `Impact windows reduce outside noise by up to 60% — perfect for busy ${city.name} neighborhoods and traffic-heavy areas.` },
    { title: "UV Protection", description: `Block 99% of harmful UV rays that fade furniture, flooring, and artwork in your ${city.name} home.` },
    { title: "24/7 Security", description: `Laminated impact glass holds together when struck, providing constant burglar deterrence for your ${city.name} property.` },
  ];

  const faqs = [
    {
      q: `How much do impact windows cost in ${city.name}?`,
      a: `Impact window costs in ${city.name} typically range from $400 to $1,500 per window, depending on size, style, and brand. Factors include window type, glass thickness, frame material, and installation complexity. Florida Impact Windows & Doors offers free in-home estimates and flexible financing options to help ${city.name} homeowners find solutions within their budget. We also help you maximize insurance discounts that can offset the initial investment over time.`,
    },
    {
      q: `Do I need a permit for impact windows in ${city.name}?`,
      a: `Yes, ${city.county} County requires a building permit for impact window installation in ${city.name}. This ensures all work meets the Florida Building Code and local ${city.county} County requirements. Florida Impact Windows & Doors handles the entire permitting process for you — from application to final inspection — so you don't have to worry about paperwork or building department visits.`,
    },
    {
      q: `How long does impact window installation take in ${city.name}?`,
      a: `Most impact window installations in ${city.name} take 1-3 days for an average home, depending on the number of windows and any structural modifications needed. Our professional installers work efficiently while maintaining the highest quality standards. We schedule around your convenience and keep your ${city.name} home secure throughout the process.`,
    },
    {
      q: `What brands of impact windows do you install in ${city.name}?`,
      a: `Florida Impact Windows & Doors installs premium impact window brands in ${city.name}, including PGT, CGI, ES Windows, and Custom Window Systems. All brands meet or exceed ${city.county} County building code requirements and come with manufacturer warranties. During your free consultation, we'll help you select the best brand for your ${city.name} home's specific needs and budget.`,
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
            <span className="text-gray-900 font-medium">Impact Windows</span>
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
              Impact Windows in{" "}
              <span className="gradient-text">{city.name}, Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Professional impact window installation and replacement in {city.name}. Our hurricane-rated windows protect your {city.county} County home against Category 5 storms while reducing energy costs, noise, and insurance premiums.
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

      {/* Why Impact Windows in This City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Impact Windows?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why {city.name} Homeowners Choose Impact Windows
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Living in {city.name}, {city.county} County, means your home faces the full force of South Florida&apos;s hurricane season every year. {city.description}
                </p>
                <p>
                  Impact windows are the most effective way to protect your {city.name} home from hurricanes. Unlike traditional shutters that need to be installed before each storm, impact windows provide 24/7 protection while offering additional benefits like energy savings, noise reduction, and enhanced security. They meet all {city.county} County building code requirements and qualify for significant insurance discounts.
                </p>
                <p>
                  Florida Impact Windows & Doors is {city.name}&apos;s trusted impact window installer, with over 15 years of experience serving {city.county} County homeowners. We carry premium brands like PGT, CGI, ES Windows, and Custom Window Systems, and handle every aspect of your installation — from permits to final inspection.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200 MPH", label: "Wind Rating" },
                { value: "Up to 45%", label: "Insurance Savings" },
                { value: "Up to 70%", label: "Heat Reduction" },
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

      {/* Window Types Available */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Window Styles</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Impact Window Types Available in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our full range of hurricane-rated impact window styles, all available for installation in {city.name} and throughout {city.county} County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {windowTypes.map((type) => (
              <Link key={type.slug} href={`/services/window-types/${type.slug}/`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 group-hover:bg-palm-100 transition-colors">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} /></svg>
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
              Benefits of Impact Windows in {city.name}
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
              Impact Windows FAQ for {city.name}
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
              { name: "Impact Doors", href: `/areas/${city.slug}/impact-doors/` },
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
            Impact Windows Near {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countyCities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}/impact-windows/`} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-palm-50 hover:text-palm-600 transition-all text-gray-700 font-medium border border-gray-100 hover:border-palm-200">
                Impact Windows in {c.name}
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
            Ready for Impact Windows in {city.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for impact window installation in {city.name}. Our experts will visit your home, take measurements, and provide a customized quote.
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
