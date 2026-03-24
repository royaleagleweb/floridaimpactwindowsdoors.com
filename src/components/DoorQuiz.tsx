"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Option {
  label: string;
  icon: React.ReactNode;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

interface DoorRecommendation {
  door: string;
  description: string;
  features: string[];
}

/* ------------------------------------------------------------------ */
/*  Questions                                                          */
/* ------------------------------------------------------------------ */

const questions: Question[] = [
  {
    id: "purpose",
    question: "What\u2019s the primary purpose of your new door?",
    options: [
      {
        label: "Hurricane protection",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75L7.5 4.5m4.5 5.25L14.25 4.5m-6 9.75L5.25 18m7.5-4.5l3 4.5" />
          </svg>
        ),
      },
      {
        label: "Energy efficiency",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        label: "Curb appeal",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ),
      },
      {
        label: "All of the above",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "location",
    question: "Where will this door be installed?",
    options: [
      {
        label: "Front entry",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
          </svg>
        ),
      },
      {
        label: "Back/side entry",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10 3h4m-2 0v7" />
          </svg>
        ),
      },
      {
        label: "Patio/pool area",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "Garage",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M4 21V10l8-7 8 7v11M9 21v-6h6v6M9 14h6" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "style",
    question: "What style do you prefer?",
    options: [
      {
        label: "Traditional",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        label: "Modern/contemporary",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        ),
      },
      {
        label: "French/classic",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v16m8-16v16M4 8h4m8 0h4M4 16h4m8 0h4M4 4h16v16H4z" />
          </svg>
        ),
      },
      {
        label: "No preference",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "light",
    question: "How much natural light do you want?",
    options: [
      {
        label: "Maximum light",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
      },
      {
        label: "Some light",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ),
      },
      {
        label: "Privacy is more important",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "budget",
    question: "What\u2019s your approximate budget per door?",
    options: [
      {
        label: "Under $2,000",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "$2,000\u2013$4,000",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "$4,000\u2013$6,000",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "$6,000+",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "hoa",
    question: "Do you have an HOA with design restrictions?",
    options: [
      {
        label: "Yes",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
      {
        label: "No",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "Not sure",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Recommendation logic                                               */
/* ------------------------------------------------------------------ */

function getRecommendation(answers: Record<string, string>): DoorRecommendation {
  const { purpose, location, style, light, budget } = answers;

  // Sliding Glass Door — patio/pool area + maximum light
  if (location === "Patio/pool area" && light === "Maximum light") {
    return {
      door: "Sliding Glass Door",
      description:
        "A sliding glass door is the ideal choice for your patio or pool area. It floods your space with natural light, provides easy access to the outdoors, and our impact-rated models offer full hurricane protection without sacrificing the view.",
      features: [
        "Full-panel tempered impact glass",
        "Smooth glide track system for effortless operation",
        "Miami-Dade HVHZ approved options available",
        "Low-E glass for UV and heat reduction",
        "Multi-point locking system for security",
      ],
    };
  }

  // French Door — French/classic style or patio area + some light/privacy
  if (
    style === "French/classic" ||
    (location === "Patio/pool area" && light !== "Maximum light")
  ) {
    return {
      door: "French Door",
      description:
        "French doors add timeless elegance to your home while providing excellent natural light and ventilation. Our impact-rated French doors combine classic beauty with modern hurricane protection for the perfect blend of form and function.",
      features: [
        "Double-door design with decorative glass panels",
        "Impact-rated laminated safety glass",
        "Available in traditional and modern profiles",
        "Multi-point locking hardware for enhanced security",
        "Energy-efficient Low-E glass options",
      ],
    };
  }

  // Patio Door — patio location or energy efficiency focus + moderate budget
  if (
    (location === "Patio/pool area") ||
    (purpose === "Energy efficiency" && (budget === "$2,000\u2013$4,000" || budget === "Under $2,000"))
  ) {
    return {
      door: "Patio Door",
      description:
        "A patio door is a versatile and energy-efficient choice that works beautifully for indoor-outdoor living. Our impact-rated patio doors provide hurricane protection, superior insulation, and a clean, streamlined look.",
      features: [
        "High-performance weatherstripping for energy savings",
        "Impact-rated glass meets Florida building codes",
        "Smooth rolling operation on heavy-duty track",
        "Available in 2-panel and 3-panel configurations",
        "Integrated screen options available",
      ],
    };
  }

  // Storm Door — budget-friendly + hurricane focus
  if (
    (purpose === "Hurricane protection" && budget === "Under $2,000") ||
    (location === "Back/side entry" && budget === "Under $2,000")
  ) {
    return {
      door: "Storm Door",
      description:
        "A storm door is an affordable way to add an extra layer of hurricane protection and energy efficiency to your existing door. It\u2019s perfect for back or side entries where you want ventilation without compromising safety.",
      features: [
        "Adds hurricane protection to your existing door",
        "Interchangeable glass and screen panels",
        "Self-storing design for seasonal flexibility",
        "Improves energy efficiency by creating an air barrier",
        "Budget-friendly with professional installation",
      ],
    };
  }

  // Entry Door — front entry, curb appeal, traditional/modern, or higher budgets
  if (
    location === "Front entry" ||
    purpose === "Curb appeal" ||
    style === "Modern/contemporary" ||
    style === "Traditional" ||
    budget === "$4,000\u2013$6,000" ||
    budget === "$6,000+"
  ) {
    return {
      door: "Entry Door",
      description:
        "An impact-rated entry door is the centerpiece of your home\u2019s curb appeal and your first line of defense against hurricanes. Our premium entry doors combine stunning design with fortress-level protection.",
      features: [
        "Impact-rated to meet Miami-Dade HVHZ standards",
        "Premium finishes: fiberglass, steel, or wood-grain options",
        "Decorative glass inserts and sidelight options",
        "Multi-point locking system with deadbolt",
        "May qualify for insurance discounts up to 45%",
      ],
    };
  }

  // Garage — explicit garage selection
  if (location === "Garage") {
    return {
      door: "Entry Door",
      description:
        "For your garage entry, a durable impact-rated entry door provides excellent hurricane protection and security. Our garage-to-home entry doors are built to withstand Florida\u2019s toughest weather while keeping your home safe and energy efficient.",
      features: [
        "Impact-rated steel or fiberglass construction",
        "Fire-rated options available for garage-to-home entries",
        "Weathertight seals to prevent moisture intrusion",
        "Heavy-duty hinges and multi-point locking",
        "Meets Florida building code requirements",
      ],
    };
  }

  // Default — Entry Door
  return {
    door: "Entry Door",
    description:
      "Based on your preferences, we recommend starting with a premium impact-rated entry door. It\u2019s the most versatile option, offering hurricane protection, energy efficiency, and beautiful curb appeal all in one package.",
    features: [
      "Impact-rated for full hurricane protection",
      "Energy-efficient insulated core",
      "Wide range of styles from traditional to modern",
      "Professional installation with code-compliant flashing",
      "Free in-home consultation to review options",
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DoorQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
  });

  const totalSteps = questions.length;
  const progress = showResult
    ? 100
    : showForm
    ? (totalSteps / (totalSteps + 1)) * 100
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
            Which Door Is{" "}
            <span className="gradient-text">Right for You?</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Answer 6 quick questions and get a personalized door
            recommendation for your South Florida home.
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
                    key={option.label}
                    onClick={() => handleAnswer(option.label)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-palm-500/20 hover:border-palm-500/40 transition-all duration-200 text-sm sm:text-base group flex items-center gap-4"
                  >
                    <span className="text-gray-500 group-hover:text-palm-400 transition flex-shrink-0">
                      {option.icon}
                    </span>
                    <span className="flex-1">{option.label}</span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-palm-400 transition flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                door project.
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
                  placeholder="ZIP Code"
                  required
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
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
                    {recommendation.door}
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {recommendation.description}
              </p>

              <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2.5">
                  {recommendation.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <svg className="w-4 h-4 text-palm-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link
                  href="/get-estimate/"
                  className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-base hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Your Free Estimate
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
