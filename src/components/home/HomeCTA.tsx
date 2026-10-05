import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="bg-[#0A2340] text-white py-24 sm:py-32 relative overflow-hidden arch-grid-pattern-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Kicker */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D86A2D] block mb-4">
          Cold Storage Partnership
        </span>

        {/* Large Simple CTA Headline */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Let&apos;s protect what matters.
        </h2>

        {/* Short Supporting Line */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Talk to our operational team about your cold storage and logistics requirements.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold text-base px-8 py-4 rounded-[7px] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
