import Link from "next/link";
import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/faqSchema";

type CityPageOverride = {
  title: string;
  description: string;
  h1: ReactNode;
  heroIntro: ReactNode;
  countyBadge: string;
  uniqueHeading: string;
  uniqueBody: ReactNode;
  codeParagraph: ReactNode;
  hurricaneZone: string;
  buildingCodeNote?: string;
  officeLine?: string;
  faqs: FaqItem[];
};

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">
      {children}
    </Link>
  );
}

export const fortLauderdale: CityPageOverride = {
  title: "Impact Windows in Fort Lauderdale | Broward HVHZ Installer",
  description:
    "Impact windows in Fort Lauderdale installed from our Hollywood shop. Las Olas, Victoria Park, and beach high-rises sit in Broward HVHZ — Miami-Dade NOA products, City of Fort Lauderdale permit. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Fort Lauderdale</span> — Installed from Hollywood
    </>
  ),
  heroIntro: (
    <>
      Fort Lauderdale is a service city, not our headquarters. Florida Impact Windows & Doors is based at
      3000 Stirling Rd in Hollywood. We install impact windows and doors on Las Olas Isles, Victoria Park,
      Rio Vista, Coral Ridge, and the beach high-rises — all inside Broward&apos;s High-Velocity Hurricane
      Zone, so the glass needs a current Miami-Dade NOA and a City of Fort Lauderdale permit.
    </>
  ),
  countyBadge: "Fort Lauderdale · Broward HVHZ",
  uniqueHeading: "Fort Lauderdale is HVHZ waterfront. The office is still Hollywood.",
  uniqueBody: (
    <>
      <p>
        A lot of Fort Lauderdale pages read like the company lives on Las Olas. We do not. Crews stage
        from Hollywood and run east on Stirling or I-95. The job is still a Fort Lauderdale permit —
        canals, barrier-island fetch, and older CBS openings in Sailboat Bend are not the same as a
        west Broward HOA ranch.
      </p>
      <p>
        East of US-1 (Harbor Beach, Lauderdale Beach, the A1A towers) is salt and high design pressure
        on large sliders. Inland Victoria Park and Colee Hammock is neighbor-tile debris and 1940s–60s
        openings that are rarely square.{" "}
        <InlineLink href="/brands/pgt/">PGT WinGuard</InlineLink> covers most single-family elevations.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> enters for oversized water-view sliders.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> is the value path when every
        opening needs to be protected.
      </p>
      <p>
        Opening protection for insurance is all-or-nothing on the{" "}
        <InlineLink href="/faq/do-impact-windows-lower-insurance-in-florida/">OIR-B1-1802</InlineLink>{" "}
        form. One leftover jalousie on a garage can kill the credit. We pull the City of Fort Lauderdale
        permit and install to the NOA.{" "}
        <InlineLink href="/get-estimate/">Get a Fort Lauderdale estimate</InlineLink> — (754) 600-4876.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Fort Lauderdale is entirely inside Broward&apos;s High-Velocity Hurricane Zone. Replacement impact
      windows and doors generally need HVHZ-tested assemblies — typically a current Miami-Dade NOA — and
      a City of Fort Lauderdale building permit. That is a stricter path than Palm Beach cities such as
      Boca Raton or West Palm Beach, where a Florida Product Approval (FL#) is often accepted.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Fort Lauderdale + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Florida Impact Windows & Doors based in Fort Lauderdale?",
      answer:
        "No. The shop and office is at 3000 Stirling Rd, Hollywood, FL 33021. Fort Lauderdale is a core Broward service city — we pull City of Fort Lauderdale permits and install there regularly. Call (754) 600-4876.",
    },
    {
      question: "Does Fort Lauderdale require Miami-Dade NOA impact windows?",
      answer:
        "Fort Lauderdale is in Broward HVHZ, so replacement impact windows and doors generally need HVHZ-approved assemblies. In practice that is a current Miami-Dade NOA that matches the model, glass, and anchors. We pull the city permit and keep the approval with the job.",
    },
    {
      question: "Do you install impact windows in Las Olas and the beach high-rises?",
      answer:
        "Yes. We install throughout Fort Lauderdale, including Las Olas Isles, Victoria Park, Rio Vista, Coral Ridge, Harbor Beach, and beach condominiums. High-rise and association jobs add board approval and often a heavier slider spec; the wind zone is still Broward HVHZ.",
    },
  ],
};

