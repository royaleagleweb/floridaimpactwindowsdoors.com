import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import HeroLeadForm from "@/components/HeroLeadForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Florida Impact Windows & Doors | Impact Windows & Doors in Fort Lauderdale | Broward & Palm Beach County",
  description:
    "Premium impact windows & doors at affordable prices. Serving Broward & Palm Beach County. A+ BBB rating, 5-star Google & Yelp reviews. HVHZ experts. Call (754) 600-4876.",
};

const testimonials = [
  {
    name: "Lilia Berezkina",
    location: "Google Review",
    text: "If I could give 10 stars, I would! We replaced all the windows and doors in the house and the process was a breeze! From the first visit where Abe, who are the company owners, explained the process, realistic timeline and what to expect.",
    rating: 5,
  },
  {
    name: "Patty Sabates",
    location: "Google Review",
    text: "By far this was the best overall experience I have ever had with a contractor. From the initial consult appointment to permitting process to the install, everything went flawless. Thank you to both Abe for an exceptional buying experience.",
    rating: 5,
  },
  {
    name: "Chris Mcmenamin",
    location: "Google Review",
    text: "Abe have built and continue to operate an amazing business. Approaching each job with the utmost professionalism, personal attention and communication. From the first estimate to the installation it was almost effortless.",
    rating: 5,
  },
  {
    name: "Valentin Morgunskiy",
    location: "Google Review",
    text: "From the moment I first met with Abe, I was intrigued by how they've consistently achieved five-star reviews. Now, having experienced their service first-hand with the installation of 15 windows in my home, I've found the answer.",
    rating: 5,
  },
  {
    name: "Borys Hankewych",
    location: "Google Review",
    text: "This is the company you want to do your impact windows and sliding glass doors. I got 5 quotes. Three were crazy high. Florida Impact and the other were way less. The other company had no reviews so I went with Florida Impact due to great reviews.",
    rating: 5,
  },
  {
    name: "Michael",
    location: "Google Review",
    text: "I have to share a wonderful experience I had working with Florida Impact Windows. From the onset, Abe (the owners) were both very respectful, informative, and professional explaining the window installation process.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <StickyMobileCTA />

      {/* Urgency / Promotion Banner */}
      <div className="bg-gradient-to-r from-palm-600 via-palm-500 to-palm-600 text-white text-center py-2.5 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-shimmer bg-[length:200%_100%]" />
        <p className="relative text-sm font-semibold tracking-wide">
          <span className="hidden sm:inline">My Safe Florida Home Program &mdash; </span>
          <span className="font-bold">Up to $10,000 Grant for Impact Windows</span>
          <span className="hidden sm:inline"> &mdash; See If You Qualify</span>
          <Link href="/get-estimate/" className="ml-3 underline underline-offset-2 font-bold hover:text-white/80 transition">
            Learn More &rarr;
          </Link>
        </p>
      </div>

      {/* Hero Section — Split Layout with Form */}
      <section className="relative bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Impact windows installed on modern Fort Lauderdale home - hurricane rated impact window installation in Broward County Florida"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/95 to-ocean-950/70" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-sm text-white/80 font-medium">5-Star Rated on Google &amp; Yelp</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.1] mb-6">
                Premium{" "}
                <span className="gradient-text">Impact Windows</span>{" "}
                &amp; Doors At Affordable Prices
              </h1>
              <p className="text-lg text-gray-300 mb-4 max-w-xl leading-relaxed">
                Protect your home with high-quality impact windows installed by HVHZ experts. Serving Broward &amp; Palm Beach County from Fort Lauderdale.
              </p>
              <p className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
                Every project installed by our own team, led by one of our owners &mdash; no shortcuts and no subcontractors. Florida&apos;s most trusted brands for impact windows and doors.
              </p>

              {/* Trust Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold font-display text-palm-400">A+</div>
                  <div className="text-xs text-gray-400 mt-1">BBB Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold font-display text-white">Top 4%</div>
                  <div className="text-xs text-gray-400 mt-1">FL Contractors</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold font-display text-palm-400">111</div>
                  <div className="text-xs text-gray-400 mt-1">BuildZoom Score</div>
                </div>
              </div>

              {/* Certification Badges */}
              <div className="flex flex-wrap items-center gap-4">
                {["HVHZ Certified", "Fully Insured", "Owner-Installed"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Lead Form */}
            <div className="flex justify-center lg:justify-end">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              { icon: "\u2605", text: "5-Star Google Reviews" },
              { icon: "\u2713", text: "A+ BBB Rated" },
              { icon: "\u26A1", text: "HVHZ Certified Experts" },
              { icon: "\uD83D\uDEE1\uFE0F", text: "Licensed & Insured" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-600">
                <span className="text-palm-500 text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Of Impact Windows & Doors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Impact Windows?</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
              Benefits Of Impact Windows &amp; Doors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hurricane Protection",
                desc: "Impact windows are designed to help protect you during a hurricane. They are tested and certified to withstand simulated hurricane conditions. If the glass is damaged, it will remain intact in the frame and continue to protect you.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                title: "Increased Security",
                desc: "Most break-ins happen through a window. Impact windows are built to resist even the toughest hits, making it nearly impossible for intruders to get inside. Your family and home are safe and well-protected.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
              },
              {
                title: "Energy Efficient",
                desc: "Impact-resistant glass reduces the energy requirements for heating and cooling your home, saving money every month on your FPL bill. Low-E coated glass reflects 70-85% of the sun's heat.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              },
              {
                title: "Insurance Savings",
                desc: "Under Florida law (Statute \u00A7627.0629), all residential property insurance companies are required to offer discounts to homeowners who install impact-resistant windows and doors. Schedule a wind mitigation inspection to see how much you could save.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                title: "Noise Reduction",
                desc: "Laminated impact windows achieve a sound reduction of approximately 50\u201370%. The interlayer within laminated glass helps dampen sound vibrations, significantly reducing the transmission of exterior noise.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>,
              },
              {
                title: "Increased Property Value",
                desc: "Impact windows deliver one of the highest ROI for home improvements. Most homebuyers actively look for properties with impact windows already installed, making this upgrade a smart investment.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-palm-200 hover:shadow-lg hover:shadow-palm-500/5 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-palm-50 flex items-center justify-center text-palm-600 mb-5 group-hover:bg-palm-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-display mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Window Is Right For You */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Window Types</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Which Window Is Right For You?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Single Hung Window",
                href: "/services/window-types/single-hung/",
                desc: "Two sashes with only the bottom moving up and down while the top stays fixed. One of the most common in South Florida homes \u2014 excellent ventilation, strong security, and a traditional look.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
              },
              {
                name: "Sliding Window",
                href: "/services/window-types/sliding/",
                desc: "Operates by sliding left or right along a reinforced track system. Offers smooth operation, minimal maintenance, and wide viewing areas. Well-suited for rooms with limited vertical space.",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
              },
              {
                name: "Casement Window",
                href: "/services/window-types/casement/",
                desc: "Opens outward like a door, operated by a handle. Provides maximum ventilation, superior air sealing, and excellent energy performance. Selected for unobstructed views and strong wind resistance.",
                image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
              },
              {
                name: "Awning Window",
                href: "/services/window-types/awning/",
                desc: "Hinged at the top and opens outward from the bottom, forming a protective \u201Cawning\u201D shape. Enjoy ventilation even during light rain. Great for bathrooms, kitchens, and small openings.",
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
              },
            ].map((window) => (
              <Link key={window.name} href={window.href} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-palm-500/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={window.image} alt={`${window.name} - impact ${window.name.toLowerCase()} installation Fort Lauderdale Florida`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-palm-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{window.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">{window.desc}</p>
                  <span className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                    Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact vs Regular — Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">See the Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
              Impact Windows vs. Accordion Shutters
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Unlike shutters, which leave your home feeling like a dark cave, impact windows provide protection without sacrificing light, comfort, or peace of mind.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-center">Shutters</th>
                  <th className="px-6 py-4 text-sm font-semibold text-palm-600 uppercase tracking-wider text-center">Impact Windows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "24/7 Hurricane Protection", shutters: false, impact: true },
                  { feature: "No Setup Required Before Storm", shutters: false, impact: true },
                  { feature: "Natural Light During Storms", shutters: false, impact: true },
                  { feature: "Insurance Premium Discounts", shutters: "partial", impact: true },
                  { feature: "Break-in / Security Protection", shutters: false, impact: true },
                  { feature: "Noise Reduction (50\u201370%)", shutters: false, impact: true },
                  { feature: "Energy Bill Savings (Low-E)", shutters: false, impact: true },
                  { feature: "Increases Home Value / Curb Appeal", shutters: false, impact: true },
                  { feature: "UV Protection (99%)", shutters: false, impact: true },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.shutters === "partial" ? (
                        <span className="text-yellow-500 text-xs font-semibold">Partial</span>
                      ) : (
                        <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30">
              Upgrade to Impact Windows
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Windows 101 — Educational FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Impact Windows 101</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What makes an impact window so strong?",
                a: "Impact windows are constructed with heavy-duty reinforced frames and impact-resistant laminated glass. A durable liner called polyvinyl butyral (PVB) keeps the glass bonded together even when cracked. A special silicone sealant anchors the laminated glass to the frame, ensuring the window continues to protect even after impact.",
              },
              {
                q: "What is design pressure (DP) rating?",
                a: "The most important performance factor for impact windows. This rating measures how much wind load (positive and negative pressure) a window can withstand, measured in pounds per square foot (psf). In South Florida, building codes require windows to meet minimum DP ratings based on location, building height, and exposure.",
              },
              {
                q: "Can impact windows get you a discount on your insurance?",
                a: "Yes. Under Florida law (Statute \u00A7627.0629), all residential property insurance companies are required to offer discounts or credits to homeowners who harden their homes against hurricane damage, including through impact-resistant windows and doors.",
              },
              {
                q: "What is a High Velocity Hurricane Zone (HVHZ)?",
                a: "The Florida Building Code designates high-velocity hurricane zones as areas most vulnerable to hurricanes. Only Miami-Dade and Broward County are designated as HVHZ. Of the 292 hurricanes that have hit the U.S. since 1851, 120 made landfall in Florida, and 57 hit Broward and Miami-Dade County.",
              },
              {
                q: "What is the difference between Low-E glass and tinted glass?",
                a: "Tinted glass blocks more of the sun\u2019s light than heat. Low-E glass blocks more of the sun\u2019s heat than light. Low-E glass reflects about 70-85% of the sun\u2019s heat, tinted glass reflects about 40-60%, and clear laminated glass reflects only about 10-30%.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 font-display mb-3 flex items-start gap-3">
                  <span className="text-palm-500 text-xl mt-0.5">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq/" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              View All FAQ Articles <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* My Safe Florida Home Program */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Grant Program</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                The My Safe Florida Home Program Is Open
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Most homes built before 2002 do not have impact windows or any hurricane protection. The My Safe Florida Home program helps homeowners strengthen their homes by offering a free wind mitigation inspection to help determine whether they qualify for the <span className="text-palm-400 font-bold">$10,000 grant</span>.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free wind mitigation inspection", "Up to $10,000 grant for qualifying homeowners", "Covers impact windows & hurricane protection", "Available to homes built before 2002"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30">
                Check If You Qualify
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 text-center">
              <div className="text-sm font-semibold text-palm-400 uppercase tracking-wider mb-2">Grant Up To</div>
              <div className="text-6xl font-bold font-display text-white mb-1">$10,000</div>
              <p className="text-gray-400 mb-8">For qualifying Florida homeowners</p>
              <div className="space-y-3 text-left mb-8">
                {["Impact-rated windows & doors", "Professional installation included", "All permits handled by our team", "Full warranty coverage", "Code compliance guaranteed"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-palm-500/10 border border-palm-500/20 rounded-xl p-4 mb-6">
                <p className="text-palm-300 text-sm font-medium">Financing available for projects not covered by the grant</p>
              </div>
              <Link href="/get-estimate/" className="block w-full text-center bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25">
                Schedule Your Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose the Right Installer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Why Florida Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Choose the Right Window &amp; Installer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We&apos;ve built our reputation on honesty, integrity, and customer service. This commitment has helped us maintain 5-star reviews on Google, Yelp, and the Better Business Bureau, where we proudly hold an A+ Rating.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our company has earned a score of 111 on BuildZoom, placing us in the <span className="text-palm-600 font-bold">top 4% of 191,428 licensed contractors in the State of Florida</span>. No shortcuts and no subcontractors &mdash; every project is installed by our own team, led by one of our owners.
              </p>
              <p className="text-gray-700 font-medium italic mb-8">
                &ldquo;Even if you buy the best impact windows, they will not perform as well as they should if they are not installed properly.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Google", value: "5 Stars" },
                  { label: "Yelp", value: "5 Stars" },
                  { label: "BBB", value: "A+ Rating" },
                  { label: "BuildZoom", value: "Score: 111" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                    <div className="text-lg font-bold text-palm-600 font-display">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Florida Impact Windows and Doors professional installation team installing hurricane rated impact windows in Fort Lauderdale home"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <p className="text-white text-sm font-medium">Owner-led installations &mdash; Abe on every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">A Reputation You Can Trust</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
              Consistently 5-Star Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">on Google, Yelp &amp; BBB</span>
            </div>
          </div>

          {/* Featured Review */}
          <div className="bg-ocean-950 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="absolute top-6 right-8 text-8xl font-display text-white/5 leading-none">&ldquo;</div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white text-lg">{testimonials[0].name}</p>
                <p className="text-gray-400">{testimonials[0].location}</p>
              </div>
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1, 6).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews/" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Impact Windows &amp; Doors We&apos;ve Installed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From luxury oceanfront condos to Mediterranean estates, see how impact windows transform South Florida homes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Luxury oceanfront penthouse with floor-to-ceiling impact windows overlooking the Atlantic Ocean in South Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-palm-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Oceanfront Penthouse</span>
                  <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Floor-to-ceiling impact windows with panoramic ocean views</p>
                </div>
              </div>
            </div>
            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-48 md:h-60">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Luxury Miami high-rise condo with impact sliding glass doors and bay views"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">Miami High-Rise</span>
                </div>
              </div>
            </div>
            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-48 md:h-60">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="Mediterranean style South Florida mansion with arched impact windows and palm trees"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">Mediterranean Estate</span>
                </div>
              </div>
            </div>
            {/* Bottom row - 3 images */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-48 md:h-60">
                <Image
                  src="/images/gallery-4.jpg"
                  alt="Spanish colonial South Florida home with custom arched impact windows and bougainvillea"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">Spanish Colonial</span>
                </div>
              </div>
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-48 md:h-60">
                <Image
                  src="/images/gallery-5.jpg"
                  alt="Modern beachfront South Florida home with large impact windows and infinity pool"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">Modern Beachfront</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery/" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
              Simple 4-Step Process
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-palm-200 via-palm-400 to-palm-200" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Free Estimate", desc: "Abe visits your home, assesses your needs, takes measurements, and explains your options." },
                { step: "2", title: "Custom Proposal", desc: "Detailed pricing with product recommendations, financing options, and realistic timeline." },
                { step: "3", title: "We Handle Permits", desc: "All permits and paperwork handled by our team. No hassle for you." },
                { step: "4", title: "Owner-Led Installation", desc: "Our team installs every project \u2014 led by one of our owners, ensuring consistent quality." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative z-10 w-[72px] h-[72px] mx-auto rounded-full bg-white border-4 border-palm-400 flex items-center justify-center mb-5 shadow-lg shadow-palm-500/10">
                    <span className="text-2xl font-bold text-palm-600 font-display">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30">
              Schedule Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Impact Windows &amp; Doors in Fort Lauderdale
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Serving Broward and Palm Beach County from our Fort Lauderdale location. HVHZ certified for Miami-Dade and Broward County installations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                county: "Broward County",
                note: "HVHZ Certified",
                cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Coral Springs", "Plantation", "Weston", "Davie"],
                href: "/areas/fort-lauderdale/",
              },
              {
                county: "Palm Beach County",
                note: "",
                cities: ["West Palm Beach", "Boca Raton", "Boynton Beach", "Delray Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Lake Worth"],
                href: "/areas/west-palm-beach/",
              },
              {
                county: "Miami-Dade County",
                note: "HVHZ Certified",
                cities: ["Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Homestead", "Key Biscayne"],
                href: "/areas/miami/",
              },
            ].map((area) => (
              <div key={area.county} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-display">{area.county}</h3>
                  {area.note && <span className="text-[10px] bg-palm-50 text-palm-700 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">{area.note}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {area.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-palm-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {city}
                    </li>
                  ))}
                </ul>
                <Link href={area.href} className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm hover:text-palm-700 transition-colors">
                  View All Cities <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-palm-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-palm-500/10 border border-palm-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
            <span className="text-sm text-palm-300 font-medium">My Safe Florida Home Program &mdash; Up to $10,000 Grant</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation estimate from one of our owners. Premium impact windows &amp; doors at affordable prices, installed by HVHZ experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-105"
            >
              Schedule Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-400 transition-colors"
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
