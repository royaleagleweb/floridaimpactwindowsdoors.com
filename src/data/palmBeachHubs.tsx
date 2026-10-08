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

export const boyntonBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Boynton Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Boynton Beach, FL. Palm Beach is wind-borne debris, not HVHZ — an FL# is often accepted. Oceanfront, downtown cottages, and western communities. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Boynton Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Boynton Beach runs from the ocean to western communities, and none of it is in the
      High-Velocity Hurricane Zone. Miami-Dade and Broward are. Palm Beach is a wind-borne debris
      region where a Florida Product Approval is often accepted. We pull the City of Boynton Beach
      permit from Hollywood.
    </>
  ),
  countyBadge: "Boynton Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Beach condos, downtown cottages, and adult communities are three Boynton jobs",
  uniqueBody: (
    <>
      <p>
        The oceanfront is salt and a higher design pressure on the east wall. Downtown still has
        older cottages. The western side — Canyon Lakes, Indian Spring, Valencia, Aberdeen, Hunters
        Run, Leisureville — is suburban and active-adult housing with association rules and repeated
        openings. Frances and Jeanne in 2004, then Wilma, are why inland Boynton is not &quot;safe
        because it is west.&quot; The paperwork is still not a Broward NOA mandate. An NOA product
        is allowed because it exceeds the local rule. It is not automatically required on every
        opening.
      </p>
      <p>
        Oceanfront sliders are a <L href="/brands/cgi/">CGI</L> or heavier{" "}
        <L href="/brands/pgt/">PGT</L> conversation. Whole-house lists in the western communities
        are usually PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when an older downtown opening is not a
        stock size. Building-wide condo work waits on the board. We do not order a series the
        association has already rejected.
      </p>
      <p>
        My Safe Florida Home can fit a homesteaded site-built Boynton house permitted before
        January 1, 2008: a Florida DFS grant, up to $10,000, only after the program inspection.
        Except for low-income applicants, insured dwelling value is typically at or below $700,000.
        Starting work before written approval can disqualify the project. Leisureville-style
        condominiums are usually an association project, not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/delray-beach/">Delray Beach</L>,{" "}
        <L href="/areas/ocean-ridge/">Ocean Ridge</L>, and <L href="/areas/lantana/">Lantana</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Boynton Beach is in Palm Beach County&apos;s wind-borne debris region. It is not in the HVHZ
      that covers Miami-Dade and Broward. Impact windows still need a City of Boynton Beach permit
      and a current product approval. An FL# is often accepted. We do not copy a Miami-Dade NOA
      packet onto this city by default, and we do not publish the city&apos;s fee.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Boynton Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["delray-beach", "ocean-ridge", "lantana", "hypoluxo", "gulf-stream"],
  faqs: [
    {
      question: "Is Boynton Beach in the High-Velocity Hurricane Zone?",
      answer:
        "No. Boynton Beach is in Palm Beach County, a wind-borne debris region. You still need a permitted, approved impact product. An FL# is often accepted. A Miami-Dade NOA is allowed because it exceeds that rule. It is not automatically required.",
    },
    {
      question: "Do western Boynton communities use the same glass as the beach?",
      answer:
        "Same city permit, different openings. Oceanfront elevations take salt and higher design pressure. Canyon Lakes, Valencia, Aberdeen, and the adult communities are association and repeated-opening jobs. Call (754) 600-4876.",
    },
    {
      question: "Can a Boynton condo use My Safe Florida Home?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after a program inspection, up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Do not start work before written approval. Check MySafeFLHome.com.",
    },
    {
      question: "Who pulls the Boynton Beach permit?",
      answer:
        "Florida Impact Windows & Doors, from 3000 Stirling Rd, Hollywood, FL 33021. The counter is the City of Boynton Beach, not Broward and not Miami-Dade.",
    },
  ],
};

