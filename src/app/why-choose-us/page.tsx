"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Box,
  Handshake,
  MapPin,
  Settings,
  ShieldCheck,
  Snowflake,
  Thermometer,
  TrendingUp,
  Truck,
  UsersRound,
  Warehouse,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import { useNavbarHeight } from "@/components/useNavbarHeight";

const ADVANTAGE_ICONS = [
  ShieldCheck,
  Box,
  UsersRound,
  Settings,
  Truck,
  Handshake,
] as const;

const STAT_ICONS = [Warehouse, Snowflake, Thermometer, MapPin] as const;
const COMMITMENT_ICONS = [Award, ShieldCheck, TrendingUp] as const;

const FINAL_COUNTS = {
  pallets: 100,
  coldRooms: 18,
  lowerTemperature: -20,
  upperTemperature: 16,
};

export default function WhyChooseUsPage() {
  const { t, isArabic } = useLanguage();
  const navbarHeight = useNavbarHeight();
  const content = t.whyChooseUs;
  const statisticsRef = useRef<HTMLElement | null>(null);
  const [statisticsStarted, setStatisticsStarted] = useState(false);
  const [counts, setCounts] = useState({
    pallets: 0,
    coldRooms: 0,
    lowerTemperature: 0,
    upperTemperature: 0,
  });

  const usableViewportHeight = (scale: number) => {
    const heightPercent = `${Math.round(scale * 100)}vh`;
    const smallHeightPercent = `${Math.round(scale * 100)}svh`;
    const dynamicHeightPercent = `${Math.round(scale * 100)}dvh`;
    const reservedHeaderHeight = `${Math.round(navbarHeight * scale)}px`;
    return `max(calc(${heightPercent} - ${reservedHeaderHeight}), calc(${smallHeightPercent} - ${reservedHeaderHeight}), calc(${dynamicHeightPercent} - ${reservedHeaderHeight}))`;
  };

  const sectionHeights = {
    "--why-tablet-height": usableViewportHeight(0.78),
    "--why-desktop-height": usableViewportHeight(1),
    "--why-cta-tablet-height": usableViewportHeight(0.45),
    "--why-cta-desktop-height": usableViewportHeight(0.55),
  } as CSSProperties;

  useEffect(() => {
    const section = statisticsRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => {
        setCounts(FINAL_COUNTS);
        setStatisticsStarted(true);
      });
      return () => cancelAnimationFrame(frame);
    }

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setStatisticsStarted(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatisticsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statisticsStarted) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setCounts(FINAL_COUNTS));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 1800;
    let startTime: number | null = null;
    let animationFrame = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        pallets: Math.round(FINAL_COUNTS.pallets * easedProgress),
        coldRooms: Math.round(FINAL_COUNTS.coldRooms * easedProgress),
        lowerTemperature: Math.round(FINAL_COUNTS.lowerTemperature * easedProgress),
        upperTemperature: Math.round(FINAL_COUNTS.upperTemperature * easedProgress),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(FINAL_COUNTS);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [statisticsStarted]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1" style={sectionHeights}>
        {/* Keep this existing hero and all of its settings unchanged. */}
        <PageHero
          title={content.title}
          description={content.desc}
          imageSrc="/images/real-facility/entrance-illuminated.jpg"
          imagePosition="center 45%"
          slides={[
            { src: "/images/real-facility/entrance-illuminated.jpg", alt: isArabic ? "واجهة منشأة تحسين جابر المضاءة ليلاً" : "Tahseen Jaber Cold Storage illuminated at night", position: "center 48%", mobilePosition: "58% center" },
            { src: "/images/real-facility/modern-entrance.jpg", alt: isArabic ? "واجهة منشأة تحسين جابر وأبواب التحميل" : "Tahseen Jaber Cold Storage facade and loading doors", position: "center 48%", mobilePosition: "58% center" },
            { src: "/images/real-facility/corridor-refrigerated.jpg", alt: isArabic ? "ممر داخلي بين غرف التخزين المبردة" : "Interior corridor between refrigerated rooms", position: "center 50%", mobilePosition: "56% center" },
            { src: "/images/real-facility/backup-generator.jpg", alt: isArabic ? "مولد كهربائي احتياطي للمنشأة" : "Backup generator at the facility", position: "center 50%", mobilePosition: "55% center" },
          ]}
          transitionColor="#F7F5F0"
          fogIntensity="subtle"
        />

        <section className="grid grid-cols-1 overflow-hidden bg-[#F7F5F0] lg:min-h-[458px] lg:grid-cols-[42%_58%]" dir={isArabic ? "rtl" : "ltr"}>
          <div className="arch-grid-pattern flex items-center px-6 py-10 sm:px-10 lg:py-12 lg:pl-[7.5vw] lg:pr-10">
            <div className="w-full max-w-xl">
              <nav aria-label={isArabic ? "مسار التنقل" : "Breadcrumb"} className="mb-7 flex items-center gap-2 text-xs text-[#66717C]">
                <Link href="/" className="transition-colors hover:text-[#B84D1B]">{t.nav.home}</Link>
                <span aria-hidden="true">›</span>
                <span className="font-medium text-[#B84D1B]">{content.title}</span>
              </nav>
              <h2 className="font-heading text-4xl font-bold leading-tight text-[#0A2340] sm:text-5xl">
                {content.title}
              </h2>
              <PatternDivider className="my-5" color="#0A2340" />
              <p className="max-w-[590px] text-base leading-[1.55] text-[#66717C] sm:text-lg">
                {content.showcaseDesc}
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#B84D1B] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9E3F16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2340]"
              >
                {content.ctaBtn}
                <ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[458px]">
            <Image
              src="/images/why-choose-us-hero.webp"
              alt={content.showcaseImageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="bg-[#F7F5F0] py-7 arch-grid-pattern sm:py-8 lg:py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-center lg:gap-8 lg:px-8" dir={isArabic ? "rtl" : "ltr"}>
            <RevealOnScroll animation="fade-up" duration={700} className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B84D1B]">
                {content.advantagesEyebrow}
              </p>
              <h2 className="font-heading text-2xl font-bold leading-tight text-[#0A2340] sm:text-3xl">
                {content.heading}
              </h2>
              <PatternDivider className="my-4" color="#0A2340" />
              <p className="max-w-md text-sm leading-relaxed text-[#66717C]">
                {content.intro}
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.advantages.map((advantage, index) => {
                const Icon = ADVANTAGE_ICONS[index];
                return (
                  <RevealOnScroll
                    key={advantage.title}
                    animation="fade-up"
                    delay={index * 45}
                    className="h-full"
                  >
                    <article className="flex h-full min-h-[138px] items-start gap-3 rounded-lg border border-[#E3E8EC] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-[18px]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#F0E8E2] bg-[#FAF8F6]">
                        <Icon className="h-6 w-6 text-[#B84D1B]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="mb-1 font-heading text-[15px] font-bold leading-snug text-[#0A2340]">
                          {advantage.title}
                        </h3>
                        <p className="text-[13px] leading-[1.45] text-[#66717C]">
                          {advantage.description}
                        </p>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        <section
          ref={statisticsRef}
          className="relative isolate overflow-hidden bg-[#0A2340] py-6 text-center sm:py-7"
          aria-label={content.statisticsAriaLabel}
        >
          <Image
            src="/images/why-choose-us-statistics-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#061628]/80" />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 sm:px-6 md:grid-cols-4 md:gap-0 lg:px-8" dir={isArabic ? "rtl" : "ltr"}>
            {content.statistics.map((statistic, index) => {
              const Icon = STAT_ICONS[index];
              const value = index === 0
                ? `${counts.pallets} ${statistic.unit}`
                : index === 1
                  ? `${counts.coldRooms}`
                  : index === 2
                    ? `${counts.lowerTemperature}°C to +${counts.upperTemperature}°C`
                    : statistic.value;

              return (
                <RevealOnScroll key={statistic.label} animation="fade-up" delay={index * 60}>
                  <div className={`flex h-full flex-col items-center justify-center px-2 md:px-3 ${index > 0 ? "md:border-s md:border-white/25" : ""}`}>
                    <Icon className="mb-2 h-7 w-7 text-[#B84D1B]" aria-hidden="true" />
                    <p className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl" aria-label={statistic.accessibleValue}>
                      <bdi dir="ltr">{value}</bdi>
                    </p>
                    <p className="mt-1 text-xs text-[#D1D9E2] sm:text-sm">
                      {statistic.label}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        <section className="bg-white">
          <div className="grid grid-cols-1 items-stretch lg:min-h-[var(--why-desktop-height)] lg:grid-cols-2 md:min-h-[var(--why-tablet-height)]">
            <div className="relative min-h-[260px] overflow-hidden bg-[#EEF5F8] sm:min-h-[360px] lg:min-h-[480px]">
              <Image
                src="/images/why-choose-us-warehouse-exterior.webp"
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center px-5 py-9 sm:px-9 sm:py-12 lg:px-10 xl:px-14" dir={isArabic ? "rtl" : "ltr"}>
              <RevealOnScroll animation="fade-up" duration={700} className="w-full">
                <div className="max-w-2xl">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B84D1B]">
                    {content.commitmentEyebrow}
                  </p>
                  <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2340] sm:text-4xl">
                    {content.supportTitle}
                  </h2>
                  <PatternDivider className="my-4" color="#0A2340" />
                  <p className="text-sm leading-relaxed text-[#66717C] sm:text-base">
                    {content.supportDesc}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
                    {content.commitmentHighlights.map((highlight, index) => {
                      const Icon = COMMITMENT_ICONS[index];
                      return (
                        <div key={highlight.title} className="flex items-start gap-3">
                          <Icon className="mt-0.5 h-7 w-7 shrink-0 text-[#B84D1B]" aria-hidden="true" />
                          <div>
                            <h3 className="font-heading text-sm font-bold leading-snug text-[#0A2340]">
                              {highlight.title}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-[#66717C] sm:text-sm">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#F7F5F0] py-8 text-center sm:py-10">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6" dir={isArabic ? "rtl" : "ltr"}>
            <RevealOnScroll animation="fade-up" duration={700}>
              <h2 className="font-heading text-2xl font-bold text-[#0A2340] sm:text-3xl">
                {content.ctaTitle}
              </h2>
              <p className="mx-auto mb-5 mt-2 max-w-2xl text-sm leading-relaxed text-[#66717C] sm:text-base">
                {content.ctaDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[7px] border border-[#B84D1B] bg-transparent px-6 py-3 font-semibold text-[#B84D1B] transition-colors hover:bg-[#B84D1B]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84D1B]"
              >
                {content.ctaBtn}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
