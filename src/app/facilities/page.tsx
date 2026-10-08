"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function FacilitiesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero with atmospheric fog effect */}
        <PageHero
          title={t.facilities.title}
          badge={t.facilities.badge}
          description={t.facilities.desc}
          imageSrc="/images/facility-loading-bays.png"
          imagePosition="center 45%"
          breadcrumbPosition="right"
        />

        {/* Large Facility Visual Layout */}
        <section className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/10 group">
                <Image
                  src="/images/cold-storage-warehouse-floor.jpg"
                  alt="Industrial Cold Storage Warehouse Operations at Tahseen Jaber"
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
                  {t.facilities.refrigNote}
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
                {t.facilities.archBadge}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                {t.facilities.archTitle}
              </h2>
            </div>

            <div className="border-t border-[#E3E8EC]">
              {t.facilities.zones.map((zone, idx) => (
                <div
                  key={idx}
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
                      {zone.desc}
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
              {t.facilities.ctaTitle}
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              {t.facilities.ctaDesc}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
            >
              <span>{t.facilities.ctaBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
