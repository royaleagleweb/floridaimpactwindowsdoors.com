import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Impact Windows", href: "/services/impact-windows/" },
    { name: "Impact Doors", href: "/services/impact-doors/" },
    { name: "Hurricane Shutters", href: "/services/hurricane-shutters/" },
    { name: "Energy Efficient Windows", href: "/services/energy-efficient-windows/" },
    { name: "Window Replacement", href: "/services/window-replacement/" },
    { name: "Door Replacement", href: "/services/door-replacement/" },
    { name: "Commercial Services", href: "/services/commercial-services/" },
  ],
  windowTypes: [
    { name: "Single Hung", href: "/services/window-types/single-hung/" },
    { name: "Double Hung", href: "/services/window-types/double-hung/" },
    { name: "Casement", href: "/services/window-types/casement/" },
    { name: "Awning", href: "/services/window-types/awning/" },
    { name: "Sliding", href: "/services/window-types/sliding/" },
    { name: "Picture", href: "/services/window-types/picture/" },
    { name: "Bay Windows", href: "/services/window-types/bay/" },
    { name: "Bow Windows", href: "/services/window-types/bow/" },
  ],
  doorTypes: [
    { name: "Sliding Glass Doors", href: "/services/door-types/sliding-glass/" },
    { name: "French Doors", href: "/services/door-types/french/" },
    { name: "Entry Doors", href: "/services/door-types/entry/" },
    { name: "Patio Doors", href: "/services/door-types/patio/" },
    { name: "Pivot Doors", href: "/services/door-types/pivot/" },
    { name: "Garage Doors", href: "/services/door-types/garage/" },
    { name: "Storm Doors", href: "/services/door-types/storm/" },
  ],
  company: [
    { name: "About Us", href: "/about/" },
    { name: "Reviews", href: "/reviews/" },
    { name: "Gallery", href: "/gallery/" },
    { name: "Blog", href: "/blog/" },
    { name: "FAQ", href: "/faq/" },
    { name: "Financing", href: "/financing/" },
    { name: "Our Process", href: "/our-process/" },
    { name: "Warranties", href: "/warranties/" },
    { name: "Careers", href: "/careers/" },
    { name: "Contact", href: "/contact/" },
  ],
  brands: [
    { name: "PGT Windows & Doors", href: "/brands/pgt/" },
    { name: "CGI Windows & Doors", href: "/brands/cgi/" },
    { name: "ES Windows", href: "/brands/es-windows/" },
    { name: "Custom Window Systems", href: "/brands/custom-window-systems/" },
  ],
  areas: [
    { name: "Miami", href: "/areas/miami/" },
    { name: "Fort Lauderdale", href: "/areas/fort-lauderdale/" },
    { name: "West Palm Beach", href: "/areas/west-palm-beach/" },
    { name: "Boca Raton", href: "/areas/boca-raton/" },
    { name: "Hollywood", href: "/areas/hollywood/" },
    { name: "Coral Gables", href: "/areas/coral-gables/" },
    { name: "Pembroke Pines", href: "/areas/pembroke-pines/" },
    { name: "Delray Beach", href: "/areas/delray-beach/" },
    { name: "Doral", href: "/areas/doral/" },
    { name: "View All Cities", href: "/areas/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-ocean-950 via-ocean-900 to-ocean-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for impact windows and doors. Our experts will visit your home and provide a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-palm-500/50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (754) 600-4876
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Florida Impact Windows & Doors"
                  width={120}
                  height={120}
                  className="h-16 w-16 object-contain rounded-lg bg-white p-1"
                />
                <div>
                  <span className="text-lg font-bold font-display">Florida<span className="text-palm-400">Impact</span></span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-gray-500">Windows &amp; Doors</span>
                </div>
              </Link>
              <p className="text-sm text-gray-500 mb-2">
                Premium Impact Windows &amp; Doors At Affordable Prices. Owner-installed, no subcontractors.
              </p>
              <p className="text-xs text-gray-600 mb-4">
                2895 NE 32 Street, Fort Lauderdale, FL 33306
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-palm-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0 on Google</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Window Types */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4">Window Types</h3>
              <ul className="space-y-2">
                {footerLinks.windowTypes.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Door Types */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4">Door Types</h3>
              <ul className="space-y-2">
                {footerLinks.doorTypes.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas + Brands */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {footerLinks.areas.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-bold uppercase tracking-wider text-palm-400 mb-4 mt-8">Brands</h3>
              <ul className="space-y-2">
                {footerLinks.brands.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>&copy; {new Date().getFullYear()} Florida Impact Windows &amp; Doors. All rights reserved.</span>
            <Link href="/privacy-policy/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
