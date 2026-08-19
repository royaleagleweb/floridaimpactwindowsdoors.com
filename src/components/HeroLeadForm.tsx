export default function HeroLeadForm() {
  return (
    <div className="bg-[#0d1b33]/95 backdrop-blur-sm rounded-[1.5rem] p-8 md:p-9 shadow-2xl shadow-black/35 max-w-md w-full ring-1 ring-white/10">
      <div className="mb-7">
        <h2 className="text-[1.65rem] font-bold text-white font-display tracking-tight">
          Get Your Free Estimate
        </h2>
        <p className="text-sm text-white/70 mt-2">
          Response within 2 hours
        </p>
      </div>
      <form
        action="https://formsubmit.co/roy@royaleagleweb.com"
        method="POST"
        className="space-y-3.5"
      >
        <input type="hidden" name="_subject" value="New Lead from Homepage Quick Form" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://floridaimpactwindowsdoors.com/thank-you/" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_autoresponse" value="Thank you for reaching out to Florida Impact Windows & Doors! We've received your request and a member of our team will contact you within 24 hours to discuss your project. If you need immediate assistance, please call us at (754) 600-4876. We look forward to helping protect your home! — The Florida Impact Windows & Doors Team" />
        <div>
          <label htmlFor="hero-name" className="sr-only">
            Name
          </label>
          <input
            id="hero-name"
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
            className="w-full px-4 py-3.5 rounded-xl border-0 bg-white text-[#0d1b33] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8930f] transition text-[15px]"
          />
        </div>
        <div>
          <label htmlFor="hero-phone" className="sr-only">
            Phone
          </label>
          <input
            id="hero-phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            autoComplete="tel"
            className="w-full px-4 py-3.5 rounded-xl border-0 bg-white text-[#0d1b33] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8930f] transition text-[15px]"
          />
        </div>
        <div>
          <label htmlFor="hero-service" className="sr-only">
            Service Needed
          </label>
          <select
            id="hero-service"
            name="service"
            className="w-full px-4 py-3.5 rounded-xl border-0 bg-white text-[#0d1b33] focus:outline-none focus:ring-2 focus:ring-[#e8930f] transition text-[15px] appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Service Needed
            </option>
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
          className="w-full bg-[#e8930f] hover:bg-[#d17d04] text-white py-4 rounded-xl font-bold text-base transition-colors"
        >
          Get My Free Quote
        </button>
      </form>
      <p className="text-center text-xs text-white/50 mt-6 tracking-wide">
        Your information is secure and private.
      </p>
    </div>
  );
}
