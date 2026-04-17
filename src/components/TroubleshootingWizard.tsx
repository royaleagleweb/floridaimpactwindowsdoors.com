"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface DiagnosisResult {
  likelyCause: string;
  recommendedAction: "repair" | "replace";
  actionDetail: string;
  urgency: "low" | "medium" | "high";
  urgencyNote: string;
}

/* ------------------------------------------------------------------ */
/*  Option lists                                                       */
/* ------------------------------------------------------------------ */

const productTypes = ["Window", "Door"] as const;

const windowSymptoms = [
  "Drafty / air leak",
  "Hard to open or close",
  "Foggy / condensation between glass",
  "Cracked or broken glass",
  "Water leak during rain",
  "Noise coming through",
] as const;

const doorSymptoms = [
  "Won\u2019t lock properly",
  "Sticks or drags",
  "Glass is foggy",
  "Weather seal deteriorated",
  "Water leaks in",
  "Hard to slide",
] as const;

const durations = [
  "Just noticed",
  "Few weeks",
  "Few months",
  "Over a year",
] as const;

const productAges = [
  "Under 5 years",
  "5\u201310 years",
  "10\u201320 years",
  "Over 20 years",
  "Not sure",
] as const;

/* ------------------------------------------------------------------ */
/*  Diagnosis engine                                                   */
/* ------------------------------------------------------------------ */

