import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Florida Impact Windows & Doors | Join Our Team in South Florida",
  description:
    "Join the Florida Impact Windows & Doors team. We are hiring Project Managers, Installation Technicians, Sales Consultants, and more. Competitive pay, benefits, and growth opportunities in South Florida.",
};

const cultureValues = [
  {
    title: "Craftsmanship First",
    description:
      "We take pride in doing things the right way. Every member of our team is committed to quality work that protects families and stands the test of time. Cutting corners is never an option.",
  },
  {
    title: "Respect & Teamwork",
    description:
      "We treat each other, our customers, and their homes with respect. Our success depends on collaboration between our sales, operations, and installation teams working together seamlessly.",
  },
  {
    title: "Growth & Learning",
    description:
      "We invest in our people through ongoing training, manufacturer certifications, and clear career advancement pathways. Many of our current leaders started in entry-level roles and grew with the company.",
  },
  {
    title: "Community Roots",
    description:
      "We live and work in South Florida. We sponsor local youth sports, participate in hurricane preparedness events, and give back to the communities we serve. This is our home too.",
  },
];

const benefits = [
  "Competitive base pay with performance bonuses",
  "Health, dental, and vision insurance",
  "Paid time off and paid holidays",
  "401(k) retirement plan with company match",
  "Company vehicle for field positions",
  "Ongoing training and manufacturer certifications",
  "Career growth opportunities in a growing company",
  "Supportive, family-oriented work culture",
  "Tool allowance for installation positions",
  "Employee referral bonus program",
];

const openPositions = [
  {
    title: "Project Manager",
    department: "Operations",
    type: "Full-Time",
    location: "Doral, FL (Office + Field)",
    description:
      "Manage multiple impact window and door installation projects from contract signing through final inspection. Oversee scheduling, permitting, material ordering, crew coordination, and customer communication. Ensure every project is delivered on time, on budget, and to Florida Impact Windows & Doors quality standards.",
    requirements: [
      "3+ years experience in construction project management",
      "Strong organizational and multitasking abilities",
      "Knowledge of South Florida building codes and permit processes",
      "Proficiency with project management and CRM software",
      "Excellent written and verbal communication skills",
      "Bilingual English/Spanish preferred",
    ],
  },
  {
    title: "Installation Technician",
    department: "Installation",
    type: "Full-Time",
    location: "South Florida (Field)",
    description:
      "Join our installation team as an impact window and door installation technician. You will work on residential and commercial projects across Miami-Dade, Broward, and Palm Beach County, installing products from PGT, CGI, ES Windows, and Custom Window Systems following manufacturer specifications and Florida Building Code requirements.",
    requirements: [
      "2+ years experience installing impact windows and doors",
      "Familiarity with Florida Building Code installation requirements",
      "Ability to read architectural drawings and specifications",
      "Physical ability to lift 75+ pounds and work on ladders",
      "Valid Florida driver license and reliable transportation",
      "Factory training certifications preferred (PGT, CGI, etc.)",
    ],
  },
  {
    title: "Sales Consultant",
    department: "Sales",
    type: "Full-Time",
    location: "South Florida (Field + Office)",
    description:
      "Conduct in-home consultations with homeowners, assess their needs, take measurements, present product options, and prepare detailed proposals. Our sales approach is consultative and no-pressure, focused on helping customers find the right impact products for their needs and budget.",
    requirements: [
      "2+ years experience in home improvement or window/door sales",
      "Strong product knowledge of impact windows and the Florida market",
      "Excellent communication and presentation skills",
      "Ability to take accurate field measurements",
      "Valid Florida driver license and professional appearance",
      "Base salary plus commission with uncapped earning potential",
    ],
  },
  {
    title: "Office Coordinator",
    department: "Administration",
    type: "Full-Time",
    location: "Doral, FL (Office)",
    description:
      "Support the day-to-day operations of our Doral headquarters. Manage incoming calls and estimate requests, coordinate scheduling between customers and field teams, process permit applications, maintain project files, and provide administrative support to our sales and operations teams.",
    requirements: [
      "2+ years experience in office administration or customer service",
      "Excellent phone manner and interpersonal skills",
      "Proficiency with Microsoft Office and CRM software",
      "Strong attention to detail and organizational skills",
      "Ability to multitask in a fast-paced environment",
      "Bilingual English/Spanish strongly preferred",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Careers at <span className="gradient-text">Florida Impact Windows & Doors</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              We are growing and looking for talented professionals who share our commitment to quality, integrity, and protecting South Florida homes. Explore our open positions and build your career with a team that values craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              What It Means to Work at Florida Impact Windows & Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Florida Impact Windows & Doors, we have built a culture where hard work is rewarded, quality is non-negotiable, and every team member plays a vital role in protecting South Florida families.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cultureValues.map((value) => (
              <div key={value.title} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-palm-200 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Florida Impact Windows & Doors?</span>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Build Your Career with South Florida&apos;s Top Impact Window Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Florida Impact Windows & Doors is a rapidly growing company with a reputation for quality and integrity. We invest in our people with competitive compensation, comprehensive benefits, and genuine opportunities for career advancement. Whether you are an experienced installer, a skilled salesperson, or an operations professional, we offer a supportive work environment where your contributions are valued.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Many of our current managers and team leads started in entry-level positions and advanced through demonstrated skill and dedication. When you grow, we grow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-8 border border-palm-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">Benefits & Perks</h3>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white rounded-xl p-3">
                    <svg className="w-5 h-5 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and find the role that matches your skills and career goals.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-palm-200 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-display">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs font-bold bg-palm-100 text-palm-700 px-3 py-1 rounded-full">{position.department}</span>
                      <span className="text-xs font-medium bg-ocean-100 text-ocean-600 px-3 py-1 rounded-full">{position.type}</span>
                      <span className="text-xs font-medium bg-gray-200 text-gray-600 px-3 py-1 rounded-full">{position.location}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{position.description}</p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-palm-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-palm-600 via-ocean-700 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Send us your resume and tell us why you would be a great fit at Florida Impact Windows & Doors. We look forward to hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us to Apply
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17546004876" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
