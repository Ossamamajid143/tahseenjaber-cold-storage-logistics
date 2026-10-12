"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useNavbarHeight } from "@/components/useNavbarHeight";
import { ColdFogOverlay, FogIntensity } from "@/components/ui/ColdFogOverlay";

interface PageHeroProps {
  title: string;
  badge?: string;
  description?: string;
  imageSrc?: string;
  imagePosition?: string;
  overlayGradient?: string;
  transitionColor?: "#FFFFFF" | "#F7F5F0";
  fogIntensity?: FogIntensity;
}

export function PageHero({
  title,
  badge,
  description,
  imageSrc = "/images/facility-exterior-wide.png",
  imagePosition = "center 40%",
  overlayGradient,
  transitionColor = "#FFFFFF",
  fogIntensity = "moderate",
}: PageHeroProps) {
  const { t, isArabic } = useLanguage();
  const navbarHeight = useNavbarHeight();
  const viewportHeight = `max(calc(100vh - ${navbarHeight}px), calc(100svh - ${navbarHeight}px), calc(100dvh - ${navbarHeight}px))`;

  return (
    <section
      className="relative flex items-center bg-[#0A2340] text-white overflow-hidden"
      style={{ minHeight: viewportHeight }}
    >
      {/* Background Image — cinematic full-bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {/* Theme-matched layered overlay, darker at the text columns. */}
        {overlayGradient ? (
          <div
            className="absolute inset-0"
            style={{ background: overlayGradient }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,22,40,0.92) 0%, rgba(10,35,64,0.84) 50%, rgba(6,22,40,0.92) 100%), linear-gradient(180deg, rgba(6,22,40,0.08) 0%, rgba(6,22,40,0.14) 100%)",
            }}
          />
        )}

        <ColdFogOverlay transitionColor={transitionColor} intensity={fogIntensity} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <div className="lg:col-span-5 lg:text-end">
            {badge && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D86A2D] mb-3">
                <span className="w-5 h-[2px] bg-[#D86A2D] inline-block" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h1>
          </div>

          <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
            <div className="w-[1.5px] h-36 bg-[#B84D1B]" />
          </div>

          <div className="lg:col-span-5 lg:text-start">
            {description && (
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className="mt-8 sm:mt-10 ml-auto w-fit flex items-center gap-2 text-sm"
        >
          {isArabic ? (
            <>
              <span className="text-rust font-medium">{title}</span>
              <span className="text-white/50">/</span>
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-rust font-medium">{title}</span>
            </>
          )}
        </nav>
      </div>
    </section>
  );
}
