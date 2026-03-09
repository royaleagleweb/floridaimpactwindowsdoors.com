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
    title: `Door Replacement in ${city.name}, FL - Professional Installation`,
    description: `Professional door replacement in ${city.name}, Florida. Entry doors, sliding glass doors, French doors, patio doors, and garage doors for ${city.county} County homes. Free estimates from Florida Impact Windows & Doors. Call (754) 600-4876.`,
  };
}

export default async function CityDoorReplacementPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const countyCities = getCitiesByCounty(city.county).filter((c) => c.slug !== city.slug).slice(0, 8);

  const doorTypes = [
    {
      name: "Entry Doors",
      description: `Make a lasting first impression with a new front entry door for your ${city.name} home. Choose from fiberglass, steel, or wood options in dozens of styles, colors, and decorative glass configurations designed to withstand South Florida conditions.`,
    },
    {
      name: "Sliding Glass Doors",
      description: `Maximize natural light and seamlessly connect indoor and outdoor living spaces. Modern sliding glass doors offer smooth operation, impact-rated glass, energy efficiency, and expansive views — perfect for ${city.name}'s tropical lifestyle.`,
    },
    {
      name: "French Doors",
      description: `Add timeless elegance to your ${city.name} property with beautiful French doors. Available in single or double configurations with impact-rated laminated glass, multi-point locks, and reinforced frames for hurricane protection.`,
    },
    {
      name: "Patio Doors",
      description: `Upgrade your ${city.name} patio access with multi-panel folding, stacking, or hinged patio doors that create wide openings. Ideal for entertaining and embracing Florida's indoor-outdoor lifestyle year-round.`,
    },
    {
      name: "Garage Doors",
      description: `Reinforce your home's largest opening with a wind-rated garage door built to withstand ${city.county} County hurricane conditions. Modern insulated panels improve energy efficiency and dramatically boost curb appeal.`,
    },
  ];

  const benefits = [
    {
      title: "Enhanced Curb Appeal",
      description: `A new door instantly transforms the look of your ${city.name} home. Choose from modern, traditional, and contemporary styles to complement your property's architecture and make a powerful first impression.`,
    },
    {
      title: "Improved Energy Efficiency",
      description: `Old, drafty doors waste energy and drive up utility bills. New doors with insulated cores, thermal breaks, and proper weatherstripping keep your ${city.name} home cool and lower AC costs year-round.`,
    },
    {
      title: "Superior Home Security",
      description: `Modern replacement doors feature multi-point locking systems, reinforced frames, and impact-rated laminated glass that provide around-the-clock security for your ${city.name} property.`,
    },
    {
      title: "Hurricane Protection",
      description: `Impact-rated door replacements meet ${city.county} County High Velocity Hurricane Zone requirements, protecting your ${city.name} home during Category 5 storms without the need for separate shutters.`,
    },
    {
      title: "Noise Reduction",
      description: `New doors with insulated cores and tight seals dramatically reduce outside noise — perfect for busy ${city.name} neighborhoods, traffic-heavy streets, and homes near commercial areas.`,
    },
    {
      title: "Increased Home Value",
      description: `Door replacement delivers one of the highest returns on investment of any home improvement. New doors boost your ${city.name} property's market value and attract potential buyers.`,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Free In-Home Consultation",
      description: `Our door specialist visits your ${city.name} home to assess your current doors, take precise measurements, and discuss your style preferences, material options, and budget. No pressure and no obligation.`,
    },
    {
      step: "2",
      title: "Custom Design & Quote",
      description: `We present tailored door options with a transparent, all-inclusive quote covering the door, hardware, installation, ${city.county} County permits, and complete cleanup — no hidden fees or surprise charges.`,
    },
    {
      step: "3",
      title: "Professional Installation",
      description: `Our licensed and insured installers carefully remove your old doors, prepare and waterproof the openings, and install your new doors with precision. We keep your ${city.name} home secure throughout the process.`,
    },
    {
      step: "4",
      title: "Final Inspection & Walkthrough",
      description: `We schedule and manage the ${city.county} County building inspection, walk you through the operation and care of every new door, and ensure you are completely satisfied before we consider the job done.`,
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
            <span className="text-gray-900 font-medium">Door Replacement</span>
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
              Door Replacement in{" "}
              <span className="gradient-text">{city.name}, Florida</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Professional door replacement and installation in {city.name}. From front entry doors to sliding glass doors, French doors, patio doors, and garage doors, we help {city.county} County homeowners upgrade their homes with beautiful, energy-efficient, and hurricane-rated doors.
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

      {/* Why Door Replacement in This City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Replace Your Doors?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why {city.name} Homeowners Choose Door Replacement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Your doors are among the hardest-working features of your {city.name} home. They face South Florida&apos;s intense sun, humidity, salt air, and driving rain year after year. Over time, frames warp, seals deteriorate, hardware corrodes, and glass panels lose their insulating properties. {city.description}
                </p>
                <p>
                  Doors are also among the largest openings in your home, making them critical weak points during hurricanes. A single door failure can allow pressure buildup that compromises the entire structure. Replacing aging doors with modern, impact-rated products closes every gap in your storm defense while dramatically improving energy efficiency, security, and curb appeal.
                </p>
                <p>
                  Florida Impact Windows & Doors is {city.name}&apos;s trusted door replacement specialist with over 15 years of experience serving {city.county} County homeowners. We carry premium door brands from manufacturers like PGT, CGI, and ES Windows, handle all {city.county} County permits and inspections, and back every installation with comprehensive manufacturer and labor warranties.
                </p>
                <p>
                  Whether you need to replace a single weathered front door or upgrade every exterior door in your {city.name} home to impact-rated products, our team delivers expert craftsmanship, transparent pricing, and a hassle-free experience from start to finish.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200 MPH", label: "Wind Rating" },
                { value: "Up to 45%", label: "Insurance Savings" },
                { value: "1-2 Days", label: "Per Door Install" },
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

      {/* Signs You Need Replacement */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">
              Signs It&apos;s Time to Replace Your Doors in {city.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not sure if your doors need replacing? Watch for these common warning signs that {city.county} County homeowners encounter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { sign: "Visible Damage", detail: "Cracks, warping, rotting, or corrosion on the door frame, panels, or threshold that compromise structural integrity." },
              { sign: "Drafts & Air Leaks", detail: "You can feel air moving around the door edges, or see daylight through gaps — a sign that seals and weatherstripping have failed." },
              { sign: "Difficult Operation", detail: "Doors that stick, drag, won't latch properly, or jump off their tracks are past the point of simple repair." },
              { sign: "High Energy Bills", detail: "Old single-pane or poorly insulated doors allow heat transfer that forces your AC to work harder in South Florida's climate." },
            ].map((item) => (
              <div key={item.sign} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 font-display">{item.sign}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Doors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Door Styles</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Types of Doors We Replace in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From front entry doors to garage doors, we handle every type of door replacement for {city.name} homes with expert craftsmanship and full {city.county} County code compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((door) => (
              <div key={door.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-palm-50 flex items-center justify-center mb-4 group-hover:bg-palm-100 transition-colors">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM10 3h7v18h-7M14 12h.01" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">{door.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{door.description}</p>
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
              Benefits of Door Replacement in {city.name}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Replacing your doors delivers immediate and long-term value for your {city.county} County home.
            </p>
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

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">How It Works</span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Our Door Replacement Process in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first consultation to final inspection, we make door replacement simple and stress-free for {city.county} County homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-500 to-ocean-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">
            Door Replacement Near {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countyCities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}/door-replacement/`} className="bg-white rounded-xl p-4 text-center hover:bg-palm-50 hover:text-palm-600 transition-all text-gray-700 font-medium border border-gray-100 hover:border-palm-200">
                Door Replacement in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">
            Other Services in {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Impact Windows", href: `/areas/${city.slug}/impact-windows/` },
              { name: "Impact Doors", href: `/areas/${city.slug}/impact-doors/` },
              { name: "Hurricane Shutters", href: `/areas/${city.slug}/hurricane-shutters/` },
              { name: "Window Replacement", href: `/areas/${city.slug}/window-replacement/` },
            ].map((service) => (
              <Link key={service.name} href={service.href} className="bg-gray-50 rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all font-semibold text-gray-700 hover:text-palm-600">
                {service.name}
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
            Ready for New Doors in {city.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for door replacement in {city.name}. Our experts will visit your home, inspect your current doors, and provide a detailed, all-inclusive quote with flexible financing options.
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
