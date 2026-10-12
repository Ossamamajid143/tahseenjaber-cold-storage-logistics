"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Info,
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
import { SITE_CONFIG } from "@/data/site-content";

export default function AboutPage() {
  const { t } = useLanguage();

  const solutionIcons = [Warehouse, Truck, Globe, PackageCheck];

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
          title={t.about.badge}
          description={t.about.desc}
          imageSrc="/images/hero-warehouse.jpg"
          imagePosition="center 45%"
          fogIntensity="soft"
        />

        <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <RevealOnScroll animation="fade-up" duration={800} className="lg:col-span-5">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight mb-4">
                  {t.about.title}
                </h2>
                <PatternDivider className="mb-0" color="#B84D1B" />
              </RevealOnScroll>
              <RevealOnScroll animation="fade-up" duration={800} delay={150} className="lg:col-span-7">
                <div className="space-y-6 text-[#66717C] text-base sm:text-lg leading-relaxed">
                  <p>{t.about.introP1}</p>
                  <p>{t.about.introP2}</p>
                </div>
                <Link
                  href="#cold-chain-solutions"
                  className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg mt-8"
                >
                  <span>{t.about.readMore}</span>
                  <ArrowRight aria-hidden="true" className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </section>

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

        {/* Reliable storage: full-width photo and supporting copy. */}
        <section className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-white border-b border-[#E3E8EC]">
          <RevealOnScroll animation="fade-in" duration={900} className="h-full">
            <div className="relative h-[min(420px,78vw)] min-h-[300px] overflow-hidden bg-[#EEF5F8] lg:aspect-auto lg:h-full lg:min-h-screen">
              <Image
                src="/images/about-cold-storage-room.webp"
                alt={t.about.storage.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </RevealOnScroll>

          <div className="flex items-center px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-28 py-10 sm:py-12 lg:py-20">
            <RevealOnScroll animation="fade-up" duration={800} delay={150} className="w-full max-w-xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#B84D1B] leading-tight mb-4">
                {t.about.storage.title}
              </h2>
              <PatternDivider className="mb-6" color="#12345B" />
              <p className="text-[#66717C] text-base sm:text-lg leading-[1.75] mb-8">
                {t.about.storage.desc}
              </p>
              <ul className="space-y-4">
                {t.about.storage.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-[#66717C] text-base sm:text-lg leading-[1.75]">
                    <Info aria-hidden="true" className="w-5 h-5 shrink-0 mt-1 text-[#12345B]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* The four business services use the existing About card pattern. */}
        <section id="cold-chain-solutions" className="scroll-mt-24 py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                  {t.about.servicesBadge}
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
              {t.about.solutions.map((item, idx) => {
                const Icon = solutionIcons[idx];
                return (
                  <RevealOnScroll
                    key={item.title}
                    animation="fade-up"
                    delay={idx * 120}
                    className="h-full"
                  >
                    <div className="bg-white rounded-[12px] p-8 sm:p-10 border border-[#E3E8EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                      <div>
                        <div className="w-14 h-14 rounded-[10px] bg-[#EEF5F8] border border-[#D8E6ED] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                          <Icon aria-hidden="true" className="w-7 h-7 text-[#B84D1B]" />
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality and sustainability cards overlap the split photo background. */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#EEF5F8] to-[#F7F5F0] border-b border-[#E3E8EC]">
          <div className="relative aspect-16/10 lg:absolute lg:inset-y-0 lg:end-0 lg:w-1/2 lg:aspect-auto">
            <Image
              src="/images/cold-storage-operations.jpg"
              alt={t.about.commitments.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <RevealOnScroll animation="fade-up" duration={800} className="h-full">
                <div className="bg-white rounded-[12px] p-8 sm:p-10 border border-[#E3E8EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#B84D1B] leading-tight mb-6">
                    {t.about.commitments.qualityTitle}
                  </h3>
                  <p className="text-[#66717C] text-[15px] sm:text-base leading-relaxed mb-8">
                    {t.about.commitments.qualityDesc}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
                    >
                      {t.about.commitments.qualityBtn}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" duration={800} delay={150} className="h-full">
                <div className="bg-white rounded-[12px] p-8 sm:p-10 border border-[#E3E8EC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#B84D1B] leading-tight mb-6">
                    {t.about.commitments.sustainabilityTitle}
                  </h3>
                  <p className="text-[#66717C] text-[15px] sm:text-base leading-relaxed mb-8">
                    {t.about.commitments.sustainabilityDesc}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
                    >
                      {t.about.commitments.sustainabilityBtn}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Business contact callout using the existing company logo. */}
        <section className="bg-white py-10 sm:py-12 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                <div className="relative mb-5 h-[54px] w-[196px] shrink-0 sm:h-[62px] sm:w-[225px]">
                  <Image
                    src={SITE_CONFIG.logoPath}
                    alt="Tahseen Jaber Cold Storage"
                    width={898}
                    height={247}
                    sizes="(max-width: 640px) 196px, 225px"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="font-heading text-xl sm:text-2xl lg:text-[28px] font-normal text-[#B84D1B] leading-[1.35] mb-4">
                  {t.about.desc}
                </p>
                <h2 className="font-heading text-base sm:text-lg font-semibold text-[#0A2340]">
                  {t.about.inventory.brandName}
                </h2>
              </div>
            </RevealOnScroll>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
