export interface FAQ {
  id: number;
  question: string;
  answer: string;
  slug: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Cost & Pricing
  {
    id: 1,
    question: "How much do impact windows cost in South Florida?",
    answer:
      "Impact windows in South Florida typically cost $400 to $1,500 per window installed, depending on size, style, glass, and frame. Sliding glass doors often run $1,500 to $5,000+ installed. A full-home project commonly lands between $10,000 and $30,000, though larger or custom homes can exceed that. Price moves with brand, Low-E or insulated glass, custom shapes, two-story access, and whether the opening is in Miami-Dade or Broward’s High-Velocity Hurricane Zone. These are typical ranges, not a quote. Labor and permit rules are stricter in the HVHZ, which can raise the total. A measured in-home estimate is the only reliable price for your openings.",
    slug: "how-much-do-impact-windows-cost-in-south-florida",
    category: "Cost & Pricing",
  },
  {
    id: 2,
    question: "What financing options are available for impact windows?",
    answer:
      "Financing is commonly offered in terms from 12 to 120 months, including promotional 0% interest periods if you qualify. Florida Impact Windows & Doors also discusses PACE (Property Assessed Clean Energy) financing, which may be available in Miami-Dade, Broward, and Palm Beach and is typically repaid on the property tax bill. Approval, APR, and whether a promo applies depend on credit, the lender, and program rules at the time you apply. Financing does not replace a written contract or a building permit. Call (754) 600-4876 during a free estimate to compare monthly options. Read the lender’s disclosures before you sign.",
    slug: "financing-options-for-impact-windows",
    category: "Cost & Pricing",
  },
  {
    id: 3,
    question: "How much does a full-house impact window replacement cost?",
    answer:
      "A typical full-house impact window and door replacement in South Florida often falls between $10,000 and $30,000. Homes with about 15–20 standard openings sit in that band; larger houses, oversized sliders, two-story access, or premium brands can run higher. The total depends on size, brand, glass package, and municipality. Replacing every opening at once costs more upfront than a partial job, but it usually simplifies permitting, inspection, and insurance paperwork. Grants and financing change your out-of-pocket amount, not the contract price. Ask for a line-item estimate that separates windows, doors, labor, and permit handling.",
    slug: "how-much-does-a-full-house-impact-window-replacement-cost",
    category: "Cost & Pricing",
  },
  {
    id: 4,
    question:
      "How much do impact sliding glass doors cost — 2-panel vs. 3- or 4-panel?",
    answer:
      "Impact sliding glass doors in South Florida commonly range from $1,500 to $5,000+ installed. A standard two-panel slider usually sits in the lower-to-mid part of that range. Three- and four-panel, extra-wide, or pocket configurations cost more because they use more glass, heavier frames, and a higher design-pressure assembly. Corner sliders, custom finishes, and Low-E insulated glass also push the number up. Exact cost depends on width, height, brand, and the city that will inspect the opening. Note whether the header or track needs structural work. A site visit is required to price 3- and 4-panel units accurately.",
    slug: "impact-sliding-glass-door-cost-2-panel-vs-3-or-4-panel",
    category: "Cost & Pricing",
  },
  {
    id: 5,
    question: "How much do impact French doors cost?",
    answer:
      "Impact French doors typically cost more than a single window and often land in a similar band to other large impact door openings, depending on size, brand, and glass. Inswing versus outswing, sidelights, transoms, and multipoint hardware all change the price. Coastal or HVHZ assemblies need a design pressure that matches that opening, which can require a heavier frame than an inland door. Cost depends on size, brand, and municipality—there is no single catalog price. Pairing French doors with matching impact windows keeps the elevation consistent for HOA review. Put the unit, labor, disposal, and permit on one quote so you are not comparing a door-only number to a turnkey number.",
    slug: "how-much-do-impact-french-doors-cost",
    category: "Cost & Pricing",
  },
  {
    id: 6,
    question: "How much does an impact garage door cost?",
    answer:
      "An impact-rated or wind-rated garage door is priced separately from windows and depends on width, height, wind rating, insulation, and whether you need new tracks or an opener. Retrofit wind kits cost less than a full door replacement but only work when the existing door and opening qualify. For insurance and HVHZ compliance, the garage is an opening that usually must be protected if you want full opening-protection credit. Typical cost varies widely by size, brand, and municipality; put it on the same estimate as the windows. Confirm the product approval (NOA or FL#) matches the installation method the inspector will see.",
    slug: "how-much-does-an-impact-garage-door-cost",
    category: "Cost & Pricing",
  },
  {
    id: 7,
    question: "What does an impact window quote include?",
    answer:
      "A complete quote should list each opening (size, style, brand, glass), labor to remove and install, disposal, flashing and sealing, and who pulls and closes the permit. It should also state whether the price includes product-approval documents, final inspection coordination, and any buck, stucco, or paint work. Financing, grants, and insurance credits are not automatic deductions from the contract. Compare apples to apples: a product-only number is not the same as a permitted, installed price. If a bid omits permit handling, dumpsters, or after-hours access, the out-the-door cost will rise later. Ask every bidder to use the same opening schedule.",
    slug: "what-does-an-impact-window-quote-include",
    category: "Cost & Pricing",
  },
  {
    id: 8,
    question: "How do I compare impact window quotes?",
    answer:
      "Compare brand and series, glass package (laminated, insulated, Low-E), design-pressure rating, and whether each product has a current NOA or FL# for your jurisdiction. Then compare scope: permit, inspection, disposal, stucco or paint touch-up, and warranty (manufacturer plus workmanship). The lowest number often leaves out HVHZ hardware, stainless fasteners, or custom sizes. Ask every bidder to price the same opening list. Confirm the installer—not only a salesperson—will follow the NOA’s anchor schedule. A free in-home measurement is more reliable than a phone price, and a vague “per window” average hides door and two-story costs.",
    slug: "how-to-compare-impact-window-quotes",
    category: "Cost & Pricing",
  },
  {
    id: 9,
    question: "What is the typical deposit and payment schedule?",
    answer:
      "Most impact window contracts collect a deposit when you sign, then remaining payments at manufacturing, delivery, or completion—the exact split belongs in the written agreement. Avoid large cash deposits and do not pay the full balance before product is on site and work is substantially done. Typical practice is a partial deposit with the rest tied to milestones; treat that as a pattern, not a legal cap. Ask for the payment schedule, change-order rules, and what happens if the permit is delayed. Keep copies of checks or lender disbursements with the signed proposal. Progress payments should match visible progress.",
    slug: "impact-window-deposit-and-payment-schedule",
    category: "Cost & Pricing",
  },
  {
    id: 10,
    question: "What do impact windows cost after a My Safe Florida Home grant?",
    answer:
      "The contract price does not drop when you receive a My Safe Florida Home grant; the grant can reduce what you pay out of pocket. MSFH is a Florida program that can cover a large share of qualifying mitigation, with an advertised cap of up to $10,000. Eligibility, funding, and the share you actually receive change with each program cycle. Do not treat the grant as cash in hand until you have written approval for a qualifying scope. Start from a line-item estimate so you know the full job cost first. Financing can cover any remaining balance if you qualify.",
    slug: "impact-window-cost-after-my-safe-florida-home-grant",
    category: "Cost & Pricing",
  },
  {
    id: 11,
    question: "Why do HVHZ impact window jobs cost more?",
    answer:
      "Jobs in the High-Velocity Hurricane Zone (Miami-Dade and Broward) cost more because products and installations must meet the state’s strictest wind and debris standards. That usually means Miami-Dade NOA assemblies, specified anchors and spacings, and inspections that reject substitutions. Larger or higher openings need higher design-pressure ratings, which can require heavier frames and more expensive glass. Permit documentation and inspection cycles add time. Palm Beach County is still in a wind-borne debris region but is not HVHZ, so requirements differ by municipality. The extra cost is for tested systems and inspection, not a brand markup alone.",
    slug: "why-hvhz-impact-window-jobs-cost-more",
    category: "Cost & Pricing",
  },
  {
    id: 12,
    question: "Do impact windows increase home value?",
    answer:
      "Yes. Impact windows are a permanent upgrade South Florida buyers often look for, and they can support a stronger listing than a house that still needs opening protection. Value depends on the rest of the home, install quality, and whether every opening is protected and permitted. Contractor marketing sometimes cites resale bumps in the $10,000 to $30,000 range; that is not a guarantee, and appraisers still price location, roof, and condition first. Lower cooling costs, quieter rooms, and a current wind-mitigation form help the house show well.",
    slug: "do-impact-windows-increase-home-value",
    category: "Cost & Pricing",
  },

