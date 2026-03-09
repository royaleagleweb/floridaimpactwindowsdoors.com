"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    name: "Services",
    href: "/services/impact-windows/",
    children: [
      { name: "Impact Windows", href: "/services/impact-windows/" },
      { name: "Impact Doors", href: "/services/impact-doors/" },
      { name: "Hurricane Shutters", href: "/services/hurricane-shutters/" },
      { name: "Energy Efficient Windows", href: "/services/energy-efficient-windows/" },
      { name: "Window Replacement", href: "/services/window-replacement/" },
      { name: "Door Replacement", href: "/services/door-replacement/" },
      { name: "Commercial Services", href: "/services/commercial-services/" },
    ],
  },
  {
    name: "Window Types",
    href: "/services/window-types/",
    children: [
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
    name: "Door Types",
    href: "/services/door-types/",
    children: [
      { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
      { name: "French Doors", href: "/services/door-types/french/" },
      { name: "Entry Doors", href: "/services/door-types/entry/" },
      { name: "Patio Doors", href: "/services/door-types/patio/" },
      { name: "Pivot Doors", href: "/services/door-types/pivot/" },
      { name: "Garage Doors", href: "/services/door-types/garage/" },
    ],
  },
  {
    name: "Brands",
    href: "/brands/pgt/",
    children: [
      { name: "PGT Windows & Doors", href: "/brands/pgt/" },
      { name: "CGI Windows & Doors", href: "/brands/cgi/" },
      { name: "ES Windows", href: "/brands/es-windows/" },
      { name: "Custom Window Systems", href: "/brands/custom-window-systems/" },
    ],
  },
  {
    name: "Areas",
    href: "/areas/miami/",
    children: [
      { name: "Miami-Dade County", href: "/areas/miami/" },
      { name: "Broward County", href: "/areas/fort-lauderdale/" },
      { name: "Palm Beach County", href: "/areas/west-palm-beach/" },
      { name: "View All Cities", href: "/areas/" },
    ],
  },
  { name: "About", href: "/about/" },
  { name: "Blog", href: "/blog/" },
  { name: "FAQ", href: "/faq/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+17546004876" className="flex items-center gap-2 hover:text-palm-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (754) 600-4876
            </a>
            <span className="hidden md:flex items-center gap-2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Fort Lauderdale, FL &bull; Serving Broward &amp; Palm Beach County
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61582625818330" aria-label="Facebook" className="text-gray-500 hover:text-palm-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/sofloimpactwindows" aria-label="Instagram" className="text-gray-500 hover:text-palm-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://twitter.com/SofloImpact" aria-label="X / Twitter" className="text-gray-500 hover:text-palm-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/17546004876" aria-label="WhatsApp" className="text-gray-500 hover:text-palm-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative -my-4">
              <Image
                src="/images/logo.png"
                alt="Florida Impact Windows & Doors"
                width={200}
                height={200}
                className="h-20 w-20 object-contain"
                priority
              />
              <div className="ml-2 hidden sm:block">
                <span className="text-lg font-bold text-ocean-950 font-display leading-tight block">
                  Florida<span className="text-palm-500">Impact</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                  Windows &amp; Doors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-palm-600 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                    {item.children && (
                      <svg className="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[240px] overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-palm-600 hover:bg-gray-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-estimate/"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
              >
                Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-palm-600 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-palm-600 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-6 py-3 rounded-full font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
