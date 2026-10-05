import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FACILITY_ZONES } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Facilities | Tahseen Jaber Cold Storage",
  description:
    "Explore Tahseen Jaber's modern cold storage facilities, pallet racking infrastructure, refrigeration plant, and insulated loading bays.",
};

export default function FacilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
                <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
                <span>Our Facilities</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2340] leading-tight tracking-tight">
                Designed to protect{" "}
                <span className="text-[#B84D1B] block sm:inline">
                  what matters.
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#66717C] leading-relaxed">
                Engineered for maximum thermal stability, hygienic cargo staging, and seamless
                freight handling across every square foot.
              </p>
            </div>
          </div>
        </section>

        {/* Large Facility Visual Layout */}
        <section className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/10 group">
                <Image
                  src="/images/hero-warehouse.jpg"
                  alt="Industrial High-Bay Pallet Racking Aisle at Tahseen Jaber"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-md bg-slate-100 aspect-4/3 group">
                  <Image
                    src="/images/refrigeration-tech.jpg"
                    alt="Industrial Refrigeration Plant & Compressors"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-[#66717C] leading-relaxed">
                  Industrial-grade compressors and pressure loops provide steady cooling
                  distribution with continuous atmospheric monitoring.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Facility Architectural Zones (Editorial list, not cards) */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                Infrastructure Architecture
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                Engineered zones built for preservation.
              </h2>
            </div>

            <div className="border-t border-[#E3E8EC]">
              {FACILITY_ZONES.map((zone) => (
                <div
                  key={zone.id}
                  className="py-10 sm:py-14 border-b border-[#E3E8EC] grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-xl sm:text-2xl font-black text-[#B84D1B]">
                        {zone.number}
                      </span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#12345B]">
                        {zone.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340]">
                      {zone.name}
                    </h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-base text-[#66717C] leading-relaxed">
                      {zone.description}
                    </p>
                  </div>

                  <div className="md:col-span-3 space-y-2">
                    {zone.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#202B35]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B84D1B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0A2340] text-white py-20 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Schedule a facility inspection or intake.
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Our dispatch team coordinates facility visits and logistics intake scheduling by appointment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
            >
              <span>Contact Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
