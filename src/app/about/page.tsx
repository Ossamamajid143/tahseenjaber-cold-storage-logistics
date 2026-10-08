"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Warehouse,
  Truck,
  Globe,
  PackageCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, isArabic } = useLanguage();

  const solutionIcons = [
    <Warehouse key="lease" className="w-7 h-7 text-[#B84D1B]" />,
    <Truck key="truck" className="w-7 h-7 text-[#12345B]" />,
    <Globe key="globe" className="w-7 h-7 text-[#B84D1B]" />,
    <PackageCheck key="consign" className="w-7 h-7 text-[#12345B]" />,
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION
            Background: Real Cold-store / warehouse / refrigerated facility photo
            Title: Reliable Cold Storage & Cold Chain Solutions in Iraq
            Subtitle: Providing professional cold storage, temperature-controlled 
            handling, and cold-chain solutions for businesses across Iraq.
        ====================================================================== */}
        <PageHero
          title={t.about.title}
          badge={t.about.badge}
          description={t.about.desc}
          imageSrc="/images/facility-exterior-wide.png"
          imagePosition="center 45%"
          breadcrumbPosition="right"
        />

        {/* =====================================================================
            2. TWO-COLUMN FEATURE (Merged from demo screenshot)
            Column 1: Maintain Optimal Conditions / Temperature-Controlled Warehousing
            Column 2: Customized to Your Needs / Flexible Storage Options
        ====================================================================== */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Temperature-Controlled Warehousing */}
              <RevealOnScroll animation="fade-up" duration={800}>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#12345B] mb-2">
                    {t.about.twoCol.optimalSubtitle}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2340] leading-tight mb-4">
                    {t.about.twoCol.optimalTitle}
                  </h2>
                  <PatternDivider className="mb-6" color="#B84D1B" />
                  <p className="text-[#202B35]/80 text-base leading-relaxed">
                    {t.about.twoCol.optimalDesc}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Right Column: Flexible Storage Options */}
              <RevealOnScroll animation="fade-up" duration={800} delay={150}>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#12345B] mb-2">
                    {t.about.twoCol.flexibleSubtitle}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2340] leading-tight mb-4">
                    {t.about.twoCol.flexibleTitle}
                  </h2>
                  <PatternDivider className="mb-6" color="#B84D1B" />
                  <p className="text-[#202B35]/80 text-base leading-relaxed">
                    {t.about.twoCol.flexibleDesc}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. 4 CORE COLD CHAIN SOLUTIONS (with Read More Buttons)
            - Cold Storage Leasing
            - Cold Chain Delivery
            - Import / Export & Re-export
            - Consignment Sale
        ====================================================================== */}
        <section className="py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                  {isArabic ? "قدراتنا الأساسية" : "Capabilities & Scope"}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A2340] leading-tight mb-4">
                  {t.about.servicesHeading}
                </h2>
                <PatternDivider className="mb-6" color="#B84D1B" />
                <p className="text-[#66717C] text-base sm:text-lg leading-relaxed">
                  {t.about.servicesSub}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {t.about.solutions.map((item, idx) => (
                <RevealOnScroll
                  key={idx}
                  animation="fade-up"
                  delay={idx * 120}
                  className="h-full"
                >
                  <div className="bg-white rounded-[12px] p-8 sm:p-10 border border-[#E3E8EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                    <div>
                      <div className="w-14 h-14 rounded-[10px] bg-[#EEF5F8] border border-[#D8E6ED] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                        {solutionIcons[idx]}
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[#66717C] text-[15px] sm:text-base leading-relaxed mb-8">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0F4F7]">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors group/btn pt-3"
                      >
                        <span>{t.about.readMore}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. LARGE REAL FACILITY EXTERIOR IMAGE SHOWCASE
        ====================================================================== */}
        <section className="bg-white py-14 sm:py-18 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="scale-up" duration={900}>
              <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-900 aspect-16/9 sm:aspect-21/9 group">
                <Image
                  src="/images/facility-signage-loading-bays.png"
                  alt="Tahseen Jaber Modern Cold Storage Logistics Facility in Iraq"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* =====================================================================
            5. COMPANY PURPOSE & MISSION NARRATIVE
        ====================================================================== */}
        <section className="py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <RevealOnScroll animation="fade-up" duration={800}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                    {t.about.missionBadge}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                    {t.about.missionTitle}
                  </h2>
                </RevealOnScroll>
              </div>

              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#66717C] leading-relaxed">
                <RevealOnScroll animation="fade-up" duration={800} delay={150}>
                  <p>{t.about.missionP1}</p>
                  <p>{t.about.missionP2}</p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. EDITORIAL OPERATING PRINCIPLES
        ====================================================================== */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="max-w-2xl mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                  {t.about.principlesBadge}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                  {t.about.principlesTitle}
                </h2>
              </div>
            </RevealOnScroll>

            <div className="border-t border-[#E3E8EC]">
              {t.about.principles.map((p, idx) => (
                <RevealOnScroll key={p.number} animation="fade-up" delay={idx * 100}>
                  <div className="py-8 sm:py-10 border-b border-[#E3E8EC] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                    <div className="md:col-span-4 flex items-baseline gap-6">
                      <span className="font-heading text-2xl font-bold text-[#B84D1B]">
                        {p.number}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340]">
                        {p.title}
                      </h3>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-sm sm:text-base text-[#66717C] leading-relaxed max-w-2xl">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. BOTTOM CTA
        ====================================================================== */}
        <section className="bg-[#0A2340] text-white py-20 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.about.ctaTitle}
              </h2>
              <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
                {t.about.ctaDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
              >
                <span>{t.about.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
