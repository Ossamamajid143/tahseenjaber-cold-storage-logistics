"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeSolutionsShowcase() {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-b border-[#E3E8EC]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Large, edge-to-edge image column */}
        <RevealOnScroll
          animation="image-reveal"
          duration={900}
          className="group relative aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-[1.1/1]"
        >
          <Image
            src="/images/service-cold-storage-leasing.webp"
            alt="Temperature-controlled cold storage facility for leased warehouse services"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102 motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:transform-none"
          />
        </RevealOnScroll>

        {/* Separate content column, vertically centered */}
        <div className="flex items-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-20 2xl:px-36">
          <RevealOnScroll animation="fade-up" duration={800} delay={150}>
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#B84D1B] leading-tight mb-3">
                {t.home.solutions.title}
              </h2>

              <PatternDivider className="mb-6" color="#B84D1B" />

              <p className="text-[#202B35]/85 text-base sm:text-lg leading-relaxed mb-8">
                {t.home.solutions.desc}
              </p>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex max-w-full items-center justify-center border-2 border-[#B84D1B] bg-white text-[#B84D1B] hover:bg-[#B84D1B] hover:text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-none transition-colors duration-200"
                >
                  <span className="text-center">{t.home.solutions.btn}</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