  // Product
  {
    id: 13,
    question: "What are hurricane impact windows?",
    answer:
      "Hurricane impact windows use laminated glass—two lites bonded with a PVB or EVA interlayer—so the pane can crack under debris without blowing out. In South Florida, tested products must survive a large-missile impact (a 9-pound 2x4 at about 34 mph) and then cyclic wind pressure. The frame, glass, and anchors are one system; glass alone is not “impact” if it is not in an approved assembly. Impact windows stay in place year-round, block most UV, and resist smash-and-grab attacks better than annealed glass. They are debris-rated, not ballistic-rated.",
    slug: "what-are-hurricane-impact-windows",
    category: "Product",
  },
  {
    id: 14,
    question: "Are there different grades of impact windows?",
    answer:
      "Yes. Grades show up as the product-approval path and Design Pressure (DP), not as generic good/better/best labels. Miami-Dade Notice of Acceptance (NOA) is the HVHZ benchmark; Florida Product Approval (FL#) is the statewide listing. Higher DP means the assembly is tested to higher wind loads. Homes in Miami-Dade and Broward (HVHZ) generally need HVHZ-approved products and the DP required for that opening. Glass packages also vary: laminated only, insulated laminated, Low-E, and tinted. Match the approval and DP to the address. A cheaper, lower-rated unit can fail plan review.",
    slug: "different-grades-of-impact-windows",
    category: "Product",
  },
  {
    id: 15,
    question: "How long do impact windows last?",
    answer:
      "High-quality impact windows commonly last 25 to 30 years or more when frames, seals, and hardware are maintained. Laminated glass does not expire on a calendar, but seals can fail and coastal hardware can corrode if it is neglected. Aluminum and vinyl frames both hold up in South Florida if you rinse salt and keep weep holes open. Manufacturer warranties often run from about 10 years to a limited lifetime on specific parts; that is coverage, not a promise the unit will look new for 30 years. Annual checks of locks, rollers, and weatherstrip extend service life.",
    slug: "how-long-do-impact-windows-last",
    category: "Product",
  },
  {
    id: 16,
    question: "Can impact windows stop a bullet?",
    answer:
      "No. Impact windows are rated for wind-borne debris, not ballistics. The laminated interlayer can stop a 2x4 and resist smash-and-grab attacks, but it is not UL 752 bullet-resistant glass. Repeated shots or rifle rounds can penetrate. True ballistic glazing is a different product, permit path, and price. For storms and everyday security, a permitted impact assembly is the correct specification. Do not treat “hurricane glass” marketing as a substitute for a safe room or a ballistic-rated opening.",
    slug: "can-impact-windows-stop-a-bullet",
    category: "Product",
  },
  {
    id: 17,
    question: "What is the difference between impact glass and regular glass?",
    answer:
      "Regular annealed or standard tempered glass can shatter and leave an opening that lets wind and water pressurize the house. Impact glass is laminated; even when it cracks, the interlayer holds the shards and the opening stays closed if the frame and anchors hold. Tempered glass is stronger than annealed glass but is not a hurricane-impact system by itself. Code-approved protection is either an impact-rated window or door assembly, or an approved shutter or screen over a non-impact opening. Film applied to regular glass is not the same as a tested impact unit.",
    slug: "impact-glass-vs-regular-glass",
    category: "Product",
  },
  {
    id: 18,
    question:
      "What is the difference between a Miami-Dade NOA and a Florida Product Approval (FL#)?",
    answer:
      "A Miami-Dade Notice of Acceptance (NOA) is a product approval issued after HVHZ testing, including large-missile impact and pressure cycling. A Florida Product Approval number (FL#) is a statewide listing under the Florida Building Code. In Miami-Dade and Broward’s HVHZ, inspectors typically require an NOA or an HVHZ-qualified approval, not a generic inland FL# alone. Palm Beach County often accepts FL# products that meet local wind-borne debris rules, but the municipality still decides. Always give the building department the exact approval that matches the model, glass, and anchor schedule you will install.",
    slug: "noa-vs-florida-product-approval-fl-number",
    category: "Product",
  },
  {
    id: 19,
    question:
      "What Design Pressure (DP) rating do I need for my address or high-rise?",
    answer:
      "Design Pressure (DP) is the wind load, in pounds per square foot, the assembly is tested to resist. The DP you need depends on your address, building height, exposure (open coast versus suburban), and whether the opening is at a corner. High-rises and oceanfront elevations usually need higher DP than a one-story inland house. A salesperson’s “standard DP” may be too low for an upper-floor condo. Your contractor or engineer should size DP per opening from the code and the product approval. Installing a lower-DP unit than the permit requires will fail inspection.",
    slug: "what-dp-rating-do-i-need",
    category: "Product",
  },
  {
    id: 20,
    question: "Should I choose vinyl or aluminum frames in South Florida?",
    answer:
      "Both vinyl and aluminum impact frames are used across Miami-Dade, Broward, and Palm Beach; the better choice depends on opening size, coastal exposure, and energy goals. Aluminum is stiffer, so it suits large sliders and taller units; specify a coastal finish and stainless hardware near the ocean. Vinyl can offer better thermal performance and a warmer interior frame, but very large openings may still need aluminum. Color, HOA rules, and brand series matter as much as the material name. Compare the actual NOA or FL#, DP, and glass package—not just “vinyl versus aluminum.”",
    slug: "vinyl-vs-aluminum-impact-windows-south-florida",
    category: "Product",
  },
  {
    id: 21,
    question: "What is Low-E glass, and is it worth it on impact windows?",
    answer:
      "Low-E is a microscopic metal coating that reflects radiant heat and blocks much of the UV that fades floors and furniture. In South Florida it can cut cooling load when paired with the right solar-heat-gain rating, especially on west and south elevations. Low-E is an add-on to the impact laminate; it does not make a window more hurricane-resistant. Argon-filled insulated units with Low-E add cost and a bit of thickness. Whether it is worth it depends on sun exposure, electric rates, and how long you will stay in the home. Ask for the NFRC numbers on the exact series.",
    slug: "what-is-low-e-glass-on-impact-windows",
    category: "Product",
  },
  {
    id: 22,
    question: "What is Florida’s 25% window replacement rule?",
    answer:
      "Florida’s “25% rule” is a building-code trigger: if you replace more than a set share of openings in a wall or building—often 25%, though the exact application depends on the jurisdiction and current code—you may have to bring the remaining openings on that elevation up to today’s wind and impact standards. Municipalities in the HVHZ enforce this closely. Replacing a few windows to save money can force a larger project after plan review. Confirm the rule with the city that will issue the permit before you phase a job. A whole-house plan avoids surprise upgrades mid-permit.",
    slug: "florida-25-percent-window-replacement-rule",
    category: "Product",
  },
  {
    id: 23,
    question: "Do impact windows reduce noise and energy bills?",
    answer:
      "Yes, within limits. Laminated impact glass dampens street, aircraft, and storm noise better than single-pane non-impact glass; insulated laminated units do more. They will not make a home on a flight path silent. Energy savings come from tighter frames, Low-E coatings, and insulated glass that reduce heat gain. Large UV-block percentages are typical of laminated glass, not a utility-bill guarantee. Results depend on orientation, existing insulation, and HVAC condition. Treat quieter rooms and lower cooling hours as a bonus on top of wind protection, not the only reason to buy.",
    slug: "do-impact-windows-reduce-noise-and-energy-bills",
    category: "Product",
  },

