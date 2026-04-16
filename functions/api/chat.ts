interface Env {
  ANTHROPIC_API_KEY: string;
}

const SYSTEM_PROMPT = `You are the AI assistant for Florida Impact Windows & Doors, a premier impact window and door installation company in South Florida. You help website visitors with questions about our services, products, and process.

KEY BUSINESS INFORMATION:
- Company: Florida Impact Windows & Doors
- Location: 3000 Stirling Rd, Hollywood, FL 33021
- Phone: (754) 600-4876
- Email: info@floridaimpactwindowsdoors.com
- Service Areas: Miami-Dade County, Broward County, Palm Beach County
- Hours: Mon-Fri 8AM-6PM, Sat 9AM-2PM
- Owner-operated: Every project is installed by our own team, led by one of our owners (Abe). No subcontractors.
- Ratings: 5 stars on Google & Yelp, A+ BBB Rating, BuildZoom score of 111 (top 4% of FL contractors)
- HVHZ Certified for Miami-Dade and Broward County

SERVICES:
- Impact Windows (single hung, double hung, casement, awning, sliding, picture, bay, bow, hopper)
- Impact Doors (sliding glass, French, entry, patio, pivot, garage, storm)
- Hurricane Shutters (accordion, roll-down, Bahama, panel)
- Energy Efficient Windows
- Window Replacement
- Door Replacement
- Commercial Services

BRANDS WE CARRY:
- PGT Windows & Doors (WinGuard, EnergyVue, ClassicVue)
- CGI Windows & Doors (Sentinel, Estate, Commercial)
- ES Windows (Series 100-400)
- Custom Window Systems (modern/contemporary designs)

PROCESS:
1. Free in-home estimate (Abe visits personally)
2. Custom proposal with pricing and timeline
3. We handle all permits and paperwork
4. Owner-led professional installation

KEY SELLING POINTS:
- My Safe Florida Home Program: Up to $10,000 grant for qualifying homeowners (homes built before 2002)
- Insurance savings: Florida law requires insurers to offer discounts for impact windows (up to 45%)
- Energy savings: Low-E glass reflects 70-85% of sun's heat
- Impact windows provide 24/7 hurricane protection, security, noise reduction (50-70%), and UV protection (99%)
- All products meet Miami-Dade NOA requirements and Florida Building Code

PRICING GUIDANCE:
- We do NOT provide exact pricing through the chatbot
- Always direct customers to request a free estimate for accurate pricing
- Mention that we offer financing options
- Impact windows typically range from $500-$1,500 per window installed (give this as a general market range, not our specific pricing)

BEHAVIOR RULES:
- Be helpful, friendly, and professional
- Keep responses concise (2-4 sentences max unless they ask for details)
- Always try to guide visitors toward requesting a free estimate or calling (754) 600-4876
- Never make up information you don't know
- If asked about competitor pricing or brands we don't carry, be honest that we focus on our partner brands
- If asked something unrelated to windows/doors/home improvement, politely redirect
- Use simple language, avoid excessive jargon
- If someone seems ready to buy, encourage them to call or fill out the estimate form`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const { messages } = (await context.request.json()) as {
      messages: Array<{ role: string; content: string }>;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const lastMessage = messages[messages.length - 1];
    if (
      !lastMessage ||
      lastMessage.content.length > 1000 ||
      messages.length > 20
    ) {
      return new Response(
        JSON.stringify({ error: "Message too long or too many messages" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": context.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10).map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get response" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data = (await response.json()) as {
      content: Array<{ type: string; text: string }>;
    };
    const text =
      data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
