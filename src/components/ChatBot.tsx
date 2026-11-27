"use client";

import dynamic from "next/dynamic";
import { useEffect, useId, useRef, useState } from "react";
import { NUDGE_STORAGE_KEY, NUDGE_TEXT } from "@/lib/chatKnowledge";

const ChatPanel = dynamic(() => import("./ChatPanel"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-white text-sm text-ocean-700" role="status">
      Opening chat…
    </div>
  ),
});

function nudgeAlreadySeen(): boolean {
  try {
    return sessionStorage.getItem(NUDGE_STORAGE_KEY) === "1";
  } catch {
    return true;
  }
}

function rememberNudge() {
  try {
    sessionStorage.setItem(NUDGE_STORAGE_KEY, "1");
  } catch {
    /* Private browsing can block storage. The nudge simply won't persist. */
  }
}

export default function ChatBot() {
  const titleId = useId();
  const panelId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef(false);
  const [rendered, setRendered] = useState(false);
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    if (nudgeAlreadySeen()) return;
    const timer = window.setTimeout(() => {
      if (nudgeAlreadySeen()) return;
      setNudge(true);
    }, 20_000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) return;
    if (!returnFocus.current) return;
    returnFocus.current = false;
    launcherRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(max-width: 1023px)");
    if (!query.matches) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function dismissNudge() {
    setNudge(false);
    rememberNudge();
  }

  function openChat() {
    dismissNudge();
    setRendered(true);
    setOpen(true);
  }

  function closeChat() {
    returnFocus.current = true;
    setOpen(false);
  }

  return (
    <>
      {nudge && !open && (
        <div className="chat-teaser chat-rise" role="status">
          <button
            type="button"
            onClick={openChat}
            className="flex-1 rounded-xl px-1 py-0.5 text-left text-sm font-semibold leading-snug text-ocean-950 hover:text-palm-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
          >
            {NUDGE_TEXT}
          </button>
          <button
            type="button"
            onClick={dismissNudge}
            aria-label="Dismiss estimate suggestion"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ocean-500 hover:bg-ocean-50 hover:text-ocean-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {!open && (
        <button
          ref={launcherRef}
          type="button"
          className="chat-launcher flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-palm-500 to-palm-600 text-white shadow-lg shadow-palm-500/35 transition hover:scale-105 hover:from-palm-600 hover:to-palm-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-700 motion-safe:transition-transform"
          aria-expanded={false}
          aria-controls={panelId}
          aria-haspopup="dialog"
          aria-label="Open chat"
          data-testid="chat-launcher"
          onClick={openChat}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {rendered && (
        <div
          id={panelId}
          data-testid="chat-panel"
          hidden={!open}
          inert={!open ? true : undefined}
          className={`chat-panel flex flex-col overflow-hidden border border-ocean-100 bg-white shadow-2xl shadow-ocean-950/20 ${open ? "chat-rise" : ""}`}
        >
          <ChatPanel open={open} onClose={closeChat} titleId={titleId} />
        </div>
      )}
    </>
  );
}
