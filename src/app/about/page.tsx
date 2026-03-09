import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Fort Lauderdale Impact Window & Door Installation Experts Since 2008",
  description:
    "Florida Impact Windows & Doors: Fort Lauderdale's trusted impact window installer since 2008. 5,000+ installations, A+ BBB rating, 5-star reviews. Owner-operated, no subcontractors. Meet our team.",
  alternates: { canonical: "/about/" },
};

const milestones = [
  { year: "2008", event: "Founded in Miami-Dade County with a small crew and a passion for protecting South Florida homes." },
  { year: "2011", event: "Became an authorized PGT dealer, expanding our product offerings to include Florida's top-selling impact brand." },
  { year: "2014", event: "Surpassed 1,000 completed installations and earned our first Best of Houzz Service Award." },
  { year: "2016", event: "Added CGI and ES Windows to our brand portfolio, giving homeowners more options at every price point." },
  { year: "2018", event: "Expanded operations into Palm Beach County, serving the full tri-county South Florida market." },
  { year: "2020", event: "Reached 3,500 installations and launched our dedicated commercial services division." },
  { year: "2023", event: "Surpassed 5,000 installations and became an authorized Custom Window Systems dealer." },
];

const values = [
  {
    title: "Integrity First",
    description:
      "We provide honest assessments, transparent pricing, and straightforward communication at every stage of your project. No high-pressure sales tactics, no hidden fees, no surprises.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Craftsmanship",
    description:
      "Every window and door we install is treated like it is going into our own home. We demand precision from our crews and inspect every detail before we consider a job complete.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Your satisfaction drives every decision we make. From the first phone call to the final walk-through, we treat you with the respect and attention you deserve as a homeowner investing in your property.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Community Commitment",
    description:
      "We live and work in South Florida. We sponsor local youth sports, participate in hurricane preparedness events, and donate materials to families in need after major storms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Carlos Gutierrez",
    role: "Founder & CEO",
    bio: "Carlos founded Florida Impact Windows & Doors after spending a decade in commercial glazing. His vision was simple: bring commercial-grade quality and professionalism to residential impact window installation. Under his leadership, Florida Impact Windows & Doors has grown from a three-person crew to a full-service operation with over 5,000 completed projects.",
  },
  {
    name: "Angela Martinez",
    role: "Director of Operations",
    bio: "Angela manages the day-to-day operations that keep projects running on time and on budget. With a background in construction management and a keen eye for logistics, she coordinates permitting, scheduling, and quality control across every active job site.",
  },
  {
    name: "David Park",
    role: "Head of Sales & Estimating",
    bio: "David leads our consultation and estimating team. He brings 12 years of experience in the impact window industry and a genuine passion for helping homeowners find the right products for their needs and budget. He is known for his honest, no-pressure approach.",
  },
  {
    name: "Miguel Torres",
    role: "Lead Installation Manager",
    bio: "Miguel oversees our installation crews and ensures every project meets Florida Impact Windows & Doors' exacting quality standards. He is factory-trained on all four of our authorized brands and personally inspects every completed installation before final sign-off.",
  },
];