  // Brands
  {
    id: 24,
    question: "PGT vs. ES Windows — which should I choose?",
    answer:
      "PGT and ES Windows are both Florida-made impact lines that Florida Impact Windows & Doors installs, along with CGI and CWS. PGT (including series such as WinGuard) is a widely specified residential brand with broad size and style coverage. ES is a South Florida manufacturer often chosen for value and local lead times on common configurations. Neither logo is automatically better; compare the specific series, DP, glass, hardware, and warranty for your openings. Oceanfront or high-rise jobs may require a heavier series regardless of brand. Ask to see the NOA or FL# for the exact model on your bid.",
    slug: "pgt-vs-es-windows",
    category: "Brands",
  },
  {
    id: 25,
    question: "PGT vs. CGI — what’s the difference?",
    answer:
      "PGT is a high-volume Florida residential brand; CGI (including series such as Sentinel) is a Miami-area manufacturer often specified when openings need higher design pressures or a more custom look. CGI can cost more on comparable sizes; PGT can be easier to match across a whole house. The right pick depends on size, brand series, and municipality—not the name alone. Review sightlines, finish options, and the approval documents side by side. Price both on the same opening schedule so you are not mixing a premium series on one bid with a builder series on another.",
    slug: "pgt-vs-cgi",
    category: "Brands",
  },
  {
    id: 26,
    question: "Are PGT, CGI, ES Windows, and CWS NOA approved?",
    answer:
      "PGT, CGI, ES Windows, and Custom Window Systems (CWS) all offer impact products with Miami-Dade NOAs and/or Florida Product Approvals, but approval is by model and configuration—not by company name. A series can have an NOA for one glass and frame combination and a different listing for another. In the HVHZ, the installed unit must match the NOA’s bill of materials and anchor schedule. Ask for the NOA or FL# number on the proposal and keep a copy for the inspector and your insurer. If a bidder cannot produce the current approval, do not sign.",
    slug: "are-pgt-cgi-es-cws-noa-approved",
    category: "Brands",
  },
  {
    id: 27,
    question:
      "Which brand should I pick for an oceanfront home versus an inland home?",
    answer:
      "Oceanfront and barrier-island homes usually need higher design pressures, corrosion-resistant hardware, and finishes that tolerate salt spray; aluminum impact frames are common on large coastal openings. Inland homes in the same county may use a wider mix of vinyl and aluminum if the DP and product approval still meet the permit. Brand choice should follow the opening schedule: pick the series that has a current NOA or FL# at the required DP, then decide on glass and color. Do not assume an inland “standard” package is legal on a high-rise or beachfront elevation.",
    slug: "oceanfront-vs-inland-impact-window-brand",
    category: "Brands",
  },

