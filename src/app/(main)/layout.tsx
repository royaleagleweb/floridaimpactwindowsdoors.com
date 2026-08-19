import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://floridaimpactwindowsdoors.com"),
  title: {
    default: "Impact Windows & Doors Hollywood | Serving South Florida",
    template: "%s | Florida Impact Windows & Doors",
  },
  description:
    "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Broward & Palm Beach County. A+ BBB rated. Call (754) 600-4876 for a free estimate.",
  authors: [{ name: "Florida Impact Windows & Doors" }],
  creator: "Florida Impact Windows & Doors",
  publisher: "Florida Impact Windows & Doors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://floridaimpactwindowsdoors.com",
    siteName: "Florida Impact Windows & Doors",
    title: "Impact Windows & Doors Hollywood | Serving South Florida",
    description:
      "South Florida's premier impact window and door installation company. Hurricane-rated protection for Broward & Palm Beach County homes. Free estimates available.",
    images: [
      {
        url: "https://floridaimpactwindowsdoors.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Florida Impact Windows & Doors - Professional Impact Window Installation in South Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Windows & Doors Hollywood | Serving South Florida",
    description:
      "Premium impact windows & doors at affordable prices. A+ BBB rating. Free estimates. Call (754) 600-4876.",
    images: ["https://floridaimpactwindowsdoors.com/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "i8z4IDJN5CcGSXAsJJz6ubwyHulZr2go5aKf5iJun5s",
  },
};

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://floridaimpactwindowsdoors.com/#organization",
    name: "Florida Impact Windows & Doors",
    alternateName: "Florida Impact Windows and Doors",
    url: "https://floridaimpactwindowsdoors.com",
    logo: "https://floridaimpactwindowsdoors.com/images/logo.png",
    image: "https://floridaimpactwindowsdoors.com/images/logo.png",
    description:
      "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Broward & Palm Beach County.",
    telephone: "+1-754-600-4876",
    email: "info@floridaimpactwindowsdoors.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3000 Stirling Rd",
      addressLocality: "Hollywood",
      addressRegion: "FL",
      postalCode: "33021",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.0112,
      longitude: -80.1495,
    },
    areaServed: [
      {
        "@type": "County",
        name: "Miami-Dade County",
        containedIn: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "County",
        name: "Broward County",
        containedIn: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "County",
        name: "Palm Beach County",
        containedIn: { "@type": "State", name: "Florida" },
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.yelp.com/biz/florida-impact-windows-and-doors-hollywood",
      "https://www.bbb.org/us/fl/hollywood/profile/window-installation/florida-impact-windows-doors-0633-92029751",
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".hero-description", "[data-speakable]"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Impact Window & Door Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Impact Windows",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Impact Window Installation",
                description:
                  "Professional hurricane-rated impact window installation for South Florida homes.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Impact Doors",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Impact Door Installation",
                description:
                  "Hurricane-rated impact door installation including sliding glass, French, and entry doors.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Hurricane Shutters",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hurricane Shutter Installation",
                description:
                  "Accordion, roll-down, Bahama, and panel hurricane shutter installation.",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Florida Impact Windows & Doors",
    url: "https://floridaimpactwindowsdoors.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" href="https://floridaimpactwindowsdoors.com/feed.xml" title="Florida Impact Windows & Doors Blog" />
        <link rel="alternate" type="text/plain" href="https://floridaimpactwindowsdoors.com/llms.txt" title="LLM-readable site info" />
        <link rel="alternate" type="text/plain" href="https://floridaimpactwindowsdoors.com/llms-full.txt" title="Full LLM context" />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SKF6705HJM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SKF6705HJM');`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
