"use client";

import { useRef, useState } from "react";
import { deliverLead } from "@/lib/notifyLead";

const THANK_YOU_PATH = "/thank-you/";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const submitting = useRef(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    setPending(true);

    await deliverLead(
      {
        _subject: String(data.get("_subject") ?? ""),
        _captcha: String(data.get("_captcha") ?? "false"),
        _template: String(data.get("_template") ?? "box"),
        _autoresponse: String(data.get("_autoresponse") ?? ""),
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      },
      {
        source: "New Contact Message from Contact Page",
        name: [firstName, lastName].filter(Boolean).join(" "),
        email,
        phone,
        subject,
        message,
      },
    );

    window.location.assign(THANK_YOU_PATH);
  }

  return (
    <form
      action="https://formsubmit.co/roy@royaleagleweb.com"
      method="POST"
      className="space-y-6"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="_subject" value="New Contact Message from Contact Page" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/thank-you/" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_autoresponse" value="Thank you for contacting Florida Impact Windows & Doors! We've received your message and will get back to you within 24 hours. If you need immediate assistance, please call us at (754) 600-4876. We appreciate your interest! — The Florida Impact Windows & Doors Team" />
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
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Sending..." : "Send Message"}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
    </form>
  );
}