  // Installation
  {
    id: 28,
    question: "How long does impact window installation take?",
    answer:
      "Most residential impact installations take 1 to 3 days once the product is on site. Homes with about 8–12 openings can finish in a day; 20 or more openings, two-story work, or heavy doors can take 2–3 days. Manufacturing typically adds 4 to 8 weeks after measurements and order. Permit review can add time, especially in Miami-Dade and busy Broward cities. Weather, HOA access rules, and a failed inspection extend the calendar. Plan on factory lead time, not just the install days, when you are racing hurricane season.",
    slug: "how-long-to-install-impact-windows",
    category: "Installation",
  },
  {
    id: 29,
    question: "Do I need a permit for impact window installation?",
    answer:
      "Yes. A building permit is required for impact window and door replacement throughout Miami-Dade, Broward, and Palm Beach counties. The permit ties the product approval and installation method to your address and lets the city inspect the work. Unpermitted work can stall a sale, weaken a warranty claim, and block insurance credits. Florida Impact Windows & Doors pulls the permit and coordinates inspections as part of the job. You still need to provide access and any HOA letters the city requests. Do not let anyone start demolition without a posted permit.",
    slug: "do-i-need-permit-for-impact-window-installation",
    category: "Installation",
  },
  {
    id: 30,
    question: "Can impact windows be installed in older homes?",
    answer:
      "Yes. Pre-code and pre-1990s homes across Hollywood and the rest of South Florida can take impact windows; many replacement jobs are in older CBS and wood-frame houses. Openings may need custom sizes, new bucks, or extra anchoring because the original nail-fin window was never designed for today’s loads. Historic districts add design review on grids and frame color, but age alone does not block an upgrade. Budget time for hidden rot or out-of-square openings discovered at demo. A site measure beats ordering a catalog size.",
    slug: "impact-windows-in-older-homes",
    category: "Installation",
  },
  {
    id: 31,
    question: "How do I verify an impact window contractor’s license in Florida?",
    answer:
      "Look up the contractor on the Florida Department of Business and Professional Regulation site (MyFloridaLicense.gov) and confirm the license is current, the name matches the contract, and there are no serious open violations. Also verify local business tax and that general liability and workers’ compensation certificates are in force. Do not accept a wallet photo or a number typed on a flyer as proof. The company on the permit should be the company you pay. If you cannot verify the license, do not sign or send a deposit.",
    slug: "how-to-verify-impact-window-contractor-license",
    category: "Installation",
  },
  {
    id: 32,
    question: "Can I install impact windows myself (DIY)?",
    answer:
      "No. Impact windows in South Florida are engineered assemblies; the glass, frame, and anchors must follow the product approval, and the work needs a permit and inspection. DIY installs are commonly rejected, can void the manufacturer warranty, and will not produce a clean wind-mitigation form. Cutting a nail-fin unit into an old opening without the specified fasteners is not close enough. Hire a licensed contractor who will pull the permit and stand the inspection. Save DIY for painting and landscaping, not HVHZ openings.",
    slug: "can-i-install-impact-windows-myself",
    category: "Installation",
  },
  {
    id: 33,
    question: "What is the lead time from estimate to installation?",
    answer:
      "From signed contract to finished inspection, many homes see about 4 to 8 weeks of manufacturing plus permit time and 1 to 3 install days. Permit turnaround varies by municipality and season; hurricane-season rushes add delay. Custom colors, oversized sliders, and high-DP series can run longer than common builder sizes. Ask for a written production window, not a verbal “about a month.” If you have a closing date or a storm in the Gulf, say so at the estimate so ordering and inspections can be sequenced.",
    slug: "impact-window-lead-time",
    category: "Installation",
  },
  {
    id: 34,
    question: "Should I replace all windows at once or in phases?",
    answer:
      "Replacing every opening at once is usually the cleaner path for permits, the 25% rule, HOA review, and insurance. Partial jobs can trigger a requirement to upgrade the rest of a wall, and a mix of old non-impact and new impact openings may limit wind-mitigation credits until everything is protected. Phasing is sometimes necessary for budget; if you phase, get the city’s rule in writing and protect leftover openings with approved shutters. One mobilization also costs less in setup than two or three return trips.",
    slug: "replace-all-windows-at-once",
    category: "Installation",
  },
  {
    id: 35,
    question: "Must the window product and anchors match the NOA?",
    answer:
      "Yes. The model, glass type, frame, and anchor size and spacing must match the NOA or Florida Product Approval listed on the permit. Substituting drywall screws, skipping a required buck, or changing glass thickness can fail inspection and void the approval. In the HVHZ, inspectors check this closely. Keep the approval sheets on site during the job. If a crew says they always install a certain way, ask them to show that page in the NOA. Insurance and warranty claims are weaker when the install does not match the tested system.",
    slug: "must-product-and-anchors-match-the-noa",
    category: "Installation",
  },

