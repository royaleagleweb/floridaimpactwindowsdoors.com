import type { FaqItem } from "@/lib/faqSchema";

type Accent = "palm" | "sun" | "ocean";

const summaryHover: Record<Accent, string> = {
  palm: "hover:text-palm-600",
  sun: "hover:text-sun-600",
  ocean: "hover:text-ocean-600",
};

export default function PageFaqSection({
  eyebrow = "FAQ",
  heading,
  faqs,
  accent = "palm",
}: {
  eyebrow?: string;
  heading: string;
  faqs: FaqItem[];
  accent?: Accent;
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            {heading}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <summary
                className={`flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 font-display text-lg ${summaryHover[accent]} transition-colors`}
              >
                {faq.question}
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
