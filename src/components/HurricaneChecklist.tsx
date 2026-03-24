"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistSection {
  title: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
}

const STORAGE_KEY = "hurricane-checklist-state";

const sections: ChecklistSection[] = [
  {
    title: "Before Hurricane Season",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      { id: "inspect-windows", label: "Inspect impact windows for seal integrity and hardware function" },
      { id: "check-door-seals", label: "Check door seals and weatherstripping for wear or gaps" },
      { id: "trim-trees", label: "Trim trees and remove dead branches near your home" },
      { id: "review-insurance", label: "Review homeowner's insurance coverage and hurricane deductible" },
      { id: "emergency-kit", label: "Create or refresh your emergency supply kit (7 days of supplies)" },
      { id: "photograph-property", label: "Photograph and video document your property and belongings" },
    ],
  },
  {
    title: "When a Storm is Approaching",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      { id: "charge-devices", label: "Charge all devices, phones, and portable battery packs" },
      { id: "fill-bathtubs", label: "Fill bathtubs with water for flushing toilets and sanitation" },
      { id: "secure-furniture", label: "Secure or bring in all outdoor furniture and loose items" },
      { id: "fuel-vehicles", label: "Fill vehicle gas tanks and top off portable fuel cans" },
      { id: "confirm-evacuation", label: "Confirm your evacuation route and shelter locations" },
    ],
  },
  {
    title: "After the Storm",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    items: [
      { id: "document-damage", label: "Document all damage with photos and video before cleanup" },
      { id: "contact-insurance", label: "Contact your insurance company and file a claim promptly" },
      { id: "schedule-inspection", label: "Schedule a professional inspection of windows and doors" },
      { id: "temporary-repairs", label: "Make temporary repairs to prevent further water damage" },
    ],
  },
];

const allItems = sections.flatMap((s) => s.items);
const totalItems = allItems.length;

function getDaysUntilHurricaneSeason(): { days: number; inSeason: boolean } {
  const now = new Date();
  const year = now.getFullYear();
  const seasonStart = new Date(year, 5, 1); // June 1
  const seasonEnd = new Date(year, 10, 30); // November 30

  if (now >= seasonStart && now <= seasonEnd) {
    return { days: 0, inSeason: true };
  }

  let nextStart = seasonStart;
  if (now > seasonEnd) {
    nextStart = new Date(year + 1, 5, 1);
  }

  const diffMs = nextStart.getTime() - now.getTime();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return { days, inSeason: false };
}

function getReadinessLabel(pct: number): { label: string; color: string } {
  if (pct === 100) return { label: "Fully Prepared", color: "text-palm-400" };
  if (pct >= 75) return { label: "Almost Ready", color: "text-palm-400" };
  if (pct >= 50) return { label: "Making Progress", color: "text-sun-400" };
  if (pct >= 25) return { label: "Getting Started", color: "text-sun-400" };
  return { label: "Not Started", color: "text-red-400" };
}

export default function HurricaneChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const persistCheck = useCallback(
    (id: string, value: boolean) => {
      setChecked((prev) => {
        const next = { ...prev, [id]: value };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    []
  );

  const completedCount = useMemo(
    () => allItems.filter((item) => checked[item.id]).length,
    [checked]
  );

  const pct = Math.round((completedCount / totalItems) * 100);
  const { days, inSeason } = getDaysUntilHurricaneSeason();
  const readiness = getReadinessLabel(pct);

  if (!mounted) {
    return (
      <div className="bg-ocean-950 rounded-xl border border-white/10 p-8 md:p-10 min-h-[400px] flex items-center justify-center">
        <div className="text-gray-400">Loading checklist...</div>
      </div>
    );
  }

  return (
    <div className="bg-ocean-950 rounded-xl border border-white/10 p-8 md:p-10">
      {/* Header with countdown */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
          Hurricane Prep Checklist
        </h3>
        <p className="text-gray-400 mb-6">
          Track your hurricane readiness. Your progress is saved automatically.
        </p>

        {/* Countdown */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4 mb-6">
          <svg className="w-7 h-7 text-sun-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {inSeason ? (
            <div>
              <p className="text-sun-400 font-bold font-display text-lg">Hurricane Season is Active</p>
              <p className="text-gray-400 text-sm">June 1 &ndash; November 30. Stay prepared.</p>
            </div>
          ) : (
            <div>
              <p className="text-white font-bold font-display text-lg">
                <span className="text-sun-400">{days}</span> days until hurricane season
              </p>
              <p className="text-gray-400 text-sm">Next season starts June 1. Prepare now.</p>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">
              {completedCount} of {totalItems} tasks complete
            </span>
            <span className={`font-semibold ${readiness.color}`}>{readiness.label}</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-palm-500 to-palm-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-center text-2xl font-bold font-display text-white mt-3">
            {pct}% <span className="text-sm font-normal text-gray-400">readiness score</span>
          </p>
        </div>
      </div>

      {/* Checklist sections */}
      <div className="space-y-8">
        {sections.map((section) => {
          const sectionComplete = section.items.filter((i) => checked[i.id]).length;
          const sectionTotal = section.items.length;

          return (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-palm-400">{section.icon}</div>
                <h4 className="text-lg font-bold font-display text-white flex-1">
                  {section.title}
                </h4>
                <span className="text-sm text-gray-400">
                  {sectionComplete}/{sectionTotal}
                </span>
              </div>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const isChecked = !!checked[item.id];
                  return (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-palm-500/10 border-palm-500/20"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => persistCheck(item.id, e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                            isChecked
                              ? "bg-palm-500 border-palm-500"
                              : "border-white/30 bg-transparent"
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-sm transition-all ${
                          isChecked ? "text-gray-400 line-through" : "text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setChecked({});
            try {
              localStorage.removeItem(STORAGE_KEY);
            } catch {
              // ignore
            }
          }}
          className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
}
