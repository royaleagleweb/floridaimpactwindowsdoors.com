import assert from "node:assert/strict";
import test from "node:test";
import { deliverLead, emailLead, FORMSUBMIT_AJAX_URL, notifyLead } from "./notifyLead.ts";

const originalFetch = globalThis.fetch;

test.afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("emailLead posts the FormSubmit ajax payload and ignores failures", async () => {
  let capturedUrl = "";
  let capturedBody = "";
  let capturedInit: RequestInit | undefined;

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    capturedUrl = String(input);
    capturedBody = String(init?.body ?? "");
    capturedInit = init;
    throw new Error("cloudflare challenge");
  }) as typeof fetch;

  emailLead({
    _subject: "New Contact Message from Contact Page",
    _captcha: "false",
    _template: "box",
    _autoresponse: "Thank you for contacting Florida Impact Windows & Doors!",
    email: "ada@example.com",
    message: "Hello",
  });

  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(capturedUrl, FORMSUBMIT_AJAX_URL);
  assert.equal(capturedInit?.method, "POST");
  assert.equal(capturedInit?.keepalive, true);
  const headers = new Headers(capturedInit?.headers);
  assert.equal(headers.get("Accept"), "application/json");
  assert.equal(headers.get("Content-Type"), "application/json");
  const body = JSON.parse(capturedBody) as Record<string, string>;
  assert.equal(body._subject, "New Contact Message from Contact Page");
  assert.equal(body._captcha, "false");
  assert.equal(body._template, "box");
  assert.match(body._autoresponse, /Thank you for contacting/);
  assert.equal(body.email, "ada@example.com");
  assert.equal(body.message, "Hello");
});

test("deliverLead resolves while FormSubmit is still hanging", async () => {
  const calls: string[] = [];
  let releaseEmail: (value: Response) => void = () => {};
  const emailHung = new Promise<Response>((resolve) => {
    releaseEmail = resolve;
  });

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push(url);
    if (url === FORMSUBMIT_AJAX_URL) return emailHung;

    assert.equal(url, "/api/lead");
    const fields = JSON.parse(String(init?.body ?? "{}")) as Record<string, string>;
    assert.equal(fields.source, "New Contact Message from Contact Page");
    assert.equal(fields.name, "Ada Lovelace");
    assert.equal(fields.phone, "754-555-0100");
    assert.equal(fields.email, "ada@example.com");
    assert.equal(fields.subject, "question");
    assert.equal(fields.message, "Front windows");
    assert.equal(init?.keepalive, true);
    return Response.json({ ok: true });
  }) as typeof fetch;

  const start = Date.now();
  await deliverLead(
    {
      _subject: "New Contact Message from Contact Page",
      _captcha: "false",
      email: "ada@example.com",
      message: "Front windows",
    },
    {
      source: "New Contact Message from Contact Page",
      name: "Ada Lovelace",
      phone: "754-555-0100",
      email: "ada@example.com",
      subject: "question",
      message: "Front windows",
    },
  );

  assert.ok(Date.now() - start < 1000);
  assert.deepEqual(calls, [FORMSUBMIT_AJAX_URL, "/api/lead"]);

  releaseEmail(new Response("ok"));
});

test("notifyLead resolves when /api/lead fails", async () => {
  globalThis.fetch = (async () => {
    throw new Error("down");
  }) as typeof fetch;

  await notifyLead({ name: "Ada", phone: "754-555-0100" });
});
