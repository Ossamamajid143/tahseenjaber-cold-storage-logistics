import React from "react";
import { WHY_PILLARS } from "@/data/site-content";

export function HomeWhyPillars() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
            <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
            <span>Why Tahseen Jaber</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2340] tracking-tight leading-tight">
            Built on unwavering standards.
          </h2>
        </div>

        {/* Editorial Horizontal Rows with Dividers */}
        <div className="border-t border-[#E3E8EC]">
          {WHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="py-10 sm:py-14 border-b border-[#E3E8EC] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline group"
            >
              {/* Left Column: Number & Title */}
              <div className="md:col-span-5 flex items-baseline gap-6 sm:gap-8">
                <span className="font-heading text-2xl sm:text-3xl font-black text-[#B84D1B]">
                  {pillar.number}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A2340] group-hover:text-[#12345B] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              {/* Right Column: Concise Supporting Copy */}
              <div className="md:col-span-7">
                <p className="text-base sm:text-lg text-[#66717C] leading-relaxed max-w-2xl">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