  // Insurance
  {
    id: 36,
    question: "Do impact windows lower insurance premiums?",
    answer:
      "Impact windows often reduce the wind portion of a Florida homeowners policy when a wind-mitigation inspection documents that openings are protected. The amount depends on the carrier, the rest of the roof and house, and whether every opening—including the garage—is protected. Marketing ranges of 20% to 45% describe some outcomes, not a promise. Credits apply after you file an OIR-B1-1802 (or the form your insurer accepts) and the carrier endorses the policy. Florida Impact Windows & Doors can supply product paperwork for that inspection; call (754) 600-4876 if you need copies after closeout.",
    slug: "do-impact-windows-lower-insurance-in-florida",
    category: "Insurance",
  },
  {
    id: 37,
    question: "Do impact windows get the same insurance credit as shutters?",
    answer:
      "Qualified impact windows and qualified shutters can both earn opening-protection credit when they are approved products, properly installed, and recorded on the wind-mitigation form. They are not automatically identical line by line; some carriers treat permanent impact glazing more cleanly than removable panels an inspector cannot confirm will be installed. If shutters are used, they must cover the listed openings and be deployable. Mixing both is allowed if each opening is protected. Ask your insurer how they score impact glass versus shutters before you choose a hybrid plan.",
    slug: "do-impact-windows-get-the-same-insurance-credit-as-shutters",
    category: "Insurance",
  },
  {
    id: 38,
    question: "What is OIR-B1-1802?",
    answer:
      "OIR-B1-1802 is Florida’s Uniform Mitigation Verification Inspection Form. A qualified inspector uses it to record roof geometry, roof covering, roof deck, opening protection, and other wind features. Insurers use those checkboxes to apply or deny credits. Impact windows help only if they are permitted, approved products and the inspector marks opening protection correctly. The form is not a permit and not a grant application. After a replacement job, schedule a new inspection so the form matches the house you have now, not the old jalousies or single-pane sliders.",
    slug: "what-is-oir-b1-1802",
    category: "Insurance",
  },
  {
    id: 39,
    question: "Must the garage door be protected too for insurance credits?",
    answer:
      "Usually yes, if you want full opening-protection credit. The garage door is a large opening; an unprotected garage can keep the inspector from marking the house as fully protected. Options include a wind-rated garage door, an approved retrofit system, or—in some cases—an approved shutter over the opening. Requirements depend on door size, the product approval, and the carrier. Include the garage on the same plan as the windows so you do not spend on glass and still fail the 1802. Confirm the rating before you buy a decorative door from a retail aisle.",
    slug: "must-the-garage-door-be-protected-too",
    category: "Insurance",
  },
  {
    id: 40,
    question: "Who is eligible for the My Safe Florida Home grant?",
    answer:
      "My Safe Florida Home is a Florida program that may offer a wind inspection and a grant toward qualifying mitigation. The advertised cap is up to $10,000; the share you actually receive depends on eligibility, the approved scope, and whether the program is funded. Rules have included homestead and other residency or insurance conditions, and they change. Condos and some association-controlled buildings may not apply the same way as a single-family house. Check current DFS/MSFH guidance before you count on money. A grant does not replace a building permit or a product approval.",
    slug: "my-safe-florida-home-eligibility",
    category: "Insurance",
  },
  {
    id: 41,
    question:
      "Can I start impact window work before My Safe Florida Home grant approval?",
    answer:
      "Generally, no. Starting demolition or ordering a scope the program has not approved can make the project ineligible. Grants are tied to a qualifying scope and the rules in effect when you apply. You can still get a free in-home estimate and a permit-ready plan while you wait; do not pay to manufacture custom units you may have to change. If funding pauses, you can proceed out of pocket or with financing. Keep every MSFH letter with the contract so the final invoice matches the approved work.",
    slug: "can-i-start-work-before-msfh-grant-approval",
    category: "Insurance",
  },

