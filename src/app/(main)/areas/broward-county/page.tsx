import type { Metadata } from "next";
import { getCitiesByCounty } from "@/data/cities";
import CountyHubPage from "@/components/CountyHubPage";

export const metadata: Metadata = {
  title: "Impact Windows Broward County | HVHZ Installation from Hollywood",
  description:
    "Impact windows and hurricane impact windows in Broward County, a High-Velocity Hurricane Zone. Miami-Dade NOA products, city permits, and a free estimate from 3000 Stirling Rd, Hollywood. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/areas/broward-county/" },
};

const faqs = [
  {
    question: "Is all of Broward County in the HVHZ?",
    answer:
      "Yes. Broward County is inside Florida's High-Velocity Hurricane Zone, along with Miami-Dade. A replacement opening on a Broward permit is expected to carry a Miami-Dade Notice of Acceptance, or another approval that city's building department will accept, for that size and design pressure. Palm Beach County is a wind-borne debris region and is not in the HVHZ.",
  },
  {
    question: "Do hurricane impact windows in Broward need a permit?",
    answer:
      "A window or door replacement needs a permit in Broward cities. The permit lists the product approval, the opening sizes, and the anchor pattern from the approval. The city inspects the work. We pull that permit from the Hollywood shop at 3000 Stirling Rd.",
  },
  {
    question: "Where is the shop relative to Broward jobs?",
    answer:
      "The shop is in Hollywood, at 3000 Stirling Rd, Hollywood, FL 33021, inside Broward County. Call (754) 600-4876 or request a free estimate. We do not publish a license number on this site.",
  },
];

export default function BrowardCountyPage() {
  return (
    <CountyHubPage
      countyName="Broward County"
      h1="Impact Windows in Broward County"
      lede="Broward is a High-Velocity Hurricane Zone. Hurricane impact windows and impact doors here are specified to a Miami-Dade product approval, permitted with the city, and installed from our Hollywood shop on Stirling Road."
      codeHeading="Broward is HVHZ, not a wind-borne debris county"
      codeBody={[
        "The Florida Building Code treats Miami-Dade and Broward as the High-Velocity Hurricane Zone. That is a different rule set from the wind-borne debris region that covers Palm Beach County. A product that is legal on a Florida Product Approval in parts of the state can still be rejected on a Hollywood, Fort Lauderdale, or Coral Springs permit if the approval does not cover the opening.",
        "On Broward jobs we match the tested configuration to the opening we measured: the series, the glass package, the size limits, and the anchor schedule. If the Notice of Acceptance does not cover that combination, it does not go on the permit. The same rule applies to sliding glass doors, entry doors, and the garage door, because opening protection on a wind-mitigation form is about every opening, not the front windows alone.",
        "Coastal cities such as Fort Lauderdale, Hollywood, Hallandale Beach, and Pompano Beach see salt air and higher design pressures on exposed walls. Western cities such as Weston, Pembroke Pines, and Miramar still sit in the HVHZ. Distance from the beach does not move a Broward house out of the zone.",
      ]}
      installBody={[
        "We measure, order, permit, and install from 3000 Stirling Rd, Hollywood, FL 33021. The lines we specify are PGT, CGI, ES Windows, and Custom Window Systems when those products have a current approval for the opening. Installing a brand is not an authorized-dealer claim.",
        "A Broward permit is issued by the city, not by the county as a single counter for every address. Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and the other cities on this page each have their own building department. The product approval still has to satisfy the HVHZ rules those departments enforce.",
        "After the final inspection, the paperwork a homeowner usually wants is the permit close-out and the product approvals. A later wind-mitigation inspection uses form OIR-B1-1802. Any premium credit is set by the insurance carrier. We do not publish a savings percentage.",
      ]}
      cities={getCitiesByCounty("Broward")}
      blogHref="/blog/impact-window-cost-broward-county/"
      blogLabel="Impact window cost in Broward County"
      faqs={faqs}
    />
  );
}
