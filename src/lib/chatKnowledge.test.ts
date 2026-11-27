import assert from "node:assert/strict";
import test from "node:test";
import { formatLeadMessage } from "../../worker/lead.ts";
import {
  ANSWERS,
  CALL_BUTTON_LABEL,
  ESTIMATE_BUTTON_LABEL,
  QUICK_REPLIES,
  buildChatLead,
  isValidLocation,
  isValidName,
  isValidUsPhone,
  matchMessage,
  quickReplyFromText,
  sentenceCount,
} from "./chatKnowledge.ts";

test("quick replies match the lead-capture prompts", () => {
  assert.deepEqual(
    QUICK_REPLIES.map((item) => item.label),
    [
      "Get a free estimate",
      "Impact windows",
      "Impact doors",
      "Cost / financing",
      "Hurricane code & insurance savings",
      "Service areas",
      "Talk to someone",
    ],
  );
  assert.equal(ESTIMATE_BUTTON_LABEL, "Get my free estimate");
  assert.equal(CALL_BUTTON_LABEL, "Call (754) 600-4876");
});

test("exact quick-reply labels map to topic ids", () => {
  assert.equal(quickReplyFromText("Impact windows"), "windows");
  assert.equal(quickReplyFromText("  cost / financing "), "cost");
  assert.equal(quickReplyFromText("Get a free estimate"), "estimate");
  assert.equal(quickReplyFromText("how much are windows"), null);
});

test("keyword matching stays on the closest published topic", () => {
  assert.equal(matchMessage("What are impact windows?").id, "windows");
  assert.equal(matchMessage("Do you install impact doors?").id, "doors");
  assert.equal(matchMessage("windows and doors").id, "both");
  assert.equal(matchMessage("how much do impact windows cost").id, "cost");
  assert.equal(matchMessage("price of a sliding door").id, "doorCost");
  assert.equal(matchMessage("what financing do you have").id, "financing");
  assert.equal(matchMessage("will this lower my insurance").id, "insurance");
  assert.equal(matchMessage("what is the HVHZ code").id, "code");
  assert.equal(matchMessage("do you serve Boca Raton").id, "areas");
  assert.equal(matchMessage("what are your hours").id, "talk");
  assert.equal(matchMessage("PGT or CGI").id, "brands");
  assert.equal(matchMessage("how long does installation take").id, "install");
  assert.equal(matchMessage("do you fix roofs").id, "roof");
  assert.equal(matchMessage("hello").id, "greeting");
  assert.equal(matchMessage("hello").quickReplies, true);
  assert.equal(matchMessage("do you sell solar panels").id, "fallback");
});

test("answers are 1 to 3 sentences and do not invent ratings or guarantees", () => {
  for (const [id, text] of Object.entries(ANSWERS)) {
    const count = sentenceCount(text);
    assert.ok(count >= 1 && count <= 3, `${id} has ${count} sentences`);
    assert.doesNotMatch(text, /5-star|five-star|BuildZoom|top 4%|5,000|15\+ years|20 years|45%/i);
    assert.doesNotMatch(text, /guaranteed/i);
  }
});

test("fallback offers an estimate or a call", () => {
  const fallback = matchMessage("asdfghjkl");
  assert.match(fallback.text, /free estimate/i);
  assert.match(fallback.text, /\(754\) 600-4876/);
});

test("US phone validation accepts common formats and rejects junk", () => {
  for (const value of ["(754) 600-4876", "754-600-4876", "7546004876", "+1 754 600 4876", "1-754-600-4876"]) {
    assert.equal(isValidUsPhone(value), true, value);
  }
  for (const value of ["", "123", "754-600-487", "000-000-0000", "754-000-4876", "123-456-7890", "call me"]) {
    assert.equal(isValidUsPhone(value), false, value);
  }
});

test("location accepts a ZIP or a city", () => {
  assert.equal(isValidLocation("33021"), true);
  assert.equal(isValidLocation("33021-1234"), true);
  assert.equal(isValidLocation("Fort Lauderdale"), true);
  assert.equal(isValidLocation("Hollywood"), true);
  assert.equal(isValidLocation("3302"), false);
  assert.equal(isValidLocation("a"), false);
  assert.equal(isValidLocation(""), false);
  assert.equal(isValidName("Ada"), true);
  assert.equal(isValidName("A"), false);
});

test("chat lead payload is marked chatbot and formats for WhatsApp", () => {
  const { emailFields, whatsappFields } = buildChatLead({
    name: "Ada Lovelace",
    phone: "(754) 600-4876",
    location: "33021",
    need: "windows",
    note: "Front of the house",
  });

  assert.equal(whatsappFields.source, "chatbot");
  assert.equal(whatsappFields.name, "Ada Lovelace");
  assert.equal(whatsappFields.phone, "(754) 600-4876");
  assert.equal(whatsappFields.city, "33021");
  assert.equal(whatsappFields.service, "Impact windows");
  assert.equal(whatsappFields.message, "Front of the house");
  assert.equal(emailFields._subject, "New Estimate Request from Chatbot");
  assert.equal(emailFields._captcha, "false");
  assert.equal(emailFields.source, "chatbot");
  assert.match(emailFields._autoresponse, /\(754\) 600-4876/);

  const message = formatLeadMessage(whatsappFields);
  assert.ok(message);
  assert.match(message, /Source: chatbot/);
  assert.match(message, /Name: Ada Lovelace/);
  assert.match(message, /Phone: \(754\) 600-4876/);
  assert.match(message, /City: 33021/);
  assert.match(message, /Service: Impact windows/);
  assert.match(message, /Message: Front of the house/);
  assert.doesNotMatch(message, /_subject|_captcha|_autoresponse/);
});
