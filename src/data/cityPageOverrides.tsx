import Link from "next/link";
import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/faqSchema";
import {
  aventura,
  coralSprings,
  davie,
  delrayBeach,
  fortLauderdale,
  miami,
  pembrokePines,
  plantation,
  weston,
  westPalmBeach,
} from "./cityHubOverrides";
import {
  daniaBeach,
  deerfieldBeach,
  hallandaleBeach,
  hillsboroBeach,
  lauderdaleByTheSea,
  lighthousePoint,
  pompanoBeach,
  seaRanchLakes,
} from "./browardCoastalHubs";
import {
  balHarbour,
  bayHarborIslands,
  coralGables,
  cutlerBay,
  doral,
  floridaCity,
  goldenBeach,
  hialeah,
  hialeahGardens,
  homestead,
  kendall,
  keyBiscayne,
  medley,
  miamiBeach,
  miamiGardens,
  miamiLakes,
  miamiShores,
  miamiSprings,
  northMiami,
  northMiamiBeach,
  palmettoBay,
  pinecrest,
  southMiami,
  sunnyIslesBeach,
  surfside,
  sweetwater,
  westchester,
} from "./miamiDadeHubs";
import {
  atlantis,
  boyntonBeach,
  brinyBreezes,
  greenacres,
  gulfStream,
  highlandBeach,
  hypoluxo,
  junoBeach,
  jupiter,
  lakePark,
  lakeWorthBeach,
  lantana,
  loxahatchee,
  manalapan,
  northPalmBeach,
  oceanRidge,
  palmBeachGardens,
  palmBeachTown,
  palmSpringsVillage,
  portStLucie,
  rivieraBeach,
  royalPalmBeach,
  southPalmBeach,
  tequesta,
  wellington,
} from "./palmBeachHubs";
import {
  coconutCreek,
  cooperCity,
  lauderdaleLakes,
  lauderhill,
  margate,
  northLauderdale,
  oaklandPark,
  parkland,
  southwestRanches,
  sunrise,
  tamarac,
  westPark,
  wiltonManors,
} from "./browardInlandHubs";

export interface CityPageOverride {
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
  /** Geographically adjacent hubs, used for the nearby-city links. */
  nearbySlugs?: string[];
  /**
   * Shown in quick facts and schema when the directory county is wrong.
   * Port St. Lucie stays grouped with Palm Beach hubs but is St. Lucie County.
   */
  countyLabel?: string;
  faqs: FaqItem[];
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-palm-600 font-semibold hover:text-palm-700 underline underline-offset-2">
      {children}
    </Link>
  );
}

