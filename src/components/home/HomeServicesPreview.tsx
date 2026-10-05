import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/site-content";

export function HomeServicesPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-3">
              <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
              <span>Our Capabilities</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2340] leading-tight tracking-tight">
              Storage designed around your needs.
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors"
          >
            <span>Explore all services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial Numbered List (No cards, pure design & composition) */}
        <div className="border-t border-[#E3E8EC]">
          {SERVICES_LIST.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group block py-8 sm:py-10 border-b border-[#E3E8EC] transition-all duration-300 hover:bg-[#EEF5F8]/40 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-[8px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Number & Service Name */}
                <div className="md:col-span-6 flex items-baseline gap-6 sm:gap-8">
                  <span className="font-heading text-xl sm:text-2xl font-black text-[#B84D1B]/80 group-hover:text-[#B84D1B] transition-colors">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340] group-hover:text-[#12345B] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Short Supporting Sentence */}
                <div className="md:col-span-5">
                  <p className="text-sm text-[#66717C] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="md:col-span-1 flex md:justify-end items-center pt-2 md:pt-0">
                  <span className="text-[#12345B] group-hover:text-[#B84D1B] transition-colors">
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
