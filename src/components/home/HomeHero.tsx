"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0A2340] text-white overflow-hidden">
      {/* Background Image — cinematic full-bleed, centre-perspective composition */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/facility-exterior-wide.png"
          alt="Tahseen Jaber Cold Storage Industrial Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
        />
        {/* Subtle dark overlay — preserves image brightness & details while keeping text crisp */}
        <div className="absolute inset-0 bg-[#0A2340]/40" />

        {/* Soft white base gradient behind fog for seamless blend */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "140px",
            background:
              "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 35%, transparent 100%)",
          }}
        />

        {/* Bottom Atmospheric Cloud / Fog Mist matching reference screenshot */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[85px] sm:h-[105px] lg:h-[120px] pointer-events-none"
          style={{
            backgroundImage: "url('/images/bg-fog-bottom.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-36">
        <RevealOnScroll animation="fade-up" duration={850}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Title: Company Name */}
            <div className="lg:col-span-5 lg:text-right">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                {t.home.hero.title}
              </h1>
              <p className="font-heading text-lg sm:text-xl text-[#D86A2D] mt-2 font-semibold tracking-wider uppercase lg:text-right">
                {t.home.hero.tagline}
              </p>
            </div>

            {/* Desktop Vertical Divider */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
              <div className="w-[1.5px] h-36 bg-white/30" />
            </div>

            {/* Right Description */}
            <div className="lg:col-span-5 lg:text-left">
              <p className="text-base sm:text-lg lg:text-[18px] text-slate-200 leading-relaxed max-w-xl">
                {t.home.hero.desc}
              </p>
            </div>
          </div>

          {/* Centered Action Button */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/90 hover:border-white text-white hover:bg-white hover:text-[#0A2340] px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wide rounded-[4px] transition-all duration-200 shadow-md hover:shadow-xl hover:scale-102"
            >
              {t.home.hero.cta}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
