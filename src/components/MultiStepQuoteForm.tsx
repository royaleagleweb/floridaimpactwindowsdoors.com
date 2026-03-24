"use client";

import { useState, useCallback } from "react";

/* ── Data ──────────────────────────────────────────────── */

const SERVICE_OPTIONS = [
  "Impact Windows",
  "Impact Doors",
  "Window Replacement",
  "Door Replacement",
  "Hurricane Shutters",
  "Commercial Services",
] as const;

const PROPERTY_TYPES = [
  "Single Family Home",
  "Condo/Townhouse",
  "Commercial",
] as const;

const OPENINGS = ["1-5", "6-10", "11-20", "20+"] as const;

const PROPERTY_AGES = [
  "Under 10 years",
  "10-25 years",
  "25+ years",
] as const;

const BRANDS = [
  "PGT",
  "CGI",
  "ES Windows",
  "Custom Window Systems",
  "No preference",
] as const;

const BUDGETS = [
  "Under $5K",
  "$5K-$15K",
  "$15K-$30K",
  "$30K+",
  "Not sure",
] as const;

const TIMELINES = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "Just researching",
] as const;

const CITIES = [
  "Fort Lauderdale",
  "Pompano Beach",
  "Boca Raton",
  "Coral Springs",
  "Plantation",
  "Weston",
  "Davie",
  "Hollywood",
  "Deerfield Beach",
  "Delray Beach",
  "Boynton Beach",
  "Other",
] as const;

const STEP_LABELS = [
  "Service Type",
  "Property Info",
  "Preferences",
  "Contact Info",
  "Review & Submit",
];

/* ── Types ─────────────────────────────────────────────── */

interface FormData {
  services: string[];
  propertyType: string;
  openings: string;
  propertyAge: string;
  brands: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const INITIAL: FormData = {
  services: [],
  propertyType: "",
  openings: "",
  propertyAge: "",
  brands: [],
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
};

/* ── Component ─────────────────────────────────────────── */

export default function MultiStepQuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  /* helpers */
  const toggle = useCallback(
    (field: "services" | "brands", value: string) => {
      setForm((prev) => {
        const arr = prev[field];
        return {
          ...prev,
          [field]: arr.includes(value)
            ? arr.filter((v) => v !== value)
            : [...arr, value],
        };
      });
    },
    [],
  );