export const miami: CityPageOverride = {
  title: "Impact Windows in Miami | Miami-Dade NOA Installer",
  description:
    "Impact windows in Miami installed by Florida Impact Windows & Doors. Miami-Dade HVHZ — current NOA products, Miami-Dade permit, from our Hollywood shop. Brickell to Coconut Grove. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Miami</span> — Miami-Dade NOA, Hollywood Crew
    </>
  ),
  heroIntro: (
    <>
      Miami is Miami-Dade HVHZ from Brickell to Little Havana. Every replacement window and door needs a
      current Miami-Dade Notice of Acceptance and a county (or municipal) permit. We are the installer at
      3000 Stirling Rd in Hollywood — not a Miami factory and not a brand catalog with the city name
      swapped in.
    </>
  ),
  countyBadge: "Miami · Miami-Dade HVHZ",
  uniqueHeading: "Miami-Dade NOA is the document. The crew still leaves from Hollywood.",
  uniqueBody: (
    <>
      <p>
        Miami-Dade invented the large-missile test that the rest of Florida copies. If someone quotes an
        FL#-only product for a Miami house, that unit will not pass inspection. We submit the NOA that
        matches the opening, pull the permit, and meet the inspector.
      </p>
      <p>
        Coconut Grove and Coral Way still have 1920s–50s wood and CBS openings that are not square. Brickell
        and Edgewater are association packets and floor-to-ceiling sliders. Little Havana and Allapattah
        are often original jalousie or single-pane aluminum.{" "}
        <InlineLink href="/brands/pgt/">PGT</InlineLink> is the usual whole-house spec.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> is the conversation for tall condo glass.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> is the value aluminum line when
        you want every opening done.
      </p>
      <p>
        My Safe Florida Home can help some homesteaded homes permitted before January 1, 2008 — only
        after the program inspection, and only if you do not start work before written approval.{" "}
        <InlineLink href="/get-estimate/">Get a Miami estimate</InlineLink> or call (754) 600-4876.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      The City of Miami sits entirely in Miami-Dade&apos;s High-Velocity Hurricane Zone. Impact window
      replacement needs a current Miami-Dade NOA and a building permit. Florida Product Approval (FL#)
      alone is not enough here. That is the opposite of most Palm Beach jobs, where an FL# is often
      accepted.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Miami-Dade NOA required",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Can I install FL#-only impact windows in Miami?",
      answer:
        "No. Miami is Miami-Dade HVHZ. Replacement impact windows and doors generally need a current Miami-Dade Notice of Acceptance. An FL# that is valid in Palm Beach is not a substitute on a Miami permit.",
    },
    {
      question: "Do you pull Miami-Dade permits from Hollywood?",
      answer:
        "Yes. Florida Impact Windows & Doors is based at 3000 Stirling Rd, Hollywood, FL 33021, and Miami is a regular service city. We prepare the NOA packet and pull the permit for the address. Call (754) 600-4876.",
    },
    {
      question: "Which Miami neighborhoods do you install in?",
      answer:
        "We install throughout Miami, including Brickell, Coconut Grove, Little Havana, Coral Way, Wynwood, Edgewater, and Allapattah. High-rise associations add board rules; older neighborhoods add out-of-square openings. The code path is still Miami-Dade HVHZ.",
    },
  ],
};

