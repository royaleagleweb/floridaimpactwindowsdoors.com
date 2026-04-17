import Link from "next/link";

const allWindowTypes = [
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

export default function RelatedWindowTypes({ current }: { current: string }) {
  const others = allWindowTypes.filter((t) => t.href !== current);

  return (
    <section className="py-16 bg-ocean-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold font-display text-white mb-6 text-center">
          Explore Other Impact Window Types
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            href="/services/window-types/"
            className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm hover:text-palm-300 transition-colors"
          >
            View All Window Types
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
