import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Impact Window & Door Installations | Florida Impact Windows & Doors",
  description:
    "Browse our gallery of completed impact window and door installations across South Florida. See before and after photos from Miami-Dade, Broward, and Palm Beach County homes.",
};

const filterTypes = ["All Projects", "Windows", "Doors", "Commercial"];

const projects = [
  {
    title: "Modern Waterfront Estate",
    location: "Key Biscayne, FL",
    description:
      "Full home replacement with CGI Sentinel impact windows and multi-slide doors. 28 openings including a 16-foot sliding glass door system overlooking Biscayne Bay.",
    brand: "CGI",
    type: "Windows & Doors",
    category: "Doors",
    openings: 28,
  },
  {
    title: "Mediterranean Revival Home",
    location: "Coral Gables, FL",
    description:
      "Complete window replacement with PGT WinGuard single hung and casement windows. Custom archtop fixed windows to match the original 1940s architectural detailing.",
    brand: "PGT",
    type: "Windows",
    category: "Windows",
    openings: 22,
  },
  {
    title: "Luxury High-Rise Condo",
    location: "Sunny Isles Beach, FL",
    description:
      "Floor-to-ceiling CGI Sentinel windows for a 32nd-floor oceanfront unit. Engineered for extreme wind loads and salt spray exposure with marine-grade finishes.",
    brand: "CGI",
    type: "Windows",
    category: "Windows",
    openings: 8,
  },
  {
    title: "Ranch-Style Family Home",
    location: "Pembroke Pines, FL",
    description:
      "Budget-friendly whole-home upgrade with ES Windows impact single hung and horizontal rollers. 18 openings completed in just four days with zero disruption to the family.",
    brand: "ES Windows",
    type: "Windows",
    category: "Windows",
    openings: 18,
  },
  {
    title: "Contemporary New Build",
    location: "Fort Lauderdale, FL",
    description:
      "Custom Window Systems Contour series throughout a newly built modern home. Featuring ultra-narrow sightlines, matte black frames, and oversized pivot entry door.",
    brand: "CWS",
    type: "Windows & Doors",
    category: "Doors",
    openings: 24,
  },
  {
    title: "Beachfront Cottage Renovation",
    location: "Delray Beach, FL",
    description:
      "Charming beach cottage upgraded with PGT EnergyVue vinyl impact windows. Energy-efficient Low-E glass cut cooling costs by 40% while maintaining the cottage character.",
    brand: "PGT",
    type: "Windows",
    category: "Windows",
    openings: 14,
  },
  {
    title: "Townhouse Community",
    location: "Doral, FL",
    description:
      "Multi-unit townhouse project installing ES Windows impact products across 12 units. Coordinated with the HOA for consistent exterior appearance and scheduled around residents.",
    brand: "ES Windows",
    type: "Windows & Doors",
    category: "Commercial",
    openings: 96,
  },
  {
    title: "Art Deco Restoration",
    location: "Miami Beach, FL",
    description:
      "Careful restoration of an Art Deco landmark building with PGT WinGuard windows custom-profiled to match the original 1930s window proportions while meeting Miami-Dade impact codes.",
    brand: "PGT",
    type: "Windows",
    category: "Windows",
    openings: 16,
  },
  {
    title: "Indoor-Outdoor Living Transformation",
    location: "Boca Raton, FL",
    description:
      "CWS multi-slide door system transforming a living room wall into a 20-foot opening to the covered patio. Combined with fixed impact picture windows for panoramic backyard views.",
    brand: "CWS",
    type: "Doors & Windows",
    category: "Doors",
    openings: 6,
  },
  {
    title: "Colonial-Style Estate",
    location: "Palm Beach Gardens, FL",
    description:
      "Elegant PGT WinGuard double hung windows throughout a stately colonial home. Decorative grille patterns between the glass maintain the traditional look with modern impact protection.",
    brand: "PGT",
    type: "Windows",
    category: "Windows",
    openings: 30,
  },
  {
    title: "Mid-Century Modern Renovation",
    location: "Miami Shores, FL",
    description:
      "Period-appropriate impact window replacement using CWS Contour series with slim profiles that complement the clean lines of this 1957 mid-century modern home.",
    brand: "CWS",
    type: "Windows & Doors",
    category: "Windows",
    openings: 20,
  },
  {
    title: "Commercial Storefront",
    location: "Aventura, FL",
    description:
      "CGI Targa commercial storefront system installed for a retail location in Aventura. Large fixed panels with aluminum swing entry doors meeting commercial impact requirements.",
    brand: "CGI",
    type: "Commercial",
    category: "Commercial",
    openings: 12,
  },
];

