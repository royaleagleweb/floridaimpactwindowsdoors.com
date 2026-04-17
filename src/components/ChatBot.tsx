"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
  links?: { label: string; href: string }[];
}

interface KnowledgeEntry {
  keywords: string[];
  answer: string;
  links?: { label: string; href: string }[];
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["cost", "price", "pricing", "how much", "expensive", "cheap", "budget", "afford", "dollar", "$"],
    answer:
      "Impact windows in South Florida typically range from $40-$100+ per square foot installed. A standard window runs $500-$1,500, and a full-home replacement (15-20 windows) is usually $10,000-$30,000. Pricing depends on size, frame material, glass type, and custom features. For an exact quote, I recommend a free in-home estimate with Abe, our owner.",
    links: [
      { label: "Get Free Estimate", href: "/get-estimate/" },
      { label: "View Financing Options", href: "/financing/" },
    ],
  },
  {
    keywords: ["financing", "finance", "payment", "monthly", "pay", "loan", "credit", "apr", "interest", "zero down", "installment"],
    answer:
      "We offer multiple financing options: 0% interest for 12-18 months, low-rate financing up to 15 years (from 4.99% APR, payments as low as $89/month), $0 down same-as-cash (6 months), and PACE financing (no credit score needed, paid through property taxes). FPL rebates up to $1,500 and ENERGY STAR tax credits also available.",
    links: [{ label: "Explore Financing", href: "/financing/" }],
  },
  {
    keywords: ["insurance", "premium", "discount", "save", "savings", "wind mitigation", "policy"],
    answer:
      "Yes! Florida law (Statute §627.0629) requires insurers to offer discounts for impact windows. Homeowners typically save $500-$2,000+ per year, up to 45% off windstorm premiums. You'll need a Wind Mitigation Inspection after installation to claim the max discount. We provide all the documentation needed.",
    links: [{ label: "Learn More", href: "/faq/do-impact-windows-lower-insurance-premiums-in-florida/" }],
  },
  {
    keywords: ["value", "resale", "worth", "roi", "return", "investment", "home value", "property value"],
    answer:
      "Impact windows typically add $10,000-$30,000+ to home resale value - one of the highest-ROI home improvements. Beyond resale, you benefit from lower energy bills, reduced noise, enhanced security, and year-round storm protection. Many homes with impact windows also sell faster in South Florida markets.",
    links: [{ label: "Read More", href: "/faq/do-impact-windows-increase-home-value/" }],
  },
  {
    keywords: ["how long", "lifespan", "last", "durability", "years", "lifetime"],
    answer:
      "High-quality impact windows last 25-30+ years with proper installation. The laminated glass doesn't degrade over time and frames are engineered to resist South Florida's salt air corrosion. Simple annual maintenance (cleaning tracks, lubricating hardware) keeps them performing at their best for decades.",
    links: [{ label: "Our Warranties", href: "/warranties/" }],
  },
  {
    keywords: ["what are", "what is", "how do", "impact window", "hurricane window", "laminated glass", "pvb"],
    answer:
      "Impact windows are engineered to withstand Category 5 hurricanes. They feature laminated glass - two tempered glass panes bonded with a PVB interlayer. Even if the glass cracks from flying debris, the interlayer holds pieces in place, preventing wind and water from entering. They must pass Miami-Dade NOA testing (the strictest in the US) - large missile tests plus 9,000 pressure cycles.",
    links: [{ label: "Impact Windows", href: "/services/impact-windows/" }],
  },
  {
    keywords: ["install", "installation", "how long install", "time", "timeline", "days", "weeks"],
    answer:
      "Most homes are installed in 1-3 days (single day for 8-12 windows, 2-3 days for 20+). From contract to final inspection, expect 8-12 weeks total: 4-8 weeks manufacturing, 2-4 weeks permitting (we handle everything), then installation and inspection. Our team protects your furniture, cleans up daily, and does a final deep clean.",
    links: [{ label: "Our Process", href: "/our-process/" }],
  },
  {
    keywords: ["permit", "permits", "permitting", "inspection", "code", "building"],
    answer:
      "Yes, permits are required throughout South Florida for impact window installation. Don't worry - we handle the ENTIRE permit process: application, engineering documentation, building department submission, and scheduling the final inspection. We work with every building department across Miami-Dade, Broward, and Palm Beach counties.",
    links: [{ label: "Our Process", href: "/our-process/" }],
  },
  {
    keywords: ["warranty", "warranties", "guarantee", "covered", "coverage"],
    answer:
      "You get TWO warranties: (1) Manufacturer's warranty on glass, frames, hardware - ranges from 10 years to limited lifetime depending on brand (PGT, CGI, CWS offer limited lifetime). (2) Our workmanship warranty covers installation, sealing, flashing, and anchoring. If something's wrong with our work, we fix it at no cost.",
    links: [{ label: "Warranty Details", href: "/warranties/" }],
  },
  {
    keywords: ["brand", "brands", "pgt", "cgi", "es windows", "cws", "custom window systems", "manufacturer"],
    answer:
      "We're an authorized dealer for 4 premium brands: PGT Windows & Doors (WinGuard, EnergyVue, ClassicVue), CGI Windows & Doors (Sentinel, Estate), ES Windows, and Custom Window Systems. All are tested to Miami-Dade NOA standards. We focus on these 4 brands for consistent quality and reliable warranty support.",
    links: [
      { label: "PGT", href: "/brands/pgt/" },
      { label: "CGI", href: "/brands/cgi/" },
      { label: "ES Windows", href: "/brands/es-windows/" },
      { label: "CWS", href: "/brands/custom-window-systems/" },
    ],
  },
  {
    keywords: ["shutter", "shutters", "need shutters", "still need"],
    answer:
      "No! Impact windows are code-approved as standalone hurricane protection - no shutters needed. They're always in place, providing 24/7 protection. No more scrambling to put up panels before a storm or storing them in your garage. Some homeowners with oceanfront properties choose to add shutters as a backup, but it's not required.",
    links: [{ label: "Hurricane Shutters", href: "/services/hurricane-shutters/" }],
  },
  {
    keywords: ["security", "break-in", "burglar", "intruder", "safe", "safety", "bullet"],
    answer:
      "Impact windows provide excellent break-in protection. The laminated glass stays bonded even when cracked, making it extremely difficult for intruders to gain entry quickly - often buying time for alarms to activate. Note: they're NOT bullet-resistant (that's a different product category - UL 752 rated). For standard break-in protection, they're outstanding.",
  },
  {
    keywords: ["energy", "efficient", "efficiency", "low-e", "fpl bill", "cooling", "electric", "utility", "ac"],
    answer:
      "Impact windows with Low-E coatings reflect 70-85% of the sun's heat, reducing cooling costs 25-35%. Combined with lower FPL bills, insurance savings, and potential FPL rebates up to $1,500, they often pay for themselves over time.",
    links: [{ label: "Energy Efficient Windows", href: "/services/energy-efficient-windows/" }],
  },
  {
    keywords: ["noise", "sound", "quiet", "traffic", "airport"],
    answer:
      "Impact windows reduce outside noise by 50-70%. The laminated glass and tight seals significantly dampen sound from traffic, construction, aircraft, and neighborhood activity. This is especially valuable near busy corridors like I-95, US-1, or Fort Lauderdale-Hollywood International Airport.",
  },
  {
    keywords: ["uv", "fade", "fading", "sun damage", "furniture"],
    answer:
      "Impact windows block 99% of harmful UV rays - protecting your furniture, flooring, artwork, and interior paint from sun damage and fading. This is a real issue in South Florida where direct sun exposure is intense year-round.",
  },
  {
    keywords: ["clean", "cleaning", "maintenance", "maintain", "care"],
    answer:
      "Simple maintenance: clean monthly with mild soap or glass cleaner + soft cloth. Avoid abrasive cleaners, steel wool, or razor blades. Vacuum tracks every few months and lubricate hardware with silicone spray twice yearly. Check weatherstripping annually. That's it!",
  },
  {
    keywords: ["old home", "older home", "historic", "1950", "1960", "1970", "existing"],
    answer:
      "Absolutely! Upgrading older South Florida homes is one of our specialties. We handle challenging installations - homes with non-square openings, concrete block construction, stucco-over-frame, coral rock, or custom shapes. Modern impact windows come in styles that complement both traditional and contemporary architecture.",
  },
  {
    keywords: ["crack", "cracked", "broken", "damaged", "repair", "replace", "fix"],
    answer:
      "Cracked impact glass usually requires replacement rather than repair - the laminated construction needs full integrity for hurricane protection. Good news: even cracked impact windows stay in place (PVB interlayer holds pieces) and continue blocking water/debris. We offer glass replacement even if we didn't do the original installation.",
  },
  {
    keywords: ["door", "doors", "sliding glass", "french door", "entry door", "patio door", "pivot door", "garage door"],
    answer:
      "We install all types of impact doors: Sliding Glass (most popular), French, Entry, Patio, Pivot, Garage, and Storm Doors. Same hurricane-rated protection as our windows, with beautiful designs for every home style.",
    links: [
      { label: "Impact Doors", href: "/services/impact-doors/" },
      { label: "All Door Types", href: "/services/door-types/" },
    ],
  },
  {
    keywords: ["window type", "single hung", "double hung", "casement", "awning", "sliding window", "picture window", "bay window", "bow window", "hopper"],
    answer:
      "We install 9 types of impact windows: Single Hung, Double Hung, Casement, Awning, Sliding, Picture, Bay, Bow, and Hopper. Each has different benefits depending on your home's style and ventilation needs.",
    links: [{ label: "All Window Types", href: "/services/window-types/" }],
  },
  {
    keywords: ["my safe florida", "safe florida home", "grant", "free money", "10000", "$10,000"],
    answer:
      "The My Safe Florida Home Program offers up to $10,000 grants for qualifying homeowners (homes built before 2002). It starts with a free wind mitigation inspection. We can help you navigate the application process.",
    links: [{ label: "Get Started", href: "/get-estimate/" }],
  },
  {
    keywords: ["free estimate", "quote", "consultation", "schedule", "appointment", "visit"],
    answer:
      "Our free in-home estimate is the best way to get started! Abe, our owner, personally visits your home (60-90 minutes) to assess your windows, discuss options across our 4 authorized brands, estimate insurance/energy savings, and deliver a detailed written proposal within 48 hours.",
    links: [{ label: "Request Free Estimate", href: "/get-estimate/" }],
  },
  {
    keywords: ["area", "areas", "city", "cities", "location", "serve", "service area", "miami", "fort lauderdale", "boca", "hollywood", "west palm", "weston", "coral gables", "aventura", "pembroke", "plantation", "broward", "palm beach", "miami-dade", "miami dade"],
    answer:
      "We serve Miami-Dade, Broward, and Palm Beach counties - including Miami, Fort Lauderdale, Hollywood, Boca Raton, West Palm Beach, Coral Gables, Weston, Aventura, Delray Beach, Pembroke Pines, Plantation, Miami Beach, Jupiter, and many more South Florida cities.",
    links: [{ label: "View All Service Areas", href: "/areas/" }],
  },
  {
    keywords: ["hour", "hours", "open", "when", "available", "today", "sunday"],
    answer:
      "We're open Monday-Friday 8AM-6PM, and Saturday 9AM-3PM. Closed Sundays. You can call us at (754) 600-4876 or request a free estimate online anytime.",
    links: [{ label: "Contact Us", href: "/contact/" }],
  },
  {
    keywords: ["phone", "call", "number", "contact", "reach", "email", "address", "located", "location"],
    answer:
      "📞 Phone: (754) 600-4876\n📧 Email: info@floridaimpactwindowsdoors.com\n📍 Address: 3000 Stirling Rd, Hollywood, FL 33021\n🕒 Hours: Mon-Fri 8AM-6PM, Sat 9AM-3PM",
    links: [{ label: "Contact Us", href: "/contact/" }],
  },
  {
    keywords: ["hvhz", "high velocity", "hurricane zone", "miami dade code", "dade county"],
    answer:
      "HVHZ stands for High Velocity Hurricane Zone - Miami-Dade and Broward counties have the strictest hurricane codes in the US. Our installers are HVHZ certified and all our products meet these demanding standards.",
  },
  {
    keywords: ["review", "reviews", "rating", "testimonial", "google", "yelp", "bbb"],
    answer:
      "We have a 5-star rating on Google and Yelp, A+ rating with the BBB, and a BuildZoom score of 111 (top 4% of Florida contractors). Over 5,000 installations completed in 15+ years of business.",
    links: [{ label: "Read Reviews", href: "/reviews/" }],
  },
  {
    keywords: ["commercial", "business", "office", "condo", "hoa", "storefront"],
    answer:
      "Yes, we offer commercial services for businesses, condos, storefronts, and HOA communities across South Florida. Impact windows and doors for commercial properties of all sizes.",
    links: [{ label: "Commercial Services", href: "/services/commercial-services/" }],
  },
  {
    keywords: ["careers", "job", "jobs", "hiring", "employment", "work for", "apply"],
    answer:
      "We're always looking for talented team members! Open positions include Project Manager, Installation Technician, Sales Consultant, and Office Coordinator. We offer competitive pay, health benefits, 401(k) match, and career growth opportunities.",
    links: [{ label: "View Careers", href: "/careers/" }],
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
    answer:
      "Hi there! 👋 I'm here to help with questions about impact windows, doors, pricing, installation, insurance savings, or anything else. What can I help you with today?",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    answer:
      "You're welcome! Feel free to ask me anything else, or when you're ready for a free estimate, just let me know and I'll direct you to our team.",
    links: [{ label: "Get Free Estimate", href: "/get-estimate/" }],
  },
];