  // vs Shutters
  {
    id: 42,
    question: "Do I still need shutters if I have impact windows?",
    answer:
      "Not if every exterior opening is protected with a code-approved impact window or door. Impact glass is accepted as standalone opening protection under the Florida Building Code and HVHZ rules, so you do not stack shutters on those units for code. You would still need approved protection on any opening you leave as non-impact glass—including some garages, transoms, or older sliders. Accordion or panel shutters remain a valid choice on those leftover openings. Confirm the permit and the 1802 list every opening, not just the new glass.",
    slug: "do-i-still-need-shutters-with-impact-windows",
    category: "vs Shutters",
  },
  {
    id: 43,
    question: "Are impact windows better than accordion shutters?",
    answer:
      "For most occupied homes, impact windows are more convenient than accordion shutters because protection is always in place—no deployment, no storage, and a clearer insurance photo. Accordion shutters usually cost less per opening and still meet code when they are approved and closed before a storm. They block light and egress when deployed and need track maintenance. Impact glass also improves noise, UV control, and everyday security. The better system is the one that will actually be closed when the cone shifts; many owners choose glass for living areas and shutters only where budget forces it.",
    slug: "are-impact-windows-better-than-accordion-shutters",
    category: "vs Shutters",
  },
  {
    id: 44,
    question: "Can I mix impact windows and shutters on the same house?",
    answer:
      "Yes. You can use impact windows on some openings and approved shutters on others, as long as each opening has a legal protection method and the combination is permitted. Hybrids are common when a historic elevation, a huge opening, or a budget cap makes full glass impractical. Insurers will credit only the openings that are documented as protected. Mixing brands of glass is fine; leaving unprotected openings next to new impact glass is what hurts the 1802. Put the hybrid plan on one permit set so inspectors and the HOA see the same layout.",
    slug: "can-i-mix-impact-windows-and-shutters",
    category: "vs Shutters",
  },

