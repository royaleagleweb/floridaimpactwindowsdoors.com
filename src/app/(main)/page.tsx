import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import HeroLeadForm from "@/components/HeroLeadForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Impact Windows & Doors Hollywood | Serving South Florida",
  description:
    "Premium impact windows & doors at affordable prices. Serving Broward & Palm Beach County. A+ BBB rating, 5-star reviews. HVHZ experts. Call (754) 600-4876.",
  alternates: { canonical: "https://floridaimpactwindowsdoors.com/" },
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

const StarRow = ({ className = "w-4 h-4 text-[#e8930f]" }: { className?: string }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Impact Windows & Doors Hollywood | Serving South Florida",
    description: "South Florida's premier impact window and door installation company. Hurricane-rated protection for homes in Miami-Dade, Broward & Palm Beach County.",
    url: "https://floridaimpactwindowsdoors.com/",
    isPartOf: { "@type": "WebSite", name: "Florida Impact Windows & Doors", url: "https://floridaimpactwindowsdoors.com" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes an impact window so strong?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Impact windows are constructed with heavy-duty reinforced frames and impact-resistant laminated glass. A durable liner called polyvinyl butyral (PVB) keeps the glass bonded together even when cracked. A special silicone sealant anchors the laminated glass to the frame, ensuring the window continues to protect even after impact.",
        },
      },
      {
        "@type": "Question",
        name: "What is design pressure (DP) rating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most important performance factor for impact windows. This rating measures how much wind load (positive and negative pressure) a window can withstand, measured in pounds per square foot (psf). In South Florida, building codes require windows to meet minimum DP ratings based on location, building height, and exposure.",
        },
      },
      {
        "@type": "Question",
        name: "Can impact windows get you a discount on your insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — after a licensed inspector documents every glazed opening on form OIR-B1-1802. Florida Statute §627.0629 requires carriers to offer wind-mitigation credits. Opening protection is all-or-nothing, and new inspections on or after April 1, 2026 use the revised form. The credit is not a fixed percentage for every house.",
        },
      },
      {
        "@type": "Question",
        name: "What is a High Velocity Hurricane Zone (HVHZ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Florida Building Code designates high-velocity hurricane zones as areas most vulnerable to hurricanes. Only Miami-Dade and Broward County are designated as HVHZ. Of the 292 hurricanes that have hit the U.S. since 1851, 120 made landfall in Florida, and 57 hit Broward and Miami-Dade County.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Low-E glass and tinted glass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tinted glass blocks more of the sun's light than heat. Low-E glass blocks more of the sun's heat than light. Low-E glass reflects about 70-85% of the sun's heat, tinted glass reflects about 40-60%, and clear laminated glass reflects only about 10-30%.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <StickyMobileCTA />

      <div className="bg-[#e8930f] text-white text-center py-3 px-4">
        <p className="text-[13px] md:text-sm font-semibold tracking-wide">
          <Link href="/get-estimate/" className="hover:text-white/85 transition">
            <span className="hidden sm:inline">My Safe Florida Home Program &mdash; </span>
            <span className="font-bold">Up to $10,000 Grant</span>
            <span className="hidden sm:inline"> &mdash; See If You Qualify &gt;</span>
          </Link>
        </p>
      </div>

      <section className="relative overflow-hidden min-h-[680px] lg:min-h-[820px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="South Florida home with impact sliding glass doors at dusk"
            fill
            className="object-cover object-[center_35%] scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b33]/70 via-[#0d1b33]/28 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d1b33]/35 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-white/90 font-medium mb-6 tracking-wide">
                5-Star Rated on Google &amp; Yelp
              </p>

              <h1 className="home-title text-4xl md:text-5xl lg:text-[3.6rem] text-white mb-7">
                Premium Impact Windows &amp; Doors At{" "}
                <span className="text-[#e8930f]">Affordable Prices</span>
              </h1>
              <p className="hero-description text-lg md:text-xl text-white/90 mb-5 max-w-xl leading-relaxed" data-speakable="true">
                Protect your home with high-quality impact windows installed by HVHZ experts. We measure, permit, and install from 3000 Stirling Rd in Hollywood — serving Miami-Dade, Broward, and Palm Beach.
              </p>
              <p className="text-base text-white/75 mb-10 max-w-xl leading-relaxed">
                Every project installed by our own team, led by one of our owners &mdash; no shortcuts. Florida&apos;s most trusted brands for impact windows and doors.
              </p>

              <p className="text-sm text-white/80 tracking-wide">
                A+ BBB &nbsp;&middot;&nbsp; Top 4% FL Contractors &nbsp;&middot;&nbsp; 111 BuildZoom
              </p>
              <p className="text-sm text-white/65 mt-3 tracking-wide">
                HVHZ Certified &nbsp;&middot;&nbsp; Fully Insured &nbsp;&middot;&nbsp; Owner-Installed
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b33] text-white home-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="home-title text-4xl md:text-5xl mb-6 max-w-3xl">
            Who Installs the Windows, and Which County Rules Apply?
          </h2>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mt-14">
            <div>
              <h3 className="text-white/50 font-semibold text-xs uppercase tracking-[0.18em] mb-5">Hollywood installer</h3>
              <ul className="space-y-5 text-white/80 leading-relaxed text-[17px]">
                <li>Florida Impact Windows &amp; Doors is the installer at 3000 Stirling Rd, Hollywood, FL 33021 — (754) 600-4876.</li>
                <li>We are not PGT, CGI, ES Windows, or CWS. Those factories make the units; we measure, permit, and set them in Miami-Dade, Broward, and Palm Beach.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white/50 font-semibold text-xs uppercase tracking-[0.18em] mb-5">County rules</h3>
              <ul className="space-y-5 text-white/80 leading-relaxed text-[17px]">
                <li>Miami-Dade and Broward are the High-Velocity Hurricane Zone. Replacement glass there generally needs a current Miami-Dade NOA.</li>
                <li>Palm Beach is a wind-borne debris region, not HVHZ — a Florida Product Approval (FL#) is often accepted. Fort Lauderdale is a service city in that HVHZ band, not our headquarters.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { title: "5-Star Google", sub: "Google & Yelp" },
                { title: "A+ BBB Rated", sub: "Better Business Bureau" },
                { title: "HVHZ Certified", sub: "Miami-Dade & Broward" },
                { title: "Licensed & Insured", sub: "Florida contractor" },
              ].map((item) => (
                <div key={item.title} className="home-card-dark p-5">
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-white/45 mt-1.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-16 text-white/65 leading-relaxed max-w-4xl text-[15px]">
            Insurance credits need form OIR-B1-1802 after every glazed opening is protected. My Safe Florida Home is a separate state grant with a program inspection first — do not start work before written approval. See{" "}
            <Link href="/faq/do-impact-windows-lower-insurance-in-florida/" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-[#e8930f]">
              insurance FAQ
            </Link>
            ,{" "}
            <Link href="/financing/" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-[#e8930f]">
              financing
            </Link>
            , and{" "}
            <Link href="/brands/pgt/" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-[#e8930f]">
              PGT
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              What Do Impact Windows Actually Do?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                title: "Hurricane Protection",
                desc: "Impact windows are designed to help protect you during a hurricane. They are tested and certified to withstand simulated hurricane conditions. If the glass is damaged, it will remain intact in the frame and continue to protect you.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Increased Security",
                desc: "Most break-ins happen through a window. Impact windows are built to resist even the toughest hits, making it nearly impossible for intruders to get inside. Your family and home are safe and well-protected.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Energy Efficient",
                desc: "Impact-resistant glass reduces the energy requirements for heating and cooling your home, saving money every month on your FPL bill. Low-E coated glass reflects 70-85% of the sun's heat.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Insurance Savings",
                desc: "Under Florida law (Statute \u00A7627.0629), all residential property insurance companies are required to offer discounts to homeowners who install impact-resistant windows and doors. Schedule a wind mitigation inspection (form OIR-B1-1802) to see how much you could save.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Noise Reduction",
                desc: "Laminated impact windows achieve a sound reduction of approximately 50\u201370%. The interlayer within laminated glass helps dampen sound vibrations, significantly reducing the transmission of exterior noise.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ),
              },
              {
                title: "Increased Property Value",
                desc: "Impact windows deliver one of the highest ROI for home improvements. Most homebuyers actively look for properties with impact windows already installed, making this upgrade a smart investment.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="home-card p-8 md:p-9">
                <div className="w-12 h-12 rounded-xl bg-[#0d1b33]/[0.04] flex items-center justify-center text-[#0d1b33] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d1b33] font-display mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="bg-[#0d1b33] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-t border-white/10 pt-14">
            <div className="max-w-xl">
              <h2 className="home-title text-4xl md:text-5xl text-white">Ready to Get Started?</h2>
              <p className="text-white/65 mt-4 text-lg">Schedule your free in-home consultation today.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="tel:+17546004876"
                className="inline-flex items-center justify-center bg-[#e8930f] hover:bg-[#d17d04] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                (754) 600-4876
              </a>
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              From beachfront condos to luxury estates, we deliver expert impact window and door installations tailored to every property type across South Florida.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="home-card overflow-hidden grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto min-h-[320px]">
                  <Image src="/images/windows.jpg" alt="South Florida home with impact windows installed" fill loading="lazy" className="object-cover" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 mb-4">
                    Trusted by 5,000+ Homeowners
                  </p>
                  <h3 className="text-2xl md:text-[1.7rem] font-bold text-[#0d1b33] font-display mb-4 tracking-tight">Local Experts Who Know South Florida</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over 20 years of experience serving South Florida, we understand the unique challenges our climate presents. From hurricane-force winds to year-round UV exposure, we install products engineered specifically for our region.
                  </p>
                  <Link href="/get-estimate/" className="inline-flex items-center gap-2 text-[#0d1b33] font-semibold border-b border-[#0d1b33]/20 pb-0.5 w-fit hover:border-[#e8930f] hover:text-[#e8930f] transition-colors">
                    Protect Your Home Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Licensed & Insured",
                    desc: "Fully licensed Florida contractor with comprehensive insurance coverage. Every installation meets or exceeds Florida Building Code.",
                  },
                  {
                    title: "Premium Products",
                    desc: "We partner with industry leaders like PGT, CGI, ES Windows, and Custom Window Systems (CWS) to deliver top-tier impact windows and doors built for Florida. We are the dealer-installer, not the factory.",
                  },
                  {
                    title: "Expert Installation",
                    desc: "Our certified installation crews deliver precision craftsmanship on every project, from single-family homes to high-rise condos.",
                  },
                  {
                    title: "Financing Available",
                    desc: "Flexible payment options and financing plans make protecting your home affordable. We also help you maximize insurance savings.",
                  },
                ].map((item) => (
                  <div key={item.title} className="home-card p-8">
                    <h3 className="text-lg font-bold text-[#0d1b33] font-display mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-[#0d1b33] rounded-[1.25rem] p-8 md:p-9 text-white h-fit">
              <h3 className="text-xl font-bold font-display mb-8 tracking-tight">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { href: "/services/", title: "Our Services", sub: "Explore all window & door solutions" },
                  { href: "/blog/", title: "Blog & Resources", sub: "Tips, guides & hurricane prep" },
                  { href: "/faq/", title: "FAQs", sub: "Common questions answered" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-3 rounded-xl px-4 py-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                  >
                    <div>
                      <div className="font-semibold">{link.title}</div>
                      <div className="text-sm text-white/50 mt-1">{link.sub}</div>
                    </div>
                    <svg className="w-5 h-5 text-white/40 group-hover:text-[#e8930f] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="home-section bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              Recent Projects
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              From single-family homes to large estates, see the quality of our impact window and door installations across South Florida.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-5">
            {[
              { src: "/images/doors-2.jpg", alt: "Impact door installation crew working on Fort Lauderdale home", className: "col-span-12 md:col-span-7 h-[280px] md:h-[460px]" },
              { src: "/images/windows4.jpg", alt: "Completed impact window installation on South Florida home with palm trees", className: "col-span-12 md:col-span-5 h-[280px] md:h-[460px]" },
              { src: "/images/doors4.jpg", alt: "Aerial view of full impact window and door replacement project", className: "col-span-6 md:col-span-4 h-[220px] md:h-[320px]" },
              { src: "/images/windows6.jpg", alt: "Installation crew installing impact windows on residential home", className: "col-span-6 md:col-span-4 h-[220px] md:h-[320px]" },
              { src: "/images/doors5.jpg", alt: "Professional crew installing impact doors on Florida home", className: "col-span-12 md:col-span-4 h-[220px] md:h-[320px]" },
              { src: "/images/windows.jpg", alt: "Completed impact window installation on two-story Florida home", className: "col-span-12 md:col-span-8 h-[240px] md:h-[360px]" },
              { src: "/images/impact-doors.jpg", alt: "Impact door installation in progress on South Florida residence", className: "col-span-6 md:col-span-4 h-[240px] md:h-[360px]" },
              { src: "/images/picture-window.jpg", alt: "Large impact picture window installed on Florida home", className: "col-span-6 md:col-span-12 h-[240px] md:h-[380px]" },
            ].map((img) => (
              <figure key={img.src} className={`group relative overflow-hidden rounded-[1.25rem] ${img.className}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1b33]/75 via-[#0d1b33]/20 to-transparent px-5 pb-4 pt-16">
                  <p className="text-white text-sm leading-snug">{img.alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-[#0d1b33] hover:bg-[#162544] text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Protect Your Home Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              Impact Windows vs. Accordion Shutters
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Unlike shutters, which leave your home feeling like a dark cave, impact windows provide protection without sacrificing light, comfort, or peace of mind.
            </p>
          </div>
          <div className="home-card overflow-hidden">
            <div className="grid grid-cols-[1fr_5.5rem_8.5rem] md:grid-cols-[1fr_7rem_11rem] gap-2 px-6 md:px-8 py-5 bg-[#0d1b33] text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Feature</div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50 text-center">Shutters</div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white text-center">Impact</div>
            </div>
            <div>
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
              ].map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_5.5rem_8.5rem] md:grid-cols-[1fr_7rem_11rem] gap-2 px-6 md:px-8 py-5 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"}`}
                >
                  <div className="text-[15px] text-[#0d1b33] font-medium pr-2">{row.feature}</div>
                  <div className="text-center">
                    {row.shutters === "partial" ? (
                      <span className="text-xs font-semibold text-gray-500">Partial</span>
                    ) : (
                      <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-gray-100 text-gray-400" aria-label="No">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className="text-center bg-[#0d1b33]/[0.03] -my-5 py-5 rounded-none">
                    <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-[#0d1b33] text-white" aria-label="Yes">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-[#0d1b33] hover:bg-[#162544] text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Upgrade to Impact Windows
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section bg-[#f4f5f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4">Impact Windows 101</p>
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              Everything You Need to Know
            </h2>
          </div>
          <div className="space-y-4">
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
              <details key={faq.q} className="group home-card overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 md:px-8 py-6 font-bold text-[#0d1b33] font-display text-lg tracking-tight list-none">
                  <span className="pr-6">{faq.q}</span>
                  <span className="text-[#0d1b33]/40 text-2xl leading-none font-normal group-open:hidden" aria-hidden="true">+</span>
                  <span className="text-[#0d1b33]/40 text-2xl leading-none font-normal hidden group-open:inline" aria-hidden="true">&minus;</span>
                </summary>
                <p className="px-6 md:px-8 pb-7 text-gray-600 leading-relaxed text-[15px]">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/faq/" className="inline-flex items-center gap-2 text-[#0d1b33] font-semibold border-b border-[#0d1b33]/20 pb-0.5 hover:border-[#e8930f] hover:text-[#e8930f] transition-colors">
              View All FAQ Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section bg-[#0d1b33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45 mb-5">The program is open</p>
              <h2 className="home-title text-4xl md:text-5xl mb-6">
                The My Safe Florida Home Program Is Open
              </h2>
              <p className="text-white/75 leading-relaxed mb-8 text-lg">
                Most homes built before 2002 do not have impact windows or any hurricane protection. The My Safe Florida Home program helps homeowners strengthen their homes by offering a free wind mitigation inspection to help determine whether they qualify for the <span className="text-white font-semibold">$10,000 grant</span>.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Free wind mitigation inspection",
                  "Up to $10,000 grant for qualifying homeowners",
                  "Covers impact windows & hurricane protection",
                  "Available to homes built before 2002",
                  "Do not start work before written approval",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white/80">
                    <CheckIcon className="w-5 h-5 text-[#e8930f] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-estimate/" className="inline-flex items-center gap-2 bg-[#e8930f] hover:bg-[#d17d04] text-white px-8 py-4 rounded-full font-semibold transition-colors">
                See If You Qualify
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white text-[#0d1b33] rounded-[1.5rem] p-10 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-3">Grant up to</p>
              <p className="text-6xl md:text-7xl font-bold font-display tracking-tight mb-2">$10,000</p>
              <p className="text-gray-500 mb-8">For qualifying Florida homeowners</p>
              <div className="space-y-3.5 text-left mb-8">
                {["Impact-rated windows & doors", "Professional installation included", "All permits handled by our team", "Full warranty coverage", "Code compliance guaranteed"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-[#e8930f] flex-shrink-0" />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-7">Financing available for projects not covered by the grant</p>
              <Link href="/get-estimate/" className="block w-full text-center bg-[#0d1b33] hover:bg-[#162544] text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Start Protecting Your Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33] mb-6">
                Choose the Right Window &amp; Installer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-[17px]">
                We&apos;ve built our reputation on honesty, integrity, and customer service. This commitment has helped us maintain 5-star reviews on Google, Yelp, and the Better Business Bureau, where we proudly hold an A+ Rating.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-[17px]">
                Our company has earned a score of 111 on BuildZoom, placing us in the <span className="text-[#0d1b33] font-semibold">top 4% of 191,428 licensed contractors in the State of Florida</span>. No shortcuts &mdash; every project is installed by our own team, led by one of our owners.
              </p>
              <p className="text-[#0d1b33] font-medium italic text-lg mb-10 leading-relaxed">
                &ldquo;Even if you buy the best impact windows, they will not perform as well as they should if they are not installed properly.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Google", value: "5 Stars" },
                  { label: "Yelp", value: "5 Stars" },
                  { label: "BBB", value: "A+ Rating" },
                  { label: "BuildZoom", value: "Score: 111" },
                ].map((item) => (
                  <div key={item.label} className="home-card p-5 text-center">
                    <div className="text-lg font-bold text-[#0d1b33] font-display">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-1 tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[540px] rounded-[1.25rem] overflow-hidden">
              <Image
                src="/images/doors-3.jpg"
                alt="Florida Impact Windows and Doors professional installation team installing hurricane rated impact doors in Fort Lauderdale home"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b33]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium tracking-wide">Owner-led installations &mdash; Abe on every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33]">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-2 mt-5">
              <StarRow className="w-5 h-5 text-[#e8930f]" />
              <span className="text-sm text-gray-500 font-medium">on Google, Yelp &amp; BBB</span>
            </div>
          </div>

          <div className="home-card p-8 md:p-12 mb-8">
            <div className="max-w-3xl">
              <StarRow className="w-5 h-5 text-[#e8930f]" />
              <p className="text-xl md:text-2xl text-[#0d1b33] font-medium leading-relaxed my-6 tracking-tight">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#0d1b33]">{testimonials[0].name}</p>
                <p className="text-gray-500 text-sm mt-0.5">{testimonials[0].location}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1, 6).map((t, index) => (
              <div key={index} className="home-card p-8">
                <StarRow className="w-4 h-4 text-[#e8930f]" />
                <p className="text-gray-600 text-[15px] leading-relaxed my-5">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-[#0d1b33] text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.location}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/reviews/" className="inline-flex items-center gap-2 text-[#0d1b33] font-semibold border-b border-[#0d1b33]/20 pb-0.5 hover:border-[#e8930f] hover:text-[#e8930f] transition-colors">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="home-title text-4xl md:text-5xl text-[#0d1b33] mb-5">
              We Serve These Counties
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We install from 3000 Stirling Rd in Hollywood. Miami-Dade and Broward are HVHZ. Palm Beach is a wind-borne debris region — Fort Lauderdale is a service city, not our headquarters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
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
              <div key={area.county} className="home-card p-8 md:p-9">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-[#0d1b33] font-display tracking-tight">{area.county}</h3>
                  {area.note && <span className="text-[10px] bg-[#0d1b33]/5 text-[#0d1b33] font-bold uppercase tracking-wider px-2 py-1 rounded-full">{area.note}</span>}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {area.cities.map((city) => (
                    <li key={city} className="text-gray-600 text-[15px]">
                      {city}
                    </li>
                  ))}
                </ul>
                <Link href={area.href} className="inline-flex items-center gap-2 text-[#0d1b33] font-semibold text-sm border-b border-[#0d1b33]/20 pb-0.5 hover:border-[#e8930f] hover:text-[#e8930f] transition-colors">
                  View All Cities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b33] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
                My Safe Florida Home Program &mdash; Up to $10,000 Grant
              </p>
              <h2 className="home-title text-4xl md:text-5xl text-white mb-5">
                Ready to Protect Your Home?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed">
                Get a free, no-obligation estimate from one of our owners. Premium impact windows &amp; doors at affordable prices, installed by HVHZ experts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/get-estimate/"
                className="inline-flex items-center justify-center bg-[#e8930f] hover:bg-[#d17d04] text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+17546004876"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors"
              >
                (754) 600-4876
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
