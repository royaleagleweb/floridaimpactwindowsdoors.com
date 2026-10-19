import Link from "next/link";
import type { ReactNode } from "react";
import type { City } from "@/data/cities";
import { faqPageJsonLd, type FaqItem } from "@/lib/faqSchema";
import PageFaqSection from "@/components/PageFaqSection";

export default function CountyHubPage({
  countyName,
  h1,
  lede,
  codeHeading,
  codeBody,
  installBody,
  cities,
  exclusionNote,
  blogHref,
  blogLabel,
  faqs,
}: {
  countyName: string;
  h1: string;
  lede: string;
  codeHeading: string;
  codeBody: string[];
  installBody: string[];
  cities: City[];
  exclusionNote?: ReactNode;
  blogHref: string;
  blogLabel: string;
  faqs: FaqItem[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />
      <section className="relative py-20 lg:py-28 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas/" className="hover:text-white transition-colors">Areas</Link>
            <span>/</span>
            <span className="text-white">{countyName}</span>
          </nav>
          <p className="text-sm text-palm-300 font-medium mb-4">
            Hollywood shop · 3000 Stirling Rd · (754) 600-4876
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{lede}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all"
            >
              Free in-home estimate
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              (754) 600-4876
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold font-display text-gray-900">{codeHeading}</h2>
          {codeBody.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold font-display text-gray-900">
            How a {countyName} replacement is specified
          </h2>
          {installBody.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <p>
            Cost drivers for this county are written up in{" "}
            <Link href={blogHref} className="text-palm-700 font-semibold hover:text-palm-800">
              {blogLabel}
            </Link>
            . That article is a planning guide. The number for a house is the written estimate after the openings are measured.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-3">
            Cities we serve in {countyName}
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Each city below has its own page. This county page is the code and permit overview. It is not a substitute for the city hub.
          </p>
          {exclusionNote ? (
            <p className="text-gray-600 mb-8 max-w-3xl">{exclusionNote}</p>
          ) : null}
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/areas/${city.slug}/`}
                  className="block rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 font-semibold text-gray-900 hover:border-palm-200 hover:text-palm-700 transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageFaqSection heading={`${countyName} impact window questions`} faqs={faqs} />

      <section className="py-16 bg-ocean-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Estimate from the Hollywood shop</h2>
          <p className="text-gray-300 mb-8">
            Florida Impact Windows &amp; Doors, 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876 or request a free estimate. We install in {countyName} from that shop. We do not publish a license number, a review score, or a years-in-business figure.
          </p>
          <Link
            href="/get-estimate/"
            className="inline-flex items-center justify-center bg-palm-500 text-white px-8 py-4 rounded-full font-bold hover:bg-palm-600 transition-colors"
          >
            Get a free estimate
          </Link>
        </div>
      </section>
    </>
  );
}
