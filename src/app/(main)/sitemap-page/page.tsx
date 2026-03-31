import Link from "next/link";
import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Sitemap | Florida Impact Windows & Doors",
  description:
    "Browse the complete sitemap for Florida Impact Windows & Doors. Find links to all pages including services, brands, areas, blog posts, and resources.",
  alternates: {
    canonical: "https://floridaimpactwindowsdoors.com/sitemap-page/",
  },
};

const services = [
  { name: "Impact Windows", href: "/services/impact-windows/" },
  { name: "Impact Doors", href: "/services/impact-doors/" },
  { name: "Hurricane Shutters", href: "/services/hurricane-shutters/" },
  { name: "Energy Efficient Windows", href: "/services/energy-efficient-windows/" },
  { name: "Window Replacement", href: "/services/window-replacement/" },
  { name: "Door Replacement", href: "/services/door-replacement/" },
  { name: "Commercial Services", href: "/services/commercial-services/" },
];

const cityServices = [
  { label: "Impact Windows", slug: "impact-windows" },
  { label: "Impact Doors", slug: "impact-doors" },
  { label: "Hurricane Shutters", slug: "hurricane-shutters" },
  { label: "Window Replacement", slug: "window-replacement" },
  { label: "Door Replacement", slug: "door-replacement" },
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
  { name: "Hopper", href: "/services/window-types/hopper/" },
];

const doorTypes = [
  { name: "Sliding Glass", href: "/services/door-types/sliding-glass/" },
  { name: "French", href: "/services/door-types/french/" },
  { name: "Entry", href: "/services/door-types/entry/" },
  { name: "Patio", href: "/services/door-types/patio/" },
  { name: "Pivot", href: "/services/door-types/pivot/" },
  { name: "Garage", href: "/services/door-types/garage/" },
  { name: "Storm", href: "/services/door-types/storm/" },
];

const brands = [
  { name: "PGT Windows & Doors", href: "/brands/pgt/" },
  { name: "CGI Windows & Doors", href: "/brands/cgi/" },
  { name: "ES Windows", href: "/brands/es-windows/" },
  { name: "Custom Window Systems", href: "/brands/custom-window-systems/" },
];

const mainPages = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact/" },
  { name: "Get Free Estimate", href: "/get-estimate/" },
  { name: "Reviews & Testimonials", href: "/reviews/" },
  { name: "FAQ", href: "/faq/" },
  { name: "Blog", href: "/blog/" },
  { name: "All Service Areas", href: "/areas/" },
];

const resources = [
  { name: "Financing Options", href: "/financing/" },
  { name: "Our Installation Process", href: "/our-process/" },
  { name: "Warranty Information", href: "/warranties/" },
  { name: "Careers", href: "/careers/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms of Service", href: "/terms-of-service/" },
];

const miamDadeCities = cities.filter((c) => c.county === "Miami-Dade County");
const browardCities = cities.filter((c) => c.county === "Broward County");
const palmBeachCities = cities.filter((c) => c.county === "Palm Beach County");

function SitemapSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-gray-900 font-display mb-4 pb-2 border-b-2 border-palm-500">
        {title}
      </h2>
      {children}
    </div>
  );
}

function LinkList({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="space-y-1.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-gray-600 hover:text-palm-600 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
          <p className="text-lg text-gray-300">
            Browse all {cities.length * 5 + blogPosts.length + services.length + windowTypes.length + doorTypes.length + brands.length + mainPages.length + resources.length}+ pages on the Florida Impact Windows & Doors website.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Pages, Services, Brands */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <SitemapSection title="Main Pages">
              <LinkList links={mainPages} />
            </SitemapSection>

            <SitemapSection title="Services">
              <LinkList links={services} />
            </SitemapSection>

            <div>
              <SitemapSection title="Window Types">
                <LinkList links={windowTypes} />
              </SitemapSection>
              <SitemapSection title="Door Types">
                <LinkList links={doorTypes} />
              </SitemapSection>
            </div>

            <div>
              <SitemapSection title="Brands">
                <LinkList links={brands} />
              </SitemapSection>
              <SitemapSection title="Resources">
                <LinkList links={resources} />
              </SitemapSection>
            </div>
          </div>

          {/* Service Areas by County */}
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8">
            Service Areas ({cities.length} Cities)
          </h2>

          {[
            { title: "Miami-Dade County", citiesList: miamDadeCities },
            { title: "Broward County", citiesList: browardCities },
            { title: "Palm Beach County", citiesList: palmBeachCities },
          ].map(({ title, citiesList }) => (
            <div key={title} className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-4 pb-2 border-b border-gray-200">
                {title} ({citiesList.length} cities)
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                {citiesList.map((city) => (
                  <div key={city.slug}>
                    <Link
                      href={`/areas/${city.slug}/`}
                      className="text-sm font-semibold text-palm-600 hover:text-palm-700 transition-colors"
                    >
                      {city.name}
                    </Link>
                    <ul className="mt-1 space-y-0.5">
                      {cityServices.map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/areas/${city.slug}/${svc.slug}/`}
                            className="text-xs text-gray-500 hover:text-palm-600 transition-colors"
                          >
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Blog Posts */}
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-8 mt-16">
            Blog ({blogPosts.length} Articles)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="text-sm text-gray-600 hover:text-palm-600 transition-colors leading-snug"
              >
                {post.title}
              </Link>
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
