export default function AuthorBio() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-palm-400 to-ocean-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-base font-bold">RB</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
            About the Author
          </p>
          <p className="text-gray-900 font-bold">Roy Bach, Owner</p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            Roy Bach is the owner of Florida Impact Windows &amp; Doors, a Hollywood, FL-based impact window and door installer with 15+ years serving Miami-Dade, Broward, and Palm Beach counties. The company is A+ rated with the BBB, holds a BuildZoom score of 111 (top 4% of Florida contractors), and has completed over 5,000 installations across South Florida. Roy personally visits every free estimate and oversees installation crews on HVHZ-rated projects throughout the tri-county area.
          </p>
        </div>
      </div>
    </div>
  );
}
