"use client";

import { useState, useEffect, useRef } from "react";
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
  {
    name: "Resources",
    href: "/blog/",
    children: [
      { name: "Blog", href: "/blog/" },
      { name: "FAQ", href: "/faq/" },
      { name: "Hurricane Tips", href: "/hurricane-tips/" },
      { name: "Contractor Checklist", href: "/contractor-checklist/" },
      { name: "Our Process", href: "/our-process/" },
      { name: "Financing", href: "/financing/" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change (resize)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileExpanded(null);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-ocean-950 text-white text-sm py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+17546004876" className="flex items-center gap-2 hover:text-palm-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (754) 600-4876
            </a>
            <span className="hidden md:flex items-center gap-2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Hollywood, FL &bull; Serving Broward &amp; Palm Beach County
            </span>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-ocean-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
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
                <span className="text-lg font-bold text-white font-display leading-tight block">
                  Florida<span className="text-palm-400">Impact</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                  Windows &amp; Doors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-palm-400 transition-colors rounded-lg hover:bg-white/5"
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    {item.name}
                    {item.children && (
                      <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </a>
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="bg-ocean-800 rounded-xl shadow-2xl shadow-black/40 border border-white/10 py-2 min-w-[240px] overflow-hidden backdrop-blur-xl">
                        <a
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-palm-400 hover:bg-white/5 transition-colors border-b border-white/5 mb-1"
                        >
                          View All {item.name} &rarr;
                        </a>
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-400 hover:text-palm-400 hover:bg-white/5 transition-colors"
                          >
                            {child.name}
                          </a>
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
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (mobileMenuOpen) setMobileExpanded(null);
                }}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
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
          <div className="lg:hidden bg-ocean-900 border-t border-white/5 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-200 hover:text-palm-400 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.name}
                        <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="pl-4 space-y-1 pb-2">
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm font-semibold text-palm-400 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All {item.name} &rarr;
                          </a>
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-500 hover:text-palm-400 hover:bg-white/5 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-palm-400 hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-6 py-3 rounded-full font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
