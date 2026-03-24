import Link from "next/link";
import type { Metadata } from "next";
import PaymentCalculator from "@/components/PaymentCalculator";

export const metadata: Metadata = {
  title: "Impact Windows Financing Fort Lauderdale | $0 Down, 0% Interest & PACE",
  description:
    "Affordable impact window financing in Fort Lauderdale & Broward County. $0 down, 0% interest, PACE financing, FPL rebates & insurance discounts. Make hurricane protection affordable. Free quote.",
  alternates: { canonical: "/financing/" },
};

const financingOptions = [
  {
    title: "0% Interest Financing",
    term: "12 - 18 Months",
    description:
      "Qualify for zero percent interest financing over 12 to 18 months with approved credit. Pay for your impact windows over time without paying a single dollar in interest charges.",
    highlights: [
      "No interest charges",
      "Fixed monthly payments",
      "12 or 18 month terms",
      "Quick online application",
    ],
    badge: "Most Popular",
  },
  {
    title: "Low-Rate Extended Financing",
    term: "Up to 15 Years",
    description:
      "Spread your investment over longer terms with competitive fixed interest rates. Ideal for whole-home projects where you want to keep your monthly payments as low as possible.",
    highlights: [
      "Rates from 4.99% APR",
      "Terms up to 15 years",
      "Payments as low as $89/mo",
      "No prepayment penalties",
    ],
    badge: "Lowest Payment",
  },
  {
    title: "PACE Financing",
    term: "Property Assessed",
    description:
      "Property Assessed Clean Energy financing allows you to finance impact windows through your property tax bill. No credit score requirement and the assessment transfers if you sell the home.",
    highlights: [
      "No credit score needed",
      "100% financing available",
      "Repay via property taxes",
      "Transfers with property sale",
    ],
    badge: "No Credit Check",
  },
  {
    title: "$0 Down Same-As-Cash",
    term: "6 Months",
    description:
      "Start your project with absolutely nothing out of pocket. Take advantage of our six-month same-as-cash offer. Pay the balance in full within six months and pay zero interest or financing charges.",
    highlights: [
      "$0 down payment required",
      "Zero cost if paid in 6 months",
      "No early payoff penalty",
      "Available on all projects",
    ],
    badge: "$0 Down",
  },
];

const steps = [
  {
    step: "1",
    title: "Get Your Free Estimate",
    description:
      "Schedule a free in-home consultation. We will measure your openings, discuss product options, and provide a detailed written proposal with transparent pricing.",
  },
  {
    step: "2",
    title: "Choose Your Financing Plan",
    description:
      "Review available financing options with your project consultant. We will help you find the plan that best fits your monthly budget and long-term financial goals.",
  },
  {
    step: "3",
    title: "Quick Application & Approval",
    description:
      "Complete a simple online financing application in under five minutes. Most applicants receive an instant decision, so you can move forward with confidence right away.",
  },
  {
    step: "4",
    title: "Project Begins with $0 Down",
    description:
      "Once approved, your project kicks off immediately with no money out of pocket. We handle permitting, scheduling, and installation while you enjoy predictable monthly payments.",
  },
];

const savingsPrograms = [
  {
    title: "FPL Rebates",
    description:
      "Florida Power & Light offers rebates for qualifying energy-efficient impact windows. Depending on the number of windows and their energy rating, homeowners may receive rebates that reduce the upfront cost of their project. Our team will help you determine eligibility and handle the paperwork.",
    amount: "Up to $1,500",
  },
  {
    title: "Hurricane Insurance Discounts",
    description:
      "Impact windows can reduce your hurricane insurance premiums by up to 45%. Many South Florida homeowners find that their annual insurance savings partially or fully offset their monthly financing payment, making impact windows essentially free in the long run.",
    amount: "Up to 45% off premiums",
  },
  {
    title: "ENERGY STAR Tax Credits",
    description:
      "Qualifying impact windows may be eligible for federal energy efficiency tax credits under the Inflation Reduction Act. This can provide additional savings of up to $600 per year on qualifying products, further reducing the net cost of your project.",
    amount: "Up to $600/year",
  },
  {
    title: "Property Value Increase",
    description:
      "Impact windows are one of the highest-ROI home improvements in Florida. On average, homeowners recoup 85% or more of their investment in added resale value. Your financed investment starts adding tangible property value from day one.",
    amount: "85%+ ROI",
  },
];

const paymentExamples = [
  { project: "5 Windows", range: "$89 - $149/mo", note: "With 15-year extended financing" },
  { project: "10 Windows", range: "$159 - $279/mo", note: "With 15-year extended financing" },
  { project: "Whole Home (15-20 openings)", range: "$249 - $449/mo", note: "With 15-year extended financing" },
  { project: "Whole Home + Doors", range: "$349 - $599/mo", note: "With 15-year extended financing" },
];