export const weston: CityPageOverride = {
  title: "Impact Windows in Weston, FL | Broward HVHZ (Not Coastal)",
  description:
    "Impact windows in Weston, FL — Weston Hills, The Ridges, Windmill Ranch. Broward HVHZ / NOA products, City of Weston permit, installed from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Weston</span> — Everglades Fetch, Not Salt Air
    </>
  ),
  heroIntro: (
    <>
      Weston sits on the western edge of Broward with open Everglades fetch. That is why Wilma tore
      roofs and sent tile through glass here in 2005. It is still HVHZ — Miami-Dade NOA products and a
      City of Weston permit — but it is not a beach-salt job. We install from Hollywood.
    </>
  ),
  countyBadge: "Weston · Broward HVHZ",
  uniqueHeading: "Weston is HVHZ because of wind and neighbor tile, not ocean spray",
  uniqueBody: (
    <>
      <p>
        Master-planned streets in Weston Hills, Savanna, Indian Trace, and The Ridges already have
        HOA color and grid rules. The hurricane problem is west wind and tile from the next roof —
        not A1A corrosion. Specifying a marine coastal series on every bedroom window is usually the
        wrong quote.
      </p>
      <p>
        Most Weston two-stories are{" "}
        <InlineLink href="/services/window-types/single-hung/">single-hung</InlineLink> and{" "}
        <InlineLink href="/services/door-types/sliding-glass/">lanai sliders</InlineLink>.{" "}
        <InlineLink href="/brands/pgt/">PGT WinGuard</InlineLink> is the usual whole-house line.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> when covering every opening
        on a budget matters more. CGI is for the occasional tall or wide unit, not a trophy logo.
      </p>
      <p>
        Permits are City of Weston / Broward HVHZ.{" "}
        <InlineLink href="/get-estimate/">Get a Weston estimate</InlineLink> — (754) 600-4876.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Weston is in Broward HVHZ. Impact replacements need HVHZ-approved assemblies (typically a current
      Miami-Dade NOA) and a City of Weston permit. Palm Beach FL#-only products are the wrong packet
      for this address.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Weston + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Weston in the High-Velocity Hurricane Zone?",
      answer:
        "Yes. Weston is in Broward County HVHZ even though it is inland. Replacement impact windows generally need a current Miami-Dade NOA and a City of Weston permit.",
    },
    {
      question: "Do Weston HOAs approve impact windows?",
      answer:
        "Most Weston communities regulate frame color, grids, and door style. They are reviewing the street look, not whether you may have hurricane glass. We provide cut sheets for the ARB packet.",
    },
    {
      question: "PGT or ES Windows for a typical Weston two-story?",
      answer:
        "PGT WinGuard is the usual whole-house spec. ES Windows is the usual value spec when every opening needs to be covered. We install both from Hollywood and will price them on the same opening list.",
    },
  ],
};

