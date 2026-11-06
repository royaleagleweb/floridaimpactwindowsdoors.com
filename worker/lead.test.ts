import assert from "node:assert/strict";
import test from "node:test";
import { buildSendMessageRequest, formatLeadMessage, handleLead, type GreenApiEnv } from "./lead.ts";

const TOKEN = "abc123DEF456abc123DEF456abc123DEF456abc1";
const CHAT_ID = "120363000000000000@g.us";

const ENV: GreenApiEnv = {
  GREEN_API_TOKEN: TOKEN,
  GREEN_API_ID_INSTANCE: "123456789012",
  GREEN_API_API_URL: "https://1234.api.greenapi.com",
  GREEN_API_GROUP_CHAT_ID: CHAT_ID,
};

function leadRequest(body: string, headers?: Record<string, string>): Request {
  return new Request("https://floridaimpactwindowsdoors.com/api/lead", {
    method: "POST",
    headers: headers ?? {
      "Content-Type": "application/json",
      Origin: "https://floridaimpactwindowsdoors.com",
    },
    body,
  });
}

test("formats a homepage lead and drops empty and hidden fields", () => {
  const message = formatLeadMessage({
    source: "New Lead from Homepage Quick Form",
    name: "Ada Lovelace",
    phone: "(754) 600-4876",
    service: "Impact Windows",
    email: "   ",
    _subject: "should not appear",
    _autoresponse: "long hidden autoresponse",
    GREEN_API_TOKEN: TOKEN,
  });

  assert.ok(message);
  assert.match(message, /New Lead from Homepage Quick Form/);
  assert.match(message, /Name: Ada Lovelace/);
  assert.match(message, /Phone: \(754\) 600-4876/);
  assert.match(message, /Service: Impact Windows/);
  assert.doesNotMatch(message, /should not appear/);
  assert.doesNotMatch(message, /autoresponse/);
  assert.doesNotMatch(message, new RegExp(TOKEN));
});

test("formats a multi-step quote in a stable field order", () => {
  const message = formatLeadMessage({
    timeline: "ASAP",
    source: "New Multi-Step Quote Request",
    name: "Grace Hopper",
    services: "Impact Windows, Impact Doors",
    city: "Hollywood",
    phone: "754-555-0100",
    email: "grace@example.com",
    address: "3000 Stirling Rd",
    property_type: "Single Family Home",
    openings: "6-10",
    property_age: "10-25 years",
    brand_preferences: "PGT, CGI",
    budget: "$15K-$30K",
  });

  assert.ok(message);
  const nameAt = message.indexOf("Name:");
  const phoneAt = message.indexOf("Phone:");
  const servicesAt = message.indexOf("Services:");
  const budgetAt = message.indexOf("Budget:");
  assert.ok(nameAt < phoneAt && phoneAt < servicesAt && servicesAt < budgetAt);
  assert.match(message, /Property type: Single Family Home/);
  assert.match(message, /Timeline: ASAP/);
});

test("returns 200 and posts to the group without echoing the token", async () => {
  let capturedUrl = "";
  let capturedBody = "";
  const fetchImpl: typeof fetch = async (input, init) => {
    capturedUrl = String(input);
    capturedBody = String(init?.body ?? "");
    return Response.json({ idMessage: "3EB0TEST" });
  };

  const response = await handleLead(
    leadRequest(
      JSON.stringify({
        source: "New Lead from Homepage Quick Form",
        name: "Test Lead",
        phone: "754-555-0199",
        service: "Impact Doors",
      }),
    ),
    ENV,
    fetchImpl,
  );
  const text = await response.text();

  assert.equal(response.status, 200);
  assert.equal(text, JSON.stringify({ ok: true }));
  assert.match(capturedUrl, /\/waInstance123456789012\/sendMessage\//);
  assert.doesNotMatch(text, new RegExp(TOKEN));
  assert.doesNotMatch(text, /greenapi/);
  const sent = JSON.parse(capturedBody) as { chatId: string; message: string };
  assert.equal(sent.chatId, CHAT_ID);
  assert.match(sent.message, /Test Lead/);
  assert.match(sent.message, /Impact Doors/);
});

test("accepts form-urlencoded posts", async () => {
  let sent = "";
  const fetchImpl: typeof fetch = async (_input, init) => {
    sent = String(init?.body ?? "");
    return Response.json({ idMessage: "3EB0FORM" });
  };

  const response = await handleLead(
    new Request("https://floridaimpactwindowsdoors.com/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://floridaimpactwindowsdoors.com",
      },
      body: "name=Ada&phone=754-555-0100&service=Impact+Windows&_subject=hidden",
    }),
    ENV,
    fetchImpl,
  );

  assert.equal(response.status, 200);
  const payload = JSON.parse(sent) as { message: string };
  assert.match(payload.message, /Name: Ada/);
  assert.match(payload.message, /Service: Impact Windows/);
  assert.doesNotMatch(payload.message, /hidden/);
});

test("rejects missing contact, wrong method, foreign origin, and oversized bodies", async () => {
  const fetchImpl: typeof fetch = async () => {
    throw new Error("should not call Green API");
  };

  const missing = await handleLead(
    leadRequest(JSON.stringify({ service: "Impact Windows" })),
    ENV,
    fetchImpl,
  );
  assert.equal(missing.status, 400);

  const wrongMethod = await handleLead(
    new Request("https://floridaimpactwindowsdoors.com/api/lead", { method: "GET" }),
    ENV,
    fetchImpl,
  );
  assert.equal(wrongMethod.status, 405);

  const foreign = await handleLead(
    leadRequest(JSON.stringify({ name: "Ada", phone: "754-555-0100" }), {
      "Content-Type": "application/json",
      Origin: "https://evil.example",
    }),
    ENV,
    fetchImpl,
  );
  assert.equal(foreign.status, 403);

  const huge = await handleLead(
    leadRequest(JSON.stringify({ name: "A".repeat(20_000), phone: "1" })),
    ENV,
    fetchImpl,
  );
  assert.equal(huge.status, 413);
});

test("does not reveal the token when Green API fails or config is invalid", async () => {
  const failingFetch: typeof fetch = async () => new Response("nope", { status: 500 });
  const failed = await handleLead(
    leadRequest(JSON.stringify({ name: "Ada", phone: "754-555-0100" })),
    ENV,
    failingFetch,
  );
  const failedText = await failed.text();
  assert.equal(failed.status, 502);
  assert.doesNotMatch(failedText, new RegExp(TOKEN));
  assert.doesNotMatch(failedText, /greenapi/);
  assert.doesNotMatch(failedText, /waInstance/);

  let called = false;
  const ssrfFetch: typeof fetch = async () => {
    called = true;
    return Response.json({ idMessage: "nope" });
  };
  const blocked = await handleLead(
    leadRequest(JSON.stringify({ name: "Ada", phone: "754-555-0100" })),
    { ...ENV, GREEN_API_API_URL: "https://example.com" },
    ssrfFetch,
  );
  const blockedText = await blocked.text();
  assert.equal(blocked.status, 500);
  assert.equal(called, false);
  assert.doesNotMatch(blockedText, new RegExp(TOKEN));

  const built = buildSendMessageRequest(ENV, "Hello");
  assert.ok("url" in built);
  assert.match(built.url, new RegExp(`/sendMessage/${TOKEN}$`));
});
