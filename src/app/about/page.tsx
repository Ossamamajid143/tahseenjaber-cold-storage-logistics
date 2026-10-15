"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Info,
  Truck,
  PackageCheck,
  Snowflake,
  Thermometer,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import { CapabilitiesCards } from "@/components/CapabilitiesCards";

const CONTINUE_IMAGES = [
  "/images/real-facility/corridor-numbered-doors.jpg",
  "/images/real-facility/storage-chamber-clean.jpg",
  "/images/real-facility/control-room.jpg",
] as const;
const PROCESS_ICONS = [Truck, Snowflake, Thermometer, PackageCheck] as const;

export default function AboutPage() {
  const { t, isArabic } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION
            Background: Real Cold-store / warehouse / refrigerated facility photo
            Title: Reliable Cold Storage & Cold Chain Solutions in Iraq
            Subtitle: Reliable Frozen, Chiller, and Dry storage in Baghdad.
        ====================================================================== */}
        <PageHero
          title={t.about.badge}
          description={t.about.desc}
          imageSrc="/images/real-facility/facility-facade-day.jpg"
          imagePosition="center 48%"
          slides={[
            { src: "/images/real-facility/facility-facade-day.jpg", alt: isArabic ? "واجهة منشأة تحسين جابر للتخزين المبرد نهاراً" : "Tahseen Jaber Cold Storage facade in daylight", position: "center 48%", mobilePosition: "58% center" },
            { src: "/images/real-facility/corridor-numbered-doors.jpg", alt: isArabic ? "ممر غرف التخزين المبردة ذات الأبواب المرقمة" : "Corridor of numbered cold-storage rooms", position: "center 50%", mobilePosition: "58% center" },
            { src: "/images/real-facility/storage-chamber-clean.jpg", alt: isArabic ? "غرفة تخزين مبردة نظيفة" : "Clean refrigerated storage chamber", position: "center 50%", mobilePosition: "55% center" },
            { src: "/images/real-facility/plant-room-bright.jpg", alt: isArabic ? "معدات غرفة أنظمة التبريد" : "Equipment in the refrigeration plant room", position: "center 50%", mobilePosition: "54% center" },
          ]}
          fogIntensity="soft"
          layout="left"
          overlayGradient="linear-gradient(90deg, rgba(6,22,40,0.78) 0%, rgba(10,35,64,0.48) 58%, rgba(6,22,40,0.18) 100%), linear-gradient(180deg, rgba(6,22,40,0.05) 0%, rgba(6,22,40,0.22) 100%)"
        />

        <section className="py-16 sm:py-24 bg-white ">
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
        <section className="py-16 sm:py-24 bg-white ">
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
        <section className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-white ">
          <RevealOnScroll animation="fade-in" duration={900} className="h-full">
            <div className="relative h-[min(420px,78vw)] min-h-[300px] overflow-hidden bg-[#EEF5F8] lg:aspect-auto lg:h-full lg:min-h-screen">
              <Image
                src="/images/home-end-to-end-solutions.png"
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

        <CapabilitiesCards />

        <section className="overflow-hidden  bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="mb-10 max-w-3xl">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#12345B]">{isArabic ? "عملية التخزين" : "COLD CHAIN PROCESS"}</span>
                <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2340] sm:text-4xl">{t.about.processTitle}</h2>
                <PatternDivider className="mt-5" color="#B84D1B" />
              </div>
            </RevealOnScroll>

            <div dir={isArabic ? "rtl" : "ltr"} className="relative grid grid-cols-1 gap-7 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" className="absolute bottom-8 top-8 start-[27px] w-px bg-[#D8B39F] lg:start-[6%] lg:end-[6%] lg:top-[27px] lg:h-px lg:w-auto" />
              {t.about.processStages.map((stage, index) => {
                const Icon = PROCESS_ICONS[index];
                return (
                  <RevealOnScroll key={stage.title} animation="fade-up" duration={700} delay={index * 100} className="relative z-10">
                    <article className="group grid grid-cols-[56px_minmax(0,1fr)] gap-x-4 lg:block">
                      <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md lg:mx-auto lg:mb-5 ${index === 1 ? "border-[#12345B] bg-[#12345B] text-white shadow-md" : "border-[#D8E6ED] bg-white text-[#12345B]"}`}>
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div className="pb-1 lg:text-center">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A95A0]">{isArabic ? `المرحلة ${index + 1}` : `STAGE ${index + 1}`}</p>
                        <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-[#0A2340] sm:text-xl">{stage.title}</h3>
                        <p className="text-sm leading-relaxed text-[#66717C] lg:min-h-[120px]">{stage.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#E3E8EC] pt-3 lg:justify-center">
                          {stage.temperatures.length ? stage.temperatures.map((value) => <span key={value} className="rounded-full bg-[#F7F5F0] px-2.5 py-1 text-xs font-semibold text-[#A34A21]">{value}</span>) : <span className="text-sm font-semibold text-[#A34A21]">{stage.temperature}</span>}
                          {stage.detail && <span className="ms-auto text-xs text-[#8A95A0] lg:ms-0">{stage.detail}</span>}
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-[#0A2340] sm:text-3xl">{t.about.continueTitle}</h2>
              <Link href="/services#contact" className="inline-flex items-center gap-2 rounded-sm border border-[#D1D7DD] px-5 py-3 text-sm font-semibold text-[#0A2340] transition-colors hover:border-[#B84D1B] hover:text-[#B84D1B]">
                {t.about.continueCta}<ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.about.continueTiles.map((label, index) => {
                const href = ["/about#capabilities", "/temperature-regimes", "/monitoring"][index];
                return (
                  <RevealOnScroll key={label} animation="fade-up" duration={700} delay={index * 100}>
                    <Link href={href} className="group relative flex min-h-[220px] items-end overflow-hidden rounded-xl border border-[#DDE3E8] sm:min-h-[260px]">
                      <Image src={CONTINUE_IMAGES[index]} alt={label} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/85 via-[#0A2340]/15 to-transparent" />
                      <span className="relative flex items-center gap-2 p-5 font-heading text-xl font-bold text-white">{label}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></span>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality and sustainability cards overlap the split photo background. */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#EEF5F8] to-[#F7F5F0] ">
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

        {/* Business contact callout using the full Tahseen Jaber logo. */}
        <section className="bg-white py-10 sm:py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                <p className="font-heading text-xl sm:text-2xl lg:text-[28px] font-normal text-[#B84D1B] leading-[1.35] mb-4">
                  {t.about.desc}
                </p>
                <div className="relative h-[52px] w-[190px] shrink-0 sm:h-[58px] sm:w-[210px]">
                  <Image
                    src="/tahseen-jaber-logo.jpeg"
                    alt="Tahseen Jaber Cold Storage"
                    width={898}
                    height={247}
                    sizes="(max-width: 640px) 190px, 210px"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
