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
    name: "Verified Customer",
    location: "Google Review",
    text: "If I could give 10 stars, I would! We replaced all the windows and doors in the house and the process was a breeze! From the first visit where Abe, who are the company owners, explained the process, realistic timeline and what to expect.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    location: "Google Review",
    text: "By far this was the best overall experience I have ever had with a contractor. From the initial consult appointment to permitting process to the install, everything went flawless. Thank you to both Abe for an exceptional buying experience.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    location: "Google Review",
    text: "Abe have built and continue to operate an amazing business. Approaching each job with the utmost professionalism, personal attention and communication. From the first estimate to the installation it was almost effortless.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    location: "Google Review",
    text: "From the moment I first met with Abe, I was intrigued by how they've consistently achieved five-star reviews. Now, having experienced their service first-hand with the installation of 15 windows in my home, I've found the answer.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    location: "Google Review",
    text: "This is the company you want to do your impact windows and sliding glass doors. I got 5 quotes. Three were crazy high. Florida Impact and the other were way less. The other company had no reviews so I went with Florida Impact due to great reviews.",
    rating: 5,
  },
  {
    name: "Verified Customer",
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
            src="/images/windows3.jpg"
            alt="Impact windows installed on South Florida home - hurricane rated impact window installation in Broward County Florida"
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
      <section className="bg-ocean-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              { icon: "\u2605", text: "5-Star Google Reviews" },
              { icon: "\u2713", text: "A+ BBB Rated" },
              { icon: "\u26A1", text: "HVHZ Certified Experts" },
              { icon: "\uD83D\uDEE1\uFE0F", text: "Licensed & Insured" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-400">
                <span className="text-palm-400 text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Of Impact Windows & Doors */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Why Impact Windows?</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
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
              <div key={item.title} className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 hover:shadow-lg hover:shadow-palm-500/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-palm-500/10 flex items-center justify-center text-palm-400 mb-5 group-hover:bg-palm-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Why Work With Us?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From beachfront condos to luxury estates, we deliver expert impact window and door installations tailored to every property type across South Florida.</p>
          </div>
          {/* Featured large card */}
          <div className="mb-6">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-palm-500/30 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                  <Image src="/images/windows.jpg" alt="South Florida home with impact windows installed" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-950/50 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-palm-500/10 text-palm-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-4">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    Trusted by 5,000+ Homeowners
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">Local Experts Who Know South Florida</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">With over 20 years of experience serving South Florida, we understand the unique challenges our climate presents. From hurricane-force winds to year-round UV exposure, we install products engineered specifically for our region.</p>
                  <Link href="/get-estimate/" className="inline-flex items-center gap-2 text-palm-400 font-semibold group-hover:gap-3 transition-all">
                    Get a Free Estimate <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4-card grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Licensed & Insured",
                desc: "Fully licensed Florida contractor with comprehensive insurance coverage. Every installation meets or exceeds Florida Building Code.",
                image: "/images/windows2.jpg",
                icon: "shield",
              },
              {
                title: "Premium Products",
                desc: "We partner with industry leaders like PGT, CGI, and ES Windows to deliver top-tier impact windows and doors built for Florida.",
                image: "/images/Casement Impact Windows.jpg",
                icon: "star",
              },
              {
                title: "Expert Installation",
                desc: "Our certified installation crews deliver precision craftsmanship on every project, from single-family homes to high-rise condos.",
                image: "/images/doors.jpg",
                icon: "gear",
              },
              {
                title: "Financing Available",
                desc: "Flexible payment options and financing plans make protecting your home affordable. We also help you maximize insurance savings.",
                image: "/images/windows5.jpg",
                icon: "dollar",
              },
            ].map((item) => (
              <div key={item.title} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-palm-500/30 transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-palm-500/20 backdrop-blur-sm flex items-center justify-center text-palm-400 border border-palm-500/20">
                      {item.icon === "shield" && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                      {item.icon === "star" && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                      {item.icon === "gear" && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                      {item.icon === "dollar" && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white font-display mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resources row */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Link href="/services/" className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-palm-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-ocean-500/10 flex items-center justify-center text-ocean-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Our Services</h4>
                <p className="text-gray-500 text-xs mt-0.5">Explore all window & door solutions</p>
              </div>
              <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-palm-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/blog/" className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-palm-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-ocean-500/10 flex items-center justify-center text-ocean-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Blog & Resources</h4>
                <p className="text-gray-500 text-xs mt-0.5">Tips, guides & hurricane prep</p>
              </div>
              <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-palm-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/faq/" className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-palm-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-ocean-500/10 flex items-center justify-center text-ocean-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">FAQs</h4>
                <p className="text-gray-500 text-xs mt-0.5">Common questions answered</p>
              </div>
              <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-palm-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-ocean-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Recent Projects
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From single-family homes to large estates, see the quality of our impact window and door installations across South Florida.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/doors 2.jpg", alt: "Impact door installation crew working on Fort Lauderdale home" },
              { src: "/images/windows4.jpg", alt: "Completed impact window installation on South Florida home with palm trees" },
              { src: "/images/doors4.jpg", alt: "Aerial view of full impact window and door replacement project" },
              { src: "/images/windows6.jpg", alt: "Installation crew installing impact windows on residential home" },
              { src: "/images/doors5.jpg", alt: "Professional crew installing impact doors on Florida home" },
              { src: "/images/windows.jpg", alt: "Completed impact window installation on two-story Florida home" },
              { src: "/images/imapct doors.jpg", alt: "Impact door installation in progress on South Florida residence" },
              { src: "/images/picture window.jpg", alt: "Large impact picture window installed on Florida home" },
            ].map((img, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-palm-500/30 transition-all ${index === 0 || index === 5 ? "row-span-2" : ""}`}>
                <div className={`relative w-full overflow-hidden ${index === 0 || index === 5 ? "h-full min-h-[320px]" : "h-48 md:h-56"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30">
              Get a Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact vs Regular — Comparison Table */}
      <section className="py-20 bg-ocean-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">See the Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Impact Windows vs. Accordion Shutters
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Unlike shutters, which leave your home feeling like a dark cave, impact windows provide protection without sacrificing light, comfort, or peace of mind.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Shutters</th>
                  <th className="px-6 py-4 text-sm font-semibold text-palm-400 uppercase tracking-wider text-center">Impact Windows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
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
                  <tr key={row.feature} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">{row.feature}</td>
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
      <section className="py-20 bg-ocean-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Impact Windows 101</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
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
              <div key={faq.q} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                <h3 className="text-lg font-bold text-white font-display mb-3 flex items-start gap-3">
                  <span className="text-palm-400 text-xl mt-0.5">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq/" className="inline-flex items-center gap-2 text-palm-400 font-semibold hover:text-palm-300 transition-colors">
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
      <section className="py-20 bg-ocean-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Why Florida Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Choose the Right Window &amp; Installer
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We&apos;ve built our reputation on honesty, integrity, and customer service. This commitment has helped us maintain 5-star reviews on Google, Yelp, and the Better Business Bureau, where we proudly hold an A+ Rating.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our company has earned a score of 111 on BuildZoom, placing us in the <span className="text-palm-400 font-bold">top 4% of 191,428 licensed contractors in the State of Florida</span>. No shortcuts and no subcontractors &mdash; every project is installed by our own team, led by one of our owners.
              </p>
              <p className="text-gray-300 font-medium italic mb-8">
                &ldquo;Even if you buy the best impact windows, they will not perform as well as they should if they are not installed properly.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Google", value: "5 Stars" },
                  { label: "Yelp", value: "5 Stars" },
                  { label: "BBB", value: "A+ Rating" },
                  { label: "BuildZoom", value: "Score: 111" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-lg font-bold text-palm-400 font-display">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/doors 3.jpg"
                alt="Florida Impact Windows and Doors professional installation team installing hurricane rated impact doors in Fort Lauderdale home"
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
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">A Reputation You Can Trust</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
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
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden border border-white/10">
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
            {testimonials.slice(1, 6).map((t, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews/" className="inline-flex items-center gap-2 text-palm-400 font-semibold hover:text-palm-300 transition-colors">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-ocean-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Simple 4-Step Process
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-palm-500/20 via-palm-400 to-palm-500/20" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Free Estimate", desc: "Abe visits your home, assesses your needs, takes measurements, and explains your options." },
                { step: "2", title: "Custom Proposal", desc: "Detailed pricing with product recommendations, financing options, and realistic timeline." },
                { step: "3", title: "We Handle Permits", desc: "All permits and paperwork handled by our team. No hassle for you." },
                { step: "4", title: "Owner-Led Installation", desc: "Our team installs every project \u2014 led by one of our owners, ensuring consistent quality." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative z-10 w-[72px] h-[72px] mx-auto rounded-full bg-ocean-950 border-4 border-palm-400 flex items-center justify-center mb-5 shadow-lg shadow-palm-500/20">
                    <span className="text-2xl font-bold text-palm-400 font-display">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
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
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Impact Windows &amp; Doors in Fort Lauderdale
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Serving Broward and Palm Beach County from our Fort Lauderdale location. HVHZ certified for Miami-Dade and Broward County installations.</p>
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
              <div key={area.county} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white font-display">{area.county}</h3>
                  {area.note && <span className="text-[10px] bg-palm-500/10 text-palm-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">{area.note}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {area.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-palm-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {city}
                    </li>
                  ))}
                </ul>
                <Link href={area.href} className="inline-flex items-center gap-2 text-palm-400 font-semibold text-sm hover:text-palm-300 transition-colors">
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
