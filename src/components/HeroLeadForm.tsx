export default function HeroLeadForm() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20 border border-gray-100 max-w-md w-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Free &mdash; No Obligation
        </div>
        <h3 className="text-2xl font-bold text-gray-900 font-display">
          Get Your Free Estimate
        </h3>
        <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
      </div>
      <form
        action="https://formsubmit.co/roy@royaleagleweb.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_subject" value="New Lead from Homepage Quick Form" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/get-estimate/" />
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <select
            name="service"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-palm-500 focus:border-transparent transition text-sm appearance-none"
          >
            <option value="">Select a Service</option>
            <option value="Impact Windows">Impact Windows</option>
            <option value="Impact Doors">Impact Doors</option>
            <option value="Hurricane Shutters">Hurricane Shutters</option>
            <option value="Window Replacement">Window Replacement</option>
            <option value="Door Replacement">Door Replacement</option>
            <option value="Wind Mitigation Inspection">Wind Mitigation Inspection</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-palm-500 to-palm-600 text-white py-4 rounded-xl font-bold text-base hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/30 hover:shadow-palm-500/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get My Free Quote
        </button>
      </form>
      <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          No Spam
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          No Obligation
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          100% Free
        </span>
      </div>
    </div>
  );
}
