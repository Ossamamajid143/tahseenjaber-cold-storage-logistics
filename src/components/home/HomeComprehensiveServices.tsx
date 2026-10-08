"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeComprehensiveServices() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0A2340] text-white py-20 sm:py-28 lg:py-36 relative overflow-hidden arch-grid-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <RevealOnScroll animation="fade-up" duration={800}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-3">
                {t.home.comprehensive.title}
              </h2>

              <PatternDivider className="mb-6" color="#D86A2D" />

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {t.home.comprehensive.desc}
              </p>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-[#0A2340] px-7 py-3.5 rounded-[6px] font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>{t.home.comprehensive.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: High Quality Image */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="scale-up" duration={900} delay={150}>
              <div className="relative rounded-[12px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900 aspect-16/10 group">
                <Image
                  src="/images/services-customized.jpg"
                  alt="Tahseen Jaber Industrial Cold Storage Logistics Operations Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
