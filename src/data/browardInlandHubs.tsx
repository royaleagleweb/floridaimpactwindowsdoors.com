import type { ReactNode } from "react";
import Link from "next/link";
import type { CityPageOverride } from "./cityPageOverrides";

function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">
      {children}
    </Link>
  );
}

export const sunrise: CityPageOverride = {
  title: "Impact Windows & Doors in Sunrise, FL | Broward County",
  description:
    "Impact windows and doors in Sunrise, FL. Sunrise Lakes condos, Welleby, Sawgrass-area houses — Broward HVHZ / NOA, City of Sunrise permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Sunrise</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Sunrise runs from garden condominiums near the Turnpike to newer houses toward Sawgrass.
      Wilma&apos;s east-to-west track put the worst of the wind on this side of Broward. It is HVHZ
      the whole way. We pull City of Sunrise permits from Hollywood.
    </>
  ),
  countyBadge: "Sunrise · Broward HVHZ",
  uniqueHeading: "1970s condo stacks and 1990s houses are not the same Sunrise quote",
  uniqueBody: (
    <>
      <p>
        Sunrise Lakes and the other garden condominiums were built with the glazing of their decade.
        Wilma broke a lot of it. A building-wide replacement is a board, a repeated opening, and a
        schedule that does not treat 100 units like 100 custom homes. Welleby, Nob Hill, Spring
        Tree, Melrose Park, and the Sawgrass-area subdivisions are single-family lists: lanai
        slider, single-hungs, and a garage door that still counts on a wind-mitigation form.
      </p>
      <p>
        Nothing here is a salt-air specification. The western streets feel Everglades fetch. Eastern
        streets feel older multi-family construction. Specifying marine hardware because the city
        limits reach the coast on a map is how inland quotes get padded.{" "}
        <L href="/brands/pgt/">PGT</L> or <L href="/brands/es-windows/">ES Windows</L> covers most
        of both housing types. <L href="/brands/cgi/">CGI</L> is for the odd tall slider, not a
        default. <L href="/services/door-types/garage/">Garage doors</L> are the opening people
        skip in Sunrise Lakes-adjacent houses and then lose the opening-protection credit.
      </p>
      <p>
        A homesteaded Sunrise house permitted before January 1, 2008 can ask about My Safe
        Florida Home — the state grant, up to $10,000, only after the program inspection, and
        not a substitute for <L href="/financing/">financing</L>. Condo stacks usually are not
        that grant. The value cap (typically $700,000 insured, except low-income applicants)
        and the “do not start early” rule are on that page and at MySafeFLHome.com.
        The City of Sunrise Building Department is the permit counter — we file it and we do not
        publish their fee. Nearby: <L href="/areas/plantation/">Plantation</L>,{" "}
        <L href="/areas/tamarac/">Tamarac</L>, <L href="/areas/lauderhill/">Lauderhill</L>,{" "}
        <L href="/areas/weston/">Weston</L>. Cost notes:{" "}
        <L href="/blog/impact-window-cost-broward-county/">Broward impact window cost</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Sunrise is Broward HVHZ from the older condominium sections to the western subdivisions.
      Impact replacements need HVHZ-approved products, typically a current Miami-Dade NOA, and a
      City of Sunrise permit. Inland does not mean Palm Beach rules.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Sunrise + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["plantation", "tamarac", "lauderhill", "weston", "davie"],
  faqs: [
    {
      question: "Do Sunrise Lakes condos use the same impact windows as a Sawgrass-area house?",
      answer:
        "Same wind zone and same City of Sunrise permit family, different job. Sunrise Lakes is repeated condominium openings and a board. Western single-family houses are a whole-house list plus a garage door. Both generally need a current Miami-Dade NOA.",
    },
    {
      question: "Is Sunrise coastal for hardware purposes?",
      answer:
        "No. Salt-air packages are for the beach cities. Sunrise’s problem is wind, older glazing, and tile or tree debris, especially on the west side where Wilma’s track was strongest.",
    },
    {
      question: "Who permits impact windows in Sunrise?",
      answer:
        "We pull the City of Sunrise Building Department permit from our shop at 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
    {
      question: "Can a Sunrise homeowner use My Safe Florida Home?",
      answer:
        "A qualifying homesteaded, site-built home permitted before January 1, 2008 may, after the program inspection and only if work waits for written approval. Up to $10,000, with the usual insured-value cap except for low-income applicants. A condominium association project is a different path. See MySafeFLHome.com.",
    },
  ],
};

export const coconutCreek: CityPageOverride = {
  title: "Impact Windows & Doors in Coconut Creek, FL | Broward County",
  description:
    "Impact windows and doors in Coconut Creek, FL. Winston Park, Regency Lakes, and the Lyons Road corridor — Broward HVHZ, shutter-era houses, City of Coconut Creek permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Coconut Creek</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Coconut Creek is inland north Broward: 1980s and 1990s CBS houses in Winston Park, Regency
      Lakes, and Country Woods, plus newer mixed-use near the Promenade. Most of those houses were
      legal with shutters. Owners calling now want the glass to stay on the wall. Broward HVHZ
      still applies. We pull the City of Coconut Creek permit.
    </>
  ),
  countyBadge: "Coconut Creek · Broward HVHZ",
  uniqueHeading: "Shutter-era subdivisions between the coast and the Everglades",
  uniqueBody: (
    <>
      <p>
        Wilma did not need an ocean here. Winston Park lost roof tile, and that tile went through
        the next house&apos;s glass. Butterfly World in Tradewinds Park was damaged in the same
        storm — a reminder that “inland” in Broward is not “out of the wind.” The flat run between
        the coast and the conservation land does not slow a west wind down.
      </p>
      <p>
        Openings are repetitive, which is useful: single-hung, a horizontal roller, a lanai slider,
        a garage. Accordion shutters from the original build are often still on the wall and tired.
        Once an opening is impact-rated, you do not keep a shutter on that same opening for code.
        The garage is the opening that gets forgotten. See{" "}
        <L href="/services/door-types/garage/">impact garage doors</L> and{" "}
        <L href="/faq/do-i-still-need-shutters-with-impact-windows/">shutters versus impact glass</L>.
      </p>
      <p>
        <L href="/brands/pgt/">PGT WinGuard</L> is the usual whole-house line.{" "}
        <L href="/brands/es-windows/">ES Windows</L> is the usual value line when every opening,
        including the Florida room, has to be done. HOAs in these planned streets review color and
        grids. Homesteaded Creek houses permitted before January 1, 2008 are the ordinary My
        Safe Florida Home case: up to $10,000 after the program inspection, and the project can
        be disqualified if work starts before written approval. A condo stack is not that
        application. Insured value is typically capped at $700,000 except for low-income
        applicants.
        Details on <L href="/financing/">financing</L>.
      </p>
      <p>
        East is the beach permit in <L href="/areas/deerfield-beach/">Deerfield Beach</L> and{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>. South and west are{" "}
        <L href="/areas/margate/">Margate</L> and <L href="/areas/coral-springs/">Coral Springs</L>.
        Read <L href="/blog/impact-window-cost-broward-county/">what Broward jobs cost</L> before
        comparing a shutter-removal bid that skipped the NOA.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Coconut Creek is Broward HVHZ. Replacing shutters with impact windows still needs a City of
      Coconut Creek Building Department permit and HVHZ-approved products, typically a current
      Miami-Dade NOA. The old shutter approval does not transfer to the new glass.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Coconut Creek + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["deerfield-beach", "margate", "coral-springs", "pompano-beach"],
  faqs: [
    {
      question: "If my Coconut Creek house has shutters, do I still need a permit for impact windows?",
      answer:
        "Yes. Shutters may already be legal opening protection. Switching those openings to impact glass is a City of Coconut Creek permit with HVHZ-approved products, typically a Miami-Dade NOA. We pull that permit.",
    },
    {
      question: "Is Coconut Creek a salt-air city?",
      answer:
        "No. It is inland. The debris is tile and trees, which is what Wilma showed in Winston Park. We do not specify a beach hardware package on a Lyons Road bedroom window.",
    },
    {
      question: "Which neighborhoods do you install in?",
      answer:
        "Winston Park, Coconut Creek Estates, Regency Lakes, Country Woods, the Lyons Road corridor, and the Tradewinds Park area. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood, FL 33021.",
    },
    {
      question: "Does My Safe Florida Home fit a 1980s Coconut Creek house?",
      answer:
        "It can, if the house is homesteaded and site-built, the original permit is before January 1, 2008, you pass the program inspection, and you do not start before written approval. The grant is up to $10,000. Insured value is typically capped at $700,000 except for low-income applicants. Confirm the cycle at MySafeFLHome.com.",
    },
  ],
};

export const tamarac: CityPageOverride = {
  title: "Impact Windows & Doors in Tamarac, FL | Broward County",
  description:
    "Impact windows and doors in Tamarac, FL. Mainlands and Woodlands jalousie buildings, plus newer western houses. Broward HVHZ / NOA, City of Tamarac permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Tamarac</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Tamarac took Wilma&apos;s eastern eyewall through original jalousie and awning glass in the
      Mainlands and Woodlands. Those buildings are still the job. Newer western houses are a
      different list. Both are Broward HVHZ. We permit them with the City of Tamarac.
    </>
  ),
  countyBadge: "Tamarac · Broward HVHZ",
  uniqueHeading: "Jalousie buildings first, subdivision houses second",
  uniqueBody: (
    <>
      <p>
        The Mainlands, Woodlands, Colony West, and the other 1960s–70s communities are low-rise
        garden buildings with repeated openings. When that glass failed in 2005, the opening was
        the entire unit. Replacing them is a board schedule and a unit type that repeats, which is
        why a custom-estate quote is the wrong document. Woodmont, Sabal Palm, and the later
        single-family sections look like any central Broward house: slider, single-hung, garage.
      </p>
      <p>
        Jalousie and Florida-room awning windows are the weak openings. They are not “mostly
        solid.” They are a stack of glass slats. We replace the opening, we do not film it.{" "}
        <L href="/brands/es-windows/">ES Windows</L> and <L href="/brands/pgt/">PGT</L> are the
        practical lines for repeated aluminum openings. <L href="/brands/cgi/">CGI</L> is rarely
        the point unless a lanai wall is actually large. Associations review color. We will not
        order a finish the board has not seen.
      </p>
      <p>
        Many residents are on fixed incomes, so the useful conversation is phasing the worst
        openings first and whether a homesteaded house — not a condo association — can use My Safe
        Florida Home — inspection first, up to $10,000, homesteaded site-built houses permitted
        before January 1, 2008, value typically at or below $700,000 except low-income
        applicants. Condo buildings use the association and{" "}
        <L href="/financing/">financing</L> if the grant does not apply. The City of Tamarac
        Building Department issues the permit. We file it.
      </p>
      <p>
        Neighbors: <L href="/areas/sunrise/">Sunrise</L>, <L href="/areas/lauderhill/">Lauderhill</L>,{" "}
        <L href="/areas/north-lauderdale/">North Lauderdale</L>,{" "}
        <L href="/areas/margate/">Margate</L>, <L href="/areas/coral-springs/">Coral Springs</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Tamarac is Broward HVHZ. Replacing jalousie or single-pane aluminum with impact glass needs
      a City of Tamarac permit and HVHZ-approved assemblies, typically a current Miami-Dade NOA.
      An association rule about color does not replace that permit.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Tamarac + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["sunrise", "lauderhill", "north-lauderdale", "margate", "coral-springs"],
  faqs: [
    {
      question: "Can you replace jalousie windows in the Tamarac Mainlands?",
      answer:
        "Yes. Original jalousie and awning windows in the Mainlands, Woodlands, and similar communities are a standard Tamarac replacement. The work is repeated openings plus association approval, permitted through the City of Tamarac under Broward HVHZ rules.",
    },
    {
      question: "Do Tamarac HOAs require impact windows?",
      answer:
        "Boards usually control color, grids, and who may work on the building. The Florida Building Code requirement is triggered when the opening is replaced: the new unit has to be an approved impact product. We handle the city permit either way.",
    },
    {
      question: "Is a Tamarac condo eligible for My Safe Florida Home?",
      answer:
        "The grant is written for qualifying homesteaded site-built homes, not a typical association-wide condo project. A homesteaded house in the newer sections may qualify if it was permitted before January 1, 2008 and you wait for written approval. See MySafeFLHome.com.",
    },
    {
      question: "Where do crews come from for Tamarac?",
      answer:
        "3000 Stirling Rd, Hollywood, FL 33021. Tamarac is a regular Broward service city. Call (754) 600-4876.",
    },
  ],
};

export const margate: CityPageOverride = {
  title: "Impact Windows & Doors in Margate, FL | Broward County",
  description:
    "Impact windows and doors in Margate, FL. 1970s–80s CBS ranches, Florida-room jalousie, Oriole and Coral Gate. Broward HVHZ / NOA, City of Margate permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Margate</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Margate is inland Broward housing from the 1970s and 1980s: single-story CBS ranches and
      two-story family houses with original aluminum. Wilma broke that glass with tile and debris.
      The permit is the City of Margate. The wind zone is HVHZ. We install from Hollywood.
    </>
  ),
  countyBadge: "Margate · Broward HVHZ",
  uniqueHeading: "Ranches, Florida rooms, and a garage that still counts",
  uniqueBody: (
    <>
      <p>
        Oriole Estates, Coral Gate, Margate Estates, Palm Lake, Lakewood, Coral Bay, and the
        Carolina golf-course streets repeat the same opening types. That is an advantage: a measured
        single-hung and a slider, not a custom curtain wall. The opening that surprises people is
        the Florida-room jalousie. It is often the largest glass area on a one-story house and the
        least protected.
      </p>
      <p>
        Dense lots mean one failed roof becomes the next house&apos;s missile. Impact glass is how
        you stop that cascade. It is not a beach hardware upgrade — Margate is inland of Pompano.
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> fit these
        openings. Leave <L href="/brands/cgi/">CGI</L> for a wide lanai if the span actually needs
        it. The <L href="/services/door-types/garage/">garage door</L> is on the wind-mitigation
        form even when the windows are done.
      </p>
      <p>
        Margate’s 1970s and 1980s homesteaded houses are who My Safe Florida Home is aimed at,
        when the original permit is before January 1, 2008: up to $10,000, program inspection
        first, insured value typically $700,000 or below except low-income applicants. Do not start
        demolition because a neighbor said the grant was open.{" "}
        <L href="/financing/">Financing</L> covers the balance either way. Permits: City of Margate
        Building Department. Nearby hubs: <L href="/areas/coconut-creek/">Coconut Creek</L>,{" "}
        <L href="/areas/north-lauderdale/">North Lauderdale</L>,{" "}
        <L href="/areas/coral-springs/">Coral Springs</L>, <L href="/areas/tamarac/">Tamarac</L>,{" "}
        <L href="/areas/pompano-beach/">Pompano Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Margate is Broward HVHZ. Original aluminum and jalousie replacements need a City of Margate
      permit and HVHZ-approved products, typically a current Miami-Dade NOA. Being inland of
      Pompano Beach does not move the city into the Palm Beach FL# path.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Margate + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["coconut-creek", "north-lauderdale", "coral-springs", "tamarac", "pompano-beach"],
  faqs: [
    {
      question: "Are Florida-room jalousie windows in Margate worth replacing first?",
      answer:
        "They are often the largest unprotected opening on a one-story Margate house. We measure them with the rest of the list so the permit covers the opening instead of leaving a weak wall of slats. The product still has to carry a Broward HVHZ approval.",
    },
    {
      question: "Do Margate houses need coastal impact hardware?",
      answer:
        "No. Margate is inland. The issue is age of the aluminum, tile debris, and close lot lines. Salt-air series are for the beach cities east of here.",
    },
    {
      question: "Who files the Margate permit?",
      answer:
        "Florida Impact Windows & Doors files it with the City of Margate Building Department and meets the inspector. Office: 3000 Stirling Rd, Hollywood, FL 33021. (754) 600-4876.",
    },
    {
      question: "What should a Margate quote include besides the windows?",
      answer:
        "The slider or Florida room, the entry door if it is original, and the garage door if you care about the opening-protection line on a wind-mitigation form. One unprotected opening can hold the credit down. We will say that on the estimate rather than after inspection.",
    },
  ],
};

export const northLauderdale: CityPageOverride = {
  title: "Impact Windows & Doors in North Lauderdale, FL | Broward County",
  description:
    "Impact windows and doors in North Lauderdale, FL. 1970s–80s houses and townhomes in a dense Broward HVHZ city. City permit, NOA products, from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">North Lauderdale</span>, FL
    </>
  ),
  heroIntro: (
    <>
      North Lauderdale is compact 1970s and 1980s housing — houses, townhomes, and garden
      condominiums — packed tight enough that one broken roof feeds the next window. Wilma proved
      that. The code is Broward HVHZ. We pull the City of North Lauderdale permit from Hollywood.
    </>
  ),
  countyBadge: "North Lauderdale · Broward HVHZ",
  uniqueHeading: "Repeated openings on small lots, not a custom-home spec",
  uniqueBody: (
    <>
      <p>
        Tedder, Ramblewood East, the Village, Hampton Village, and Cypress Pointe share window sizes.
        That keeps a replacement practical: measure a representative opening, confirm the rest, and
        permit the list. It is the wrong city for a beach-condo proposal with a crane line item.
      </p>
      <p>
        Original single-pane aluminum is at the end of its life even on a calm week. Impact glass
        is the storm product and the daily product.{" "}
        <L href="/brands/es-windows/">ES Windows</L> is often the right conversation when covering
        every opening matters. <L href="/brands/pgt/">PGT</L> is the other whole-house line. We
        price both. The <L href="/services/door-types/garage/">garage</L> and any leftover jalousie
        porch are what knock a wind-mitigation credit down after the “all the windows” job.
      </p>
      <p>
        My Safe Florida Home (up to $10,000, not a loan, inspection before any order) fits some
        of those homesteaded houses permitted before January 1, 2008 and misses most
        condominiums. The value cap and written-approval rule are on our{" "}
        <L href="/financing/">financing</L> page, which is also how the rest of the job is paid. City of North
        Lauderdale Building Department for the permit. Neighbors:{" "}
        <L href="/areas/margate/">Margate</L>, <L href="/areas/tamarac/">Tamarac</L>,{" "}
        <L href="/areas/lauderdale-lakes/">Lauderdale Lakes</L>,{" "}
        <L href="/areas/coral-springs/">Coral Springs</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      North Lauderdale is Broward HVHZ. Impact window replacement needs a City of North Lauderdale
      permit and HVHZ-approved assemblies, typically a current Miami-Dade NOA. Lot size does not
      change the large-missile test.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of North Lauderdale + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["margate", "tamarac", "lauderdale-lakes", "coral-springs"],
  faqs: [
    {
      question: "Are North Lauderdale impact window sizes mostly standard?",
      answer:
        "Often yes. The city was built in a short window of 1970s and 1980s production housing, so openings repeat. We still measure. A repeated size is not a reason to skip the NOA or the City of North Lauderdale permit.",
    },
    {
      question: "Does a dense street change the hurricane product?",
      answer:
        "It changes the debris. Tile and fence panels from the next house are the missile. The approval is still Broward HVHZ. We do not sell a coastal series for salt that is not there.",
    },
    {
      question: "Do you install in townhomes and garden condos?",
      answer:
        "Yes, with the association’s rules on color and access. Those jobs are City of North Lauderdale permits. Call (754) 600-4876.",
    },
    {
      question: "How does My Safe Florida Home work in North Lauderdale?",
      answer:
        "Only for a qualifying homesteaded site-built home permitted before January 1, 2008, after the program inspection, and only if no work starts before written approval. Up to $10,000. Insured value is typically at or below $700,000 except for low-income applicants. Check MySafeFLHome.com.",
    },
  ],
};

export const lauderhill: CityPageOverride = {
  title: "Impact Windows & Doors in Lauderhill, FL | Broward County",
  description:
    "Impact windows and doors in Lauderhill, FL. Inverrary condos and 1970s CBS houses, Broward HVHZ / NOA, City of Lauderhill permit. Installed from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lauderhill</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lauderhill is central Broward 1970s construction: Inverrary along the golf course, garden
      condominiums, and CBS houses with original aluminum. Jalousie porches are the opening that
      fails first. The city is HVHZ. We pull City of Lauderhill permits from Hollywood.
    </>
  ),
  countyBadge: "Lauderhill · Broward HVHZ",
  uniqueHeading: "Inverrary boards and single-family aluminum on one HVHZ map",
  uniqueBody: (
    <>
      <p>
        Inverrary is the association job: repeated condo and golf-course openings, a board, and a
        color that has to match the building rather than a homeowner’s preference. The rest of
        Lauderhill — Lauderhill Isles, the mall area streets, North Lauderhill — is houses and
        townhomes with single-pane aluminum and patio jalousie. Both failed the same way in Wilma
        when debris found original glass. They are not the same estimate.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> cover the
        repeated aluminum openings. We do not default to a high-end coastal series; this is not
        A1A. <L href="/brands/cgi/">CGI</L> comes up for a larger golf-course slider. Rental
        properties still need a permitted, approved unit if the opening is being replaced — a
        landlord does not get a lighter code. The owner and the occupant have to agree on access.
        We schedule that; we do not skip inspection.
      </p>
      <p>
        For a qualifying Lauderhill house — homesteaded, site-built, permitted before January 1,
        2008 — My Safe Florida Home is up to $10,000 after the program inspection. Starting
        before written approval can wipe it out, and the insured-value cap is typically $700,000
        except for low-income applicants. Use it for a qualifying house. Use the association and{" "}
        <L href="/financing/">financing</L> for a building. City of Lauderhill Building Department
        for the permit. Nearby: <L href="/areas/plantation/">Plantation</L>,{" "}
        <L href="/areas/sunrise/">Sunrise</L>,{" "}
        <L href="/areas/lauderdale-lakes/">Lauderdale Lakes</L>,{" "}
        <L href="/areas/fort-lauderdale/">Fort Lauderdale</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lauderhill is Broward HVHZ. Impact replacement needs HVHZ-approved products, typically a
      current Miami-Dade NOA, and a City of Lauderhill permit. Inverrary’s architectural review is
      additional to that permit, not a substitute.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Lauderhill + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["plantation", "sunrise", "lauderdale-lakes", "fort-lauderdale", "tamarac"],
  faqs: [
    {
      question: "Do you install impact windows in Inverrary?",
      answer:
        "Yes. Inverrary jobs add the association packet on top of a City of Lauderhill / Broward HVHZ permit. We provide cut sheets before ordering so the frame color matches what the board will accept.",
    },
    {
      question: "Are Lauderhill jalousie porch windows impact rated if they are old?",
      answer:
        "Original jalousie is not an impact product. Replacing that opening is part of a serious whole-house job. We include it on the measure list instead of leaving it as a porch.",
    },
    {
      question: "Does a rental house in Lauderhill skip permitting?",
      answer:
        "No. If the windows are replaced, the City of Lauderhill permit and an HVHZ-approved product still apply. Call (754) 600-4876. We are at 3000 Stirling Rd, Hollywood, FL 33021.",
    },
    {
      question: "Which Lauderhill homes might use My Safe Florida Home?",
      answer:
        "Homesteaded site-built houses permitted before January 1, 2008, after the program inspection, if work has not started and the value rules are met. Inverrary condominium projects generally are not that grant. See MySafeFLHome.com.",
    },
  ],
};

export const lauderdaleLakes: CityPageOverride = {
  title: "Impact Windows & Doors in Lauderdale Lakes, FL | Broward County",
  description:
    "Impact windows and doors in Lauderdale Lakes, FL. 1970s houses, duplexes, and garden apartments. Broward HVHZ / NOA, city permit, from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lauderdale Lakes</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lauderdale Lakes is 1970s CBS houses, duplexes, and garden apartments, a lot of it still on
      the original aluminum or jalousie. The city has been tightening what happens when a property
      is renovated or sold. The wind zone was never optional: Broward HVHZ. We pull the city permit
      from Hollywood.
    </>
  ),
  countyBadge: "Lauderdale Lakes · Broward HVHZ",
  uniqueHeading: "End-of-life aluminum on small buildings",
  uniqueBody: (
    <>
      <p>
        Oakland Waterway, Village Square, the civic center streets, and the canal-edge blocks are
        straightforward openings. Corroded single-pane frames leak on a Tuesday thunderstorm, which
        is why people call before hurricane season. The code reason to replace them is the same as
        in Weston: if you pull a permit to change the window, the new one has to be approved for
        this zone.
      </p>
      <p>
        Repeating sizes make <L href="/brands/es-windows/">ES Windows</L> and{" "}
        <L href="/brands/pgt/">PGT</L> the practical pair to price. We are not going to specify a
        Hillsboro Mile series on a duplex. Multi-family buildings need the owner and, where one
        exists, the association. Access and color are the delay, not the missile test.
      </p>
      <p>
        Where a Lauderdale Lakes house is homesteaded and was permitted before January 1, 2008,
        My Safe Florida Home can offset up to $10,000 after the program inspection. It is not
        automatic, and the value cap (typically $700,000 except low-income applicants) still
        applies. That is the house path. Apartment buildings are the owner’s permit and{" "}
        <L href="/financing/">financing</L>, not a stack of grants. City of Lauderdale Lakes
        Building Department issues the permit. We do not quote their fee. Neighbors:{" "}
        <L href="/areas/lauderhill/">Lauderhill</L>, <L href="/areas/oakland-park/">Oakland Park</L>,{" "}
        <L href="/areas/sunrise/">Sunrise</L>,{" "}
        <L href="/areas/north-lauderdale/">North Lauderdale</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lauderdale Lakes is Broward HVHZ. Replacement impact windows need a city building permit and
      HVHZ-approved assemblies, typically a current Miami-Dade NOA. Selling or renovating a
      property does not create a separate, easier product category.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Lauderdale Lakes + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lauderhill", "oakland-park", "sunrise", "north-lauderdale"],
  faqs: [
    {
      question: "Are Lauderdale Lakes windows a custom-size job?",
      answer:
        "Usually they are standard 1970s aluminum openings, repeated across houses and small buildings. We measure because additions happen. The product approval is still Broward HVHZ.",
    },
    {
      question: "Do duplexes and garden apartments get impact windows?",
      answer:
        "Yes, when the owner is replacing the openings. Those are City of Lauderdale Lakes permits. Occupant access is scheduled with the owner. Call (754) 600-4876.",
    },
    {
      question: "Is this a coastal hardware city?",
      answer:
        "No. Lauderdale Lakes is inland central Broward. The exposure is wind and debris, not ocean salt.",
    },
    {
      question: "What My Safe Florida Home rule matters here?",
      answer:
        "The home has to be a qualifying homesteaded site-built house permitted before January 1, 2008. Inspection first. No work before written approval. Up to $10,000, with the insured-value cap except for low-income applicants. A multi-family rental building is not that application. Check MySafeFLHome.com.",
    },
  ],
};

export const oaklandPark: CityPageOverride = {
  title: "Impact Windows & Doors in Oakland Park, FL | Broward County",
  description:
    "Impact windows and doors in Oakland Park, FL. Mid-century houses in the Corals and North Andrews Gardens, Broward HVHZ / NOA, city permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Oakland Park</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Oakland Park is the mid-century city between Fort Lauderdale and Wilton Manors: 1950s and
      1960s ranches in the Corals and North Andrews Gardens, plus newer infill on Dixie Highway.
      Openings are often not a modern standard size. The permit is still City of Oakland Park, and
      the zone is still Broward HVHZ.
    </>
  ),
  countyBadge: "Oakland Park · Broward HVHZ",
  uniqueHeading: "Odd 1950s openings, a few blocks from the Intracoastal",
  uniqueBody: (
    <>
      <p>
        Renovators are already opening these houses. The mistake is ordering a stock single-hung
        for an opening that was framed before sizes were standardized, then discovering the buck
        and the stucco do not agree. We measure the rough opening. Lake Ridge, Oakland Forest,
        Royal Palm Isles, Prospect Road, and the NE 38th Street arts-district blocks each have
        their own mix of original and added windows.
      </p>
      <p>
        Eastern streets are close enough to the Intracoastal that surge and water-facing glass
        matter on some lots. That is not the same as an A1A condo. Most of the city is a CBS ranch
        with a carport or a small garage. <L href="/brands/pgt/">PGT</L> can be sized for a lot of
        these openings. <L href="/brands/custom-window-systems/">Custom Window Systems</L> is the
        conversation when the unit is actually odd. <L href="/brands/es-windows/">ES Windows</L>{" "}
        fits straightforward aluminum replacements. Historic-looking muntins are a product option
        on some lines; the city is not one historic district with one rule, so we follow the
        address.
      </p>
      <p>
        My Safe Florida Home is the state grant (up to $10,000) for qualifying homesteaded
        site-built homes permitted before January 1, 2008, and only after its own inspection.
        A renovated homestead from the 1950s is exactly the era the date rule describes.
        Do not pull the old windows out before written approval if you are pursuing it.{" "}
        <L href="/financing/">Financing</L> if you are not. Permit office: City of Oakland Park
        Building Department. Neighbors: <L href="/areas/fort-lauderdale/">Fort Lauderdale</L>,{" "}
        <L href="/areas/wilton-manors/">Wilton Manors</L>,{" "}
        <L href="/areas/lauderdale-lakes/">Lauderdale Lakes</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Oakland Park is Broward HVHZ. Non-standard mid-century openings do not get a pass. The
      replacement needs a City of Oakland Park permit and an HVHZ approval, typically a current
      Miami-Dade NOA, matched to the size we install.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Oakland Park + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["fort-lauderdale", "wilton-manors", "lauderdale-lakes", "pompano-beach"],
  faqs: [
    {
      question: "Will a stock impact window fit a 1950s Oakland Park house?",
      answer:
        "Sometimes. Many Corals and North Andrews Gardens openings are non-standard. We measure before ordering. Custom Window Systems or a sized PGT unit is a field decision. Either way it needs a City of Oakland Park permit and a Broward HVHZ approval.",
    },
    {
      question: "Is Oakland Park in a flood-prone spot for windows?",
      answer:
        "Some eastern streets near the Intracoastal see surge. Most of the city is a typical inland ranch exposure: wind and debris. We specify from the address, not from the city name alone.",
    },
    {
      question: "Do you work with houses that are mid-renovation?",
      answer:
        "Yes. Impact windows belong in the same permit strategy as the rest of the exterior work. Call (754) 600-4876. Shop: 3000 Stirling Rd, Hollywood, FL 33021.",
    },
    {
      question: "Can a 1950s Oakland Park house use My Safe Florida Home?",
      answer:
        "If it is homesteaded and site-built and the original permit is before January 1, 2008, it may, after the program inspection. Do not start before written approval. Up to $10,000, with the insured-value cap except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const wiltonManors: CityPageOverride = {
  title: "Impact Windows & Doors in Wilton Manors, FL | Broward County",
  description:
    "Impact windows and doors in Wilton Manors, FL. 1940s–60s bungalows, Wilton Drive mixed-use, Middle River lots. Broward HVHZ / NOA, city permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Wilton Manors</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Wilton Manors is small-lot houses from the 1940s through the 1960s — bungalows and
      mid-century boxes — plus whatever a renovation has already changed. Wilton Drive is
      mixed-use. The Middle River floods some of the low streets. All of it is Broward HVHZ. We
      pull City of Wilton Manors permits from Hollywood.
    </>
  ),
  countyBadge: "Wilton Manors · Broward HVHZ",
  uniqueHeading: "Bungalow openings and a river, not a master-planned grid",
  uniqueBody: (
    <>
      <p>
        Jenada Isles, Wilton Heights, Lakeview, and Manor Grove do not share a window schedule.
        Additions mixed aluminum, glass block, and a later vinyl insert in the same wall. We
        measure each opening. Matching the look of a bungalow is a muntin and frame-color choice
        inside an approved impact unit, not a reason to keep a single-pane sash because it “looks
        original.”
      </p>
      <p>
        Low lots along the Middle River took water in past storms. Impact glass stops debris and
        wind pressure; it is not a flood barrier for a house that sits in the water. We will say
        that on the estimate. Wilton Drive storefronts are a commercial glazing conversation, not
        a single-hung. <L href="/brands/pgt/">PGT</L> and{" "}
        <L href="/brands/custom-window-systems/">CWS</L> cover most house openings.{" "}
        <L href="/brands/es-windows/">ES Windows</L> fits plain aluminum replacements.{" "}
        <L href="/brands/cgi/">CGI</L> is for a larger renovated opening.
      </p>
      <p>
        On a qualifying homestead, My Safe Florida Home pays up to $10,000 toward hardening
        after the program inspection — it is not the lender plan. These older homesteaded
        houses are the profile the date rule was written around,
        if the value cap fits. <L href="/financing/">Financing</L> if it does not. City of Wilton
        Manors Building Department for the permit. Next door:{" "}
        <L href="/areas/fort-lauderdale/">Fort Lauderdale</L>,{" "}
        <L href="/areas/oakland-park/">Oakland Park</L>, <L href="/areas/lauderhill/">Lauderhill</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Wilton Manors is Broward HVHZ. Vintage openings still need a City of Wilton Manors permit and
      an HVHZ-approved impact product, typically a current Miami-Dade NOA, when they are replaced.
      Looking original and being approved are two different requirements, and the unit has to do
      both.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Wilton Manors + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["fort-lauderdale", "oakland-park", "lauderhill"],
  faqs: [
    {
      question: "Can impact windows match a Wilton Manors bungalow?",
      answer:
        "Often, with grids and a frame color chosen to the house. The unit still has to be Broward HVHZ approved and permitted with the City of Wilton Manors. We measure non-standard openings instead of forcing a stock size.",
    },
    {
      question: "Do impact windows stop Middle River flooding?",
      answer:
        "No. They are opening protection against wind pressure and debris. A low lot that floods needs a different conversation than a new window. We will not claim the glass keeps surge out of the house.",
    },
    {
      question: "Do you install on Wilton Drive buildings?",
      answer:
        "Residential openings nearby, yes. Storefront and mixed-use glass is a commercial specification. Call (754) 600-4876 and we will say which one your address is.",
    },
    {
      question: "Does My Safe Florida Home fit these older houses?",
      answer:
        "It may, for a homesteaded site-built house permitted before January 1, 2008, after the program inspection, if you do not start early and you meet the value rules (typically $700,000 insured value except low-income applicants). Up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const cooperCity: CityPageOverride = {
  title: "Impact Windows & Doors in Cooper City, FL | Broward County",
  description:
    "Impact windows and doors in Cooper City, FL. Rock Creek, Embassy Lakes, Monterra — shutter-era family houses in Broward HVHZ. City permit from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Cooper City</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Cooper City is the two-story family house with a tile roof, a lanai, and shutter tracks from
      the 1980s or 1990s. Rock Creek and Embassy Lakes are the pattern. Monterra is newer. Western
      wind comes off the open land toward Southwest Ranches. The city is Broward HVHZ. We pull the
      City of Cooper City permit.
    </>
  ),
  countyBadge: "Cooper City · Broward HVHZ",
  uniqueHeading: "Family houses that were legal with shutters and are tired of using them",
  uniqueBody: (
    <>
      <p>
        Wilma peeled tile in Rock Creek and Embassy Lakes and sent it across small side yards. The
        houses that stayed dry were the ones whose openings held. Original accordion or panel
        shutters are now decades old. If you only close them sometimes, they are not the protection
        you think you bought. Impact glass is the product that is already shut.
      </p>
      <p>
        The opening list is predictable and complete only if it includes the lanai slider and the{" "}
        <L href="/services/door-types/garage/">garage door</L>. A second-story single-hung is not
        the weak point people feel; the garage is. HOAs in these subdivisions review frame color.
        We submit that with the NOA. <L href="/brands/pgt/">PGT WinGuard</L> is the usual
        whole-house spec. <L href="/brands/es-windows/">ES Windows</L> when the goal is every
        opening on a budget. <L href="/brands/cgi/">CGI</L> if Monterra or a custom lanai is
        actually a wide unit.
      </p>
      <p>
        Cooper City’s shutter-era houses are a common My Safe Florida Home question: homesteaded,
        site-built, original permit before January 1, 2008, up to $10,000, and only if the
        program inspection happens before anyone pulls the old glass. These homesteaded houses
        are the ordinary case for that grant, if the dates and
        value fit. <L href="/financing/">Financing</L> covers the rest. Neighbors:{" "}
        <L href="/areas/davie/">Davie</L>, <L href="/areas/pembroke-pines/">Pembroke Pines</L>,{" "}
        <L href="/areas/southwest-ranches/">Southwest Ranches</L>. Read{" "}
        <L href="/blog/impact-window-cost-broward-county/">Broward cost</L> before you compare a
        shutter-only bid.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Cooper City is Broward HVHZ. Taking shutters off and setting impact windows requires a City
      of Cooper City Building Department permit and HVHZ-approved products, typically a current
      Miami-Dade NOA. The shutter permit from the year the house was built does not cover the new
      glass.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Cooper City + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["davie", "pembroke-pines", "southwest-ranches", "weston"],
  faqs: [
    {
      question: "My Cooper City house was built with shutters. Is that still enough?",
      answer:
        "If the shutters are approved and you actually close them, they can be legal opening protection. Most owners calling us want to stop doing that. Replacing the openings with impact glass is a new City of Cooper City permit.",
    },
    {
      question: "Do you include the garage in a Cooper City quote?",
      answer:
        "We ask. The garage is its own opening on a wind-mitigation inspection. A house with new windows and the original garage door is not fully protected. We install impact or wind-rated garage doors as part of the same plan when you want that.",
    },
    {
      question: "Which Cooper City neighborhoods do you cover?",
      answer:
        "Rock Creek, Embassy Lakes, Country Glen, the Flamingo Gardens area, Cooper Colony, Monterra, and the Countryside streets. Call (754) 600-4876.",
    },
    {
      question: "Is My Safe Florida Home realistic for a 1990s Cooper City house?",
      answer:
        "It can be, if the house is homesteaded and site-built, permitted before January 1, 2008, inspected by the program first, and left untouched until written approval. Up to $10,000. Insured value typically at or below $700,000 except for low-income applicants. Confirm at MySafeFLHome.com.",
    },
  ],
};

export const parkland: CityPageOverride = {
  title: "Impact Windows & Doors in Parkland, FL | Broward County",
  description:
    "Impact windows and doors in Parkland, FL. Large-lot and gated houses, Heron Bay and the golf communities, Broward HVHZ / NOA, city permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Parkland</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Parkland is large houses on large lots at the northwest corner of Broward — golf and
      equestrian streets, not a beach. Wilma still had a clean shot off the open land. HOAs care
      about color. The code is Broward HVHZ. We pull City of Parkland permits from Hollywood.
    </>
  ),
  countyBadge: "Parkland · Broward HVHZ",
  uniqueHeading: "More openings per house, and an architectural review before the order",
  uniqueBody: (
    <>
      <p>
        Heron Bay, Parkland Golf and Country Club, Watercrest, Parkland Isles, MariSol, Cypress
        Head, and Pine Tree Estates are not 12-opening ranches. A single house can be a long list
        of single-hungs, a tall family-room fixed unit, and more than one slider. Pricing it like
        a Margate house understates the labor and the glass. The HOA packet is the other clock:
        approved colors and profiles, submitted before we order.
      </p>
      <p>
        Wind exposure is open and landscaped. Oaks and pines become debris. Salt does not.{" "}
        <L href="/brands/pgt/">PGT</L> is the usual whole-house line that can stay consistent for
        an architectural board. <L href="/brands/cgi/">CGI</L> or{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when a rear elevation is actually a glass
        wall. <L href="/brands/es-windows/">ES Windows</L> when the openings are conventional and
        the budget is the constraint. Garage doors on these houses are wide; they belong on the
        same protection plan.
      </p>
      <p>
        My Safe Florida Home tops out at $10,000 for qualifying homesteaded site-built homes
        permitted before January 1, 2008, after the program inspection. Some Parkland houses
        clear the date rule and miss the value cap. We will not guess
        which. <L href="/financing/">Financing</L> is the path we actually control. Neighbors:{" "}
        <L href="/areas/coral-springs/">Coral Springs</L> and{" "}
        <L href="/areas/coconut-creek/">Coconut Creek</L>. Heron Bay also appears on the Coral
        Springs neighborhood list — the permit follows the city of the address.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Parkland is Broward HVHZ. Gated-community standards do not replace the Florida Building Code.
      Impact replacements need a City of Parkland permit and HVHZ-approved products, typically a
      current Miami-Dade NOA.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Parkland + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["coral-springs", "coconut-creek", "boca-raton"],
  faqs: [
    {
      question: "Do Parkland HOAs allow impact windows?",
      answer:
        "They generally allow hurricane protection and regulate color, grids, and profiles. We prepare the cut sheets for that review and still pull a City of Parkland permit. Board approval is not the NOA.",
    },
    {
      question: "Why is a Parkland quote different from a typical Broward house?",
      answer:
        "Count of openings. Estate-scale houses have more windows and larger sliders. The wind zone is the same HVHZ as Coral Springs next door. The labor and the glass are not.",
    },
    {
      question: "Is Parkland coastal?",
      answer:
        "No. It is northwest Broward, with open-land wind and tree debris. We do not specify ocean hardware as a default.",
    },
    {
      question: "Can a Parkland estate use My Safe Florida Home?",
      answer:
        "Only if it meets every program rule, including homestead, site-built, permit before January 1, 2008, inspection first, no early start, and — except for low-income applicants — insured value at or below $700,000. Many larger houses will not. Check MySafeFLHome.com before you plan on the grant.",
    },
  ],
};

export const southwestRanches: CityPageOverride = {
  title: "Impact Windows & Doors in Southwest Ranches, FL | Broward",
  description:
    "Impact windows and doors in Southwest Ranches, FL. Acreage and horse properties, custom openings, Broward HVHZ / NOA, town permit. From Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Southwest Ranches</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Southwest Ranches is Broward without a commercial strip: acre lots, horses, and custom
      houses in Sunshine Ranches, Rolling Oaks, and Country Estates. Nothing next door blocks the
      wind. The town is still HVHZ. We measure one house at a time and pull the town permit from
      Hollywood.
    </>
  ),
  countyBadge: "Southwest Ranches · Broward HVHZ",
  uniqueHeading: "One house per lot, and the barn is not automatically in the scope",
  uniqueBody: (
    <>
      <p>
        Wilma had an open field to work with. There is no neighboring two-story to knock the gust
        down. Each house is its own exposure. Openings are often oversized or shaped, and a guest
        house or cabana adds a second list. A barn is only in the scope if you want that building
        permitted and glazed — we will not quietly add outbuildings to a house quote or claim they
        are required.
      </p>
      <p>
        Delivery of large lites is a driveway conversation, not a cul-de-sac conversation.{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> and{" "}
        <L href="/brands/cgi/">CGI</L> show up for the wide units.{" "}
        <L href="/brands/pgt/">PGT</L> covers the regular openings so the house is one manufacturer
        where it can be. <L href="/brands/es-windows/">ES Windows</L> is there for standard
        aluminum. This is not salt air. It is wind and the debris a rural lot makes for itself:
        limbs, screen enclosures, unsecured equipment.
      </p>
      <p>
        The grant version of this job is My Safe Florida Home: up to $10,000, homesteaded
        site-built homes permitted before January 1, 2008, inspection first, written approval
        before work. Acreage houses often miss the value cap. Read the rule before you count on it.{" "}
        <L href="/financing/">Financing</L> is separate. Town building department for the permit —
        we file it, and we do not publish a fee. Adjacent cities:{" "}
        <L href="/areas/weston/">Weston</L>, <L href="/areas/davie/">Davie</L>,{" "}
        <L href="/areas/cooper-city/">Cooper City</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Southwest Ranches is Broward HVHZ. Custom estate openings need the same class of approval as
      a subdivision house: HVHZ-tested assemblies, typically a current Miami-Dade NOA, and a town
      permit. A one-acre setback is not an exemption.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "Town of Southwest Ranches + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["weston", "davie", "cooper-city"],
  faqs: [
    {
      question: "Do Southwest Ranches houses need a different hurricane code than Weston?",
      answer:
        "No. Both are Broward HVHZ and generally need a Miami-Dade NOA. The municipality on the permit changes. The openings in Southwest Ranches are more often custom and the lots are more exposed.",
    },
    {
      question: "Will you price a barn or guest house with the main house?",
      answer:
        "Only if you want those buildings in the scope. They are separate openings and sometimes a separate permit conversation. We will not assume they are included.",
    },
    {
      question: "Who permits Southwest Ranches window replacement?",
      answer:
        "We pull the town permit and install to the NOA. Florida Impact Windows & Doors is at 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
    {
      question: "Is My Safe Florida Home likely on a large Ranches estate?",
      answer:
        "Only when every rule is met, including the insured-value cap of $700,000 except for low-income applicants, a pre-2008 permit, homestead, site-built construction, and written approval before any work. Many estate homes will not qualify. Check MySafeFLHome.com.",
    },
  ],
};

export const westPark: CityPageOverride = {
  title: "Impact Windows & Doors in West Park, FL | Broward County",
  description:
    "Impact windows and doors in West Park, FL. 1960s–70s CBS houses between Hollywood and Pembroke Pines. Broward HVHZ / NOA, city permit, from our Stirling Road shop. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">West Park</span>, FL
    </>
  ),
  heroIntro: (
    <>
      West Park incorporated in 2005 out of unincorporated Broward, between Hollywood and Pembroke
      Pines. The houses are older than the city: 1960s and 1970s CBS with original windows. The
      wind zone is Broward HVHZ. Our shop on Stirling Road is a short run east.
    </>
  ),
  countyBadge: "West Park · Broward HVHZ",
  uniqueHeading: "Older houses in a young city, next to the Hollywood shop",
  uniqueBody: (
    <>
      <p>
        Lake Forest, the Village, Utopia, and the Pembroke Road corridor are modest single-family
        and small multi-family buildings. Irma and earlier storms found original glass because a
        lot of it had never been changed. Compact lots turn one failure into the next house’s
        debris. This is a practical replacement, not a tower package.
      </p>
      <p>
        <L href="/brands/es-windows/">ES Windows</L> and <L href="/brands/pgt/">PGT</L> are the two
        lines we price on these openings. A full list includes the Florida room if it is jalousie
        and the garage if you want the mitigation form to match the windows. We are the
        dealer-installer, based at 3000 Stirling Rd, Hollywood, FL 33021 — West Park is not a
        long-distance service city.
      </p>
      <p>
        West Park houses from the 1960s and 1970s are the era My Safe Florida Home describes
        (homesteaded, site-built, permitted before January 1, 2008, up to $10,000 after the
        program inspection, no work before written approval). Homesteaded houses from this era
        are who that sentence is about.{" "}
        <L href="/financing/">Financing</L> if the grant is not available this cycle. City of West
        Park Building Department for the permit. Neighbors:{" "}
        <L href="/areas/hollywood/">Hollywood</L>, <L href="/areas/miramar/">Miramar</L>,{" "}
        <L href="/areas/pembroke-pines/">Pembroke Pines</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      West Park is Broward HVHZ. The city is younger than its housing stock, which does not change
      the product rule: replacement impact windows need a City of West Park permit and
      HVHZ-approved assemblies, typically a current Miami-Dade NOA.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of West Park + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hollywood", "miramar", "pembroke-pines"],
  faqs: [
    {
      question: "Is West Park close to your shop?",
      answer:
        "Yes. We are at 3000 Stirling Rd in Hollywood, immediately east. West Park is a core Broward service city. Call (754) 600-4876.",
    },
    {
      question: "What kind of windows are you usually replacing in West Park?",
      answer:
        "Original aluminum single-pane and jalousie from 1960s and 1970s CBS houses and small multi-family buildings. The new units are Broward HVHZ approved and permitted with the City of West Park.",
    },
    {
      question: "Do you install impact doors here too?",
      answer:
        "Yes. Entry doors, sliders, and garage doors are part of the same opening-protection conversation. A window-only job can leave the credit and the house short.",
    },
    {
      question: "Does My Safe Florida Home apply in West Park?",
      answer:
        "For a qualifying homesteaded site-built home permitted before January 1, 2008, after the program inspection, and only if work waits for written approval. Up to $10,000. Insured value typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};
