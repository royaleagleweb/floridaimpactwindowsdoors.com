import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Florida Impact Windows & Doors | #1 Impact Windows & Doors in South Florida",
    template: "%s | Florida Impact Windows & Doors",
  },
  description:
    "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Miami-Dade, Broward & Palm Beach County. Free estimates available.",
  keywords: [
    "impact windows",
    "impact doors",
    "hurricane windows",
    "hurricane doors",
    "South Florida windows",
    "Miami impact windows",
    "Fort Lauderdale impact windows",
    "Boca Raton impact windows",
    "impact window installation",
    "hurricane protection",
    "Florida impact windows",
  ],
  authors: [{ name: "Florida Impact Windows & Doors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Florida Impact Windows & Doors",
    title: "Florida Impact Windows & Doors | #1 Impact Windows & Doors in South Florida",
    description:
      "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Miami-Dade, Broward & Palm Beach County.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Impact Windows & Doors | #1 Impact Windows & Doors in South Florida",
    description:
      "South Florida's premier impact window and door installation company.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
