"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ANSWERS,
  CALL_BUTTON_LABEL,
  ESTIMATE_BUTTON_LABEL,
  NEED_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  QUICK_REPLIES,
  buildChatLead,
  isValidLocation,
  isValidName,
  isValidUsPhone,
  matchMessage,
  quickReplyFromText,
  type ChatLeadDraft,
  type NeedId,
  type QuickReplyId,
} from "@/lib/chatKnowledge";
import { deliverLeadResult } from "@/lib/notifyLead";

type Phase =
  | { name: "chat" }
  | { name: "ask-name" }
  | { name: "ask-phone" }
  | { name: "ask-location" }
  | { name: "ask-need" }
  | { name: "ask-note" }
  | { name: "submitting" };

interface Draft {
  name: string;
  phone: string;
  location: string;
  need: NeedId;
}

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  text: string;
  actions?: boolean;
  quickReplies?: boolean;
  needs?: boolean;
  skip?: boolean;
  retry?: boolean;
}

const NAME_PROMPT = "Great — I'll collect a few details for your free estimate. What's your name?";
const PHONE_PROMPT = "What's the best phone number? A US number like (754) 600-4876 works.";
const PHONE_ERROR = "That doesn't look like a US phone number yet. Try a 10-digit number, such as (754) 600-4876.";
const LOCATION_PROMPT = "What ZIP code or city is the property in?";
const LOCATION_ERROR = "Please enter a 5-digit ZIP code or a city name.";
const NAME_ERROR = "Please enter your name so we know who to ask for.";
const NEED_PROMPT = "What do you need help with?";
const NOTE_PROMPT = "Anything else we should know? You can skip this.";
const ROOF_NOTE =
  "We don't reroof as part of a glass quote — impact products cover openings, not the roof. I'll still pass this along so we can say what we can help with. Anything else we should know, or skip?";
const ERROR_TEXT = `We couldn't send that just now. Please call ${PHONE_DISPLAY} and we'll take your estimate by phone.`;

function firstName(name: string): string {
  const first = name.trim().split(/\s+/)[0];
  return first || "there";
}

function needFromText(input: string): NeedId | null {
  const text = input.toLowerCase();
  if (/\bboth\b|windows and doors|doors and windows/.test(text)) return "both";
  if (/\broof/.test(text)) return "roof";
  if (/\b(other|not sure)\b/.test(text)) return "other";
  const door = /\bdoors?\b/.test(text);
  const window = /\bwindows?\b/.test(text);
  if (door && window) return "both";
  if (door) return "doors";
  if (window) return "windows";
  return null;
}