export const pembrokePines: CityPageOverride = {
  title: "Impact Windows in Pembroke Pines | Broward HVHZ Installer",
  description:
    "Impact windows in Pembroke Pines — Chapel Trail, Silver Lakes, Century Village. Broward HVHZ / NOA, City of Pembroke Pines permit, from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Pembroke Pines</span>
    </>
  ),
  heroIntro: (
    <>
      Pembroke Pines is Broward HVHZ: Chapel Trail, Silver Lakes, Pembroke Falls, and Century Village.
      Many houses already have shutters from the 1990s–2000s build cycle. Owners shopping impact glass
      are usually done climbing a two-story gable before every cone. We install from Hollywood and pull
      the City of Pembroke Pines permit.
    </>
  ),
  countyBadge: "Pembroke Pines · Broward HVHZ",
  uniqueHeading: "Pembroke Pines: shutter-house streets that want glass that stays on the house",
  uniqueBody: (
    <>
      <p>
        West Pembroke Pines (Chapel Trail, Silver Lakes, The Estates) took Wilma&apos;s Everglades-side
        punch. Tile became missiles. East and central streets are denser CBS and HOA color rules.
        Century Village is a different conversation — association approval and often smaller, repeated
        openings.
      </p>
      <p>
        <InlineLink href="/brands/pgt/">PGT</InlineLink> for a mixed whole-house list.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> when the goal is every opening
        protected.{" "}
        <InlineLink href="/faq/do-i-still-need-shutters-with-impact-windows/">
          You do not stack shutters on the same opening
        </InlineLink>{" "}
        once that opening is impact-rated.{" "}
        <InlineLink href="/get-estimate/">Get a Pembroke Pines estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Pembroke Pines is Broward HVHZ. Impact replacement needs HVHZ-approved products (typically a
      current Miami-Dade NOA) and a City of Pembroke Pines permit. Existing shutters can be legal
      opening protection; they do not skip the permit when you switch those openings to glass.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Pembroke Pines + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Do I need impact windows in Pembroke Pines if I already have shutters?",
      answer:
        "Not for code, if the shutters are approved and you actually close them. Most owners shopping impact glass want to stop deploying panels on a two-story house. Once an opening is impact-rated, you do not need shutters on that opening.",
    },
    {
      question: "Is Pembroke Pines HVHZ?",
      answer:
        "Yes. The entire city is in Broward’s High-Velocity Hurricane Zone. Replacement impact windows generally need a current Miami-Dade NOA and a City of Pembroke Pines permit.",
    },
    {
      question: "Do you install in Century Village and Chapel Trail?",
      answer:
        "Yes. Century Village jobs add association rules. Chapel Trail and Silver Lakes are typical two-story CBS with lanai sliders. Both are City of Pembroke Pines / Broward HVHZ. Call (754) 600-4876.",
    },
  ],
};

export const coralSprings: CityPageOverride = {
  title: "Impact Windows in Coral Springs | Broward HVHZ Installer",
  description:
    "Impact windows in Coral Springs — Heron Bay, Eagle Trace, Ramblewood. Broward HVHZ / NOA, City of Coral Springs permit, from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Coral Springs</span>
    </>
  ),
  heroIntro: (
    <>
      Coral Springs is inland Broward HVHZ. Wilma sent mature-tree debris through glass across Heron
      Bay, Eagle Trace, Ramblewood, and the University Drive corridor. The permit is City of Coral
      Springs. The shop is Hollywood.
    </>
  ),
  countyBadge: "Coral Springs · Broward HVHZ",
  uniqueHeading: "Coral Springs: tree debris and HOA grids, not ocean hardware",
  uniqueBody: (
    <>
      <p>
        The 1970s–90s housing stock still has a lot of original aluminum. The risk is oaks and pines,
        not salt. HOAs here care about white vs bronze frames as much as they care about the stamp on
        the glass. We submit the ARB packet and the NOA together.
      </p>
      <p>
        <InlineLink href="/brands/pgt/">PGT WinGuard</InlineLink> is the usual spec.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> when covering every opening
        matters more than a broader catalog.{" "}
        <InlineLink href="/get-estimate/">Get a Coral Springs estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Coral Springs is Broward HVHZ. Impact replacements need HVHZ-approved assemblies (typically a
      current Miami-Dade NOA) and a City of Coral Springs permit.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Coral Springs + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Coral Springs in the HVHZ?",
      answer:
        "Yes. Coral Springs is in Broward County’s High-Velocity Hurricane Zone. Replacement impact windows generally need a current Miami-Dade NOA and a City of Coral Springs permit.",
    },
    {
      question: "Do Coral Springs HOAs allow impact windows?",
      answer:
        "Most associations allow hurricane glass and regulate color, grids, and door style. We provide manufacturer cut sheets for the architectural review packet.",
    },
    {
      question: "Do you pull City of Coral Springs permits?",
      answer:
        "Yes. Florida Impact Windows & Doors pulls the City of Coral Springs / Broward permit and installs to the NOA from our Hollywood shop. Call (754) 600-4876.",
    },
  ],
};