const defaultResponse = {
  answer:
    "I don't have a specific answer for that, but our team can help! Try asking about pricing, installation, financing, brands, insurance savings, or service areas. Or reach out directly:",
  links: [
    { label: "Call (754) 600-4876", href: "tel:+17546004876" },
    { label: "Get Free Estimate", href: "/get-estimate/" },
  ],
};

function findBestMatch(input: string): { answer: string; links?: { label: string; href: string }[] } {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return defaultResponse;

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return { answer: bestMatch.answer, links: bestMatch.links };
  }
  return defaultResponse;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm the Florida Impact Windows & Doors assistant. I can help with questions about pricing, installation, financing, insurance savings, brands, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const match = findBestMatch(trimmed);
      const botMessage: Message = {
        role: "assistant",
        content: match.answer,
        links: match.links,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 400);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-palm-500 to-palm-600 text-white shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-110 transition-all flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-4 lg:bottom-24 lg:right-6 z-50 w-[340px] sm:w-[380px] max-h-[520px] rounded-2xl bg-ocean-950 border border-white/10 shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-palm-500 to-palm-600 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-bold">Florida Impact Assistant</p>
              <p className="text-white/70 text-xs">Here to help 24/7</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[360px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-palm-500 text-white rounded-br-md"
                      : "bg-white/10 text-gray-200 rounded-bl-md"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.links.map((link) =>
                        link.href.startsWith("tel:") ? (
                          <a
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1 text-xs bg-palm-500/20 text-palm-300 hover:bg-palm-500/30 rounded-full px-3 py-1.5 font-semibold transition-colors"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1 text-xs bg-palm-500/20 text-palm-300 hover:bg-palm-500/30 rounded-full px-3 py-1.5 font-semibold transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {[
                "How much do impact windows cost?",
                "What financing do you offer?",
                "Insurance savings?",
                "Installation process",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-white/5 border border-white/10 text-gray-400 hover:text-palm-400 hover:border-palm-500/30 rounded-full px-3 py-1.5 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Ask about our services..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-palm-500 hover:bg-palm-600 disabled:opacity-50 disabled:hover:bg-palm-500 text-white flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
