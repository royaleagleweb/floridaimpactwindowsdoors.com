/**
 * Rule-based chat answers. Every sentence is shortened from copy already
 * published on the site (pages, FAQ, financing, contact, homepage).
 */

export const PHONE_DISPLAY = "(754) 600-4876";
export const PHONE_TEL = "tel:+17546004876";
export const NUDGE_TEXT = "Questions about impact windows? Get a free estimate";
export const NUDGE_STORAGE_KEY = "fiwd-chat-nudge";
export const ESTIMATE_BUTTON_LABEL = "Get my free estimate";
export const CALL_BUTTON_LABEL = `Call ${PHONE_DISPLAY}`;

export const QUICK_REPLIES = [
  { id: "estimate", label: "Get a free estimate" },
  { id: "windows", label: "Impact windows" },
  { id: "doors", label: "Impact doors" },
  { id: "cost", label: "Cost / financing" },
  { id: "code", label: "Hurricane code & insurance savings" },
  { id: "areas", label: "Service areas" },
  { id: "talk", label: "Talk to someone" },
] as const;

export type QuickReplyId = (typeof QUICK_REPLIES)[number]["id"];

export const NEED_OPTIONS = [
  { id: "windows", label: "Windows", service: "Impact windows" },
  { id: "doors", label: "Doors", service: "Impact doors" },
  { id: "both", label: "Both", service: "Windows and doors" },
  { id: "roof", label: "Roof", service: "Roof" },
  { id: "other", label: "Other", service: "Other" },
] as const;

export type NeedId = (typeof NEED_OPTIONS)[number]["id"];

export interface ChatMatch {
  id: string;
  text: string;
  quickReplies?: boolean;
}