const whyChooseUs = [
  {
    title: "15+ Years of South Florida Experience",
    description: "We have been installing impact windows and doors in Miami-Dade, Broward, and Palm Beach County for over fifteen years. We know the local building codes, permit processes, and HOA requirements inside and out.",
  },
  {
    title: "Authorized Dealer for 4 Premium Brands",
    description: "We carry PGT, CGI, ES Windows, and Custom Window Systems, giving you access to products at every price point and performance level. We help you choose the brand that fits your goals.",
  },
  {
    title: "Licensed, Insured & Certified",
    description: "Florida Impact Windows & Doors holds a Florida State Certified General Contractor license, carries full liability and workers compensation insurance, and maintains manufacturer certifications for warranty compliance.",
  },
  {
    title: "Full-Service Project Management",
    description: "We handle everything from initial measurement and product selection through permitting, HOA approval, professional installation, and final building department inspection.",
  },
  {
    title: "Transparent Pricing, No Surprises",
    description: "Our detailed written proposals break down every cost so you know exactly what you are paying for. We do not use bait-and-switch tactics or spring hidden fees on you after the job starts.",
  },
  {
    title: "Workmanship Guarantee",
    description: "Beyond the manufacturer warranty on your products, Florida Impact Windows & Doors provides our own workmanship guarantee covering our installation labor. If something is not right, we make it right.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">About Florida Impact Windows & Doors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Protecting South Florida Homes{" "}
              <span className="gradient-text">Since 2008</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              For over fifteen years, Florida Impact Windows & Doors has been the trusted partner for South Florida homeowners seeking the best in impact window and door protection. Our story is one of dedication, craftsmanship, and an unwavering commitment to keeping families safe.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            From a Small Crew to South Florida&apos;s Trusted Impact Experts
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Florida Impact Windows & Doors was founded in 2008 by Carlos Gutierrez, a South Florida native who spent a decade working in commercial glazing before realizing that residential homeowners deserved the same level of professionalism, quality, and attention to detail that commercial building owners received. Too often, he saw residential window companies cutting corners on installation, using undertrained labor, and leaving homeowners with products that were only as good as their weakest seal or anchor point. He set out to build a company that would do things the right way, every single time.
            </p>
            <p>
              Starting with a three-person crew and a single box truck, Carlos took on small residential projects across Miami-Dade County, earning referrals one job at a time through meticulous workmanship and honest communication. Word spread quickly among homeowners, real estate agents, and building managers that Florida Impact Windows & Doors was a company you could trust with your home. By 2011, the company had earned authorized dealer status with PGT, Florida&apos;s largest impact window manufacturer, and the growth trajectory accelerated from there.
            </p>
            <p>
              Today, Florida Impact Windows & Doors employs a team of dedicated professionals including project managers, estimators, permitting specialists, and factory-trained installation crews. We are authorized dealers for four of the most respected impact window brands in the market: PGT, CGI, ES Windows, and Custom Window Systems. We have completed more than 5,000 installations across Miami-Dade, Broward, and Palm Beach County, and we maintain a five-star Google rating built on thousands of genuine customer reviews. Despite our growth, the core principle that Carlos established on day one remains unchanged: treat every home like it is your own, and never cut a corner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Keeping South Florida Families Safe, One Home at a Time
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is to make premium hurricane protection accessible to every South Florida homeowner through expert guidance, honest pricing, and installation quality that exceeds expectations. We believe that protecting your family from hurricanes should not require a second mortgage, and we work tirelessly to provide solutions that fit real budgets without compromising on safety or code compliance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond installation, we are committed to educating homeowners about the benefits and nuances of impact windows and doors. We want you to make informed decisions based on facts, not fear. When you work with Florida Impact Windows & Doors, you gain a knowledgeable partner who will help you navigate product options, financing, permits, and the entire installation process with clarity and confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">5,000+</div>
                  <div className="text-sm text-gray-500">Installations</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">2,500+</div>
                  <div className="text-sm text-gray-500">Happy Homeowners</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold font-display gradient-text-green mb-1">5.0</div>
                  <div className="text-sm text-gray-500">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              The Principles That Guide Everything We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values are not just words on a wall. They are the standards we hold ourselves to on every project, with every customer, every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Company Milestones</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Our Journey
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold font-display text-palm-400">{milestone.year}</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex-1">
                  <p className="text-gray-300 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Meet the People Behind Florida Impact Windows & Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team combines decades of experience in the impact window industry with a genuine passion for protecting South Florida homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-palm-100 to-ocean-100 flex items-center justify-center mb-5">
                  <span className="text-2xl font-bold font-display text-palm-700">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-display">{member.name}</h3>
                <p className="text-palm-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Florida Impact Windows & Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Six Reasons to Choose Florida Impact Windows & Doors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-palm-200 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Licensed, Insured & Certified
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Miami-Dade Certified", detail: "Impact Window Installer" },
              { label: "Full Liability Insurance", detail: "$2M Coverage" },
              { label: "Workers Compensation", detail: "All Crews Covered" },
            ].map((cert) => (
              <div key={cert.label} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-xl bg-palm-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm font-display">{cert.label}</h3>
                <p className="text-xs text-gray-500">{cert.detail}</p>
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
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join over 2,500 South Florida homeowners who trust Florida Impact Windows & Doors. Schedule your free in-home consultation and get a detailed proposal with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
