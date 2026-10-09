"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeComprehensiveServices() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0A2340] text-white relative overflow-hidden arch-grid-pattern-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Content */}
        <div className="flex items-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-20 2xl:px-36">
          <RevealOnScroll animation="fade-up" duration={800}>
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#B84D1B] leading-tight mb-3">
                {t.home.comprehensive.title}
              </h2>

              <PatternDivider className="mb-6" color="#D86A2D" />

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {t.home.comprehensive.desc}
              </p>

              <div>
                <Link
                  href="/services"
                  className="inline-flex max-w-full items-center justify-center border-2 border-[#B84D1B] bg-white text-[#B84D1B] hover:bg-[#B84D1B] hover:text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-none transition-colors duration-200"
                >
                  <span className="text-center">{t.home.comprehensive.btn}</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Full-height image fills the right half without text over it. */}
        <RevealOnScroll
          animation="image-reveal"
          duration={900}
          delay={150}
          className="group relative aspect-[4/3] overflow-hidden bg-slate-900 lg:aspect-[1.1/1]"
        >
          <Image
              src="/images/services-customized.jpg"
            alt="Warehouse workers handling inventory in a refrigerated warehouse"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102 motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:transform-none"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