const faqs = [
  {
    question: "What credit score do I need to qualify for financing?",
    answer:
      "For our 0% interest and low-rate extended financing options, a credit score of 600 or higher is typically required. However, our PACE financing option has no credit score requirement at all, making it accessible to virtually every homeowner in South Florida.",
  },
  {
    question: "Is there really $0 down on financing?",
    answer:
      "Yes. With approved credit, you can start your impact window or door project with absolutely nothing out of pocket. Your first payment is not due until 30 days after project completion, giving you time to enjoy your new windows before your payment schedule begins.",
  },
  {
    question: "Can I pay off my financing early without penalties?",
    answer:
      "Absolutely. All of our financing options come with no prepayment penalties. You can make extra payments or pay off the entire balance at any time without incurring additional fees. Paying early on our low-rate plans saves you money on interest.",
  },
  {
    question: "How long does the financing approval process take?",
    answer:
      "Most applicants receive an instant decision within seconds of completing the online application. In some cases, additional documentation may be requested, but even those situations are typically resolved within 24 to 48 hours.",
  },
  {
    question: "Does PACE financing affect my mortgage?",
    answer:
      "PACE financing is repaid through your property tax bill and is secured by the property rather than your personal credit. It is important to note that some mortgage lenders may have policies regarding PACE assessments. We recommend discussing PACE with your mortgage provider before proceeding.",
  },
  {
    question: "Can I combine financing with FPL rebates and insurance discounts?",
    answer:
      "Yes. Our financing options can be combined with all available rebates, tax credits, and insurance discounts. Many homeowners find that when they factor in insurance savings, FPL rebates, and energy cost reductions, their net monthly cost for impact windows is very manageable.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-sun-400/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-sun-400 rounded-full animate-pulse" />
              <span className="text-sm text-sun-300 font-medium">$0 Down Payment Options</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Affordable <span className="gradient-text">Financing Options</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Hurricane protection should not be out of reach. Florida Impact Windows & Doors offers $0 down financing, 0% interest plans, PACE financing, FPL rebates, and insurance discount assistance so you can protect your home now and pay over time.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Financing Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Choose the Plan That Fits Your Budget
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer multiple financing paths so every South Florida homeowner can afford impact window and door protection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {financingOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all relative">
                {option.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-palm-500 to-palm-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {option.badge}
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-display">{option.title}</h3>
                  <p className="text-palm-600 font-semibold text-sm">{option.term}</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700 text-sm font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Estimate Your Payment</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Calculate Your Monthly Payment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our calculator to estimate monthly payments based on your project size, financing term, and down payment.
            </p>
          </div>
          <PaymentCalculator />
        </div>
      </section>

      {/* How Financing Works - 4 Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              How Financing Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting approved for impact window financing is fast, easy, and straightforward. Here is how it works in four simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-palm-500 to-palm-600 flex items-center justify-center mb-5 shadow-lg shadow-palm-500/25">
                  <span className="text-2xl font-bold font-display text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings & Rebates */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Rebates & Savings</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              FPL Rebates, Insurance Discounts & Tax Credits
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Impact windows pay for themselves through multiple savings programs. Here is how you can reduce your net cost even further.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {savingsPrograms.map((program) => (
              <div key={program.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-display">{program.title}</h3>
                  <span className="text-sun-400 font-bold font-display text-sm">{program.amount}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Payment Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Example Payments</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                What Does It Cost Per Month?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The monthly cost of impact windows depends on your project size, the products you choose, and your financing term. Here are some typical examples to give you a realistic picture.
              </p>
              <div className="space-y-4">
                {paymentExamples.map((example) => (
                  <div key={example.project} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div>
                      <p className="font-bold text-gray-900">{example.project}</p>
                      <p className="text-xs text-gray-500">{example.note}</p>
                    </div>
                    <span className="font-bold text-palm-600 font-display text-lg">{example.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">* Payment examples are estimates based on typical project sizes and approved credit. Actual payments may vary. Contact us for a personalized quote.</p>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100 text-center">
              <div className="text-sm font-semibold text-palm-600 uppercase tracking-wider mb-2">Starting From</div>
              <div className="text-6xl font-bold font-display text-gray-900 mb-2">$89<span className="text-3xl text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-8">Per window with approved credit</p>
              <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 w-full justify-center">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financing FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Financing FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions about our financing and payment options.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-palm-200 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-palm-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-open:bg-palm-50 group-open:border-palm-200 transition-colors">
                    <svg className="w-4 h-4 text-gray-500 group-open:text-palm-600 group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sun-500 via-palm-600 to-ocean-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Protect Your Home Today, Pay Over Time
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Do not wait for the next hurricane to wish you had impact windows. With $0 down financing, FPL rebates, and insurance discounts, there is no reason to delay. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-palm-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-sun-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
