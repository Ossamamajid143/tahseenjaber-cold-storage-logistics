"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useNavbarHeight } from "@/components/useNavbarHeight";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeHero() {
  const { t } = useLanguage();
  const navbarHeight = useNavbarHeight();
  const viewportHeight = `max(calc(100vh - ${navbarHeight}px), calc(100svh - ${navbarHeight}px), calc(100dvh - ${navbarHeight}px))`;

  return (
    <section
      className="relative flex items-center bg-[#0A2340] text-white overflow-hidden"
      style={{ minHeight: viewportHeight }}
    >
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
        {/* Stronger falloff behind copy keeps the building visible and text legible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,22,40,0.92) 0%, rgba(10,35,64,0.84) 50%, rgba(6,22,40,0.92) 100%), linear-gradient(180deg, rgba(6,22,40,0.08) 0%, rgba(6,22,40,0.14) 100%)",
          }}
        />

        {/* Shared, restrained fade into the page below. */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "96px",
            background:
              "linear-gradient(to top, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.18) 32%, transparent 100%)",
          }}
        />

        {/* Same light mist treatment on every page hero. */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[76px] sm:h-[88px] pointer-events-none opacity-80"
          style={{
            backgroundImage: "url('/images/bg-fog-bottom.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <RevealOnScroll animation="fade-up" duration={850}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Title: Company Name */}
            <div className="lg:col-span-5 lg:text-right">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {t.home.hero.title}
              </h1>
              <p className="font-heading text-lg sm:text-xl text-[#D86A2D] mt-2 font-semibold tracking-wider uppercase lg:text-end">
                {t.home.hero.tagline}
              </p>
            </div>

            {/* Desktop Vertical Divider */}
            <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
              <div className="w-[1.5px] h-36 bg-[#B84D1B]" />
            </div>

            {/* Right Description */}
            <div className="lg:col-span-5 lg:text-start">
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl">
                {t.home.hero.desc}
              </p>
            </div>
          </div>

          {/* Centered Action Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex max-w-full items-center justify-center border-2 border-[#B84D1B] bg-white text-[#B84D1B] hover:bg-[#B84D1B] hover:text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold tracking-wide rounded-none transition-colors duration-200"
            >
              {t.home.hero.cta}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