export const plantation: CityPageOverride = {
  title: "Impact Windows in Plantation, FL | Broward HVHZ Installer",
  description:
    "Impact windows in Plantation — Jacaranda, Plantation Acres, Central Park. Broward HVHZ / NOA, City of Plantation permit, from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Plantation</span>
    </>
  ),
  heroIntro: (
    <>
      Plantation is mid-Broward HVHZ: Jacaranda oaks, Plantation Acres acreage, and Central Park
      streets. Wilma dropped trees through glass here. We install from Hollywood and pull the City of
      Plantation permit — not a Fort Lauderdale HQ story.
    </>
  ),
  countyBadge: "Plantation · Broward HVHZ",
  uniqueHeading: "Plantation: Jacaranda trees and mid-county CBS, not a beach template",
  uniqueBody: (
    <>
      <p>
        Plantation Acres still has larger lots and some custom openings. Jacaranda and Pine Island
        Ridge are denser 1970s–90s CBS. The debris story is trees and tile, not ocean fetch.{" "}
        <InlineLink href="/brands/pgt/">PGT</InlineLink> and{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> cover most of those lists.{" "}
        <InlineLink href="/get-estimate/">Get a Plantation estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Plantation is Broward HVHZ. Impact replacements need HVHZ-approved products (typically a current
      Miami-Dade NOA) and a City of Plantation permit.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Plantation + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Plantation in the HVHZ?",
      answer:
        "Yes. Plantation is in Broward HVHZ. Replacement impact windows generally need a current Miami-Dade NOA and a City of Plantation permit.",
    },
    {
      question: "Do you install in Jacaranda and Plantation Acres?",
      answer:
        "Yes. Jacaranda is typical mid-county CBS with tree debris. Plantation Acres has larger lots and more custom openings. Both use the City of Plantation / Broward HVHZ path.",
    },
    {
      question: "Where is the company based?",
      answer:
        "3000 Stirling Rd, Hollywood, FL 33021. Plantation is a regular Broward service city. Call (754) 600-4876.",
    },
  ],
};

export const davie: CityPageOverride = {
  title: "Impact Windows in Davie, FL | Broward HVHZ Installer",
  description:
    "Impact windows in Davie — horse country, Hawkes Bluff, Nova area. Broward HVHZ / NOA, Town of Davie permit, from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Davie</span>
    </>
  ),
  heroIntro: (
    <>
      Davie mixes horse-country acreage with HOA subdivisions west of University. It is still Broward
      HVHZ. Open lots saw Wilma and Irma debris that suburban streets did not. We pull the Town of
      Davie permit from the Hollywood shop.
    </>
  ),
  countyBadge: "Davie · Broward HVHZ",
  uniqueHeading: "Davie: ranch openings and HOA streets on the same HVHZ permit",
  uniqueBody: (
    <>
      <p>
        Horse Country and Rolling Hills have wider sliders and some custom shapes. Hawkes Bluff and
        Shenandoah look like any west-Broward two-story. One quote sheet does not fit both.{" "}
        <InlineLink href="/brands/pgt/">PGT</InlineLink> for standard lists.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> when a lanai wall is oversized.{" "}
        <InlineLink href="/get-estimate/">Get a Davie estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Davie is Broward HVHZ. Impact replacements need HVHZ-approved assemblies (typically a current
      Miami-Dade NOA) and a Town of Davie permit.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "Town of Davie + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Davie in the HVHZ?",
      answer:
        "Yes. The Town of Davie is in Broward HVHZ. Replacement impact windows generally need a current Miami-Dade NOA and a Town of Davie permit.",
    },
    {
      question: "Do you install impact windows on Davie horse properties?",
      answer:
        "Yes. Larger ranch openings and custom shapes are a regular Davie conversation. We measure those openings instead of copying a subdivision price list. Call (754) 600-4876.",
    },
    {
      question: "Davie vs Weston — same code?",
      answer:
        "Both are Broward HVHZ and typically need a Miami-Dade NOA. The municipality on the permit changes (Town of Davie vs City of Weston). Open lots in Davie often need a different slider spec than a Weston HOA two-story.",
    },
  ],
};

