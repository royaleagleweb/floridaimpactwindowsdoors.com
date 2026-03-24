"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Call Us",
    description:
      "Call (754) 600-4876 or fill out our online form for a free consultation. We'll discuss your needs and schedule a convenient time to visit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Free Estimate",
    description:
      "One of our owners visits your home, takes measurements, and provides a detailed written estimate with transparent pricing. No pressure, no surprises.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Expert Installation",
    description:
      "Our own crew (never subcontractors) installs your impact windows and doors. An owner is on-site for every project to ensure quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Final Inspection",
    description:
      "We schedule your city/county inspection. Once passed, we walk you through everything and make sure you're 100% satisfied.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-ocean-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From your first call to the final inspection, we make protecting
            your home easy, transparent, and stress-free.
          </p>
        </div>

        {/* Timeline — vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Mobile: vertical layout */}
          <div className="md:hidden space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-5 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms",
                }}
              >
                {/* Vertical connector + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-400 to-palm-600 flex items-center justify-center text-white font-bold font-display text-lg shadow-lg shadow-palm-500/25 flex-shrink-0 z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-palm-400/60 to-palm-400/10 my-0" />
                  )}
                </div>

                {/* Card */}
                <div className="pb-10 flex-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-palm-400/10 border border-palm-400/20 flex items-center justify-center text-palm-400">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal layout */}
          <div className="hidden md:block">
            {/* Horizontal connector line */}
            <div className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-palm-400/60 via-palm-400/40 to-palm-400/60 z-0" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index + 1) * 200}ms`
                      : "0ms",
                  }}
                >
                  {/* Numbered circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-400 to-palm-600 flex items-center justify-center text-white font-bold font-display text-lg shadow-lg shadow-palm-500/25 z-10">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:bg-white/[0.08] hover:border-palm-400/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-palm-400/10 border border-palm-400/20 flex items-center justify-center text-palm-400 flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Schedule your free in-home consultation today and take the first
            step toward a safer, more comfortable home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-400 hover:to-palm-500 transition-all shadow-lg shadow-palm-500/25"
            >
              Get Your Free Estimate
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-palm-400 font-semibold text-lg hover:text-palm-300 transition-colors"
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
      </div>
    </section>
  );
}
