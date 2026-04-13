import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Impact Windows, Doors & Hurricane Protection",
  description:
    "Complete impact window, door, and hurricane protection services for South Florida homes. Expert installation by owner-operated team. Free estimates.",
  alternates: {
    canonical: "https://floridaimpactwindowsdoors.com/services/",
  },
};

const services = [
  {
    title: "Impact Windows",
    description:
      "Hurricane-rated impact windows tested to withstand Category 5 winds. Energy-efficient Low-E glass options available. Miami-Dade NOA approved.",
    href: "/services/impact-windows/",
    image: "/images/windows3.jpg",
  },
  {
    title: "Impact Doors",
    description:
      "Premium impact doors including sliding glass, French, entry, and patio doors. Full hurricane protection without sacrificing style.",
    href: "/services/impact-doors/",
    image: "/images/doors.jpg",
  },
  {
    title: "Hurricane Shutters",
    description:
      "Accordion, roll-down, Bahama, and panel hurricane shutters. Affordable storm protection for windows and doors.",
    href: "/services/hurricane-shutters/",
    image: "/images/windows5.jpg",
  },
  {
    title: "Energy Efficient Windows",
    description:
      "Low-E coated impact windows that reflect 70-85% of the sun's heat. Save on FPL bills while protecting your home.",
    href: "/services/energy-efficient-windows/",
    image: "/images/windows2.jpg",
  },
  {
    title: "Window Replacement",
    description:
      "Full-frame and retrofit window replacement for South Florida homes. Upgrade from jalousie, single-pane, or aging windows.",
    href: "/services/window-replacement/",
    image: "/images/windows4.jpg",
  },
  {
    title: "Door Replacement",
    description:
      "Replace outdated doors with hurricane-rated impact doors. Sliding glass, French, entry, and patio door options.",
    href: "/services/door-replacement/",
    image: "/images/doors4.jpg",
  },
  {
    title: "Commercial Services",
    description:
      "Impact window and door solutions for commercial properties, storefronts, condos, and HOA communities across South Florida.",
    href: "/services/commercial-services/",
    image: "/images/doors5.jpg",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://floridaimpactwindowsdoors.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://floridaimpactwindowsdoors.com/services/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-ocean-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-palm-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Services</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Impact Window &amp; Door Services
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              From impact windows and doors to hurricane shutters, we provide
              complete hurricane protection for South Florida homes. Every
              project is installed by our own team, led by one of our owners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-ocean-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-palm-500/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} installation in South Florida`}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white font-display mb-3 group-hover:text-palm-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Type */}
      <section className="bg-ocean-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white font-display mb-6">
                Window Types
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Single Hung", href: "/services/window-types/single-hung/" },
                  { name: "Double Hung", href: "/services/window-types/double-hung/" },
                  { name: "Casement", href: "/services/window-types/casement/" },
                  { name: "Awning", href: "/services/window-types/awning/" },
                  { name: "Sliding", href: "/services/window-types/sliding/" },
                  { name: "Picture", href: "/services/window-types/picture/" },
                  { name: "Bay", href: "/services/window-types/bay/" },
                  { name: "Bow", href: "/services/window-types/bow/" },
                  { name: "Hopper", href: "/services/window-types/hopper/" },
                ].map((type) => (
                  <Link
                    key={type.name}
                    href={type.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-palm-400 transition-colors text-sm py-1"
                  >
                    <svg
                      className="w-4 h-4 text-palm-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {type.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/services/window-types/"
                className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm mt-6 hover:text-palm-300 transition-colors"
              >
                View All Window Types
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white font-display mb-6">
                Door Types
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Sliding Glass", href: "/services/door-types/sliding-glass/" },
                  { name: "French Doors", href: "/services/door-types/french/" },
                  { name: "Entry Doors", href: "/services/door-types/entry/" },
                  { name: "Patio Doors", href: "/services/door-types/patio/" },
                  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
                  { name: "Garage Doors", href: "/services/door-types/garage/" },
                  { name: "Storm Doors", href: "/services/door-types/storm/" },
                ].map((type) => (
                  <Link
                    key={type.name}
                    href={type.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-palm-400 transition-colors text-sm py-1"
                  >
                    <svg
                      className="w-4 h-4 text-palm-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {type.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/services/door-types/"
                className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm mt-6 hover:text-palm-300 transition-colors"
              >
                View All Door Types
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free estimate from one of our owners. We&apos;ll assess your
            home, explain your options, and provide transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30"
            >
              Protect Your Home Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-palm-400 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
