import { Inter, Outfit } from "next/font/google";

/** Self-hosted Inter. `display: swap` so text paints before the font file arrives. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  adjustFontFallback: true,
  preload: false,
});

/** Self-hosted Outfit, including 900 for landing-page `font-black` headings. */
export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  adjustFontFallback: true,
  preload: false,
});
