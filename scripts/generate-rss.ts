import { blogPosts } from "../src/data/blog";
import { writeFileSync } from "fs";
import { join } from "path";

const SITE_URL = "https://floridaimpactwindowsdoors.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const lastBuildDate = new Date().toUTCString();

const rssItems = sortedPosts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}/</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>info@floridaimpactwindowsdoors.com (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Florida Impact Windows &amp; Doors Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Expert advice on impact windows, hurricane protection, and home improvement for South Florida homeowners.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/images/logo.png</url>
      <title>Florida Impact Windows &amp; Doors Blog</title>
      <link>${SITE_URL}/blog/</link>
    </image>
${rssItems}
  </channel>
</rss>`;

const outputPath = join(process.cwd(), "public", "feed.xml");
writeFileSync(outputPath, rss, "utf-8");
console.log(`Generated RSS feed with ${sortedPosts.length} posts at ${outputPath}`);