export const aventura: CityPageOverride = {
  title: "Impact Windows in Aventura | Miami-Dade Condo & High-Rise",
  description:
    "Impact windows in Aventura — Turnberry, Williams Island, Aventura Lakes. Miami-Dade HVHZ / NOA, association approval, from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Aventura</span> — Condos, NOA, Board Packets
    </>
  ),
  heroIntro: (
    <>
      Aventura is Miami-Dade HVHZ and mostly towers: Turnberry, Williams Island, Mystic Pointe, plus
      Aventura Lakes low-rises. Irma showed what aging 1980s–90s glass does on Biscayne Boulevard.
      We install from Hollywood. The bottleneck is usually the association, not the wind zone label.
    </>
  ),
  countyBadge: "Aventura · Miami-Dade HVHZ",
  uniqueHeading: "Aventura jobs are association packets as much as they are NOA packets",
  uniqueBody: (
    <>
      <p>
        High-rise sliders need the design pressure and missile rating on the elevation, not a
        suburban single-hung catalog.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> and{" "}
        <InlineLink href="/brands/pgt/">PGT</InlineLink> both show up. Single-family lakes homes
        are a more typical{" "}
        <InlineLink href="/brands/es-windows/">ES</InlineLink> or PGT whole-house list.{" "}
        <InlineLink href="/get-estimate/">Get an Aventura estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Aventura is Miami-Dade HVHZ. Impact replacements need a current Miami-Dade NOA and a building
      permit. Condo and co-op buildings add association and, often, engineer or threshold rules on
      top of the county packet.
    </>
  ),
  hurricaneZone: "HVHZ (Miami-Dade)",
  buildingCodeNote: "Miami-Dade NOA + association approval",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Do Aventura condos require Miami-Dade NOA windows?",
      answer:
        "Yes. Aventura is Miami-Dade HVHZ. Replacement glass generally needs a current NOA. The association may also specify color, series, and contractor insurance before you can order.",
    },
    {
      question: "Can one unit replace windows if the rest of the building has not?",
      answer:
        "Only if the association allows it. Many Aventura buildings require a building-wide spec so elevations match. We will not order a series the board has already rejected on your stack.",
    },
    {
      question: "Do you handle Aventura association paperwork?",
      answer:
        "We provide cut sheets, NOA pages, and insurance documents the board typically asks for. The association still has to approve. Call (754) 600-4876.",
    },
  ],
};

export const delrayBeach: CityPageOverride = {
  title: "Impact Windows in Delray Beach | Palm Beach (Not HVHZ)",
  description:
    "Impact windows in Delray Beach. Palm Beach is a wind-borne debris region, not HVHZ — FL# products are often accepted. Pineapple Grove, Seagate, High Point. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">Delray Beach</span> — Palm Beach Rules
    </>
  ),
  heroIntro: (
    <>
      Delray Beach is Palm Beach County: wind-borne debris region, not Broward HVHZ. A Florida
      Product Approval (FL#) is often accepted. The City of Delray Beach signs the permit. We still
      install PGT, CGI, and ES from Hollywood — the paperwork is what changes.
    </>
  ),
  countyBadge: "Delray Beach · Palm Beach · not HVHZ",
  uniqueHeading: "Delray is not Hollywood with a find-replace. It is not HVHZ.",
  uniqueBody: (
    <>
      <p>
        Atlantic Avenue storefronts and Pineapple Grove cottages are a historic-look conversation.
        Seagate is salt and higher wind on the ocean side. High Point is a large senior community
        with repeated openings and association rules. Frances, Jeanne, and Wilma already made the
        inland case for glass that stays on the house.
      </p>
      <p>
        If a quote insists every Delray window needs a Miami-Dade NOA, ask why. NOA products are
        accepted because they exceed the local rule; they are not automatically required.{" "}
        <InlineLink href="/get-estimate/">Get a Delray estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Delray Beach is in Palm Beach County&apos;s wind-borne debris region, not the HVHZ that covers
      Miami-Dade and Broward. Impact windows still need a permit and a current product approval; an
      FL# is often accepted. We submit what the City of Delray Beach wants for the address.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Delray Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is Delray Beach in the HVHZ?",
      answer:
        "No. Delray Beach is in Palm Beach County, a wind-borne debris region under the Florida Building Code. You still need permitted, approved impact products. The approval path is often an FL# rather than a Miami-Dade NOA on every opening.",
    },
    {
      question: "Will Delray accept an FL# instead of a Miami-Dade NOA?",
      answer:
        "Often yes. The City of Delray Beach still decides what goes on the permit for your address and product. We pull the permit and submit the approval that matches the unit — we do not copy a Broward NOA packet by default.",
    },
    {
      question: "Do you install downtown and in High Point?",
      answer:
        "Yes. Downtown and Pineapple Grove often need profiles that fit older openings. High Point adds association review. Both are City of Delray Beach jobs served from Hollywood. Call (754) 600-4876.",
    },
  ],
};