const beforeAfterProjects = [
  {
    title: "1960s Jalousie to Impact Single Hung",
    location: "Hialeah, FL",
    before: "Original jalousie windows with no hurricane protection, poor insulation, and visible rust on aluminum frames.",
    after: "Brand new PGT WinGuard single hung impact windows with Low-E glass, clean white frames, and full hurricane certification.",
  },
  {
    title: "Sliding Glass Door Upgrade",
    location: "Weston, FL",
    before: "Outdated non-impact sliding glass door with a cracked track, foggy glass, and plywood shutters stored in the garage.",
    after: "CGI Sentinel triple-panel sliding glass door with impact-rated laminated glass, smooth gliding track, and built-in hurricane protection.",
  },
  {
    title: "Aluminum Awning to Vinyl Casement",
    location: "Coconut Creek, FL",
    before: "Old aluminum awning windows that leaked during rain, had no energy efficiency rating, and required accordion shutters for storms.",
    after: "ES Windows vinyl casement impact windows with energy-efficient Low-E coated glass, watertight seals, and integrated hurricane protection.",
  },
  {
    title: "Commercial Storefront Renovation",
    location: "Miami, FL",
    before: "Non-impact commercial glass with plywood boards required during every hurricane warning. Lost business days due to storm preparation.",
    after: "CGI Targa commercial impact storefront system. No more boarding up, no lost business days, and a modern appearance that attracts customers.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Project <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Browse completed impact window and door installations from across South Florida. Every project showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {filterTypes.map((filter) => (
              <span
                key={filter}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  filter === "All Projects"
                    ? "bg-palm-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-palm-50 hover:text-palm-600"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Featured Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Recent Installations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beachfront condos to sprawling estates, see how Florida Impact Windows & Doors protects homes across the tri-county area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                {/* Image Placeholder */}
                <div className="h-52 bg-gradient-to-br from-ocean-100 to-palm-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-ocean-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                      <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
                      <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
                    </svg>
                    <span className="text-sm text-ocean-400 font-medium">Project Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-bold bg-palm-100 text-palm-700 px-2 py-1 rounded-full">{project.brand}</span>
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{project.category}</span>
                    <span className="text-xs font-medium bg-ocean-100 text-ocean-600 px-2 py-1 rounded-full">{project.openings} openings</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-display group-hover:text-palm-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-palm-600 font-medium mb-3">{project.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Transformations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Before & After
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic difference impact windows and doors make. Every transformation improves protection, energy efficiency, and curb appeal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-2">
                  {/* Before Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    <span className="absolute top-3 left-3 bg-gray-800/80 text-white text-xs font-bold px-3 py-1 rounded-full">Before</span>
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                      <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
                      <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
                    </svg>
                  </div>
                  {/* After Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-palm-100 to-ocean-100 flex items-center justify-center relative">
                    <span className="absolute top-3 left-3 bg-palm-600 text-white text-xs font-bold px-3 py-1 rounded-full">After</span>
                    <svg className="w-10 h-10 text-palm-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                      <line x1="3" y1="12" x2="21" y2="12" strokeWidth={1.5} />
                      <line x1="12" y1="3" x2="12" y2="21" strokeWidth={1.5} />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">{project.title}</h3>
                  <p className="text-sm text-palm-600 font-medium mb-4">{project.location}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Before</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.before}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-palm-600 uppercase tracking-wider mb-1">After</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Your Home Could Be Our Next Project
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your home with impact windows and doors? Schedule your free estimate and join the growing list of South Florida homeowners protected by Florida Impact Windows & Doors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17865551234" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