function getDiagnosis(
  product: string,
  symptom: string,
  duration: string,
  age: string,
): DiagnosisResult {
  const old = age === "Over 20 years" || age === "10\u201320 years";
  const chronic = duration === "Over a year" || duration === "Few months";

  // ----- WINDOW diagnoses -----
  if (product === "Window") {
    if (symptom === "Drafty / air leak") {
      return {
        likelyCause: old
          ? "Worn-out weatherstripping and warped frame allowing air infiltration."
          : "Damaged or deteriorated weatherstripping around the sash.",
        recommendedAction: old && chronic ? "replace" : "repair",
        actionDetail: old && chronic
          ? "Replacing the full window unit with a modern impact window will eliminate drafts and dramatically improve energy efficiency."
          : "Re-sealing the weatherstripping and adjusting the sash may resolve the issue.",
        urgency: chronic ? "medium" : "low",
        urgencyNote: chronic
          ? "Ongoing air leaks raise your energy bills and leave your home vulnerable during storms."
          : "Minor drafts can usually wait, but should be addressed before hurricane season.",
      };
    }
    if (symptom === "Hard to open or close") {
      return {
        likelyCause: "Worn balance springs, debris in the track, or a warped frame causing binding.",
        recommendedAction: old ? "replace" : "repair",
        actionDetail: old
          ? "On older windows the balance hardware is often discontinued. Replacement with a new impact window is the most reliable fix."
          : "Cleaning the track, lubricating hardware, or replacing the balance springs should restore smooth operation.",
        urgency: "medium",
        urgencyNote: "A window that won\u2019t close properly is a serious liability in a storm.",
      };
    }
    if (symptom === "Foggy / condensation between glass") {
      return {
        likelyCause: "Failed insulated-glass (IG) seal, allowing moisture between the panes.",
        recommendedAction: "replace",
        actionDetail: "Once the IG seal fails, the only permanent fix is replacing the glass unit or the entire window. Impact-rated replacement gives you hurricane protection at the same time.",
        urgency: "low",
        urgencyNote: "Foggy glass doesn\u2019t pose an immediate safety risk, but it reduces visibility and insulation value over time.",
      };
    }
    if (symptom === "Cracked or broken glass") {
      return {
        likelyCause: "Impact damage, thermal stress, or settling of the structure.",
        recommendedAction: "replace",
        actionDetail: "Cracked glass must be replaced immediately. Upgrading to impact glass provides code-compliant hurricane protection.",
        urgency: "high",
        urgencyNote: "Broken glass is an immediate safety and security hazard. Do not delay repair.",
      };
    }
    if (symptom === "Water leak during rain") {
      return {
        likelyCause: old
          ? "Deteriorated flashing, caulk failure, or frame corrosion allowing water penetration."
          : "Clogged weep holes or failed sealant around the frame.",
        recommendedAction: old ? "replace" : "repair",
        actionDetail: old
          ? "Water intrusion around older frames often indicates structural deterioration. Full replacement with proper Florida-code flashing is recommended."
          : "Clearing weep holes and re-caulking the exterior perimeter should stop the leak.",
        urgency: "high",
        urgencyNote: "Water intrusion can cause mold, rot, and structural damage. Address this as soon as possible.",
      };
    }
    // Noise coming through
    return {
      likelyCause: "Single-pane glass or poor seal allowing sound transmission.",
      recommendedAction: old || chronic ? "replace" : "repair",
      actionDetail: old || chronic
        ? "Upgrading to impact-rated laminated glass dramatically reduces noise \u2014 up to 50% quieter than standard glass."
        : "Adjusting the sash and replacing weatherstripping may provide modest noise improvement.",
      urgency: "low",
      urgencyNote: "Noise issues aren\u2019t urgent but they significantly affect quality of life. A free assessment can quantify the improvement you\u2019d get.",
    };
  }

  // ----- DOOR diagnoses -----
  if (symptom === "Won\u2019t lock properly") {
    return {
      likelyCause: "Misaligned strike plate, worn latch mechanism, or a warped door frame.",
      recommendedAction: old ? "replace" : "repair",
      actionDetail: old
        ? "On older doors the frame itself is often out of square. A new impact door and frame provides reliable locking and hurricane protection."
        : "Adjusting the strike plate or replacing the lock hardware should fix the issue.",
      urgency: "high",
      urgencyNote: "A door that won\u2019t lock is a security risk. Fix this immediately.",
    };
  }
  if (symptom === "Sticks or drags") {
    return {
      likelyCause: "Swelling from humidity, settling of the structure, or worn hinges / rollers.",
      recommendedAction: old ? "replace" : "repair",
      actionDetail: old
        ? "Chronic sticking on an older door usually means the frame has shifted. Replacement with a properly shimmed impact door resolves the problem permanently."
        : "Adjusting hinges, planing the door edge, or replacing rollers (for sliding doors) can restore smooth operation.",
      urgency: "medium",
      urgencyNote: "A sticking door can become a safety issue if it prevents quick exit during an emergency.",
    };
  }
  if (symptom === "Glass is foggy") {
    return {
      likelyCause: "Failed insulated-glass seal allowing moisture between the panes.",
      recommendedAction: "replace",
      actionDetail: "The glass panel (or the full door) needs replacement. Upgrading to impact-rated glass adds hurricane protection.",
      urgency: "low",
      urgencyNote: "Not an emergency, but it reduces energy efficiency and looks unsightly over time.",
    };
  }
  if (symptom === "Weather seal deteriorated") {
    return {
      likelyCause: "UV degradation and age have broken down the door\u2019s perimeter weatherstrip.",
      recommendedAction: old && chronic ? "replace" : "repair",
      actionDetail: old && chronic
        ? "If the door and frame are also showing wear, a full replacement with a modern impact door gives you a fresh seal plus storm protection."
        : "Replacing the weatherstripping is a straightforward repair that restores the door\u2019s seal.",
      urgency: chronic ? "medium" : "low",
      urgencyNote: chronic
        ? "A failed seal lets in moisture, bugs, and conditioned air loss. Repair before the rainy season."
        : "Address before the next rainy season to prevent water damage.",
    };
  }
  if (symptom === "Water leaks in") {
    return {
      likelyCause: old
        ? "Deteriorated threshold, corroded frame, or failed flashing allowing water penetration."
        : "Damaged or improperly seated threshold seal, or clogged weep system.",
      recommendedAction: old ? "replace" : "repair",
      actionDetail: old
        ? "Persistent water intrusion around an older door frame usually requires full replacement with proper Florida-code installation."
        : "Replacing the threshold gasket and re-sealing the frame should stop the leak.",
      urgency: "high",
      urgencyNote: "Water intrusion can cause mold growth and structural damage. Act quickly.",
    };
  }
  // Hard to slide
  return {
    likelyCause: "Worn rollers, a dirty or damaged track, or a misaligned door panel.",
    recommendedAction: old ? "replace" : "repair",
    actionDetail: old
      ? "Older sliding doors often have discontinued roller parts and corroded tracks. A new impact sliding glass door operates smoothly and meets current hurricane codes."
      : "Cleaning the track, replacing the rollers, and adjusting the panel height should restore easy sliding.",
    urgency: "medium",
    urgencyNote: "A sliding door that\u2019s hard to move may not seal properly during a storm.",
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TroubleshootingWizard() {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState("");
  const [symptom, setSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [age, setAge] = useState("");

  const totalSteps = 4;
  const showResult = step >= totalSteps;
  const progress = showResult ? 100 : (step / totalSteps) * 100;

  const handleSelect = (value: string) => {
    switch (step) {
      case 0:
        setProduct(value);
        break;
      case 1:
        setSymptom(value);
        break;
      case 2:
        setDuration(value);
        break;
      case 3:
        setAge(value);
        break;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setProduct("");
    setSymptom("");
    setDuration("");
    setAge("");
  };

  /* Current question config */
  const questionConfig: { question: string; options: readonly string[] }[] = [
    { question: "What type of product has the issue?", options: productTypes },
    {
      question: `What\u2019s the symptom?`,
      options: product === "Window" ? windowSymptoms : doorSymptoms,
    },
    { question: "How long has this been happening?", options: durations },
    { question: "How old is the product?", options: productAges },
  ];

  const currentQ = questionConfig[step] ?? questionConfig[0];
  const diagnosis = showResult ? getDiagnosis(product, symptom, duration, age) : null;

  return (
    <section className="min-h-screen bg-ocean-950 py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-palm-500/10 text-palm-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Diagnostic Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
            What&rsquo;s Wrong With My{" "}
            <span className="gradient-text">Window or Door?</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Answer a few questions and we&rsquo;ll diagnose the issue and
            recommend the best course of action.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              {showResult
                ? "Diagnosis Complete"
                : `Question ${step + 1} of ${totalSteps}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-palm-500 to-palm-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl shadow-black/40">
          {/* Back Button */}
          {step > 0 && !showResult && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}

          {/* Questions */}
          {!showResult && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-6">
                {currentQ.question}
              </h2>
              <div className="space-y-3">
                {currentQ.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-palm-500/20 hover:border-palm-500/40 transition-all duration-200 text-sm sm:text-base group flex items-center justify-between"
                  >
                    <span>{option}</span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-palm-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Diagnosis Result */}
          {showResult && diagnosis && (
            <div>
              {/* Title area */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-palm-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-palm-400 font-semibold uppercase tracking-wider">
                    Your Diagnosis
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {product} &mdash; {symptom}
                  </h2>
                </div>
              </div>

              {/* Urgency Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${
                  diagnosis.urgency === "high"
                    ? "bg-red-500/20 text-red-400"
                    : diagnosis.urgency === "medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    diagnosis.urgency === "high"
                      ? "bg-red-400 animate-pulse"
                      : diagnosis.urgency === "medium"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                />
                {diagnosis.urgency === "high"
                  ? "High Urgency \u2014 Act Now"
                  : diagnosis.urgency === "medium"
                  ? "Medium Urgency"
                  : "Low Urgency"}
              </div>

              {/* Likely Cause */}
              <div className="bg-white/5 rounded-xl p-5 mb-5 border border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Likely Cause
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {diagnosis.likelyCause}
                </p>
              </div>

              {/* Recommended Action */}
              <div className="bg-white/5 rounded-xl p-5 mb-5 border border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Recommended Action:{" "}
                  <span className={diagnosis.recommendedAction === "replace" ? "text-yellow-400" : "text-palm-400"}>
                    {diagnosis.recommendedAction === "replace" ? "Replace" : "Repair"}
                  </span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {diagnosis.actionDetail}
                </p>
              </div>

              {/* Urgency Note */}
              <div className={`rounded-xl p-5 mb-6 border ${
                diagnosis.urgency === "high"
                  ? "bg-red-500/10 border-red-500/20"
                  : diagnosis.urgency === "medium"
                  ? "bg-yellow-500/10 border-yellow-500/20"
                  : "bg-blue-500/10 border-blue-500/20"
              }`}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why It Matters
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {diagnosis.urgencyNote}
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-base hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Schedule a Free Inspection
                </Link>
                <a
                  href="tel:+17546004876"
                  className="block w-full text-center border border-white/10 text-white py-4 rounded-xl font-bold text-base hover:bg-white/5 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (754) 600-4876
                  </span>
                </a>
                <button
                  onClick={handleRestart}
                  className="w-full text-center text-gray-400 hover:text-white py-3 text-sm font-medium transition"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
