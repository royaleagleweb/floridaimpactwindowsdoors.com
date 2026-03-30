/**
 * Adds internal links to blog post content by replacing first occurrence
 * of key phrases with anchor tags. Only links each phrase once per post.
 */

const linkMap: [RegExp, string, string][] = [
  // Service pages
  [/\bimpact windows\b/i, "/services/impact-windows/", "impact windows"],
  [/\bimpact doors\b/i, "/services/impact-doors/", "impact doors"],
  [/\bhurricane shutters\b/i, "/services/hurricane-shutters/", "hurricane shutters"],
  [/\bwindow replacement\b/i, "/services/window-replacement/", "window replacement"],
  [/\bdoor replacement\b/i, "/services/door-replacement/", "door replacement"],
  [/\benergy.efficient windows\b/i, "/services/energy-efficient-windows/", "energy efficient windows"],
  // Window types
  [/\bsingle.hung\b/i, "/services/window-types/single-hung/", "single hung"],
  [/\bdouble.hung\b/i, "/services/window-types/double-hung/", "double hung"],
  [/\bcasement windows?\b/i, "/services/window-types/casement/", "casement windows"],
  [/\bawning windows?\b/i, "/services/window-types/awning/", "awning windows"],
  [/\bsliding windows?\b/i, "/services/window-types/sliding/", "sliding windows"],
  [/\bpicture windows?\b/i, "/services/window-types/picture/", "picture windows"],
  // Door types
  [/\bsliding glass doors?\b/i, "/services/door-types/sliding-glass/", "sliding glass doors"],
  [/\bFrench doors?\b/i, "/services/door-types/french/", "French doors"],
  [/\bentry doors?\b/i, "/services/door-types/entry/", "entry doors"],
  // Key city pages
  [/\bMiami\b(?![\w-])/, "/areas/miami/", "Miami"],
  [/\bFort Lauderdale\b/, "/areas/fort-lauderdale/", "Fort Lauderdale"],
  [/\bWest Palm Beach\b/, "/areas/west-palm-beach/", "West Palm Beach"],
  [/\bBoca Raton\b/, "/areas/boca-raton/", "Boca Raton"],
  [/\bHollywood(?:, FL| FL| Florida)?\b/, "/areas/hollywood/", "Hollywood"],
  [/\bCoral Springs\b/, "/areas/coral-springs/", "Coral Springs"],
  // Key resources
  [/\bfree estimate\b/i, "/get-estimate/", "free estimate"],
  [/\bwind mitigation\b/i, "/blog/wind-mitigation-inspections-maximizing-insurance-discount/", "wind mitigation"],
  [/\bFlorida Building Code\b/, "/blog/florida-building-code-requirements-impact-windows/", "Florida Building Code"],
  // Brands
  [/\bPGT\b/, "/brands/pgt/", "PGT"],
  [/\bCGI\b/, "/brands/cgi/", "CGI"],
];

export function addBlogInternalLinks(html: string): string {
  let result = html;
  const linked = new Set<string>();

  for (const [pattern, href, _label] of linkMap) {
    // Skip if we already linked this URL (avoid duplicate links to same page)
    if (linked.has(href)) continue;

    // Only replace first occurrence, and only if not already inside an <a> tag
    const match = result.match(pattern);
    if (!match) continue;

    const matchText = match[0];
    const matchIndex = match.index!;

    // Check if this match is already inside an anchor tag
    const before = result.substring(Math.max(0, matchIndex - 200), matchIndex);
    if (/<a[^>]*>[^<]*$/.test(before)) continue;

    // Replace first occurrence only
    result =
      result.substring(0, matchIndex) +
      `<a href="${href}">${matchText}</a>` +
      result.substring(matchIndex + matchText.length);

    linked.add(href);
  }

  return result;
}