  // Maintenance
  {
    id: 45,
    question: "How do you clean and maintain impact windows?",
    answer:
      "Use mild soap or a non-abrasive glass cleaner and a soft cloth; skip razor blades, steel wool, and harsh chemicals that scratch glass or stain frames. In coastal South Florida, rinse salt monthly and vacuum tracks every few months so weep holes drain. Lubricate rollers and locks with a silicone spray about twice a year. Inspect weatherstripping annually and after major storms. Do not force a stuck sash—clear the track first. Standing water in the track is a maintenance issue, not a reason to stop rinsing salt off the frame.",
    slug: "how-to-clean-and-maintain-impact-windows",
    category: "Maintenance",
  },
  {
    id: 46,
    question: "Can cracked impact glass be repaired?",
    answer:
      "Usually you replace the insulated glass unit (IGU) or laminated lite; you do not patch hurricane glass with resin the way you might a windshield chip. The interlayer will typically hold cracked glass in the frame, so the opening may still keep weather out until a new unit arrives, but a cracked lite should be scheduled for replacement—especially before hurricane season. Glass-only replacement is often possible without a new frame if the frame is sound. Check whether the manufacturer warranty covers seal failure or storm damage; debris impact is often excluded.",
    slug: "can-impact-glass-be-repaired-if-cracked",
    category: "Maintenance",
  },
  {
    id: 47,
    question: "What warranty comes with impact windows?",
    answer:
      "Two warranties apply: the manufacturer’s product warranty (often about 10 years to a limited lifetime on listed parts such as glass, frame, or hardware) and the installer’s workmanship warranty for sealing, anchoring, and fit. Florida Impact Windows & Doors provides a workmanship warranty and helps with manufacturer claims. Read the exclusions: coastal corrosion, undocumented impact, and skipped maintenance are commonly limited. Keep the permit, NOA or FL#, and care instructions with the closing packet. Transfer rules vary by brand, so ask before you list the house.",
    slug: "what-warranty-comes-with-impact-windows",
    category: "Maintenance",
  },
  {
    id: 48,
    question:
      "What should I do if impact glass looks foggy or is delaminating?",
    answer:
      "Fog between panes usually means the insulated-glass seal failed; a cloudy or amber interlayer can mean the laminate is breaking down. Neither is a DIY polish job. Seal failure is typically resolved by replacing the IGU; delamination needs a new laminated lite or unit. Note whether moisture is inside the air space or only on the room-side surface—those are different problems. Take photos, the original order number, and warranty paperwork to the installer. Coastal heat and failed seals are common over a long service life; schedule service even if the opening still holds weather.",
    slug: "foggy-or-delaminating-impact-glass",
    category: "Maintenance",
  },

