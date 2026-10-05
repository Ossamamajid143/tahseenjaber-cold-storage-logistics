import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCapabilities() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Image (approx 58% width - 7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/11 group">
              <Image
                src="/images/temperature-storage.jpg"
                alt="Temperature-controlled cold storage chamber with frost vapor and pallet racking"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>
          </div>

          {/* Text Area (approx 42% width - 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
              <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
              <span>Our Capabilities</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0A2340] leading-tight tracking-tight mb-5">
              Storage designed around your needs.
            </h2>

            <p className="text-base sm:text-lg text-[#66717C] leading-relaxed mb-6">
              From regulated refrigeration chambers to high-density pallet racking, our facility
              is engineered to protect perishable inventory with precision, cleanliness, and
              operational discipline.
            </p>

            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
