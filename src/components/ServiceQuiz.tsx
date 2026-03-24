"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "goal",
    question: "What are you looking to do?",
    options: [
      "Replace windows",
      "Replace doors",
      "Both windows and doors",
      "Not sure yet",
    ],
  },
  {
    id: "concern",
    question: "What\u2019s your main concern?",
    options: [
      "Hurricane protection",
      "Energy savings",
      "Noise reduction",
      "Aesthetics",
      "Security",
    ],
  },
  {
    id: "age",
    question: "How old are your current windows/doors?",
    options: [
      "Less than 10 years",
      "10\u201320 years",
      "Over 20 years",
      "Not sure",
    ],
  },
  {
    id: "property",
    question: "What type of property?",
    options: ["Single-family home", "Condo/townhouse", "Commercial building"],
  },
  {
    id: "quantity",
    question: "How many openings need work?",
    options: ["1\u20135", "6\u201310", "11\u201320", "20+"],
  },
  {
    id: "timeline",
    question: "What\u2019s your timeline?",
    options: [
      "ASAP \u2014 storm season approaching",
      "Within 3 months",
      "Within 6 months",
      "Just researching",
    ],
  },
];

interface Recommendation {
  service: string;
  description: string;
  reasons: string[];
  urgency: "high" | "medium" | "low";
}

function getRecommendation(answers: Record<string, string>): Recommendation {
  const goal = answers.goal;
  const concern = answers.concern;
  const property = answers.property;
  const age = answers.age;
  const timeline = answers.timeline;

  const isUrgent =
    timeline === "ASAP \u2014 storm season approaching" || age === "Over 20 years";
  const urgency: "high" | "medium" | "low" = isUrgent
    ? "high"
    : timeline === "Within 3 months"
    ? "medium"
    : "low";

  if (property === "Commercial building") {
    return {
      service: "Commercial Services",
      description:
        "Our commercial division specializes in large-scale impact window and door projects for businesses, HOAs, and multi-unit properties throughout South Florida.",
      reasons: [
        "Commercial-grade impact products rated for HVHZ",
        "Experienced with permits and HOA requirements",
        "Dedicated project manager for commercial jobs",
        "Flexible scheduling to minimize business disruption",
      ],
      urgency,
    };
  }

  if (concern === "Hurricane protection" && goal?.includes("window")) {
    return {
      service: "Impact Windows",
      description:
        "Impact windows are your best defense against hurricanes. They meet Miami-Dade HVHZ standards and provide 24/7 protection without the hassle of shutters.",
      reasons: [
        "Meets Miami-Dade HVHZ hurricane code",
        "No need to put up shutters before a storm",
        "May qualify for insurance discounts up to 45%",
        "Potential eligibility for My Safe Florida Home grant",
      ],
      urgency,
    };
  }

  if (concern === "Hurricane protection" && goal?.includes("door")) {
    return {
      service: "Impact Doors",
      description:
        "Impact doors complete your home\u2019s hurricane envelope. From entry doors to sliding glass, our impact-rated doors meet the strictest Florida building codes.",
      reasons: [
        "Large missile impact rated for HVHZ zones",
        "Completes your home\u2019s hurricane protection envelope",
        "Enhances security against break-ins",
        "Available in sliding glass, French, and entry styles",
      ],
      urgency,
    };
  }

  if (concern === "Hurricane protection") {
    return {
      service: "Hurricane Shutters",
      description:
        "Hurricane shutters are a cost-effective way to protect your home. We offer accordion, roll-down, Bahama, and panel styles to fit your budget and aesthetics.",
      reasons: [
        "Most affordable hurricane protection option",
        "Multiple styles: accordion, roll-down, Bahama, panel",
        "Quick installation timeline",
        "Meets Florida building code requirements",
      ],
      urgency,
    };
  }

  if (concern === "Energy savings") {
    return {
      service: "Energy Efficient Windows",
      description:
        "Our energy-efficient impact windows feature Low-E glass and argon gas fills that can reduce your cooling costs by up to 30% \u2014 while also providing hurricane protection.",
      reasons: [
        "Low-E coated glass reduces heat transfer",
        "Can lower energy bills by up to 30%",
        "Dual benefit: energy savings + hurricane protection",
        "May qualify for federal energy tax credits",
      ],
      urgency,
    };
  }

  if (goal === "Replace doors" || goal?.includes("door")) {
    return {
      service: "Door Replacement",
      description:
        "Whether you need a new entry door, sliding glass door, or French doors, we\u2019ll help you find the perfect impact-rated replacement that enhances your home\u2019s style and security.",
      reasons: [
        "Wide selection of styles and finishes",
        "Impact-rated options available",
        "Professional installation with proper sealing",
        "Improves curb appeal and home value",
      ],
      urgency,
    };
  }

  if (goal === "Replace windows") {
    return {
      service: "Window Replacement",
      description:
        "Upgrading your windows improves your home\u2019s comfort, appearance, and protection. We carry top brands like PGT, CGI, and ES Windows in every style.",
      reasons: [
        "Top brands: PGT, CGI, ES Windows",
        "Every style: single-hung, casement, sliding, and more",
        "Proper installation with Florida-code flashing",
        "Significant improvement in noise reduction",
      ],
      urgency,
    };
  }

  // Default: both or not sure
  return {
    service: "Impact Windows",
    description:
      "Based on your answers, we recommend starting with a full-home assessment. Impact windows provide the best combination of hurricane protection, energy efficiency, and noise reduction for South Florida homes.",
    reasons: [
      "Complete hurricane protection without shutters",
      "Energy savings up to 30% on cooling costs",
      "Insurance discount potential up to 45%",
      "Free in-home consultation to assess your needs",
    ],
    urgency,
  };
}