  // Local / HOA
  {
    id: 49,
    question: "Do I need HOA or condo approval for impact windows?",
    answer:
      "Most HOAs and condo associations require an architectural application before you change windows or doors, even when the product is impact-rated. Expect to submit brochures, colors, grid patterns, and sometimes the permit set. Associations often control appearance; they are on weaker ground if they try to block hurricane protection outright, but you still follow the application process and any recorded rules. Condo work may also need board sign-off and elevator or loading reservations. Start the HOA packet at the same time as the city permit. Florida Impact Windows & Doors can provide cut sheets for that application.",
    slug: "do-i-need-hoa-or-condo-approval",
    category: "Local / HOA",
  },
  {
    id: 50,
    question:
      "Can an HOA deny impact windows, or can it only control color and style?",
    answer:
      "An HOA generally cannot leave you with no legal way to protect openings, and Florida has limited associations’ ability to forbid hurricane protection, but it can usually regulate color, finish, and grid style so the street view stays consistent. A denial that is really about aesthetics should come back as “use this approved color or series,” not “no impact glass.” Recorded declarations, condo bylaws, and current Florida statutes all matter; a manager’s email is not the last word. Ask the board for the written standard and have the contractor propose a complying finish. Do not install first and apply later.",
    slug: "can-an-hoa-deny-impact-windows",
    category: "Local / HOA",
  },
];