export const ANSWERS = {
  greeting:
    "Hi — I can answer a few questions about impact windows and doors in Miami-Dade, Broward, and Palm Beach. When you are ready, get a free estimate here or call (754) 600-4876.",
  windows:
    "Impact windows use laminated glass, two panes bonded with an interlayer, so if debris cracks the glass it stays in the frame. The units we install are tested to the Florida Building Code and Miami-Dade NOA standards, and Low-E glass, noise reduction, and UV blocking come with them. Miami-Dade and Broward are the High Velocity Hurricane Zone; Palm Beach often accepts a Florida Product Approval (FL#).",
  doors:
    "We install impact-rated sliding glass, French, entry, patio, pivot, and garage doors with laminated glass and reinforced frames. They follow the Florida Building Code, with Miami-Dade NOA products in the HVHZ and an FL# often accepted in Palm Beach.",
  both:
    "We install impact windows and impact doors, including sliding glass, French, entry, patio, pivot, and garage doors, from our Hollywood shop. Miami-Dade and Broward work uses NOA products, and Palm Beach often accepts an FL#.",
  cost:
    "Our FAQ lists impact windows at about $40 to $100+ per square foot installed, roughly $500 to $1,500 for a standard window, and about $10,000 to $30,000 for a typical home with 15 to 20 windows. Financing options include promotional 0% plans for 12 to 18 months, longer terms from 4.99% APR, $0-down same-as-cash, and PACE with no credit-score requirement. A free estimate is how we price your openings and match a plan.",
  doorCost:
    "On our impact doors page, installed sliding glass doors are typically about $1,500 to $4,000, entry doors about $2,000 to $6,000, and French doors about $2,500 to $5,500, depending on size, glass, and hardware. A free in-home estimate is the exact figure for your opening.",
  financing:
    "Financing on our site includes 0% interest for 12 to 18 months with approved credit, longer terms from 4.99% APR with payments as low as $89 a month, $0-down same-as-cash for six months, and PACE financing with no credit-score requirement. We walk through which plan fits during a free estimate.",
  code:
    "Miami-Dade and Broward are the High Velocity Hurricane Zone, so replacement openings there generally need a Miami-Dade NOA, while Palm Beach is a wind-borne debris region where an FL# is often accepted. Florida Statute §627.0629 requires insurers to offer wind-mitigation credits for impact openings, and the percentage is set by your carrier after an OIR-B1-1802 inspection.",
  insurance:
    "Florida Statute §627.0629 requires residential insurers to offer discounts for impact-resistant openings. The credit is not a fixed percentage: a wind-mitigation inspection on form OIR-B1-1802 documents the openings, and your carrier applies its own factors. We provide the product approvals after installation so the inspector can complete the form.",
  areas:
    "We measure, permit, and install from 3000 Stirling Rd in Hollywood and serve homeowners across Miami-Dade, Broward, and Palm Beach counties. Your city is on our service areas list, and a free estimate starts with your ZIP or city.",
  talk:
    "Call (754) 600-4876 Monday through Friday, 8:00 AM to 6:00 PM, or Saturday, 9:00 AM to 3:00 PM. We are closed Sunday. You can also email info@floridaimpactwindowsdoors.com or visit the showroom at 3000 Stirling Rd, Hollywood, FL 33021.",
  estimate:
    "A free in-home estimate is how we measure your openings and prepare a written proposal, with no obligation. Share a few details in this chat, or call (754) 600-4876.",
  brands:
    "We install PGT, CGI, ES Windows, and Custom Window Systems. We are the Hollywood installer, not the factory: we measure, permit, and set the units in Miami-Dade, Broward, and Palm Beach.",
  warranty:
    "Manufacturer coverage depends on the brand — PGT, CGI, ES Windows, and Custom Window Systems — and we also cover installation workmanship such as sealing, flashing, and anchoring. The warranties page lists what each brand includes.",
  shutters:
    "Properly rated impact windows are approved as standalone hurricane protection, so shutters are not required on those openings. We also install accordion, roll-down, Bahama, and panel shutters when that is the product you want.",
  install:
    "Most homes are installed in one to three days once the products arrive, and manufacturing is often four to eight weeks. Permits are required in Miami-Dade, Broward, and Palm Beach, and we file the application and schedule the inspection.",
  permits:
    "Yes. A building permit is required for impact window installation in Miami-Dade, Broward, and Palm Beach, including the High Velocity Hurricane Zone. We prepare the paperwork and schedule the inspection.",
  lifespan:
    "Our FAQ says high-quality impact windows are built to last 25 to 30 years or more in South Florida when they are installed correctly and maintained. Cleaning the tracks and lubricating the hardware is the routine care the maintenance FAQ describes.",
  energy:
    "Low-E impact glass is meant to cut solar heat gain so the air conditioner works less, while the laminated glass still provides hurricane protection. A free estimate is how we match the glass to your openings.",
  noise:
    "Laminated impact glass and tighter seals reduce outside noise from traffic, construction, and nearby activity. Noise reduction is one of the everyday benefits listed with our impact windows, along with UV blocking.",
  commercial:
    "We install impact windows and doors for businesses, storefronts, condos, and HOA communities across Miami-Dade, Broward, and Palm Beach. A free estimate is the way to scope a commercial opening.",
  careers:
    "The careers page lists roles such as project manager, installation technician, and sales consultant, along with health coverage and a 401(k) match. Call (754) 600-4876 or use the contact form if you want to apply.",
  roof:
    "Impact windows change the opening-protection line on a wind-mitigation form. They do not fix a roof or a roof-to-wall connection, and we do not reroof as part of a glass quote. Tell us what is going on in a free estimate, or call (754) 600-4876.",
  msfh:
    "Our site says most homes built before 2002 do not have impact windows, and My Safe Florida Home offers a free wind-mitigation inspection that can help determine whether a home qualifies for the $10,000 grant. Eligibility depends on the inspection and the current program rules.",
  cracked:
    "Cracked impact glass usually has to be replaced, because the laminated unit needs its full layers for hurricane protection. The interlayer holds the pieces in place in the meantime, and we can replace glass even if we did not do the original installation.",
  older:
    "Yes. Impact windows can be installed in older South Florida homes, including openings that are not perfectly square and concrete-block or stucco walls. A free estimate is how we look at your specific openings.",
  maintenance:
    "Clean the glass with mild soap or a standard glass cleaner and a soft cloth, and skip abrasives, steel wool, and razor blades. Vacuum the tracks every few months and lubricate the hardware with silicone spray twice a year.",
  reviews:
    "Homeowner comments are on our reviews page, which also points to Yelp and the BBB. I will not quote a rating or a review count here. Call (754) 600-4876 or request a free estimate if you want to talk with us directly.",
  fallback:
    "I don't have a specific answer for that from our site. A free estimate, or a call to (754) 600-4876, is the fastest way to get an answer for your home.",
} as const;

const PRICE = /\b(cost|price|pricing|how much|expensive|afford|budget|\$)\b/;
const DOOR = /\bdoors?\b/;
const WINDOW = /\bwindows?\b/;

const AFTER_PRODUCT = new Set(["areas", "talk", "estimate"]);

