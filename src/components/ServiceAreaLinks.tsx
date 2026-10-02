import Link from "next/link";
import { cities } from "@/data/cities";

const cityNameToSlug: Record<string, string> = {};
for (const city of cities) {
  cityNameToSlug[city.name] = city.slug;
}

/** Old or shortened labels that should land on a live city hub. */
const nameAliases: Record<string, string> = {
  "Lake Worth": "Lake Worth Beach",
  "Sunny Isles": "Sunny Isles Beach",
};

/** Hubs that were easy for Google to miss because they were not in the old footer lists. */
const extraByCounty: Record<string, string[]> = {
  "Miami-Dade County": ["Miami Gardens"],
  "Broward County": ["Pompano Beach", "North Lauderdale"],
  "Palm Beach County": ["Royal Palm Beach", "Greenacres", "Juno Beach", "Tequesta", "Lake Worth Beach"],
};

interface ServiceAreaLinksProps {
  title: string;
  subtitle?: string;
  counties: {
    county: string;
    cities: string[];
    href: string;
  }[];
}

function resolveName(name: string): string {
  return nameAliases[name] ?? name;
}

export default function ServiceAreaLinks({ title, subtitle, counties }: ServiceAreaLinksProps) {
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
          {counties.map((area) => {
            const seen = new Set<string>();
            const items: { label: string; slug?: string }[] = [];
            const names = [...area.cities, ...(extraByCounty[area.county] ?? [])];
            for (const raw of names) {
              const label = resolveName(raw);
              const slug = cityNameToSlug[label];
              const key = slug ?? label;
              if (seen.has(key)) continue;
              seen.add(key);
              items.push({ label, slug });
            }

            return (
              <div key={area.county} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                  <Link href={area.href} className="hover:text-palm-600 transition-colors">
                    {area.county}
                  </Link>
                </h3>
                <ul className="space-y-2 mb-6">
                  {items.map((item) => (
                    <li key={item.slug ?? item.label} className="flex items-center gap-2 text-gray-600">
                      <svg
                        className="w-4 h-4 text-palm-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item.slug ? (
                        <Link
                          href={`/areas/${item.slug}/`}
                          className="hover:text-palm-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/areas/"
                  className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors text-sm"
                >
                  View all cities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