const hollywood: CityPageOverride = {
  title: "Impact Windows & Doors in Hollywood, FL | Broward County",
  description:
    "Impact windows and doors in Hollywood, FL, installed from our shop at 3000 Stirling Rd. Broward HVHZ / Miami-Dade NOA products, City of Hollywood permit. Call (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Hollywood</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Hollywood is our home base. Florida Impact Windows & Doors measures, permits, and installs impact windows
      and doors from our shop and office at 3000 Stirling Rd, Hollywood, FL 33021 — not a remote call center.
      Beach condos along the Broadwalk, 1920s homes in Hollywood Lakes, and CBS ranches in Hollywood Hills all
      sit in Broward&apos;s High-Velocity Hurricane Zone, so the glass we set has to carry a current Miami-Dade
      NOA, not a generic inland label.
    </>
  ),
  countyBadge: "Hollywood HQ · Broward HVHZ",
  uniqueHeading: "A Hollywood installer, not a brand catalog with the city name swapped in",
  uniqueBody: (
    <>
      <p>
        Most &quot;impact windows Hollywood&quot; pages could be Fort Lauderdale with a find-replace. This one
        should not. We stage product and dispatch crews from 3000 Stirling Road — just west of I-95, a short
        run to Hollywood Beach, Hollywood Lakes, Emerald Hills, Oakridge, and the 33021 neighborhoods around
        the shop. If you want to walk a{" "}
        <InlineLink href="/brands/pgt/">PGT WinGuard</InlineLink> sample or compare an{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> aluminum single-hung next to a{" "}
        <InlineLink href="/brands/cgi/">CGI Sentinel</InlineLink> slider, you can do that here instead of
        guessing from a brochure.
      </p>
      <p>
        Hollywood is one city with two wind problems. East of US-1, salt spray and ocean fetch chew hardware
        and raise design pressure on Broadwalk condos and low-rise buildings along A1A. West toward Hollywood
        Hills and Emerald Hills, the threat is less salt and more neighbor debris — roof tile, oaks, and the
        same Wilma-style missiles that punched inland glass in 2005. The permit path is the same either way:
        City of Hollywood / Broward HVHZ. We pull the permit, match anchors to the NOA, and meet the inspector.
      </p>
      <p>
        Airport-adjacent streets (FLL sits on Hollywood&apos;s north edge) are why a lot of 33021 and 33019
        owners ask about laminated glass even in a quiet week. Impact interlayers cut jet and I-95 noise
        better than the original single-pane aluminum that is still on many 1950s–60s Hollywood Hills ranches.
        That is a daily reason to replace, not a storm-season talking point.
      </p>
      <p>
        Brand fit from this shop: PGT WinGuard is the usual whole-house pick for typical Hollywood openings —
        vinyl or aluminum, single-hung and{" "}
        <InlineLink href="/services/door-types/sliding-glass/">sliding glass doors</InlineLink> from one factory.
        CGI is the conversation when a beach condo or a wide water-view slider needs a heavier coastal
        assembly. ES Windows is the conversation when you want every opening protected without stretching
        the budget, and you can wait for a South Florida-made aluminum line. We also install CWS when the
        opening calls for it. We are the dealer-installer — PGT, CGI, and ES manufacture; we measure, permit,
        and set the units.
      </p>
      <p>
        Financing and paperwork live on the same job:{" "}
        <InlineLink href="/financing/">financing options</InlineLink>, a free{" "}
        <InlineLink href="/get-estimate/">in-home estimate</InlineLink>, and straight answers on{" "}
        <InlineLink href="/faq/do-i-need-permit-for-impact-window-installation/">Hollywood permits</InlineLink>,{" "}
        <InlineLink href="/faq/do-impact-windows-lower-insurance-in-florida/">insurance credits</InlineLink>,
        and{" "}
        <InlineLink href="/brands/pgt/#compare">PGT vs ES</InlineLink> if you are still choosing a line.
        Call (754) 600-4876 — that number rings the Hollywood office.
      </p>
      <p>
        A homesteaded Hollywood house permitted before January 1, 2008 may qualify for My Safe
        Florida Home, the state grant of up to $10,000 after a program inspection — not the same
        thing as <InlineLink href="/financing/">financing</InlineLink>. Except for low-income
        applicants, insured value is typically at or below $700,000, and starting before written
        approval can disqualify the project. Broadwalk condominiums are usually an association
        job instead. County pricing context is{" "}
        <InlineLink href="/blog/impact-window-cost-broward-county/">impact window cost in Broward</InlineLink>.
        The next cities over are <InlineLink href="/areas/hallandale-beach/">Hallandale Beach</InlineLink>,{" "}
        <InlineLink href="/areas/west-park/">West Park</InlineLink>,{" "}
        <InlineLink href="/areas/dania-beach/">Dania Beach</InlineLink>, and{" "}
        <InlineLink href="/areas/pembroke-pines/">Pembroke Pines</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Hollywood is in Broward County&apos;s High-Velocity Hurricane Zone. New impact windows and doors here
      need HVHZ-tested assemblies — typically a current Miami-Dade Notice of Acceptance — and a City of
      Hollywood permit with inspection. That is a stricter path than Palm Beach County, where a Florida
      Product Approval (FL#) is often accepted. We handle the Broward paperwork from the Stirling Road shop
      so you are not the one standing in line with an NOA packet.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Hollywood + FBC / NOA",
  officeLine: "3000 Stirling Rd, 33021 (HQ)",
  nearbySlugs: ["hallandale-beach", "west-park", "dania-beach", "pembroke-pines", "davie"],
  faqs: [
    {
      question: "Where is Florida Impact Windows & Doors in Hollywood?",
      answer:
        "Our shop and office is at 3000 Stirling Rd, Hollywood, FL 33021. Hollywood is the home base — estimates, product staging, and installation crews run from this address, not from a virtual storefront. Call (754) 600-4876.",
    },
    {
      question: "Are impact windows in Hollywood required to be Miami-Dade NOA products?",
      answer:
        "Hollywood is in Broward County’s High-Velocity Hurricane Zone, so replacement impact windows and doors generally need HVHZ-approved assemblies. In practice that means a current Miami-Dade NOA that matches the model, glass, and anchor schedule the inspector will see. We pull the City of Hollywood permit and keep the approval documents with the job.",
    },
    {
      question: "Which impact window brand fits Hollywood Beach vs Hollywood Hills?",
      answer:
        "Beach and A1A condos often need higher design-pressure, corrosion-resistant assemblies — CGI Sentinel is a common conversation for large sliders and salt exposure. Typical Hollywood Hills and Emerald Hills houses usually land on PGT WinGuard for a whole-house mix of single-hungs and sliders. ES Windows is the value path when you want every opening protected on a tighter budget. We install all three from Stirling Road and will not push a coastal series on an inland ranch just because it costs more.",
    },
    {
      question: "Do you pull the permit for Hollywood impact window replacement?",
      answer:
        "Yes. Florida Impact Windows & Doors pulls the City of Hollywood / Broward permit, schedules inspection, and installs to the product approval. Unpermitted glass is a problem at resale and on a wind-mitigation form. Permits are part of the job, not a homeowner homework assignment.",
    },
    {
      question: "How do I get a free impact window estimate in Hollywood?",
      answer:
        "Request a free in-home estimate or call (754) 600-4876. A Hollywood job starts with measurements from the Stirling Road crew — not a phone-book price per window. We will recommend PGT, ES Windows, or CGI against your openings, HOA rules, and budget.",
    },
  ],
};

const bocaRaton: CityPageOverride = {
  title: "Impact Windows & Doors in Boca Raton, FL | Palm Beach County",
  description:
    "Impact windows and doors in Boca Raton, FL. Palm Beach wind-borne debris, not HVHZ — an FL# is often accepted. East Boca salt and west Boca club reviews. City permit. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Boca Raton</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Searching for impact windows in Boca Raton should not land you on a Broward template that calls every
      city an HVHZ. Boca is Palm Beach County: a wind-borne debris region where a current Florida Product
      Approval (FL#) is often accepted, and the City of Boca Raton — not Miami-Dade — signs the permit.
      We still install the same PGT, CGI, and ES Windows lines we set in Hollywood; the paperwork and the
      country-club design review are what change.
    </>
  ),
  countyBadge: "Palm Beach · not HVHZ",
  uniqueHeading: "Why Boca Raton is a different job than Hollywood or Miramar",
  uniqueBody: (
    <>
      <p>
        Hollywood and Miramar are Broward HVHZ. Boca Raton is not. Inspectors here are looking for a product
        approval that matches the opening and the Florida Building Code wind-borne debris rules for this
        municipality — often an FL# — rather than requiring a Miami-Dade NOA on every unit the way Broward
        typically does. If someone quotes you &quot;HVHZ-only&quot; glass for a West Boca CBS house without
        explaining the difference, they are recycling a Broward script. We pull the City of Boca Raton
        permit and submit the approval the building department actually wants.
      </p>
      <p>
        East Boca (Mizner Park, Royal Palm Yacht, ocean and Intracoastal streets) still behaves like a
        coastal job: salt, higher wind on exposed elevations, and HOAs that care about bronze vs white
        frames as much as they care about the stamp on the glass. West Boca and the country-club belt —
        Boca West, Woodfield, Broken Sound, The Polo Club — is a different bottleneck. Architectural
        review boards want sightlines, grids, and colors that match the Mizner-influenced street. The
        hurricane problem is still real (Frances and Jeanne in 2004, then Wilma), but the delay is often
        the ARB packet, not the wind zone label.
      </p>
      <p>
        That is why brand choice in Boca is about openings and review boards, not a trophy logo.{" "}
        <InlineLink href="/brands/pgt/">PGT</InlineLink> WinGuard covers most single-family elevations and
        is easy to keep consistent across a whole house.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> (Sentinel / Estate) is the conversation for
        oversized sliders, golf-course glass walls, and east-side buildings that need a heavier coastal
        assembly. <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> is the value line when
        you want every opening done and the ARB will accept a clean aluminum profile. We are the installer
        based at 3000 Stirling Rd in Hollywood — about a straight I-95 run north — and we treat Boca as a
        regular service city, not an afterthought.
      </p>
      <p>
        If you are comparing Boca quotes, read{" "}
        <InlineLink href="/blog/pgt-vs-cgi-impact-windows-comparison/">PGT vs CGI</InlineLink> and{" "}
        <InlineLink href="/brands/pgt/#compare">PGT vs ES Windows</InlineLink>, then look at{" "}
        <InlineLink href="/faq/do-i-need-permit-for-impact-window-installation/">who pulls the permit</InlineLink>{" "}
        and <InlineLink href="/financing/">financing</InlineLink>.{" "}
        <InlineLink href="/services/window-types/casement/">Casement</InlineLink> and{" "}
        <InlineLink href="/services/door-types/sliding-glass/">sliding glass doors</InlineLink> show up
        constantly on Boca club homes; picture windows and French doors show up on the Mizner elevations.
        A homesteaded site-built Boca house permitted before January 1, 2008 can sometimes use My
        Safe Florida Home: Florida DFS, up to $10,000, after the program inspection. Except for
        low-income applicants, insured dwelling value is typically at or below $700,000. Many club
        and east-side addresses miss that value test. Do not start before written approval. Condo
        and country-club projects are often an association path, not that grant. Read{" "}
        <InlineLink href="/financing/">financing</InlineLink> and{" "}
        <InlineLink href="/blog/impact-window-cost-palm-beach-county/">Palm Beach impact window cost</InlineLink>.
        The county line is real: <InlineLink href="/areas/deerfield-beach/">Deerfield Beach</InlineLink>{" "}
        is Broward HVHZ. <InlineLink href="/areas/highland-beach/">Highland Beach</InlineLink> and{" "}
        <InlineLink href="/areas/delray-beach/">Delray Beach</InlineLink> stay on Palm Beach rules.
        Start with a free <InlineLink href="/get-estimate/">Boca Raton estimate</InlineLink> — (754) 600-4876.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Boca Raton is in Palm Beach County&apos;s wind-borne debris region. It is not in the High-Velocity
      Hurricane Zone that covers Miami-Dade and Broward. Impact windows still need a building permit and a
      current product approval; a Florida Product Approval (FL#) is often accepted here, whereas Hollywood
      and Miramar jobs typically need a Miami-Dade NOA. We submit what the City of Boca Raton building
      department requires for your address — we do not copy a Broward HVHZ packet onto a Boca permit by
      default.
    </>
  ),
  hurricaneZone: "Wind-borne debris (not HVHZ)",
  buildingCodeNote: "City of Boca Raton · FL# often accepted",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["deerfield-beach", "highland-beach", "delray-beach", "parkland"],
  faqs: [
    {
      question: "Is Boca Raton in the High-Velocity Hurricane Zone?",
      answer:
        "No. Boca Raton is in Palm Beach County, which is a wind-borne debris region under the Florida Building Code, not the HVHZ that covers Miami-Dade and Broward. You still need permitted, approved impact products (or another approved protection method). The approval path is often a Florida Product Approval (FL#) rather than a Miami-Dade NOA on every opening.",
    },
    {
      question: "Will Boca Raton accept an FL# instead of a Miami-Dade NOA?",
      answer:
        "Often yes. Palm Beach municipalities commonly accept current Florida Product Approvals that meet local wind-borne debris rules. The City of Boca Raton still decides what goes on the permit for your address, elevation, and product. We pull the permit and submit the approval that matches the unit we will install — we do not assume a Broward NOA package is required, or that any FL# will pass without checking the model.",
    },
    {
      question: "Do Boca country clubs and HOAs approve impact windows?",
      answer:
        "Most Boca Raton country-club communities (Boca West, Woodfield, Broken Sound, and similar) require architectural review for frame color, grids, and door style even when the glass is impact-rated. They are regulating the look of the street, not whether you are allowed hurricane protection. We provide cut sheets for the ARB packet and will not order a series the board has already rejected on your street.",
    },
    {
      question: "Why install impact windows in Boca Raton if I am not on the beach?",
      answer:
        "West Boca and the club communities still see hurricane debris — Frances and Jeanne in 2004 and Wilma in 2005 made that obvious inland. Impact glass is also the product that is always in place (no shutter crew), quieter on Glades and Palmetto Park traffic, and easier to document for insurance than a garage full of panels. Palm Beach rules are not a reason to leave original 1980s aluminum in the wall.",
    },
    {
      question: "Do you install impact windows in Boca Raton from the Hollywood shop?",
      answer:
        "Yes. Florida Impact Windows & Doors is based at 3000 Stirling Rd, Hollywood, FL 33021, and Boca Raton is a regular Palm Beach service city. We handle City of Boca Raton permitting, not a Broward form with the city name changed. Call (754) 600-4876 for a free estimate.",
    },
  ],
};

const miramar: CityPageOverride = {
  title: "Impact Windows & Doors in Miramar, FL | Broward County",
  description:
    "Impact windows and doors in Miramar, FL — Sunset Lakes, Riviera Isles, Town Center, and west Miramar. Broward HVHZ / NOA products, City of Miramar permit, from Hollywood. (754) 600-4876.",
  h1: (
    <>
      Impact Windows &amp; Doors in <span className="gradient-text">Miramar</span>, FL
    </>
  ),
  heroIntro: (
    <>
      Miramar homeowners searching for hurricane windows are usually not shopping a beach condo. They are
      in Sunset Lakes, Riviera Isles, Vizcaya, or west toward the Everglades, looking at two-story CBS homes
      that already &quot;meet code&quot; with shutters — and they want glass that is on the house every day
      of hurricane season. Miramar is Broward HVHZ. We install PGT, CGI, and ES Windows from our Hollywood
      shop and pull the City of Miramar permit.
    </>
  ),
  countyBadge: "Miramar · Broward HVHZ",
  uniqueHeading: "Hurricane windows in Miramar: the shutter house vs the glass house",
  uniqueBody: (
    <>
      <p>
        A lot of Miramar housing went up after 2000 with accordion or panel shutters as the legal opening
        protection. That is why &quot;hurricane windows Miramar&quot; and &quot;impact windows Miramar&quot;
        are the same shopping trip: people are tired of the pre-storm sprint on Miramar Parkway, Red Road,
        and the gated streets in Sunset Lakes. Permanent laminated glass does not make the wind lighter.
        It means you are not climbing a two-story gable with a panel while the cone is still wobbling.
      </p>
      <p>
        West Miramar is the wind story, not the salt story. Open Everglades fetch to the west raised
        Wilma&apos;s punch on newer roofs; tile from one house became the missile for the next. Impact
        windows are how you stop a neighbor&apos;s roof from becoming your living-room floor. Town Center
        and the mixed-use buildings along Miramar Parkway are a different product conversation (storefront
        and larger aluminum units). The residential cores — Sunset Falls, Island Reserve, Riviera Isles —
        are mostly standard single-hungs,{" "}
        <InlineLink href="/services/window-types/sliding/">horizontal rollers</InlineLink>, and{" "}
        <InlineLink href="/services/door-types/sliding-glass/">two- and three-panel sliders</InlineLink>{" "}
        on the lanai.
      </p>
      <p>
        Brand fit for a typical Miramar two-story:{" "}
        <InlineLink href="/brands/pgt/">PGT WinGuard</InlineLink> when you want one catalog for windows and
        doors and a name inspectors see constantly in Broward.{" "}
        <InlineLink href="/brands/es-windows/">ES Windows</InlineLink> when the goal is every opening
        protected and a South Florida-made line with a shorter production story.{" "}
        <InlineLink href="/brands/cgi/">CGI</InlineLink> when a lanai slider or a tall opening needs a
        higher design-pressure assembly than a builder-grade shutter house was designed around. We do not
        pretend Miramar is oceanfront just to upsell Sentinel on a standard bedroom window.
      </p>
      <p>
        Permits are City of Miramar / Broward HVHZ — Miami-Dade NOA products, not the Palm Beach FL# path
        we use in <InlineLink href="/areas/boca-raton/">Boca Raton</InlineLink>. Crews run from{" "}
        <InlineLink href="/areas/hollywood/">3000 Stirling Rd in Hollywood</InlineLink>, which is the
        next city north, not a three-county hop. Pair the estimate with{" "}
        <InlineLink href="/financing/">financing</InlineLink>,{" "}
        <InlineLink href="/faq/do-i-still-need-shutters-with-impact-windows/">whether you still need shutters</InlineLink>,
        and <InlineLink href="/brands/pgt/#compare">PGT vs ES</InlineLink>.{" "}
        <InlineLink href="/get-estimate/">Get a Miramar estimate</InlineLink> or call (754) 600-4876.
      </p>
      <p>
        West Miramar houses permitted before January 1, 2008 are the My Safe Florida Home
        conversation: a state grant up to $10,000 for a qualifying homesteaded site-built home,
        after the program inspection, with insured value typically at or below $700,000 except
        for low-income applicants. Do not start before written approval. Town Center mixed-use
        is not that grant. Rules live on <InlineLink href="/financing/">financing</InlineLink>{" "}
        and the <InlineLink href="/blog/impact-window-cost-broward-county/">Broward cost guide</InlineLink>.
        The garage door is still an opening — see{" "}
        <InlineLink href="/services/door-types/garage/">HVHZ garage doors</InlineLink>. Next door:{" "}
        <InlineLink href="/areas/pembroke-pines/">Pembroke Pines</InlineLink>,{" "}
        <InlineLink href="/areas/west-park/">West Park</InlineLink>, and{" "}
        <InlineLink href="/areas/hollywood/">Hollywood</InlineLink>.
      </p>
    </>
  ),
  codeParagraph: (
    <>
      Miramar is in Broward County&apos;s High-Velocity Hurricane Zone, same band as Hollywood — not the
      Palm Beach wind-borne debris path used in Boca Raton. Impact window replacement here needs
      HVHZ-approved assemblies (typically a current Miami-Dade NOA) and a City of Miramar permit. We pull
      that permit and install to the approval. Shutters already on the house can be a legal starting
      point; they are not a reason to skip the permit when you switch those openings to impact glass.
    </>
  ),
  hurricaneZone: "HVHZ (Broward)",
  buildingCodeNote: "City of Miramar + FBC / NOA",
  officeLine: "Served from Hollywood HQ",
  nearbySlugs: ["pembroke-pines", "west-park", "hollywood", "cooper-city"],
  faqs: [
    {
      question: "Do I need hurricane windows in Miramar if my house already has shutters?",
      answer:
        "Not for code, if the shutters are approved and you actually close them. Most Miramar owners shopping hurricane windows want to stop deploying panels on a two-story house before every cone. Impact windows are the permanent method. Once every opening is impact-rated, you do not need shutters on those openings. We can leave shutters on a leftover garage or transom if that is the plan — we will not tell you to stack both on the same window for Broward code.",
    },
    {
      question: "Are impact windows in Miramar in the HVHZ?",
      answer:
        "Yes. Miramar is in Broward County’s High-Velocity Hurricane Zone. Replacement impact windows and doors generally need HVHZ-approved products — typically a current Miami-Dade NOA — and a City of Miramar permit. That is the same zone family as Hollywood, and a different permit story than Boca Raton in Palm Beach County.",
    },
    {
      question: "Which Miramar neighborhoods do you install hurricane windows in?",
      answer:
        "We install throughout Miramar, including Sunset Lakes, Sunset Falls, Riviera Isles, Vizcaya, Island Reserve, Miramar Park, the Town Center area, and the Miramar Parkway corridor. West Miramar openings are specified for Everglades fetch and neighbor-tile debris, not for ocean salt. Town Center mixed-use openings are a commercial conversation.",
    },
    {
      question: "PGT or ES Windows for a typical Miramar two-story home?",
      answer:
        "PGT WinGuard is the usual whole-house specification when you want vinyl or aluminum from a large Florida catalog and familiar Broward inspections. ES Windows is the usual specification when lead time and covering every opening on a budget matter more than a broader options list. CGI enters when a lanai slider or tall unit needs a higher design pressure. We install all three and will price them on the same opening list.",
    },
    {
      question: "Do you pull City of Miramar permits for impact windows?",
      answer:
        "Yes. Florida Impact Windows & Doors pulls the City of Miramar / Broward permit, meets the inspector, and installs to the NOA. The company is based at 3000 Stirling Rd, Hollywood, FL 33021 — close enough that Miramar is a core service city. Call (754) 600-4876 for a free estimate.",
    },
  ],
};

export const cityPageOverrides: Record<string, CityPageOverride> = {
  hollywood,
  "boca-raton": bocaRaton,
  miramar,
  "fort-lauderdale": fortLauderdale,
  miami,
  weston,
  "pembroke-pines": pembrokePines,
  "coral-springs": coralSprings,
  plantation,
  davie,
  aventura,
  "delray-beach": delrayBeach,
  "west-palm-beach": westPalmBeach,
  "miami-beach": miamiBeach,
  "coral-gables": coralGables,
  hialeah,
  doral,
  homestead,
  "cutler-bay": cutlerBay,
  "miami-gardens": miamiGardens,
  "north-miami": northMiami,
  "north-miami-beach": northMiamiBeach,
  "sunny-isles-beach": sunnyIslesBeach,
  "key-biscayne": keyBiscayne,
  pinecrest,
  "palmetto-bay": palmettoBay,
  "miami-lakes": miamiLakes,
  "hialeah-gardens": hialeahGardens,
  "miami-springs": miamiSprings,
  "south-miami": southMiami,
  surfside,
  "bal-harbour": balHarbour,
  "bay-harbor-islands": bayHarborIslands,
  sweetwater,
  "miami-shores": miamiShores,
  kendall,
  westchester,
  "florida-city": floridaCity,
  "golden-beach": goldenBeach,
  medley,
  "boynton-beach": boyntonBeach,
  jupiter,
  "palm-beach-gardens": palmBeachGardens,
  wellington,
  "royal-palm-beach": royalPalmBeach,
  "lake-worth-beach": lakeWorthBeach,
  "riviera-beach": rivieraBeach,
  greenacres,
  "palm-beach": palmBeachTown,
  "north-palm-beach": northPalmBeach,
  lantana,
  "palm-springs": palmSpringsVillage,
  tequesta,
  "juno-beach": junoBeach,
  "lake-park": lakePark,
  hypoluxo,
  manalapan,
  "ocean-ridge": oceanRidge,
  "gulf-stream": gulfStream,
  "highland-beach": highlandBeach,
  "briny-breezes": brinyBreezes,
  "south-palm-beach": southPalmBeach,
  atlantis,
  loxahatchee,
  "port-st-lucie": portStLucie,
  "deerfield-beach": deerfieldBeach,
  "pompano-beach": pompanoBeach,
  "lighthouse-point": lighthousePoint,
  "hillsboro-beach": hillsboroBeach,
  "lauderdale-by-the-sea": lauderdaleByTheSea,
  "sea-ranch-lakes": seaRanchLakes,
  "hallandale-beach": hallandaleBeach,
  "dania-beach": daniaBeach,
  sunrise,
  "coconut-creek": coconutCreek,
  tamarac,
  margate,
  "north-lauderdale": northLauderdale,
  lauderhill,
  "lauderdale-lakes": lauderdaleLakes,
  "oakland-park": oaklandPark,
  "wilton-manors": wiltonManors,
  "cooper-city": cooperCity,
  parkland,
  "southwest-ranches": southwestRanches,
  "west-park": westPark,
};

export function getCityPageOverride(slug: string): CityPageOverride | undefined {
  return cityPageOverrides[slug];
}
