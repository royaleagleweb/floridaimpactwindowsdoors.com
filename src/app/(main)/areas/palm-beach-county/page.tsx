import Link from "next/link";
import type { Metadata } from "next";
import { getCitiesByCounty } from "@/data/cities";
import CountyHubPage from "@/components/CountyHubPage";

export const metadata: Metadata = {
  title: "Impact Windows Palm Beach County | Wind-Borne Debris Region",
  description:
    "Impact windows in Palm Beach County, a wind-borne debris region, not the HVHZ. Florida Product Approval is often accepted. Free estimates from Hollywood. (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/areas/palm-beach-county/" },
};

const faqs = [
  {
    question: "Is Palm Beach County in the HVHZ?",
    answer:
      "No. Palm Beach County is a wind-borne debris region. Miami-Dade and Broward are the High-Velocity Hurricane Zone. Many Palm Beach permits accept a Florida Product Approval (an FL number) for the opening. Some jobs still use a Miami-Dade NOA product. We label which approval is on the proposal.",
  },
  {
    question: "Does a wind-borne debris region mean impact windows are optional?",
    answer:
      "No. Glazed openings in the wind-borne debris region still need opening protection that the local code accepts, either impact-rated products or an approved shutter system. Impact glass stays in place without a panel you have to deploy. The building department, not a marketing page, decides what the permit will take.",
  },
  {
    question: "Why is Port St. Lucie not on this list?",
    answer:
      "Port St. Lucie is in St. Lucie County, not Palm Beach County. This page lists Palm Beach County cities only. The separate city page, if you need it, is /areas/port-st-lucie/. We did not create a St. Lucie County hub.",
  },
];

export default function PalmBeachCountyPage() {
  const cities = getCitiesByCounty("Palm Beach").filter((city) => city.slug !== "port-st-lucie");

  return (
    <CountyHubPage
      countyName="Palm Beach County"
      h1="Impact Windows in Palm Beach County"
      lede="Palm Beach County is a wind-borne debris region. It is not in the High-Velocity Hurricane Zone. Impact windows here are often permitted on a Florida Product Approval, and we still say so on the proposal instead of calling the county HVHZ."
      codeHeading="Wind-borne debris region, not HVHZ"
      codeBody={[
        "Miami-Dade and Broward are the HVHZ. Palm Beach County is not. Coastal and near-coastal Palm Beach addresses sit in the wind-borne debris region, where opening protection is still required and a Florida Product Approval is often the document the building department accepts.",
        "Boca Raton, Delray Beach, Boynton Beach, and the barrier-island towns see salt air and higher exposure. Western communities such as Wellington and Royal Palm Beach are still in Palm Beach County, so they are still outside the HVHZ. We do not copy a Broward NOA requirement onto a Palm Beach permit unless that city asks for it or the product we are using happens to carry an NOA.",
        "Using an NOA product in Palm Beach is a specification choice, not proof that the county changed zones. When we do it, the proposal says the approval number. When an FL number is what the permit will take, that is what we submit.",
      ]}
      installBody={[
        "Installation is run from 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876. The drive is longer than a Broward job, and the code conversation is different. We install PGT, CGI, ES Windows, and Custom Window Systems products. That is not an authorized-dealer claim.",
        "Each city has its own building department. West Palm Beach, Boca Raton, Jupiter, and Palm Beach Gardens do not issue one county permit for every address. The opening list, the design pressure, and the approval still have to match.",
        "A garage door and a patio slider count as openings here the same way they do in the HVHZ. Leaving either one as non-impact glass is how a wind-mitigation credit gets limited later. The carrier sets any premium change. We do not publish a percentage.",
      ]}
      cities={cities}
      exclusionNote={
        <>
          Port St. Lucie is in St. Lucie County. Older site data tagged it as Palm Beach, so it is left off this county list on purpose. Its city page remains at{" "}
          <Link href="/areas/port-st-lucie/" className="text-palm-700 font-semibold">
            /areas/port-st-lucie/
          </Link>
          . This site does not have a St. Lucie County hub.
        </>
      }
      blogHref="/blog/impact-window-cost-palm-beach-county/"
      blogLabel="Impact window cost in Palm Beach County"
      faqs={faqs}
    />
  );
}
