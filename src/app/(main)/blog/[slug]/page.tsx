import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { addBlogInternalLinks } from "@/lib/blogLinks";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://floridaimpactwindowsdoors.com/blog/${slug}/`,
    },
    openGraph: {
      title: `${post.title} | Florida Impact Windows & Doors Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // If not enough posts in same category, fill with other recent posts
  const additionalPosts =
    relatedPosts.length < 3
      ? blogPosts
          .filter(
            (p) =>
              p.id !== post.id && !relatedPosts.find((rp) => rp.id === p.id)
          )
          .slice(0, 3 - relatedPosts.length)
      : [];

  const allRelated = [...relatedPosts, ...additionalPosts];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Florida Impact Windows & Doors",
      url: "https://floridaimpactwindowsdoors.com",
    },
    mainEntityOfPage: `https://floridaimpactwindowsdoors.com/blog/${post.slug}/`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://floridaimpactwindowsdoors.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://floridaimpactwindowsdoors.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero / Header */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 lg:py-24">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 text-gray-600"
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
            <Link
              href="/blog/"
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <svg
              className="w-4 h-4 text-gray-600"
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
            <span className="text-gray-500 truncate max-w-xs">
              {post.title}
            </span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block bg-palm-500/20 text-palm-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <time className="text-sm text-gray-400" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-8">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-400 to-ocean-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">SW</span>
            </div>
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-sm text-gray-400">Impact Window Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Featured Image Placeholder */}
              <div className="relative h-72 md:h-96 bg-gradient-to-br from-ocean-100 via-palm-50 to-ocean-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-3 shadow-sm">
                    <svg
                      className="w-10 h-10 text-palm-600/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-ocean-600/50">
                    Article Image
                  </span>
                </div>
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-palm-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: addBlogInternalLinks(post.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1.5 rounded-full hover:bg-palm-50 hover:text-palm-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 border border-palm-100 mb-8">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                  Get a Free Estimate
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Ready to upgrade your home with impact windows? Schedule a free
                  consultation with our experts today.
                </p>
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-6 py-3 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="tel:+17546004876"
                  className="block w-full text-center mt-3 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors"
                >
                  Or Call (754) 600-4876
                </a>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold font-display text-gray-900 mb-6">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {allRelated.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.slug}/`}
                      className="group block"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-gray-100 to-ocean-50 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-palm-600/40"
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
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-palm-600 transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1.5">
                            {new Date(related.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}{" "}
                            &middot; {related.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-8">
                <h3 className="text-lg font-bold font-display text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {Array.from(
                    new Set(blogPosts.map((p) => p.category))
                  ).map((category) => {
                    const count = blogPosts.filter(
                      (p) => p.category === category
                    ).length;
                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm text-gray-700 font-medium">
                          {category}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900">
              More Articles
            </h2>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors text-sm"
            >
              View All
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
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}/`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-100 via-ocean-50 to-palm-50 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-palm-600/40"
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
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gray-400">
                      {new Date(p.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <h3 className="text-sm font-bold font-display text-gray-900 mt-2 group-hover:text-palm-600 transition-colors leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Protect Your Home with Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of South Florida homeowners who trust Florida Impact Windows & Doors.
            Schedule your free in-home consultation today and get a no-obligation
            estimate.
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
              href="tel:+17546004876"
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
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
