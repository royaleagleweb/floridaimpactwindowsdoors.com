import assert from "node:assert/strict";
import test from "node:test";
import { onRequest } from "./lead.ts";

const TOKEN = "abc123DEF456abc123DEF456abc123DEF456abc1";
const CHAT_ID = "120363000000000000@g.us";

const ENV = {
  GREEN_API_TOKEN: TOKEN,
  GREEN_API_ID_INSTANCE: "123456789012",
  GREEN_API_API_URL: "https://1234.api.greenapi.com",
  GREEN_API_GROUP_CHAT_ID: CHAT_ID,
};

function post(body: string, headers?: Record<string, string>): Request {
  return new Request("https://floridaimpactwindowsdoors.com/api/lead", {
    method: "POST",
    headers: headers ?? {
      "Content-Type": "application/json",
      Origin: "https://floridaimpactwindowsdoors.com",
    },
    body,
  });
}

test("Pages onRequest returns JSON for GET instead of the static site", async () => {
  const response = await onRequest({
    request: new Request("https://floridaimpactwindowsdoors.com/api/lead", { method: "GET" }),
    env: ENV,
  });
  const text = await response.text();

  assert.equal(response.status, 405);
  assert.equal(text, JSON.stringify({ ok: false, error: "Method not allowed" }));
  assert.match(response.headers.get("content-type") ?? "", /application\/json/);
});

test("Pages onRequest posts a lead through handleLead", async () => {
  const originalFetch = globalThis.fetch;
  let capturedUrl = "";
  let capturedBody = "";
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    capturedUrl = String(input);
    capturedBody = String(init?.body ?? "");
    return Response.json({ idMessage: "3EB0PAGES" });
  }) as typeof fetch;

  try {
    const response = await onRequest({
      request: post(
        JSON.stringify({
          source: "New Lead from Homepage Quick Form",
          name: "Ada Lovelace",
          phone: "754-555-0100",
          service: "Impact Windows",
        }),
      ),
      env: ENV,
    });
    const text = await response.text();
    const sent = JSON.parse(capturedBody) as { chatId: string; message: string };

    assert.equal(response.status, 200);
    assert.equal(text, JSON.stringify({ ok: true }));
    assert.match(capturedUrl, /\/waInstance123456789012\/sendMessage\//);
    assert.equal(sent.chatId, CHAT_ID);
    assert.match(sent.message, /Ada Lovelace/);
    assert.match(sent.message, /Impact Windows/);
    assert.doesNotMatch(text, new RegExp(TOKEN));
  } finally {
    globalThis.fetch = originalFetch;
  }
});
