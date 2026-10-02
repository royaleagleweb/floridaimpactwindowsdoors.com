import Link from "next/link";
import type { Metadata } from "next";
import RelatedGuides from "@/components/RelatedGuides";
import { pgtGuides } from "@/lib/guideLinks";

export const metadata: Metadata = {
  title: "Impact Window Brands We Install | PGT, CGI, ES & CWS",
  description:
    "Florida Impact Windows & Doors installs PGT, CGI, ES Windows, and Custom Window Systems from Hollywood. HVHZ/NOA in Miami-Dade and Broward. Palm Beach often accepts an FL#.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/brands/" },
};

const brands = [
  {
    name: "PGT WinGuard",
    href: "/brands/pgt/",
    summary:
      "The usual whole-house catalog when a Broward or Palm Beach home needs vinyl and aluminum, windows and doors, on one permit set. We are the Hollywood installer — PGT manufactures in Venice.",
  },
  {
    name: "CGI",
    href: "/brands/cgi/",
    summary:
      "The Miami line we price when an opening is oversized, high design-pressure, or a waterfront slider the standard residential matrix will not stamp. Sentinel and Estate are the series we specify for that work.",
  },
  {
    name: "ES Windows",
    href: "/brands/es-windows/",
    summary:
      "The South Florida aluminum line we use when the job is covering every opening and the sizes are ordinary. Same Hollywood crew, same permit, a different factory.",
  },
  {
    name: "Custom Window Systems",
    href: "/brands/custom-window-systems/",
    summary:
      "The line we quote when the opening is not a catalog single-hung: a custom shape, a narrow sightline, or a multi-slide an architect already drew.",
  },
];

export default function BrandsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" },
      { "@type": "ListItem", position: 2, name: "Brands" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Brands</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
              Impact window brands we install in South Florida
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Florida Impact Windows & Doors is the dealer-installer at 3000 Stirling Rd, Hollywood.
              PGT, CGI, ES Windows, and Custom Window Systems make the units. We measure, pull the
              permit, and set them in Miami-Dade, Broward, and Palm Beach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            Miami-Dade and Broward are the High-Velocity Hurricane Zone. Replacement glass there
            generally needs a current Miami-Dade Notice of Acceptance on the permit. Palm Beach is a
            wind-borne debris region, not HVHZ — a Florida Product Approval is often accepted. We do
            not copy a Broward NOA packet onto a Boca or West Palm job by default.
          </p>
          <p>
            A one-brand dealer has to make every opening look like that factory&apos;s problem. We
            keep four lines so a typical house, a tight budget, a custom shape, and an oversized
            coastal slider can be different answers on the same estimate.
          </p>
        </div>
      </section>

      <section className="py-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.href}
              href={brand.href}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-palm-300 transition-all"
            >
              <h2 className="text-2xl font-bold font-display text-gray-900 group-hover:text-palm-700 mb-3">
                {brand.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">{brand.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">How we start the conversation</h2>
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li>
              <strong className="text-gray-900">Typical house, mixed openings, one permit set.</strong>{" "}
              Start with <Link href="/brands/pgt/" className="text-palm-600 font-semibold hover:text-palm-700">PGT WinGuard</Link>.
            </li>
            <li>
              <strong className="text-gray-900">Every opening, ordinary aluminum sizes.</strong>{" "}
              Start with <Link href="/brands/es-windows/" className="text-palm-600 font-semibold hover:text-palm-700">ES Windows</Link>.
            </li>
            <li>
              <strong className="text-gray-900">Oceanfront, high-rise, or a slider another plant will not stamp.</strong>{" "}
              Start with <Link href="/brands/cgi/" className="text-palm-600 font-semibold hover:text-palm-700">CGI</Link>.
            </li>
            <li>
              <strong className="text-gray-900">A shape or sightline that is already on the drawings.</strong>{" "}
              Start with <Link href="/brands/custom-window-systems/" className="text-palm-600 font-semibold hover:text-palm-700">Custom Window Systems</Link>.
            </li>
          </ul>
          <p className="mt-8 text-gray-600 leading-relaxed">
            The written comparison is{" "}
            <Link href="/blog/pgt-vs-cgi-impact-windows-comparison/" className="text-palm-600 font-semibold hover:text-palm-700">PGT vs CGI</Link>
            . The table on the{" "}
            <Link href="/brands/pgt/#compare" className="text-palm-600 font-semibold hover:text-palm-700">PGT page</Link>{" "}
            is how we sort PGT, ES, and CGI on a real opening list. Cost and payment questions sit on{" "}
            <Link href="/financing/" className="text-palm-600 font-semibold hover:text-palm-700">financing</Link>{" "}
            and the{" "}
            <Link href="/blog/impact-windows-cost-south-florida-2026/" className="text-palm-600 font-semibold hover:text-palm-700">South Florida cost guide</Link>.
          </p>
        </div>
      </section>

      <RelatedGuides
        heading="Brand and product guides"
        intro="These articles are the same comparisons we use when a homeowner is choosing a line from the Hollywood shop."
        guides={pgtGuides}
      />

      <section className="py-16 bg-ocean-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">Price more than one line on the same openings</h2>
          <p className="text-gray-300 mb-8">
            Call (754) 600-4876 or request an estimate. We measure from Hollywood and write the permit for the county the house is actually in.
          </p>
          <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all">
            Get a free estimate
          </Link>
        </div>
      </section>
    </>
  );
}
