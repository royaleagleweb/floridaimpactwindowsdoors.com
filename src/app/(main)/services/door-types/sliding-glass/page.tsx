import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Sliding Glass Doors | Florida Impact Windows & Doors",
  description:
    "Premium impact sliding glass doors for South Florida homes. Hurricane-rated, energy efficient, and designed for seamless indoor-outdoor living in Miami-Dade, Broward & Palm Beach.",
};

const features = [
  { name: "Impact-Rated Glass", detail: "Laminated glass meets Miami-Dade NOA and Florida Building Code for large missile impact zones" },
  { name: "Multi-Track Systems", detail: "Available in 2-panel, 3-panel, and 4-panel configurations to fit any opening width" },
  { name: "Low-E Glass Options", detail: "Solar-control Low-E coatings reduce heat gain by up to 70% and block 99% of UV rays" },
  { name: "Stainless Steel Rollers", detail: "Heavy-duty stainless steel ball-bearing rollers for effortless gliding even on the widest panels" },
  { name: "Multi-Point Locking", detail: "Flush-mounted multi-point lock system engages at multiple points for superior security" },
  { name: "Corrosion-Resistant Frames", detail: "Aluminum or vinyl frames with marine-grade finishes to withstand South Florida salt air" },
];

const benefits = [
  {
    title: "Indoor-Outdoor Living",
    description: "Wide-opening sliding panels create a seamless transition between your interior spaces and patio, pool deck, or lanai, embracing the South Florida lifestyle.",
  },
  {
    title: "Maximum Natural Light",
    description: "Expansive glass panels flood your home with natural sunlight, reducing the need for artificial lighting and creating bright, inviting living spaces.",
  },
  {
    title: "Hurricane Protection",
    description: "Impact-rated laminated glass and reinforced aluminum frames are tested to withstand Category 5 winds up to 200 mph and large missile impacts.",
  },
  {
    title: "Energy Efficiency",
    description: "Low-E glass coatings and insulated frames reduce solar heat transfer by up to 70%, keeping your home cool and your energy bills low year-round.",
  },
  {
    title: "Noise Reduction",
    description: "The laminated glass construction dampens outside noise by up to 60%, creating a peaceful retreat from traffic, neighbors, and landscaping crews.",
  },
  {
    title: "Space Saving Design",
    description: "Unlike swing-out doors, sliding glass doors glide along a track and require zero clearance space, maximizing your usable floor area both inside and out.",
  },
];

const bestFor = [
  "Waterfront homes with ocean or Intracoastal views",
  "Pool and patio access from living rooms and master bedrooms",
  "Modern and contemporary South Florida home designs",
  "Condominiums and high-rise residences with balcony access",
  "Homes where maximizing natural light is a priority",
  "Properties with limited swing clearance for doors",
];

const relatedDoors = [
  { name: "French Doors", href: "/services/door-types/french/" },
  { name: "Patio Doors", href: "/services/door-types/patio/" },
  { name: "Entry Doors", href: "/services/door-types/entry/" },
  { name: "Pivot Doors", href: "/services/door-types/pivot/" },
];

export default function SlidingGlassDoorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-palm-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services/door-types/" className="inline-flex items-center gap-2 text-palm-300 hover:text-palm-200 transition-colors text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Door Types
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                Impact Sliding Glass{" "}
                <span className="gradient-text">Doors</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Experience the ultimate in South Florida living with our impact-rated sliding glass doors. Expansive glass panels, smooth operation, and Category 5 hurricane protection combine to deliver the perfect balance of beauty and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-estimate/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40 hover:scale-105"
                >
                  Get Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+17546004876"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (754) 600-4876
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/doors 3.jpg"
                  alt="Impact-rated sliding glass doors on a South Florida home"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">About Sliding Glass Doors</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
              The Definitive South Florida Door
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Impact sliding glass doors are the signature door style of South Florida living. Whether your home overlooks the Atlantic Ocean in Miami Beach, faces the Intracoastal Waterway in Fort Lauderdale, or backs up to a sparkling pool in Boca Raton, sliding glass doors connect you to the outdoor beauty that makes this region so special. Our impact-rated sliding glass doors deliver the wide-open views and effortless operation you want with the hurricane protection you need.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Engineered specifically for the demands of coastal Florida, every sliding glass door we install features laminated impact glass bonded to a tough interlayer that holds the panel together even under extreme wind pressure and flying debris. The reinforced aluminum track and frame system is designed to resist the massive pressure differentials created during a Category 5 hurricane, while stainless steel hardware ensures corrosion-free performance in our salt-air environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beyond storm protection, our sliding glass doors transform how you live in your South Florida home every day. Available in two-panel, three-panel, and four-panel configurations, these doors create openings up to twenty feet wide, erasing the boundary between your air-conditioned interior and your outdoor entertainment area. Imagine hosting a gathering where guests flow freely from your kitchen to your covered patio, or waking up to panoramic water views framed by sleek, minimal profiles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With Low-E glass options that reduce solar heat gain by up to 70 percent, our impact sliding glass doors also deliver serious energy savings. In South Florida, where air conditioning accounts for a large share of your utility bill, the thermal performance of these doors can translate to meaningful monthly savings. Add in noise reduction of up to 60 percent, 99 percent UV protection for your furnishings, and year-round security from the laminated glass, and impact sliding glass doors become the smartest investment you can make for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Features & Specifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Built for South Florida Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every component is selected and tested for the unique demands of coastal Florida living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-50 to-palm-50 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Choose Impact Sliding Glass Doors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Ideal Applications</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Best For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Impact sliding glass doors are the preferred choice for South Florida homeowners who want to maximize views, natural light, and outdoor access without compromising on hurricane protection.
              </p>
              <ul className="space-y-4">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-ocean-50 to-palm-50 rounded-3xl p-10 border border-ocean-100">
              <h3 className="text-xl font-bold font-display text-gray-900 mb-6">Quick Specs</h3>
              <dl className="space-y-4">
                {[
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Configurations", value: "2, 3, or 4 panel" },
                  { label: "Max Width", value: "Up to 20 feet" },
                  { label: "Glass Type", value: "Laminated impact glass" },
                  { label: "Frame Material", value: "Aluminum or Vinyl" },
                  { label: "Warranty", value: "Lifetime limited" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <dt className="text-gray-500 font-medium">{spec.label}</dt>
                    <dd className="text-gray-900 font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Service Areas</span>
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
            Impact Sliding Glass Door Installation Across South Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Our certified installers serve homeowners throughout Miami-Dade, Broward, and Palm Beach County with expert sliding glass door installation and replacement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Coral Gables", "Hollywood", "Pembroke Pines", "Aventura", "Doral", "Weston", "Jupiter", "Delray Beach"].map((city) => (
              <span key={city} className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Door Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">Explore More</span>
            <h2 className="text-3xl font-bold font-display text-gray-900">Related Door Types</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedDoors.map((door) => (
              <Link
                key={door.name}
                href={door.href}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-palm-300 hover:bg-palm-50 transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
                  <svg className="w-7 h-7 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v18H3zM14 12h.01" />
                    <rect x="3" y="3" width="14" height="18" rx="1" strokeWidth={1.5} />
                  </svg>
                </div>
                <h3 className="font-bold font-display text-gray-900 group-hover:text-palm-600 transition-colors">{door.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready for Impact Sliding Glass Doors?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your South Florida home with hurricane-rated sliding glass doors. Schedule a free in-home consultation and get a custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25 hover:shadow-palm-500/40"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
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
