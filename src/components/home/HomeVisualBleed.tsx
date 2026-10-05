import React from "react";
import Image from "next/image";

export function HomeVisualBleed() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Bleed Image Frame */}
        <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/9 sm:aspect-21/9 group">
          <Image
            src="/images/fresh-produce.jpg"
            alt="Agricultural cold storage with fresh produce, crates, and humidity mist"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/60 via-transparent to-transparent pointer-events-none" />

          {/* Minimal Floating Caption */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-md">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D86A2D] block mb-2">
              Cold Chain Continuity
            </span>
            <p className="font-heading text-xl sm:text-2xl font-bold leading-tight">
              Preserving product freshness from storage to supply.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
