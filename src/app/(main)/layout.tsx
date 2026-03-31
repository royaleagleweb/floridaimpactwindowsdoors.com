import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://floridaimpactwindowsdoors.com"),
  title: {
    default:
      "Florida Impact Windows & Doors | #1 Impact Window Installation in Fort Lauderdale",
    template: "%s | Florida Impact Windows & Doors",
  },
  description:
    "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Broward & Palm Beach County. A+ BBB rated. Call (754) 600-4876 for a free estimate.",
  keywords: [
    "impact windows",
    "impact doors",
    "hurricane windows",
    "hurricane doors",
    "impact windows cost",
    "impact windows Florida",
    "impact windows Fort Lauderdale",
    "impact windows near me",
    "impact windows Boca Raton",
    "impact windows Palm Beach",
    "impact windows Broward County",
    "hurricane impact windows",
    "impact window installation",
    "impact resistant windows",
    "hurricane rated windows",
    "impact sliding glass doors",
    "energy efficient impact windows",
    "impact windows price",
    "best impact windows",
    "hurricane protection windows South Florida",
    "impact windows vs hurricane shutters",
    "PGT impact windows",
    "CGI impact windows",
    "window replacement Fort Lauderdale",
    "door replacement South Florida",
    "My Safe Florida Home Program",
    "impact window free estimate",
    "impact windows financing",
    "South Florida hurricane protection",
    "HVHZ windows",
  ],
  authors: [{ name: "Florida Impact Windows & Doors" }],
  creator: "Florida Impact Windows & Doors",
  publisher: "Florida Impact Windows & Doors",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://floridaimpactwindowsdoors.com",
    siteName: "Florida Impact Windows & Doors",
    title:
      "Florida Impact Windows & Doors | #1 Impact Window Installation in Fort Lauderdale",
    description:
      "South Florida's premier impact window and door installation company. Hurricane-rated protection for Broward & Palm Beach County homes. Free estimates available.",
    images: [
      {
        url: "https://floridaimpactwindowsdoors.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Florida Impact Windows & Doors - Professional Impact Window Installation in South Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Florida Impact Windows & Doors | #1 Impact Windows in South Florida",
    description:
      "Premium impact windows & doors at affordable prices. A+ BBB rating. Free estimates. Call (754) 600-4876.",
    images: ["https://floridaimpactwindowsdoors.com/images/hero-bg.jpg"],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [],
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
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://floridaimpactwindowsdoors.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/plain" href="https://floridaimpactwindowsdoors.com/llms.txt" title="LLM-readable site info" />
        <link rel="alternate" type="text/plain" href="https://floridaimpactwindowsdoors.com/llms-full.txt" title="Full LLM context" />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
