import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bow Impact Windows | Florida Impact Windows & Doors",
  description:
    "Bow impact windows with four or five panels in a graceful curve for panoramic views and architectural elegance. Hurricane-rated curved projection windows for South Florida homes. Free estimates.",
};

const features = [
  "Four or five panel curved projection configuration",
  "Gentle arc creates a wider, softer profile than bay windows",
  "Miami-Dade County NOA approved laminated impact glass",
  "Panels available as casement, double hung, or fixed",
  "Structural curved seat board creates wide interior shelf",
  "Low-E glass and argon gas fill for energy efficiency",
  "Equal-angle panel spacing for a symmetrical curve",
  "Heavy-duty aluminum or vinyl frame construction",
  "Integrated curved head and seat board with full flashing",
  "Available with decorative grid and mullion options",
];

const benefits = [
  {
    title: "Curved Panoramic Views",
    description:
      "The gentle arc of a bow window sweeps across a wider field of view than any flat window or angular bay, creating an immersive panorama of your South Florida surroundings from pool decks to ocean horizons.",
  },
  {
    title: "Elegant Architecture",
    description:
      "Bow windows add a graceful, sweeping curve to your home&apos;s exterior that stands out on any street. The rounded profile brings timeless sophistication to both traditional and transitional South Florida home designs.",
  },
  {
    title: "Spacious Interior Nook",
    description:
      "The wider projection of a bow window creates a generous interior ledge ideal for a window seat, reading nook, plant display, or decorative staging area that makes the room feel substantially larger.",
  },
  {
    title: "Hurricane Certified",
    description:
      "Every panel in our bow impact windows is engineered with laminated impact glass meeting Miami-Dade County testing standards, providing complete Category 5 hurricane protection across the entire curved assembly.",
  },
  {
    title: "All-Day Natural Light",
    description:
      "The multi-angle curved design captures sunlight from a wide arc throughout the day, flooding your interior with natural light from morning to evening and reducing dependence on artificial lighting.",
  },
  {
    title: "Flexible Ventilation",
    description:
      "Select which panels operate and which remain fixed. With four or five panels to configure, you can customize airflow from multiple angles while maintaining the curved aesthetic and structural integrity.",
  },
];

const bestFor = [
  "Living rooms and great rooms as a dramatic centerpiece",
  "Master bedrooms for a luxurious window seat retreat",
  "Dining rooms overlooking gardens or waterfront views",
  "Traditional, Mediterranean, and estate-style homes",
  "Front-facing rooms where curb appeal is a priority",
  "Any room where a wider panorama is desired over a bay window",
];

