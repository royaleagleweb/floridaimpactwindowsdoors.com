import Link from "next/link";
import { cities } from "@/data/cities";

/* Map of city name → slug for quick lookup */
const cityNameToSlug: Record<string, string> = {};
for (const c of cities) {
  cityNameToSlug[c.name] = c.slug;
}

interface ServiceAreaLinksProps {
  /** The service slug used in /areas/[city]/[service]/ URLs */
  serviceSlug: string;
  /** Display title for the section, e.g. "Impact Window Installation Across South Florida" */
  title: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** County data with city names */
  counties: {
    county: string;
    cities: string[];
    href: string;
  }[];
}

export default function ServiceAreaLinks({ serviceSlug, title, subtitle, counties }: ServiceAreaLinksProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {counties.map((area) => (
            <div key={area.county} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                {area.county}
              </h3>
              <ul className="space-y-2 mb-6">
                {area.cities.map((cityName) => {
                  const slug = cityNameToSlug[cityName];
                  return (
                    <li key={cityName} className="flex items-center gap-2 text-gray-600">
                      <svg
                        className="w-4 h-4 text-palm-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {slug ? (
                        <Link
                          href={`/areas/${slug}/${serviceSlug}/`}
                          className="hover:text-palm-600 transition-colors"
                        >
                          {cityName}
                        </Link>
                      ) : (
                        cityName
                      )}
                    </li>
                  );
                })}
              </ul>
              <Link
                href={area.href}
                className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors text-sm"
              >
                View All {area.county} Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
