import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Florida Impact Windows & Doors",
  description:
    "Read real reviews from South Florida homeowners who chose Florida Impact Windows & Doors for their impact windows and doors. 5-star rated on Google with 2,500+ happy customers.",
};

const reviews = [
  {
    name: "Maria Rodriguez",
    location: "Coral Gables, FL",
    date: "November 2024",
    rating: 5,
    project: "Whole Home - PGT WinGuard",
    text: "Florida Impact Windows & Doors transformed our 1960s home with beautiful PGT WinGuard impact windows. From the first estimate to the final walk-through, every interaction was professional and transparent. The installation team arrived on time every day, protected our furniture and floors, and cleaned up completely when they were done. Our energy bills dropped noticeably within the first month, and the noise reduction is remarkable. We used to hear every car passing on the street and now the house is wonderfully quiet. Could not be happier with our decision.",
  },
  {
    name: "James Thompson",
    location: "Fort Lauderdale, FL",
    date: "October 2024",
    rating: 5,
    project: "12 Windows + Sliding Door - CGI",
    text: "After Hurricane Irma showed us the vulnerability of our old jalousie windows, we knew it was time to upgrade. We got quotes from five different companies and Florida Impact Windows & Doors stood out for their honesty and product knowledge. David walked us through every option without pressure and helped us choose CGI windows that fit our budget. The installation crew was outstanding and Miguel personally inspected everything. Our home feels completely different now. Secure, quiet, and cool even on the hottest days.",
  },
  {
    name: "Patricia Chen",
    location: "Boca Raton, FL",
    date: "September 2024",
    rating: 5,
    project: "20 Windows - PGT EnergyVue",
    text: "We compared five different companies and Florida Impact Windows & Doors offered the best combination of quality products and competitive pricing. We chose PGT EnergyVue vinyl impact windows for our whole home and the results exceeded our expectations. The vinyl frames look sharp, the Low-E glass keeps our house cooler than ever, and we have already seen a significant reduction in our FPL bill. The permit process was handled entirely by Florida Impact and we did not have to deal with a single piece of paperwork. Highly recommend.",
  },
  {
    name: "Robert Williams",
    location: "Miami Beach, FL",
    date: "August 2024",
    rating: 5,
    project: "Condo Unit - CGI Sentinel",
    text: "Living directly on the beach, we needed the strongest protection available for our condo. Florida Impact Windows & Doors recommended CGI Sentinel windows which are designed for high-rise coastal applications. The coordination with our condo association was handled smoothly and the installation was completed within the scheduled timeframe. The difference in noise reduction alone was worth the investment. We no longer hear the wind howling during storms and the salt spray stays outside where it belongs.",
  },
  {
    name: "Diana Flores",
    location: "Weston, FL",
    date: "July 2024",
    rating: 5,
    project: "15 Windows + 2 Doors - ES Windows",
    text: "As first-time homebuyers on a tight budget, we were worried we could not afford impact windows for our whole house. Florida Impact Windows & Doors introduced us to ES Windows products that gave us genuine hurricane protection at a price we could manage. They also helped us get approved for 0% financing which made the monthly payments very comfortable. The installation team was courteous, efficient, and thorough. We feel so much safer knowing our home is protected and we did not have to break the bank to get there.",
  },
  {
    name: "Michael Petrov",
    location: "Aventura, FL",
    date: "June 2024",
    rating: 5,
    project: "Custom Home - CWS Multi-Slide",
    text: "We worked with an architect to design a modern home with floor-to-ceiling glass and we needed impact products that could handle the large openings. Florida Impact Windows & Doors brought Custom Window Systems to the table and their multi-slide door system was exactly what we needed. The installation was complex but the Florida Impact crew handled it expertly. The finished product is stunning. We have a twelve-foot-wide opening that slides completely open to our pool deck. Modern design with Category 5 protection. Incredible.",
  },
  {
    name: "Angela Morrison",
    location: "Coconut Grove, FL",
    date: "May 2024",
    rating: 5,
    project: "Historic Home - PGT WinGuard",
    text: "Our 1935 Coconut Grove home needed impact windows that would pass the historic preservation board requirements. Florida Impact Windows & Doors worked patiently with us and the board to specify PGT WinGuard windows with profiles that matched the original window proportions. The result is beautiful. You cannot tell the windows are new unless you look closely, but they provide full hurricane protection and incredible energy efficiency. The craftsmanship of the installation was impeccable.",
  },
  {
    name: "Carlos and Elena Diaz",
    location: "Doral, FL",
    date: "April 2024",
    rating: 5,
    project: "Whole Home - PGT WinGuard",
    text: "We have referred Florida Impact Windows & Doors to three of our neighbors already and all of them have been just as satisfied as we are. Carlos the owner personally came to our first consultation and you could tell he genuinely cares about every project. The PGT WinGuard windows they installed are top quality, the installation was clean and fast, and the price was thousands less than the next closest quote. Our insurance company gave us a 35% discount on our hurricane premium as soon as we sent them the completion paperwork.",
  },
  {
    name: "Thomas Wright",
    location: "Palm Beach Gardens, FL",
    date: "March 2024",
    rating: 5,
    project: "10 Windows + Entry Door - CGI Estate",
    text: "What impressed me most about Florida Impact Windows & Doors was their follow-through. They said the project would take three days and it took exactly three days. They said the permit would be handled and it was handled without a single call from me. They said the windows would reduce noise and our house went from hearing every landscaper in the neighborhood to absolute peace. CGI Estate windows have a premium look and feel that matches the quality of our home. Outstanding experience from start to finish.",
  },
  {
    name: "Sarah Kim",
    location: "Pembroke Pines, FL",
    date: "February 2024",
    rating: 5,
    project: "8 Windows - ES Windows",
    text: "I am a single mom on a budget and Florida Impact Windows & Doors treated me with the same respect and attention they would give to a million-dollar project. David spent over an hour at my house explaining every option and never once pressured me. They recommended ES Windows which fit my budget perfectly and helped me secure financing with payments I could handle. The installers were polite, wore shoe covers in my house, and left everything spotless. I finally feel safe during hurricane season.",
  },
  {
    name: "Richard and Pamela Stern",
    location: "Lighthouse Point, FL",
    date: "January 2024",
    rating: 5,
    project: "Waterfront Home - CGI Sentinel",
    text: "Our waterfront home in Lighthouse Point takes a beating from salt air and we needed windows that could handle the coastal environment without corroding. Florida Impact Windows & Doors recommended CGI Sentinel windows with marine-grade aluminum and the results have been outstanding. Two years in and the finish still looks brand new despite constant salt exposure. The installation team dealt with some tricky framing situations in our older home and handled every challenge professionally. Worth every penny.",
  },
  {
    name: "Jennifer Alvarez",
    location: "Hialeah, FL",
    date: "December 2023",
    rating: 5,
    project: "16 Windows + Sliding Door - PGT",
    text: "My parents do not speak much English and Florida Impact Windows & Doors had a bilingual team member who made the entire process comfortable for them. From the estimate to the installation, everything was communicated clearly in Spanish. The PGT windows and sliding glass door they installed are beautiful and my parents are thrilled with how much cooler their house stays now. The energy savings have been significant. I appreciate a company that goes above and beyond for all customers.",
  },
];

const stats = [
  { value: "5.0", label: "Google Rating" },
  { value: "2,500+", label: "Happy Customers" },
  { value: "100%", label: "Would Recommend" },
  { value: "500+", label: "5-Star Reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-sun-400/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-sun-400 rounded-full animate-pulse" />
              <span className="text-sm text-sun-300 font-medium">5.0 Google Rating</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Customer <span className="gradient-text">Reviews</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Do not just take our word for it. Hear from the South Florida homeowners who trust Florida Impact Windows & Doors for their impact window and door installations. Real stories from real customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display gradient-text-green mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-sun-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-palm-600 font-semibold mb-2">{review.project}</p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location} &middot; {review.date}</p>
                </div>
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
            Join Our Growing List of Happy Customers
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the Florida Impact Windows & Doors difference for yourself. Schedule your free in-home estimate and see why thousands of South Florida homeowners rate us 5 stars.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+17865551234" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call (786) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