const RULES: { id: keyof typeof ANSWERS; test: RegExp }[] = [
  { id: "careers", test: /\b(career|jobs?|hiring|employment)\b/ },
  { id: "reviews", test: /\b(reviews?|ratings?|yelp|bbb|testimonial)\b/ },
  { id: "roof", test: /\broofs?\b/ },
  { id: "msfh", test: /\b(my safe florida|safe florida home|\$10,000 grant|10000 grant|grants?)\b/ },
  { id: "financing", test: /\b(financ\w*|payment plan|monthly payment|pace|apr|same-as-cash|same as cash|0%)\b/ },
  { id: "insurance", test: /\b(insurance|premium|wind mitigation|oir-b1-1802|mitigation credit|discounts?)\b/ },
  { id: "code", test: /\b(hvhz|high velocity|building code|hurricane code|notice of acceptance|\bnoa\b|product approval|fl#)\b/ },
  { id: "warranty", test: /\bwarrant/ },
  { id: "brands", test: /\b(pgt|cgi|es windows|cws|custom window systems|brands|which brand|what brand)\b/ },
  { id: "shutters", test: /\bshutters?\b/ },
  { id: "permits", test: /\bpermits?\b/ },
  { id: "lifespan", test: /\b(lifespan|how long do they last|how long do impact windows last|last for)\b/ },
  { id: "install", test: /\b(how long|how many days|installation process|install time|installation time)\b/ },
  { id: "energy", test: /\b(energy|low-e|low e|fpl|cooling|electric bill|heat)\b/ },
  { id: "noise", test: /\b(noise|quiet|soundproof|traffic noise)\b/ },
  { id: "commercial", test: /\b(commercial|storefront|hoa)\b/ },
  { id: "cracked", test: /\b(crack\w*|broken glass|repair)\b/ },
  { id: "maintenance", test: /\b(clean\w*|maintenance|maintain)\b/ },
  { id: "older", test: /\b(older home|old home|historic)\b/ },
  { id: "talk", test: /\b(phone|call|hours|email|showroom|address|contact|located|open sunday|what time)\b/ },
  { id: "areas", test: /\b(service areas?|do you serve|where do you|which cities|what areas|miami-dade|miami dade|broward|palm beach|hollywood|fort lauderdale|boca raton|west palm|coral gables|weston|aventura|delray|pembroke|plantation|miami beach|jupiter|davie)\b/ },
  { id: "estimate", test: /\b(estimate|quote|consultation|appointment)\b/ },
];

export function matchMessage(input: string): ChatMatch {
  const text = input.toLowerCase().replace(/\s+/g, " ").trim();
  if (!text) return { id: "fallback", text: ANSWERS.fallback };

  if (/^(hi|hello|hey|howdy|good morning|good afternoon|good evening|thanks|thank you)[!. ]*$/.test(text)) {
    return { id: "greeting", text: ANSWERS.greeting, quickReplies: true };
  }

  if (PRICE.test(text) && DOOR.test(text) && !WINDOW.test(text)) {
    return { id: "doorCost", text: ANSWERS.doorCost };
  }

  if (PRICE.test(text)) {
    return { id: "cost", text: ANSWERS.cost };
  }

  for (const rule of RULES) {
    if (AFTER_PRODUCT.has(rule.id)) continue;
    if (rule.test.test(text)) return { id: rule.id, text: ANSWERS[rule.id] };
  }

  if (DOOR.test(text) && WINDOW.test(text)) {
    return { id: "both", text: ANSWERS.both };
  }
  if (DOOR.test(text)) return { id: "doors", text: ANSWERS.doors };
  if (WINDOW.test(text)) return { id: "windows", text: ANSWERS.windows };

  for (const rule of RULES) {
    if (!AFTER_PRODUCT.has(rule.id)) continue;
    if (rule.id === "areas" && (DOOR.test(text) || WINDOW.test(text))) continue;
    if (rule.test.test(text)) return { id: rule.id, text: ANSWERS[rule.id] };
  }

  return { id: "fallback", text: ANSWERS.fallback };
}

export function quickReplyFromText(input: string): QuickReplyId | null {
  const normalized = input.trim().toLowerCase();
  const found = QUICK_REPLIES.find((item) => item.label.toLowerCase() === normalized);
  return found ? found.id : null;
}

export function isValidName(input: string): boolean {
  const value = input.trim();
  return value.length >= 2 && value.length <= 80 && /[A-Za-z]/.test(value);
}

/** US numbers: 10 digits, or 11 with a leading 1. Area code and exchange cannot start with 0 or 1. */
export function isValidUsPhone(input: string): boolean {
  const digits = input.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(national);
}

/** A 5-digit ZIP (optional +4) or a city name. */
export function isValidLocation(input: string): boolean {
  const value = input.trim();
  if (/^\d{5}(?:-\d{4})?$/.test(value)) return true;
  if (!/[A-Za-z]{2,}/.test(value)) return false;
  return value.length <= 80;
}

export interface ChatLeadDraft {
  name: string;
  phone: string;
  location: string;
  need: NeedId;
  note: string;
}

const AUTORESPONSE =
  "Thank you for requesting a free estimate from Florida Impact Windows & Doors! We've received your project details and a specialist will contact you within 24 hours to schedule your in-home consultation. If you need immediate assistance, please call us at (754) 600-4876. We look forward to helping protect your home! — The Florida Impact Windows & Doors Team";

export function serviceForNeed(need: NeedId): string {
  const match = NEED_OPTIONS.find((option) => option.id === need);
  return match ? match.service : "Other";
}

export function buildChatLead(draft: ChatLeadDraft): {
  emailFields: Record<string, string>;
  whatsappFields: Record<string, string>;
} {
  const name = draft.name.trim();
  const phone = draft.phone.trim();
  const city = draft.location.trim();
  const service = serviceForNeed(draft.need);
  const message = draft.note.trim().slice(0, 300);

  const whatsappFields: Record<string, string> = {
    source: "chatbot",
    name,
    phone,
    city,
    service,
  };
  if (message) whatsappFields.message = message;

  return {
    emailFields: {
      _subject: "New Estimate Request from Chatbot",
      _captcha: "false",
      _template: "box",
      _autoresponse: AUTORESPONSE,
      name,
      phone,
      city,
      service,
      message,
      source: "chatbot",
    },
    whatsappFields,
  };
}

export function sentenceCount(text: string): number {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length;
}
