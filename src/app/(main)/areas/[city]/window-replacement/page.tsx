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
    title: `Window Replacement in ${city.name}, FL | Florida Impact Windows & Doors`,
    description: `Professional window replacement services in ${city.name}, Florida. Upgrade aging windows to modern impact-rated glass. Energy savings, security, and storm protection. Free estimates. Call (754) 600-4876.`,
    alternates: { canonical: `https://floridaimpactwindowsdoors.com/areas/${slug}/window-replacement/` },
  };
}

export default async function CityWindowReplacementPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const countyCities = getCitiesByCounty(city.county).filter((c) => c.slug !== city.slug).slice(0, 8);

  const replacementReasons = [
    { name: "Storm Damage Replacement", description: "Windows cracked, shattered, or compromised by a hurricane or tropical storm need prompt professional replacement to restore your home's envelope." },
    { name: "Aging Window Upgrade", description: "Single-pane or outdated double-pane windows lose efficiency over time. Replacement with modern impact glass eliminates drafts, fogging, and seal failures." },
    { name: "Non-Impact to Impact Upgrade", description: "Upgrade your existing non-impact windows to hurricane-rated impact glass and meet current Florida Building Code requirements for storm protection." },
    { name: "Energy Efficiency Upgrade", description: "Replace outdated windows with Low-E coated, argon-filled impact glass to dramatically reduce solar heat gain and lower monthly energy bills." },
    { name: "Cosmetic & Style Refresh", description: "Modernize your home's appearance with new window frames, finishes, and styles. Choose from aluminum, vinyl, or wood-clad options in any color." },
    { name: "Code Compliance Renovation", description: "Bring your home up to current building codes during a renovation. Required when altering more than 25% of a home's window openings in most jurisdictions." },
  ];

  const benefits = [
    { title: "Modern Impact Protection", description: `Replace outdated windows in your ${city.name} home with current-generation impact glass that meets today's ${city.county} County hurricane protection standards.` },
    { title: "Dramatic Energy Savings", description: `New impact windows reduce solar heat gain by up to 70% compared to aging single-pane glass. ${city.name} homeowners typically see a noticeable drop in monthly cooling costs.` },
    { title: "Eliminate Seal Failures", description: `Foggy, moisture-trapped double-pane windows are a sign of failed seals. Replacement restores crystal-clear views and proper insulation for your ${city.name} home.` },
    { title: "Insurance Premium Reduction", description: `Upgrading to impact-rated replacement windows in ${city.name} qualifies your home for wind mitigation credits, reducing hurricane insurance premiums by up to 45%.` },
    { title: "Boost Curb Appeal", description: `New windows transform the exterior appearance of your ${city.name} home. Choose from a wide range of frame styles, colors, and grid patterns to match any architecture.` },
    { title: "Higher Resale Value", description: `Window replacement is one of the highest-ROI renovations in ${city.name}'s competitive real estate market, with impact windows returning 75-85% of cost at resale.` },
  ];

  const faqs = [
    {
      q: `How much does window replacement cost in ${city.name}?`,
      a: `Window replacement costs in ${city.name} typically range from $400 to $1,500 per window when upgrading to impact-rated glass. The total project cost depends on the number of windows, sizes, styles, frame materials, and any structural modifications required. Florida Impact Windows & Doors provides free in-home assessments in ${city.name} so you get an accurate, itemized quote with no surprises. We also offer flexible financing to make your project affordable.`,
    },
    {
      q: `How do I know when my windows need to be replaced in ${city.name}?`,
      a: `Common signs that your ${city.name} home needs window replacement include visible condensation or fogging between glass panes, difficulty opening or closing windows, noticeable drafts or air leaks, increased energy bills, peeling or rotting frames, and exterior noise that seems louder than it should be. If your windows are non-impact rated, replacing them with impact glass also brings your home into compliance with ${city.county} County storm protection standards.`,
    },
    {
      q: `How long does a window replacement project take in ${city.name}?`,
      a: `A full-home window replacement in ${city.name} typically takes 1 to 5 days, depending on the number of openings and the scope of any structural work. Standard replacement of 10-15 windows usually completes in 2-3 days. Florida Impact Windows & Doors handles all ${city.county} County permits and scheduling, and we keep your home secure throughout the process with temporary weatherproofing between removal and installation.`,
    },
    {
      q: `Can I replace windows one room at a time in ${city.name}?`,
      a: `Yes, Florida Impact Windows & Doors offers phased window replacement for ${city.name} homeowners who prefer to spread the project over time. Many customers start with the most visible or most damaged windows and complete the rest in stages. We keep detailed records of your window specifications so every phase matches perfectly. Keep in mind that completing all openings is required to qualify for full wind mitigation insurance discounts in ${city.county} County.`,
    },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" }, { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://floridaimpactwindowsdoors.com/areas/" }, { "@type": "ListItem", position: 3, name: city.name, item: `https://floridaimpactwindowsdoors.com/areas/${city.slug}/` }, { "@type": "ListItem", position: 4, name: "Window Replacement" }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: `Window Replacement in ${city.name}, FL`, description: `Professional window replacement services in ${city.name}, ${city.county} County, Florida.`, provider: { "@type": "HomeAndConstructionBusiness", name: "Florida Impact Windows & Doors", telephone: "+1-754-600-4876" }, areaServed: { "@type": "City", name: city.name, containedIn: { "@type": "State", name: "Florida" } }, serviceType: "Window Replacement" };

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
            <span className="text-gray-900 font-medium">Window Replacement</span>
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
              Window Replacement in{" "}
              <span className="gradient-text">{city.name}, Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Full-service window replacement in {city.name}. Whether you are upgrading aging single-pane glass, replacing storm-damaged windows, or converting to impact-rated protection, Florida Impact Windows & Doors delivers expert craftsmanship for every {city.county} County home.
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

      {/* Why Window Replacement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Replace Your Windows?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why {city.name} Homeowners Replace Their Windows
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Many homes in {city.name} still have original or aging windows that no longer perform as they should. Whether your windows are fogged between panes, difficult to operate, leaking air, or simply not rated for hurricanes, replacement is one of the most impactful upgrades you can make. New impact-rated windows provide the storm protection {city.county} County demands while solving every common window complaint at once.
                </p>
                <p>
                  Window replacement is also the smartest path to energy savings in {city.name}&apos;s subtropical climate. Older single-pane and early double-pane windows allow massive amounts of solar heat into your home, forcing your air conditioning to work overtime. Modern Low-E impact glass reflects infrared heat, blocks UV rays, and maintains a tighter thermal seal, which translates directly into lower monthly utility bills for {city.name} homeowners.
                </p>
                <p>
                  Florida Impact Windows & Doors manages the entire replacement process from start to finish. We begin with a detailed assessment of your existing windows, recommend the best products for your {city.name} home, handle all {city.county} County permitting, and perform a clean, professional installation. Our goal is zero disruption and a finished result that looks outstanding and performs flawlessly for decades.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Up to 70%", label: "Heat Reduction" },
                { value: "Up to 45%", label: "Insurance Savings" },
                { value: "75-85%", label: "ROI at Resale" },
                { value: "99%", label: "UV Blocked" },
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

      {/* Replacement Reasons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Replacement Services</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Window Replacement Services in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No matter the reason for your window replacement project, Florida Impact Windows & Doors has the expertise, products, and {city.county} County permitting knowledge to deliver a seamless result.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {replacementReasons.map((reason) => (
              <div key={reason.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 group-hover:bg-palm-100 transition-colors">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">{reason.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
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
              Benefits of Window Replacement in {city.name}
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
              Window Replacement FAQ for {city.name}
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
              { name: "Hurricane Shutters", href: `/areas/${city.slug}/hurricane-shutters/` },
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
            Window Replacement Near {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countyCities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}/window-replacement/`} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-palm-50 hover:text-palm-600 transition-all text-gray-700 font-medium border border-gray-100 hover:border-palm-200">
                Window Replacement in {c.name}
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
            Ready to Replace Your Windows in {city.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for window replacement in {city.name}. Our experts will inspect your current windows, recommend the best replacements, and provide a detailed quote with financing options.
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
