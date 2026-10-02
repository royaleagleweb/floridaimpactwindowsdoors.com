import Link from "next/link";

export type GuideLink = {
  href: string;
  title: string;
  excerpt?: string;
};

export default function RelatedGuides({
  heading,
  intro,
  guides,
}: {
  heading: string;
  intro?: string;
  guides: GuideLink[];
}) {
  if (guides.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-3">
          {heading}
        </h2>
        {intro && (
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">{intro}</p>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group block rounded-2xl border border-gray-200 p-5 hover:border-palm-300 hover:bg-palm-50 transition-all"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-palm-700 font-display leading-snug">
                {guide.title}
              </h3>
              {guide.excerpt && (
                <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
                  {guide.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
