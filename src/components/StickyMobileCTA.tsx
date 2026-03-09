"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-ocean-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <Link
        href="/get-estimate/"
        className="flex-1 text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white py-3 rounded-full font-bold text-sm shadow-lg shadow-palm-500/30"
      >
        Get Free Estimate
      </Link>
      <a
        href="tel:+17546004876"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white"
        aria-label="Call us"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </a>
    </div>
  );
}
