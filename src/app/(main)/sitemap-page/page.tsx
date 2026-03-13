import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Florida Impact Windows & Doors",
  description:
    "Browse the complete sitemap for Florida Impact Windows & Doors. Find links to all pages including services, brands, areas, and resources.",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Contact Us", href: "/contact/" },
      { name: "Get Free Estimate", href: "/get-estimate/" },
      { name: "Reviews & Testimonials", href: "/reviews/" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Impact Windows", href: "/services/impact-windows/" },
      { name: "Impact Doors", href: "/services/impact-doors/" },
      { name: "Hurricane Shutters", href: "/services/hurricane-shutters/" },
      { name: "Energy Efficient Windows", href: "/services/energy-efficient-windows/" },
      { name: "Window Replacement", href: "/services/window-replacement/" },
      { name: "Commercial Services", href: "/services/commercial-services/" },
    ],
  },
  {
    title: "Window Types",
    links: [
      { name: "Single Hung Windows", href: "/services/window-types/single-hung/" },
      { name: "Double Hung Windows", href: "/services/window-types/double-hung/" },
      { name: "Casement Windows", href: "/services/window-types/casement/" },
      { name: "Awning Windows", href: "/services/window-types/awning/" },
      { name: "Sliding Windows", href: "/services/window-types/sliding/" },
      { name: "Picture Windows", href: "/services/window-types/picture/" },
      { name: "Bay Windows", href: "/services/window-types/bay/" },
      { name: "Bow Windows", href: "/services/window-types/bow/" },
    ],
  },
  {
    title: "Door Types",
    links: [
      { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
      { name: "French Doors", href: "/services/door-types/french/" },
      { name: "Entry Doors", href: "/services/door-types/entry/" },
      { name: "Patio Doors", href: "/services/door-types/patio/" },
      { name: "Pivot Doors", href: "/services/door-types/pivot/" },
      { name: "Garage Doors", href: "/services/door-types/garage/" },
    ],
  },
  {
    title: "Brands",
    links: [
      { name: "PGT Windows & Doors", href: "/brands/pgt/" },
      { name: "CGI Windows & Doors", href: "/brands/cgi/" },
      { name: "ES Windows", href: "/brands/es-windows/" },
      { name: "Custom Window Systems", href: "/brands/custom-window-systems/" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { name: "Miami", href: "/areas/miami/" },
      { name: "Fort Lauderdale", href: "/areas/fort-lauderdale/" },
      { name: "West Palm Beach", href: "/areas/west-palm-beach/" },
      { name: "Coral Gables", href: "/areas/coral-gables/" },
      { name: "Boca Raton", href: "/areas/boca-raton/" },
      { name: "Hollywood", href: "/areas/hollywood/" },
      { name: "Pembroke Pines", href: "/areas/pembroke-pines/" },
      { name: "Aventura", href: "/areas/aventura/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Financing Options", href: "/financing/" },
      { name: "Our Installation Process", href: "/our-process/" },
      { name: "Warranty Information", href: "/warranties/" },
      { name: "Careers", href: "/careers/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy/" },
      { name: "Terms of Service", href: "/terms-of-service/" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-gray-300">Browse all pages on the Florida Impact Windows & Doors website.</p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-gray-900 font-display mb-4 pb-2 border-b-2 border-palm-500">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-palm-600 transition-colors group"
                      >
                        <svg className="w-3 h-3 text-palm-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us directly and we will be happy to help you find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
