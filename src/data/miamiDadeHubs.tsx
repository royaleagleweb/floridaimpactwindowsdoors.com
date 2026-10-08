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

export const miamiBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Miami Beach, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Miami Beach, FL. Barrier-island Art Deco, Mid-Beach condos, and North Beach houses — all Miami-Dade HVHZ. City of Miami Beach permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miami Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miami Beach is a barrier island inside Miami-Dade&apos;s High-Velocity Hurricane Zone. South Beach
      Art Deco, Mid-Beach towers, and North Beach houses do not share one glass spec, and none of them
      can use a Palm Beach FL#-only packet. We measure from Hollywood and pull the City of Miami Beach permit.
    </>
  ),
  countyBadge: "Miami Beach · Miami-Dade HVHZ",
  uniqueHeading: "The island is one wind zone and three different opening lists",
  uniqueBody: (
    <>
      <p>
        South Beach still has the historic Art Deco district, where a replacement has to keep the
        opening&apos;s proportion. Flamingo Park and the low streets behind the beach are older houses
        and small buildings, not Collins Avenue towers. Mid-Beach is the mid-century condo belt.
        North Beach, La Gorce, Nautilus, and Allison Island are a mix of houses and lower buildings
        with real Intracoastal or ocean exposure. The 1926 storm and Irma both put water on this
        island; the code answer now is a current Miami-Dade Notice of Acceptance, not shutters left
        in a closet.
      </p>
      <p>
        Salt is on every elevation that faces the Atlantic or the bay. Upper floors of oceanfront
        buildings see higher design pressure than a ground-floor courtyard unit in the same stack.
        We do not paste a suburban single-hung package onto a Collins Avenue slider.{" "}
        <L href="/brands/cgi/">CGI</L> is the usual conversation for tall coastal glass.{" "}
        <L href="/brands/pgt/">PGT</L> covers many whole-building and house lists.{" "}
        <L href="/brands/es-windows/">ES Windows</L> is the value aluminum line when the board will
        accept it and every opening, including leftover jalousie, has to be done.{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> is for an odd historic opening.
      </p>
      <p>
        Condo and co-op work is an association packet on top of the NOA. My Safe Florida Home is a
        Florida Department of Financial Services grant, up to $10,000, for a qualifying homesteaded
        site-built home permitted before January 1, 2008, only after the program inspection. Except
        for low-income applicants, insured dwelling value is typically at or below $700,000, and
        starting work before written approval can disqualify the project. A Collins Avenue association
        is usually not that grant. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors on our map are <L href="/areas/surfside/">Surfside</L>,{" "}
        <L href="/areas/bal-harbour/">Bal Harbour</L>, and <L href="/areas/miami/">Miami</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miami Beach is entirely inside Miami-Dade&apos;s High-Velocity Hurricane Zone. Replacement impact
      windows and doors generally need a current Miami-Dade NOA and a permit from the City of Miami
      Beach Building Department. An FL# that is enough in Boca Raton is not a substitute here. We do
      not publish the city&apos;s fee schedule.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Miami Beach + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["surfside", "bal-harbour", "bay-harbor-islands", "miami", "north-miami-beach"],
  faqs: [
    {
      question: "Are impact windows in Miami Beach held to Miami-Dade or Palm Beach rules?",
      answer:
        "Miami-Dade. Miami Beach is in the High-Velocity Hurricane Zone, so replacement impact windows and doors generally need a current Miami-Dade NOA and a City of Miami Beach permit. Palm Beach cities often accept an FL#. This island does not.",
    },
    {
      question: "Do Art Deco buildings in South Beach allow impact glass?",
      answer:
        "Historic openings still need a product that fits the existing proportion. The wind rule does not go away because the building is old. We measure the opening and submit the NOA with the City of Miami Beach permit. The preservation review, where it applies, is about look, not about skipping laminated glass.",
    },
    {
      question: "Can a Miami Beach condo use the My Safe Florida Home grant?",
      answer:
        "Usually no. That grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after a program inspection, and only if work has not started before written approval. Typical rules also cap insured dwelling value at $700,000 except for low-income applicants. A tower association project is a different path. Check MySafeFLHome.com.",
    },
    {
      question: "Who installs impact windows on Miami Beach from Hollywood?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. We pull the City of Miami Beach permit and meet the inspector. Call (754) 600-4876.",
    },
  ],
};

export const coralGables: CityPageOverride = {
  title: "Impact Windows & Doors in Coral Gables, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Coral Gables, FL. Mediterranean openings, Board of Architects review, and Miami-Dade HVHZ / NOA. City of Coral Gables permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Coral Gables</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Coral Gables is Miami-Dade HVHZ with a second review most cities do not have: the Board of
      Architects. Barrel-tile Mediterranean houses in the Crafts Section and waterfront glass in
      Cocoplum and Gables Estates are not the same order, and both still need a current NOA.
    </>
  ),
  countyBadge: "Coral Gables · Miami-Dade HVHZ",
  uniqueHeading: "The wind stamp is Miami-Dade. The look review is the Gables board.",
  uniqueBody: (
    <>
      <p>
        George Merrick&apos;s Mediterranean streets — Riviera, the Biltmore section, Old Spanish
        Village, the Crafts Section — have arched and odd openings that a stock colonial grid will
        not fake. Andrew&apos;s northern eyewall put the banyan canopy through glass in the southern
        sections. That debris problem is still the reason Pinecrest-adjacent streets and Hammock Oaks
        cannot treat trees as decoration. Cocoplum and Gables Estates add wide water-facing sliders.
      </p>
      <p>
        We pull the City of Coral Gables permit and bring the cut sheets the Board of Architects
        asks for. The NOA does not replace that review, and the review does not replace the NOA.
        <L href="/brands/custom-window-systems/"> Custom Window Systems</L> and{" "}
        <L href="/brands/pgt/">PGT</L> are the usual whole-house conversation when the profile has to
        sit in an older opening. <L href="/brands/cgi/">CGI</L> is the conversation for a large
        waterfront slider. <L href="/brands/es-windows/">ES Windows</L> when the openings are
        repetitive and the board will accept a clean aluminum line.
      </p>
      <p>
        A homesteaded, site-built Gables house permitted before January 1, 2008 sometimes fits My
        Safe Florida Home: a Florida DFS grant, up to $10,000, only after the program inspection.
        Except for low-income applicants, insured dwelling value is typically at or below $700,000.
        Starting work before written approval can disqualify the project. Many estate addresses sit
        above that value test, so the grant is a question, not a promise. Details are on{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Next hubs: <L href="/areas/south-miami/">South Miami</L>,{" "}
        <L href="/areas/pinecrest/">Pinecrest</L>, and <L href="/areas/miami/">Miami</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Coral Gables is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of Coral Gables Building Department permit. Exterior
      changes also go through the Board of Architects. We do not publish either fee.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Coral Gables + NOA + Board of Architects",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["miami", "south-miami", "pinecrest", "westchester", "palmetto-bay"],
  faqs: [
    {
      question: "Does the Coral Gables Board of Architects replace the Miami-Dade NOA?",
      answer:
        "No. The board reviews appearance. The High-Velocity Hurricane Zone still expects a current Miami-Dade NOA on the product, plus a City of Coral Gables permit. Both packets have to match the same opening.",
    },
    {
      question: "Can arched Mediterranean windows in Coral Gables be impact-rated?",
      answer:
        "They have to be measured. Many 1920s openings are not a catalog rectangle. We specify a product that fits the opening and still carries an NOA, then submit what the Board of Architects asks to see.",
    },
    {
      question: "Is My Safe Florida Home available for a Coral Gables estate?",
      answer:
        "Only if the house is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Many Gables estates do not fit that value test. Check MySafeFLHome.com.",
    },
    {
      question: "Which Coral Gables neighborhoods do you measure?",
      answer:
        "Riviera, the Crafts Section, Golden Triangle, Hammock Oaks, Cocoplum, Gables Estates, Old Spanish Village, and the Biltmore section. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood, FL 33021.",
    },
  ],
};

export const hialeah: CityPageOverride = {
  title: "Impact Windows & Doors in Hialeah, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Hialeah, FL. 1950s–70s CBS and jalousie, plus newer west Hialeah two-stories. Miami-Dade HVHZ / NOA. City of Hialeah permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hialeah</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hialeah is inland Miami-Dade and still HVHZ. The glass fails here from neighbor debris and
      original jalousie, not from ocean spray. Palm Springs North and the west two-stories are a
      different list from a 1950s house off Palm Avenue. City of Hialeah permit, current NOA.
    </>
  ),
  countyBadge: "Hialeah · Miami-Dade HVHZ",
  uniqueHeading: "Hialeah's problem is original aluminum, not a beach hardware package",
  uniqueBody: (
    <>
      <p>
        Most of the city is CBS from the 1950s through the 1970s: Hialeah Heights, Stadler, the
        streets around Hialeah Park, and the older grid where Irma and Wilma put debris through
        single-pane awning and jalousie. Country Club and Palm Springs North are later houses.
        Western sections add two-stories that were often closed in with shutters instead of impact
        glass. None of that is a Collins Avenue spec, and all of it is still Miami-Dade HVHZ.
      </p>
      <p>
        A marine-grade upcharge on every bedroom window is how an inland Hialeah quote gets padded.
        <L href="/brands/es-windows/"> ES Windows</L> is the usual value line when the goal is every
        opening, including leftover jalousie. <L href="/brands/pgt/">PGT WinGuard</L> is the usual
        whole-house catalog when you want vinyl or aluminum from one factory.{" "}
        <L href="/brands/cgi/">CGI</L> shows up on a wide slider, not as a logo for a ranch. The{" "}
        <L href="/services/door-types/garage/">garage door</L> is the opening that still fails a
        wind-mitigation form after the windows are in.
      </p>
      <p>
        Some homesteaded Hialeah houses permitted before January 1, 2008 can use My Safe Florida
        Home — Florida DFS, up to $10,000, after the program inspection, not before written
        approval. Except for low-income applicants, insured dwelling value is typically at or below
        $700,000. It is not a loan. Read <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">what changes Miami-Dade prices</L>.
        Adjacent hubs: <L href="/areas/hialeah-gardens/">Hialeah Gardens</L>,{" "}
        <L href="/areas/miami-lakes/">Miami Lakes</L>, and <L href="/areas/miami-springs/">Miami Springs</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hialeah is in Miami-Dade&apos;s High-Velocity Hurricane Zone even though it does not touch the
      Atlantic. Replacement impact windows and doors generally need a current Miami-Dade NOA and a
      City of Hialeah Building Department permit. We do not publish the city&apos;s fee.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Hialeah + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hialeah-gardens", "miami-lakes", "miami-springs", "doral", "medley"],
  faqs: [
    {
      question: "Does inland Hialeah still require a Miami-Dade NOA?",
      answer:
        "Yes. The High-Velocity Hurricane Zone covers the city, not only the beaches. A Florida Product Approval that is often enough in Palm Beach is not the usual Hialeah packet. We submit a current NOA with the City of Hialeah permit.",
    },
    {
      question: "Can you replace jalousie windows in older Hialeah houses?",
      answer:
        "Yes. Those openings are measured, not assumed to be a modern single-hung size. ES Windows is often the value aluminum path when every leftover jalousie has to be protected. PGT is the other whole-house option. Call (754) 600-4876.",
    },
    {
      question: "Do Hialeah homeowners qualify for My Safe Florida Home?",
      answer:
        "Some do. The grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after a program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Starting work before written approval can disqualify the project. Check MySafeFLHome.com.",
    },
    {
      question: "Is a beach hardware package required in Hialeah?",
      answer:
        "Not as a default. Hialeah's missile is neighbor debris and original weak glass, not ocean salt. We specify corrosion-resistant hardware where the opening actually faces harsh exposure, not on every bedroom because the county is Miami-Dade.",
    },
  ],
};

export const doral: CityPageOverride = {
  title: "Impact Windows & Doors in Doral, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Doral, FL. Gated two-stories and Downtown Doral townhomes in Miami-Dade HVHZ. City of Doral permit and a current NOA. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Doral</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Doral incorporated in 2003, but the wind zone is still Miami-Dade HVHZ. Western streets face
      open fetch. Many houses were built with shutters as the code path. Replacing those with impact
      glass is a City of Doral permit and a current NOA, not a Palm Beach FL# shortcut.
    </>
  ),
  countyBadge: "Doral · Miami-Dade HVHZ",
  uniqueHeading: "Newer Doral houses are often shutter houses, not impact-glass houses",
  uniqueBody: (
    <>
      <p>
        Doral Isles, Doral Estates, Doral Landings, Doral Cay, and Costa Del Sol are gated
        single-family lists: tile roofs, lanai sliders, HOA color sheets. Downtown Doral, Midtown
        Doral, and CityPlace Doral add townhomes and mixed-use openings. The area took Andrew when
        it was still farmland turning into subdivisions, and Irma showed what minimum non-impact
        glass does on the newer streets. West of the city there is less building friction, so the
        quote is about wind and neighbor tile, not salt spray.
      </p>
      <p>
        If the house already has approved shutters, code does not force you to add impact windows.
        Most owners calling us are done deploying panels. Once every opening is impact-rated, those
        openings do not also need shutters. <L href="/brands/pgt/">PGT WinGuard</L> is the usual
        whole-house line. <L href="/brands/es-windows/">ES Windows</L> when covering every opening
        on a budget matters more. <L href="/brands/cgi/">CGI</L> for a wide lanai. The{" "}
        <L href="/services/door-types/garage/">garage</L> is its own product on the wind-mit form.
      </p>
      <p>
        My Safe Florida Home can apply to a homesteaded, site-built Doral house permitted before
        January 1, 2008 — many of the newest gated sections are newer than that date, so the grant
        is often a no. Where it fits: Florida DFS, up to $10,000, after the program inspection,
        and not if work starts before written approval. Except for low-income applicants, insured
        dwelling value is typically at or below $700,000. See{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade cost notes</L> and{" "}
        <L href="/areas/miami-springs/">Miami Springs</L>, <L href="/areas/medley/">Medley</L>, and{" "}
        <L href="/areas/sweetwater/">Sweetwater</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Doral is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact window and door replacement
      generally needs a current Miami-Dade NOA and a City of Doral Building Department permit. Being
      west of the beaches does not move the city into the Palm Beach FL# path.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Doral + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["miami-springs", "medley", "sweetwater", "hialeah", "westchester"],
  faqs: [
    {
      question: "Are Doral homes outside the HVHZ because they are inland?",
      answer:
        "No. Doral is Miami-Dade HVHZ. Replacement impact products generally need a current Miami-Dade NOA and a City of Doral permit. Open western fetch changes the debris story. It does not change the approval family.",
    },
    {
      question: "If my Doral house has shutters, do I still need impact windows?",
      answer:
        "Not for code, if the shutters are approved and you close them. Impact windows are the permanent method. After the openings are impact-rated, you do not stack shutters on those same openings for Miami-Dade code.",
    },
    {
      question: "Does a 2015 Doral house qualify for My Safe Florida Home?",
      answer:
        "The grant is aimed at qualifying homesteaded, site-built homes permitted before January 1, 2008, after a program inspection. A house permitted after that date does not fit that rule. Insured dwelling value is typically at or below $700,000 except for low-income applicants. Confirm the current cycle at MySafeFLHome.com.",
    },
    {
      question: "Who pulls the Doral window permit?",
      answer:
        "Florida Impact Windows & Doors pulls the City of Doral permit from our Hollywood shop at 3000 Stirling Rd. Call (754) 600-4876.",
    },
  ],
};

export const homestead: CityPageOverride = {
  title: "Impact Windows & Doors in Homestead, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Homestead, FL, after Andrew. Post-storm CBS, Redland houses, and Keys Gate. Miami-Dade HVHZ / NOA. City of Homestead permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Homestead</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Homestead is the city Andrew made the case for impact glass. Rebuilt CBS, leftover pre-storm
      houses, and Redland acreage are all Miami-Dade HVHZ. We pull the City of Homestead permit and
      do not treat this like a Palm Beach FL# city.
    </>
  ),
  countyBadge: "Homestead · Miami-Dade HVHZ",
  uniqueHeading: "Andrew rebuilt the walls. A lot of the glass is still a shutter plan.",
  uniqueBody: (
    <>
      <p>
        The site history is plain: Andrew&apos;s landfall was over Homestead, and the code that
        followed is why South Florida talks about impact products at all. Much of the housing is
        post-storm CBS in Keys Gate, Waterstone, Naranja, and South Dade. A lot of those houses
        were closed in with shutters rather than laminated glass. Leisure City, Princeton, and the
        Redland are a different map — older or rural openings, outbuildings, and less of a suburban
        grid. Florida City is the next city south, not a Homestead neighborhood with a different code.
      </p>
      <p>
        Southern exposure is the wind story: storms that come up the Straits meet this city first.
        That is still an NOA conversation, not a reason to invent a higher local fee.{" "}
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> cover most
        single-family lists. <L href="/brands/cgi/">CGI</L> when a wide slider or tall unit needs a
        heavier assembly. <L href="/brands/custom-window-systems/">CWS</L> for a non-catalog opening
        on an older Redland house. Garage and other large doors stay on the list.
      </p>
      <p>
        Homestead has more pre-2008 site-built homesteads than Doral does, so My Safe Florida Home
        comes up often: Florida DFS grant, up to $10,000, homesteaded site-built home permitted
        before January 1, 2008, only after the program inspection. Except for low-income applicants,
        insured dwelling value is typically at or below $700,000. Do not start work before written
        approval. It is not financing. Read <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Next hubs: <L href="/areas/florida-city/">Florida City</L> and{" "}
        <L href="/areas/cutler-bay/">Cutler Bay</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Homestead is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of Homestead Building Department permit. Shutters that
      were legal at construction do not have to be ripped out, but new impact glass still follows
      the HVHZ approval path.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Homestead + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["florida-city", "cutler-bay", "palmetto-bay", "pinecrest"],
  faqs: [
    {
      question: "Are Homestead impact windows under Miami-Dade HVHZ rules?",
      answer:
        "Yes. Homestead is in the High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current Miami-Dade NOA and a City of Homestead permit. An FL#-only Palm Beach packet is the wrong paperwork.",
    },
    {
      question: "Were Homestead houses rebuilt with impact windows after Andrew?",
      answer:
        "Many were rebuilt to the code that followed Andrew, often with shutters as the protection method rather than impact glass in every opening. If you want to stop deploying panels, that is a new permit and a current NOA, not a leftover shutter credit.",
    },
    {
      question: "Does My Safe Florida Home apply in Homestead?",
      answer:
        "It can, for a qualifying homesteaded site-built home permitted before January 1, 2008, after the program inspection, and only if work has not started before written approval. The grant is up to $10,000 from the Florida Department of Financial Services. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Do you install in the Redland and Keys Gate?",
      answer:
        "Yes. Keys Gate and Waterstone are subdivision lists. Redland and Princeton openings are often less standard. Both are City of Homestead or the jurisdiction the address actually sits in — we name that on the permit after we see the address. Call (754) 600-4876.",
    },
  ],
};

export const cutlerBay: CityPageOverride = {
  title: "Impact Windows & Doors in Cutler Bay, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Cutler Bay, FL. Cutler Ridge ranches and Lakes by the Bay waterfront. Miami-Dade HVHZ / NOA. Town of Cutler Bay permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Cutler Bay</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Cutler Bay is the old Cutler Ridge footprint plus newer bay communities. Andrew&apos;s northern
      eyewall went through here. The town is Miami-Dade HVHZ. We pull the Town of Cutler Bay permit
      and specify NOA products, with a different opening list on the bay than on an inland ranch.
    </>
  ),
  countyBadge: "Cutler Bay · Miami-Dade HVHZ",
  uniqueHeading: "Cutler Ridge ranches and Lakes by the Bay are not one slider",
  uniqueBody: (
    <>
      <p>
        Cutler Ridge still reads as 1970s CBS ranches. Lakes by the Bay, Saga Bay, Whispering Pines,
        Bel Aire, and Cutler Cay add later houses and wide glass toward the water. The bay side is
        surge and wind-driven rain on the east elevation. The inland ranch is neighbor debris and
        original aluminum. Both sit in the same HVHZ. The old Cutler Ridge name is history, not a
        separate building department.
      </p>
      <p>
        Oversized sliders on the water are a <L href="/brands/cgi/">CGI</L> or{" "}
        <L href="/brands/pgt/">PGT</L> conversation. A ranch full of single-hung and a leftover
        Florida room is often <L href="/brands/es-windows/">ES Windows</L> or PGT.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when the Florida-room opening was never a
        standard size. We do not quote a salt package onto every inland bedroom.
      </p>
      <p>
        Pre-2008 homesteaded houses in the older sections sometimes fit My Safe Florida Home. The
        grant is Florida DFS, up to $10,000, site-built homestead permitted before January 1, 2008,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Starting before written approval can disqualify you. Newer
        bay sections often miss the date test. County pricing context is{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/palmetto-bay/">Palmetto Bay</L> and{" "}
        <L href="/areas/homestead/">Homestead</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Cutler Bay is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Town of Cutler Bay permit. Bay exposure changes hardware
      and design pressure on that elevation. It does not create a second wind zone inside the town.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Cutler Bay + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["palmetto-bay", "homestead", "pinecrest", "florida-city"],
  faqs: [
    {
      question: "Is Cutler Bay the same permit office as Miami-Dade County?",
      answer:
        "Cutler Bay is an incorporated town. We pull the Town of Cutler Bay permit. The product approval is still a Miami-Dade HVHZ path, typically a current NOA. Unincorporated neighbors such as Kendall use the county counter instead.",
    },
    {
      question: "Do Lakes by the Bay sliders need a different product than a Cutler Ridge ranch?",
      answer:
        "Often yes. Water-facing sliders are a higher design-pressure and corrosion conversation. A 1970s ranch is usually a whole-house single-hung list. Both still need an NOA and a Town of Cutler Bay permit.",
    },
    {
      question: "Can older Cutler Ridge houses use My Safe Florida Home?",
      answer:
        "If the house is a qualifying homesteaded, site-built home permitted before January 1, 2008, and you wait for the program inspection and written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
    {
      question: "Who installs impact windows in Cutler Bay?",
      answer:
        "Florida Impact Windows & Doors, from 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876 for a measured estimate.",
    },
  ],
};

export const miamiGardens: CityPageOverride = {
  title: "Impact Windows & Doors in Miami Gardens, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Miami Gardens, FL. Carol City ranches and later west sections. Miami-Dade HVHZ / NOA. City of Miami Gardens permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miami Gardens</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miami Gardens is one of the largest cities in Miami-Dade and it is HVHZ. Carol City still has
      1960s aluminum. Andover, Norland, and Lake Lucerne are not the same age of house. We pull the
      City of Miami Gardens permit and submit a current NOA.
    </>
  ),
  countyBadge: "Miami Gardens · Miami-Dade HVHZ",
  uniqueHeading: "Carol City's original glass is the job, not a coastal upsell",
  uniqueBody: (
    <>
      <p>
        The housing is mostly single-family CBS from the 1950s through the 1980s: Carol City ranches,
        Bunche Park, Scott Lake, Rolling Oaks, Norland, Andover, and Lake Lucerne. Wilma tracked over
        northern Miami-Dade and Irma worked on roofs and original single-pane. The missile is fence,
        tile, and the house next door. Specifying ocean hardware on a Carol City bedroom is the wrong
        quote.
      </p>
      <p>
        Whole-house lists land on <L href="/brands/es-windows/">ES Windows</L> or{" "}
        <L href="/brands/pgt/">PGT WinGuard</L>. Jalousie and awning openings get measured, not
        forced into a new-construction size. <L href="/brands/cgi/">CGI</L> is for the occasional
        wide unit. The <L href="/services/door-types/garage/">garage door</L> belongs on the same
        permit conversation if it is still an unprotected opening.
      </p>
      <p>
        This is one of the Miami-Dade cities where the grant date actually matches the housing. My
        Safe Florida Home is a Florida DFS grant, up to $10,000, for a qualifying homesteaded
        site-built home permitted before January 1, 2008, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Starting
        work before written approval can disqualify the project. It is not a loan — see{" "}
        <L href="/financing/">financing</L>. Price context, without a fake city rate, is{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Nearby: <L href="/areas/north-miami/">North Miami</L> and{" "}
        <L href="/areas/miami-lakes/">Miami Lakes</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miami Gardens is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Replacement impact windows
      and doors generally need a current Miami-Dade NOA and a City of Miami Gardens Building
      Department permit. Inland location does not switch the city to an FL#-only rule.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Miami Gardens + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["north-miami", "miami-lakes", "north-miami-beach", "aventura"],
  faqs: [
    {
      question: "Is Miami Gardens in the HVHZ?",
      answer:
        "Yes. Miami Gardens is Miami-Dade High-Velocity Hurricane Zone. Impact replacements generally need a current Miami-Dade NOA and a City of Miami Gardens permit.",
    },
    {
      question: "Do you replace 1960s windows in Carol City?",
      answer:
        "Yes. Carol City, Bunche Park, Norland, Andover, Lake Lucerne, Scott Lake, and Rolling Oaks are on the same permit path with different opening sizes. We measure jalousie and aluminum single-hung instead of assuming a stock size. Call (754) 600-4876.",
    },
    {
      question: "Is My Safe Florida Home a loan for Miami Gardens?",
      answer:
        "No. It is a Florida Department of Financial Services grant, up to $10,000, for a qualifying homesteaded site-built home permitted before January 1, 2008, after a program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Work started before written approval can disqualify the project.",
    },
    {
      question: "Why not quote beach hardware in Miami Gardens?",
      answer:
        "The exposure is neighbor debris and old glass, not Atlantic salt. A coastal hardware package on every opening changes the price without matching the street. We specify it only where the elevation needs it.",
    },
  ],
};

export const northMiami: CityPageOverride = {
  title: "Impact Windows & Doors in North Miami, FL | Miami-Dade County",
  description:
    "Impact windows and doors in North Miami, FL. Keystone Point glass, Eastern Shores, and inland cottages. Miami-Dade HVHZ / NOA. City of North Miami permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">North Miami</span>, FL
    </>
  ),
  heroIntro: (
    <>
      North Miami splits at the water. Keystone Point, Sans Souci, and Eastern Shores are bay glass.
      Griffing Park and Arch Creek are older inland houses. All of it is Miami-Dade HVHZ. The City
      of North Miami permit does not become a Palm Beach FL# because the house is west of Biscayne.
    </>
  ),
  countyBadge: "North Miami · Miami-Dade HVHZ",
  uniqueHeading: "Bay glass in Keystone Point is not a Griffing Park ranch",
  uniqueBody: (
    <>
      <p>
        Keystone Point and Sans Souci are mid-century waterfront houses with a lot of glass aimed at
        the bay. Eastern Shores and Enchanted Lake keep that water exposure. Griffing Park is closer
        to 1940s cottages. Irma put tree debris through older inland glass and surge against the
        point. Katrina&apos;s early Florida landfall is part of the same local memory. The product
        still needs a current NOA either way.
      </p>
      <p>
        Water elevations are where <L href="/brands/cgi/">CGI</L> or a heavier{" "}
        <L href="/brands/pgt/">PGT</L> slider belongs. Inland whole-house lists are PGT or{" "}
        <L href="/brands/es-windows/">ES Windows</L>. <L href="/brands/custom-window-systems/">CWS</L>{" "}
        when a mid-century opening is not square. We will not sell a tower package to a cottage or a
        cottage package to a bay wall of glass.
      </p>
      <p>
        Site-built homesteads permitted before January 1, 2008 sometimes qualify for My Safe Florida
        Home: up to $10,000 from Florida DFS, after the program inspection, homestead required.
        Except for low-income applicants, insured dwelling value is typically at or below $700,000.
        Written approval comes before demolition. Condo buildings on the east side are an association
        project, not that grant. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade cost</L>. Next cities:{" "}
        <L href="/areas/miami-shores/">Miami Shores</L> and{" "}
        <L href="/areas/north-miami-beach/">North Miami Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      North Miami is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact windows and doors
      generally need a current Miami-Dade NOA and a City of North Miami Building Department permit.
      Bay design pressure is an elevation issue inside that same zone.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of North Miami + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["miami-shores", "north-miami-beach", "miami-gardens", "miami", "aventura"],
  faqs: [
    {
      question: "Is North Miami in the High-Velocity Hurricane Zone?",
      answer:
        "Yes. The whole city is Miami-Dade HVHZ. Replacement impact products generally need a current NOA and a City of North Miami permit, whether the house is on Keystone Point or in Griffing Park.",
    },
    {
      question: "Do Keystone Point houses need different glass than inland North Miami?",
      answer:
        "The approval family is the same NOA path. The opening list is not. Bay walls of glass and sliders are a higher design-pressure and corrosion conversation than a cottage single-hung. We measure both.",
    },
    {
      question: "Does My Safe Florida Home cover a North Miami condo?",
      answer:
        "Usually the grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after inspection and written approval. A condominium association project is a different path. Insured dwelling value is typically at or below $700,000 except for low-income applicants. Check MySafeFLHome.com.",
    },
    {
      question: "Where is the shop that serves North Miami?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
  ],
};

export const northMiamiBeach: CityPageOverride = {
  title: "Impact Windows & Doors in North Miami Beach, FL | Miami-Dade County",
  description:
    "Impact windows and doors in North Miami Beach, FL. Fulford ranches, Skylake, and eastern Intracoastal buildings. Miami-Dade HVHZ / NOA. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">North Miami Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      North Miami Beach is not Miami Beach and it is not Aventura. Fulford and Skylake are older
      houses and garden buildings. The east side meets the Intracoastal. All of it is Miami-Dade
      HVHZ. We pull the City of North Miami Beach permit.
    </>
  ),
  countyBadge: "North Miami Beach · Miami-Dade HVHZ",
  uniqueHeading: "Garden buildings and Skylake houses, then a water edge",
  uniqueBody: (
    <>
      <p>
        Fulford, Highland Village, and Windmill Gate are mid-century houses and low buildings. Skylake
        is single-family. Eastern Shores and the Intracoastal edge are the salt and surge side.
        Irma drove rain through 1960s seals on apartment glass. A building-wide replacement is an
        association schedule. A Skylake house is a measured list and a city permit. ZIP 33160 is
        shared with Sunny Isles and Golden Beach on our city list, so a zip-only quote is not a
        North Miami Beach quote.
      </p>
      <p>
        Repeated garden-building openings often fit <L href="/brands/es-windows/">ES Windows</L> or{" "}
        <L href="/brands/pgt/">PGT</L>. Water-facing sliders move the conversation toward{" "}
        <L href="/brands/cgi/">CGI</L> or a heavier PGT assembly.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when the opening is irregular. The board
        still has to accept the series before we order a stack.
      </p>
      <p>
        My Safe Florida Home is a poor fit for those rental and condo stacks. It can fit a
        homesteaded site-built house permitted before January 1, 2008, up to $10,000 from Florida
        DFS, after the program inspection. Except for low-income applicants, insured dwelling value
        is typically at or below $700,000. Do not start before written approval. Read{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/aventura/">Aventura</L>,{" "}
        <L href="/areas/sunny-isles-beach/">Sunny Isles Beach</L>, and{" "}
        <L href="/areas/north-miami/">North Miami</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      North Miami Beach is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements
      generally need a current Miami-Dade NOA and a City of North Miami Beach Building Department
      permit. Sharing ZIP 33160 with Sunny Isles Beach does not make the permit offices the same.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of North Miami Beach + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["aventura", "sunny-isles-beach", "north-miami", "golden-beach", "miami-gardens"],
  faqs: [
    {
      question: "Is North Miami Beach the same city as Miami Beach?",
      answer:
        "No. Different city, different permit counter. Both are Miami-Dade HVHZ, so both generally need a current NOA. The housing is not the same: North Miami Beach is Fulford, Skylake, garden buildings, and an Intracoastal edge, not the South Beach Art Deco district.",
    },
    {
      question: "Why is ZIP 33160 not enough for a quote?",
      answer:
        "33160 also covers Sunny Isles Beach and Golden Beach on our city list. Those are different municipalities. We measure the opening and name the city on the permit.",
    },
    {
      question: "Can a North Miami Beach condo association use My Safe Florida Home?",
      answer:
        "That grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after inspection and written approval, up to $10,000. An association-wide window project is a different path. Insured value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
    {
      question: "Who pulls the North Miami Beach permit?",
      answer:
        "Florida Impact Windows & Doors, from 3000 Stirling Rd in Hollywood. Call (754) 600-4876.",
    },
  ],
};

export const sunnyIslesBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Sunny Isles Beach, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Sunny Isles Beach, FL. Oceanfront towers and Golden Shores houses. Miami-Dade HVHZ / NOA. City of Sunny Isles Beach permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Sunny Isles Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Sunny Isles Beach is a narrow barrier island in Miami-Dade HVHZ. Tower glass on Collins and
      houses in Golden Shores are different jobs. Irma broke older non-impact glazing on upper
      floors. We pull the City of Sunny Isles Beach permit and submit a current NOA.
    </>
  ),
  countyBadge: "Sunny Isles Beach · Miami-Dade HVHZ",
  uniqueHeading: "Floor-to-ceiling ocean glass is an elevation problem, not a catalog single-hung",
  uniqueBody: (
    <>
      <p>
        The skyline is the city: Collins Avenue towers, Town Center, and houses set back in Golden
        Shores. Ocean on the east, Intracoastal conditions on the west. Upper floors see design
        pressure a ground-floor unit in the same building does not. A suburban vinyl package does
        not answer that. The association usually wants one series for the elevation so the stack
        matches.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> is the usual tall-glass conversation.{" "}
        <L href="/brands/pgt/">PGT</L> when the series the board already approved is in that catalog.{" "}
        <L href="/brands/es-windows/">ES Windows</L> only if the association will accept it.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a nonstandard opening. We provide cut
        sheets and NOA pages. We do not order a series the board has rejected.
      </p>
      <p>
        My Safe Florida Home rarely fits a tower unit. The grant is for a qualifying homesteaded
        site-built home permitted before January 1, 2008, up to $10,000 from Florida DFS, after the
        program inspection, and not if work starts before written approval. Except for low-income
        applicants, insured dwelling value is typically at or below $700,000. A Golden Shores house
        might be the grant question; a condo stack is an association project. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Next hubs: <L href="/areas/golden-beach/">Golden Beach</L> and{" "}
        <L href="/areas/aventura/">Aventura</L>. ZIP 33160 is shared — we still name the city.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Sunny Isles Beach is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements
      generally need a current Miami-Dade NOA and a City of Sunny Isles Beach permit. Upper-floor
      design pressure is part of the product choice inside that zone. We do not publish the city fee.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Sunny Isles Beach + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["golden-beach", "aventura", "bal-harbour", "north-miami-beach", "hallandale-beach"],
  faqs: [
    {
      question: "Do Sunny Isles Beach towers require Miami-Dade NOA glass?",
      answer:
        "Yes. The city is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a City of Sunny Isles Beach permit. The association may also lock the series, color, and contractor insurance.",
    },
    {
      question: "Can one unit replace glass if the building has not?",
      answer:
        "Only if the association allows it. Many oceanfront buildings require a matching elevation. We will not order a product the board has already turned down for that stack.",
    },
    {
      question: "Is My Safe Florida Home for Sunny Isles condominiums?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after inspection and written approval, up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
    {
      question: "Does ZIP 33160 mean Sunny Isles Beach?",
      answer:
        "Not by itself. Golden Beach and North Miami Beach also use 33160 on our city list. The permit follows the municipality, not the zip. Call (754) 600-4876.",
    },
  ],
};

export const keyBiscayne: CityPageOverride = {
  title: "Impact Windows & Doors in Key Biscayne, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Key Biscayne, FL. Barrier-island houses and Crandon towers. Miami-Dade HVHZ / NOA. Village of Key Biscayne permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Key Biscayne</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Key Biscayne is a barrier island with one road to the mainland and Miami-Dade HVHZ rules.
      Village houses, Key Colony, and oceanfront buildings do not share a window count. All of them
      need a current NOA and a Village of Key Biscayne permit.
    </>
  ),
  countyBadge: "Key Biscayne · Miami-Dade HVHZ",
  uniqueHeading: "No mainland wind shadow, and no Palm Beach paperwork",
  uniqueBody: (
    <>
      <p>
        Andrew crossed this island. Irma put surge into low ground-floor residences. Cape Florida,
        Harbor Point, Ocean Club, Oceana, and Commodore Club are not the same building type as a
        1950s cottage in the village center. Ocean on one side and bay on the other means salt and
        design pressure show up on more than the east wall. There is no Broward-style inland excuse
        and no Palm Beach FL#-only path.
      </p>
      <p>
        Walls of glass facing the water are a <L href="/brands/cgi/">CGI</L> or heavy{" "}
        <L href="/brands/pgt/">PGT</L> conversation. A cottage list can be PGT or{" "}
        <L href="/brands/es-windows/">ES Windows</L> if the opening sizes cooperate.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a one-off. Association buildings still
        need the board packet on top of the village permit. Access for a crew is the causeway, which
        is a scheduling fact, not a different code.
      </p>
      <p>
        A homesteaded site-built house permitted before January 1, 2008 can sometimes use My Safe
        Florida Home: Florida DFS, up to $10,000, after the program inspection. Except for low-income
        applicants, insured dwelling value is typically at or below $700,000. Many island addresses
        fail that value test. Starting work before written approval can disqualify the project.
        Towers are association work. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        The mainland hub is <L href="/areas/miami/">Miami</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Key Biscayne is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Village of Key Biscayne permit. Barrier-island exposure
      changes the opening spec. It does not change the approval family.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Village of Key Biscayne + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["miami", "miami-beach", "coral-gables"],
  faqs: [
    {
      question: "Is Key Biscayne in the HVHZ?",
      answer:
        "Yes. The Village of Key Biscayne is Miami-Dade High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current Miami-Dade NOA and a village permit.",
    },
    {
      question: "Do you install in Key Colony and in village houses?",
      answer:
        "Yes. Condominium buildings add an association review. Single-family cottages and waterfront houses are measured opening by opening. Both are Village of Key Biscayne permits. Call (754) 600-4876.",
    },
    {
      question: "Will My Safe Florida Home cover a Key Biscayne estate?",
      answer:
        "Only if it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Many properties on the island sit above that. Check MySafeFLHome.com.",
    },
    {
      question: "Can I use an FL#-only product on Key Biscayne?",
      answer:
        "No. That path is often accepted in Palm Beach County. Key Biscayne is Miami-Dade HVHZ. We submit the NOA that matches the unit.",
    },
  ],
};

export const pinecrest: CityPageOverride = {
  title: "Impact Windows & Doors in Pinecrest, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Pinecrest, FL. Estate lots, tree debris, and Miami-Dade HVHZ / NOA. Village of Pinecrest permit from our Hollywood shop. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Pinecrest</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Pinecrest is inland-enough to forget the ocean and still fully Miami-Dade HVHZ. The canopy is
      the missile. Estate openings are not a tract-home count. We pull the Village of Pinecrest
      permit and use current NOA products.
    </>
  ),
  countyBadge: "Pinecrest · Miami-Dade HVHZ",
  uniqueHeading: "Oaks and banyans are the debris. The stamp is still an NOA.",
  uniqueBody: (
    <>
      <p>
        Andrew&apos;s northern eyewall crossed the village and turned the canopy into debris. That
        is still the local reason impact glass matters on a street that never sees salt spray.
        Houses run from 1950s ranches to later custom builds on large lots along Killian, Red Road,
        and the Palmetto Bay edge. Oversized entries, tall living-room glass, and wide sliders are
        common. They get measured. They do not get a per-window price invented on this page.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/cgi/">CGI</L> are the usual split: PGT
        for a consistent whole-house list, CGI when a slider or tall unit needs a heavier assembly.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a one-off opening.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when the goal is every opening on a simpler
        ranch. The <L href="/services/door-types/garage/">garage</L> still counts on a wind-mitigation
        form.
      </p>
      <p>
        My Safe Florida Home is often a value-test question here. The grant is Florida DFS, up to
        $10,000, homesteaded site-built, permitted before January 1, 2008, after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Many Pinecrest houses are above that. Starting before written approval can
        disqualify the job. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/palmetto-bay/">Palmetto Bay</L> and{" "}
        <L href="/areas/coral-gables/">Coral Gables</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Pinecrest is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Village of Pinecrest permit. Tree debris does not put the
      village on the Palm Beach FL# path.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Village of Pinecrest + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["palmetto-bay", "coral-gables", "south-miami", "cutler-bay", "kendall"],
  faqs: [
    {
      question: "Is Pinecrest in the HVHZ even without ocean frontage?",
      answer:
        "Yes. The Village of Pinecrest is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a village permit. The local debris is the tree canopy, which is why Andrew damage here was limbs through glass.",
    },
    {
      question: "Do large Pinecrest openings use the same product as a ranch window?",
      answer:
        "Not automatically. Tall glass and wide sliders are specified for that opening. Bedroom single-hungs can be a different series from the same manufacturer. We price them on one measured list. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home apply to most Pinecrest homes?",
      answer:
        "Only when the house is a qualifying homesteaded, site-built home permitted before January 1, 2008, and insured dwelling value is typically at or below $700,000 except for low-income applicants. The grant is up to $10,000 after the program inspection. Work before written approval can disqualify it. Check MySafeFLHome.com.",
    },
    {
      question: "Who permits impact windows in Pinecrest?",
      answer:
        "We pull the Village of Pinecrest permit. Florida Impact Windows & Doors is at 3000 Stirling Rd, Hollywood, FL 33021.",
    },
  ],
};

export const palmettoBay: CityPageOverride = {
  title: "Impact Windows & Doors in Palmetto Bay, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Palmetto Bay, FL. Old Cutler houses and Biscayne Bay estates. Miami-Dade HVHZ / NOA. Village of Palmetto Bay permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Palmetto Bay</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Palmetto Bay is a village with Old Cutler canopy on one side and Biscayne Bay glass on the
      other. Both are Miami-Dade HVHZ. We pull the Village of Palmetto Bay permit and do not copy a
      Broward beach packet or a Palm Beach FL# packet onto the address.
    </>
  ),
  countyBadge: "Palmetto Bay · Miami-Dade HVHZ",
  uniqueHeading: "Old Cutler and the bay edge are two Palmetto Bay lists",
  uniqueBody: (
    <>
      <p>
        Deering Bay and the bayfront estates want wide sliders and corrosion resistance on the water
        elevation. Old Cutler, the Falls area, Howard Drive, and Coral Reef Drive are canopy and
        older or post-Andrew CBS, where the missile is limbs and neighbor tile. Franjo Triangle is
        its own small commercial-and-house mix. ZIP 33157 is also on Pinecrest and Cutler Bay lists,
        so the village name has to be on the permit.
      </p>
      <p>
        Bay sliders: <L href="/brands/cgi/">CGI</L> or <L href="/brands/pgt/">PGT</L>. Canopy
        single-family lists: PGT or <L href="/brands/es-windows/">ES Windows</L>.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when an older Old Cutler opening is not a
        stock size. We are the dealer-installer. Those factories build the units.
      </p>
      <p>
        Some homesteaded houses permitted before January 1, 2008 fit My Safe Florida Home — up to
        $10,000, Florida DFS, after the program inspection, site-built homestead. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Bay estates
        often miss that test. Do not start work before written approval. Context:{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L> and{" "}
        <L href="/financing/">financing</L>. Next hubs: <L href="/areas/pinecrest/">Pinecrest</L>,{" "}
        <L href="/areas/cutler-bay/">Cutler Bay</L>, and <L href="/areas/coral-gables/">Coral Gables</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Palmetto Bay is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Village of Palmetto Bay permit. Bay exposure is a product
      choice inside that rule, not a reason to leave the HVHZ.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Village of Palmetto Bay + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["pinecrest", "cutler-bay", "coral-gables", "homestead"],
  faqs: [
    {
      question: "Is Palmetto Bay HVHZ?",
      answer:
        "Yes. The village is Miami-Dade High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current NOA and a Village of Palmetto Bay permit.",
    },
    {
      question: "Do Old Cutler homes need the same glass as bayfront estates?",
      answer:
        "Same approval family, different openings. Bayfront sliders take salt and a higher design pressure. Old Cutler houses are often canopy debris and less standard sizes. We measure the address. Call (754) 600-4876.",
    },
    {
      question: "Does 33157 decide the permit office?",
      answer:
        "No. That zip also appears on Pinecrest and Cutler Bay in our city data. The permit is the Village of Palmetto Bay when the address is in the village.",
    },
    {
      question: "What is My Safe Florida Home in Palmetto Bay?",
      answer:
        "A Florida Department of Financial Services grant, up to $10,000, for a qualifying homesteaded site-built home permitted before January 1, 2008, after a program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Starting before written approval can disqualify the project. It is not financing. See MySafeFLHome.com.",
    },
  ],
};

export const miamiLakes: CityPageOverride = {
  title: "Impact Windows & Doors in Miami Lakes, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Miami Lakes, FL. Graham-planned ranches and later west sections. Miami-Dade HVHZ / NOA. Town of Miami Lakes permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miami Lakes</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miami Lakes is a planned town of lakes and 1960s–70s ranches, plus later houses to the west.
      It is inland and it is still Miami-Dade HVHZ. Original aluminum is the reason people call. We
      pull the Town of Miami Lakes permit.
    </>
  ),
  countyBadge: "Miami Lakes · Miami-Dade HVHZ",
  uniqueHeading: "Lake lots did not get impact glass just because the town was planned",
  uniqueBody: (
    <>
      <p>
        Royal Oaks, Lake Patricia, Lake Windmill, and the original sections are Florida ranches and
        split-levels with aluminum single-hung or jalousie. Miami Lakes West and Shoma sections are
        newer. Town Center is the mixed-use core, not a house template. Flat lots and connected lakes
        mean wind has a clean path. The failure in older sections is the original glass, not ocean
        salt. ZIPs 33014, 33015, and 33016 also touch Hialeah, so the town name matters.
      </p>
      <p>
        <L href="/brands/pgt/">PGT WinGuard</L> is the usual whole-house line.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when every jalousie has to be replaced on a
        budget. <L href="/brands/cgi/">CGI</L> for a wide lanai. The{" "}
        <L href="/services/door-types/garage/">garage door</L> is the other opening on a two-story
        or a later house with a two-car garage. HOA color rules in some sections are a review, not
        a different wind zone.
      </p>
      <p>
        Original-section houses often meet the My Safe Florida Home date: homesteaded, site-built,
        permitted before January 1, 2008, up to $10,000 from Florida DFS, only after the program
        inspection. Except for low-income applicants, insured dwelling value is typically at or
        below $700,000. Starting before written approval can disqualify the project. Newer west
        sections may miss the date. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/hialeah/">Hialeah</L> and{" "}
        <L href="/areas/hialeah-gardens/">Hialeah Gardens</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miami Lakes is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Town of Miami Lakes permit. A planned-community HOA does
      not replace that permit.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Miami Lakes + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hialeah", "hialeah-gardens", "miami-gardens", "doral"],
  faqs: [
    {
      question: "Is Miami Lakes outside the HVHZ because it is inland?",
      answer:
        "No. The town is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a Town of Miami Lakes permit.",
    },
    {
      question: "Do original Miami Lakes ranches still have jalousie windows?",
      answer:
        "Many do, along with aluminum single-hung. We measure those openings. ES Windows is often the value path for a full replacement. PGT is the other whole-house option. Call (754) 600-4876.",
    },
    {
      question: "Can a Miami Lakes home use My Safe Florida Home?",
      answer:
        "If it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
    {
      question: "Are 33014 and 33016 always Miami Lakes?",
      answer:
        "No. Those zips also appear on Hialeah in our city data. We permit the municipality the address is actually in.",
    },
  ],
};

export const hialeahGardens: CityPageOverride = {
  title: "Impact Windows & Doors in Hialeah Gardens, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Hialeah Gardens, FL. Western CBS houses on open fetch. Miami-Dade HVHZ / NOA. City of Hialeah Gardens permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hialeah Gardens</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hialeah Gardens sits on the west edge of the urban grid. Houses are mostly later CBS, one and
      two stories, and the wind comes across open ground. It is still Miami-Dade HVHZ. We pull the
      City of Hialeah Gardens permit.
    </>
  ),
  countyBadge: "Hialeah Gardens · Miami-Dade HVHZ",
  uniqueHeading: "West of Hialeah, the fetch is open and the code is still an NOA",
  uniqueBody: (
    <>
      <p>
        This is not old Hialeah jalousie stock. Most houses are 1980s through 2000s CBS along the
        west Okeechobee corridor and the northwest terraces, with Palm Springs North on the border.
        Many were built with shutters as the protection method. Owners calling now want the panels
        to stop being the plan. Western open ground is why wind is the story, not salt. We do not
        invent a percentage uplift for that fetch. We specify the opening.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> or <L href="/brands/es-windows/">ES Windows</L> for a typical
        single-family list. <L href="/brands/cgi/">CGI</L> when a lanai slider is the large opening.
        The <L href="/services/door-types/garage/">garage door</L> is often still the weak opening
        after the windows are done. ZIP 33018 is the local zip on our list — we still confirm the
        city before ordering.
      </p>
      <p>
        Houses permitted before January 1, 2008 can be a My Safe Florida Home question: homesteaded,
        site-built, up to $10,000 from Florida DFS, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Do not
        start before written approval. Later houses miss the date. Read{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L> and{" "}
        <L href="/areas/hialeah/">Hialeah</L> or <L href="/areas/miami-lakes/">Miami Lakes</L> if the
        address is actually next door.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hialeah Gardens is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements
      generally need a current Miami-Dade NOA and a City of Hialeah Gardens Building Department
      permit. Open western ground does not move the city out of the HVHZ.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Hialeah Gardens + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["hialeah", "miami-lakes", "doral", "medley"],
  faqs: [
    {
      question: "Is Hialeah Gardens in the HVHZ?",
      answer:
        "Yes. It is Miami-Dade High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current NOA and a City of Hialeah Gardens permit.",
    },
    {
      question: "Are Hialeah Gardens houses the same as central Hialeah?",
      answer:
        "No. Hialeah Gardens is newer CBS, often shutter-compliant rather than full of 1950s jalousie. The permit office is the City of Hialeah Gardens, not the City of Hialeah. Call (754) 600-4876.",
    },
    {
      question: "If the house has shutters, is impact glass required?",
      answer:
        "Not if the shutters are the approved protection and you use them. Impact windows replace that routine. Once an opening is impact-rated, it does not also need shutters for code.",
    },
    {
      question: "Does My Safe Florida Home work on a 2012 Hialeah Gardens house?",
      answer:
        "The date test is a site-built homestead permitted before January 1, 2008. A 2012 permit does not fit. Where the date fits, the grant is up to $10,000 after inspection and written approval, with insured value typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const miamiSprings: CityPageOverride = {
  title: "Impact Windows & Doors in Miami Springs, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Miami Springs, FL. 1940s–50s Moderne and Mission houses near the airport. Miami-Dade HVHZ / NOA. City of Miami Springs permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miami Springs</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miami Springs is a small city of early-aviation houses — Streamline, Art Deco, Mission — plus
      the country-club streets. It is Miami-Dade HVHZ. Openings are often not a modern size, and
      airport noise is a daily reason people ask about laminated glass. City of Miami Springs permit.
    </>
  ),
  countyBadge: "Miami Springs · Miami-Dade HVHZ",
  uniqueHeading: "Historic profiles, airport noise, and an NOA on the same opening",
  uniqueBody: (
    <>
      <p>
        Glenn Curtiss&apos;s city still reads as 1940s and 1950s on Curtiss Parkway and the Royal
        Poinciana streets. Glass block, odd muntin patterns, and openings that were never a builder
        single-hung are normal. Deer Park and the country-club area are part of the same small city.
        MIA is next door, which is why owners ask about sound even in a quiet week. Impact
        interlayers cut that noise better than original single-pane. The wind rule is still a current
        Miami-Dade NOA.
      </p>
      <p>
        Look-sensitive openings are a <L href="/brands/pgt/">PGT</L> or{" "}
        <L href="/brands/custom-window-systems/">Custom Window Systems</L> conversation.{" "}
        <L href="/brands/es-windows/">ES Windows</L> when the openings are simpler aluminum
        replacements. <L href="/brands/cgi/">CGI</L> for a larger unit. If a local review asks for
        profiles, we submit cut sheets with the permit. We do not skip the NOA because the house is
        old.
      </p>
      <p>
        These houses often meet the My Safe Florida Home date: homesteaded, site-built, permitted
        before January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. Except
        for low-income applicants, insured dwelling value is typically at or below $700,000.
        Starting before written approval can disqualify the project. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/doral/">Doral</L>, <L href="/areas/medley/">Medley</L>, and{" "}
        <L href="/areas/hialeah/">Hialeah</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miami Springs is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of Miami Springs Building Department permit. A
      historic-looking profile does not substitute for that approval.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Miami Springs + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["doral", "medley", "hialeah", "miami"],
  faqs: [
    {
      question: "Can Miami Springs historic houses get impact windows?",
      answer:
        "Yes. The openings are measured, including non-rectangular and glass-block conditions that need a modern impact alternative. The City of Miami Springs permit still expects a current Miami-Dade NOA. Appearance is a separate review where the city requires it.",
    },
    {
      question: "Do impact windows help with Miami International Airport noise?",
      answer:
        "Laminated impact glass reduces outside noise compared with original single-pane aluminum. That is a daily reason to replace on streets near MIA. It does not change the HVHZ permit.",
    },
    {
      question: "Is My Safe Florida Home realistic in Miami Springs?",
      answer:
        "Often the date fits: homesteaded, site-built, permitted before January 1, 2008, up to $10,000 after the program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Do not start work before written approval. Check MySafeFLHome.com.",
    },
    {
      question: "Who installs in Miami Springs?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. Call (754) 600-4876.",
    },
  ],
};

export const southMiami: CityPageOverride = {
  title: "Impact Windows & Doors in South Miami, FL | Miami-Dade County",
  description:
    "Impact windows and doors in South Miami, FL. Sunset Drive houses and a walkable downtown. Miami-Dade HVHZ / NOA. City of South Miami permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">South Miami</span>, FL
    </>
  ),
  heroIntro: (
    <>
      South Miami is a small city between Coral Gables and Pinecrest: 1940s–60s houses, a downtown
      grid, and a tree canopy that becomes debris. It is Miami-Dade HVHZ. We pull the City of South
      Miami permit.
    </>
  ),
  countyBadge: "South Miami · Miami-Dade HVHZ",
  uniqueHeading: "Sunset Drive bungalows are not a Gables estate and not a Kendall tract",
  uniqueBody: (
    <>
      <p>
        Sunset Drive, the blocks by Dante Fascell Park, Brewer Park, and Murray Park are mature
        houses with original aluminum and openings that grew a Florida room later. Downtown South
        Miami adds storefronts on a walkable grid. The canopy is the local missile, the same family
        of problem as Pinecrest, on smaller lots. Andrew is the regional memory; the permit is the
        City of South Miami, not the Village of Pinecrest, even when a zip overlaps.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> cover most
        house lists. <L href="/brands/custom-window-systems/">CWS</L> when a Florida-room opening is
        odd. <L href="/brands/cgi/">CGI</L> for a larger slider. Storefront work is a commercial
        opening, not a house single-hung with a different label.
      </p>
      <p>
        Older homesteads often fit the My Safe Florida Home date: site-built, permitted before
        January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Starting
        before written approval can disqualify the project. Downtown commercial space is not that
        grant. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Next hubs: <L href="/areas/coral-gables/">Coral Gables</L> and{" "}
        <L href="/areas/pinecrest/">Pinecrest</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      South Miami is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of South Miami Building Department permit. Sharing a
      zip with Coral Gables or Pinecrest does not move the counter.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of South Miami + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["coral-gables", "pinecrest", "westchester", "miami"],
  faqs: [
    {
      question: "Is South Miami in the HVHZ?",
      answer:
        "Yes. The City of South Miami is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a city permit.",
    },
    {
      question: "Do you install on Sunset Drive and downtown?",
      answer:
        "Yes. Houses are a measured residential list. Downtown storefronts are a commercial opening with the same wind-zone family. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood.",
    },
    {
      question: "Can a South Miami bungalow use My Safe Florida Home?",
      answer:
        "If it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
    {
      question: "Is the permit Coral Gables because the cities touch?",
      answer:
        "No. A South Miami address is the City of South Miami. A Gables address is the City of Coral Gables, which also has a Board of Architects. We do not mix the packets.",
    },
  ],
};

export const surfside: CityPageOverride = {
  title: "Impact Windows & Doors in Surfside, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Surfside, FL. Low-rise ocean blocks and house streets. Miami-Dade HVHZ / NOA. Town of Surfside permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Surfside</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Surfside is a small oceanfront town between Miami Beach and Bal Harbour. Houses on the west
      streets and older oceanfront buildings are both Miami-Dade HVHZ. We pull the Town of Surfside
      permit and submit a current NOA.
    </>
  ),
  countyBadge: "Surfside · Miami-Dade HVHZ",
  uniqueHeading: "A low-rise beach town, not a Sunny Isles tower template",
  uniqueBody: (
    <>
      <p>
        Oceanfront here is mostly smaller condominium buildings from the 1960s and 1970s, plus later
        work, not a fifty-story Collins stack. The house streets — Bay Drive, Carlisle, the blocks
        by the community center — are a separate list. Salt is constant. There is no tall-building
        wind shadow. After the Champlain Towers collapse, the town&apos;s building scrutiny is
        higher. That does not invent a new window fee on this page. It does mean association and
        engineer paperwork on a building job gets answered, not waved off.
      </p>
      <p>
        House lists: <L href="/brands/pgt/">PGT</L> or <L href="/brands/es-windows/">ES Windows</L>.
        Oceanfront sliders and larger units: <L href="/brands/cgi/">CGI</L> or a heavier PGT series.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for an odd opening. We will not order glass
        the association has rejected. ZIP 33154 is also Bal Harbour and Bay Harbor Islands.
      </p>
      <p>
        My Safe Florida Home is aimed at a homesteaded site-built house permitted before January 1,
        2008, up to $10,000 from Florida DFS, after the program inspection. Except for low-income
        applicants, insured dwelling value is typically at or below $700,000. A condominium stack is
        usually not that grant. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/bal-harbour/">Bal Harbour</L> and{" "}
        <L href="/areas/miami-beach/">Miami Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Surfside is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Town of Surfside permit. Building-safety review on a
      condominium does not replace the product approval, and the NOA does not replace the association.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Surfside + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["bal-harbour", "miami-beach", "bay-harbor-islands", "sunny-isles-beach"],
  faqs: [
    {
      question: "Is Surfside in the HVHZ?",
      answer:
        "Yes. The Town of Surfside is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a town permit.",
    },
    {
      question: "Do you treat Surfside like Sunny Isles Beach?",
      answer:
        "No. Surfside is lower buildings and house streets. Sunny Isles is a tower skyline with upper-floor design pressure. Both are HVHZ. The permits and the opening lists are different. Call (754) 600-4876.",
    },
    {
      question: "Does ZIP 33154 mean Surfside?",
      answer:
        "Not always. Bal Harbour and Bay Harbor Islands share 33154 on our city list. We name the town on the permit after we see the address.",
    },
    {
      question: "Can a Surfside condo use My Safe Florida Home?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after inspection and written approval, up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
  ],
};

export const balHarbour: CityPageOverride = {
  title: "Impact Windows & Doors in Bal Harbour, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Bal Harbour, FL. Oceanfront buildings and Collins exposure. Miami-Dade HVHZ / NOA. Village of Bal Harbour permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Bal Harbour</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Bal Harbour is a small village of oceanfront buildings north of Surfside. The wind zone is
      Miami-Dade HVHZ. Sightlines and finish matter to the association, and they do not replace a
      current NOA. We pull the Village of Bal Harbour permit.
    </>
  ),
  countyBadge: "Bal Harbour · Miami-Dade HVHZ",
  uniqueHeading: "Narrow sightlines still need a Miami-Dade stamp",
  uniqueBody: (
    <>
      <p>
        Collins Avenue and the village buildings face the Atlantic with Intracoastal water behind
        them. Floor-to-ceiling glass is common. The shops are a commercial corridor, not a house
        job. Biscayne Point is the residential edge on our neighborhood list. Irma-era failures of
        older non-impact glazing are why associations here ask for a real approval, not a brochure.
        We do not publish a luxury price. We measure the opening.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> is the usual tall coastal conversation.{" "}
        <L href="/brands/pgt/">PGT</L> when that catalog has the series the board will accept.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> for a custom profile.{" "}
        <L href="/brands/es-windows/">ES Windows</L> only if the association wants that line. Color
        and sightline are board items. The NOA is the county item.
      </p>
      <p>
        My Safe Florida Home is rarely the path for these buildings. It is a Florida DFS grant, up
        to $10,000, for a qualifying homesteaded site-built home permitted before January 1, 2008,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Association projects are not that grant. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Next door: <L href="/areas/surfside/">Surfside</L> and{" "}
        <L href="/areas/bay-harbor-islands/">Bay Harbor Islands</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Bal Harbour is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Village of Bal Harbour permit. Aesthetic review does not
      waive the HVHZ approval.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Village of Bal Harbour + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["surfside", "bay-harbor-islands", "sunny-isles-beach", "miami-beach"],
  faqs: [
    {
      question: "Are Bal Harbour impact windows under Miami-Dade rules?",
      answer:
        "Yes. The village is HVHZ. Replacement products generally need a current Miami-Dade NOA and a Village of Bal Harbour permit. An FL#-only packet from Palm Beach is the wrong paperwork.",
    },
    {
      question: "Will the association care about frame color?",
      answer:
        "Usually yes. We supply cut sheets and NOA pages and we do not order a series the board has rejected. The village permit is separate from that approval. Call (754) 600-4876.",
    },
    {
      question: "Is My Safe Florida Home for Bal Harbour towers?",
      answer:
        "No. The grant is for qualifying homesteaded site-built homes permitted before January 1, 2008, up to $10,000, after inspection and written approval. Insured dwelling value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
    {
      question: "Is 33154 only Bal Harbour?",
      answer:
        "No. Surfside and Bay Harbor Islands share that zip on our list. The permit office follows the village line.",
    },
  ],
};

export const bayHarborIslands: CityPageOverride = {
  title: "Impact Windows & Doors in Bay Harbor Islands, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Bay Harbor Islands, FL. Two islands, mid-century houses, and low-rise condos. Miami-Dade HVHZ / NOA. Town permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Bay Harbor Islands</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Bay Harbor Islands is two islands in Indian Creek, not a beach tower city. East Island, West
      Island, and Kane Concourse are Miami-Dade HVHZ. Water on all sides changes the hardware
      conversation. The Town of Bay Harbor Islands signs the permit.
    </>
  ),
  countyBadge: "Bay Harbor Islands · Miami-Dade HVHZ",
  uniqueHeading: "Two small islands, surge from the creek, and a town permit",
  uniqueBody: (
    <>
      <p>
        East Island and West Island are mid-century houses and boutique condominiums from the 1960s
        through the 1980s, plus later low-rise work. Kane Concourse is the commercial bridge street.
        Narrow streets are a crew-access issue, not a reason to skip anchorage. There is no oceanfront
        dune and no inland fetch. The water is the creek around both islands. ZIP 33154 is shared
        with Surfside and Bal Harbour, which is why a zip quote fails here.
      </p>
      <p>
        House and low-rise lists: <L href="/brands/pgt/">PGT</L> or{" "}
        <L href="/brands/es-windows/">ES Windows</L>. Wider water-facing sliders:{" "}
        <L href="/brands/cgi/">CGI</L>. <L href="/brands/custom-window-systems/">CWS</L> for an odd
        mid-century opening. Association buildings still need a board packet. Concourse storefronts
        are commercial openings.
      </p>
      <p>
        A site-built homestead permitted before January 1, 2008 can be a My Safe Florida Home
        question: up to $10,000, Florida DFS, after the program inspection. Except for low-income
        applicants, insured dwelling value is typically at or below $700,000. Many island addresses
        miss that value test. Condos are association work. Do not start before written approval.
        See <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/bal-harbour/">Bal Harbour</L> and{" "}
        <L href="/areas/surfside/">Surfside</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Bay Harbor Islands is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements
      generally need a current Miami-Dade NOA and a Town of Bay Harbor Islands permit. Island
      logistics do not change the approval.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Bay Harbor Islands + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["bal-harbour", "surfside", "miami-beach", "sunny-isles-beach"],
  faqs: [
    {
      question: "Is Bay Harbor Islands HVHZ?",
      answer:
        "Yes. Both islands are Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a Town of Bay Harbor Islands permit.",
    },
    {
      question: "Do you install on both islands?",
      answer:
        "Yes. East Island, West Island, and Kane Concourse commercial openings. Narrow streets affect how we stage the job. They do not change the NOA. Call (754) 600-4876.",
    },
    {
      question: "Why not use the Bal Harbour permit?",
      answer:
        "They share ZIP 33154 and a short drive. They do not share a building department. A Bay Harbor Islands address stays with that town.",
    },
    {
      question: "Does My Safe Florida Home cover island condos?",
      answer:
        "Usually no. The grant is for a qualifying homesteaded site-built home permitted before January 1, 2008, up to $10,000, after inspection and written approval. Insured value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const sweetwater: CityPageOverride = {
  title: "Impact Windows & Doors in Sweetwater, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Sweetwater, FL. 1970s–80s CBS near FIU, west of the beaches. Miami-Dade HVHZ / NOA. City of Sweetwater permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Sweetwater</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Sweetwater is a small west Miami-Dade city of modest CBS houses and duplexes, with FIU on the
      edge. It is not a beach job. It is still HVHZ. We pull the City of Sweetwater permit and
      submit a current NOA.
    </>
  ),
  countyBadge: "Sweetwater · Miami-Dade HVHZ",
  uniqueHeading: "West of FIU, the glass is original aluminum and the zone is still HVHZ",
  uniqueBody: (
    <>
      <p>
        Sweetwater Cove and the blocks off SW 8th Street are mostly 1970s and 1980s single-family
        houses and duplexes. A lot of them are rentals. The owner&apos;s question is usually how to
        cover every opening without a coastal hardware package that does not match the street.
        Open ground to the west is the wind story. Fontainebleau Park is the neighboring area on
        our list, not a second city hall.
      </p>
      <p>
        <L href="/brands/es-windows/">ES Windows</L> is the usual value aluminum line for a full
        house or duplex. <L href="/brands/pgt/">PGT WinGuard</L> is the other whole-house option.{" "}
        <L href="/brands/cgi/">CGI</L> only when a slider actually needs it. The{" "}
        <L href="/services/door-types/garage/">garage</L>, if there is one, stays on the wind-mitigation
        list. We do not quote a tower series onto a duplex.
      </p>
      <p>
        Many of these houses meet the My Safe Florida Home date if they are the owner&apos;s
        homestead: site-built, permitted before January 1, 2008, up to $10,000 from Florida DFS,
        after the program inspection. A rental that is not the applicant&apos;s homestead does not
        fit. Except for low-income applicants, insured dwelling value is typically at or below
        $700,000. Do not start before written approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/doral/">Doral</L> and <L href="/areas/westchester/">Westchester</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Sweetwater is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of Sweetwater Building Department permit. Being west
      of the airport does not create an FL#-only exception.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Sweetwater + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["doral", "westchester", "kendall", "miami-springs"],
  faqs: [
    {
      question: "Is Sweetwater in the HVHZ?",
      answer:
        "Yes. The City of Sweetwater is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a city permit.",
    },
    {
      question: "Do rental duplexes qualify for My Safe Florida Home?",
      answer:
        "The grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after inspection and written approval, up to $10,000. A property that is not the applicant's homestead does not fit that description. Insured value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
    {
      question: "Which brands make sense on a Sweetwater house?",
      answer:
        "ES Windows or PGT for a typical full replacement of original aluminum. CGI if a wide slider is on the list. We price them on the measured openings. Call (754) 600-4876.",
    },
    {
      question: "Where do crews come from?",
      answer:
        "Florida Impact Windows & Doors, 3000 Stirling Rd, Hollywood, FL 33021. Sweetwater is a regular west Miami-Dade service city.",
    },
  ],
};

export const miamiShores: CityPageOverride = {
  title: "Impact Windows & Doors in Miami Shores, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Miami Shores, FL. 1920s–40s Mediterranean and Masonry Vernacular. Miami-Dade HVHZ / NOA. Village of Miami Shores permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miami Shores</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miami Shores keeps 1920s–40s houses on a village grid, with a historic-minded overlay and
      Miami-Dade HVHZ rules at the same time. Openings are often not stock sizes. We pull the
      Village of Miami Shores permit and submit a current NOA.
    </>
  ),
  countyBadge: "Miami Shores · Miami-Dade HVHZ",
  uniqueHeading: "The village cares how it looks. The county still wants an NOA.",
  uniqueBody: (
    <>
      <p>
        Grand Concourse, the golf-course streets, and the blocks toward Barry University are
        Mediterranean Revival, Masonry Vernacular, and Mission houses. Original openings are the
        job. A colonial grid slapped on a 1928 sash is how these projects get rejected locally.
        The overlay encourages keeping the architectural character. It does not waive laminated
        glass. ZIPs here also appear on Miami and North Miami lists, so the village name goes on
        the permit.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/custom-window-systems/">Custom Window Systems</L>{" "}
        are the usual profile conversation. <L href="/brands/es-windows/">ES Windows</L> when the
        opening is a straightforward aluminum replacement the village will accept.{" "}
        <L href="/brands/cgi/">CGI</L> for a larger unit. We bring cut sheets. We do not guess the
        review outcome.
      </p>
      <p>
        These houses often match the My Safe Florida Home date: homesteaded, site-built, permitted
        before January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. Except
        for low-income applicants, insured dwelling value is typically at or below $700,000.
        Starting before written approval can disqualify the project. Some village houses sit above
        that value test. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/north-miami/">North Miami</L> and <L href="/areas/miami/">Miami</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miami Shores is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Village of Miami Shores permit. Historic character is an
      additional review, not a different wind zone.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Village of Miami Shores + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["north-miami", "miami", "north-miami-beach", "miami-beach"],
  faqs: [
    {
      question: "Do Miami Shores historic houses still need a Miami-Dade NOA?",
      answer:
        "Yes. The village is HVHZ. A profile that matches the old opening still has to be an approved impact product. The Village of Miami Shores permit and any design review sit on top of that, not instead of it.",
    },
    {
      question: "Can non-standard 1920s openings be replaced?",
      answer:
        "They are measured one by one. PGT and Custom Window Systems are the usual places we look for a profile that fits. Call (754) 600-4876. The shop is 3000 Stirling Rd, Hollywood.",
    },
    {
      question: "Is My Safe Florida Home available in the village?",
      answer:
        "For a qualifying homesteaded, site-built home permitted before January 1, 2008, up to $10,000, after the program inspection and written approval. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Check MySafeFLHome.com.",
    },
    {
      question: "Is Miami Shores the same permit as North Miami?",
      answer:
        "No. They share a border and some zip codes in our data. A Miami Shores address is the Village of Miami Shores.",
    },
  ],
};

export const kendall: CityPageOverride = {
  title: "Impact Windows & Doors in Kendall, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Kendall, FL. Unincorporated Miami-Dade — county permit, not a city hall. HVHZ / NOA from Hammocks to Dadeland. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Kendall</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Kendall is not a city. It is a large unincorporated area of Miami-Dade, from older streets
      near Dadeland to The Hammocks, Kendale Lakes, and West Kendall. The permit is Miami-Dade
      County. The wind zone is still HVHZ, so the product is still a current NOA.
    </>
  ),
  countyBadge: "Kendall · Miami-Dade HVHZ",
  uniqueHeading: "No City of Kendall counter. The county permit is the real one.",
  uniqueBody: (
    <>
      <p>
        Kendall Lakes, The Hammocks, Kendale Lakes, Three Lakes, Calusa, Sunset, Richmond Heights,
        and West Kendall are different decades of CBS. East Kendall is older ranches. The western
        sections are later two-stories that often used shutters for code and sit closer to open
        ground. The Falls is a shopping name, not a building department. If someone quotes a City
        of Kendall fee, they are inventing an office. We pull the Miami-Dade County permit for the
        address.
      </p>
      <p>
        Tract two-stories: <L href="/brands/pgt/">PGT WinGuard</L> or{" "}
        <L href="/brands/es-windows/">ES Windows</L>. A wide lanai slider:{" "}
        <L href="/brands/cgi/">CGI</L> when the opening needs it. The{" "}
        <L href="/services/door-types/garage/">garage door</L> is the line people drop on these
        houses. HOAs in The Hammocks and similar sections review color. They do not issue the
        building permit.
      </p>
      <p>
        Older east-Kendall homesteads are the My Safe Florida Home candidates: site-built, permitted
        before January 1, 2008, up to $10,000 from Florida DFS, after the program inspection. West
        Kendall houses permitted later miss the date. Except for low-income applicants, insured
        dwelling value is typically at or below $700,000. Do not start before written approval. See{" "}
        <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Nearby cities: <L href="/areas/pinecrest/">Pinecrest</L> and{" "}
        <L href="/areas/westchester/">Westchester</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Kendall is unincorporated Miami-Dade and inside the High-Velocity Hurricane Zone. There is no
      City of Kendall building department on a Kendall address. Impact replacements generally need a
      current Miami-Dade NOA and a Miami-Dade County permit. We do not publish the county fee.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Miami-Dade County permit + NOA (unincorporated)",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["pinecrest", "westchester", "palmetto-bay", "doral", "sweetwater"],
  faqs: [
    {
      question: "Who permits impact windows in Kendall?",
      answer:
        "Miami-Dade County. Kendall is unincorporated. We do not file with a City of Kendall office. The product path is still HVHZ, generally a current Miami-Dade NOA.",
    },
    {
      question: "Are The Hammocks and West Kendall the same spec?",
      answer:
        "They are the same wind zone and the same county permit. The houses are not the same age. West Kendall is often a shutter-era two-story. East Kendall is more likely original aluminum. We measure the address. Call (754) 600-4876.",
    },
    {
      question: "Does an HOA in Kendall replace the county permit?",
      answer:
        "No. The association can require a color or grid. Miami-Dade County still permits the opening. Both can be true on the same house.",
    },
    {
      question: "Can a Kendall house use My Safe Florida Home?",
      answer:
        "If it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Except for low-income applicants, insured dwelling value is typically at or below $700,000. See MySafeFLHome.com.",
    },
  ],
};

export const westchester: CityPageOverride = {
  title: "Impact Windows & Doors in Westchester, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Westchester, FL. Unincorporated 1950s–70s ranches. Miami-Dade County permit, HVHZ / NOA. Not a city hall. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Westchester</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Westchester is unincorporated Miami-Dade: CBS ranches, Florida-room additions, and original
      aluminum. There is no City of Westchester permit counter. The county permit and a current NOA
      are the HVHZ path. We measure from Hollywood.
    </>
  ),
  countyBadge: "Westchester · Miami-Dade HVHZ",
  uniqueHeading: "Fifty-year-old aluminum, plus the Florida room somebody added later",
  uniqueBody: (
    <>
      <p>
        Tropical Park, Westwood Lakes, the Bird Road corridor, and Coral Way West are the mature
        grid. Houses were expanded. The original single-hung is one size and the Florida room
        jalousie is another. Flagami is the border, not this CDP&apos;s city hall. Treating
        Westchester like Coral Gables — Board of Architects, estate glass — is the wrong script.
        Treating it like a brand-new West Kendall two-story is also wrong.
      </p>
      <p>
        <L href="/brands/es-windows/">ES Windows</L> is the usual value path when every jalousie and
        awning unit has to go. <L href="/brands/pgt/">PGT</L> is the other whole-house catalog.{" "}
        <L href="/brands/custom-window-systems/">CWS</L> when the Florida room is not a rectangle.{" "}
        <L href="/brands/cgi/">CGI</L> is uncommon unless a wide slider was added. No salt package
        by default.
      </p>
      <p>
        This housing stock lines up with My Safe Florida Home more often than the beach cities do:
        homesteaded, site-built, permitted before January 1, 2008, up to $10,000 from Florida DFS,
        after the program inspection. Except for low-income applicants, insured dwelling value is
        typically at or below $700,000. Starting before written approval can disqualify the project.
        It is not a loan. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Nearby: <L href="/areas/coral-gables/">Coral Gables</L>,{" "}
        <L href="/areas/sweetwater/">Sweetwater</L>, and <L href="/areas/kendall/">Kendall</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Westchester is unincorporated Miami-Dade inside the High-Velocity Hurricane Zone. Impact
      replacements generally need a current Miami-Dade NOA and a Miami-Dade County permit. We do
      not file a city permit that does not exist.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Miami-Dade County permit + NOA (unincorporated)",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["coral-gables", "sweetwater", "kendall", "south-miami"],
  faqs: [
    {
      question: "Is there a City of Westchester building department?",
      answer:
        "No. Westchester is unincorporated Miami-Dade. We pull a Miami-Dade County permit. The wind zone is still HVHZ, so the product is generally a current NOA.",
    },
    {
      question: "Can you replace Florida-room jalousie in Westchester?",
      answer:
        "Yes. Those openings are measured separately from the original house windows. ES Windows or PGT covers most lists. CWS is the conversation when the opening is irregular. Call (754) 600-4876.",
    },
    {
      question: "Does My Safe Florida Home fit Westchester ranches?",
      answer:
        "Often the date does: a qualifying homesteaded, site-built home permitted before January 1, 2008, up to $10,000 after the program inspection. Except for low-income applicants, insured dwelling value is typically at or below $700,000. Do not start work before written approval. See MySafeFLHome.com.",
    },
    {
      question: "Is Westchester the same as West Kendall?",
      answer:
        "No. Westchester is the older central-west grid. Kendall, including West Kendall, is a different unincorporated area with its own mix of later houses. Both use Miami-Dade County permits. The opening lists differ.",
    },
  ],
};

export const floridaCity: CityPageOverride = {
  title: "Impact Windows & Doors in Florida City, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Florida City, FL. Post-Andrew CBS at the south end of the mainland. Miami-Dade HVHZ / NOA. City of Florida City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Florida City</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Florida City is the last mainland city before the Keys. Almost everything standing was built
      after Andrew, often with shutters rather than impact glass. It is Miami-Dade HVHZ. We pull
      the City of Florida City permit.
    </>
  ),
  countyBadge: "Florida City · Miami-Dade HVHZ",
  uniqueHeading: "South of Homestead, the houses are newer and the shutters are still the plan",
  uniqueBody: (
    <>
      <p>
        Historic downtown, the Keys Gateway streets, Palm Drive, and the Redland edge are a small
        city, not a Homestead subdivision with a different name. Post-Andrew CBS is the housing.
        Shutters were the code path on a lot of it. There is little urban fabric south of here to
        slow a storm coming off the Straits. That is a wind fact. It is not a new price list. The
        city is still the same HVHZ family as the rest of Miami-Dade.
      </p>
      <p>
        <L href="/brands/pgt/">PGT</L> and <L href="/brands/es-windows/">ES Windows</L> cover most
        single-family replacements. <L href="/brands/cgi/">CGI</L> when a wide opening needs it.{" "}
        <L href="/services/door-types/garage/">Garage doors</L> stay on the list. We do not copy a
        Homestead packet onto a Florida City address just because the drive continues south — the
        city hall changes.
      </p>
      <p>
        Because the rebuild was after Andrew, many permits are after January 1, 2008, and My Safe
        Florida Home will not fit those houses. Where a homesteaded site-built home was permitted
        before that date, the grant is Florida DFS, up to $10,000, after the program inspection.
        Except for low-income applicants, insured dwelling value is typically at or below $700,000.
        Do not start before written approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        The next hub north is <L href="/areas/homestead/">Homestead</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Florida City is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a City of Florida City Building Department permit. It is not
      permitted by the City of Homestead.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "City of Florida City + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["homestead", "cutler-bay", "palmetto-bay"],
  faqs: [
    {
      question: "Is Florida City in the HVHZ?",
      answer:
        "Yes. It is Miami-Dade High-Velocity Hurricane Zone. Replacement impact windows and doors generally need a current NOA and a City of Florida City permit.",
    },
    {
      question: "Is the permit handled by Homestead?",
      answer:
        "No. Homestead is the next city north and a different building department. We file with the City of Florida City for a Florida City address. Call (754) 600-4876.",
    },
    {
      question: "Were these houses built with impact windows?",
      answer:
        "Many post-Andrew houses used shutters as the protection method. Replacing that with impact glass is a new permit and a current NOA. Code does not force the change if the shutters are approved and you use them.",
    },
    {
      question: "Does My Safe Florida Home cover a house built in the late 1990s?",
      answer:
        "If it is a qualifying homesteaded, site-built home permitted before January 1, 2008, after the program inspection, and work has not started before written approval. The grant is up to $10,000. Houses permitted on or after that date do not fit. Insured value is typically at or below $700,000 except for low-income applicants. See MySafeFLHome.com.",
    },
  ],
};

export const goldenBeach: CityPageOverride = {
  title: "Impact Windows & Doors in Golden Beach, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Golden Beach, FL. Oceanfront single-family estates. Miami-Dade HVHZ / NOA. Town of Golden Beach permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Golden Beach</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Golden Beach is a town of oceanfront houses, not towers. Direct Atlantic exposure, Miami-Dade
      HVHZ, and a Town of Golden Beach permit. Each house is a measured list. ZIP 33160 does not
      make it Sunny Isles Beach.
    </>
  ),
  countyBadge: "Golden Beach · Miami-Dade HVHZ",
  uniqueHeading: "Estate glass on the ocean, one house at a time",
  uniqueBody: (
    <>
      <p>
        There is no condo-board template and no inland ranch. Houses face the Atlantic along A1A.
        Glass area is large and custom. We do not print a square-footage claim or a price per
        opening for a house we have not measured. The wind zone is the same HVHZ as the rest of
        Miami-Dade. The opening schedule is not the same as a Sunny Isles stack next door.
      </p>
      <p>
        <L href="/brands/cgi/">CGI</L> and <L href="/brands/pgt/">PGT</L> are the usual coastal
        conversations. <L href="/brands/custom-window-systems/">Custom Window Systems</L> when the
        architect&apos;s opening is not a catalog size. <L href="/brands/es-windows/">ES Windows</L>{" "}
        is rarely the estate spec. Hardware is a salt-air specification on the ocean elevation, not
        a county-wide upsell copied from an inland city.
      </p>
      <p>
        My Safe Florida Home is usually the wrong tool here. The grant caps — except for low-income
        applicants — at an insured dwelling value typically at or below $700,000, and it is only for
        a qualifying homesteaded site-built home permitted before January 1, 2008, up to $10,000,
        after the program inspection. Oceanfront estates commonly miss the value test. Do not start
        work before written approval. See <L href="/financing/">financing</L> and{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L>.
        Neighbors: <L href="/areas/sunny-isles-beach/">Sunny Isles Beach</L> and{" "}
        <L href="/areas/hallandale-beach/">Hallandale Beach</L>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Golden Beach is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact replacements generally
      need a current Miami-Dade NOA and a Town of Golden Beach permit. Direct ocean exposure changes
      design pressure and hardware. It does not create a private code.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Golden Beach + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["sunny-isles-beach", "aventura", "hallandale-beach", "bal-harbour"],
  faqs: [
    {
      question: "Is Golden Beach HVHZ?",
      answer:
        "Yes. The town is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current NOA and a Town of Golden Beach permit.",
    },
    {
      question: "Is Golden Beach part of Sunny Isles Beach?",
      answer:
        "No. They share ZIP 33160 on our list and a short stretch of A1A. Golden Beach is its own town of single-family oceanfront houses. Sunny Isles Beach is a tower city with its own permit office. Call (754) 600-4876.",
    },
    {
      question: "Do you publish Golden Beach window prices?",
      answer:
        "No. Large custom openings are priced from a measured list. County-wide illustrations live in our 2026 cost guide, linked from the Miami-Dade cost article. They are not a Golden Beach contract.",
    },
    {
      question: "Will My Safe Florida Home pay for a Golden Beach house?",
      answer:
        "Only if it meets every rule: homesteaded, site-built, permitted before January 1, 2008, program inspection, written approval before work, and — except for low-income applicants — insured dwelling value typically at or below $700,000. The grant is up to $10,000. See MySafeFLHome.com.",
    },
  ],
};

export const medley: CityPageOverride = {
  title: "Impact Windows & Doors in Medley, FL | Miami-Dade County",
  description:
    "Impact windows and doors in Medley, FL. Warehouses, storefronts, and a small residential count. Miami-Dade HVHZ / NOA. Town of Medley permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Medley</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Medley is a town of warehouses, distribution buildings, and offices, with very little
      single-family housing. It is still Miami-Dade HVHZ. A storefront or an industrial entry is
      not a ranch-window package. We pull the Town of Medley permit.
    </>
  ),
  countyBadge: "Medley · Miami-Dade HVHZ",
  uniqueHeading: "Commercial openings first. Do not quote a house template.",
  uniqueBody: (
    <>
      <p>
        NW South River Drive and the Okeechobee industrial corridor are the town. Storefront
        glazing, office punch-outs, and large entries are the calls we actually get. Overhead doors
        are a separate product from an impact window. We will not pretend a warehouse is a
        three-bed CBS in Hialeah. Where a residence does exist, it follows the same NOA rule as the
        rest of Miami-Dade. ZIP overlap with Doral and Miami Springs is why the town name matters.
      </p>
      <p>
        Office and storefront systems come from the same manufacturers when the opening fits:{" "}
        <L href="/brands/cgi/">CGI</L>, <L href="/brands/pgt/">PGT</L>,{" "}
        <L href="/brands/es-windows/">ES Windows</L>, or{" "}
        <L href="/brands/custom-window-systems/">CWS</L>. The specification is the opening, the
        design pressure, and the NOA — not a whole-house single-hung count. If the project is
        really a house next door in <L href="/areas/doral/">Doral</L> or{" "}
        <L href="/areas/miami-springs/">Miami Springs</L>, we permit that city instead.
      </p>
      <p>
        My Safe Florida Home does not apply to a warehouse or a leased office. It is a Florida DFS
        grant, up to $10,000, for a qualifying homesteaded site-built home permitted before January
        1, 2008, after the program inspection. Except for low-income applicants, insured dwelling
        value is typically at or below $700,000. That is a house program. Commercial work is a
        permit and a product approval. See{" "}
        <L href="/blog/impact-window-cost-miami-dade-county/">Miami-Dade impact window cost</L> for
        how opening type changes a quote, and <L href="/financing/">financing</L> for lender plans
        on residential jobs.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Medley is in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact storefronts, windows, and
      doors generally need a current Miami-Dade NOA and a Town of Medley permit. Commercial use
      does not move the town onto a Palm Beach FL#-only path.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Town of Medley + NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["doral", "miami-springs", "hialeah", "sweetwater"],
  faqs: [
    {
      question: "Do you install impact storefronts in Medley?",
      answer:
        "Yes. Medley work is usually commercial: storefronts, office glass, and entries. Those openings still need a current Miami-Dade NOA and a Town of Medley permit. Call (754) 600-4876.",
    },
    {
      question: "Is Medley a residential city?",
      answer:
        "Almost entirely commercial and industrial, with a small residential count. We do not use a single-family template. If the address is actually Doral or Miami Springs, that city's permit applies.",
    },
    {
      question: "Is Medley in the HVHZ?",
      answer:
        "Yes. The town is Miami-Dade HVHZ. An FL# that is often enough in Palm Beach is not the usual packet here.",
    },
    {
      question: "Can a Medley warehouse use My Safe Florida Home?",
      answer:
        "No. That grant is for a qualifying homesteaded, site-built home permitted before January 1, 2008, after a program inspection, up to $10,000. It is not a commercial program. See MySafeFLHome.com.",
    },
  ],
};


