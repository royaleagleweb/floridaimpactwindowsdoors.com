"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const financingTerms = [
  { label: "12 Months — 0% APR", months: 12, apr: 0 },
  { label: "18 Months — 0% APR", months: 18, apr: 0 },
  { label: "5 Years — 4.99% APR", months: 60, apr: 4.99 },
  { label: "10 Years — 6.99% APR", months: 120, apr: 6.99 },
  { label: "15 Years — 8.99% APR", months: 180, apr: 8.99 },
];

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatCurrencyCents(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function PaymentCalculator() {
  const [projectAmount, setProjectAmount] = useState(15000);
  const [termIndex, setTermIndex] = useState(0);
  const [downPaymentPct, setDownPaymentPct] = useState(0);

  const term = financingTerms[termIndex];

  const results = useMemo(() => {
    const downPayment = projectAmount * (downPaymentPct / 100);
    const principal = projectAmount - downPayment;
    const { months, apr } = term;

    let monthlyPayment: number;
    let totalCost: number;
    let totalInterest: number;

    if (apr === 0) {
      monthlyPayment = principal / months;
      totalCost = principal;
      totalInterest = 0;
    } else {
      const r = apr / 100 / 12;
      const factor = Math.pow(1 + r, months);
      monthlyPayment = principal * (r * factor) / (factor - 1);
      totalCost = monthlyPayment * months;
      totalInterest = totalCost - principal;
    }

    return {
      monthlyPayment,
      totalCost: totalCost + downPayment,
      totalInterest,
      principal,
      downPayment,
    };
  }, [projectAmount, termIndex, downPaymentPct, term]);

  return (
    <div className="bg-ocean-950 rounded-xl border border-white/10 p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
          Monthly Payment Calculator
        </h3>
        <p className="text-gray-400">
          Estimate your monthly payment for impact windows and doors financing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Project Amount */}
          <div>
            <label className="block text-sm font-semibold text-palm-400 mb-2">
              Project Amount
            </label>
            <div className="text-3xl font-bold font-display text-white mb-3">
              {formatCurrency(projectAmount)}
            </div>
            <input
              type="range"
              min={2000}
              max={50000}
              step={500}
              value={projectAmount}
              onChange={(e) => setProjectAmount(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-palm-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-palm-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-palm-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$2,000</span>
              <span>$50,000</span>
            </div>
          </div>

          {/* Financing Term */}
          <div>
            <label
              htmlFor="financing-term"
              className="block text-sm font-semibold text-palm-400 mb-2"
            >
              Financing Term
            </label>
            <select
              id="financing-term"
              value={termIndex}
              onChange={(e) => setTermIndex(Number(e.target.value))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-palm-500 transition-colors appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "20px",
              }}
            >
              {financingTerms.map((t, i) => (
                <option key={i} value={i} className="bg-ocean-950">
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-semibold text-palm-400 mb-2">
              Down Payment: {downPaymentPct}%
            </label>
            <input
              type="range"
              min={0}
              max={50}
              step={5}
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-palm-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-palm-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-palm-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>50%</span>
            </div>
            {downPaymentPct > 0 && (
              <p className="text-sm text-gray-400 mt-1">
                Down payment: {formatCurrency(results.downPayment)}
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col">
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex-1">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-1">Your Estimated Monthly Payment</p>
              <div className="text-5xl font-bold font-display text-white">
                {formatCurrencyCents(results.monthlyPayment)}
              </div>
              <p className="text-sm text-gray-500 mt-1">per month for {term.months} months</p>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Financed Amount</span>
                <span className="text-white font-semibold">
                  {formatCurrency(results.principal)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Interest</span>
                <span className={results.totalInterest === 0 ? "text-palm-400 font-semibold" : "text-white font-semibold"}>
                  {results.totalInterest === 0
                    ? "$0 — Interest Free!"
                    : formatCurrency(results.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between text-sm border-t border-white/10 pt-3">
                <span className="text-gray-400">Total Cost</span>
                <span className="text-white font-bold text-lg">
                  {formatCurrency(results.totalCost)}
                </span>
              </div>
            </div>
          </div>

          {/* Insurance Savings Note */}
          <div className="mt-4 bg-palm-500/10 border border-palm-500/20 rounded-xl p-4 flex gap-3 items-start">
            <svg
              className="w-6 h-6 text-palm-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <p className="text-sm text-palm-300">
              <span className="font-semibold text-palm-400">Insurance Savings:</span> Most
              homeowners save $800&ndash;$2,400/year on insurance with impact windows, which can
              offset your monthly payment significantly.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/get-estimate/"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105 w-full"
          >
            Get Your Custom Quote
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
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-6">
        * Calculator provides estimates only. Actual rates and payments depend on credit approval.
        Contact us for a personalized financing quote.
      </p>
    </div>
  );
}
