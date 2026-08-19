import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Call Us",
    description:
      "Call (754) 600-4876 or fill out our online form for a free consultation. We'll discuss your needs and schedule a convenient time for Abe to visit.",
  },
  {
    number: "02",
    title: "Free Estimate",
    description:
      "Abe visits your home, assesses your needs, takes measurements, and provides a detailed written estimate — a custom proposal with product recommendations, financing options, and a realistic timeline. No pressure, no surprises.",
  },
  {
    number: "03",
    title: "Expert Installation",
    description:
      "We handle all permits and paperwork. Our own crew installs your impact windows and doors — led by one of our owners on-site for every project, ensuring consistent quality.",
  },
  {
    number: "04",
    title: "Final Inspection",
    description:
      "We schedule your city/county inspection. Once passed, we walk you through everything and make sure you're 100% satisfied.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="home-section bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            From your first call to the final inspection, we make protecting your home easy, transparent, and stress-free.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.15rem] left-[8%] right-[8%] h-px bg-[#0d1b33]/12" aria-hidden="true" />
          <ol className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <div className="relative z-10 w-14 h-14 rounded-full bg-[#0d1b33] text-white flex items-center justify-center mb-7 shadow-[0_8px_24px_rgba(13,27,51,0.18)]">
                <span className="text-sm font-semibold font-display tracking-[0.12em]">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b33] font-display mb-3 tracking-tight">{step.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{step.description}</p>
            </li>
          ))}
          </ol>
        </div>

        <div className="mt-16">
          <Link
            href="/get-estimate/"
            className="inline-flex items-center gap-2 text-[#0d1b33] font-semibold border-b border-[#0d1b33]/25 pb-0.5 hover:border-[#e8930f] hover:text-[#e8930f] transition-colors"
          >
            Start with a free estimate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
