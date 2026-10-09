"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useNavbarHeight } from "@/components/useNavbarHeight";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ColdFogOverlay } from "@/components/ui/ColdFogOverlay";

const HOME_HERO_SLIDES = [
  { src: "/images/facility-exterior-wide.png", alt: "Tahseen Jaber Cold Storage facility exterior" },
  { src: "/images/facility-loading-bays.png", alt: "Loading bays at the Tahseen Jaber cold storage facility" },
  { src: "/images/service-cold-storage-leasing.webp", alt: "Cold storage leasing facility" },
  { src: "/images/temperature-storage.jpg", alt: "Temperature controlled cold storage" },
];

export function HomeHero() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const navbarHeight = useNavbarHeight();
  const viewportHeight = `max(calc(100vh - ${navbarHeight}px), calc(100svh - ${navbarHeight}px), calc(100dvh - ${navbarHeight}px))`;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HOME_HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [HOME_HERO_SLIDES.length]);

  return (
    <section
      className="relative flex items-center bg-[#0A2340] text-white overflow-hidden"
      style={{ minHeight: viewportHeight }}
    >
      {/* Background Image — cinematic full-bleed, centre-perspective composition */}
      <div className="absolute inset-0 z-0">
        {HOME_HERO_SLIDES.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={index === activeSlide ? slide.alt : ""}
            fill
            preload={index === 0}
            sizes="100vw"
            aria-hidden={index !== activeSlide}
            className={`object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
            style={{ objectPosition: "center 45%" }}
          />
        ))}
        {/* Stronger falloff behind copy keeps the building visible and text legible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,22,40,0.92) 0%, rgba(10,35,64,0.84) 50%, rgba(6,22,40,0.92) 100%), linear-gradient(180deg, rgba(6,22,40,0.08) 0%, rgba(6,22,40,0.14) 100%)",
          }}
        />

        <ColdFogOverlay />
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
