import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeFacility() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F5F0] border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Area (First on desktop or second) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
              <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
              <span>Our Facility</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0A2340] leading-tight tracking-tight mb-5">
              Built for controlled storage.
            </h2>

            <p className="text-base sm:text-lg text-[#66717C] leading-relaxed mb-6">
              Our modern cold storage facility combines insulated loading bays, hygienic
              cleanroom surfaces, and high-capacity refrigeration systems designed to protect
              your products at every step.
            </p>

            <div>
              <Link
                href="/why-choose-us"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors"
              >
                <span>Explore our facilities</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Large Facility Exterior Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/11 group">
              <Image
                src="/images/facility-exterior-wide.png"
                alt="Tahseen Jaber Cold Storage Distribution Logistics Facility Exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
