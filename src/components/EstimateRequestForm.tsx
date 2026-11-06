"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { deliverLead } from "@/lib/notifyLead";

const THANK_YOU_PATH = "/thank-you/";

export default function EstimateRequestForm() {
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
    const address = String(data.get("address") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const openings = String(data.get("openings") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
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
        address,
        projectType,
        openings,
        notes,
      },
      {
        source: "New Estimate Request from Get Estimate Page",
        name: [firstName, lastName].filter(Boolean).join(" "),
        email,
        phone,
        address,
        project_type: projectType,
        openings,
        message: notes,
      },
    );

    window.location.assign(THANK_YOU_PATH);
  }

  return (
    <form
      action="https://formsubmit.co/roy@royaleagleweb.com"
      method="POST"
      className="space-y-4"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="_subject" value="New Estimate Request from Get Estimate Page" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/thank-you/" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_autoresponse" value="Thank you for requesting a free estimate from Florida Impact Windows & Doors! We've received your project details and a specialist will contact you within 24 hours to schedule your in-home consultation. If you need immediate assistance, please call us at (754) 600-4876. We look forward to helping protect your home! — The Florida Impact Windows & Doors Team" />

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">First Name *</label>
          <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="Smith" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="john@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Property Address *</label>
        <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white" placeholder="123 Main St, Fort Lauderdale, FL 33301" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Project Type</label>
          <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white">
            <option value="">Select type</option>
            <option value="windows">Impact Windows</option>
            <option value="doors">Impact Doors</option>
            <option value="both">Windows & Doors</option>
            <option value="shutters">Hurricane Shutters</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="openings" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Openings</label>
          <select id="openings" name="openings" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white">
            <option value="">How many?</option>
            <option value="1-5">1 - 5</option>
            <option value="6-10">6 - 10</option>
            <option value="11-15">11 - 15</option>
            <option value="16-20">16 - 20</option>
            <option value="20+">20+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Additional Details</label>
        <textarea id="notes" name="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-palm-500 focus:ring-2 focus:ring-palm-500/20 outline-none transition-all text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none" placeholder="Timeline, preferred brands, budget range, etc." />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {pending ? "Sending..." : "Get My Free Estimate"}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <p className="text-center text-xs text-gray-400">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy/" className="underline hover:text-gray-600">Privacy Policy</Link>.
        We will never share your information.
      </p>
    </form>
  );
}
