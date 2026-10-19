import type { Metadata } from "next";
import { getCitiesByCounty } from "@/data/cities";
import CountyHubPage from "@/components/CountyHubPage";

export const metadata: Metadata = {
  title: "Impact Windows Miami-Dade County | HVHZ NOA Installation",
  description:
    "Impact windows and impact doors in Miami-Dade County. The county is a High-Velocity Hurricane Zone, so openings need a Miami-Dade Notice of Acceptance that matches the size. Free estimates from Hollywood. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/areas/miami-dade-county/" },
};

const faqs = [
  {
    question: "What approval do Miami-Dade impact windows need?",
    answer:
      "Miami-Dade County is in the High-Velocity Hurricane Zone. Replacement glass and doors are permitted with a Miami-Dade Notice of Acceptance, or another approval the building department accepts, for that exact size and design pressure. The NOA is a product document. It is not a company certificate.",
  },
  {
    question: "Are impact doors in Miami-Dade held to the same rule?",
    answer:
      "Yes. Sliding glass doors, entry doors, French doors, and garage doors are openings. A Miami-Dade permit looks at the tested assembly, including the frame, glass, and anchors, not a sticker on one lite. Skipping the slider or the garage door leaves an unprotected opening.",
  },
  {
    question: "Do you install in Miami-Dade from Hollywood?",
    answer:
      "Yes. The shop is at 3000 Stirling Rd, Hollywood, FL 33021, and we install at Miami-Dade addresses from there. Call (754) 600-4876 or use the free-estimate form. We do not publish a license number.",
  },
];

export default function MiamiDadeCountyPage() {
  return (
    <CountyHubPage
      countyName="Miami-Dade County"
      h1="Impact Windows in Miami-Dade County"
      lede="Miami-Dade is a High-Velocity Hurricane Zone. Impact windows, hurricane impact windows, and impact doors on a Miami-Dade permit are tied to a Notice of Acceptance that matches the opening, then installed from our Hollywood shop."
      codeHeading="Miami-Dade wrote the NOA the rest of the HVHZ uses"
      codeBody={[
        "Miami-Dade County and Broward County are the two High-Velocity Hurricane Zone counties. Palm Beach is not. In Miami-Dade, the product document reviewers expect on a replacement opening is a Miami-Dade Notice of Acceptance for the model, the glass, the size, and the design pressure of that opening.",
        "High-rise and coastal addresses — Miami Beach, Sunny Isles Beach, Key Biscayne, Bal Harbour, and exposed elevations in Miami — often need a higher design pressure than a one-story inland block house in Hialeah or Kendall. The same brand name does not mean the same approval. We write the NOA number that matches the unit on the order.",
        "Older Miami-Dade houses, including many concrete-block homes rebuilt or left standing after Hurricane Andrew, still have aluminum or jalousie openings that are not impact glass. Replacing them is a permit, a measured opening list, and an approval per opening. It is not a countywide product that fits every wall.",
      ]}
      installBody={[
        "We install PGT, CGI, ES Windows, and Custom Window Systems products when the approval fits. That is not an authorized-dealer claim. CGI and ES are made in South Florida. PGT is made in Venice. The factory is not the installer, and we are not the factory.",
        "Permits are pulled with the city or the county building department that has jurisdiction for the address. Coral Gables, Miami, Miami Beach, Doral, Homestead, and the other cities linked below do not share one counter. The HVHZ rule is what they have in common.",
        "Impact doors in Miami-Dade follow the same approval logic as the windows. A waterfront slider, a glazed entry door, and a garage door each need a tested assembly. The county cost article linked below explains how opening size and stories move a job. It is not a price list.",
      ]}
      cities={getCitiesByCounty("Miami-Dade")}
      blogHref="/blog/impact-window-cost-miami-dade-county/"
      blogLabel="Impact window cost in Miami-Dade County"
      faqs={faqs}
    />
  );
}