export const jupiter: CityPageOverride = {
  title: "Impact Windows & Doors in Jupiter, FL | Palm Beach County",
  description:
    "Impact windows and doors in Jupiter, FL. Inlet, Abacoa, and Jupiter Farms — Palm Beach wind-borne debris, not HVHZ. Town of Jupiter permit. FL# often accepted. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Jupiter</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Jupiter is the north end of Palm Beach County: inlet houses, Abacoa, golf communities, and
      acreage in Jupiter Farms. It is a wind-borne debris region, not the HVHZ. We pull the Town of
      Jupiter permit and do not file a Broward NOA packet by default.
    </>
  ),
  countyBadge: "Jupiter · Palm Beach · not HVHZ",
  uniqueHeading: "The inlet, Abacoa, and Jupiter Farms are not one window count",
  uniqueBody: (
    <>
      <p>
        Jupiter Inlet Colony and the beach side take ocean wind. Admirals Cove, Jonathan&apos;s
        Landing, and the Bluffs are waterfront and association reviews. Abacoa is New Urbanist
        houses with a different grid than a 1970s ranch. Jupiter Farms is equestrian acreage with
        custom openings and outbuildings. Frenchman&apos;s Reserve and Indian Creek sit in between.
        Frances and Jeanne are the 2004 memory up here. None of that geography moves the town into
        Miami-Dade&apos;s HVHZ.
      </p>
      <p>
        Inlet and wide water glass: <L href="/brands/cgi/">CGI</L> or{" "}
        <L href="/brands/pgt/">PGT</L>. Abacoa and typical single-family lists: PGT or{" "}
        <L href="/brands/es-windows/">ES Windows</L>. Farms and odd openings:{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L>. A barn or guest house is
        its own opening list. We name the Town of Jupiter when the address is in the town.
      </p>
      <p>
        A homesteaded site-built house permitted before January 1, 2008 can sometimes use My Safe
        Florida Home — Florida DFS, up to $10,000, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Many inlet
        and club addresses miss that value test. Do not start before written approval. Newer Abacoa
        permits can miss the date. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        North and south hubs: <L href="/areas/tequesta/">Tequesta</L> and{" "}
        <L href="/areas/palm-beach-gardens/">Palm Beach Gardens</L>.{" "}
        <L href="/areas/port-st-lucie/">Port St. Lucie</L> is the next city north and it is St. Lucie
        County, not this town.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Jupiter is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Jupiter permit and a current product approval. An FL# is often
      accepted. We submit what that building department wants for the address.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Jupiter · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["tequesta", "juno-beach", "palm-beach-gardens", "port-st-lucie"],
  faqs: [
    {
      question: "Is Jupiter in the HVHZ?",
      answer:
        "No. Jupiter is Palm Beach County, outside the High-Velocity Hurricane Zone that covers Miami-Dade and Broward. You still need a Town of Jupiter permit and an approved impact product. An FL# is often accepted.",
    },
    {
      question: "Do you install in Jupiter Farms and Abacoa?",
      answer:
        "Yes. Abacoa is a planned-house list. Jupiter Farms openings are more custom, including outbuildings. Inlet and Admirals Cove glass is a waterfront spec. All of those inside the town use the Town of Jupiter permit. Call (754) 600-4876.",
    },
    {
      question: "Is Port St. Lucie on the same permit as Jupiter?",
      answer:
        "No. Port St. Lucie is in St. Lucie County with its own city building department. It is also outside the HVHZ. We do not file a Town of Jupiter permit for a Port St. Lucie address.",
    },
    {
      question: "Does My Safe Florida Home apply in Jupiter?",
      answer:
        "For a qualifying homesteaded, site-built home permitted before January 1, 2008, up to $10,000, after the program inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
  ],
};

export const palmBeachGardens: CityPageOverride = {
  title: "Impact Windows & Doors in Palm Beach Gardens, FL | Palm Beach County",
  description:
    "Impact windows and doors in Palm Beach Gardens, FL. PGA National, Mirasol, and club reviews. Palm Beach wind-borne debris, not HVHZ. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Palm Beach Gardens</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Palm Beach Gardens is club communities and planned sections west of the island. It is not
      HVHZ. Architectural review is often the delay. The City of Palm Beach Gardens still permits
      the opening, and an FL# is often accepted.
    </>
  ),
  countyBadge: "Palm Beach Gardens · not HVHZ",
  uniqueHeading: "The club review is the bottleneck. The wind zone is not Broward.",
  uniqueBody: (
    <>
      <p>
        PGA National, Mirasol, Old Palm, Evergrene, Frenchman&apos;s Creek, and BallenIsles each
        have their own color and profile sheet. The Gardens Mall area is commercial, not that house
        template. Western sections see open fetch. That is a debris and wind conversation. It does
        not import Miami-Dade&apos;s NOA requirement. If a quote says every Gardens bedroom must
        carry an NOA because &quot;Florida is HVHZ,&quot; that quote is using the wrong county.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> is the usual whole-house line when the club will accept the
        color. <L href="/brands/cgi/">CGI</L> for a wide golf-course slider.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when the review allows a clean aluminum profile
        and the goal is every opening. <L href="/brands/custom-window-systems/">CWS</L> for a custom
        Old Palm-style opening. We submit the cut sheets the committee asks for. We do not start
        fabrication on a rejected color.
      </p>
      <p>
        My Safe Florida Home is a date-and-value question in these communities. The grant is Florida
        DFS, up to $10,000, homesteaded site-built homes permitted before January 1, 2008, after the
        program inspection. Except for low-income applicants, insured dwelling value is typically at
        or below $700,000. Many club houses miss one of those tests. Do not start before written
        approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Next hubs: <L href="/areas/jupiter/">Jupiter</L> and{" "}
        <L href="/areas/north-palm-beach/">North Palm Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Palm Beach Gardens is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ.
      Impact replacements need a City of Palm Beach Gardens permit and a current product approval.
      An FL# is often accepted. A club architectural review is additional and does not replace the
      permit.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Palm Beach Gardens · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["jupiter", "north-palm-beach", "riviera-beach", "wellington", "palm-beach"],
  faqs: [
    {
      question: "Is Palm Beach Gardens in the HVHZ?",
      answer:
        "No. It is Palm Beach County, a wind-borne debris region. An FL# is often accepted on a City of Palm Beach Gardens permit. NOA products can be used because they exceed the local rule. They are not the automatic requirement they are in Broward.",
    },
    {
      question: "Do PGA National and Mirasol require matching frames?",
      answer:
        "Their architectural committees typically do. We provide cut sheets before ordering. The city permit is separate from that approval. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home cover a newer Gardens house?",
      answer:
        "Only if the house was permitted before January 1, 2008, is a qualifying homesteaded site-built home, and passes the program inspection. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Work before written approval can disqualify it. See MySafeFLHome.com.",
    },
    {
      question: "Where is the shop?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. Palm Beach Gardens is a regular northern service city.",
    },
  ],
};

export const wellington: CityPageOverride = {
  title: "Impact Windows & Doors in Wellington, FL | Palm Beach County",
  description:
    "Impact windows and doors in Wellington, FL. Equestrian estates and Olympia two-stories. Palm Beach wind-borne debris, not HVHZ. Village permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Wellington</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Wellington splits at the equestrian district. Olympia and Grand Isles are suburban two-stories.
      West of South Shore Boulevard the houses get larger and the lots open toward the Everglades.
      The village is not HVHZ. We pull the Village of Wellington permit.
    </>
  ),
  countyBadge: "Wellington · Palm Beach · not HVHZ",
  uniqueHeading: "Everglades fetch is real. A Broward NOA mandate is not.",
  uniqueBody: (
    <>
      <p>
        Family sections — Olympia, Versailles, Grand Isles, Sugar Pond Manor, Wellington Shores —
        are tile-roof CBS with lanai sliders and HOA colors. The equestrian side is custom houses,
        barns, and guest quarters on large lots. Open ground to the west is why wind and debris
        matter here even though the Atlantic is a long drive east. Palm Beach County still treats
        this as a wind-borne debris region. We do not file the packet we would file in Weston, which
        is Broward HVHZ, just because both places face the Everglades.
      </p>
      <p>
        Subdivision lists: <L href="/brands/pgt/">PGT WinGuard</L> or{" "}
        <L href="/brands/es-windows/">ES Windows</L>. Estate and odd openings:{" "}
        <L href="/brands/cgi/">CGI</L> or <L href="/brands/custom-window-systems/">CWS</L>. A barn
        opening is not a bedroom window. The{" "}
        <L href="/services/door-types/garage/">garage</L> on a two-story still belongs on the
        wind-mitigation form. Shutters that were the original code path can stay if you use them.
        Most callers want them gone.
      </p>
      <p>
        Many Wellington houses were permitted after January 1, 2008, so My Safe Florida Home often
        does not fit. Where the house is older, homesteaded, and site-built, the grant is Florida
        DFS, up to $10,000, after the program inspection. Except for low-income applicants, insured
        dwelling value is typically at or below $700,000. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Next hubs: <L href="/areas/royal-palm-beach/">Royal Palm Beach</L> and{" "}
        <L href="/areas/loxahatchee/">Loxahatchee</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Wellington is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Village of Wellington permit and a current product approval. An FL# is
      often accepted. Western open ground changes the debris story. It does not change the county
      rule.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Village of Wellington · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["royal-palm-beach", "loxahatchee", "greenacres", "west-palm-beach"],
  faqs: [
    {
      question: "Is Wellington in the HVHZ?",
      answer:
        "No. Wellington is Palm Beach County, a wind-borne debris region. An FL# is often accepted. Broward's NOA expectation does not transfer here just because both areas face west.",
    },
    {
      question: "Do equestrian estates use the same windows as Olympia?",
      answer:
        "No. Olympia and Grand Isles are repeated two-story lists. Equestrian properties add custom openings, guest houses, and barns. Both use the Village of Wellington permit when the address is in the village. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home cover a 2010 Wellington house?",
      answer:
        "The date rule is a site-built homestead permitted before January 1, 2008. A 2010 permit does not qualify. Where the date fits, the grant is up to $10,000 after inspection and written approval, with insured value typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
    {
      question: "Who installs in Wellington?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. We pull the Village of Wellington permit.",
    },
  ],
};

export const royalPalmBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Royal Palm Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Royal Palm Beach, FL. 1990s–2000s planned houses, western fetch. Palm Beach wind-borne debris, not HVHZ. Village permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Royal Palm Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Royal Palm Beach is planned one- and two-story houses west of the coast. Most were built with
      shutters as the code path. The village is Palm Beach County, not HVHZ. We pull the Village of
      Royal Palm Beach permit.
    </>
  ),
  countyBadge: "Royal Palm Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Shutter houses on open ground, with Palm Beach paperwork",
  uniqueBody: (
    <>
      <p>
        Madison Green, Crestwood, Victoria Groves, The Willows, La Mancha, and the country-club
        section are consistent CBS and tile. That consistency is why a whole-house list is
        straightforward once it is measured. It is not why anyone should paste a Miami Beach tower
        spec, or a Broward NOA-only speech, onto the quote. Western Palm Beach County has Everglades
        fetch. Frances, Jeanne, and Wilma already made that point. The approval is still often an FL#.
      </p>
      <p>
        <L href="/brands/pgt/">PGT WinGuard</L> or <L href="/brands/es-windows/">ES Windows</L> for
        the typical house. <L href="/brands/cgi/">CGI</L> if the lanai slider is the opening that
        needs a heavier assembly. The <L href="/services/door-types/garage/">garage door</L> is the
        item that still fails a wind-mitigation form when the glass is done and the door is
        original. HOA color sheets are a review, not a wind zone.
      </p>
      <p>
        A lot of this village was permitted around or after 2008, so ask the date before anyone
        promises My Safe Florida Home. The grant is Florida DFS, up to $10,000, for a qualifying
        homesteaded site-built home permitted before January 1, 2008, after the program inspection.
        Except for low-income applicants, insured dwelling value is typically at or below $700,000.
        Starting before written approval can disqualify the project. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/wellington/">Wellington</L> and{" "}
        <L href="/areas/loxahatchee/">Loxahatchee</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Royal Palm Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Village of Royal Palm Beach permit and a current product approval. An FL#
      is often accepted. We do not publish the village fee.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Village of Royal Palm Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["wellington", "loxahatchee", "greenacres", "west-palm-beach"],
  faqs: [
    {
      question: "Is Royal Palm Beach in the HVHZ?",
      answer:
        "No. It is Palm Beach County, a wind-borne debris region. Replacement impact products need a Village of Royal Palm Beach permit. An FL# is often accepted. An NOA is optional overkill, not the default packet.",
    },
    {
      question: "If my house has shutters, do I need impact windows?",
      answer:
        "Not for code, if the shutters are approved and you close them. Impact windows are the permanent method. Once the opening is impact-rated, you do not also shutter it for code. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home apply to a 2005 Royal Palm Beach house?",
      answer:
        "It can, if the house is a qualifying homesteaded site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Is the permit Wellington's?",
      answer:
        "No. Wellington is the next village. A Royal Palm Beach address is the Village of Royal Palm Beach. We do not mix those counters.",
    },
  ],
};

export const lakeWorthBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Lake Worth Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Lake Worth Beach, FL. Historic cottages and a separate oceanfront. Palm Beach wind-borne debris, not HVHZ. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lake Worth Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lake Worth Beach kept its cottages and added an oceanfront that is not those cottages. The
      city is Palm Beach County, not HVHZ. Odd openings downtown still need a permit. An FL# is
      often accepted. We do not file a Miami-Dade packet by default.
    </>
  ),
  countyBadge: "Lake Worth Beach · Palm Beach · not HVHZ",
  uniqueHeading: "College Park cottages and the beach are different lists in the same city",
  uniqueBody: (
    <>
      <p>
        College Park, South Palm Park, and the downtown blocks are 1920s–40s cottages and later
        infill. Openings are small, mixed, and often not square. The oceanfront and Parrot Cove are
        salt and a clearer view opening. Lake Osborne and Winston Trails are the more suburban west
        side of the city. Storefronts in the arts district are commercial glass, not a cottage
        sash. Frances and Jeanne are the modern storm memory. The 1928 storm is the old one. Neither
        puts the city in the HVHZ.
      </p>
      <p>
        Cottage profiles: <L href="/brands/pgt/">PGT</L> or{" "}
        <L href="/brands/custom-window-systems/">CWS</L>. Beach sliders:{" "}
        <L href="/brands/cgi/">CGI</L> or a heavier PGT unit. Straightforward aluminum replacements:{" "}
        <L href="/brands/es-windows/">ES Windows</L>. We measure before anyone promises a stock size.
      </p>
      <p>
        Older homesteaded cottages are the My Safe Florida Home conversation: site-built, permitted
        before January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. Except
        for low-income applicants, insured dwelling value is typically at or below $700,000. Do not
        start before written approval. A downtown storefront is not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/lantana/">Lantana</L>,{" "}
        <L href="/areas/palm-springs/">Palm Springs</L>, and <L href="/areas/atlantis/">Atlantis</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lake Worth Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a City of Lake Worth Beach permit and a current product approval. An FL# is
      often accepted. Historic-looking profiles do not skip that permit.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Lake Worth Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lantana", "palm-springs", "atlantis", "hypoluxo", "south-palm-beach", "manalapan"],
  faqs: [
    {
      question: "Is Lake Worth Beach in the HVHZ?",
      answer:
        "No. It is Palm Beach County, a wind-borne debris region. The City of Lake Worth Beach permits the work. An FL# is often accepted. Broward and Miami-Dade NOA rules are a different county.",
    },
    {
      question: "Can historic cottages get impact glass?",
      answer:
        "Yes, if the profile fits the opening. We measure College Park and South Palm Park one opening at a time and submit what the city wants. Call (754) 600-4876.",
    },
    {
      question: "Is the oceanfront a different wind zone inside the city?",
      answer:
        "No. It is the same Palm Beach wind-borne debris region. The oceanfront opening list is salt and larger glass. The cottage list is small, older openings. One permit office.",
    },
    {
      question: "Does My Safe Florida Home apply to a Lake Worth cottage?",
      answer:
        "If it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const rivieraBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Riviera Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Riviera Beach, FL. Singer Island towers and mainland houses. Palm Beach wind-borne debris, not HVHZ. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Riviera Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Riviera Beach is two maps. Singer Island is oceanfront buildings. The mainland is older
      houses, marina-area townhomes, and the Blue Heron corridor. Neither map is HVHZ. We pull the
      City of Riviera Beach permit.
    </>
  ),
  countyBadge: "Riviera Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Singer Island is not the mainland, and neither one is Broward",
  uniqueBody: (
    <>
      <p>
        Singer Island takes salt, surge, and upper-floor design pressure. That is a coastal product
        conversation. It is still Palm Beach County, so an FL# is often accepted and a Miami-Dade
        NOA is not the automatic ticket it is in Hallandale or Hollywood. Mainland Riviera Beach
        Heights and the streets off Blue Heron are a house list. The marina village is newer
        townhomes. Pleasant City is its own neighborhood on our list. Palm Beach Shores is a
        different municipality we do not have a hub for — we do not permit it as Riviera Beach.
      </p>
      <p>
        Island glass: <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L>, plus the
        association packet. Mainland houses: PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd opening. We will not order a
        tower series the board rejected, and we will not sell that series to a mainland ranch.
      </p>
      <p>
        My Safe Florida Home is a mainland-house question more often than an island-tower question.
        The grant is Florida DFS, up to $10,000, homesteaded site-built, permitted before January 1,
        2008, after the program inspection. Except for low-income applicants, insured dwelling value
        is typically at or below $700,000. Do not start before written approval. Condo stacks are
        association projects. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/north-palm-beach/">North Palm Beach</L> and{" "}
        <L href="/areas/west-palm-beach/">West Palm Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Riviera Beach, including Singer Island, is in Palm Beach County&apos;s wind-borne debris
      region, not the HVHZ. Impact replacements need a City of Riviera Beach permit and a current
      product approval. An FL# is often accepted. Island exposure changes the product. It does not
      move the island into Miami-Dade.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Riviera Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["north-palm-beach", "palm-beach", "west-palm-beach", "lake-park", "palm-beach-gardens"],
  faqs: [
    {
      question: "Is Singer Island in the HVHZ?",
      answer:
        "No. Singer Island is part of Riviera Beach in Palm Beach County, a wind-borne debris region. Ocean exposure is real. The approval path is often an FL#, not the automatic Miami-Dade NOA used in Broward.",
    },
    {
      question: "Do you install on the mainland and the island?",
      answer:
        "Yes. They are different opening lists and the same City of Riviera Beach permit when the address is in the city. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood.",
    },
    {
      question: "Is Palm Beach Shores included?",
      answer:
        "Palm Beach Shores is a separate municipality and does not have its own hub on this site yet. We do not label a Palm Beach Shores address as Riviera Beach.",
    },
    {
      question: "Can a Singer Island condo use My Safe Florida Home?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded site-built home permitted before January 1, 2008, up to $10,000, after inspection and written approval. An association project is a different path. Insured value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const greenacres: CityPageOverride = {
  title: "Impact Windows & Doors in Greenacres, FL | Palm Beach County",
  description:
    "Impact windows and doors in Greenacres, FL. 1970s–80s CBS and garden condos. Palm Beach wind-borne debris, not HVHZ. City of Greenacres permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Greenacres</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Greenacres is inland Palm Beach County: older CBS houses and garden condominiums with original
      aluminum. It is a wind-borne debris region, not HVHZ. We pull the City of Greenacres permit
      and usually submit an FL#, not a Broward NOA packet.
    </>
  ),
  countyBadge: "Greenacres · Palm Beach · not HVHZ",
  uniqueHeading: "Original aluminum on modest houses, not a coastal hardware package",
  uniqueBody: (
    <>
      <p>
        Palm Beach Plantation, Greenacres Terrace, Rolling Green, and the Haverhill corridor are
        1970s and 1980s houses and garden buildings. Window sizes repeat, which helps a measured
        list. It does not justify a beach-salt upcharge. Newer townhomes are a smaller share. The
        missile is neighbor debris, the same inland story Wilma told across this part of the county.
        The city hall is Greenacres, not Lake Worth Beach and not Atlantis.
      </p>
      <p>
        <L href="/brands/es-windows/">ES Windows</L> is the usual value line when every original
        aluminum unit has to be replaced. <L href="/brands/pgt/">PGT WinGuard</L> is the other
        whole-house option. <L href="/brands/cgi/">CGI</L> only when a slider needs it. Garden
        condominiums add an association review. The{" "}
        <L href="/services/door-types/garage/">garage</L> on a house is still an opening.
      </p>
      <p>
        This is a city where the grant date often matches the house. My Safe Florida Home is Florida
        DFS, up to $10,000, for a qualifying homesteaded site-built home permitted before January 1,
        2008, after the program inspection. Except for low-income applicants, insured dwelling value
        is typically at or below $700,000. Starting before written approval can disqualify the
        project. A garden condo is usually not that grant. See <L href="/financing/">financing</L>{" "}
        and <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/palm-springs/">Palm Springs</L> and{" "}
        <L href="/areas/wellington/">Wellington</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Greenacres is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a City of Greenacres permit and a current product approval. An FL# is often
      accepted. Inland location does not remove the wind-borne debris requirement, and it does not
      add an HVHZ label.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Greenacres · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["palm-springs", "lake-worth-beach", "wellington", "atlantis", "royal-palm-beach"],
  faqs: [
    {
      question: "Is Greenacres in the HVHZ?",
      answer:
        "No. Greenacres is Palm Beach County, a wind-borne debris region. An FL# is often accepted on a City of Greenacres permit. A Miami-Dade NOA is not the automatic requirement.",
    },
    {
      question: "Which brands fit a typical Greenacres house?",
      answer:
        "ES Windows or PGT for a full replacement of original aluminum. We measure before ordering, including garden-condo openings that repeat but still need association approval. Call (754) 600-4876.",
    },
    {
      question: "Can Greenacres homeowners use My Safe Florida Home?",
      answer:
        "Many houses meet the date. The grant still requires a qualifying homesteaded, site-built home permitted before January 1, 2008, a program inspection, and written approval before work. It is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Is the permit Lake Worth Beach?",
      answer:
        "No. A Greenacres address is the City of Greenacres. Lake Worth Beach, Palm Springs, and Atlantis are separate municipalities.",
    },
  ],
};

export const palmBeachTown: CityPageOverride = {
  title: "Impact Windows & Doors in Palm Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Palm Beach, FL. Barrier-island estates and Worth Avenue. Wind-borne debris, not HVHZ. Town of Palm Beach permit. FL# often accepted. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Palm Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      The Town of Palm Beach is the barrier island, not the county and not West Palm Beach. It is
      a wind-borne debris region, not the HVHZ. Ocean exposure is real. The approval path is still
      often an FL#, with a Town of Palm Beach permit and a design review that cares about the sash.
    </>
  ),
  countyBadge: "Town of Palm Beach · not HVHZ",
  uniqueHeading: "The island is not HVHZ just because it faces the Atlantic",
  uniqueBody: (
    <>
      <p>
        Estate Section, the North End, Midtown, the South End, Everglades Island, and the Worth
        Avenue blocks are custom houses and a commercial street. Many openings are historic profiles.
        The town expects the replacement to look like the opening it sits in. That review does not
        convert Palm Beach into Miami-Dade. Salt and surge are why the glass and hardware are a
        coastal specification. They are not why we copy a Broward NOA packet onto the permit by
        default. An NOA product can be used when it is the right unit and the town accepts it.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L>, <L href="/brands/pgt/">PGT</L>, and{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> are the usual conversations
        for custom and historic-looking profiles. <L href="/brands/es-windows/">ES Windows</L> is
        rarely the estate spec. We measure. We do not publish a per-window estate price.
      </p>
      <p>
        My Safe Florida Home usually fails the value test on this island. The grant is Florida DFS,
        up to $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection, and — except for low-income applicants — insured dwelling value typically at or
        below $700,000. Do not start before written approval. See <L href="/financing/">financing</L>{" "}
        and <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        The mainland city is <L href="/areas/west-palm-beach/">West Palm Beach</L>. South on the
        island: <L href="/areas/south-palm-beach/">South Palm Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      The Town of Palm Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ
      that covers Miami-Dade and Broward. Impact replacements need a Town of Palm Beach permit and
      a current product approval. An FL# is often accepted. Landmark and architectural review is
      about appearance, not a waiver of approved glass.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Palm Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["west-palm-beach", "south-palm-beach", "lake-worth-beach", "riviera-beach"],
  faqs: [
    {
      question: "Is the Town of Palm Beach in the HVHZ?",
      answer:
        "No. The barrier island is Palm Beach County, a wind-borne debris region. Direct ocean exposure does not place it in the High-Velocity Hurricane Zone. An FL# is often accepted on a Town of Palm Beach permit.",
    },
    {
      question: "Is Palm Beach the same permit office as West Palm Beach?",
      answer:
        "No. The Town of Palm Beach and the City of West Palm Beach are different municipalities. We do not cross those permits. Call (754) 600-4876.",
    },
    {
      question: "Do historic Palm Beach houses allow impact windows?",
      answer:
        "Replacements are reviewed for appearance. The glass still has to be an approved impact product. We provide profiles and the product approval the town asks for. We do not promise a board outcome.",
    },
    {
      question: "Does My Safe Florida Home cover a Palm Beach estate?",
      answer:
        "Only if every rule fits, including — except for low-income applicants — insured dwelling value typically at or below $700,000, a homesteaded site-built home permitted before January 1, 2008, and written approval before any work. The grant is up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const northPalmBeach: CityPageOverride = {
  title: "Impact Windows & Doors in North Palm Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in North Palm Beach, FL. Intracoastal houses and Old Port Cove. Wind-borne debris, not HVHZ. Village permit. FL# often accepted. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">North Palm Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      North Palm Beach is a village on the Intracoastal, with a country-club core and condo
      communities at Old Port Cove and Prosperity Harbor. It is Palm Beach County, not HVHZ. We pull
      the Village of North Palm Beach permit.
    </>
  ),
  countyBadge: "North Palm Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Lagoon surge and club landscaping, without a Miami-Dade stamp by default",
  uniqueBody: (
    <>
      <p>
        Anchorage Point and the eastern houses face the Lake Worth Lagoon. The village center around
        the municipal course is 1960s CBS and later renovations. Old Port Cove and Prosperity Harbor
        are association buildings. Mature landscaping is the debris source in a storm, which is a
        product reason, not an HVHZ reason. Juno Beach is the next town north. Palm Beach Gardens is
        west. We do not mix those permits.
      </p>
      <p>
        Water-facing sliders: <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L>.
        Village ranches: PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd renovation opening. Condo work
        waits on the board.
      </p>
      <p>
        A homesteaded village house permitted before January 1, 2008 can be a My Safe Florida Home
        candidate: Florida DFS, up to $10,000, after the program inspection. Except for low-income
        applicants, insured dwelling value is typically at or below $700,000. Do not start before
        written approval. Old Port Cove is an association project, not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/palm-beach-gardens/">Palm Beach Gardens</L>,{" "}
        <L href="/areas/juno-beach/">Juno Beach</L>, and <L href="/areas/lake-park/">Lake Park</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      North Palm Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Village of North Palm Beach permit and a current product approval. An FL#
      is often accepted.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Village of North Palm Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["palm-beach-gardens", "juno-beach", "riviera-beach", "lake-park"],
  faqs: [
    {
      question: "Is North Palm Beach in the HVHZ?",
      answer:
        "No. The village is Palm Beach County, a wind-borne debris region. An FL# is often accepted. Intracoastal exposure does not move it into the Miami-Dade and Broward zone.",
    },
    {
      question: "Do you install in Old Port Cove and in village houses?",
      answer:
        "Yes. Old Port Cove and Prosperity Harbor add association review. Single-family streets are a measured house list. Both use the Village of North Palm Beach permit. Call (754) 600-4876.",
    },
    {
      question: "Is the permit Palm Beach Gardens?",
      answer:
        "No. Palm Beach Gardens is the next city west. A North Palm Beach address stays with the village.",
    },
    {
      question: "What about My Safe Florida Home?",
      answer:
        "It is a Florida Department of Financial Services grant, up to $10,000, for a qualifying homesteaded site-built home permitted before January 1, 2008, after a program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Work before written approval can disqualify the project. See MySafeFLHome.com.",
    },
  ],
};

export const lantana: CityPageOverride = {
  title: "Impact Windows & Doors in Lantana, FL | Palm Beach County",
  description:
    "Impact windows and doors in Lantana, FL. Beach side and mainland across the Intracoastal. Palm Beach wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lantana</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lantana straddles the Intracoastal: a beach side and a mainland of older houses. Both are
      Palm Beach County, not HVHZ. We pull the Town of Lantana permit and do not treat the beach
      side as Broward.
    </>
  ),
  countyBadge: "Lantana · Palm Beach · not HVHZ",
  uniqueHeading: "Two shores, one town permit, and not an HVHZ label",
  uniqueBody: (
    <>
      <p>
        Lantana Beach and the small condominium buildings on the barrier side take ocean wind.
        Hypoluxo Island is a named neighborhood in our city notes and also its own town next door —
        we permit the municipality the address is actually in. Mainland Pine Ridge, the Lake Osborne
        side, and the Town Center area are older houses and a small commercial core. Salt on the
        beach does not create a second wind zone inside Palm Beach County.
      </p>
      <p>
        Beach openings: <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L>. Mainland
        lists: PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an older cottage opening. Association
        buildings still need a board packet before we order a stack.
      </p>
      <p>
        Mainland homesteads permitted before January 1, 2008 are the My Safe Florida Home question:
        Florida DFS, up to $10,000, after the program inspection, site-built homestead. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Do not
        start before written approval. Beach condos are usually not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/hypoluxo/">Hypoluxo</L>,{" "}
        <L href="/areas/lake-worth-beach/">Lake Worth Beach</L>, and{" "}
        <L href="/areas/boynton-beach/">Boynton Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lantana is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Lantana permit and a current product approval. An FL# is often
      accepted. The beach side and the mainland share that rule and not a Miami-Dade NOA mandate.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Lantana · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hypoluxo", "lake-worth-beach", "boynton-beach", "manalapan", "atlantis"],
  faqs: [
    {
      question: "Is Lantana in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. An FL# is often accepted on a Town of Lantana permit. Ocean frontage does not move the beach side into Broward's zone.",
    },
    {
      question: "Is Hypoluxo Island part of Lantana?",
      answer:
        "The island is its own town, Hypoluxo, with its own hub. Some Lantana notes mention the island because the towns touch. We permit the address's actual municipality. Call (754) 600-4876.",
    },
    {
      question: "Do beach condos and mainland houses share one product?",
      answer:
        "No. Beach openings take salt and a higher design pressure. Mainland houses are an older residential list. The permit office is the same only when both addresses are in the Town of Lantana.",
    },
    {
      question: "Does My Safe Florida Home apply?",
      answer:
        "For a qualifying homesteaded, site-built home permitted before January 1, 2008, up to $10,000, after the program inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. A condominium association project is a different path. See MySafeFLHome.com.",
    },
  ],
};

export const palmSpringsVillage: CityPageOverride = {
  title: "Impact Windows & Doors in Palm Springs, FL | Palm Beach County",
  description:
    "Impact windows and doors in Palm Springs, FL — the Palm Beach village, not California. 1960s–70s houses. Wind-borne debris, not HVHZ. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Palm Springs</span>, FL
    </>
  ),
  heroIntro: (
    <>
      This Palm Springs is a village in Palm Beach County, inland of Lake Worth Beach. The houses
      are 1960s–70s CBS and garden condominiums. The wind zone is wind-borne debris, not HVHZ. We
      pull the Village of Palm Springs permit.
    </>
  ),
  countyBadge: "Palm Springs · Palm Beach · not HVHZ",
  uniqueHeading: "A village of original aluminum between Lake Worth and Greenacres",
  uniqueBody: (
    <>
      <p>
        Congress Avenue, Lake Worth Road, Pinehurst, and Garden Lakes are modest lots with original
        aluminum that is past its useful life. Dense lots mean the neighbor&apos;s tile is the
        missile. There is no ocean elevation to justify marine hardware on every bedroom. Newer
        townhomes are the exception. People searching the name from out of state are not describing
        this village. The permit is not the City of Lake Worth Beach.
      </p>
      <p>
        <L href="/brands/es-windows/">ES Windows</L> or <L href="/brands/pgt/">PGT WinGuard</L> for
        a full house. <L href="/brands/cgi/">CGI</L> only if a slider needs it. Garden condominiums
        need the association&apos;s series approval. The{" "}
        <L href="/services/door-types/garage/">garage door</L> still counts if it is an unprotected
        opening.
      </p>
      <p>
        The housing age lines up with My Safe Florida Home more often than the beach towns do:
        homesteaded, site-built, permitted before January 1, 2008, up to $10,000 from Florida DFS,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Do not start before written approval. It is not a loan. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/lake-worth-beach/">Lake Worth Beach</L> and{" "}
        <L href="/areas/greenacres/">Greenacres</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      The Village of Palm Springs is in Palm Beach County&apos;s wind-borne debris region, not the
      HVHZ. Impact replacements need a village permit and a current product approval. An FL# is
      often accepted.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Village of Palm Springs · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lake-worth-beach", "greenacres", "west-palm-beach", "atlantis"],
  faqs: [
    {
      question: "Is Palm Springs, Florida in the HVHZ?",
      answer:
        "No. This village is Palm Beach County, a wind-borne debris region. An FL# is often accepted. It is not the California city and it is not Lake Worth Beach.",
    },
    {
      question: "Do you replace original aluminum windows in Palm Springs?",
      answer:
        "Yes. ES Windows and PGT are the usual whole-house lines. We measure, including garden-condo openings. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood.",
    },
    {
      question: "Does My Safe Florida Home fit these houses?",
      answer:
        "Often the date does. The grant still requires a qualifying homestead, a site-built home permitted before January 1, 2008, a program inspection, and written approval before work. It is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Why not specify beach hardware?",
      answer:
        "The village is inland. The debris is the next roof and the next lot, not Atlantic salt. A coastal hardware package on every opening changes the price without matching the street.",
    },
  ],
};

export const tequesta: CityPageOverride = {
  title: "Impact Windows & Doors in Tequesta, FL | Palm Beach County",
  description:
    "Impact windows and doors in Tequesta, FL. Loxahatchee River houses and a country club. Palm Beach wind-borne debris, not HVHZ. Village permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Tequesta</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Tequesta sits on the Loxahatchee River at the north edge of Palm Beach County. River glass and
      club houses are not HVHZ. We pull the Village of Tequesta permit. Jupiter is the next hub
      south, not the same building department.
    </>
  ),
  countyBadge: "Tequesta · Palm Beach · not HVHZ",
  uniqueHeading: "River frontage is the exposure. The county rule is still not HVHZ.",
  uniqueBody: (
    <>
      <p>
        Lighthouse Cove, River Ridge, Cypress Cove, and the river lots aim glass at the water. The
        Jupiter Inlet is north of that water, which is why surge is a local topic. Tequesta Country
        Club and Tequesta Pines are golf-course houses with review boards. 1970s ranches and later
        custom houses share the village. None of this is the High-Velocity Hurricane Zone. An FL# is
        often accepted. We do not import a Miami-Dade packet because the river is salty.
      </p>
      <p>
        River sliders: <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L>. Typical
        club and ranch lists: PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a custom river wall. Hardware on the
        water elevation is a corrosion conversation. Inland bedrooms in the same house are not
        automatically the same specification.
      </p>
      <p>
        My Safe Florida Home depends on the permit date and the value test. The grant is Florida
        DFS, up to $10,000, homesteaded site-built, permitted before January 1, 2008, after the
        program inspection. Except for low-income applicants, insured dwelling value is typically at
        or below $700,000. Many river houses miss the value test. Do not start before written
        approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/jupiter/">Jupiter</L> and <L href="/areas/juno-beach/">Juno Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Tequesta is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Village of Tequesta permit and a current product approval. An FL# is often
      accepted. River exposure changes the opening spec inside that rule.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Village of Tequesta · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["jupiter", "juno-beach", "palm-beach-gardens"],
  faqs: [
    {
      question: "Is Tequesta in the HVHZ?",
      answer:
        "No. The village is Palm Beach County, a wind-borne debris region. An FL# is often accepted. A Broward-style NOA requirement is not the default.",
    },
    {
      question: "Is the permit the Town of Jupiter?",
      answer:
        "No. Tequesta is the Village of Tequesta. Jupiter is the adjacent hub. We do not cross those permits. Call (754) 600-4876.",
    },
    {
      question: "Do river houses need different glass than club houses off the water?",
      answer:
        "Often yes. Water-facing sliders take design pressure and corrosion. A bedroom on the golf course may be a standard whole-house unit. Both still need a Village of Tequesta permit and an approved product.",
    },
    {
      question: "Does My Safe Florida Home apply in Tequesta?",
      answer:
        "Only for a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and only if work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const junoBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Juno Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Juno Beach, FL. Low-rise oceanfront, not towers. Palm Beach wind-borne debris, not HVHZ. Town permit. Turtle-lighting note. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Juno Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Juno Beach is a low-rise ocean town, not a tower coast. Every street is close to salt air.
      It is still Palm Beach County, not the HVHZ. We pull the Town of Juno Beach permit. Exterior
      lighting near turtle nesting is a town concern we do not ignore and do not invent extra rules
      about.
    </>
  ),
  countyBadge: "Juno Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Direct ocean wind, low buildings, and a Palm Beach approval path",
  uniqueBody: (
    <>
      <p>
        Oceanfront condominiums, Juno Isles, Sea Oats, and houses along the beach are the town.
        Loggerhead Marinelife Center is the landmark, and the town&apos;s sea-turtle nesting habitat
        is why exterior lighting gets reviewed separately from the window permit. That is not a
        window-glass rule and it is not an HVHZ rule. There is no inland buffer and no high-rise
        wind shadow. Frances and Jeanne are the regional 2004 memory. An FL# is often accepted. We
        do not default to a Miami-Dade NOA packet.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L> for oceanfront glass.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when a lower building&apos;s openings are a
        straightforward aluminum replacement the association will accept.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd opening. Marine-grade hardware
        belongs on the ocean elevation.
      </p>
      <p>
        My Safe Florida Home is a house question, not a beach-condo question. The grant is Florida
        DFS, up to $10,000, homesteaded site-built, permitted before January 1, 2008, after the
        program inspection. Except for low-income applicants, insured dwelling value is typically at
        or below $700,000. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/jupiter/">Jupiter</L> and{" "}
        <L href="/areas/north-palm-beach/">North Palm Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Juno Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Juno Beach permit and a current product approval. An FL# is often
      accepted. Turtle-lighting limits are a separate exterior-light issue, not a substitute for
      approved glass.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Juno Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["jupiter", "north-palm-beach", "tequesta", "palm-beach-gardens"],
  faqs: [
    {
      question: "Is Juno Beach in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region, even though it faces the Atlantic directly. An FL# is often accepted on a Town of Juno Beach permit.",
    },
    {
      question: "Does sea-turtle lighting change the window permit?",
      answer:
        "Exterior lighting near nesting habitat is a town concern of its own. It does not replace the product approval on the glass, and it does not place Juno Beach in the HVHZ. We follow the town's exterior-light limits when a project includes lighting. Call (754) 600-4876.",
    },
    {
      question: "Are Juno Beach buildings high-rises?",
      answer:
        "No. The town is low-rise condominiums and houses. Upper-floor tower engineering from Sunny Isles does not apply. Salt and design pressure still do.",
    },
    {
      question: "Can a Juno Beach condo use My Safe Florida Home?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded site-built home permitted before January 1, 2008, up to $10,000, after inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const lakePark: CityPageOverride = {
  title: "Impact Windows & Doors in Lake Park, FL | Palm Beach County",
  description:
    "Impact windows and doors in Lake Park, FL. 1960s–70s houses and a marina district. Palm Beach wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Lake Park</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Lake Park is a small town on the Lake Worth Lagoon between North Palm Beach and Riviera Beach.
      Older houses, small condo buildings, and a marina district. Not HVHZ. Town of Lake Park permit.
    </>
  ),
  countyBadge: "Lake Park · Palm Beach · not HVHZ",
  uniqueHeading: "A lagoon-edge town with original windows, not a county-seat high-rise",
  uniqueBody: (
    <>
      <p>
        Kelsey Park and the residential streets are 1960s–70s CBS. The marina district and Park
        Avenue are the revitalizing commercial edge, including storefronts. Eastern properties see
        the lagoon. That is surge and salt on those openings, not a reason to label the whole town
        HVHZ. People confuse the name with Lake Park elsewhere in Florida. This one is the Palm
        Beach town next to North Palm Beach.
      </p>
      <p>
        Houses: <L href="/brands/pgt/">PGT</L> or <L href="/brands/es-windows/">ES Windows</L>.
        Water-facing and larger units: <L href="/brands/cgi/">CGI</L> when the opening needs it.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd size. Storefronts are commercial
        openings on the same wind-borne debris rule.
      </p>
      <p>
        Older homesteads often meet the My Safe Florida Home date: site-built, permitted before
        January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Do not
        start before written approval. A storefront lease is not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/north-palm-beach/">North Palm Beach</L> and{" "}
        <L href="/areas/riviera-beach/">Riviera Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Lake Park is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Lake Park permit and a current product approval. An FL# is often
      accepted.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Lake Park · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["north-palm-beach", "riviera-beach", "west-palm-beach", "palm-beach-gardens"],
  faqs: [
    {
      question: "Is Lake Park in the HVHZ?",
      answer:
        "No. This Lake Park is in Palm Beach County, a wind-borne debris region. An FL# is often accepted on a Town of Lake Park permit.",
    },
    {
      question: "Do you install houses and marina-district storefronts?",
      answer:
        "Yes. Houses are a residential list. Storefronts are commercial openings. Both are Town of Lake Park permits when the address is in the town. Call (754) 600-4876.",
    },
    {
      question: "Is the permit North Palm Beach?",
      answer:
        "No. The towns share a border. A Lake Park address stays with the Town of Lake Park.",
    },
    {
      question: "Does My Safe Florida Home apply?",
      answer:
        "For a qualifying homesteaded, site-built home permitted before January 1, 2008, up to $10,000, after the program inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const hypoluxo: CityPageOverride = {
  title: "Impact Windows & Doors in Hypoluxo, FL | Palm Beach County",
  description:
    "Impact windows and doors in Hypoluxo, FL. Island houses surrounded by the Intracoastal. Palm Beach wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hypoluxo</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hypoluxo is a small town, including Hypoluxo Island between the Intracoastal and the Lake Worth
      Lagoon. It is not HVHZ. Each house is measured. We pull the Town of Hypoluxo permit.
    </>
  ),
  countyBadge: "Hypoluxo · Palm Beach · not HVHZ",
  uniqueHeading: "An island town with custom houses and Palm Beach paperwork",
  uniqueBody: (
    <>
      <p>
        Island houses run from renovated older cottages to later waterfront houses. The mainland
        side of the town is a smaller residential set. Water on more than one side is the exposure.
        There is no large contractor bench in a town this size, which is why the crew comes from our
        Hollywood shop at 3000 Stirling Rd rather than from a Hypoluxo storefront we do not have.
        Lantana and Manalapan are the neighbors. We do not permit an island address as Lantana.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/pgt/">PGT</L> for water-facing glass.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when the opening is one-off.{" "}
        <L href="/brands/es-windows/">ES Windows</L> for a simpler cottage list. Salt hardware
        belongs on the water elevations.
      </p>
      <p>
        My Safe Florida Home is a value-test question on the island. The grant is Florida DFS, up to
        $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Many waterfront houses miss that. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hypoluxo is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Hypoluxo permit and a current product approval. An FL# is often
      accepted. Island surge does not reclassify the town as Miami-Dade.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Hypoluxo · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lantana", "manalapan", "boynton-beach", "lake-worth-beach"],
  faqs: [
    {
      question: "Is Hypoluxo in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. An FL# is often accepted. Being surrounded by water does not place it in the High-Velocity Hurricane Zone.",
    },
    {
      question: "Do you permit Hypoluxo Island as Lantana?",
      answer:
        "No. Hypoluxo is its own town. Lantana is the neighbor. We file with the Town of Hypoluxo for a Hypoluxo address. Call (754) 600-4876.",
    },
    {
      question: "Are openings standard sizes?",
      answer:
        "Often no. Island houses are individual. We measure. CWS, CGI, and PGT are the usual places we look for a waterfront opening.",
    },
    {
      question: "Does My Safe Florida Home cover Hypoluxo waterfront houses?",
      answer:
        "Only when the house is a qualifying homesteaded site-built home permitted before January 1, 2008 and, except for low-income applicants, insured dwelling value is typically at or below $700,000. The grant is up to $10,000 after inspection and written approval. See MySafeFLHome.com.",
    },
  ],
};

export const manalapan: CityPageOverride = {
  title: "Impact Windows & Doors in Manalapan, FL | Palm Beach County",
  description:
    "Impact windows and doors in Manalapan, FL. Point Manalapan estates on a narrow barrier island. Wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Manalapan</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Manalapan is a narrow barrier-island town between the Atlantic and the Intracoastal. Point
      Manalapan estates are custom. The town is Palm Beach County, not HVHZ. We pull the Town of
      Manalapan permit and measure every opening.
    </>
  ),
  countyBadge: "Manalapan · Palm Beach · not HVHZ",
  uniqueHeading: "Ocean and Intracoastal on the same lot, still not an HVHZ town",
  uniqueBody: (
    <>
      <p>
        The island is thin enough that a house can see ocean and Intracoastal at once. That is
        simultaneous exposure, which drives design pressure and hardware. It does not move the Town
        of Manalapan into the zone that covers Miami Beach and Fort Lauderdale. Eau Palm Beach is the
        resort landmark on our neighborhood list, not a residential template. We do not publish
        estate prices or square footages.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L>, <L href="/brands/pgt/">PGT</L>, and{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> are the product
        conversations for large custom glass. <L href="/brands/es-windows/">ES Windows</L> is not the
        usual estate specification. Finish and sightline are part of the order. The product approval
        is often an FL#.
      </p>
      <p>
        My Safe Florida Home is rarely a fit. Except for low-income applicants, insured dwelling
        value is typically at or below $700,000, and the house must be a qualifying homesteaded
        site-built home permitted before January 1, 2008. The grant is up to $10,000 from Florida
        DFS, only after the program inspection. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/ocean-ridge/">Ocean Ridge</L> and{" "}
        <L href="/areas/hypoluxo/">Hypoluxo</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Manalapan is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Manalapan permit and a current product approval. An FL# is often
      accepted. Barrier-island exposure changes the specification, not the county&apos;s zone.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Manalapan · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["ocean-ridge", "hypoluxo", "boynton-beach", "south-palm-beach"],
  faqs: [
    {
      question: "Is Manalapan in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. Ocean and Intracoastal exposure do not place it in the High-Velocity Hurricane Zone. An FL# is often accepted.",
    },
    {
      question: "Do you publish prices for Point Manalapan?",
      answer:
        "No. Custom openings are priced from a measured list. Our 2026 cost guide ranges are county illustrations, not a Manalapan contract. Call (754) 600-4876.",
    },
    {
      question: "Which brands do you install on large glass?",
      answer:
        "CGI, PGT, and Custom Window Systems, depending on the opening and the finish. We are the dealer-installer. The factories build the units. We permit and set them.",
    },
    {
      question: "Will My Safe Florida Home fund a Manalapan estate?",
      answer:
        "Only if the house meets the homestead, site-built, pre-2008 permit, inspection, and written-approval rules, and — except for low-income applicants — insured dwelling value typically at or below $700,000. The grant is up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const oceanRidge: CityPageOverride = {
  title: "Impact Windows & Doors in Ocean Ridge, FL | Palm Beach County",
  description:
    "Impact windows and doors in Ocean Ridge, FL. Barrier-island houses between ocean and Intracoastal. Wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Ocean Ridge</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Ocean Ridge is a barrier-island town south of Manalapan: houses and small condo buildings with
      ocean on one side and the Intracoastal on the other. Palm Beach County, not HVHZ. Town of
      Ocean Ridge permit.
    </>
  ),
  countyBadge: "Ocean Ridge · Palm Beach · not HVHZ",
  uniqueHeading: "No interior shelter on the island, and no Broward permit",
  uniqueBody: (
    <>
      <p>
        Ocean Avenue, the Woolbright area, Inlet Cay, and Crown Colony are the local names. Glass
        faces water in both directions. Beach erosion in a storm is a structural topic for the
        town. It is not something we solve with a window claim on this page. The glass still has to
        stay in the opening. The approval path is Palm Beach wind-borne debris, often an FL#, not
        the automatic NOA used in Deerfield Beach a county south.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L> for ocean-facing walls.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a custom opening.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when a smaller condo opening is a clean aluminum
        replacement. Association buildings need a board yes before we order.
      </p>
      <p>
        My Safe Florida Home is usually a value-test problem on this island. Florida DFS, up to
        $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Do not start before written approval. See <L href="/financing/">financing</L>{" "}
        and <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/boynton-beach/">Boynton Beach</L>,{" "}
        <L href="/areas/manalapan/">Manalapan</L>, and <L href="/areas/briny-breezes/">Briny Breezes</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Ocean Ridge is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Ocean Ridge permit and a current product approval. An FL# is often
      accepted.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Ocean Ridge · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["boynton-beach", "manalapan", "briny-breezes", "gulf-stream"],
  faqs: [
    {
      question: "Is Ocean Ridge in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. Barrier-island exposure does not change that. An FL# is often accepted on a Town of Ocean Ridge permit.",
    },
    {
      question: "Do both water sides need the same specification?",
      answer:
        "Both sides see water. Design pressure and hardware are set per elevation after we measure, not with one beach package copied onto every bedroom. Call (754) 600-4876.",
    },
    {
      question: "Is the permit Boynton Beach?",
      answer:
        "No. Boynton Beach is the larger neighbor. An Ocean Ridge address is the Town of Ocean Ridge.",
    },
    {
      question: "Does My Safe Florida Home apply?",
      answer:
        "Only if the house is a qualifying homesteaded site-built home permitted before January 1, 2008, after inspection and written approval, and insured dwelling value is typically at or below $700,000 except for low-income applicants. The grant is up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const gulfStream: CityPageOverride = {
  title: "Impact Windows & Doors in Gulf Stream, FL | Palm Beach County",
  description:
    "Impact windows and doors in Gulf Stream, FL. Oceanfront estates and a strict architectural review. Wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Gulf Stream</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Gulf Stream is a small oceanfront town between Delray Beach and Ocean Ridge. Architectural
      review is strict. The wind zone is still Palm Beach wind-borne debris, not HVHZ. We pull the
      Town of Gulf Stream permit.
    </>
  ),
  countyBadge: "Gulf Stream · Palm Beach · not HVHZ",
  uniqueHeading: "The town reviews the look. It does not adopt Broward's NOA rule.",
  uniqueBody: (
    <>
      <p>
        Place Au Soleil, the estate streets, and A1A oceanfront houses are custom — Bermuda, Mediterranean,
        and later villas. The town reviews exterior changes, including windows. That review wants
        color, profile, and finish. It does not convert the town into the High-Velocity Hurricane
        Zone. Ocean and Intracoastal exposure are why hardware and design pressure are coastal. An
        FL# is often the approval. An NOA unit is something we use when it is the right product, not
        because Deerfield Beach requires one.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L>, <L href="/brands/pgt/">PGT</L>, and{" "}
        <L href="/brands/custom-window-systems/">CWS</L> are the usual specifications. We submit cut
        sheets before ordering. We do not guess what the architectural review will accept.
      </p>
      <p>
        My Safe Florida Home rarely clears the value test here. The grant is up to $10,000 from
        Florida DFS for a qualifying homesteaded site-built home permitted before January 1, 2008,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/delray-beach/">Delray Beach</L> and{" "}
        <L href="/areas/highland-beach/">Highland Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Gulf Stream is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Gulf Stream permit and a current product approval. An FL# is often
      accepted. Architectural review is additional.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Gulf Stream · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["delray-beach", "highland-beach", "ocean-ridge", "boynton-beach"],
  faqs: [
    {
      question: "Is Gulf Stream in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. An FL# is often accepted. The architectural review does not replace that approval and does not create an HVHZ rule.",
    },
    {
      question: "Will you order windows before the town reviews them?",
      answer:
        "No. We submit profiles and the product approval the Town of Gulf Stream asks for. Fabrication waits on that review. Call (754) 600-4876.",
    },
    {
      question: "Is the permit Delray Beach?",
      answer:
        "No. Delray Beach is the larger city next door. A Gulf Stream address is the Town of Gulf Stream.",
    },
    {
      question: "Does My Safe Florida Home apply to Gulf Stream estates?",
      answer:
        "Only when every condition is met, including insured dwelling value typically at or below $700,000 except for low-income applicants, a homesteaded site-built home permitted before January 1, 2008, and written approval before work. The grant is up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const highlandBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Highland Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in Highland Beach, FL. Oceanfront condominiums between Boca and Delray. Wind-borne debris, not HVHZ. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Highland Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Highland Beach is mostly oceanfront condominiums along A1A between Boca Raton and Delray Beach.
      Building-wide glass is an association project. The town is not HVHZ. We pull the Town of
      Highland Beach permit.
    </>
  ),
  countyBadge: "Highland Beach · Palm Beach · not HVHZ",
  uniqueHeading: "A condo coast between two cities, with Palm Beach rules",
  uniqueBody: (
    <>
      <p>
        Boca Highland Beach Club, Toscana, Coronado, Dalton Place, and the Highland Beach Club are
        buildings, not a single-family grid. A handful of houses exist. Most calls are a stack of
        units that have to match. Florida recertification talk on older coastal buildings is an
        association and engineer topic. We do not invent a recertification fee or a deadline on this
        page. We do supply the NOA or FL# pages the board and the town ask for. Because this is Palm
        Beach County, an FL# is often accepted. We do not start from a Broward NOA assumption.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/pgt/">PGT</L> are the usual building
        specifications. <L href="/brands/es-windows/">ES Windows</L> if the board accepts that line.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an unusual opening. One unit usually
        cannot pick a different series from the elevation.
      </p>
      <p>
        My Safe Florida Home is the wrong program for a building-wide condo replacement. It is a
        Florida DFS grant, up to $10,000, for a qualifying homesteaded site-built home permitted
        before January 1, 2008, after the program inspection. Except for low-income applicants,
        insured dwelling value is typically at or below $700,000. Do not start before written
        approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/boca-raton/">Boca Raton</L> and{" "}
        <L href="/areas/delray-beach/">Delray Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Highland Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of Highland Beach permit and a current product approval. An FL# is
      often accepted. The association&apos;s series choice is additional.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Highland Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["boca-raton", "delray-beach", "gulf-stream", "deerfield-beach"],
  faqs: [
    {
      question: "Is Highland Beach in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. Oceanfront condominiums still need approved impact products. An FL# is often accepted. Deerfield Beach, the Broward city farther south, is HVHZ. Highland Beach is not.",
    },
    {
      question: "Can one condo unit replace windows alone?",
      answer:
        "Only if the association allows a series that matches the building. Most oceanfront stacks want one specification. We do not order glass the board has rejected. Call (754) 600-4876.",
    },
    {
      question: "Is the permit Boca Raton?",
      answer:
        "No. Boca Raton is the city to the south. A Highland Beach address is the Town of Highland Beach.",
    },
    {
      question: "Does My Safe Florida Home pay for a condo stack?",
      answer:
        "No. The grant is for a qualifying homesteaded site-built home, not an association-wide building project. Rules include a pre-2008 permit, a program inspection, written approval before work, and insured value typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const brinyBreezes: CityPageOverride = {
  title: "Impact Windows & Doors in Briny Breezes, FL | Palm Beach County",
  description:
    "Impact windows and doors in Briny Breezes, FL. Oceanfront manufactured-home co-op. Not CBS, not HVHZ. Town of Briny Breezes permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Briny Breezes</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Briny Breezes is a town of manufactured homes on a small oceanfront co-op between the Atlantic
      and the Intracoastal. It is not conventional CBS construction, and it is not HVHZ. We pull the
      Town of Briny Breezes permit and we do not pretend a single-wide opening is a concrete-block house.
    </>
  ),
  countyBadge: "Briny Breezes · Palm Beach · not HVHZ",
  uniqueHeading: "Manufactured housing on the ocean, with Palm Beach paperwork",
  uniqueBody: (
    <>
      <p>
        The town is one community on a narrow parcel. Homes are primarily manufactured, not CBS
        ranches and not estate masonry. Framing and how an opening carries load are different from a
        block house. We measure the opening that is there. We do not publish a special installation
        method, a fastener schedule, or a claim that every unit can take the same residential impact
        window. If the opening or the co-op rules cannot take the product, we say so before anyone
        orders glass. The wind zone is still Palm Beach County wind-borne debris. An FL# is often
        accepted. Ocean exposure does not create an HVHZ label.
      </p>
      <p>
        Where a product from <L href="/brands/pgt/">PGT</L>, <L href="/brands/cgi/">CGI</L>,{" "}
        <L href="/brands/es-windows/">ES Windows</L>, or{" "}
        <L href="/brands/custom-window-systems/">CWS</L> actually fits the opening and the co-op
        approves it, we permit and install that unit. The co-op is the association. The town is the
        permit. Both can say no.
      </p>
      <p>
        My Safe Florida Home is written for site-built homes. Manufactured housing generally does
        not fit that site-built test. The grant is Florida DFS, up to $10,000, homesteaded,
        permitted before January 1, 2008, after the program inspection, with insured dwelling value
        typically at or below $700,000 except for low-income applicants. Do not start before written
        approval. Read the current rules at MySafeFLHome.com and our{" "}
        <L href="/financing/">financing</L> page. County context:{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/ocean-ridge/">Ocean Ridge</L> and{" "}
        <L href="/areas/boynton-beach/">Boynton Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Briny Breezes is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Any impact
      replacement needs a Town of Briny Breezes permit and a current product approval, and it has to
      fit manufactured-home construction rather than a CBS opening. An FL# is often accepted. We do
      not invent a town fee or a structural method the opening cannot carry.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Briny Breezes · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["ocean-ridge", "boynton-beach", "gulf-stream", "manalapan"],
  faqs: [
    {
      question: "Is Briny Breezes in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. Oceanfront location does not place it in the High-Velocity Hurricane Zone.",
    },
    {
      question: "Can you install impact windows in manufactured homes here?",
      answer:
        "Only when the opening and the co-op can take an approved product. Manufactured framing is not CBS. We measure and we decline the job if the unit is the wrong product for that opening. We do not publish a universal fastener method. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home cover manufactured homes?",
      answer:
        "The program is for qualifying site-built homes. Manufactured housing generally does not meet that test. Confirm the current cycle at MySafeFLHome.com before anyone treats it as available.",
    },
    {
      question: "Who permits the work?",
      answer:
        "The Town of Briny Breezes, plus the co-op. Florida Impact Windows & Doors pulls the town permit from 3000 Stirling Rd, Hollywood, when the product is appropriate.",
    },
  ],
};

export const southPalmBeach: CityPageOverride = {
  title: "Impact Windows & Doors in South Palm Beach, FL | Palm Beach County",
  description:
    "Impact windows and doors in South Palm Beach, FL. Oceanfront condominiums only. Wind-borne debris, not HVHZ. Town permit. FL# often accepted. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">South Palm Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      South Palm Beach is a small barrier-island town of condominium buildings, not single-family
      houses. It is Palm Beach County, not HVHZ. A building-wide replacement is an association
      project plus a Town of South Palm Beach permit.
    </>
  ),
  countyBadge: "South Palm Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Condo buildings on A1A, with Palm Beach approvals",
  uniqueBody: (
    <>
      <p>
        There is essentially no single-family inventory and little commercial space. Buildings range
        from older mid-rises to later oceanfront work. Everyone faces the Atlantic on a narrow
        island. Recertification and reserve questions belong to the association and its engineer. We
        do not quote a city fee or a deadline we do not publish. We do provide the product approval
        the town and the board ask for. An FL# is often accepted. The Town of Palm Beach to the north
        is a different municipality.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/pgt/">PGT</L> are the usual stack
        specifications. <L href="/brands/es-windows/">ES Windows</L> if the board wants that aluminum
        line. One owner generally cannot change the elevation alone.
      </p>
      <p>
        My Safe Florida Home does not fund a building-wide condo project. It is a Florida DFS grant,
        up to $10,000, for a qualifying homesteaded site-built home permitted before January 1, 2008,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/palm-beach/">Palm Beach</L> and{" "}
        <L href="/areas/lake-worth-beach/">Lake Worth Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      South Palm Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a Town of South Palm Beach permit and a current product approval. An FL# is
      often accepted. Direct ocean exposure does not move the town into Miami-Dade&apos;s zone.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of South Palm Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["palm-beach", "lake-worth-beach", "manalapan", "lantana"],
  faqs: [
    {
      question: "Is South Palm Beach in the HVHZ?",
      answer:
        "No. The town is Palm Beach County, a wind-borne debris region. An FL# is often accepted. It is not part of the Town of Palm Beach permit office.",
    },
    {
      question: "Are there single-family homes to quote?",
      answer:
        "The town is condominium buildings. We treat the work as an association specification, not a house package. Call (754) 600-4876.",
    },
    {
      question: "Can one unit choose a different window?",
      answer:
        "Only if the association allows it. Most buildings want one series on the elevation. We will not order a rejected product.",
    },
    {
      question: "Does My Safe Florida Home apply?",
      answer:
        "Not to an association-wide building replacement. The grant is for a qualifying homesteaded site-built home permitted before January 1, 2008, up to $10,000, after inspection and written approval. See MySafeFLHome.com.",
    },
  ],
};

export const atlantis: CityPageOverride = {
  title: "Impact Windows & Doors in Atlantis, FL | Palm Beach County",
  description:
    "Impact windows and doors in Atlantis, FL. Country-club villas inland of Lake Worth. Palm Beach wind-borne debris, not HVHZ. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Atlantis</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Atlantis is a small city around a country club, west of the beach cities. Golf-course villas
      and houses, Mediterranean tile roofs, and fairway trees. Not HVHZ. We pull the City of
      Atlantis permit.
    </>
  ),
  countyBadge: "Atlantis · Palm Beach · not HVHZ",
  uniqueHeading: "A golf-course city with Palm Beach paperwork, not a beach packet",
  uniqueBody: (
    <>
      <p>
        The Atlantis Country Club, the estates, and the JFK Drive area are the city. Debris in a
        storm is trees and whatever the course and the neighbors leave loose — not ocean spray.
        Lost Tree is a border name on our list, not this city&apos;s permit office. People mix
        Atlantis up with the much larger communities around it. Lake Worth Beach, Lantana, and
        Greenacres are the neighbors. An FL# is often accepted. A quote that demands a Miami-Dade
        NOA on every villa because &quot;South Florida is HVHZ&quot; is using Broward&apos;s rule.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> is the usual whole-house line when the club accepts the color.{" "}
        <L href="/brands/es-windows/">ES Windows</L> for a simpler villa opening.{" "}
        <L href="/brands/cgi/">CGI</L> for a wide slider.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd unit. The club review is color
        and profile. The city permit is separate.
      </p>
      <p>
        Some villas meet the My Safe Florida Home date and some do not. The grant is Florida DFS, up
        to $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Do not start before written approval. See <L href="/financing/">financing</L>{" "}
        and <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Atlantis is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. Impact
      replacements need a City of Atlantis permit and a current product approval. An FL# is often
      accepted. The country club&apos;s design review does not replace the permit.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Atlantis · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["lake-worth-beach", "lantana", "greenacres", "palm-springs"],
  faqs: [
    {
      question: "Is Atlantis in the HVHZ?",
      answer:
        "No. The city is Palm Beach County, a wind-borne debris region. An FL# is often accepted on a City of Atlantis permit.",
    },
    {
      question: "Does the country club replace the building permit?",
      answer:
        "No. The club can require a color or profile. The City of Atlantis still permits the opening. Call (754) 600-4876.",
    },
    {
      question: "Is Atlantis part of Lake Worth Beach?",
      answer:
        "No. It is its own city inland of Lake Worth Beach. We do not file those permits interchangeably.",
    },
    {
      question: "Does My Safe Florida Home apply?",
      answer:
        "When the house is a qualifying homesteaded site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const loxahatchee: CityPageOverride = {
  title: "Impact Windows & Doors in Loxahatchee, FL | Palm Beach County",
  description:
    "Impact windows and doors in Loxahatchee, FL. Acreage and Loxahatchee Groves. Palm Beach wind-borne debris, not HVHZ. County or town permit by address. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Loxahatchee</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Loxahatchee is rural Palm Beach County: equestrian acreage, The Acreage communities, and the
      Town of Loxahatchee Groves. It is not HVHZ. The permit is whichever jurisdiction the address
      is actually in. We do not invent a City of Loxahatchee hall.
    </>
  ),
  countyBadge: "Loxahatchee · Palm Beach · not HVHZ",
  uniqueHeading: "Open fetch, custom houses, and two possible permit counters",
  uniqueBody: (
    <>
      <p>
        Fox Trail, Deer Run, Palm Beach Country Estates, and the roads out toward the Everglades are
        large lots. Loxahatchee Groves is an incorporated town inside that rural map. A lot of 33470
        is unincorporated Palm Beach County. We look at the address before we name the building
        department: Town of Loxahatchee Groves, or Palm Beach County. Guessing from the word
        Loxahatchee is how permits get filed in the wrong place. Nothing west of these lots slows
        the wind. That fetch is real. It still does not make this Broward, and it does not make it
        HVHZ.
      </p>
      <p>
        Houses are individual. <L href="/brands/pgt/">PGT</L> and{" "}
        <L href="/brands/cgi/">CGI</L> cover many whole-house and wide-opening lists.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a non-catalog unit.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when the openings are simpler. Barns and guest
        houses are separate openings. We do not price them as extra bedroom windows.
      </p>
      <p>
        Permit dates vary, so My Safe Florida Home is a file-by-file question: Florida DFS, up to
        $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Do not start before written approval. Outbuildings are not the homestead
        grant. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        Neighbors: <L href="/areas/wellington/">Wellington</L> and{" "}
        <L href="/areas/royal-palm-beach/">Royal Palm Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Loxahatchee is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ. If the
      address is inside the Town of Loxahatchee Groves, that town permits the work. If it is
      unincorporated, Palm Beach County does. Either way an FL# is often accepted. We confirm the
      jurisdiction from the address. We do not publish a fee for either counter.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "Town of Loxahatchee Groves or Palm Beach County · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["wellington", "royal-palm-beach", "west-palm-beach"],
  faqs: [
    {
      question: "Is Loxahatchee in the HVHZ?",
      answer:
        "No. It is Palm Beach County, a wind-borne debris region. Open Everglades fetch does not place it in the High-Velocity Hurricane Zone used in Broward and Miami-Dade.",
    },
    {
      question: "Town of Loxahatchee Groves or Palm Beach County?",
      answer:
        "Whichever the address is in. Groves is an incorporated town. Much of the surrounding acreage is unincorporated county. We do not guess from ZIP 33470. Call (754) 600-4876.",
    },
    {
      question: "Do barns get the same windows as the house?",
      answer:
        "No. A barn or guest house is its own opening list and may be a different use. We measure it separately.",
    },
    {
      question: "Does My Safe Florida Home cover acreage property?",
      answer:
        "Only the qualifying homesteaded site-built home, permitted before January 1, 2008, after the program inspection and written approval, up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Outbuildings are not the grant. See MySafeFLHome.com.",
    },
  ],
};

export const portStLucie: CityPageOverride = {
  title: "Impact Windows & Doors in Port St. Lucie, FL | St. Lucie County",
  description:
    "Impact windows and doors in Port St. Lucie, FL. St. Lucie County, wind-borne debris, not HVHZ and not a Palm Beach city hall. City of Port St. Lucie permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Port St. Lucie</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Port St. Lucie is in St. Lucie County, north of Palm Beach County. Our city directory has
      grouped it with Palm Beach hubs. The wind zone and the permit office do not follow that
      grouping. It is a wind-borne debris region, not the HVHZ, and the permit is the City of Port
      St. Lucie.
    </>
  ),
  countyBadge: "Port St. Lucie · St. Lucie · not HVHZ",
  uniqueHeading: "St. Lucie County rules, even though this page sits near the Palm Beach list",
  uniqueBody: (
    <>
      <p>
        Tradition, St. Lucie West, Torino, PGA Village, Tesoro, Magnolia Lakes, River Park, and
        Sandpiper Bay are different generations of houses inside one large city. The older Port St.
        Lucie Boulevard corridor is not a 2000s planned section. Frances and Jeanne in 2004 are the
        local storm pair. That history does not make the city Miami-Dade or Broward, and it does not
        make it Palm Beach. An FL# is often accepted. We do not copy a Broward NOA packet or a City
        of West Palm Beach permit onto a 34952 address.
      </p>
      <p>
        Newer planned sections are often shutter houses ready for a permanent opening:{" "}
        <L href="/brands/pgt/">PGT WinGuard</L> or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/cgi/">CGI</L> when a wide slider needs it.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd opening. The{" "}
        <L href="/services/door-types/garage/">garage door</L> is still an opening on the
        wind-mitigation form. HOAs in Tradition and the golf sections review color. They do not
        issue the city permit.
      </p>
      <p>
        My Safe Florida Home follows the house, not the county label: Florida DFS, up to $10,000,
        qualifying homesteaded site-built home permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Many Tradition-era permits are too new. Do not start before written
        approval. See <L href="/financing/">financing</L>. The Palm Beach cost article mentions this
        city only to keep it out of the Palm Beach HVHZ myth:{" "}
        <L href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</L>.
        The nearest Palm Beach hubs are <L href="/areas/jupiter/">Jupiter</L> and{" "}
        <L href="/areas/tequesta/">Tequesta</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Port St. Lucie is in St. Lucie County&apos;s wind-borne debris region. It is not in the
      High-Velocity Hurricane Zone, and it is not permitted by Palm Beach County or by any Palm
      Beach city. Impact replacements need a City of Port St. Lucie permit and a current product
      approval. An FL# is often accepted. We do not publish the city&apos;s fee.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Port St. Lucie · St. Lucie County · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  countyLabel: "St. Lucie",
  nearbySlugs: ["jupiter", "tequesta", "palm-beach-gardens"],
  faqs: [
    {
      question: "Is Port St. Lucie in Palm Beach County or the HVHZ?",
      answer:
        "Neither. Port St. Lucie is in St. Lucie County. It is a wind-borne debris region under the Florida Building Code, not the High-Velocity Hurricane Zone that covers Miami-Dade and Broward. This site lists the hub beside Palm Beach cities. The permit is still the City of Port St. Lucie.",
    },
    {
      question: "Do you use a Palm Beach FL# packet or a Broward NOA packet?",
      answer:
        "We submit what the City of Port St. Lucie accepts for the product. An FL# is often enough outside the HVHZ. We do not default to a Miami-Dade NOA packet the way we do in Hollywood or Deerfield Beach.",
    },
    {
      question: "Does My Safe Florida Home apply in Tradition?",
      answer:
        "Only if that house was permitted before January 1, 2008 and is a qualifying homesteaded site-built home. Many newer sections were not. The grant is up to $10,000 after the program inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Who installs in Port St. Lucie?",
      answer:
        "Florida Impact Windows & Doors, from 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876. There is no separate Port St. Lucie showroom.",
    },
  ],
};

