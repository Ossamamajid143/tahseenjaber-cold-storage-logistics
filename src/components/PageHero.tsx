"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PageHeroProps {
  title: string;
  badge?: string;
  description?: string;
  imageSrc?: string;
  imagePosition?: string;
  overlayGradient?: string;
  breadcrumbPosition?: "left" | "right";
}

export function PageHero({
  title,
  badge,
  description,
  imageSrc = "/images/facility-exterior-wide.png",
  imagePosition = "center 40%",
  overlayGradient,
  breadcrumbPosition = "right",
}: PageHeroProps) {
  const { t } = useLanguage();
  return (
    <section className="relative bg-[#0A2340] text-white overflow-hidden">
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
        {/* Subtle dark overlay or custom gradient overlay */}
        {overlayGradient ? (
          <div
            className="absolute inset-0"
            style={{ background: overlayGradient }}
          />
        ) : (
          <div className="absolute inset-0 bg-[#0A2340]/45" />
        )}

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
          className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] lg:h-[115px] pointer-events-none"
          style={{
            backgroundImage: "url('/images/bg-fog-bottom.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32">
        {breadcrumbPosition === "right" ? (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              {badge && (
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D86A2D] mb-3">
                  <span className="w-5 h-[2px] bg-[#D86A2D] inline-block" />
                  <span>{badge}</span>
                </div>
              )}

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {title}
              </h1>

              {description && (
                <p className="mt-4 text-sm sm:text-base text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                  {description}
                </p>
              )}
            </div>

            {/* Breadcrumb Right Aligned */}
            <nav aria-label="Breadcrumb" className="shrink-0 flex items-center gap-2 text-sm text-slate-200">
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-white font-medium">{title}</span>
            </nav>
          </div>
        ) : (
          <div className="max-w-3xl">
            {badge && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D86A2D] mb-4">
                <span className="w-5 h-[2px] bg-[#D86A2D] inline-block" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {/* Breadcrumb Left Aligned */}
            <nav aria-label="Breadcrumb" className="mt-8 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-white font-medium">{title}</span>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
