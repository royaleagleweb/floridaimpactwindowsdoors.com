import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faq";

export const dynamic = "force-static";

const BASE = "https://floridaimpactwindowsdoors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ── Static pages ───────────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${BASE}/contact/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/get-estimate/`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${BASE}/blog/`, changeFrequency: "weekly", priority: 0.8, lastModified: now },
    { url: `${BASE}/faq/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE}/areas/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/financing/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE}/reviews/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE}/gallery/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE}/our-process/`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE}/warranties/`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE}/careers/`, changeFrequency: "monthly", priority: 0.5, lastModified: now },
    { url: `${BASE}/privacy-policy/`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${BASE}/terms-of-service/`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${BASE}/hurricane-tips/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE}/contractor-checklist/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
  ];

  /* ── Service pages ──────────────────────────────────── */
  const servicePages: MetadataRoute.Sitemap = [
    "impact-windows",
    "impact-doors",
    "hurricane-shutters",
    "energy-efficient-windows",
    "window-replacement",
    "door-replacement",
    "commercial-services",
  ].map((s) => ({
    url: `${BASE}/services/${s}/`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    lastModified: now,
  }));

  /* ── Window type pages ──────────────────────────────── */
  const windowTypes: MetadataRoute.Sitemap = [
    "single-hung",
    "double-hung",
    "casement",
    "awning",
    "sliding",
    "picture",
    "bay",
    "bow",
  ].map((w) => ({
    url: `${BASE}/services/window-types/${w}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const windowTypesIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/services/window-types/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
  ];

  /* ── Door type pages ────────────────────────────────── */
  const doorTypes: MetadataRoute.Sitemap = [
    "sliding-glass",
    "french",
    "entry",
    "patio",
    "pivot",
    "garage",
    "storm",
  ].map((d) => ({
    url: `${BASE}/services/door-types/${d}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const doorTypesIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/services/door-types/`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
  ];

  /* ── Brand pages ────────────────────────────────────── */
  const brandPages: MetadataRoute.Sitemap = [
    "pgt",
    "cgi",
    "es-windows",
    "custom-window-systems",
  ].map((b) => ({
    url: `${BASE}/brands/${b}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  /* ── City pages ─────────────────────────────────────── */
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/areas/${c.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  /* ── City × Service combo pages ─────────────────────── */
  const cityServices = [
    "impact-windows",
    "impact-doors",
    "hurricane-shutters",
    "window-replacement",
    "door-replacement",
  ];

  const cityServicePages: MetadataRoute.Sitemap = cities.flatMap((c) =>
    cityServices.map((s) => ({
      url: `${BASE}/areas/${c.slug}/${s}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      lastModified: now,
    }))
  );

  /* ── Blog posts ─────────────────────────────────────── */
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified: p.date,
  }));

  /* ── FAQ pages ──────────────────────────────────────── */
  const faqPages: MetadataRoute.Sitemap = faqs.map((f) => ({
    url: `${BASE}/faq/${f.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...windowTypesIndex,
    ...windowTypes,
    ...doorTypesIndex,
    ...doorTypes,
    ...brandPages,
    ...cityPages,
    ...cityServicePages,
    ...blogPages,
    ...faqPages,
  ];
}
