import Link from "next/link";

const allDoorTypes = [
  { name: "Sliding Glass", href: "/services/door-types/sliding-glass/" },
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
  { name: "Garage Doors", href: "/services/door-types/garage/" },
  { name: "Storm Doors", href: "/services/door-types/storm/" },
];

export default function RelatedDoorTypes({ current }: { current: string }) {
  const others = allDoorTypes.filter((t) => t.href !== current);

  return (
    <section className="py-16 bg-ocean-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold font-display text-white mb-6 text-center">
          Explore Other Impact Door Types
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className="group flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-palm-500/30 transition-all"
            >
              <svg
                className="w-5 h-5 text-palm-400 flex-shrink-0 group-hover:translate-x-1 transition-transform"
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
              <span className="text-sm text-gray-300 group-hover:text-palm-400 transition-colors font-medium">
                {type.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/services/door-types/"
            className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm hover:text-palm-300 transition-colors"
          >
            View All Door Types
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
