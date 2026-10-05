import React from "react";

export function HomeIntro() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#E3E8EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Rust Accent Line */}
        <div className="w-12 h-[2px] bg-[#B84D1B] mx-auto mb-8" />

        {/* Large Statement */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0A2340] leading-tight tracking-tight">
          Keeping products protected, <br className="hidden sm:inline" />
          fresh and ready for what comes next.
        </h2>

        {/* Short supporting line */}
        <p className="mt-6 text-base sm:text-lg text-[#66717C] max-w-2xl mx-auto leading-relaxed">
          Tahseen Jaber Cold Storage provides dependable temperature preservation and
          cross-dock staging engineered to maintain product value and supply chain continuity.
        </p>

      </div>
    </section>
  );
}
