// =============================================================================
// Florida Impact Windows & Doors - Comprehensive Service Data
// South Florida Impact Windows & Doors
// =============================================================================

// -----------------------------------------------------------------------------
// TypeScript Interfaces
// -----------------------------------------------------------------------------

export interface WindowType {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface DoorType {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface MainService {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  products: string[];
  logo: string;
}

// -----------------------------------------------------------------------------
// Window Types
// -----------------------------------------------------------------------------

export const windowTypes: WindowType[] = [
  {
    id: "single-hung",
    name: "Single Hung Impact Windows",
    slug: "single-hung-impact-windows",
    shortDescription:
      "Classic single hung impact windows with a fixed upper sash and operable lower sash, delivering reliable hurricane protection for South Florida homes.",
    fullDescription: `Single hung impact windows are among the most popular and cost-effective choices for South Florida homeowners seeking dependable hurricane protection without sacrificing everyday functionality. Featuring a fixed upper sash and an operable lower sash that slides vertically, these windows provide excellent ventilation control while maintaining a clean, traditional appearance that complements virtually any architectural style found across Miami-Dade, Broward, and Palm Beach counties.

Built with laminated impact-resistant glass and heavy-duty aluminum or vinyl frames, our single hung impact windows meet and exceed the stringent Miami-Dade County Notice of Acceptance (NOA) and Florida Building Code requirements for high-velocity hurricane zones. The interlocking sash design creates a tight seal against wind-driven rain, while the reduced number of moving parts translates to lower maintenance demands and a longer operational lifespan compared to more complex window configurations.

At Florida Impact Windows & Doors, we install premium single hung impact windows from industry-leading manufacturers including PGT, CGI, and ES Windows. Our factory-trained installation teams ensure every window is fitted with precision, backed by comprehensive warranties and our commitment to delivering the highest standard of craftsmanship throughout South Florida. Whether you are upgrading a single room or replacing every window in your home, our single hung impact windows offer an unbeatable combination of affordability, durability, and storm-rated performance.`,
    features: [
      "Laminated impact-resistant glass meeting Miami-Dade HVHZ standards",
      "Heavy-duty aluminum or vinyl frame construction",
      "Interlocking meeting rail for superior weather sealing",
      "Recessed tilt latch for clean sightlines",
      "Multi-point locking hardware for enhanced security",
      "Integral lift rail for smooth sash operation",
      "Optional between-the-glass blinds or grids",
      "Low-E glass coatings available for solar heat reduction",
      "Argon gas-filled insulating glass units for energy efficiency",
      "Full perimeter weatherstripping",
      "Fusion-welded vinyl sash corners for structural integrity",
      "Florida Product Approval and NOA certified",
    ],
    benefits: [
      "Year-round hurricane protection without installing shutters",
      "Reduced homeowner insurance premiums with impact-rated certification",
      "Superior noise reduction from exterior traffic, construction, and aircraft",
      "Blocks up to 99% of harmful UV rays to protect interior furnishings",
      "Improved energy efficiency lowers monthly cooling costs in South Florida heat",
      "Enhanced home security with impact-resistant laminated glass",
      "Low maintenance design with fewer moving parts than double hung windows",
      "Increased property value and curb appeal",
      "Meets Florida Building Code and Miami-Dade County requirements",
      "Eligible for insurance wind mitigation credits",
    ],
    image: "/images/windows/single-hung-impact-window.jpg",
  },
  {
    id: "double-hung",
    name: "Double Hung Impact Windows",
    slug: "double-hung-impact-windows",
    shortDescription:
      "Versatile double hung impact windows with two operable sashes for maximum ventilation and easy cleaning, engineered for South Florida hurricane zones.",
    fullDescription: `Double hung impact windows offer South Florida homeowners the ultimate combination of versatility and storm protection, featuring two independently operable sashes that slide vertically within the frame. This dual-sash design allows you to open the top, the bottom, or both simultaneously, creating natural cross-ventilation that is especially valuable during the mild winter months when you want to enjoy the tropical breeze without running your air conditioning system.

One of the standout advantages of double hung impact windows is their ease of maintenance. Both sashes tilt inward, allowing you to clean the exterior glass surfaces from inside your home, a particularly convenient feature for second-story installations and multi-level residences common throughout Fort Lauderdale, Boca Raton, and Coral Gables. The laminated impact glass and reinforced frames provide the same level of hurricane protection as fixed-pane alternatives while giving you full control over airflow and natural light.

Florida Impact Windows & Doors sources double hung impact windows from top-tier manufacturers that hold Florida Product Approvals and Miami-Dade County NOAs for the most demanding high-velocity hurricane zones. Our expert installation crews follow manufacturer specifications to the letter, ensuring proper shimming, sealing, and anchoring that maximizes both performance and longevity. With Florida Impact Windows & Doors, you receive a turnkey experience from initial consultation and precise measurement through final inspection and warranty registration.`,
    features: [
      "Two independently operable sashes for flexible ventilation",
      "Tilt-in sash design for easy interior cleaning",
      "Laminated impact glass with PVB or SGP interlayer",
      "Constant force balance system for effortless sash movement",
      "Cam-action locks with keeper for secure closure",
      "Full-length lift rails on both sashes",
      "Sloped sill for positive water drainage",
      "Heavy-duty extruded aluminum or multi-chamber vinyl frames",
      "Optional decorative grid patterns including colonial and prairie",
      "Triple weatherstripping at meeting rail",
      "Integrated insect screen with fiberglass mesh",
      "Available in custom sizes and architectural shapes",
    ],
    benefits: [
      "Maximum ventilation control with top and bottom sash operation",
      "Easy exterior glass cleaning from inside the home",
      "Full hurricane protection certified for HVHZ zones",
      "Significant reduction in outside noise intrusion",
      "Energy-efficient design reduces cooling costs year-round",
      "Enhanced home security with laminated glass and multi-point locks",
      "UV protection preserves flooring, furniture, and artwork",
      "Insurance premium discounts with proper wind mitigation documentation",
      "Classic aesthetic suits colonial, Mediterranean, and contemporary homes",
      "Increased resale value for South Florida properties",
    ],
    image: "/images/windows/double-hung-impact-window.jpg",
  },
  {
    id: "casement",
    name: "Casement Impact Windows",
    slug: "casement-impact-windows",
    shortDescription:
      "Crank-operated casement impact windows that swing outward for unobstructed views and maximum airflow, ideal for South Florida coastal properties.",
    fullDescription: `Casement impact windows are hinged on one side and swing outward using a smooth crank-operated mechanism, providing South Florida homeowners with expansive unobstructed views and superior ventilation capabilities. When fully opened, the sash acts as a scoop that catches and directs passing breezes into your home, making casement windows one of the most effective styles for natural airflow in the warm and humid South Florida climate.

The design of casement impact windows creates an exceptionally tight seal when closed. As the crank mechanism draws the sash firmly against the frame, compression weatherstripping is engaged on all four sides, resulting in outstanding resistance to wind-driven rain and air infiltration. This characteristic makes casement windows a top-performing choice for waterfront properties along the Intracoastal Waterway, oceanfront condominiums, and any home that faces direct exposure to tropical storm conditions.

Florida Impact Windows & Doors offers casement impact windows in a wide range of sizes and configurations, including paired and triple units that create dramatic walls of glass. Our products carry full Florida Product Approvals and Miami-Dade NOAs, and every installation is performed by our licensed and insured crews who specialize exclusively in impact window and door systems. From initial measurement to final walkthrough, Florida Impact Windows & Doors ensures your casement impact windows are installed to deliver peak performance through every hurricane season.`,
    features: [
      "Fold-away crank handle for clean interior appearance",
      "Multi-point locking system engages at multiple points along the frame",
      "Laminated impact glass rated for large missile impact testing",
      "Heavy-duty stainless steel hinges resistant to coastal corrosion",
      "Four-sided compression weatherstripping for superior air and water sealing",
      "Single lever lock and crank operation for easy use",
      "Available in standard and custom oversized dimensions",
      "Concealed European-style hinges for streamlined look",
      "Nesting crank handle folds flat against the frame",
      "Optional colonial, prairie, or custom grid patterns",
      "Corrosion-resistant hardware suitable for salt air environments",
      "Egress-compliant sizing available for bedroom installations",
    ],
    benefits: [
      "Unobstructed glass area provides maximum natural light and views",
      "Superior ventilation as open sash scoops breezes into the home",
      "Tightest seal of any operable window style when closed",
      "Excellent performance against wind-driven rain infiltration",
      "Ideal for hard-to-reach locations above countertops and sinks",
      "Full hurricane protection without additional shutters",
      "Enhanced security with multi-point locking hardware",
      "Significant energy savings from reduced air leakage",
      "Perfect for coastal and waterfront South Florida properties",
      "Dramatic design options with paired and triple configurations",
    ],
    image: "/images/windows/casement-impact-window.jpg",
  },
  {
    id: "awning",
    name: "Awning Impact Windows",
    slug: "awning-impact-windows",
    shortDescription:
      "Top-hinged awning impact windows that open outward for ventilation even during rain, perfect for South Florida's frequent afternoon showers.",
    fullDescription: `Awning impact windows are hinged at the top and swing outward from the bottom, creating a natural canopy that allows you to enjoy fresh air circulation even during South Florida's frequent afternoon rain showers. This unique opening mechanism makes awning windows an exceptionally practical choice for bathrooms, kitchens, and any room where you want continuous ventilation without worrying about rain entering your home.

Constructed with the same laminated impact-resistant glass and reinforced framing systems as all our hurricane-rated products, awning impact windows deliver full protection against windborne debris and extreme wind pressures mandated by the Florida Building Code. They are frequently installed in combination with fixed picture windows, positioned below or flanking larger glass panels to add ventilation capability to otherwise sealed window walls while maintaining a cohesive architectural appearance.

Florida Impact Windows & Doors carries awning impact windows engineered specifically for the demanding conditions of Miami-Dade, Broward, and Palm Beach counties. Our team helps you determine the ideal placement and sizing for awning windows throughout your home, whether as standalone units, in stacked configurations, or as complementary elements alongside picture and casement windows. Every installation includes thorough waterproofing, proper flashing integration, and careful alignment to ensure years of trouble-free operation in the South Florida environment.`,
    features: [
      "Top-hinged design opens outward to deflect rain while ventilating",
      "Roto-gear crank operator for smooth and controlled opening",
      "Laminated impact-resistant glass with PVB interlayer",
      "Multi-point lock engages sash tightly against frame on all sides",
      "Heavy-duty corrosion-resistant hinges and hardware",
      "Full perimeter compression weatherstripping",
      "Available in single units or stacked multi-lite configurations",
      "Pairs seamlessly with picture windows for combined designs",
      "Thermally broken aluminum or insulated vinyl frame options",
      "Integrated drainage system prevents water accumulation",
      "Low-profile nesting handle for uncluttered interior",
      "Florida Product Approval for high-velocity hurricane zones",
    ],
    benefits: [
      "Ventilate your home during rain without water intrusion",
      "Ideal for bathrooms, kitchens, and laundry rooms",
      "Full hurricane-rated protection meets HVHZ requirements",
      "Tight seal when closed provides excellent energy efficiency",
      "Complements picture windows for versatile design combinations",
      "Enhanced privacy when positioned at higher wall locations",
      "Reduced outside noise from traffic and neighborhood activity",
      "UV protection for interior furnishings and flooring",
      "Low maintenance operation with minimal moving parts",
      "Qualifies for insurance wind mitigation discounts",
    ],
    image: "/images/windows/awning-impact-window.jpg",
  },
  {
    id: "picture",
    name: "Picture Impact Windows",
    slug: "picture-impact-windows",
    shortDescription:
      "Fixed picture impact windows that maximize natural light and panoramic views while providing uncompromising hurricane protection for South Florida homes.",
    fullDescription: `Picture impact windows are large fixed-pane windows that do not open, designed to frame expansive views and flood interior spaces with natural light. For South Florida homeowners with stunning vistas of the ocean, Intracoastal Waterway, golf courses, or lush tropical landscaping, picture impact windows transform ordinary rooms into showcases that celebrate the beauty of the surrounding environment while providing unyielding hurricane protection.

Because picture windows have no operable hardware, hinges, or tracks, they offer the highest possible structural integrity among all window styles. The laminated impact glass is secured within a robust frame that forms a continuous barrier against hurricane-force winds and flying debris. This fixed construction also delivers the best possible energy performance, as there are no gaps or seams through which conditioned air can escape or humid outdoor air can infiltrate, resulting in measurably lower cooling costs during South Florida's long, hot summers.

Florida Impact Windows & Doors installs picture impact windows in virtually any size and shape, including arched tops, geometric forms, and floor-to-ceiling walls of glass. We work closely with leading manufacturers to source custom-dimensioned units that fit your architectural vision precisely. Our installation team ensures every picture window is properly sealed, anchored, and finished to deliver decades of clear, unobstructed viewing and reliable storm protection throughout the most demanding hurricane seasons.`,
    features: [
      "Fixed non-operable design for maximum structural strength",
      "Laminated impact glass available in large custom dimensions",
      "Thermally broken aluminum or reinforced vinyl frame systems",
      "Available in arched, circular, triangular, and geometric shapes",
      "Low-E and Solar Low-E glass coatings for heat rejection",
      "Argon or krypton gas-filled insulating glass units",
      "Narrow frame profiles maximize visible glass area",
      "Structural silicone glazing option for ultra-clean exterior look",
      "Custom color matching and anodized finish options",
      "Certified for Miami-Dade County HVHZ large missile impact",
      "Optional decorative and privacy glass patterns",
      "Mulled configurations with operable flanking windows",
    ],
    benefits: [
      "Maximum natural light with the largest possible glass area",
      "Unobstructed panoramic views of South Florida scenery",
      "Highest structural integrity of any impact window style",
      "Best energy efficiency with zero air infiltration points",
      "Dramatic architectural statement for modern and luxury homes",
      "Superior noise reduction with no operable seams",
      "Full hurricane protection without shutters or panels",
      "Custom shapes and sizes for unique architectural openings",
      "Lowest maintenance requirements of any window type",
      "Excellent long-term value with extended lifespan",
    ],
    image: "/images/windows/picture-impact-window.jpg",
  },
  {
    id: "sliding-horizontal-roller",
    name: "Sliding Horizontal Roller Impact Windows",
    slug: "sliding-horizontal-roller-impact-windows",
    shortDescription:
      "Smooth-gliding horizontal roller impact windows that save space and provide effortless operation, a favorite for South Florida condominiums and contemporary homes.",
    fullDescription: `Sliding horizontal roller impact windows feature sashes that glide smoothly along a horizontal track, making them an outstanding choice for wide openings where vertical sliding or outward-swinging operation is impractical. Extremely popular throughout South Florida's condominium towers, waterfront homes, and contemporary residences, horizontal roller windows provide generous ventilation through large openings while maintaining a sleek, space-efficient profile that does not intrude into interior or exterior living areas.

The horizontal roller design is engineered to handle the oversized openings that South Florida architecture demands. With the ability to accommodate expansive widths, these impact windows let you enjoy sweeping views of the coastline, pool areas, and tropical gardens while knowing that every square inch of glass is rated to withstand hurricane-force winds and large missile impacts as required by the Florida Building Code and Miami-Dade County protocols.

Florida Impact Windows & Doors supplies and installs horizontal roller impact windows from manufacturers renowned for their smooth-operating track systems and durable roller assemblies. We understand that South Florida's salt air, humidity, and intense sun exposure place extraordinary demands on window hardware, which is why we select products with stainless steel rollers, corrosion-resistant tracks, and UV-stabilized frame materials. Our precise installation methods ensure your sliding impact windows operate effortlessly on day one and continue to glide smoothly for years to come.`,
    features: [
      "Tandem stainless steel roller assemblies for effortless gliding",
      "Laminated impact-resistant glass meeting large missile standards",
      "Heavy-duty extruded aluminum track and frame system",
      "Interlock at meeting rail for positive wind and water resistance",
      "Recessed thumb latch and secondary locking points",
      "Accommodates extra-wide openings for panoramic views",
      "Removable sash panels for easy cleaning and maintenance",
      "Integral weep system for effective water drainage",
      "Optional internal blinds and between-glass grid patterns",
      "Screen track with heavy-duty sliding screen included",
      "Available in two-panel, three-panel, and four-panel configurations",
      "Corrosion-resistant finish rated for coastal salt spray exposure",
    ],
    benefits: [
      "Space-saving operation does not intrude into rooms or patios",
      "Smooth effortless gliding suitable for all ages and abilities",
      "Ideal for wide openings in living rooms and master bedrooms",
      "Full hurricane protection certified for high-velocity zones",
      "Excellent choice for high-rise condominiums and waterfront homes",
      "Easy sash removal simplifies periodic cleaning",
      "Substantial noise reduction from ocean, traffic, and airport sounds",
      "Energy-efficient design reduces air conditioning costs",
      "Modern aesthetic complements contemporary South Florida architecture",
      "Insurance wind mitigation credit eligibility",
    ],
    image: "/images/windows/sliding-horizontal-roller-impact-window.jpg",
  },
  {
    id: "bay",
    name: "Bay Impact Windows",
    slug: "bay-impact-windows",
    shortDescription:
      "Elegant bay impact windows that project outward to create additional interior space and dramatic architectural dimension, built for South Florida storm protection.",
    fullDescription: `Bay impact windows project outward from the exterior wall at defined angles, typically consisting of a large center picture window flanked by two angled side windows that may be operable casement or double hung units. This three-dimensional configuration creates a beautiful architectural focal point while adding usable interior space for seating nooks, display shelves, or breakfast areas, a highly sought-after feature in South Florida homes where maximizing square footage and natural light adds tangible value.

Engineering bay impact windows for South Florida's hurricane zone requires precision structural design and expert installation. Each component of the bay assembly, including the head, seat, and support structure, must be integrated with the building envelope to resist extreme wind uplift and lateral pressures. The laminated impact glass in every panel provides debris protection, while the overall assembly is designed and tested to meet the stringent performance requirements of the Florida Building Code for high-velocity hurricane zones.

Florida Impact Windows & Doors has extensive experience designing and installing bay impact window assemblies for homes throughout Miami-Dade, Broward, and Palm Beach counties. We handle every aspect of the project, from structural evaluation and custom manufacturing to installation, trim finishing, and interior seating construction if desired. Our bay window installations are engineered to be watertight, energy efficient, and structurally sound, delivering beauty and performance that enhance your home for decades.`,
    features: [
      "Three-panel configuration with center picture and angled side units",
      "Available angles include 30-degree, 45-degree, and custom projections",
      "Laminated impact glass in every panel for full storm protection",
      "Structural head and seat boards engineered for wind load resistance",
      "Operable side panels available as casement or double hung",
      "Insulated seat and head assembly to prevent condensation",
      "Custom interior and exterior trim and finish options",
      "Optional copper or standing seam metal roof cap",
      "Cable or knee bracket support system for structural integrity",
      "Full weatherstripping and flashing integration",
      "Low-E and argon gas insulating glass units standard",
      "Certified for Florida Building Code high-velocity hurricane zones",
    ],
    benefits: [
      "Creates additional usable interior space and depth",
      "Dramatic architectural statement enhances curb appeal",
      "Floods rooms with natural light from three angles",
      "Panoramic views expand the visual perception of living spaces",
      "Full hurricane protection across the entire bay assembly",
      "Ideal for creating breakfast nooks, reading areas, or display spaces",
      "Increases property value with high-end custom appearance",
      "Excellent ventilation when side panels are operable",
      "Energy-efficient design with insulated construction throughout",
      "Custom designed to match your home's specific architectural style",
    ],
    image: "/images/windows/bay-impact-window.jpg",
  },
  {
    id: "bow",
    name: "Bow Impact Windows",
    slug: "bow-impact-windows",
    shortDescription:
      "Gracefully curved bow impact windows composed of multiple panels that create a sweeping panoramic view, engineered for South Florida hurricane resilience.",
    fullDescription: `Bow impact windows create a gentle, sweeping curve by combining four or more window panels set at slight angles to one another, producing an elegant rounded projection that is more subtle than the sharp angles of a bay window. This graceful arc adds architectural refinement and creates a sense of spaciousness that is particularly striking in formal living rooms, dining rooms, and master suites of South Florida luxury homes.

The multi-panel construction of bow impact windows provides expansive panoramic views that wrap around your line of sight, drawing the outdoors into your living space in a way that flat window walls simply cannot achieve. Each individual panel is glazed with laminated impact-resistant glass, and the entire assembly is engineered as an integrated unit that meets the wind pressure and missile impact requirements of the Florida Building Code for high-velocity hurricane zones.

Florida Impact Windows & Doors custom-designs every bow impact window assembly to match the specific dimensions and architectural character of your home. Our process begins with a detailed site evaluation to determine the optimal projection depth, panel count, and operating style for each side window. We coordinate directly with manufacturers to ensure precise fabrication, then our experienced installation team handles the structural integration, weatherproofing, and finish work that brings your vision to life with full hurricane-rated confidence.`,
    features: [
      "Four to six panel curved configuration for sweeping panoramic views",
      "Gentle arc projection less angular than traditional bay windows",
      "Laminated impact glass in every panel meets HVHZ standards",
      "Operable casement or double hung side panels available",
      "Engineered structural support system for wind load resistance",
      "Insulated head and seat board assembly",
      "Custom radius and projection depth to match architectural requirements",
      "Integrated flashing and waterproofing system",
      "Optional roof cap in copper, metal, or shingled finish",
      "Low-E coated insulating glass units for solar heat control",
      "Full perimeter weatherstripping on every operable panel",
      "Custom color and finish options to coordinate with exterior",
    ],
    benefits: [
      "Elegant curved profile adds architectural sophistication",
      "Panoramic views that wrap around your field of vision",
      "Creates a spacious interior alcove for furniture or plants",
      "Full hurricane protection across every panel in the assembly",
      "Floods interior spaces with abundant natural light",
      "Significant curb appeal enhancement for luxury properties",
      "Customizable panel count and projection for any opening size",
      "Ventilation through operable side panels",
      "Energy-efficient insulated construction reduces cooling loads",
      "Increases overall home value and marketability",
    ],
    image: "/images/windows/bow-impact-window.jpg",
  },
  {
    id: "hopper",
    name: "Hopper Impact Windows",
    slug: "hopper-impact-windows",
    shortDescription:
      "Bottom-hinged hopper impact windows that open inward for controlled ventilation in basements, bathrooms, and utility areas of South Florida properties.",
    fullDescription: `Hopper impact windows are hinged at the bottom and open inward from the top, providing controlled ventilation in spaces where outward-opening or sliding window styles are impractical. Commonly installed in basements, bathrooms, utility rooms, and above-door transoms, hopper windows are a practical solution for maintaining airflow and natural light in the smaller or harder-to-reach openings found throughout South Florida residential and commercial buildings.

The inward-opening design of hopper impact windows naturally directs incoming air upward toward the ceiling, promoting effective air circulation without creating direct drafts at floor level. When closed, the sash presses firmly against the frame by gravity and locking hardware, creating a reliable seal against wind, rain, and air infiltration. The laminated impact glass and reinforced frame construction ensure these compact windows deliver the same level of hurricane protection as their larger counterparts.

Florida Impact Windows & Doors installs hopper impact windows that are fully certified for South Florida's high-velocity hurricane zones. Despite their compact size, these windows are held to the same rigorous testing and installation standards as every product in our lineup. Our team ensures proper sealing, anchoring, and alignment so that every hopper window performs flawlessly during storm events while providing convenient day-to-day ventilation in the spaces where you need it most.`,
    features: [
      "Bottom-hinged design opens inward from the top",
      "Laminated impact-resistant glass for full hurricane protection",
      "Multi-point locking hardware for secure closure",
      "Compression weatherstripping on all four sides",
      "Heavy-duty stainless steel hinges for long-term durability",
      "Available in compact sizes for basement and utility applications",
      "Thermally broken frame reduces heat transfer",
      "Integral weep holes for proper water management",
      "Locking limit stop to control maximum opening angle",
      "Flush interior profile for easy cleaning",
      "Compatible with transom and combination window configurations",
      "Miami-Dade County NOA and Florida Product Approval certified",
    ],
    benefits: [
      "Effective ventilation for basements, bathrooms, and utility rooms",
      "Inward opening keeps rain out during light showers",
      "Compact size fits openings where other window styles cannot",
      "Full hurricane protection in a small package",
      "Gravity-assisted seal enhances weather resistance when closed",
      "Directs airflow upward for comfortable room circulation",
      "Low maintenance with simple operation and few moving parts",
      "Enhanced privacy for below-grade and bathroom installations",
      "Energy-efficient sealed design reduces cooling costs",
      "Meets all Florida Building Code requirements for impact resistance",
    ],
    image: "/images/windows/hopper-impact-window.jpg",
  },
];

// -----------------------------------------------------------------------------
// Door Types
// -----------------------------------------------------------------------------

export const doorTypes: DoorType[] = [
  {
    id: "sliding-glass",
    name: "Impact Sliding Glass Doors",
    slug: "impact-sliding-glass-doors",
    shortDescription:
      "Premium impact sliding glass doors that connect indoor and outdoor living spaces while delivering certified hurricane protection for South Florida homes.",
    fullDescription: `Impact sliding glass doors are the signature feature of South Florida living, creating seamless transitions between interior spaces and the patios, pools, and tropical landscapes that define the region's lifestyle. At Florida Impact Windows & Doors, our impact sliding glass doors combine expansive glass panels with heavy-duty track systems and laminated hurricane-rated glazing to give you the open, sun-drenched feel you desire with the storm protection your home requires.

Available in two-panel, three-panel, and four-panel configurations, our sliding glass impact doors accommodate openings from standard widths to dramatic multi-panel walls of glass. The laminated impact glass meets or exceeds Miami-Dade County HVHZ large missile impact standards, providing certified protection against windborne debris during hurricanes while also delivering year-round benefits including noise reduction, UV filtration, and enhanced security against forced entry.

Florida Impact Windows & Doors installs sliding glass impact doors from manufacturers known for smooth-rolling hardware, corrosion-resistant tracks, and precision-engineered weatherstripping systems. Our installation crews are specifically trained in the unique structural requirements of large sliding door assemblies, including proper threshold leveling, header reinforcement, and perimeter sealing. The result is a sliding glass door that operates effortlessly, seals tightly against storms, and transforms the way you experience your South Florida home.`,
    features: [
      "Laminated impact glass certified for Miami-Dade HVHZ standards",
      "Tandem stainless steel roller assemblies for smooth operation",
      "Heavy-duty extruded aluminum frame and track system",
      "Multi-point locking hardware with keyed exterior handle",
      "Available in 2-panel, 3-panel, and 4-panel configurations",
      "Standard and oversized heights up to 10 feet",
      "Thermally broken frame option for enhanced energy efficiency",
      "Corrosion-resistant finish rated for coastal environments",
      "Integral sliding screen door with heavy-duty mesh",
      "Flush or raised threshold options for ADA accessibility",
      "Optional pet door insert compatible with select models",
      "Decorative handle sets in multiple finish options",
    ],
    benefits: [
      "Seamless indoor-outdoor living connection",
      "Full hurricane protection without the need for shutters or panels",
      "Expansive glass maximizes natural light and views",
      "Smooth effortless sliding operation for daily convenience",
      "Significant noise reduction from exterior sources",
      "UV protection preserves interior furnishings and flooring",
      "Enhanced security with laminated glass and multi-point locks",
      "Energy-efficient design lowers air conditioning costs",
      "Insurance premium reductions with wind mitigation certification",
      "Increases property value and buyer appeal",
    ],
    image: "/images/doors/sliding-glass-impact-door.jpg",
  },
  {
    id: "french",
    name: "Impact French Doors",
    slug: "impact-french-doors",
    shortDescription:
      "Elegant impact French doors with full-length glass panels that add timeless sophistication and hurricane-rated security to South Florida residences.",
    fullDescription: `Impact French doors bring timeless architectural elegance to South Florida homes, featuring full-length glass panels framed by classic stile-and-rail construction that opens as a pair to create a dramatic wide entryway. Whether installed as an exterior entrance to a patio, veranda, or garden, or as an interior passage between formal rooms, impact French doors make a design statement that elevates the character of any home while delivering the hurricane protection that South Florida demands.

The laminated impact glass panels in our French doors span nearly the full height of the door, maximizing natural light transmission and views while meeting the stringent large missile impact and cyclic wind pressure requirements of the Florida Building Code for high-velocity hurricane zones. Heavy-duty multi-point locking hardware secures the active and inactive leaves at the head, jamb, and threshold, creating a rigid, sealed assembly capable of withstanding extreme storm conditions.

Florida Impact Windows & Doors offers impact French doors in a variety of panel configurations, grid patterns, and hardware finishes to suit every aesthetic preference from traditional Mediterranean villas to sleek contemporary waterfront homes. Our installation process includes precise alignment of both door leaves, proper threshold integration for waterproofing, and meticulous adjustment of multi-point locking mechanisms to ensure smooth, reliable operation. With Florida Impact Windows & Doors, your impact French doors will combine the beauty of classic design with the engineering performance required for South Florida's most demanding environments.`,
    features: [
      "Full-length laminated impact glass panels for maximum light",
      "Classic stile-and-rail construction in aluminum or fiberglass",
      "Multi-point locking system on both active and inactive leaves",
      "Heavy-duty concealed hinges rated for high-cycle use",
      "Astragal bar with flush bolt integration for clean appearance",
      "Available in single or double door configurations",
      "Optional sidelites and transom for expanded openings",
      "Decorative grid patterns including colonial and prairie styles",
      "Premium handle sets in brass, nickel, bronze, and black finishes",
      "Adjustable threshold with compression weatherstripping",
      "Certified for Miami-Dade County HVHZ missile impact standards",
      "Optional blinds between glass for privacy and light control",
    ],
    benefits: [
      "Timeless elegant appearance enhances any architectural style",
      "Wide opening for entertaining and indoor-outdoor flow",
      "Full hurricane protection without compromising aesthetics",
      "Maximum natural light through full-height glass panels",
      "Superior security with multi-point locking on both leaves",
      "Excellent noise reduction from laminated glass construction",
      "UV ray protection for interior furnishings and artwork",
      "Energy-efficient glazing reduces cooling costs",
      "Qualifies for insurance wind mitigation premium discounts",
      "Significant increase in home value and curb appeal",
    ],
    image: "/images/doors/french-impact-door.jpg",
  },
  {
    id: "entry-front",
    name: "Impact Entry & Front Doors",
    slug: "impact-entry-front-doors",
    shortDescription:
      "Stunning impact-rated entry and front doors that create a powerful first impression while safeguarding your South Florida home against hurricanes and intruders.",
    fullDescription: `Your front door is the first element visitors see and the primary barrier protecting your family and possessions. Florida Impact Windows & Doors offers impact-rated entry doors that combine striking visual design with the structural fortitude needed to withstand South Florida's hurricane threats, forced entry attempts, and the relentless effects of tropical sun, salt air, and heavy rainfall.

Our impact entry doors are available in fiberglass, steel, and premium wood-clad constructions, each engineered with laminated impact glass inserts or solid impact-resistant panels that meet Florida Building Code requirements for high-velocity hurricane zones. Fiberglass entry doors are especially popular in South Florida because they resist warping, rotting, and corrosion while faithfully replicating the look of natural wood grain. Steel doors provide the highest level of forced-entry resistance, while wood-clad options deliver the authentic warmth and character that luxury homeowners desire.

Florida Impact Windows & Doors guides you through the complete entry door selection process, from choosing the ideal material and glass configuration to selecting decorative hardware, sidelite panels, and transom windows that create a grand entrance proportioned perfectly for your home. Our licensed installation crews reinforce the door frame, install proper flashing, and calibrate all hardware to ensure your new impact entry door swings smoothly, latches securely, and stands firm against everything South Florida weather can deliver.`,
    features: [
      "Impact-rated construction meeting HVHZ missile impact standards",
      "Available in fiberglass, steel, and wood-clad materials",
      "Decorative laminated impact glass inserts in multiple patterns",
      "Multi-point locking system with deadbolt integration",
      "Adjustable hinges for precise long-term alignment",
      "Polyurethane foam core for superior insulation and strength",
      "Matching sidelite and transom panels for grand entries",
      "Decorative hardware in dozens of styles and finishes",
      "Rot-proof and warp-resistant composite frame options",
      "Factory-applied finish or paintable primer for custom colors",
      "Adjustable weatherstripping and compression threshold",
      "ADA-compliant threshold options available",
    ],
    benefits: [
      "Powerful first impression that defines your home's character",
      "Full hurricane protection for the most vulnerable entry point",
      "Maximum security with impact-resistant materials and multi-point locks",
      "Superior insulation reduces energy loss and cooling costs",
      "Resists warping, rotting, and corrosion in tropical climates",
      "Customizable design with glass inserts, sidelites, and transoms",
      "UV-resistant finishes maintain appearance in intense sun exposure",
      "Noise reduction from solid core construction",
      "Insurance wind mitigation credit eligibility",
      "Dramatically increases curb appeal and property value",
    ],
    image: "/images/doors/entry-front-impact-door.jpg",
  },
  {
    id: "patio",
    name: "Impact Patio Doors",
    slug: "impact-patio-doors",
    shortDescription:
      "Versatile impact patio doors in sliding and swinging configurations that enhance South Florida outdoor living while providing certified storm protection.",
    fullDescription: `Impact patio doors serve as the gateway between your home's interior and the outdoor living spaces that make South Florida such a desirable place to live. Whether your patio features a resort-style pool, an al fresco dining area, or a lushly landscaped garden retreat, Florida Impact Windows & Doors offers impact patio doors that open your home to the outdoors while maintaining certified hurricane protection every day of the year.

Available in both sliding and swinging configurations, our impact patio doors are engineered to handle the large openings that characterize South Florida architecture. Sliding patio doors maximize usable floor space on both sides of the threshold, while swinging patio doors provide a wider clear opening for high-traffic entertaining. Every configuration features laminated impact glass, heavy-duty frames, and multi-point locking hardware tested and approved for high-velocity hurricane zones throughout Miami-Dade, Broward, and Palm Beach counties.

Florida Impact Windows & Doors takes a consultative approach to patio door selection, evaluating your opening dimensions, traffic patterns, architectural style, and personal preferences to recommend the ideal configuration. We consider factors unique to South Florida, including saltwater corrosion resistance, solar heat gain management, and compatibility with screened enclosures and lanais. From measurement through installation and final inspection, our team ensures your impact patio door performs beautifully and withstands the most powerful storms.`,
    features: [
      "Laminated impact glass meeting Florida Building Code HVHZ requirements",
      "Available in sliding and swinging configurations",
      "Two-panel, three-panel, and four-panel layouts",
      "Heavy-duty extruded aluminum or reinforced vinyl frames",
      "Multi-point locking system with interior and exterior hardware",
      "Stainless steel tandem rollers for sliding models",
      "Adjustable threshold for proper drainage and sealing",
      "Integral screen door in sliding or retractable options",
      "Thermally broken frame construction for energy efficiency",
      "Corrosion-resistant hardware suitable for coastal locations",
      "Decorative handle options in contemporary and traditional styles",
      "Compatible with screened enclosure and lanai integration",
    ],
    benefits: [
      "Connects indoor and outdoor living for the South Florida lifestyle",
      "Full hurricane protection in sliding or swinging operation",
      "Flexible configurations for any opening size and traffic pattern",
      "Smooth operation for effortless daily use by all family members",
      "Substantial noise reduction from exterior sounds",
      "Energy-efficient design reduces monthly cooling expenses",
      "UV filtration protects furniture, flooring, and artwork",
      "Enhanced home security with impact glass and multi-point locks",
      "Insurance premium discounts through wind mitigation certification",
      "Increases home value and appeal to South Florida buyers",
    ],
    image: "/images/doors/patio-impact-door.jpg",
  },
  {
    id: "pivot",
    name: "Impact Pivot Doors",
    slug: "impact-pivot-doors",
    shortDescription:
      "Dramatic oversized impact pivot doors that rotate on a central or offset axis, making a bold architectural statement while meeting South Florida hurricane codes.",
    fullDescription: `Impact pivot doors represent the pinnacle of contemporary door design, rotating on a central or offset pivot point rather than traditional side-mounted hinges. This engineering allows for dramatically oversized door panels that can reach heights and widths far beyond what conventional hinged doors can support, creating a jaw-dropping entrance that communicates luxury, innovation, and architectural boldness in South Florida's most prestigious neighborhoods.

The pivot mechanism distributes the weight of these substantial door panels through a floor-mounted pivot box and ceiling-mounted pivot pin, enabling smooth, effortless rotation of doors that may weigh several hundred pounds. Florida Impact Windows & Doors sources impact pivot doors with laminated hurricane-rated glazing and reinforced panel construction that meets the Florida Building Code requirements for high-velocity hurricane zones, ensuring that spectacular design does not come at the expense of storm safety.

Florida Impact Windows & Doors has installed impact pivot doors in luxury residences, boutique commercial spaces, and high-end condominium lobbies throughout South Florida. The installation of a pivot door requires specialized structural preparation, including reinforced floor slabs and header beams, precise pivot hardware calibration, and meticulous weathersealing around the unique rotating mechanism. Our team manages every detail from engineering review through final adjustment, delivering a pivot door that operates with impressive smoothness and stands confidently against Category 5 hurricane conditions.`,
    features: [
      "Central or offset pivot mechanism for dramatic rotation",
      "Oversized panel dimensions up to 5 feet wide and 10 feet tall",
      "Laminated impact glass or solid impact-rated panel options",
      "Heavy-duty floor-mounted pivot box rated for substantial door weights",
      "Concealed pivot hardware for clean architectural lines",
      "Available in aluminum, steel, wood, and composite materials",
      "Custom glass configurations including full-lite and segmented designs",
      "Magnetic weatherstripping for positive seal when closed",
      "Integrated threshold drainage system",
      "Automatic soft-close mechanism option",
      "Premium handle and pull hardware in custom finishes",
      "Engineered and certified for HVHZ hurricane zone compliance",
    ],
    benefits: [
      "Stunning architectural focal point that defines luxury living",
      "Accommodates oversized openings impossible with hinged doors",
      "Smooth effortless rotation despite substantial door panel weight",
      "Full hurricane protection meeting the strictest South Florida codes",
      "Maximizes natural light with expansive glass panel options",
      "Creates a dramatic first impression for visitors and guests",
      "Enhances property value significantly in the luxury market",
      "Modern design aesthetic for contemporary South Florida architecture",
      "Durable construction withstands coastal salt air and UV exposure",
      "Custom engineered to your specific dimensional requirements",
    ],
    image: "/images/doors/pivot-impact-door.jpg",
  },
  {
    id: "garage",
    name: "Impact Garage Doors",
    slug: "impact-garage-doors",
    shortDescription:
      "Wind-rated impact garage doors that protect the largest opening in your South Florida home, preventing catastrophic pressurization during hurricanes.",
    fullDescription: `The garage door is typically the largest opening in any South Florida home, and it represents the single most critical vulnerability during a hurricane. If a garage door fails under wind pressure or debris impact, the resulting sudden pressurization of the home interior can cause catastrophic roof uplift and structural collapse. Florida Impact Windows & Doors installs impact-rated garage doors specifically engineered to resist the extreme wind loads and flying debris that hurricanes bring to Miami-Dade, Broward, and Palm Beach counties.

Our impact garage doors are constructed with wind-rated reinforced panels, heavy-duty track and roller systems, and high-tension torsion spring assemblies designed to maintain structural integrity under the most severe storm conditions. Available in steel, aluminum, and composite materials with a wide range of insulation options, these doors meet or exceed the Florida Building Code requirements for high-velocity hurricane zones while offering the curb appeal and daily functionality you expect from a premium garage door.

Florida Impact Windows & Doors helps homeowners select the right impact garage door from our comprehensive lineup of styles, including raised panel, flush panel, carriage house, and contemporary aluminum-and-glass designs. We evaluate your garage opening dimensions, wind zone classification, and aesthetic preferences to recommend the optimal product, then our specialized garage door installation team handles every aspect from track mounting and spring calibration to opener integration and weatherstripping. The result is a garage door that enhances your home's appearance, operates reliably, and stands strong when South Florida needs it most.`,
    features: [
      "Wind-rated construction meeting HVHZ design pressure requirements",
      "Reinforced panel sections with internal bracing",
      "Impact-resistant glazing options for windowed panels",
      "Heavy-duty galvanized steel track and roller system",
      "High-tension torsion spring assembly for balanced operation",
      "Available in steel, aluminum, and composite panel materials",
      "Polyurethane or polystyrene insulation options for thermal efficiency",
      "Raised panel, flush, carriage house, and contemporary glass styles",
      "Compatible with smart garage door openers and home automation",
      "Corrosion-resistant finish for coastal salt air environments",
      "Perimeter weatherstripping and bottom seal for weather protection",
      "Florida Product Approval and Miami-Dade NOA certification",
    ],
    benefits: [
      "Protects the largest and most vulnerable opening in your home",
      "Prevents catastrophic interior pressurization during hurricanes",
      "Eliminates the need for separate garage door storm panels",
      "Enhances curb appeal with premium design options",
      "Insulated construction improves garage temperature and energy use",
      "Heavy-duty hardware ensures reliable daily operation",
      "Reduces exterior noise entering through the garage",
      "Compatible with modern smart home and opener systems",
      "Insurance wind mitigation credit for the garage opening",
      "Significant return on investment through property value increase",
    ],
    image: "/images/doors/garage-impact-door.jpg",
  },
  {
    id: "storm",
    name: "Impact Storm Doors",
    slug: "impact-storm-doors",
    shortDescription:
      "Heavy-duty impact storm doors that add an extra layer of hurricane and security protection to existing entry points in South Florida homes.",
    fullDescription: `Impact storm doors provide an additional layer of protection installed in front of your existing entry or patio door, combining ventilation flexibility with the hurricane-rated impact resistance that South Florida building codes require. These doors feature laminated impact glass or heavy-duty screen panels within a reinforced aluminum frame, allowing you to enjoy fresh air and natural light through your main doorway while maintaining certified storm protection at all times.

Unlike traditional screen doors or lightweight storm doors found in other regions, South Florida impact storm doors are engineered to meet the same rigorous wind load and missile impact standards as primary impact doors and windows. The laminated glass panels resist penetration from windborne debris, while the reinforced frame and multi-point locking hardware anchor the door securely within the opening during extreme wind events. Interchangeable glass and screen panels let you adapt the door's function to the season, using ventilating screens during mild weather and switching to full glass panels when maximum protection or climate control is desired.

Florida Impact Windows & Doors installs impact storm doors that complement the appearance and enhance the performance of your existing entry system. We measure precisely to ensure a custom fit within your door frame, select hardware finishes that coordinate with your existing door, and install the unit with proper anchoring and weathersealing. For homeowners who want to add hurricane protection to a beloved existing front door or those seeking an extra barrier of security, our impact storm doors deliver practical performance and peace of mind throughout every hurricane season.`,
    features: [
      "Laminated impact glass meeting HVHZ missile impact requirements",
      "Reinforced extruded aluminum frame construction",
      "Multi-point locking hardware for secure storm protection",
      "Interchangeable glass and screen panel system",
      "Heavy-duty stainless steel hinges with adjustable tension",
      "Self-closing pneumatic or hydraulic closer mechanism",
      "Corrosion-resistant finish for coastal environments",
      "Full-view, mid-view, and ventilating style options",
      "Keyed deadbolt and lever handle hardware sets",
      "Adjustable expander on bottom rail for uneven thresholds",
      "Compatible with standard and custom door frame sizes",
      "Pet door insert option available for select models",
    ],
    benefits: [
      "Extra layer of hurricane protection for existing entry doors",
      "Ventilation through screen panels without sacrificing storm readiness",
      "Enhanced security with impact glass and multi-point locks",
      "Protects primary door from weather damage and UV fading",
      "Allows you to keep your existing front door while adding impact rating",
      "Interchangeable panels adapt to seasonal needs",
      "Reduces noise and improves energy efficiency",
      "Self-closing mechanism keeps bugs and debris out",
      "Customizable styles complement any home exterior",
      "Cost-effective way to add certified impact protection to entry points",
    ],
    image: "/images/doors/storm-impact-door.jpg",
  },
];

// -----------------------------------------------------------------------------
// Main Services
// -----------------------------------------------------------------------------

export const mainServices: MainService[] = [
  {
    id: "impact-windows",
    name: "Impact Windows",
    slug: "impact-windows",
    shortDescription:
      "Premium impact window installation throughout South Florida, delivering certified hurricane protection, energy savings, and noise reduction for every home.",
    fullDescription: `Florida Impact Windows & Doors is South Florida's trusted provider of premium impact window installation, offering a comprehensive selection of hurricane-rated window systems designed to protect your home, reduce energy costs, and enhance everyday comfort. Every impact window we install features laminated glass constructed with a durable interlayer that holds the glass together upon impact, preventing dangerous shards from entering your home and maintaining the building envelope's integrity during Category 5 hurricane conditions.

Our impact window service covers every style, including single hung, double hung, casement, awning, picture, sliding, bay, bow, and hopper configurations. We work exclusively with top-tier manufacturers who hold Florida Product Approvals and Miami-Dade County Notices of Acceptance, ensuring that every window meets or exceeds the most stringent building code requirements in the nation. From initial consultation and precise measurement through expert installation and final inspection, Florida Impact Windows & Doors manages every step of your impact window project with professionalism and attention to detail.

Beyond hurricane protection, our impact windows deliver substantial benefits that improve daily life in South Florida. Homeowners consistently report dramatically reduced noise from traffic, aircraft, and neighborhood activity, lower monthly energy bills from improved insulation and solar heat rejection, and protection of interior furnishings from harmful UV radiation. Combined with potential homeowner insurance premium reductions of 25% or more, impact windows from Florida Impact Windows & Doors represent one of the smartest investments you can make in your South Florida property.`,
    features: [
      "Full range of impact window styles for any opening type",
      "Products from PGT, CGI, ES Windows, and CWS manufacturers",
      "Miami-Dade HVHZ certified for the highest wind zone protection",
      "Low-E and Solar Low-E glass options for energy efficiency",
      "Argon gas-filled insulating glass units available",
      "Custom sizing and architectural shapes for unique openings",
      "Factory-trained installation crews licensed and insured",
      "Complete permit coordination and final inspection management",
      "Manufacturer warranties backed by Florida Impact Windows & Doors workmanship guarantee",
      "Free in-home consultation and detailed project estimation",
      "Flexible financing options with approved credit",
      "Post-installation wind mitigation inspection coordination",
    ],
    benefits: [
      "24/7 hurricane protection without deploying shutters",
      "Insurance premium reductions of 25% or more annually",
      "Significant reduction in energy cooling costs",
      "Superior noise reduction for a quieter home environment",
      "UV protection preserves flooring, furniture, and artwork",
      "Enhanced security against break-in attempts",
      "Increased property value and faster resale",
      "Meets all Florida Building Code and local requirements",
      "One-time investment eliminates ongoing shutter maintenance",
      "Peace of mind for you and your family every hurricane season",
    ],
    image: "/images/services/impact-windows-service.jpg",
  },
  {
    id: "impact-doors",
    name: "Impact Doors",
    slug: "impact-doors",
    shortDescription:
      "Complete impact door solutions for South Florida homes, from sliding glass and French doors to entry doors and garage doors with hurricane-rated certification.",
    fullDescription: `Florida Impact Windows & Doors provides comprehensive impact door installation services that protect every entry point of your South Florida home against hurricane-force winds and windborne debris. Doors represent some of the largest openings in your building envelope, and their failure during a storm can lead to rapid interior pressurization and catastrophic structural damage. Our impact door systems are engineered and tested to prevent this scenario, giving you confidence that your home will remain secure through the most powerful storms.

We offer the full spectrum of impact door styles, including sliding glass doors, French doors, entry and front doors, patio doors, pivot doors, garage doors, and storm doors. Each product in our lineup carries the Florida Product Approvals and Miami-Dade County NOAs required for installation in high-velocity hurricane zones, and our experienced installation teams follow exacting procedures to ensure every door is properly anchored, sealed, and adjusted for optimal performance.

Choosing Florida Impact Windows & Doors for your impact door installation means working with a company that understands the unique demands of South Florida's climate and building environment. We account for salt air corrosion, intense UV exposure, frequent heavy rainfall, and extreme temperature differentials between air-conditioned interiors and tropical exteriors. Our product recommendations, installation techniques, and material selections reflect decades of cumulative experience serving homeowners across Miami-Dade, Broward, and Palm Beach counties.`,
    features: [
      "Complete lineup of impact door styles for every opening",
      "Sliding glass, French, entry, patio, pivot, garage, and storm doors",
      "Products from leading impact-rated door manufacturers",
      "Miami-Dade HVHZ certified for maximum wind zone compliance",
      "Multi-point locking hardware standard on all operable doors",
      "Corrosion-resistant materials for coastal durability",
      "Custom sizing for non-standard openings",
      "Professional installation by licensed and insured crews",
      "Full permit processing and inspection coordination",
      "Comprehensive warranties on products and installation labor",
      "Financing programs available for qualified homeowners",
      "Emergency board-up and temporary protection services",
    ],
    benefits: [
      "Complete protection for every door opening in your home",
      "Prevents interior pressurization that causes roof failure",
      "Enhanced security against forced entry and burglary",
      "Substantial noise reduction throughout the home",
      "Energy savings from insulated glass and sealed frames",
      "UV protection for interior surfaces and furnishings",
      "Insurance wind mitigation credits for all protected openings",
      "Increased property value and marketability",
      "Eliminates the hassle of installing door panels before storms",
      "Professional installation ensures code compliance and longevity",
    ],
    image: "/images/services/impact-doors-service.jpg",
  },
  {
    id: "hurricane-shutters",
    name: "Hurricane Shutters",
    slug: "hurricane-shutters",
    shortDescription:
      "Reliable hurricane shutter systems including accordion, roll-down, Bahama, and colonial styles for South Florida homeowners seeking proven storm protection.",
    fullDescription: `While impact windows and doors provide the most convenient hurricane protection available, Florida Impact Windows & Doors also offers a complete range of hurricane shutter systems for homeowners who prefer a deployable protection solution or need to supplement existing non-impact-rated openings. Our shutter products include accordion shutters, roll-down shutters, Bahama shutters, colonial shutters, and panel shutter systems, each engineered and approved for use in South Florida's high-velocity hurricane zones.

Accordion shutters fold neatly beside windows and doors when not in use and deploy quickly by sliding along a top and bottom track, making them one of the most popular and cost-effective shutter options. Roll-down shutters offer push-button convenience with motorized operation that lowers a solid curtain of interlocking aluminum slats for instant protection. Bahama and colonial shutters serve double duty as decorative exterior elements that add Caribbean architectural charm while providing code-compliant storm protection when secured.

Florida Impact Windows & Doors evaluates your home's specific needs and helps you choose the shutter system that best balances budget, aesthetics, convenience, and protection level. Our installation team anchors every shutter system into the structural elements of your home using stainless steel fasteners, ensuring reliable deployment when you need it most. We also offer combination solutions that pair impact windows on primary living spaces with shutter systems on secondary openings, providing comprehensive protection at a budget that works for your family.`,
    features: [
      "Accordion shutters with smooth-rolling track operation",
      "Motorized roll-down shutters with remote control",
      "Decorative Bahama shutters with tropical aesthetic",
      "Colonial shutters that complement traditional architecture",
      "Aluminum and steel storm panel systems",
      "Clear polycarbonate panel options for light transmission",
      "Miami-Dade HVHZ approved products",
      "Stainless steel anchoring hardware for corrosion resistance",
      "Manual and motorized operation options",
      "Custom color matching for exterior coordination",
      "Combination solutions pairing shutters with impact products",
      "Annual maintenance and inspection programs available",
    ],
    benefits: [
      "Cost-effective hurricane protection for all openings",
      "Multiple style options to match aesthetic preferences",
      "Roll-down shutters provide instant push-button deployment",
      "Bahama and colonial styles add architectural character",
      "Insurance wind mitigation credits reduce premiums",
      "Proven protection track record through decades of hurricanes",
      "Supplemental protection for non-impact openings",
      "Deters break-in attempts when deployed or permanently installed",
      "Panel systems offer budget-friendly protection",
      "Professional installation ensures reliable storm-ready operation",
    ],
    image: "/images/services/hurricane-shutters-service.jpg",
  },
  {
    id: "energy-efficient-windows",
    name: "Energy Efficient Windows",
    slug: "energy-efficient-windows",
    shortDescription:
      "High-performance energy efficient impact windows with Low-E glass, argon gas fills, and insulated frames that dramatically reduce cooling costs in South Florida's tropical climate.",
    fullDescription: `South Florida homeowners face some of the highest cooling costs in the nation due to the region's intense solar radiation, high humidity, and year-round warm temperatures. Florida Impact Windows & Doors addresses this challenge with energy efficient impact windows that incorporate advanced glazing technologies, including Low-E coatings, argon gas fills, and thermally broken frames, engineered to reject solar heat before it enters your home while maintaining the full hurricane protection your property requires.

Low-E (low emissivity) glass coatings are microscopically thin metallic layers applied to the glass surface that reflect infrared heat energy back toward its source, keeping solar heat outside during summer while retaining conditioned air inside. When combined with argon gas-filled insulating glass units, which reduce convective heat transfer between the glass panes, and thermally broken aluminum or insulated vinyl frames that eliminate heat conduction through the frame itself, the result is a window system that can reduce solar heat gain by up to 70% compared to standard single-pane glass.

Florida Impact Windows & Doors helps homeowners select the optimal energy performance level for their specific situation. We analyze your home's orientation, window exposure, existing insulation levels, and energy usage patterns to recommend the glazing configuration that delivers the greatest return on investment. Whether you choose Solar Low-E coatings for south and west-facing windows, triple-silver Low-E for maximum heat rejection, or a balanced approach across the entire home, our energy efficient impact windows pay for themselves through reduced utility bills while providing superior hurricane protection.`,
    features: [
      "Low-E glass coatings reflecting up to 70% of solar heat",
      "Argon gas-filled insulating glass units",
      "Thermally broken aluminum frame construction",
      "Multi-chamber insulated vinyl frame options",
      "Solar Low-E and triple-silver coating technologies",
      "Warm edge spacer systems to reduce condensation",
      "ENERGY STAR certified products available",
      "Solar Heat Gain Coefficient (SHGC) as low as 0.20",
      "U-Factor ratings meeting or exceeding ENERGY STAR South Central criteria",
      "Visible Light Transmittance (VLT) options for brightness control",
      "Impact-rated laminated glass with energy-efficient interlayer",
      "Custom energy analysis and glazing recommendations",
    ],
    benefits: [
      "Dramatically reduced monthly electricity and cooling costs",
      "Up to 70% reduction in solar heat gain through windows",
      "Maintains comfortable interior temperatures with less AC usage",
      "Reduces HVAC system strain and extends equipment lifespan",
      "Full hurricane protection combined with energy performance",
      "Eliminates hot spots near south and west facing windows",
      "Reduces interior glare while maintaining natural light",
      "May qualify for energy efficiency tax credits and rebates",
      "Lowers carbon footprint and environmental impact",
      "Increases home value with documented energy performance improvements",
    ],
    image: "/images/services/energy-efficient-windows-service.jpg",
  },
  {
    id: "window-replacement",
    name: "Window Replacement",
    slug: "window-replacement",
    shortDescription:
      "Professional window replacement services upgrading outdated, non-impact windows to modern hurricane-rated systems throughout South Florida homes and condominiums.",
    fullDescription: `Replacing outdated, non-impact windows with modern hurricane-rated impact windows is one of the most impactful upgrades a South Florida homeowner can make. Florida Impact Windows & Doors specializes in full-service window replacement, removing your existing windows and installing new impact-rated systems that meet current Florida Building Code requirements while dramatically improving your home's storm protection, energy efficiency, security, and comfort.

Our window replacement process begins with a thorough assessment of your existing windows, measuring each opening precisely and evaluating the surrounding wall construction to determine the optimal installation method. We offer both new construction (full frame) replacements, where the entire window frame and trim are removed and replaced, and retrofit (insert) replacements, where the new impact window is installed within the existing frame opening. The right approach depends on the condition of your current frames, your budget, and whether you want to upgrade the size or style of your window openings.

Florida Impact Windows & Doors manages every aspect of the replacement project, including building permits, HOA approval documentation, product ordering, professional installation, debris removal, and final building department inspection. We coordinate our work schedules to minimize disruption to your daily life, typically completing whole-home window replacement projects within a few days. Our commitment to clean, courteous, and efficient workmanship has earned us thousands of satisfied customers across Miami-Dade, Broward, and Palm Beach counties.`,
    features: [
      "Full home or individual window replacement services",
      "New construction (full frame) and retrofit (insert) methods",
      "Precise digital measurement for custom-fit fabrication",
      "Removal and disposal of existing windows and materials",
      "Structural reinforcement where needed for code compliance",
      "Interior and exterior trim restoration and finishing",
      "Complete building permit processing and inspection",
      "HOA application preparation and approval coordination",
      "Product selection assistance from multiple premium brands",
      "Energy analysis to optimize glazing performance",
      "Flexible scheduling to minimize household disruption",
      "Post-installation cleanup and debris hauling",
    ],
    benefits: [
      "Upgrade from non-impact to hurricane-rated protection",
      "Modernize your home's appearance and functionality",
      "Immediate improvement in energy efficiency and comfort",
      "Substantial noise reduction from new sealed window systems",
      "Insurance premium savings with updated wind mitigation report",
      "Resolve issues with foggy, leaking, or difficult-to-operate windows",
      "Increase property value with code-compliant impact windows",
      "Enhance home security with laminated glass and modern hardware",
      "One-stop service from consultation through final inspection",
      "Financing options make whole-home replacement affordable",
    ],
    image: "/images/services/window-replacement-service.jpg",
  },
  {
    id: "door-replacement",
    name: "Door Replacement",
    slug: "door-replacement",
    shortDescription:
      "Expert door replacement services upgrading all entry points to hurricane-rated impact doors, from sliding glass to front doors, across South Florida properties.",
    fullDescription: `Florida Impact Windows & Doors provides professional door replacement services that upgrade your home's entry points to modern impact-rated systems meeting current South Florida building codes. Whether you need to replace a single aging sliding glass door, upgrade a non-impact front door, or replace every door in your home as part of a comprehensive hurricane protection project, our team delivers precision installation and exceptional craftsmanship from start to finish.

Door replacement in South Florida involves unique considerations that general contractors often overlook. The structural headers above door openings must support the weight and wind loads of impact-rated doors, which are typically heavier than standard alternatives. Threshold integration must account for South Florida's flat terrain and frequent heavy rainfall to prevent water intrusion. And the frame anchoring system must be engineered to transfer extreme wind loads directly into the building's structural elements, not just the surrounding drywall or stucco.

Florida Impact Windows & Doors installation teams are specifically trained in the requirements of impact door replacement for South Florida construction types, including CBS (concrete block and stucco), wood frame, and reinforced concrete structures. We reinforce headers when necessary, install proper pan flashing and sill drainage, and anchor frames with approved fastener patterns that meet the product manufacturer's tested and approved installation instructions. This attention to structural detail is what separates a proper impact door installation from one that looks good but may fail when tested by a real hurricane.`,
    features: [
      "Replacement of all door types including sliding, French, entry, and garage",
      "Structural header evaluation and reinforcement when required",
      "Proper pan flashing and threshold waterproofing installation",
      "Frame anchoring per manufacturer-approved fastener schedules",
      "Removal and disposal of existing doors and hardware",
      "Interior and exterior trim restoration and caulking",
      "Multi-point lock hardware installation and adjustment",
      "Building permit processing and final inspection coordination",
      "HOA documentation preparation and submission",
      "Compatibility evaluation with existing alarm and smart home systems",
      "Screen door and screen enclosure integration services",
      "ADA-compliant threshold options for accessibility needs",
    ],
    benefits: [
      "Upgrade all entry points to current hurricane protection standards",
      "Resolve issues with leaking, sticking, or failing door systems",
      "Dramatically improve home security at every entry point",
      "Reduce noise intrusion through properly sealed door assemblies",
      "Lower energy costs with insulated impact door construction",
      "Insurance wind mitigation credits for all replaced openings",
      "Enhance curb appeal with modern door styles and hardware",
      "Increase property value and marketability",
      "Professional structural integration ensures long-term performance",
      "Comprehensive warranty coverage on products and labor",
    ],
    image: "/images/services/door-replacement-service.jpg",
  },
  {
    id: "commercial-services",
    name: "Commercial Services",
    slug: "commercial-services",
    shortDescription:
      "Commercial impact window and door solutions for South Florida businesses, office buildings, storefronts, and multi-unit properties with code-compliant hurricane protection.",
    fullDescription: `Florida Impact Windows & Doors extends its expertise in impact window and door installation to the commercial sector, serving businesses, office buildings, retail storefronts, restaurants, hotels, multi-unit residential properties, and institutional facilities throughout South Florida. Commercial properties face the same hurricane threats as residential homes but often involve larger openings, higher wind load requirements, and complex building code compliance considerations that demand specialized knowledge and experience.

Our commercial services cover the full range of impact-rated products, including storefront glazing systems, curtain wall components, commercial-grade sliding and swing doors, fire-rated impact windows, blast-resistant glazing, and large-scale hurricane shutter installations. We work with property managers, building owners, general contractors, and architects to develop specifications, provide competitive bidding, and execute installations that meet both the Florida Building Code and the specific operational requirements of each commercial tenant.

Florida Impact Windows & Doors understands that commercial projects require careful scheduling to minimize business disruption, coordination with multiple trades and stakeholders, and strict compliance with commercial building codes, ADA requirements, and fire safety regulations. Our commercial project managers oversee every phase of the work, from initial specification development through product procurement, installation scheduling, progress reporting, and final inspection. We maintain proper insurance coverage, worker safety protocols, and site cleanliness standards that commercial property owners and managers require.`,
    features: [
      "Commercial-grade impact storefront and curtain wall systems",
      "High-performance impact sliding and swing door assemblies",
      "Fire-rated impact window and door products",
      "Large missile and enhanced missile impact-rated glazing",
      "Commercial hurricane shutter systems for all opening sizes",
      "ADA-compliant door and threshold configurations",
      "Thermal and blast-resistant glazing options",
      "Multi-phase project scheduling to minimize tenant disruption",
      "Coordination with architects, engineers, and general contractors",
      "Commercial permit processing and inspection management",
      "Product specification writing and value engineering",
      "Dedicated commercial project management team",
    ],
    benefits: [
      "Protect commercial property and inventory from hurricane damage",
      "Maintain business continuity during and after storm events",
      "Meet commercial building code and insurance requirements",
      "Reduce commercial energy costs with high-performance glazing",
      "Enhance tenant comfort and satisfaction",
      "Protect employee safety with certified impact systems",
      "Commercial insurance premium reductions with compliant protection",
      "Increase commercial property value and lease rates",
      "Professional project management minimizes business disruption",
      "Single-source responsibility for products, installation, and warranty",
    ],
    image: "/images/services/commercial-services.jpg",
  },
];

// -----------------------------------------------------------------------------
// Brands
// -----------------------------------------------------------------------------

export const brands: Brand[] = [
  {
    id: "pgt",
    name: "PGT",
    slug: "pgt",
    description: `PGT Industries is one of the largest and most recognized manufacturers of impact-resistant windows and doors in the United States, headquartered in Venice, Florida. With over five decades of experience engineering products specifically for the demanding hurricane zones of Florida and the Gulf Coast, PGT has established itself as the go-to brand for homeowners and builders who demand proven performance, extensive product selection, and reliable availability. Their WinGuard line of impact windows and doors is one of the most widely installed impact product families in South Florida, trusted by hundreds of thousands of homeowners to protect their properties season after season.

Florida Impact Windows & Doors is an authorized dealer and installer of PGT impact windows and doors, giving our customers access to the full PGT product catalog along with factory-backed warranties and technical support. PGT products consistently earn top ratings for structural performance, energy efficiency, and design versatility, with options ranging from budget-friendly vinyl impact windows to premium aluminum and custom architectural solutions. Whether you are building a new home, replacing existing windows, or upgrading to impact-rated protection, PGT offers a solution for every need and budget.`,
    features: [
      "WinGuard impact-resistant window and door product line",
      "EnergyVue energy-efficient impact window series",
      "ClassicVue max non-impact window systems",
      "Aluminum and vinyl frame construction options",
      "Miami-Dade County NOA certified products",
      "ENERGY STAR certified models available",
      "Extensive color palette and custom finish options",
      "Architectural and custom-shaped window capabilities",
      "Comprehensive manufacturer warranty program",
      "Largest impact window manufacturer in the United States",
    ],
    products: [
      "WinGuard Vinyl Single Hung",
      "WinGuard Vinyl Double Hung",
      "WinGuard Vinyl Horizontal Roller",
      "WinGuard Aluminum Single Hung",
      "WinGuard Aluminum Casement",
      "WinGuard Aluminum Sliding Glass Door",
      "WinGuard Vinyl Sliding Glass Door",
      "EnergyVue Vinyl Impact Windows",
      "PGT Aluminum Impact French Doors",
      "PGT Custom Architectural Windows",
    ],
    logo: "/images/brands/pgt-logo.png",
  },
  {
    id: "cgi",
    name: "CGI",
    slug: "cgi",
    description: `CGI Windows and Doors is a premier Florida-based manufacturer known for producing high-quality impact-resistant windows and doors that combine superior storm protection with refined aesthetic design. Operating from their manufacturing facility in Miami, CGI has built a strong reputation among South Florida architects, builders, and discerning homeowners who seek products that deliver both exceptional performance and elevated visual appeal. Their Sentinel and Estate collections offer distinct product tiers that cater to a wide range of residential and commercial projects across the hurricane-prone regions of Florida and the Caribbean.

Florida Impact Windows & Doors proudly installs CGI impact windows and doors, leveraging our deep familiarity with the CGI product line to recommend the ideal solutions for each customer's unique needs. CGI products are engineered with meticulous attention to detail, featuring precision-extruded aluminum frames, high-performance laminated glazing, and hardware systems tested to withstand the most extreme conditions South Florida can deliver. Their commitment to quality control and product innovation has made CGI a preferred specification among South Florida's leading architects and luxury home builders.`,
    features: [
      "Sentinel series impact windows and doors",
      "Estate collection premium impact products",
      "Targa vinyl impact window line",
      "Precision-extruded aluminum frame construction",
      "Full line of impact-rated window and door styles",
      "Miami-Dade HVHZ approved across all product lines",
      "Custom color anodizing and powder coating",
      "Architectural and specialty shape capabilities",
      "Commercial and residential product divisions",
      "Manufactured in Miami, Florida",
    ],
    products: [
      "Sentinel Single Hung Impact Window",
      "Sentinel Horizontal Roller Impact Window",
      "Sentinel Casement Impact Window",
      "Estate Series Sliding Glass Door",
      "Estate Series French Door",
      "Targa Vinyl Impact Single Hung",
      "Targa Vinyl Impact Horizontal Roller",
      "CGI Commercial Storefront Systems",
      "CGI Architectural Impact Windows",
      "CGI Impact Entry Door Systems",
    ],
    logo: "/images/brands/cgi-logo.png",
  },
  {
    id: "es-windows",
    name: "ES Windows",
    slug: "es-windows",
    description: `ES Windows is a Miami-based manufacturer that has earned widespread recognition for producing high-performance impact windows and doors that deliver outstanding value without compromising on quality or storm protection certification. Founded with the mission of making premium hurricane protection accessible to every South Florida homeowner, ES Windows has grown into one of the region's most trusted brands, known for competitive pricing, reliable product availability, and impact-rated performance that meets the stringent Miami-Dade County HVHZ requirements that govern construction in the most demanding wind zones in the nation.

Florida Impact Windows & Doors installs ES Windows products for homeowners seeking an exceptional balance of performance, aesthetics, and value. ES Windows manufactures a comprehensive range of impact window and door styles in both aluminum and vinyl frame constructions, with options for various glass types, colors, and configurations. Their local manufacturing presence in Miami ensures shorter lead times and responsive customer service, while their commitment to rigorous testing and quality assurance means every product that leaves their facility is ready to protect South Florida homes through the most intense hurricane seasons.`,
    features: [
      "Full line of aluminum and vinyl impact windows",
      "Impact-rated sliding glass doors and French doors",
      "Miami-Dade County HVHZ NOA approved products",
      "Competitive pricing for budget-conscious projects",
      "Local manufacturing in Miami for reduced lead times",
      "Energy-efficient glazing options available",
      "Custom sizing for non-standard openings",
      "Multiple color and finish options",
      "Residential and light commercial applications",
      "Strong regional dealer and installer network",
    ],
    products: [
      "ES Aluminum Single Hung Impact Window",
      "ES Aluminum Horizontal Roller Impact Window",
      "ES Aluminum Casement Impact Window",
      "ES Vinyl Single Hung Impact Window",
      "ES Vinyl Horizontal Roller Impact Window",
      "ES Impact Sliding Glass Door",
      "ES Impact French Door",
      "ES Impact Picture Window",
      "ES Impact Awning Window",
      "ES Commercial Impact Systems",
    ],
    logo: "/images/brands/es-windows-logo.png",
  },
  {
    id: "cws",
    name: "Custom Window Systems (CWS)",
    slug: "custom-window-systems-cws",
    description: `Custom Window Systems, commonly known as CWS, is a Florida manufacturer specializing in high-quality aluminum impact windows and doors that have protected South Florida homes and commercial properties for decades. Known for their robust aluminum frame construction and extensive product range, CWS has established a loyal following among contractors and homeowners who value heavy-duty performance, proven durability, and the ability to withstand the corrosive coastal conditions that challenge lesser products. Their manufacturing processes emphasize structural integrity and precision engineering, producing impact-rated products that perform reliably through the most demanding South Florida weather.

Florida Impact Windows & Doors offers CWS impact windows and doors as part of our commitment to providing customers with a range of trusted options at various price points. CWS products are particularly well suited for coastal properties where salt air exposure demands the most corrosion-resistant materials and finishes available. Their product lineup covers all standard window and door styles, with the heavy-duty aluminum construction that professional installers appreciate for its dimensional stability and long-term performance. Whether for new construction or replacement projects, CWS delivers the rugged reliability that South Florida's environment demands.`,
    features: [
      "Heavy-duty aluminum frame construction throughout product line",
      "Full range of impact window and door styles",
      "Miami-Dade County HVHZ certified products",
      "Superior corrosion resistance for coastal installations",
      "Impact-rated laminated glass meeting large missile standards",
      "Custom sizing and specialty configurations available",
      "Durable powder-coated and anodized finish options",
      "Residential and commercial product lines",
      "Florida-based manufacturing with regional distribution",
      "Decades of proven hurricane performance history",
    ],
    products: [
      "CWS Aluminum Single Hung Impact Window",
      "CWS Aluminum Double Hung Impact Window",
      "CWS Aluminum Horizontal Roller Impact Window",
      "CWS Aluminum Casement Impact Window",
      "CWS Aluminum Awning Impact Window",
      "CWS Impact Sliding Glass Door",
      "CWS Impact French Door",
      "CWS Impact Entry Door",
      "CWS Commercial Storefront Impact Systems",
      "CWS Architectural Impact Windows",
    ],
    logo: "/images/brands/cws-logo.png",
  },
];
