/**
 * Google Search Console analysis for floridaimpactwindowsdoors.com.
 *
 * Prints:
 *   1. Top impression LOSERS (last 28d vs prior 28d) — queries and pages.
 *   2. Top impression GAINERS (same period).
 *   3. Thin pages: URLs with >100 impressions but <1% CTR (SEO weak points).
 *   4. Zombie pages: URLs that got ≥1 impression 90d ago but none in the last 28d.
 *
 * Setup (one-time):
 *   1. Create a Google Cloud service account, enable Search Console API.
 *   2. Download the JSON key.
 *   3. In Search Console → Settings → Users and permissions, add the
 *      service account email as a "Full" user on the property.
 *   4. export GOOGLE_APPLICATION_CREDENTIALS=/abs/path/to/key.json
 *
 * Run:
 *   npx tsx scripts/seo-report.ts
 */

import { google } from "googleapis";

const SITE_URL = "https://floridaimpactwindowsdoors.com/";
const ROW_LIMIT = 25000;

type Row = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number };

function daysAgo(n: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

async function query(
  searchconsole: ReturnType<typeof google.searchconsole>,
  dimension: "query" | "page",
  startDate: string,
  endDate: string,
): Promise<Row[]> {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions: [dimension],
      rowLimit: ROW_LIMIT,
    },
  });
  return (res.data.rows ?? []) as Row[];
}

function diff(current: Row[], previous: Row[]): Array<Row & { prevImpressions: number; delta: number }> {
  const prevMap = new Map(previous.map((r) => [r.keys[0], r.impressions]));
  return current
    .map((r) => {
      const prevImpressions = prevMap.get(r.keys[0]) ?? 0;
      return { ...r, prevImpressions, delta: r.impressions - prevImpressions };
    })
    .sort((a, b) => a.delta - b.delta);
}

function fmtRow(r: Row & { prevImpressions?: number; delta?: number }, key: string): string {
  const base = `${r.impressions.toString().padStart(6)} impr · ${r.clicks.toString().padStart(4)} clicks · ${(r.ctr * 100).toFixed(2).padStart(5)}% CTR · pos ${r.position.toFixed(1).padStart(4)}`;
  const deltaStr = r.delta !== undefined ? ` · Δ ${r.delta >= 0 ? "+" : ""}${r.delta}` : "";
  return `  ${base}${deltaStr}  ${key}`;
}

function section(title: string): void {
  console.log(`\n${"═".repeat(80)}\n${title}\n${"═".repeat(80)}`);
}

async function main(): Promise<void> {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env var is not set.");
    console.error("See script header for setup instructions.");
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const searchconsole = google.searchconsole({ version: "v1", auth: await auth.getClient() as never });

  const currentEnd = daysAgo(3);
  const currentStart = daysAgo(30);
  const prevEnd = daysAgo(31);
  const prevStart = daysAgo(58);

  console.log(`Site: ${SITE_URL}`);
  console.log(`Current window:  ${currentStart} → ${currentEnd}`);
  console.log(`Previous window: ${prevStart} → ${prevEnd}`);

  const [curQueries, prevQueries, curPages, prevPages, deepPast] = await Promise.all([
    query(searchconsole, "query", currentStart, currentEnd),
    query(searchconsole, "query", prevStart, prevEnd),
    query(searchconsole, "page", currentStart, currentEnd),
    query(searchconsole, "page", prevStart, prevEnd),
    query(searchconsole, "page", daysAgo(120), daysAgo(90)),
  ]);

  console.log(`\nFetched ${curQueries.length} queries, ${curPages.length} pages (current window).`);

  const queryDiffs = diff(curQueries, prevQueries);
  const pageDiffs = diff(curPages, prevPages);

  section("TOP 20 IMPRESSION LOSERS — QUERIES");
  queryDiffs.filter((r) => r.delta < 0).slice(0, 20).forEach((r) => {
    console.log(fmtRow(r, `"${r.keys[0]}" (was ${r.prevImpressions})`));
  });

  section("TOP 20 IMPRESSION LOSERS — PAGES");
  pageDiffs.filter((r) => r.delta < 0).slice(0, 20).forEach((r) => {
    console.log(fmtRow(r, `${r.keys[0].replace(SITE_URL.replace(/\/$/, ""), "")} (was ${r.prevImpressions})`));
  });

  section("TOP 10 IMPRESSION GAINERS — QUERIES");
  queryDiffs.filter((r) => r.delta > 0).sort((a, b) => b.delta - a.delta).slice(0, 10).forEach((r) => {
    console.log(fmtRow(r, `"${r.keys[0]}" (was ${r.prevImpressions})`));
  });

  section("THIN PAGES — >100 impressions but <1% CTR (rewrite candidates)");
  curPages
    .filter((r) => r.impressions > 100 && r.ctr < 0.01)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30)
    .forEach((r) => console.log(fmtRow(r, r.keys[0].replace(SITE_URL.replace(/\/$/, ""), ""))));

  section("ZOMBIE PAGES — had impressions 90–120d ago, none now (consolidation candidates)");
  const currentPageSet = new Set(curPages.filter((r) => r.impressions > 0).map((r) => r.keys[0]));
  deepPast
    .filter((r) => r.impressions >= 1 && !currentPageSet.has(r.keys[0]))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30)
    .forEach((r) => console.log(fmtRow(r, r.keys[0].replace(SITE_URL.replace(/\/$/, ""), ""))));

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