export default function BowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-palm-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services/window-types/"
                className="inline-flex items-center gap-2 text-palm-400 hover:text-palm-300 transition-colors text-sm font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Window Types
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                Bow{" "}
                <span className="gradient-text">Impact Windows</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                A sweeping curve of four or five panels that wraps your room in panoramic views and natural light. Bow impact windows bring architectural grandeur and a generous interior nook to your South Florida home, all with certified hurricane protection built into every panel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-estimate/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
                >
                  Get Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+17546004876"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (754) 600-4876
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/windows3.jpg"
                  alt="Bow impact windows with curved panels on a South Florida home"
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

      {/* Detailed Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
            About Bow Windows
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-8">
            A Graceful Curve That Transforms Any Room
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Bow impact windows are composed of four or five individual panels arranged in a gentle, sweeping arc that projects outward from the exterior wall. Unlike bay windows, which use three panels at defined angles to create a more angular projection, bow windows distribute their panels across a smooth curve with equal spacing between each panel. The result is a wide, rounded profile that adds a sense of grandeur and architectural refinement to your South Florida home, both from the street and from inside the room.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The wider curve of a bow window captures a broader panoramic view than a bay window, making it an exceptional choice for waterfront properties along the Intracoastal, canal-front homes in Fort Lauderdale, and estate residences in Coral Gables, Boca Raton, and Palm Beach. Because the arc spans more of the wall, a bow window floods the room with natural light from a wide range of angles throughout the day. Morning sun enters from one side of the curve while afternoon light fills the other, keeping your interior bright and warm without the harsh direct exposure that a single flat window can create.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every panel in a Florida Impact Windows & Doors bow impact installation is fitted with Miami-Dade County approved laminated impact glass engineered to withstand large missile impact and cyclic wind pressure testing. The curved structural frame system is custom-fabricated to maintain precise panel alignment under the extreme wind loads of a Category 5 hurricane. Integrated curved head boards and seat boards include full perimeter flashing and weatherproofing designed to handle South Florida&apos;s intense wind-driven rain. Our installation team has deep experience with the specialized framing, support cables, and flashing details that bow windows require, ensuring a weathertight and structurally sound result.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bow impact windows offer significant flexibility in panel configuration. You can choose which panels are operable and which are fixed, and the operable panels can be casement or double hung style depending on your ventilation and aesthetic preferences. Casement operating panels provide the widest opening and the tightest compression seal, while double hung panels offer a traditional look with tilt-in sash cleaning. All panels include Low-E glass options and argon gas fill for energy efficiency, multi-point locking hardware, and your choice of aluminum or vinyl frames in a range of finishes. A bow window is a premium architectural investment that elevates the curb appeal, interior livability, and resale value of your South Florida home.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Features & Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Custom-Curved for Coastal Performance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-palm-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
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
            <span className="inline-block text-sm font-semibold text-palm-400 uppercase tracking-wider mb-3">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Why Choose Bow Impact Windows
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-palm-500/30 transition-all"
              >
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
              <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
                Best For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Ideal Rooms & Situations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bow impact windows deliver maximum architectural impact in rooms where a sweeping panorama and generous interior space are desired. Consider them for these applications in your South Florida home:
              </p>
              <ul className="space-y-4">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-palm-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-palm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-3xl p-10 border border-palm-100">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">Quick Specs</h3>
              <div className="space-y-4">
                {[
                  { label: "Configuration", value: "4 or 5-panel curved arc" },
                  { label: "Panel Options", value: "Casement, DH, or Fixed" },
                  { label: "Frame Materials", value: "Aluminum or Vinyl" },
                  { label: "Wind Rating", value: "Up to 200 mph" },
                  { label: "Impact Rating", value: "Large Missile (9 lb)" },
                  { label: "Best Feature", value: "Widest panoramic curve" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-palm-200/50 pb-3">
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Bow vs. Other Window Types
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bow vs. Bay</h3>
              <p className="text-gray-600 leading-relaxed">
                Bay windows use three panels at sharp angles for a defined, angular projection, while bow windows use four or five panels in a smooth curve for a wider, more graceful profile. Bow windows span a larger portion of the wall, capture a broader panoramic view, and create a more spacious interior nook. Bay windows are more affordable due to fewer panels and simpler framing. Choose bow for maximum elegance and panorama; choose bay for a defined nook at a lower price point.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bow vs. Picture</h3>
              <p className="text-gray-600 leading-relaxed">
                Picture windows provide the largest single pane of uninterrupted glass, flush with the wall, for maximum clarity and light. Bow windows project outward to create a curved panorama with multiple panels, adding interior space and architectural dimension. If an unbroken glass surface is the priority, choose picture. If curved views, added space, and exterior curb appeal are the priorities, choose bow.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-display mb-3">Bow vs. Casement</h3>
              <p className="text-gray-600 leading-relaxed">
                Casement windows are individual crank-operated panels that swing outward for excellent airflow, while bow windows are a multi-panel curved assembly designed as an architectural statement. Casement windows are commonly used as the operable panels within a bow window configuration, combining the ventilation benefits of casement operation with the sweeping panoramic design of the bow form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Window Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-palm-600 uppercase tracking-wider mb-3">
              Explore More
            </span>
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Related Window Types
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Bay", slug: "bay", description: "Three-panel angular projection for panoramic views and a defined interior nook at a lower price point." },
              { name: "Picture", slug: "picture", description: "Fixed windows for maximum uninterrupted glass area, often used as the center panel in bow configurations." },
              { name: "Casement", slug: "casement", description: "Crank-operated panels commonly used as operable units within bow window assemblies for ventilation." },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/services/window-types/${type.slug}/`}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-palm-200 hover:bg-palm-50/30 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-palm-600 transition-colors font-display">
                  {type.name} Impact Windows
                </h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <span className="inline-flex items-center gap-2 text-palm-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Florida Impact Windows & Doors installs bow impact windows throughout{" "}
            <span className="font-semibold text-gray-900">Miami-Dade County</span>,{" "}
            <span className="font-semibold text-gray-900">Broward County</span>, and{" "}
            <span className="font-semibold text-gray-900">Palm Beach County</span>.
            Serving Coral Gables, Fort Lauderdale, Boca Raton, West Palm Beach, Palm Beach, Aventura, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Elevate Your Home with Bow Impact Windows
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Sweeping curves, panoramic views, and full hurricane protection. Get your free bow window consultation from Florida Impact Windows & Doors today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-estimate/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-palm-500 to-palm-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-palm-600 hover:to-palm-700 transition-all shadow-lg shadow-palm-500/25"
            >
              Schedule Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17546004876"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-palm-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call (754) 600-4876
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