export default function ChatPanel({
  open,
  onClose,
  titleId,
}: {
  open: boolean;
  onClose: () => void;
  titleId: string;
}) {
  const inputId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);
  const phaseRef = useRef<Phase>({ name: "chat" });
  const draftRef = useRef<Draft>({ name: "", phone: "", location: "", need: "windows" });
  const submittedRef = useRef<ChatLeadDraft | null>(null);
  const sendingRef = useRef(false);

  const [phase, setPhaseState] = useState<Phase>({ name: "chat" });
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: ANSWERS.greeting,
      actions: true,
      quickReplies: true,
    },
  ]);

  function setPhase(next: Phase) {
    phaseRef.current = next;
    setPhaseState(next);
  }

  function push(message: Omit<ChatMessage, "id">) {
    idRef.current += 1;
    const id = idRef.current;
    setMessages((current) => [...current, { ...message, id }]);
  }

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    endRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "end" });
  }, [messages, pending]);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    if (!root) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const items = [...root.querySelectorAll<HTMLElement>("button, a[href], input, textarea, select")]
        .filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, messages, pending]);

  useEffect(() => {
    if (!open) return;
    if (phase.name === "ask-name" || phase.name === "ask-phone" || phase.name === "ask-location" || phase.name === "ask-note") {
      inputRef.current?.focus();
    }
  }, [open, phase.name]);

  function beginEstimate(label = ESTIMATE_BUTTON_LABEL) {
    if (phaseRef.current.name !== "chat" || sendingRef.current) return;
    push({ role: "user", text: label });
    setPhase({ name: "ask-name" });
    push({ role: "assistant", text: NAME_PROMPT });
  }

  function answerTopic(id: QuickReplyId, label: string) {
    if (phaseRef.current.name !== "chat" || sendingRef.current) return;
    push({ role: "user", text: label });
    if (id === "estimate") {
      setPhase({ name: "ask-name" });
      push({ role: "assistant", text: NAME_PROMPT });
      return;
    }
    push({ role: "assistant", text: ANSWERS[id], actions: true });
  }

  async function submit(note: string) {
    if (sendingRef.current) return;
    const draft = draftRef.current;
    const payload: ChatLeadDraft = {
      name: draft.name,
      phone: draft.phone,
      location: draft.location,
      need: draft.need,
      note,
    };
    submittedRef.current = payload;
    sendingRef.current = true;
    setPending(true);
    setPhase({ name: "submitting" });

    const { emailFields, whatsappFields } = buildChatLead(payload);
    const ok = await deliverLeadResult(emailFields, whatsappFields);

    sendingRef.current = false;
    setPending(false);
    setPhase({ name: "chat" });
    if (ok) {
      push({
        role: "assistant",
        text: `Thanks, ${firstName(payload.name)}. Your request has been received, and a specialist will contact you within 24 hours. If you need us sooner, call ${PHONE_DISPLAY}.`,
        actions: true,
      });
      return;
    }
    push({ role: "assistant", text: ERROR_TEXT, retry: true });
  }

  function chooseNeed(need: NeedId, label: string) {
    if (phaseRef.current.name !== "ask-need") return;
    draftRef.current = { ...draftRef.current, need };
    push({ role: "user", text: label });
    setPhase({ name: "ask-note" });
    push({ role: "assistant", text: need === "roof" ? ROOF_NOTE : NOTE_PROMPT, skip: true });
  }

  function finishNote(note: string) {
    if (phaseRef.current.name !== "ask-note" || sendingRef.current) return;
    const cleaned = /^(skip|no|none|n\/a)$/i.test(note.trim()) ? "" : note.trim();
    if (cleaned) push({ role: "user", text: cleaned });
    else push({ role: "user", text: "Skip" });
    void submit(cleaned);
  }

  function handleText(raw: string) {
    const text = raw.trim();
    if (!text || sendingRef.current) return;
    setInput("");
    const current = phaseRef.current;

    if (current.name === "chat") {
      const quick = quickReplyFromText(text);
      if (quick) {
        answerTopic(quick, text);
        return;
      }
      push({ role: "user", text });
      const match = matchMessage(text);
      push({
        role: "assistant",
        text: match.text,
        actions: true,
        quickReplies: match.quickReplies,
      });
      return;
    }

    if (current.name === "ask-name") {
      push({ role: "user", text });
      if (!isValidName(text)) {
        push({ role: "assistant", text: NAME_ERROR });
        return;
      }
      draftRef.current = { ...draftRef.current, name: text };
      setPhase({ name: "ask-phone" });
      push({ role: "assistant", text: PHONE_PROMPT });
      return;
    }

    if (current.name === "ask-phone") {
      push({ role: "user", text });
      if (!isValidUsPhone(text)) {
        push({ role: "assistant", text: PHONE_ERROR });
        return;
      }
      draftRef.current = { ...draftRef.current, phone: text };
      setPhase({ name: "ask-location" });
      push({ role: "assistant", text: LOCATION_PROMPT });
      return;
    }

    if (current.name === "ask-location") {
      push({ role: "user", text });
      if (!isValidLocation(text)) {
        push({ role: "assistant", text: LOCATION_ERROR });
        return;
      }
      draftRef.current = { ...draftRef.current, location: text };
      setPhase({ name: "ask-need" });
      push({ role: "assistant", text: NEED_PROMPT, needs: true });
      return;
    }

    if (current.name === "ask-need") {
      const need = needFromText(text);
      if (!need) {
        push({ role: "user", text });
        push({ role: "assistant", text: "Please choose windows, doors, both, roof, or other.", needs: true });
        return;
      }
      const option = NEED_OPTIONS.find((item) => item.id === need);
      chooseNeed(need, option?.label ?? text);
      return;
    }

    if (current.name === "ask-note") {
      finishNote(text);
    }
  }

  const flowLocked = phase.name !== "chat";
  const inputLabel =
    phase.name === "ask-name"
      ? "Your name"
      : phase.name === "ask-phone"
        ? "Phone number"
        : phase.name === "ask-location"
          ? "ZIP code or city"
          : phase.name === "ask-note"
            ? "Optional note"
            : phase.name === "ask-need"
              ? "What you need"
              : "Message";
  const placeholder =
    phase.name === "ask-name"
      ? "Your name"
      : phase.name === "ask-phone"
        ? "(754) 600-4876"
        : phase.name === "ask-location"
          ? "ZIP or city"
          : phase.name === "ask-note"
            ? "Optional note"
            : phase.name === "ask-need"
              ? "Windows, doors, both, roof, or other"
              : "Ask about windows, doors, cost…";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      className="flex h-full min-h-0 w-full flex-1 flex-col bg-white outline-none"
    >
      <header className="flex items-center gap-3 bg-ocean-950 px-4 py-3 text-white">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-palm-500" aria-hidden="true">
          <ChatIcon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 id={titleId} className="truncate font-display text-sm font-bold">
            Florida Impact Windows
          </h2>
          <a href={PHONE_TEL} className="text-xs font-semibold text-palm-300 hover:text-palm-200">
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-400"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </header>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-[#f4f6fb] px-3 py-4"
      >
        {messages.map((message) => (
          <article key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                message.role === "user"
                  ? "rounded-br-md bg-palm-500 text-white"
                  : "rounded-bl-md border border-ocean-100 bg-white text-ocean-950 shadow-sm"
              }`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              {message.quickReplies && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply.id}
                      type="button"
                      disabled={flowLocked}
                      onClick={() => answerTopic(reply.id, reply.label)}
                      className="rounded-full border border-ocean-200 bg-white px-3 py-1.5 text-left text-xs font-semibold text-ocean-900 hover:border-palm-400 hover:text-palm-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500 disabled:opacity-50"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}
              {message.needs && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {NEED_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => chooseNeed(option.id, option.label)}
                      disabled={phase.name !== "ask-need"}
                      className="rounded-xl border border-ocean-200 bg-ocean-50 px-3 py-2 text-sm font-semibold text-ocean-900 hover:border-palm-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
              {message.skip && (
                <button
                  type="button"
                  onClick={() => finishNote("")}
                  disabled={phase.name !== "ask-note"}
                  className="mt-3 rounded-full border border-ocean-200 px-3 py-1.5 text-xs font-semibold text-ocean-800 hover:border-palm-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
                >
                  Skip
                </button>
              )}
              {message.actions && (
                <div className="mt-3 flex flex-col gap-2">
                  <button
                    type="button"
                    disabled={flowLocked}
                    onClick={() => beginEstimate()}
                    className="rounded-full bg-gradient-to-r from-palm-500 to-palm-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:from-palm-600 hover:to-palm-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-700 disabled:opacity-50"
                  >
                    {ESTIMATE_BUTTON_LABEL}
                  </button>
                  <a
                    href={PHONE_TEL}
                    className="rounded-full border border-ocean-200 px-3 py-2 text-center text-sm font-bold text-ocean-900 hover:border-palm-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
                  >
                    {CALL_BUTTON_LABEL}
                  </a>
                </div>
              )}
              {message.retry && (
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href={PHONE_TEL}
                    className="rounded-full bg-gradient-to-r from-palm-500 to-palm-600 px-3 py-2 text-center text-sm font-bold text-white"
                  >
                    {CALL_BUTTON_LABEL}
                  </a>
                  <button
                    type="button"
                    onClick={() => submittedRef.current && void submit(submittedRef.current.note)}
                    className="rounded-full border border-ocean-200 px-3 py-2 text-sm font-bold text-ocean-900 hover:border-palm-400"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}
        {pending && (
          <p className="text-xs font-medium text-ocean-700" role="status">
            Sending your request…
          </p>
        )}
        <div ref={endRef} />
      </div>

      <form
        className="border-t border-ocean-100 bg-white p-3"
        onSubmit={(event) => {
          event.preventDefault();
          handleText(input);
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          {inputLabel}
        </label>
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            id={inputId}
            value={input}
            disabled={pending || phase.name === "submitting"}
            onChange={(event) => setInput(event.target.value)}
            placeholder={placeholder}
            autoComplete={phase.name === "ask-name" ? "name" : phase.name === "ask-phone" ? "tel" : phase.name === "ask-location" ? "postal-code" : "off"}
            inputMode={phase.name === "ask-phone" ? "tel" : "text"}
            type={phase.name === "ask-phone" ? "tel" : "text"}
            maxLength={300}
            data-testid="chat-input"
            className="min-w-0 flex-1 rounded-full border border-ocean-200 bg-ocean-50 px-4 py-2.5 text-sm text-ocean-950 placeholder:text-ocean-400 focus:border-palm-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-palm-500/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={pending || !input.trim()}
            aria-label="Send message"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-palm-500 text-white hover:bg-palm-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-700 disabled:opacity-40"
          >
            <SendIcon />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-ocean-500">Answers come from our site. Estimates are free.</p>
      </form>
    </div>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
