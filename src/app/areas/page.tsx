import Link from "next/link";
import type { Metadata } from "next";
import { cities, getCitiesByCounty } from "@/data/cities";

export const metadata: Metadata = {
  title: "Service Areas | Impact Windows & Doors Across South Florida",
  description:
    "Florida Impact Windows & Doors serves Miami-Dade, Broward & Palm Beach County with professional impact window and door installation. Find your city and get a free estimate today.",
  openGraph: {
    title: "Service Areas | Impact Windows & Doors Across South Florida",
    description:
      "Florida Impact Windows & Doors serves Miami-Dade, Broward & Palm Beach County with professional impact window and door installation. Find your city and get a free estimate today.",
  },
};

const countyDescriptions: Record<string, string> = {
  "Miami-Dade":
    "Miami-Dade County is ground zero for hurricane preparedness in South Florida. With some of the strictest building codes in the nation, impact windows and doors are essential for every homeowner from Miami Beach to Homestead.",
  Broward:
    "Broward County stretches from the Atlantic coast to the Everglades, with diverse communities that all share one thing in common: the need for reliable hurricane protection. We serve every city in Broward with expert impact window installation.",
  "Palm Beach":
    "Palm Beach County features everything from oceanfront estates to western equestrian communities. Whether you live in Boca Raton or Jupiter, our team delivers premium impact window and door solutions tailored to your home.",
};

const countyIcons: Record<string, React.ReactNode> = {
  "Miami-Dade": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Broward: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Palm Beach": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function AreasPage() {
  const counties = ["Miami-Dade", "Broward", "Palm Beach"] as const;

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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Service Areas</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Serving {cities.length}+ Communities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Window & Door{" "}
              <span className="gradient-text">Service Areas</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Florida Impact Windows & Doors proudly serves homeowners across Miami-Dade, Broward, and Palm Beach County with professional impact window and door installation. Find your city below and discover how we can protect your home.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text-green mb-1">3</div>
              <div className="text-sm text-gray-500 font-medium">Counties Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text-green mb-1">{cities.length}+</div>
              <div className="text-sm text-gray-500 font-medium">Cities & Towns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text-green mb-1">5,000+</div>
              <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* County Sections */}
      {counties.map((county, index) => {
        const countyCities = getCitiesByCounty(county);
        const bgClass = index % 2 === 0 ? "bg-gray-50" : "bg-white";

        return (
          <section key={county} className={`py-20 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-start gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 flex-shrink-0 border border-palm-100">
                  {countyIcons[county]}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-3">
                    {county} County
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    {countyDescriptions[county]}
                  </p>
                  <p className="text-sm text-palm-600 font-semibold mt-2">
                    {countyCities.length} cities served
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {countyCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/${city.slug}/`}
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-palm-600 transition-colors font-display">
                        {city.name}
                      </h3>
                      <svg className="w-5 h-5 text-gray-300 group-hover:text-palm-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    {city.population && (
                      <p className="text-sm text-gray-500 mb-2">
                        Pop. {city.population}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {city.description.substring(0, 120)}...
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Don&apos;t See Your City?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We serve all of South Florida&apos;s tri-county area. Even if your city isn&apos;t listed above, chances are we can help. Contact us for a free in-home estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
