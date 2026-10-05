import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Headline Area */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
            <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
            <span>Industrial Cold Storage</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2340] leading-[1.12] tracking-tight">
            Reliable Cold Storage.{" "}
            <span className="text-[#B84D1B] block sm:inline">
              Built to Protect What Matters.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#66717C] leading-relaxed max-w-2xl">
            Dependable temperature-controlled warehousing designed to preserve product
            freshness, protect perishables, and support efficient supply chains.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[7px] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#EEF5F8] hover:bg-[#E2EDF3] text-[#12345B] border border-[#D8E6ED] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[7px] transition-colors"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        {/* Large Powerful Industrial Photography */}
        <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/9 sm:aspect-21/9 group">
          <Image
            src="/images/hero-warehouse.jpg"
            alt="Tahseen Jaber Industrial Cold Storage Facility Racking and Aisles"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/40 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
