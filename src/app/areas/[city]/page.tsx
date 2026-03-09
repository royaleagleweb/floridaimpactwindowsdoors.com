import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getCitiesByCounty } from "@/data/cities";

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    return { title: "City Not Found" };
  }

  const title = `Impact Windows & Doors in ${city.name}, FL`;
  const description = `Florida Impact Windows & Doors provides professional impact window and door installation in ${city.name}, ${city.county} County, FL. Hurricane-rated protection, energy savings & free estimates. Call today!`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Florida Impact Windows & Doors`,
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Data helpers
// ---------------------------------------------------------------------------

const services = [
  {
    title: "Impact Windows",
    description:
      "Hurricane-rated impact windows tested to withstand Category 5 winds and large missile impact.",
    href: "/services/impact-windows/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
        <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
        <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Impact Doors",
    description:
      "Premium impact-rated entry, sliding glass, French, and patio doors for complete home protection.",
    href: "/services/impact-doors/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM10 3h7v18h-7M14 12h.01" />
      </svg>
    ),
  },
  {
    title: "Hurricane Shutters",
    description:
      "Accordion, roll-down, and panel hurricane shutters for additional storm protection.",
    href: "/services/hurricane-shutters/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        <rect x="3" y="3" width="18" height="18" rx="1" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Window Replacement",
    description:
      "Full-service window replacement upgrading aging or damaged windows to modern impact protection.",
    href: "/services/window-replacement/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Energy Efficient Windows",
    description:
      "Low-E glass and argon-filled windows that reduce solar heat gain and lower energy bills.",
    href: "/services/energy-efficient-windows/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Commercial Services",
    description:
      "Impact window and door solutions for storefronts, offices, and multi-unit properties.",
    href: "/services/commercial-services/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const windowTypes = [
  { name: "Single Hung", href: "/services/window-types/single-hung/" },
  { name: "Double Hung", href: "/services/window-types/double-hung/" },
  { name: "Casement", href: "/services/window-types/casement/" },
  { name: "Awning", href: "/services/window-types/awning/" },
  { name: "Sliding", href: "/services/window-types/sliding/" },
  { name: "Picture", href: "/services/window-types/picture/" },
  { name: "Bay", href: "/services/window-types/bay/" },
  { name: "Bow", href: "/services/window-types/bow/" },
];

const doorTypes = [
  { name: "Sliding Glass", href: "/services/door-types/sliding-glass/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
  { name: "Garage Doors", href: "/services/door-types/garage/" },
];

const benefits = [
  {
    title: "Insurance Savings",
    description:
      "Impact windows can reduce your hurricane insurance premiums by up to 45%. Most homeowners see the savings pay for themselves over time.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Energy Efficiency",
    description:
      "Low-E coated impact glass reduces solar heat gain by up to 70%, keeping your home cooler and slashing energy costs in the South Florida heat.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "24/7 Security",
    description:
      "Laminated impact glass holds together even when shattered, providing year-round protection against break-ins and forced entry.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Noise Reduction",
    description:
      "Impact windows reduce outside noise by up to 60%, creating a peaceful interior even in busy neighborhoods or near highways.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
    ),
  },
  {
    title: "UV Protection",
    description:
      "Block up to 99% of harmful UV rays that fade furniture, flooring, and artwork. Protect your interior investment for years to come.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Property Value",
    description:
      "Impact windows are one of the highest-ROI home improvements in Florida, typically returning 75-85% of their cost at resale.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    notFound();
  }

  const countyCities = getCitiesByCounty(city.county).filter(
    (c) => c.slug !== city.slug
  );

  const faqs = [
    {
      question: `How much do impact windows cost in ${city.name}?`,
      answer: `Impact window prices in ${city.name} typically range from $400 to $1,500 per window installed, depending on the window size, style, and glass specifications. Factors such as your home's architecture, the number of openings, and specific ${city.county} County building code requirements all influence the final cost. We provide free in-home estimates so you can get an accurate price for your ${city.name} property.`,
    },
    {
      question: `Are impact windows required by code in ${city.name}, Florida?`,
      answer: `In ${city.name} and throughout ${city.county} County, Florida Building Code requires that all new construction and major renovations include impact-rated windows and doors, or an approved hurricane protection system. Even if not currently required for your existing home, installing impact windows brings your property up to the latest code standards, increases safety, and can significantly reduce insurance premiums.`,
    },
    {
      question: `How long does impact window installation take in ${city.name}?`,
      answer: `A typical impact window installation for a ${city.name} home takes 1-3 days, depending on the number and size of openings. Our team handles all ${city.county} County permitting, scheduling inspections, and ensuring the installation meets or exceeds local building codes. We work efficiently to minimize disruption to your daily routine.`,
    },
    {
      question: `What brands of impact windows do you install in ${city.name}?`,
      answer: `In ${city.name}, we install premium impact windows from industry-leading manufacturers including PGT, CGI, ES Windows, and Custom Window Systems (CWS). All products meet or exceed Florida Building Code and ${city.county} County requirements. During your free consultation, we'll recommend the best brand and product line for your home and budget.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/areas/" className="hover:text-white transition-colors">
              Service Areas
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{city.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">
                {city.county} County
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Windows & Doors in{" "}
              <span className="gradient-text">{city.name}</span>, Florida
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+17865551234"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (786) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why City Homeowners Need Impact Windows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              Why {city.name} Homeowners Need Impact Windows
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Located in {city.county} County, {city.name} sits in one of the
                most hurricane-prone regions in the United States. South Florida
                is directly in the path of Atlantic hurricanes, and homeowners in{" "}
                {city.name} face the real threat of destructive winds, flying
                debris, and storm surge every season from June through November.
                Protecting your home with impact-rated windows and doors is not
                just smart planning &mdash; it is essential.
              </p>
              <p>
                {city.county} County enforces some of the strictest building
                codes in the nation, specifically designed for hurricane-prone
                areas. The Florida Building Code requires that homes in the High
                Velocity Hurricane Zone (HVHZ) use impact-rated products or
                approved hurricane protection systems on all openings. By
                installing impact windows in your {city.name} home, you meet and
                exceed these code requirements while gaining year-round benefits
                including energy savings, noise reduction, and UV protection.
              </p>
              <p>
                Beyond code compliance, impact windows provide {city.name}{" "}
                homeowners with significant financial advantages. Insurance
                companies offer substantial premium discounts &mdash; often 20%
                to 45% &mdash; for homes with fully protected openings. Combined
                with energy savings from the insulating properties of
                impact-rated glass, most {city.name} homeowners find that their
                impact windows begin paying for themselves within a few years of
                installation.
              </p>
              <p>
                At Florida Impact Windows & Doors, we understand the unique needs of {city.name}{" "}
                homes. Whether your property is a waterfront estate, a suburban
                family home, or a downtown condominium, our team designs and
                installs impact window solutions that fit your architecture, your
                budget, and your lifestyle. We handle all {city.county} County
                permits and inspections so you can enjoy a hassle-free experience
                from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Services Available in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a full range of impact window, impact door, and
              hurricane protection services for {city.name} homeowners and
              businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 mb-5 group-hover:from-palm-100 group-hover:to-ocean-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-palm-600 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Window & Door Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Window Types */}
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                Window Types
              </span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Impact Window Styles for {city.name}
              </h2>
              <p className="text-gray-600 mb-8">
                Every {city.name} home is unique. Choose from a variety of
                impact window styles to match your architecture and personal
                preferences. All styles are available with hurricane-rated impact
                glass.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {windowTypes.map((type) => (
                  <Link
                    key={type.name}
                    href={type.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-palm-300 hover:bg-palm-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-palm-100 flex items-center justify-center group-hover:bg-palm-200 transition-colors">
                      <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                        <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-palm-700 transition-colors">
                      {type.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Door Types */}
            <div>
              <span className="inline-block text-sm font-semibold text-ocean-600 uppercase tracking-wider mb-3">
                Door Types
              </span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Impact Door Styles for {city.name}
              </h2>
              <p className="text-gray-600 mb-8">
                Complete your {city.name} home&apos;s hurricane protection with
                impact-rated doors. From sliding glass to elegant French doors,
                we install every style with precision.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {doorTypes.map((type) => (
                  <Link
                    key={type.name}
                    href={type.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-ocean-300 hover:bg-ocean-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center group-hover:bg-ocean-200 transition-colors">
                      <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" />
                        <rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-ocean-700 transition-colors">
                      {type.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Benefits of Impact Windows in {city.name}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Impact windows do far more than protect against hurricanes. {city.name}{" "}
              homeowners enjoy these year-round advantages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-palm-400 mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the City */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                About the Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                About {city.name}, Florida
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {city.name} is located in {city.county} County on Florida&apos;s
                  southeastern coast. As part of the greater South Florida
                  metropolitan area, it is one of the most vibrant and diverse
                  communities in the state.
                </p>
                <p>
                  Like all of {city.county} County, {city.name} is located within
                  the Florida High Velocity Hurricane Zone, meaning homes must
                  meet the strictest wind resistance standards in the nation.
                  Impact windows and doors are the preferred method of hurricane
                  protection for homeowners who want permanent, maintenance-free
                  storm readiness.
                </p>
                <p>
                  Florida Impact Windows & Doors has been serving {city.name} homeowners with
                  professional impact window and door installation for over 15
                  years. Our deep knowledge of {city.county} County building codes,
                  permitting processes, and local architecture ensures every
                  project is completed to the highest standards.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold font-display text-gray-900 mb-6">
                {city.name} Quick Facts
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <dt className="text-gray-500 font-medium">County</dt>
                  <dd className="text-gray-900 font-semibold">{city.county}</dd>
                </div>
                {city.population && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <dt className="text-gray-500 font-medium">Population</dt>
                    <dd className="text-gray-900 font-semibold">
                      {city.population}
                    </dd>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <dt className="text-gray-500 font-medium">State</dt>
                  <dd className="text-gray-900 font-semibold">Florida</dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <dt className="text-gray-500 font-medium">Hurricane Zone</dt>
                  <dd className="text-gray-900 font-semibold">HVHZ</dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <dt className="text-gray-500 font-medium">
                    Building Code
                  </dt>
                  <dd className="text-gray-900 font-semibold">
                    Florida Building Code 7th Ed.
                  </dd>
                </div>
                {city.zipCodes && city.zipCodes.length > 0 && (
                  <div className="py-3">
                    <dt className="text-gray-500 font-medium mb-2">
                      ZIP Codes Served
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {city.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {zip}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {countyCities.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                Nearby Service Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Other Cities We Serve in {city.county} County
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In addition to {city.name}, Florida Impact Windows & Doors provides impact window
                and door installation throughout {city.county} County.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countyCities.slice(0, 12).map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}/`}
                  className="group flex items-center justify-between bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-palm-600 transition-colors font-display">
                      {nearby.name}
                    </h3>
                    {nearby.population && (
                      <p className="text-sm text-gray-500">
                        Pop. {nearby.population}
                      </p>
                    )}
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-palm-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            {countyCities.length > 12 && (
              <div className="text-center mt-8">
                <Link
                  href="/areas/"
                  className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors"
                >
                  View All Service Areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Frequently Asked Questions About Impact Windows in {city.name}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 font-display text-lg hover:text-palm-600 transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Protect Your {city.name} Home?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of {city.county} County homeowners who trust Florida Impact
            Windows for their impact window and door needs. Schedule your free
            in-home consultation in {city.name} today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Free Estimate in {city.name}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
