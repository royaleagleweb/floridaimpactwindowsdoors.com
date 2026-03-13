"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ───────────────────── tiny SVG icons ───────────────────── */
const CheckCircle = () => (
  <svg className="w-5 h-5 text-palm-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
const Star = () => (
  <svg className="w-5 h-5 text-sun-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
  </svg>
);
const Phone = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const Shield = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const Lightning = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const Home = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);
const DollarSign = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const Thermometer = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0 0a3 3 0 100 6 3 3 0 000-6zm0-9V3m0 0a3 3 0 00-3 3v6" />
  </svg>
);
const Volume = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

/* ───────────────────── counter hook ───────────────────── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, start: () => setStarted(true) };
}

/* ───────────────────── MAIN COMPONENT ───────────────────── */
export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [bottomFormData, setBottomFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
  });
  const [showSticky, setShowSticky] = useState(false);

  const counter1 = useCounter(2500);
  const counter2 = useCounter(15);
  const counter3 = useCounter(98);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
      // Start counters when user scrolls past 400px
      if (window.scrollY > 400) {
        counter1.start();
        counter2.start();
        counter3.start();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FORM_ENDPOINT = "https://formsubmit.co/roy@royaleagleweb.com";

  return (
    <div className="min-h-screen bg-white">
      {/* ── Sticky top bar (appears on scroll) ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-ocean-900/95 backdrop-blur-lg border-b border-ocean-700/50 transition-all duration-300 ${showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-white font-bold text-sm font-display hidden sm:block">
            Florida Impact Windows &amp; Doors
          </span>
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <span className="text-palm-300 text-sm font-semibold hidden md:inline">
              Limited Time: Up to $10,000 Back from My Safe Florida Home
            </span>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 bg-palm-500 hover:bg-palm-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              (754) 600-4876
            </a>
          </div>
        </div>
      </div>

      {/* ── Minimal header ── */}
      <header className="bg-ocean-950 border-b border-ocean-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Florida Impact Windows & Doors"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <div className="text-white font-bold text-lg font-display leading-tight">
                Florida Impact Windows
              </div>
              <div className="text-ocean-300 text-xs">& Doors</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-sun-400 text-sm font-semibold">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              <span className="text-white/70 ml-1">4.9/5 (2,500+ reviews)</span>
            </div>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 bg-palm-500 hover:bg-palm-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(754) 600-4876</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-950 overflow-hidden">
        {/* Hero background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/90 to-ocean-950/70" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left – copy */}
            <div className="stagger-children">
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-palm-500/15 border border-palm-500/30 text-palm-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palm-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-palm-500"></span>
                </span>
                Limited Availability &mdash; Book This Week
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white leading-[1.1] mb-6">
                Protect Your Home.{" "}
                <span className="gradient-text">Save Up&nbsp;to&nbsp;$10K.</span>
              </h1>

              <p className="text-lg md:text-xl text-ocean-200 mb-8 max-w-xl leading-relaxed">
                South Florida&apos;s top-rated impact window &amp; door installer. Hurricane-rated
                protection, expert installation, and financing available &mdash; get your{" "}
                <strong className="text-white">free estimate today</strong>.
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Shield />
                  <div>
                    <div className="font-bold text-white">Licensed &amp; Insured</div>
                    <div className="text-ocean-300 text-xs">FL State License</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <svg className="w-8 h-8 text-sun-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <div>
                    <div className="font-bold text-white">A+ BBB Rating</div>
                    <div className="text-ocean-300 text-xs">Better Business Bureau</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <DollarSign />
                  <div>
                    <div className="font-bold text-white">0% Financing</div>
                    <div className="text-ocean-300 text-xs">Available OAC</div>
                  </div>
                </div>
              </div>

              {/* Phone CTA — mobile only */}
              <a
                href="tel:+17546004876"
                className="lg:hidden inline-flex items-center gap-3 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 transition-all hover:scale-105 mb-6"
              >
                <Phone className="w-6 h-6" />
                Call (754) 600-4876
              </a>
            </div>

            {/* Right – lead form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-palm-500/20 to-ocean-500/20 rounded-[2rem] blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-black/30 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-palm-50 text-palm-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                    <span className="w-2 h-2 bg-palm-500 rounded-full animate-pulse" />
                    100% Free &mdash; No Obligation
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    Get Your Free Estimate
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    We respond within 2 hours
                  </p>
                </div>

                <form action={FORM_ENDPOINT} method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New Lead from Landing Page" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/get-estimate/" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm appearance-none"
                  >
                    <option value="">What Do You Need?</option>
                    <option value="Impact Windows">Impact Windows</option>
                    <option value="Impact Doors">Impact Doors</option>
                    <option value="Hurricane Shutters">Hurricane Shutters</option>
                    <option value="Windows & Doors (Both)">Windows &amp; Doors (Both)</option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get My Free Quote &rarr;
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-400">
                  {["No Spam", "No Obligation", "100% Free"].map((t) => (
                    <span key={t} className="flex items-center gap-1">
                      <CheckCircle />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOCIAL PROOF / STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: `${counter1.count.toLocaleString()}+`, label: "Projects Completed" },
            { value: `${counter2.count}+`, label: "Years Experience" },
            { value: `${counter3.count}%`, label: "Customer Satisfaction" },
            { value: "A+", label: "BBB Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black font-display text-ocean-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MY SAFE FLORIDA HOME — URGENCY SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-sun-500/20 border border-sun-400/30 text-sun-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <DollarSign />
            Florida State Grant Program
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-display mb-4">
            Get Up to <span className="text-sun-400">$10,000 Back</span> Through the{" "}
            <span className="text-palm-400">My Safe Florida Home</span> Program
          </h2>
          <p className="text-lg text-ocean-200 max-w-2xl mx-auto mb-8">
            Florida homeowners can receive grants up to $10,000 for hurricane-hardening improvements
            including impact windows and doors. We handle all the paperwork for&nbsp;you.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { step: "1", title: "Free Inspection", desc: "We assess your home and eligibility" },
              { step: "2", title: "We Handle Paperwork", desc: "Our team manages the application" },
              { step: "3", title: "Get Your Grant", desc: "Receive up to $10,000 back" },
            ].map((s) => (
              <div key={s.step} className="glass rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-palm-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {s.step}
                </div>
                <div className="font-bold text-white mb-1">{s.title}</div>
                <div className="text-ocean-300 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
          <a
            href="#bottom-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sun-500 to-palm-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
          >
            Check My Eligibility &rarr;
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY IMPACT WINDOWS — BENEFITS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Why Impact Windows?
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-gray-900 mb-4">
              More Than Just Hurricane Protection
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Impact windows are one of the best investments you can make in your South Florida home.
              Here&apos;s why thousands of homeowners choose us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield />,
                title: "Category 5 Protection",
                desc: "Our windows withstand 200+ mph winds and flying debris. Keep your family safe during any storm.",
                color: "text-ocean-600",
                bg: "bg-ocean-50",
              },
              {
                icon: <DollarSign />,
                title: "Lower Insurance Premiums",
                desc: "Most homeowners save 25-45% on their wind insurance after installing impact windows. The savings pay for themselves.",
                color: "text-palm-600",
                bg: "bg-palm-50",
              },
              {
                icon: <Thermometer />,
                title: "Energy Savings",
                desc: "Reduce cooling costs by up to 30% with insulated impact glass. Keep the heat out and the cool air in.",
                color: "text-sun-600",
                bg: "bg-sun-50",
              },
              {
                icon: <Volume />,
                title: "Noise Reduction",
                desc: "Impact glass reduces outside noise by up to 50%. Enjoy peace and quiet inside your home.",
                color: "text-ocean-600",
                bg: "bg-ocean-50",
              },
              {
                icon: <Home />,
                title: "Increase Home Value",
                desc: "Impact windows add immediate equity to your home and are one of the top features buyers look for in South Florida.",
                color: "text-palm-600",
                bg: "bg-palm-50",
              },
              {
                icon: <Lightning />,
                title: "24/7 Security",
                desc: "Impact glass is extremely difficult to break through, giving you round-the-clock break-in protection — no shutters needed.",
                color: "text-sun-600",
                bg: "bg-sun-50",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-palm-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT YOU GET — PROCESS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-gray-900 mb-4">
              From Estimate to Installation in 4 Simple Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-palm-300 via-ocean-300 to-palm-300" />
            {[
              { step: "1", title: "Free Consultation", desc: "We visit your home, measure everything, and give you a free, no-pressure quote." },
              { step: "2", title: "Custom Design", desc: "Choose your windows, frames, and finishes. We help with grant paperwork too." },
              { step: "3", title: "Expert Install", desc: "Our licensed crew installs everything — clean, fast, and up to code." },
              { step: "4", title: "Final Inspection", desc: "We handle the county inspection and make sure you're 100% satisfied." },
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-palm-500 to-ocean-600 rounded-full flex items-center justify-center text-white font-black text-2xl font-display mx-auto mb-4 shadow-lg relative z-10">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-display mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-ocean-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">
              Real Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <p className="text-ocean-300">
              4.9 out of 5 based on 2,500+ verified reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria S.",
                loc: "Fort Lauderdale",
                text: "They replaced every window in our home before hurricane season. The crew was professional, showed up on time, and cleaned up after themselves. Our insurance went down 40%. Couldn't be happier.",
              },
              {
                name: "James R.",
                loc: "Boca Raton",
                text: "Got quotes from 5 companies and Florida Impact Windows gave us the best price and the best product. They helped us with the My Safe Florida Home grant — saved us almost $8,000. These guys know what they're doing.",
              },
              {
                name: "Patricia K.",
                loc: "Coral Springs",
                text: "Our old windows were drafty and loud. Now it's quiet, cool, and we feel safe during storms. The installation was done in 2 days. Highly recommend to anyone in South Florida.",
              },
            ].map((review, i) => (
              <div key={i} className="glass rounded-2xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} />)}
                </div>
                <p className="text-ocean-100 mb-6 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-palm-500 to-ocean-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{review.name}</div>
                    <div className="text-ocean-400 text-xs">{review.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRANDS WE CARRY
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-6">
            Trusted Brands We Install
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 text-2xl font-black font-display text-gray-300">
            {["PGT", "CGI", "ES Windows", "Custom Window Systems"].map((b) => (
              <span key={b} className="hover:text-ocean-600 transition-colors cursor-default">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How much do impact windows cost?",
                a: "Pricing varies based on size, style, and manufacturer. Most homes in South Florida range from $8,000 to $30,000 for a full replacement. We provide free, no-obligation estimates so you know exactly what to expect.",
              },
              {
                q: "How long does installation take?",
                a: "Most homes are completed in 1-3 days depending on the number of openings. We schedule around your availability and minimize disruption to your daily routine.",
              },
              {
                q: "Do impact windows really lower my insurance?",
                a: "Yes. Most South Florida homeowners see a 25-45% reduction in their wind insurance premiums after installing impact windows. Many insurance companies offer immediate credits once you provide the Notice of Acceptance (NOA).",
              },
              {
                q: "What is the My Safe Florida Home program?",
                a: "It's a state-funded grant program that reimburses Florida homeowners up to $10,000 for hurricane-hardening improvements like impact windows and doors. We help you with the entire application process at no extra charge.",
              },
              {
                q: "Do you offer financing?",
                a: "Absolutely. We offer 0% financing options and flexible payment plans to fit any budget. Many customers combine financing with the My Safe Florida Home grant to make the project very affordable.",
              },
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA / FORM
      ══════════════════════════════════════════════════════ */}
      <section id="bottom-form" className="py-20 bg-gradient-to-br from-ocean-900 via-ocean-950 to-ocean-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black font-display mb-4">
                Ready to Protect Your Home?
              </h2>
              <p className="text-ocean-200 text-lg mb-8 leading-relaxed">
                Join 2,500+ South Florida homeowners who trust us with their hurricane protection.
                Get a free, no-obligation estimate and see how much you can save.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Free in-home consultation & measurement",
                  "We handle My Safe Florida Home grant paperwork",
                  "0% financing available on approved credit",
                  "Licensed, insured & locally owned",
                  "Lifetime warranty on all installations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle />
                    <span className="text-ocean-100">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+17546004876"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Or Call: (754) 600-4876
              </a>
            </div>

            {/* Right form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-palm-500/20 to-ocean-500/20 rounded-[2rem] blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 font-display">
                    Get Your Free Quote
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Takes 30 seconds &bull; No obligation
                  </p>
                </div>

                <form
                  action={FORM_ENDPOINT}
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="New Lead from Landing Page (Bottom Form)" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/get-estimate/" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={bottomFormData.name}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      value={bottomFormData.phone}
                      onChange={(e) => setBottomFormData({ ...bottomFormData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={bottomFormData.email}
                      onChange={(e) => setBottomFormData({ ...bottomFormData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address (for accurate estimate)"
                    value={bottomFormData.address}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, address: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
                  />
                  <select
                    name="service"
                    value={bottomFormData.service}
                    onChange={(e) => setBottomFormData({ ...bottomFormData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm appearance-none"
                  >
                    <option value="">What Do You Need?</option>
                    <option value="Impact Windows">Impact Windows</option>
                    <option value="Impact Doors">Impact Doors</option>
                    <option value="Hurricane Shutters">Hurricane Shutters</option>
                    <option value="Windows & Doors (Both)">Windows &amp; Doors (Both)</option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get My Free Quote &rarr;
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-400">
                  {["No Spam", "No Obligation", "100% Free"].map((t) => (
                    <span key={t} className="flex items-center gap-1">
                      <CheckCircle />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-ocean-950 border-t border-ocean-800/50 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Florida Impact Windows & Doors"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-white font-bold font-display">
              Florida Impact Windows &amp; Doors
            </span>
          </div>
          <p className="text-ocean-400 text-sm mb-3">
            Serving Broward County &amp; Palm Beach County &bull; Licensed &amp; Insured
          </p>
          <a href="tel:+17546004876" className="text-palm-400 hover:text-palm-300 font-semibold transition-colors">
            (754) 600-4876
          </a>
          <p className="text-ocean-600 text-xs mt-6">
            &copy; {new Date().getFullYear()} Florida Impact Windows &amp; Doors. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── Mobile sticky CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="bg-ocean-950/95 backdrop-blur-lg border-t border-ocean-800/50 px-4 py-3 flex items-center justify-between gap-3">
          <a
            href="#bottom-form"
            className="flex-1 bg-gradient-to-r from-palm-500 to-palm-600 text-white py-3 rounded-xl font-bold text-center text-sm shadow-lg"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+17546004876"
            className="bg-white/10 border border-white/20 text-white p-3 rounded-xl"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── FAQ Accordion item ───────────────────── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-palm-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-6 text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