  const set = useCallback(
    (field: keyof FormData, value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    [],
  );

  /* validation */
  const validate = (): boolean => {
    const e: Record<string, string> = {};

    if (step === 0 && form.services.length === 0)
      e.services = "Please select at least one service.";

    if (step === 1) {
      if (!form.propertyType) e.propertyType = "Please select a property type.";
      if (!form.openings) e.openings = "Please select the number of openings.";
      if (!form.propertyAge) e.propertyAge = "Please select the property age.";
    }

    if (step === 2) {
      if (form.brands.length === 0)
        e.brands = "Please select at least one brand preference.";
      if (!form.budget) e.budget = "Please select a budget range.";
      if (!form.timeline) e.timeline = "Please select a timeline.";
    }

    if (step === 3) {
      if (!form.name.trim()) e.name = "Name is required.";
      if (!form.email.trim()) e.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Please enter a valid email.";
      if (!form.phone.trim()) e.phone = "Phone number is required.";
      if (!form.address.trim()) e.address = "Address is required.";
      if (!form.city) e.city = "Please select a city.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    setDirection("forward");
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitted(true);
  };

  /* ── Thank-you screen ─────────────────────────────────── */
  if (submitted) {
    return (
      <div className="bg-ocean-950 rounded-xl border border-white/10 p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-palm-500/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-palm-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold font-display text-white mb-4">
          Thank You!
        </h2>
        <p className="text-gray-300 text-lg mb-2">
          Your quote request has been received.
        </p>
        <p className="text-palm-400 font-semibold text-lg">
          We&apos;ll call you within 24 hours.
        </p>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">
            Need immediate assistance?
          </p>
          <a
            href="tel:+17546004876"
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-palm-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (754) 600-4876
          </a>
        </div>
      </div>
    );
  }

  /* ── Step indicator ────────────────────────────────────── */
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEP_LABELS.map((label, i) => {
        const isActive = i === step;
        const isComplete = i < step;
        return (
          <div key={label} className="flex items-center">
            {/* Dot / number */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isComplete
                    ? "bg-palm-500 text-white"
                    : isActive
                      ? "bg-palm-500/20 text-palm-400 ring-2 ring-palm-500"
                      : "bg-white/5 text-gray-500 border border-white/10"
                }`}
              >
                {isComplete ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`hidden sm:block text-[10px] mt-1.5 font-medium whitespace-nowrap ${
                  isActive
                    ? "text-palm-400"
                    : isComplete
                      ? "text-palm-500/70"
                      : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </div>
            {/* Connector */}
            {i < STEP_LABELS.length - 1 && (
              <div
                className={`w-8 sm:w-14 h-[2px] mx-1 sm:mx-2 transition-colors duration-300 ${
                  i < step ? "bg-palm-500" : "bg-white/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  /* ── Reusable bits ─────────────────────────────────────── */

  const Checkbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <button
      type="button"
      onClick={onChange}
      className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 ${
        checked
          ? "border-palm-500 bg-palm-500/10 text-palm-400"
          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      <span
        className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-all ${
          checked
            ? "bg-palm-500 border-palm-500"
            : "border-white/20 bg-transparent"
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  const RadioCard = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
        selected
          ? "border-palm-500 bg-palm-500/10 text-palm-400"
          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      {label}
    </button>
  );

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
        <svg
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {msg}
      </p>
    ) : null;

  /* ── Step content ──────────────────────────────────────── */

  const stepContent = [
    /* Step 1 — Service Type */
    <div key="services">
      <h3 className="text-2xl font-bold font-display text-white mb-2">
        What do you need?
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Select all services that apply to your project.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {SERVICE_OPTIONS.map((s) => (
          <Checkbox
            key={s}
            label={s}
            checked={form.services.includes(s)}
            onChange={() => toggle("services", s)}
          />
        ))}
      </div>
      <FieldError msg={errors.services} />
    </div>,

    /* Step 2 — Property Info */
    <div key="property">
      <h3 className="text-2xl font-bold font-display text-white mb-2">
        Tell us about your property
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        This helps us prepare an accurate estimate.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Property Type
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {PROPERTY_TYPES.map((t) => (
              <RadioCard
                key={t}
                label={t}
                selected={form.propertyType === t}
                onClick={() => set("propertyType", t)}
              />
            ))}
          </div>
          <FieldError msg={errors.propertyType} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Number of openings to replace
          </label>
          <div className="grid grid-cols-4 gap-3">
            {OPENINGS.map((o) => (
              <RadioCard
                key={o}
                label={o}
                selected={form.openings === o}
                onClick={() => set("openings", o)}
              />
            ))}
          </div>
          <FieldError msg={errors.openings} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Property Age
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {PROPERTY_AGES.map((a) => (
              <RadioCard
                key={a}
                label={a}
                selected={form.propertyAge === a}
                onClick={() => set("propertyAge", a)}
              />
            ))}
          </div>
          <FieldError msg={errors.propertyAge} />
        </div>
      </div>
    </div>,

    /* Step 3 — Preferences */
    <div key="preferences">
      <h3 className="text-2xl font-bold font-display text-white mb-2">
        Your Preferences
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Help us tailor recommendations to your needs.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Preferred Brands
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {BRANDS.map((b) => (
              <Checkbox
                key={b}
                label={b}
                checked={form.brands.includes(b)}
                onChange={() => toggle("brands", b)}
              />
            ))}
          </div>
          <FieldError msg={errors.brands} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Budget Range
          </label>
          <div className="grid sm:grid-cols-3 gap-3">
            {BUDGETS.map((b) => (
              <RadioCard
                key={b}
                label={b}
                selected={form.budget === b}
                onClick={() => set("budget", b)}
              />
            ))}
          </div>
          <FieldError msg={errors.budget} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Timeline
          </label>
          <div className="grid grid-cols-2 gap-3">
            {TIMELINES.map((t) => (
              <RadioCard
                key={t}
                label={t}
                selected={form.timeline === t}
                onClick={() => set("timeline", t)}
              />
            ))}
          </div>
          <FieldError msg={errors.timeline} />
        </div>
      </div>
    </div>,

    /* Step 4 — Contact Info */
    <div key="contact">
      <h3 className="text-2xl font-bold font-display text-white mb-2">
        Contact Information
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        We&apos;ll use this to send your personalized quote.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="quote-name"
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="John Smith"
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
          />
          <FieldError msg={errors.name} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="quote-email"
              className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5"
            >
              Email *
            </label>
            <input
              id="quote-email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="john@email.com"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
            />
            <FieldError msg={errors.email} />
          </div>
          <div>
            <label
              htmlFor="quote-phone"
              className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5"
            >
              Phone *
            </label>
            <input
              id="quote-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
            />
            <FieldError msg={errors.phone} />
          </div>
        </div>

        <div>
          <label
            htmlFor="quote-address"
            className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5"
          >
            Property Address *
          </label>
          <input
            id="quote-address"
            type="text"
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="123 Main Street"
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
          />
          <FieldError msg={errors.address} />
        </div>

        <div>
          <label
            htmlFor="quote-city"
            className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5"
          >
            City *
          </label>
          <select
            id="quote-city"
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm appearance-none"
          >
            <option value="">Select your city</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <FieldError msg={errors.city} />
        </div>
      </div>
    </div>,

    /* Step 5 — Review & Submit */
    <div key="review">
      <h3 className="text-2xl font-bold font-display text-white mb-2">
        Review Your Quote Request
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Please confirm your details before submitting.
      </p>

      <div className="space-y-4">
        {/* Services */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Services
            </h4>
            <button
              type="button"
              onClick={() => { setDirection("back"); setStep(0); }}
              className="text-xs text-palm-400 hover:text-palm-300 transition-colors"
            >
              Edit
            </button>
          </div>
          <p className="text-white text-sm">{form.services.join(", ")}</p>
        </div>

        {/* Property */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Property
            </h4>
            <button
              type="button"
              onClick={() => { setDirection("back"); setStep(1); }}
              className="text-xs text-palm-400 hover:text-palm-300 transition-colors"
            >
              Edit
            </button>
          </div>
          <p className="text-white text-sm">
            {form.propertyType} &middot; {form.openings} openings &middot;{" "}
            {form.propertyAge}
          </p>
        </div>

        {/* Preferences */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Preferences
            </h4>
            <button
              type="button"
              onClick={() => { setDirection("back"); setStep(2); }}
              className="text-xs text-palm-400 hover:text-palm-300 transition-colors"
            >
              Edit
            </button>
          </div>
          <p className="text-white text-sm">
            Brands: {form.brands.join(", ")}
          </p>
          <p className="text-white text-sm">
            Budget: {form.budget} &middot; Timeline: {form.timeline}
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Contact
            </h4>
            <button
              type="button"
              onClick={() => { setDirection("back"); setStep(3); }}
              className="text-xs text-palm-400 hover:text-palm-300 transition-colors"
            >
              Edit
            </button>
          </div>
          <p className="text-white text-sm">{form.name}</p>
          <p className="text-white text-sm">
            {form.email} &middot; {form.phone}
          </p>
          <p className="text-white text-sm">
            {form.address}, {form.city}
          </p>
        </div>
      </div>
    </div>,
  ];

  /* ── Render ────────────────────────────────────────────── */

  return (
    <div className="bg-ocean-950 rounded-xl border border-white/10 p-6 sm:p-10 max-w-2xl mx-auto">
      <StepIndicator />

      {/* Animated step container */}
      <div
        key={step}
        className={`${
          direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"
        }`}
      >
        {stepContent[step]}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Next
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Quote Request
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
