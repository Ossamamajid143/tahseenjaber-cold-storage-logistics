"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeSolutionsShowcase() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Visual Showcase */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="scale-up" duration={900}>
              <div className="relative rounded-[12px] overflow-hidden shadow-xl border border-[#12345B]/15 bg-slate-100 aspect-16/10 group">
                <Image
                  src="/images/services-temp-mgmt.jpg"
                  alt="Tahseen Jaber Temperature Management and Quality Control Inspector"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white bg-[#0A2340]/80 backdrop-blur-xs rounded-[8px] p-4 border border-white/10 hidden sm:block">
                  <p className="font-heading font-semibold text-sm">
                    {t.home.solutions.badgeTitle}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {t.home.solutions.badgeDesc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <RevealOnScroll animation="fade-up" duration={800} delay={150}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#B84D1B] leading-tight mb-3">
                {t.home.solutions.title}
              </h2>

              <PatternDivider className="mb-6" color="#B84D1B" />

              <p className="text-[#202B35]/85 text-base sm:text-lg leading-relaxed mb-8">
                {t.home.solutions.desc}
              </p>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border-2 border-[#12345B] hover:border-[#B84D1B] text-[#12345B] hover:text-[#B84D1B] hover:bg-[#EEF5F8]/40 px-6 py-3 rounded-[6px] font-semibold text-sm sm:text-base transition-all duration-200 group"
                >
                  <span>{t.home.solutions.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
