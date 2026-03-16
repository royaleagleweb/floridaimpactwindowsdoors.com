import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Florida Impact Windows & Doors | Call, Email, or Visit Us",
  description:
    "Contact Florida Impact Windows & Doors for impact windows and doors in South Florida. Call (754) 600-4876, email info@floridaimpactwindowsdoors.com, or visit our Hollywood showroom. Free estimates available.",
};

const contactMethods = [
  {
    title: "Call Us",
    detail: "(754) 600-4876",
    description: "Speak directly with our team. Available Monday through Saturday.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    ),
    href: "tel:+17546004876",
  },
  {
    title: "Email Us",
    detail: "info@floridaimpactwindowsdoors.com",
    description: "Send us a message and we will respond within 24 hours.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    href: "mailto:info@floridaimpactwindowsdoors.com",
  },
  {
    title: "Visit Our Showroom",
    detail: "3000 Stirling Rd",
    description: "Hollywood, FL 33021. See our products in person.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    href: "https://maps.google.com",
  },
];

const hours = [
  { day: "Monday", time: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-palm-400 rounded-full animate-pulse" />
              <span className="text-sm text-palm-300 font-medium">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Contact <span className="gradient-text">Florida Impact Windows & Doors</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Have questions about impact windows or doors? Ready to schedule your free estimate? We are here to help. Reach out by phone, email, or visit our showroom in Hollywood.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-20">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-palm-200 hover:shadow-xl transition-all group text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-palm-50 to-ocean-50 flex items-center justify-center text-palm-600 mb-4 group-hover:from-palm-100 group-hover:to-ocean-100 transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">{method.title}</h3>
                <p className="text-palm-600 font-semibold mb-2">{method.detail}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and a member of our team will get back to you within 24 hours.</p>

              <form action="https://formsubmit.co/roy@royaleagleweb.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New Contact Message from Contact Page" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/thank-you/" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all" placeholder="(754) 600-4876" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all bg-white">
                    <option value="">Select a topic</option>
                    <option value="estimate">Request an Estimate</option>
                    <option value="question">General Question</option>
                    <option value="service">Service / Warranty</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all resize-none" placeholder="Tell us about your project or question..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Office & Showroom</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="font-medium">Florida Impact Windows & Doors</p>
                  <p>3000 Stirling Rd<br />Hollywood, FL 33021</p>
                  <p>
                    <span className="font-medium text-gray-900">Phone:</span>{" "}
                    <a href="tel:+17546004876" className="text-palm-600 hover:text-palm-700">(754) 600-4876</a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Email:</span>{" "}
                    <a href="mailto:info@floridaimpactwindowsdoors.com" className="text-palm-600 hover:text-palm-700">info@floridaimpactwindowsdoors.com</a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Business Hours</h3>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-red-500 font-medium" : "text-gray-900"}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-8 border border-palm-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/get-estimate/" className="flex items-center gap-2 text-palm-600 font-medium hover:text-palm-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    Request Free Estimate
                  </Link>
                  <Link href="/financing/" className="flex items-center gap-2 text-palm-600 font-medium hover:text-palm-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    Financing Options
                  </Link>
                  <Link href="/our-process/" className="flex items-center gap-2 text-palm-600 font-medium hover:text-palm-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    Our Installation Process
                  </Link>
                  <Link href="/reviews/" className="flex items-center gap-2 text-palm-600 font-medium hover:text-palm-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    Customer Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6 text-center">Find Our Showroom</h2>
          <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-300">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p className="text-gray-500 font-medium">Google Maps Embed</p>
              <p className="text-sm text-gray-400">3000 Stirling Rd, Hollywood, FL 33021</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
