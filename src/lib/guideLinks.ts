import { blogPosts } from "@/data/blog";
import type { GuideLink } from "@/components/RelatedGuides";

function toGuide(slug: string): GuideLink {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Unknown blog slug in guide links: ${slug}`);
  }
  return {
    href: `/blog/${post.slug}/`,
    title: post.title,
    excerpt: post.excerpt,
  };
}

export function guidesBySlugs(slugs: string[]): GuideLink[] {
  return slugs.map(toGuide);
}

/** Three posts per city, stepped through the catalog so every article is linked from several hubs. */
export function guidesForCity(cityIndex: number, count = 3): GuideLink[] {
  const n = blogPosts.length;
  if (n === 0) return [];
  const start = (((cityIndex % n) + n) % n) * count;
  return Array.from({ length: count }, (_, i) => {
    const post = blogPosts[(start + i) % n];
    return {
      href: `/blog/${post.slug}/`,
      title: post.title,
      excerpt: post.excerpt,
    };
  });
}

export const impactWindowGuides = guidesBySlugs([
  "impact-windows-cost-south-florida-2026",
  "impact-windows-vs-hurricane-shutters",
  "high-velocity-hurricane-zone-miami-dade-broward",
  "noise-reduction-impact-windows-south-florida",
  "impact-windows-reduce-condensation-south-florida",
  "wind-mitigation-inspection-insurance-discount",
]);

export const impactDoorGuides = guidesBySlugs([
  "impact-doors-just-as-important-as-impact-windows",
  "impact-sliding-glass-doors-buyers-guide",
  "impact-french-doors-south-florida",
  "sliding-glass-door-replacement-south-florida",
  "impact-entry-doors-south-florida",
  "multi-point-locking-systems-impact-windows-doors",
]);

export const shutterGuides = guidesBySlugs([
  "impact-windows-vs-hurricane-shutters",
  "prepare-windows-hurricane-season-south-florida",
  "hurricane-season-preparation-month-by-month-guide",
]);

export const windowReplacementGuides = guidesBySlugs([
  "replace-vs-repair-impact-windows",
  "impact-window-requirements-older-homes-south-florida",
  "what-to-expect-impact-window-installation",
  "florida-building-code-impact-window-requirements",
]);

export const doorReplacementGuides = guidesBySlugs([
  "impact-entry-doors-south-florida",
  "impact-sliding-glass-doors-buyers-guide",
  "sliding-glass-door-replacement-south-florida",
  "impact-french-doors-south-florida",
  "impact-doors-just-as-important-as-impact-windows",
]);

export const energyGuides = guidesBySlugs([
  "low-e-glass-energy-efficient-impact-windows",
  "energy-savings-impact-windows-south-florida",
  "impact-windows-reduce-condensation-south-florida",
]);

export const commercialGuides = guidesBySlugs([
  "impact-windows-commercial-properties-south-florida",
  "condo-hoa-impact-window-installation-south-florida",
]);

export const financingGuides = guidesBySlugs([
  "financing-options-impact-windows-south-florida",
  "my-safe-florida-home-grant-impact-windows",
  "roi-impact-windows-south-florida",
  "impact-windows-cost-south-florida-2026",
  "impact-window-cost-broward-county",
  "impact-windows-tax-deductible-florida",
  "wind-mitigation-inspection-insurance-discount",
  "impact-windows-lower-home-insurance-south-florida",
]);

export const homeGuides = guidesBySlugs([
  "impact-windows-cost-south-florida-2026",
  "financing-options-impact-windows-south-florida",
  "roi-impact-windows-south-florida",
  "noise-reduction-impact-windows-south-florida",
  "impact-windows-reduce-condensation-south-florida",
  "wind-mitigation-inspection-insurance-discount",
  "high-velocity-hurricane-zone-miami-dade-broward",
  "florida-building-code-impact-window-requirements",
]);

export const serviceIndexGuides = guidesBySlugs([
  "impact-windows-vs-hurricane-shutters",
  "choosing-right-impact-window-style",
  "impact-window-ratings-certifications-explained",
  "best-impact-windows-waterfront-homes-south-florida",
]);

export const pgtGuides = guidesBySlugs([
  "pgt-vs-cgi-impact-windows-comparison",
  "vinyl-vs-aluminum-impact-window-frames",
  "impact-window-warranties-south-florida",
]);

export const cgiGuides = guidesBySlugs([
  "pgt-vs-cgi-impact-windows-comparison",
  "best-impact-windows-waterfront-homes-south-florida",
  "impact-windows-commercial-properties-south-florida",
]);

export const esGuides = guidesBySlugs([
  "vinyl-vs-aluminum-impact-window-frames",
  "impact-windows-cost-south-florida-2026",
  "impact-window-warranties-south-florida",
]);
