import type { Metadata } from "next";
import "../globals.css";
import ClickTracking from "@/components/ClickTracking";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { inter, outfit } from "@/lib/fonts";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <ClickTracking />
        {children}
      </body>
    </html>
  );
}
