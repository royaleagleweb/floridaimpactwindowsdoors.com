import type { ReactNode } from "react";
import type { CityPageOverride } from "./cityPageOverrides";
import Link from "next/link";

function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">
      {children}
    </Link>
  );
}

export const deerfieldBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Deerfield Beach, FL | Broward County",
  description:
    "Impact windows and doors in Deerfield Beach, FL — Broward HVHZ, not the Palm Beach rules used a few blocks north in Boca. Cove, Century Village, and The Waterways. City of Deerfield Beach permit. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Deerfield Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Deerfield Beach is the last Broward city before Palm Beach County. That county line is why a
      quote written for Boca Raton can be the wrong product on a Deerfield address. Cove, The
      Waterways, Century Village, and the inland streets in Deer Creek and Crystal Lake are all
      Broward High-Velocity Hurricane Zone. We install from 3000 Stirling Rd in Hollywood and pull
      the City of Deerfield Beach permit.
    </>
  ),
  countyBadge: "Deerfield Beach · Broward HVHZ",
  uniqueHeading: "The pier is Broward. The next city north is not.",
  uniqueBody: (
    <>
      <p>
        Homeowners searching &quot;impact windows and doors&quot; or &quot;impact windows Broward
        County&quot; often land on a page that treats every South Florida city the same. Deerfield
        Beach is the place that comparison falls apart. The International Fishing Pier and the Cove
        sit on the Atlantic, inside Broward. Drive north on A1A or Federal Highway and you are in
        Boca Raton, where a Florida Product Approval is often accepted. A Deerfield replacement
        generally needs a current Miami-Dade Notice of Acceptance and a City of Deerfield Beach
        Building Department permit. We do not copy a Palm Beach packet onto a 33064 Broward address.
      </p>
      <p>
        The housing is three different jobs. Oceanfront condominiums along A1A in the Cove take salt
        air and a higher design pressure on the east elevation — that is the conversation for a
        heavier coastal slider, often{" "}
        <L href="/brands/cgi/">CGI</L>, not a builder-grade bedroom window with a marine upcharge on
        every opening. Century Village Deerfield is the opposite scale: 1970s garden buildings,
        repeated openings, and an association that has to approve the frame before anyone orders
        glass. Wilma blew out a lot of that original glazing; Irma tested the beach side again. The
        Waterways is newer waterfront townhomes. Deer Creek, Crystal Lake, The Palms, and Hillsboro
        Pines are inland single-family streets from the 1960s through the 2000s, where the missile
        is neighbor tile and trees, not ocean spray.
      </p>
      <p>
        ZIP 33064 is shared with Pompano Beach and Lighthouse Point on our city list, which is why
        a phone quote that only asks for the zip is not a Deerfield quote. We measure the opening
        and name the municipality on the permit. Whole-house single-family lists usually land on{" "}
        <L href="/brands/pgt/">PGT WinGuard</L>.{" "}
        <L href="/brands/es-windows/">ES Windows</L> is the value aluminum line when the goal is
        every opening, including a leftover jalousie.{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> is the conversation for
        an oversized or odd opening. We are the dealer-installer — those factories build the units;
        we permit and set them.
      </p>
      <p>
        A homesteaded, site-built Deerfield house permitted before January 1, 2008 can sometimes use
        the My Safe Florida Home grant: a Florida Department of Financial Services program, up to
        $10,000, only after the program inspection. Except for low-income applicants, insured
        dwelling value is typically at or below $700,000, and starting work before written approval
        can disqualify the project. Century Village and other condominiums are usually an
        association project, not that grant. Lender plans are separate — see{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-broward-county/">Broward impact window cost</L>. The
        nearest beach neighbors are{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>,{" "}
        <L href="/areas/lighthouse-point/">Lighthouse Point</L>, and{" "}
        <L href="/areas/hillsboro-beach/">Hillsboro Beach</L>. Inland,{" "}
        <L href="/areas/coconut-creek/">Coconut Creek</L> is the next Broward hub west.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Deerfield Beach is entirely inside Broward&apos;s High-Velocity Hurricane Zone under the
      Florida Building Code. Replacement impact windows and doors generally need HVHZ-tested
      assemblies — typically a current Miami-Dade NOA — and a permit from the City of Deerfield
      Beach Building Department. That is a stricter path than Boca Raton, immediately north in Palm
      Beach County, where an FL# is often accepted. We submit the approval that matches the unit
      and meet the inspector. We do not publish the city&apos;s fee schedule; the building
      department sets that.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Deerfield Beach + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["pompano-beach", "lighthouse-point", "hillsboro-beach", "coconut-creek", "boca-raton"],
  faqs: [
    {
      question: "Are impact windows in Deerfield Beach held to Broward or Palm Beach rules?",
      answer:
        "Broward. Deerfield Beach is in the High-Velocity Hurricane Zone, so replacement impact windows and doors generally need a current Miami-Dade NOA and a City of Deerfield Beach permit. Boca Raton, the next city north, is Palm Beach County and often accepts a Florida Product Approval. The county line is the product line.",
    },
    {
      question: "Do you install impact windows and doors in the Cove and Century Village?",
      answer:
        "Yes. Cove oceanfront condominiums are a salt-air, higher design-pressure job and usually need association approval. Century Village Deerfield is repeated 1970s openings and a board packet. The Waterways, Deer Creek, Crystal Lake, The Palms, and Hillsboro Pines are on the same City of Deerfield Beach permit path, with different opening lists. Call (754) 600-4876.",
    },
    {
      question: "Who pulls the Deerfield Beach window permit?",
      answer:
        "Florida Impact Windows & Doors pulls the City of Deerfield Beach Building Department permit, installs to the NOA, and meets the inspector. The shop is at 3000 Stirling Rd, Hollywood, FL 33021 — Deerfield is a regular north Broward service city, not a separate office.",
    },
    {
      question: "Can a Deerfield Beach condo use the My Safe Florida Home grant?",
      answer:
        "Usually that grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after a program inspection, and only if work has not started before written approval. Typical rules also cap insured dwelling value at $700,000 except for low-income applicants. A Century Village or Cove association project is a different path. Check MySafeFLHome.com for the current cycle and our financing page for how a grant differs from a loan.",
    },
    {
      question: "Which brands do you install in Deerfield Beach?",
      answer:
        "PGT, CGI, ES Windows, and Custom Window Systems. PGT WinGuard is the usual whole-house spec on inland single-family openings. CGI is the usual coastal-slider conversation on the Cove. ES Windows is the value line when every opening, including older jalousie, needs to be protected. We price them on the same measured list.",
    },
  ],
};

export const pompanoBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Pompano Beach, FL | Broward County",
  description:
    "Impact windows and doors in Pompano Beach, FL. A1A towers, canal houses in Pompano Isles, and inland Palm Aire — all Broward HVHZ. City of Pompano Beach permit from our Hollywood shop. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Pompano Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Pompano Beach is a long Atlantic front plus a canal grid plus a huge inland community at Palm
      Aire. Those are not one window spec. All of it is Broward HVHZ. We measure from Hollywood and
      pull the City of Pompano Beach permit.
    </>
  ),
  countyBadge: "Pompano Beach · Broward HVHZ",
  uniqueHeading: "Beach towers, canal glass, and Palm Aire are three Pompano jobs",
  uniqueBody: (
    <>
      <p>
        Wilma and Irma both hit this coastline. Oceanfront condominiums lost glass and took water.
        Inland, Palm Aire and the tile roofs did the other kind of damage: a neighbor&apos;s tile
        through a window that was never laminated. If a quote uses one series for a 15th-floor A1A
        unit and a Palm Aire bedroom, it is ignoring the elevation and the salt.
      </p>
      <p>
        East of the Intracoastal — Lighthouse Cove, the A1A buildings, and the beach cottages that
        are still standing from the 1950s — hardware corrodes and design pressure climbs with the
        floor. Pompano Isles and Cocoa Isles put the glass toward the canal, so the large opening
        is a multi-panel slider, not a single-hung. Cresthaven, Cypress Bend, Pompano Beach
        Highlands, and Leisureville are inland of that. Hillsboro Pines sits on our Pompano and
        Deerfield lists because the neighborhoods run together; the permit follows the address, not
        the subdivision nickname.
      </p>
      <p>
        High-rise work is an association packet, a crane or hoist plan, and an NOA that matches the
        floor&apos;s pressure — not a residential single-hung price. Canal houses are a{" "}
        <L href="/brands/cgi/">CGI</L> or <L href="/brands/custom-window-systems/">CWS</L>{" "}
        conversation when the slider is the view. Palm Aire and the ranch streets are usually{" "}
        <L href="/brands/pgt/">PGT</L> or <L href="/brands/es-windows/">ES Windows</L> across a
        normal opening list. Salt-air hardware choices are covered in our{" "}
        <L href="/blog/salt-air-corrosion-impact-windows-coastal/">coastal corrosion note</L>.
      </p>
      <p>
        Permits go through the City of Pompano Beach Building Department. We do not quote a city
        fee; they publish that. Homesteaded site-built houses permitted before January 1, 2008 may
        qualify for My Safe Florida Home (up to $10,000 after the program inspection; insured value
        typically at or below $700,000 except for low-income applicants; do not start before written
        approval). A beach tower association is not that application. See{" "}
        <L href="/financing/">financing</L> and the{" "}
        <L href="/blog/impact-window-cost-broward-county/">Broward cost guide</L>. Neighbors:{" "}
        <L href="/areas/deerfield-beach/">Deerfield Beach</L>,{" "}
        <L href="/areas/lighthouse-point/">Lighthouse Point</L>,{" "}
        <L href="/areas/hillsboro-beach/">Hillsboro Beach</L>,{" "}
        <L href="/areas/lauderdale-by-the-sea/">Lauderdale-by-the-Sea</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Pompano Beach is Broward HVHZ from the beach to the west city limits. Impact replacement
      needs HVHZ-approved assemblies, typically a current Miami-Dade NOA, and a City of Pompano
      Beach permit. An FL# accepted in Palm Beach is not the default packet here.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Pompano Beach + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["deerfield-beach", "lighthouse-point", "hillsboro-beach", "lauderdale-by-the-sea", "coconut-creek"],
  faqs: [
    {
      question: "Do Pompano Beach oceanfront condos need a different impact window than Palm Aire?",
      answer:
        "Usually yes. A1A and beach towers see salt and higher design pressure by floor, plus an association review. Palm Aire and the inland neighborhoods are tile-and-tree debris on single-family or low-rise openings. Both are City of Pompano Beach / Broward HVHZ. The series changes; the NOA requirement does not.",
    },
    {
      question: "Are canal homes in Pompano Isles a slider job?",
      answer:
        "Often. Pompano Isles and Cocoa Isles put large glass toward the water. We measure those openings instead of pricing them as bedroom single-hungs. CGI or Custom Window Systems comes up when the panel is oversized. PGT still covers a normal mix.",
    },
    {
      question: "Who permits impact windows in Pompano Beach?",
      answer:
        "We pull the permit with the City of Pompano Beach Building Department and install to the NOA. Florida Impact Windows & Doors is at 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home apply to a Pompano Beach high-rise?",
      answer:
        "The grant is written for qualifying homesteaded, site-built homes permitted before January 1, 2008, after a program inspection, with work held until written approval. A condominium association project is a different path. Inland homesteaded houses in Pompano may still fit the program. Confirm the current cycle at MySafeFLHome.com.",
    },
  ],
};

export const lighthousePoint: CityPageOverride = {
  title: "Impact Windows & Doors in Lighthouse Point, FL | Broward County",
  description:
    "Impact windows and doors in Lighthouse Point, FL. Canal-front glass, Hillsboro Inlet surge, Broward HVHZ / NOA, City of Lighthouse Point permit. Installed from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lighthouse Point</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lighthouse Point is not a beach-tower city. Most houses sit on deep-water canals with ocean
      access through the Hillsboro Inlet. The glass faces the dock. The code is still Broward HVHZ.
      We pull a City of Lighthouse Point permit from the Hollywood shop.
    </>
  ),
  countyBadge: "Lighthouse Point · Broward HVHZ",
  uniqueHeading: "Canal glass and inlet surge, on a Broward permit",
  uniqueBody: (
    <>
      <p>
        The threat here is two-sided. Wind-borne debris still comes from the east, and storm surge
        can push up the canal system from the Hillsboro Inlet. A living room that is a wall of
        sliders toward the dock is the opening that matters. Bedroom single-hungs on the street
        side are a simpler spec. One price per opening, copied from a Coral Springs ranch, misses
        both.
      </p>
      <p>
        Housing runs from renovated mid-century ranches to custom canal estates, including the Palm
        Drive and Dixon Ahl streets and the waterway sections. Cap&apos;s Place sits out on the
        island; the residential work is on the canals. Salt water on the hardware is a real
        maintenance issue, so a corrosion-resistant package belongs on the water elevation even
        when the house is not on the sand. That is not a reason to specify a marine series on a
        shaded street-side bath window.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/custom-window-systems/">Custom Window Systems</L>{" "}
        show up when the dock-side slider is wide. <L href="/brands/pgt/">PGT</L> covers the rest
        of a whole-house list. <L href="/brands/es-windows/">ES Windows</L> is in the mix when the
        openings are standard and the budget is the constraint. Associations are less of the story
        than in a tower city; the custom opening is the story.
      </p>
      <p>
        The City of Lighthouse Point Building Department reviews the permit. We do not invent a fee.
        Many of these houses are homesteaded and site-built; if the original permit predates January
        1, 2008, My Safe Florida Home may apply after the program inspection (up to $10,000; value
        cap typically $700,000 except low-income applicants; no work before written approval). See{" "}
        <L href="/financing/">financing</L>. Nearby hubs:{" "}
        <L href="/areas/deerfield-beach/">Deerfield Beach</L>,{" "}
        <L href="/areas/hillsboro-beach/">Hillsboro Beach</L>,{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lighthouse Point is Broward HVHZ. Canal-front impact glass still needs an HVHZ approval,
      typically a current Miami-Dade NOA, and a City of Lighthouse Point permit. Direct oceanfront
      on the Hillsboro Mile is the next city south, Hillsboro Beach — different buildings, same
      wind zone.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Lighthouse Point + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["deerfield-beach", "hillsboro-beach", "pompano-beach", "coconut-creek"],
  faqs: [
    {
      question: "Is Lighthouse Point oceanfront or canal-front for impact windows?",
      answer:
        "Mostly canal-front, with ocean access through the Hillsboro Inlet. Openings toward the dock are large sliders and fixed glass. Street-side windows are often ordinary. Both sit in Broward HVHZ and need a City of Lighthouse Point permit.",
    },
    {
      question: "Do canal houses need marine hardware?",
      answer:
        "Water-facing openings see salt from the canals, so corrosion-resistant hardware belongs there. A shaded street-side window does not automatically need the same coastal series. We specify by elevation, not by zip code.",
    },
    {
      question: "Do you pull City of Lighthouse Point permits?",
      answer:
        "Yes. Florida Impact Windows & Doors pulls the permit, installs PGT, CGI, ES Windows, or Custom Window Systems to the NOA, and meets the inspector. The office is 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
    {
      question: "Where does Lighthouse Point sit relative to Deerfield Beach?",
      answer:
        "They share the 33064 zip on our city list and sit next to each other at the north end of coastal Broward. Deerfield includes the pier and Century Village. Lighthouse Point is the canal grid. The permits are different cities. Both are Broward HVHZ, unlike Boca Raton to the north.",
    },
  ],
};

export const hillsboroBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Hillsboro Beach, FL | Broward County",
  description:
    "Impact windows and doors on the Hillsboro Mile in Hillsboro Beach, FL. Barrier-island condos and estates, Broward HVHZ / NOA, Town of Hillsboro Beach permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hillsboro Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hillsboro Beach is the Hillsboro Mile: a narrow barrier island between the Atlantic and the
      Intracoastal, marked at the south end by the inlet light. There is no inland neighborhood to
      hide in. Every building is a salt-air, Broward HVHZ job. We permit it with the Town of
      Hillsboro Beach from our Hollywood shop.
    </>
  ),
  countyBadge: "Hillsboro Beach · Broward HVHZ",
  uniqueHeading: "One mile of A1A, ocean on one side and the Intracoastal on the other",
  uniqueBody: (
    <>
      <p>
        Wilma sent water across A1A and failed ocean-facing window systems in condo buildings along
        the Mile. That is the failure mode: a whole elevation, not one cracked bedroom sash. Ocean
        units and Intracoastal units in the same building do not see the same pressure or the same
        salt. The NOA has to match the opening you are actually replacing.
      </p>
      <p>
        The town is mid-rise and low-rise condominiums from the 1960s forward, plus a small number
        of single-family estates. There is no western ranch street. Access for glass and equipment
        is the narrow island road, so scheduling is part of the job. Association boards approve
        color and profile before we order. We bring cut sheets; we do not guess what the board
        already rejected on the last stack.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> is the frequent conversation for ocean-facing sliders and
        larger lites. <L href="/brands/pgt/">PGT</L> still covers many residential-scale openings in
        these buildings. <L href="/brands/es-windows/">ES Windows</L> and{" "}
        <L href="/brands/custom-window-systems/">CWS</L> enter when the board packet and the
        opening size point there. This is not a My Safe Florida Home town in the usual sense — the
        grant is for qualifying homesteaded site-built houses, and the Mile is overwhelmingly
        condominium. A homesteaded house elsewhere in Broward is a different application. Read{" "}
        <L href="/financing/">financing</L> before treating a grant and a loan as the same thing.
      </p>
      <p>
        Read <L href="/blog/salt-air-corrosion-impact-windows-coastal/">salt air and impact hardware</L>{" "}
        and the <L href="/blog/impact-window-cost-broward-county/">Broward cost guide</L>. The
        mainland next door is <L href="/areas/lighthouse-point/">Lighthouse Point</L> and{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>;{" "}
        <L href="/areas/deerfield-beach/">Deerfield Beach</L> is the next city up the beach.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hillsboro Beach is Broward HVHZ. Oceanfront impact replacement needs HVHZ-approved products,
      typically a current Miami-Dade NOA, and a Town of Hillsboro Beach permit. Elevation and
      exposure still change the design pressure even though the wind zone does not change.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "Town of Hillsboro Beach + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lighthouse-point", "pompano-beach", "deerfield-beach", "lauderdale-by-the-sea"],
  faqs: [
    {
      question: "Is every Hillsboro Beach property oceanfront?",
      answer:
        "The town is the barrier island itself — the Hillsboro Mile — between the Atlantic and the Intracoastal. There is no inland subdivision. Ocean elevations and Intracoastal elevations still differ in pressure and salt, and the NOA has to match the opening.",
    },
    {
      question: "Do Hillsboro Mile condos require board approval for impact windows?",
      answer:
        "Yes in practice. Associations review frame color, profile, and often the installer packet. We supply manufacturer cut sheets for that review and pull the Town of Hillsboro Beach permit for the unit.",
    },
    {
      question: "Which brand is typical on the Hillsboro Mile?",
      answer:
        "CGI is the common ocean-slider conversation. PGT covers many standard openings. ES Windows and Custom Window Systems are in the mix when the opening or the board packet calls for them. We install all four from Hollywood. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home cover a Hillsboro Beach condo?",
      answer:
        "The program is aimed at qualifying homesteaded, site-built homes permitted before January 1, 2008, after an inspection, and work cannot start before written approval. A condominium on the Mile is usually outside that path. Check MySafeFLHome.com and our financing page rather than assuming a grant applies to a building-wide project.",
    },
  ],
};

export const lauderdaleByTheSea: CityPageOverride = {
  title: "Impact Windows & Doors in Lauderdale-by-the-Sea, FL | Broward",
  description:
    "Impact windows and doors in Lauderdale-by-the-Sea, FL. Low-rise beach village, no high-rise wind shadow, Broward HVHZ / NOA, town permit. El Mar, Terra Mar, Intracoastal side. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lauderdale-by-the-Sea</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lauderdale-by-the-Sea kept a low-rise beach scale while towers went up on either side. That
      choice means there is no tall building to block the wind. Cottages on El Mar, small condo
      buildings, and the Intracoastal side are all Broward HVHZ. We pull the town permit from
      Hollywood.
    </>
  ),
  countyBadge: "Lauderdale-by-the-Sea · Broward HVHZ",
  uniqueHeading: "A low-rise beach town takes the wind without a tower in front of it",
  uniqueBody: (
    <>
      <p>
        Wilma pushed surge across A1A into low buildings and drove sand and salt through older
        windows. The coral-rock seawall helps with water; it does not rate the glass. Upper windows
        on a two- or three-story building face open ocean wind because the town&apos;s height limit
        kept the skyline down. That is a different engineering note than a Fort Lauderdale tower
        two miles south.
      </p>
      <p>
        The stock is 1950s–60s beach cottages, small condominium buildings, and renovated oceanfront
        houses — Oceanfront, El Mar Drive, Bougainvilla, Terra Mar, and the Intracoastal west side.
        Openings are often non-standard. Commercial storefronts on the beach street are a separate
        product from a cottage single-hung. We measure both instead of forcing one catalog photo.
      </p>
      <p>
        Salt is constant, so frames and hardware on the east side need a corrosion-resistant spec.
        <L href="/brands/cgi/">CGI</L> fits many of those exposed sliders.{" "}
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> fit the
        smaller cottage and condo openings. <L href="/brands/custom-window-systems/">CWS</L> is
        there when the opening is odd. Small associations still review color. A homesteaded cottage
        permitted before January 1, 2008 may fit My Safe Florida Home; a condo stack usually does
        not. Rules: program inspection first, up to $10,000, value typically at or below $700,000
        except low-income applicants, no work before written approval.{" "}
        <L href="/financing/">Financing</L> is the other path.
      </p>
      <p>
        Neighbors on the sand are <L href="/areas/sea-ranch-lakes/">Sea Ranch Lakes</L> and{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>. The big-city permit next door is{" "}
        <L href="/areas/fort-lauderdale/">Fort Lauderdale</L>. Cost context:{" "}
        <L href="/blog/impact-window-cost-broward-county/">Broward impact window cost</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lauderdale-by-the-Sea is Broward HVHZ. Low-rise does not mean a lighter code. Impact
      replacements need HVHZ-approved assemblies, typically a current Miami-Dade NOA, and a permit
      from the town building department.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "Town of Lauderdale-by-the-Sea + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["sea-ranch-lakes", "pompano-beach", "fort-lauderdale", "hillsboro-beach"],
  faqs: [
    {
      question: "Why does Lauderdale-by-the-Sea not get a wind break from high-rises?",
      answer:
        "The town limited building height, so properties face ocean wind directly. Impact products still have to be Broward HVHZ approved. The design pressure depends on the opening and the exposure, not on whether a tower exists next door in another city.",
    },
    {
      question: "Are cottage windows in Lauderdale-by-the-Sea standard sizes?",
      answer:
        "Often they are not. 1950s and 1960s beach houses have odd openings. We measure them. Custom Window Systems or a sized PGT or ES unit is a measurement decision, not a catalog guess.",
    },
    {
      question: "Do you install impact doors as well as windows here?",
      answer:
        "Yes. Sliders toward the beach or the Intracoastal are usually the largest opening. Entry doors on the street side are part of the same permit. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood, FL 33021.",
    },
    {
      question: "What is the permit office for Lauderdale-by-the-Sea impact windows?",
      answer:
        "The town building department. We pull that permit and install to the NOA. We do not list a fee or a street address for the department — those come from the town.",
    },
  ],
};

export const seaRanchLakes: CityPageOverride = {
  title: "Impact Windows & Doors in Sea Ranch Lakes, FL | Broward County",
  description:
    "Impact windows and doors in Sea Ranch Lakes, FL. Gated oceanfront custom homes, Broward HVHZ / NOA, village permit, access coordinated with the community. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Sea Ranch Lakes</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Sea Ranch Lakes is a gated oceanfront village of custom houses between Lauderdale-by-the-Sea
      and Pompano Beach. There is no repeated floor plan. Glass is there for the view, and the wind
      zone is Broward HVHZ. We coordinate gate access and pull the village permit from Hollywood.
    </>
  ),
  countyBadge: "Sea Ranch Lakes · Broward HVHZ",
  uniqueHeading: "Custom ocean houses, one opening list per property",
  uniqueBody: (
    <>
      <p>
        About 200 houses, each drawn separately, sit on the ocean. Wilma put direct wind and water
        on the east walls. A house that already had laminated, approved glass stayed closed. A house
        that did not, did not. That is the whole sales pitch this village needs — not a subdivision
        package price.
      </p>
      <p>
        Styles run from older Florida coastal to contemporary glass. North and south sections of the
        village are both oceanfront. We measure every opening because a template from a Pembroke
        Pines two-story will not fit a curved or floor-to-ceiling unit. Delivery has to clear
        community security. The village keeps its own police; we schedule through management before
        a crew shows up. We do not publish a gate code process beyond that.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/custom-window-systems/">Custom Window Systems</L>{" "}
        are the usual large-lite conversation. <L href="/brands/pgt/">PGT</L> covers standard
        openings on the same house so the whole elevation is one permit.{" "}
        <L href="/brands/es-windows/">ES Windows</L> is available when the opening is a conventional
        aluminum unit. Salt hardware is not optional on the east wall. My Safe Florida Home can
        apply to a qualifying homesteaded site-built house permitted before January 1, 2008, after
        the program inspection, up to $10,000, with the value and “do not start early” rules on our{" "}
        <L href="/financing/">financing</L> page. Many houses here will sit outside the value limit.
        We will not promise eligibility.
      </p>
      <p>
        Adjacent beach towns: <L href="/areas/lauderdale-by-the-sea/">Lauderdale-by-the-Sea</L> and{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>. Broward-wide context is the{" "}
        <L href="/blog/impact-window-cost-broward-county/">cost guide</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Sea Ranch Lakes is Broward HVHZ. Custom oceanfront glass still needs an HVHZ approval,
      typically a current Miami-Dade NOA, and a village building permit. Unique architecture does
      not create an exemption from the large-missile standard.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "Sea Ranch Lakes + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lauderdale-by-the-sea", "pompano-beach", "fort-lauderdale", "hillsboro-beach"],
  faqs: [
    {
      question: "Can you get impact glass into a gated Sea Ranch Lakes job?",
      answer:
        "Yes. We schedule access with community management before delivery. The village controls entry. The permit and the NOA are separate from the gate list. Call (754) 600-4876.",
    },
    {
      question: "Do you use one window brand for every Sea Ranch Lakes house?",
      answer:
        "No. Custom openings often mix CGI or Custom Window Systems on the large ocean glass with PGT or ES Windows on standard openings. The approval has to match each unit.",
    },
    {
      question: "Is Sea Ranch Lakes in the HVHZ even though it is a small village?",
      answer:
        "Yes. The whole village is in Broward County’s High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current Miami-Dade NOA and a local permit.",
    },
    {
      question: "Will My Safe Florida Home pay for an oceanfront custom home here?",
      answer:
        "Only if the house meets the program: homesteaded, site-built, permitted before January 1, 2008, program inspection first, and — except for low-income applicants — insured value at or below $700,000. Starting before written approval can disqualify the job. Many oceanfront houses exceed that value. Check MySafeFLHome.com.",
    },
  ],
};

export const hallandaleBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Hallandale Beach, FL | Broward County",
  description:
    "Impact windows and doors in Hallandale Beach, FL. Gulfstream, Golden Isles, Three Islands, and older western houses — Broward HVHZ / NOA, city permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hallandale Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hallandale Beach is Broward&apos;s south edge: ocean towers and Golden Isles on one side,
      older single-family streets and Gulfstream on the other. Both need Broward HVHZ products. The
      shop in Hollywood is the next city north, which is why this is a core service city for us.
    </>
  ),
  countyBadge: "Hallandale Beach · Broward HVHZ",
  uniqueHeading: "Towers on the sand, 1960s houses west of the tracks",
  uniqueBody: (
    <>
      <p>
        The east side went vertical. Ocean condominiums, Three Islands, and Gulfstream Park Village
        are association and sometimes high-rise engineering: crane or hoist, floor-specific design
        pressure, and a board that cares about the exterior color. Florida&apos;s 40-year
        recertification cycle is already pushing window programs in older condo buildings here. We
        install the glass the building approves; we do not invent a recertification deadline for a
        specific tower.
      </p>
      <p>
        West of that, the city is still 1960s CBS houses and small buildings — Foster Road and the
        neighborhoods that did not become a podium. Those openings are a normal replacement: often
        original aluminum, sometimes a Florida room. The wind zone does not relax because you are
        away from A1A. It is still a City of Hallandale Beach permit and a Miami-Dade NOA product.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> is the tower and large-slider conversation.{" "}
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> cover most
        western single-family lists. <L href="/brands/custom-window-systems/">CWS</L> is there for
        oversized architectural units. A homesteaded house permitted before January 1, 2008 may
        qualify for My Safe Florida Home after the inspection (up to $10,000; value typically
        $700,000 or below except low-income applicants; do not start before written approval). A
        condo stack uses the association and, if needed,{" "}
        <L href="/financing/">financing</L> — not that grant form.
      </p>
      <p>
        We are at 3000 Stirling Rd in <L href="/areas/hollywood/">Hollywood</L>, immediately north.
        Miami-Dade begins at the county line with <L href="/areas/aventura/">Aventura</L>, which is
        also HVHZ but a different building department. Read{" "}
        <L href="/blog/condo-hoa-impact-window-installation-south-florida/">condo and HOA installs</L>{" "}
        and <L href="/blog/impact-window-cost-broward-county/">Broward cost</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hallandale Beach is Broward HVHZ. High-rise and single-family replacements both need
      HVHZ-approved assemblies, typically a current Miami-Dade NOA, and a City of Hallandale Beach
      Building Department permit. Aventura, across the county line, is Miami-Dade HVHZ with its own
      permit path.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Hallandale Beach + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hollywood", "aventura", "dania-beach"],
  faqs: [
    {
      question: "Do Hallandale Beach high-rises and west-side houses use the same permit?",
      answer:
        "Both are City of Hallandale Beach permits in Broward HVHZ, so both generally need a current Miami-Dade NOA. The engineering, association packet, and product series are different. A tower floor is not a Foster Road ranch.",
    },
    {
      question: "Are you based near Hallandale Beach?",
      answer:
        "Yes. Florida Impact Windows & Doors is at 3000 Stirling Rd, Hollywood, FL 33021, the next city north. Hallandale is a regular service city. Call (754) 600-4876.",
    },
    {
      question: "What brands do you install in Hallandale Beach?",
      answer:
        "PGT, CGI, ES Windows, and Custom Window Systems. CGI is the usual large coastal or tower slider. PGT and ES Windows are the usual whole-house brands on older single-family openings.",
    },
    {
      question: "Can a Hallandale condo association use My Safe Florida Home?",
      answer:
        "The grant is for qualifying homesteaded site-built homes permitted before January 1, 2008, after a program inspection, and work must wait for written approval. Building-wide condo projects are a different process. An individual homesteaded house in the western neighborhoods may still qualify. See MySafeFLHome.com.",
    },
  ],
};