export const westPalmBeach: CityPageOverride = {
  title: "Impact Windows in West Palm Beach | Palm Beach FL# Path",
  description:
    "Impact windows in West Palm Beach. Palm Beach County is not HVHZ — FL# products are often accepted. El Cid, Flamingo Park, downtown. Installed from Hollywood. Free estimates. (754) 600-4876.",
  h1: (
    <>
      Impact Windows in <span className="gradient-text">West Palm Beach</span> — Not Broward HVHZ
    </>
  ),
  heroIntro: (
    <>
      West Palm Beach is the Palm Beach County seat and it is not in the High-Velocity Hurricane
      Zone. El Cid and Flamingo Park still need permits and approved glass — often an FL#. Downtown
      towers and Northwood are different openings. We install from Hollywood.
    </>
  ),
  countyBadge: "West Palm Beach · Palm Beach · not HVHZ",
  uniqueHeading: "West Palm is Frances-and-Jeanne country, not a Miami-Dade NOA mandate",
  uniqueBody: (
    <>
      <p>
        The 1928 Okeechobee storm and the 2004 Frances/Jeanne pair are why older neighborhoods here
        take openings seriously. Historic boards in El Cid and Flamingo Park care about sash
        proportion. Rosemary Square and the towers care about sliders and association rules.
      </p>
      <p>
        <InlineLink href="/brands/pgt/">PGT</InlineLink> for most single-family lists.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> for oversized or high-rise glass.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> when every opening needs to
        be done.{" "}
        <InlineLink href="/get-estimate/">Get a West Palm Beach estimate</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      West Palm Beach is in Palm Beach County&apos;s wind-borne debris region, not HVHZ. A current
      Florida Product Approval (FL#) is often accepted. Miami-Dade NOA products are allowed because
      they exceed the requirement; they are not automatically required on every West Palm opening.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of West Palm Beach · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  faqs: [
    {
      question: "Is West Palm Beach in the HVHZ?",
      answer:
        "No. West Palm Beach is in Palm Beach County, outside the High-Velocity Hurricane Zone that covers Miami-Dade and Broward. You still need a permit and an approved impact product. An FL# is often accepted.",
    },
    {
      question: "Do historic West Palm neighborhoods allow impact windows?",
      answer:
        "El Cid, Flamingo Park, and similar districts typically allow hurricane glass if the profile matches the opening. The board is reviewing look, not whether you may have laminated glass. We provide cut sheets.",
    },
    {
      question: "Do you drive up from Hollywood for West Palm jobs?",
      answer:
        "Yes. Florida Impact Windows & Doors is at 3000 Stirling Rd, Hollywood, FL 33021. West Palm Beach is a regular Palm Beach service city. Call (754) 600-4876.",
    },
  ],
};