export default function ServiceQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const totalSteps = questions.length;
  const progress = showResult
    ? 100
    : showForm
    ? ((totalSteps) / (totalSteps + 1)) * 100
    : (step / (totalSteps + 1)) * 100;

  const handleAnswer = (answer: string) => {
    const q = questions[step];
    setAnswers((prev) => ({ ...prev, [q.id]: answer }));
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (showForm) {
      setShowForm(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const recommendation = getRecommendation(answers);

  return (
    <section className="min-h-screen bg-ocean-950 py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-palm-500/10 text-palm-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Free Quiz &mdash; 60 Seconds
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
            Which Service Is{" "}
            <span className="gradient-text">Right for You?</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Answer a few quick questions and we&rsquo;ll recommend the best
            solution for your home.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              {showResult
                ? "Complete!"
                : showForm
                ? "Almost done"
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

        {/* Quiz Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl shadow-black/40">
          {/* Back Button */}
          {(step > 0 || showForm || showResult) && !showResult && (
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
          {!showForm && !showResult && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-6">
                {questions[step].question}
              </h2>
              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
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

          {/* Lead Capture Form */}
          {showForm && !showResult && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                Where should we send your recommendation?
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                We&rsquo;ll also include a personalized estimate for your
                project.
              </p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Property Address"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-base hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  See My Recommendation
                </button>
              </form>
              <p className="text-xs text-gray-600 text-center mt-4">
                No spam. No obligation. 100% free.
              </p>
            </div>
          )}

          {/* Recommendation Result */}
          {showResult && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-palm-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-palm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-palm-400 font-semibold uppercase tracking-wider">
                    Our Recommendation
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {recommendation.service}
                  </h2>
                </div>
              </div>

              {/* Urgency Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${
                  recommendation.urgency === "high"
                    ? "bg-red-500/20 text-red-400"
                    : recommendation.urgency === "medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    recommendation.urgency === "high"
                      ? "bg-red-400 animate-pulse"
                      : recommendation.urgency === "medium"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                />
                {recommendation.urgency === "high"
                  ? "High Priority"
                  : recommendation.urgency === "medium"
                  ? "Moderate Priority"
                  : "Low Priority"}
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {recommendation.description}
              </p>

              <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Why We Recommend This
                </h3>
                <ul className="space-y-2.5">
                  {recommendation.reasons.map((reason, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <svg className="w-4 h-4 text-palm-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-base hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Schedule Your Free Estimate
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
