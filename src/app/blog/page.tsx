import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Impact Window Tips, Guides & News",
  description:
    "Expert articles on impact windows, hurricane protection, energy efficiency, insurance savings, and home improvement for South Florida homeowners. Stay informed with Florida Impact Windows & Doors.",
  openGraph: {
    title: "Blog | Impact Window Tips, Guides & News | Florida Impact Windows & Doors",
    description:
      "Expert articles on impact windows, hurricane protection, energy efficiency, insurance savings, and home improvement for South Florida homeowners.",
  },
};

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">
                Florida Impact Windows & Doors Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Impact Window{" "}
              <span className="gradient-text">Insights & Guides</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Expert advice on impact windows, hurricane protection, energy
              savings, insurance discounts, and everything South Florida
              homeowners need to know to protect and improve their homes.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <Link
              href="/blog/"
              className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-palm-600 text-white transition-colors"
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <span
                key={category}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-palm-50 hover:text-palm-600 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href={`/blog/${blogPosts[0].slug}/`}
            className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Placeholder */}
              <div className="relative h-64 lg:h-full min-h-[320px] bg-gradient-to-br from-ocean-100 via-palm-50 to-ocean-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-sm">
                    <svg
                      className="w-10 h-10 text-palm-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-ocean-600/60">
                    Featured Article
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-palm-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-palm-600 bg-palm-50 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold font-display text-gray-900 mb-4 group-hover:text-palm-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-palm-400 to-ocean-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SW</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {blogPosts[0].author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(blogPosts[0].date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900">
                Latest Articles
              </h2>
              <p className="text-gray-500 mt-1">
                {blogPosts.length} articles on impact windows and hurricane
                protection
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="relative h-52 bg-gradient-to-br from-gray-100 via-ocean-50 to-palm-50 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <svg
                      className="w-7 h-7 text-palm-600/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-palm-600 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-gray-900 mb-3 group-hover:text-palm-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-palm-400 to-ocean-500 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">
                          SW
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {post.author}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-palm-600 font-semibold text-xs group-hover:gap-2 transition-all">
                      Read More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free in-home consultation with our impact window experts.
            We&apos;ll assess your home, answer your questions, and provide a
            detailed, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Free Estimate
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+17865551234"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
