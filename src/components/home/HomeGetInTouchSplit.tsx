"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeGetInTouchSplit() {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-b border-[#E3E8EC]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Large, edge-to-edge image column */}
        <RevealOnScroll
          animation="image-reveal"
          duration={800}
          className="group relative aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-[1.1/1]"
        >
          <Image
            src="/images/refrigeration-tech.jpg"
            alt="Tahseen Jaber Advanced Cold Storage & Refrigeration Facility"
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
                {t.home.getInTouch.title}
              </h2>

              <PatternDivider className="mb-6" color="#B84D1B" />

              <p className="text-[#202B35]/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {t.home.getInTouch.desc}
              </p>

              {/* Logo and Brand signature underneath matching screenshot */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#12345B]/15 bg-[#F7F5F0] shrink-0 shadow-xs">
                  <Image
                    src={SITE_CONFIG.logoPath}
                    alt={`${SITE_CONFIG.companyName} Logo`}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-[#0A2340] leading-none">
                    {t.brand.fullName}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-[#B84D1B] uppercase mt-1">
                    {t.brand.tagline}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact#contact-location"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors group cursor-pointer"
                >
                  <span>{t.home.getInTouch.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
