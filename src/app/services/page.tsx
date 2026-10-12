"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  X,
  Warehouse,
  Snowflake,
  Thermometer,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleMapsLocation } from "@/components/GoogleMapsLocation";

const SERVICE_SECTION_IMAGES = [
  "/images/service-cold-storage-leasing.webp",
  "/images/service-cold-chain-delivery.webp",
  "/images/service-import-export.webp",
  "/images/service-consignment-sale.webp",
] as const;

const FACILITY_GALLERY_IMAGES = [
  "/images/about-cold-storage-room.webp",
  "/images/refrigeration-tech.jpg",
  "/images/facility-loading-bays.png",
  "/images/cold-storage-warehouse-floor.jpg",
  "/images/facility-exterior-wide.png",
  "/images/facility-front-entry-truck.png",
] as const;

// Vectors matching user request and website theme (Navy #0A2340, Rust #B84D1B, Slate, Ice)
function VectorThermometer() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="64" height="64" rx="10" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="2" />
      {/* Thermometer Tube */}
      <rect x="23" y="16" width="10" height="34" rx="5" className="fill-white stroke-[#0A2340]" strokeWidth="2" />
      <circle cx="28" cy="54" r="9" className="fill-[#B84D1B] stroke-[#0A2340]" strokeWidth="2" />
      <rect x="26" y="30" width="4" height="18" rx="2" className="fill-[#B84D1B]" />
      {/* Temperature Level Ticks */}
      <path d="M37 22h6M37 28h8M37 34h6M37 40h8" stroke="#0A2340" strokeWidth="2" strokeLinecap="round" />
      {/* Cold Snowflake Accent */}
      <path d="M57 20v14M50 27h14M52 22l10 10M62 22l-10 10" stroke="#12345B" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="57" cy="27" r="2" fill="#B84D1B" />
      {/* Sub-zero indicator */}
      <rect x="47" y="44" width="20" height="13" rx="3" fill="#0A2340" />
      <text x="57" y="54" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-18°C</text>
    </svg>
  );
}

function VectorInventory() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="64" height="64" rx="10" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="2" />
      {/* Document / Clipboard */}
      <rect x="18" y="16" width="30" height="42" rx="4" className="fill-white stroke-[#0A2340]" strokeWidth="2" />
      <line x1="24" y1="24" x2="38" y2="24" stroke="#B84D1B" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="42" y2="30" stroke="#66717C" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="24" y1="36" x2="38" y2="36" stroke="#66717C" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="24" y1="42" x2="32" y2="42" stroke="#66717C" strokeWidth="1.75" strokeLinecap="round" />
      {/* Barcode lines */}
      <rect x="24" y="47" width="2" height="4" fill="#0A2340" />
      <rect x="28" y="47" width="3" height="4" fill="#0A2340" />
      <rect x="33" y="47" width="1" height="4" fill="#0A2340" />
      <rect x="36" y="47" width="3" height="4" fill="#0A2340" />
      {/* Magnifying Glass */}
      <circle cx="50" cy="46" r="13" className="fill-white stroke-[#0A2340]" strokeWidth="2.5" />
      <circle cx="50" cy="46" r="8.5" className="fill-[#B84D1B]/15 stroke-[#B84D1B]" strokeWidth="1.5" />
      <line x1="59" y1="55" x2="68" y2="64" stroke="#0A2340" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function VectorSecurity() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="64" height="64" rx="10" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="2" />
      {/* CCTV / Screen Monitor */}
      <rect x="18" y="19" width="44" height="30" rx="4" className="fill-white stroke-[#0A2340]" strokeWidth="2" />
      {/* Monitor Stand */}
      <path d="M35 49h10v6H35z" className="fill-[#0A2340]" />
      <line x1="27" y1="55" x2="53" y2="55" stroke="#0A2340" strokeWidth="2.5" strokeLinecap="round" />
      {/* Monitored Eye Icon in Screen */}
      <path d="M25 34c3.5-5.5 9.5-7.5 15-7.5s11.5 2 15 7.5c-3.5 5.5-9.5 7.5-15 7.5s-11.5-2-15-7.5z" className="stroke-[#0A2340]" strokeWidth="1.75" />
      <circle cx="40" cy="34" r="5" className="fill-[#B84D1B] stroke-[#0A2340]" strokeWidth="1.5" />
      <circle cx="41.5" cy="32.5" r="1.5" fill="white" />
      {/* Live recording blink dot */}
      <circle cx="24" cy="24" r="2.5" fill="#E11D48" />
    </svg>
  );
}

function VectorStorage() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="64" height="64" rx="10" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="2" />
      {/* Upright steel posts */}
      <rect x="18" y="16" width="3.5" height="48" rx="1" fill="#0A2340" />
      <rect x="58.5" y="16" width="3.5" height="48" rx="1" fill="#0A2340" />
      <rect x="38" y="16" width="3.5" height="48" rx="1" fill="#0A2340" />
      {/* Horizontal rack beams in Brand Rust */}
      <rect x="18" y="32" width="44" height="3" fill="#B84D1B" />
      <rect x="18" y="48" width="44" height="3" fill="#B84D1B" />
      <rect x="18" y="62" width="44" height="2.5" fill="#0A2340" />
      {/* Stored Pallets / Crates */}
      <rect x="23" y="21" width="13" height="11" rx="1.5" className="fill-[#D86A2D]/25 stroke-[#B84D1B]" strokeWidth="1.5" />
      <rect x="43.5" y="22" width="13" height="10" rx="1.5" className="fill-[#EEF5F8] stroke-[#12345B]" strokeWidth="1.5" />
      <rect x="23" y="37" width="13" height="11" rx="1.5" className="fill-[#EEF5F8] stroke-[#0A2340]" strokeWidth="1.5" />
      <rect x="43.5" y="36" width="13" height="12" rx="1.5" className="fill-[#D86A2D]/25 stroke-[#B84D1B]" strokeWidth="1.5" />
    </svg>
  );
}

export default function ServicesPage() {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const { t, language } = useLanguage();
  const [formIssue, setFormIssue] = useState<"required" | "email" | "backend" | null>(null);
  const [specificationsStarted, setSpecificationsStarted] = useState(false);
  const [specificationCounts, setSpecificationCounts] = useState({
    pallets: 0,
    coldRooms: 0,
    lowerTemperature: 0,
    upperTemperature: 0,
  });
  const specificationsRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormIssue("required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFormIssue("email");
      return;
    }
    setFormIssue("backend");
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const section = specificationsRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setSpecificationsStarted(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpecificationsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!specificationsStarted) return;

    const finalCounts = {
      pallets: 100,
      coldRooms: 18,
      lowerTemperature: -20,
      upperTemperature: 16,
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setSpecificationCounts(finalCounts));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 1800;
    let startTime: number | null = null;
    let animationFrame = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setSpecificationCounts({
        pallets: Math.round(finalCounts.pallets * easedProgress),
        coldRooms: Math.round(finalCounts.coldRooms * easedProgress),
        lowerTemperature: Math.round(finalCounts.lowerTemperature * easedProgress),
        upperTemperature: Math.round(finalCounts.upperTemperature * easedProgress),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setSpecificationCounts(finalCounts);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [specificationsStarted]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION (Matches your attached Services screenshot)
            - Heading: Translated "Services" / "خدماتنا"
            - Specific subtitle text from screenshot
            - Dual gradient: Rust (#A2461A) to Cold Green (#146040)
            - Breadcrumb: "Home / Services" right-aligned
            - Atmospheric bottom mist / fog overlay
        ====================================================================== */}
        <PageHero
          title={t.servicesPage.heroTitle}
          description={t.servicesPage.heroDesc}
          imageSrc="/images/contact-dock-forklift.jpg"
          imagePosition="center 45%"
          fogIntensity="moderate"
        />

        {/* =====================================================================
            2. RELIABLE COLD STORAGE SOLUTIONS + 4 VECTORS & BOXES
            - Replaces numbers (76, 145, 56, 68) with theme Vectors as requested
            - Keeps Reliable Cold Storage Solution info intact
            - Removes the comment of clients (testimonials removed as marked with red X)
            - Moves the 4 boxes under the given vectors:
                * Box 1: Temperature-Controlled Environments (No button)
                * Box 2: Advanced Inventory Management (No button)
                * Box 3: Secure Storage Facilities (Keeps "Get in touch with us" button -> scrolls to #contact)
                * Box 4: Flexible Storage Options (Keeps "Explore our pricing plans" button)
        ====================================================================== */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Reliable Cold Storage Solution Header & Info */}
            <div className="max-w-3xl mb-12 sm:mb-14">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2340] tracking-tight mb-3">
                {t.servicesPage.reliableHeading}
              </h2>

              {/* Decorative separator */}
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 100 20"
                  width="90"
                  className="fill-[#B84D1B]"
                  role="img"
                  aria-label="separator"
                >
                  <path d="m2 8h64c1.1 0 2 .9 2 2s-.9 2-2 2h-64c-1.1 0-2-.9-2-2s.9-2 2-2zm72 0h16c1.1 0 2 .9 2 2s-.9 2-2 2h-16c-1.1 0-2-.9-2-2s.9-2 2-2zm24 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                </svg>
              </div>

              <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                {t.servicesPage.reliableDesc}
              </p>
            </div>

            {/* The Four Boxes Under The Given Vectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">

              {/* Box 1 Under Vector 1: Temperature-Controlled Environments (No button) */}
              <div className="flex flex-col p-7 rounded-xl border border-[#E3E8EC] bg-white hover:border-[#B84D1B]/40 hover:shadow-md transition-all duration-200">
                <div className="mb-5 flex justify-center sm:justify-start">
                  <VectorThermometer />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A2340] mb-2.5">
                  {t.servicesPage.box1Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed flex-1">
                  {t.servicesPage.box1Desc}
                </p>
              </div>

              {/* Box 2 Under Vector 2: Advanced Inventory Management (No button) */}
              <div className="flex flex-col p-7 rounded-xl border border-[#E3E8EC] bg-white hover:border-[#B84D1B]/40 hover:shadow-md transition-all duration-200">
                <div className="mb-5 flex justify-center sm:justify-start">
                  <VectorInventory />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A2340] mb-2.5">
                  {t.servicesPage.box2Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed flex-1">
                  {t.servicesPage.box2Desc}
                </p>
              </div>

              {/* Box 3 Under Vector 3: Secure and Monitored Access (Keeps 'Get in touch with us' button) */}
              <div className="flex flex-col p-7 rounded-xl border border-[#E3E8EC] bg-white hover:border-[#B84D1B]/40 hover:shadow-md transition-all duration-200">
                <div className="mb-5 flex justify-center sm:justify-start">
                  <VectorSecurity />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A2340] mb-2.5">
                  {t.servicesPage.box3Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed mb-6 flex-1">
                  {t.servicesPage.box3Desc}
                </p>
                <div>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#B84D1B] hover:text-[#A34215] transition-colors group cursor-pointer"
                  >
                    <span>{t.servicesPage.box3Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                  </a>
                </div>
              </div>

              {/* Box 4 Under Vector 4: Flexible Storage Options (Keeps 'Explore our pricing plans' button) */}
              <div className="flex flex-col p-7 rounded-xl border border-[#E3E8EC] bg-white hover:border-[#B84D1B]/40 hover:shadow-md transition-all duration-200">
                <div className="mb-5 flex justify-center sm:justify-start">
                  <VectorStorage />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A2340] mb-2.5">
                  {t.servicesPage.box4Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed mb-6 flex-1">
                  {t.servicesPage.box4Desc}
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => setPricingModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#B84D1B] hover:text-[#A34215] transition-colors group cursor-pointer"
                  >
                    <span>{t.servicesPage.box4Btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Alternating service sections with large, full-bleed imagery. */}
        {t.servicesPage.serviceSections.map((service, index) => {
          const imageIsLeft = index % 2 === 0;
          return (
            <section key={service.title} dir="ltr" className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-white border-b border-[#E3E8EC]">
              <RevealOnScroll
                animation="fade-in"
                duration={900}
                className={`relative order-1 h-[clamp(280px,62vw,400px)] overflow-hidden bg-[#EEF5F8] ${imageIsLeft ? "lg:order-1" : "lg:order-2"} lg:h-auto lg:min-h-[75vh]`}
              >
                <Image
                  src={SERVICE_SECTION_IMAGES[index]}
                  alt={service.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </RevealOnScroll>

              <div dir={language === "AR" ? "rtl" : "ltr"} className={`flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 py-12 lg:py-20 ${imageIsLeft ? "lg:order-2" : "lg:order-1"}`}>
                <RevealOnScroll animation="fade-up" duration={800} delay={150} className="w-full max-w-2xl mx-auto">
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#B84D1B] leading-tight mb-4">
                    {service.title}
                  </h2>
                  <PatternDivider className="mb-6" color="#12345B" />
                  <p className="text-[#66717C] text-base sm:text-lg leading-[1.7]">
                    {service.description}
                  </p>
                  {service.suitableFor && (
                    <div className="mt-7">
                      <h3 className="font-heading text-base sm:text-lg font-semibold text-[#0A2340] mb-4">
                        {t.servicesPage.suitableForLabel}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.suitableFor.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#66717C] leading-relaxed">
                            <CheckCircle2 aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5 text-[#B84D1B]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </RevealOnScroll>
              </div>
            </section>
          );
        })}

        {/* Facilities information moved from the former Facilities page. */}
        <section className="bg-[#F7F5F0] border-b border-[#E3E8EC] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] tracking-tight mb-4">
                {t.servicesPage.facilitySection.title}
              </h2>
              <PatternDivider className="mb-5" color="#B84D1B" />
              <p className="text-base sm:text-lg text-[#66717C] leading-relaxed">
                {t.servicesPage.facilitySection.description}
              </p>
            </div>

            <h3 id="facility-gallery" className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340] mb-6 scroll-mt-24">
              {t.servicesPage.facilitySection.galleryTitle}
            </h3>
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {t.servicesPage.facilitySection.gallery.map((item, index) => (
                <article key={item.title} className="group overflow-hidden rounded-lg border border-[#E3E8EC] bg-white shadow-xs hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EEF5F8]">
                    <Image
                      src={FACILITY_GALLERY_IMAGES[index]}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#0A2340] px-4 py-4 sm:px-5">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>

            <section
              ref={specificationsRef}
              aria-labelledby="facility-specifications-heading"
              className="relative left-1/2 -ml-[50vw] mt-10 w-screen bg-[#F7F5F0] py-8 arch-grid-pattern sm:mt-12 sm:py-10"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3
                  id="facility-specifications-heading"
                  className="mb-4 font-heading text-xl font-bold text-[#0A2340] sm:text-2xl"
                >
                  {t.servicesPage.facilitySection.specificationsTitle}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                  {t.servicesPage.facilitySection.specifications.map((specification, index) => {
                    const Icon = [Warehouse, Snowflake, Thermometer][index];
                    return (
                      <article
                        key={specification.label}
                        className="flex h-full min-h-[165px] flex-col rounded-lg border border-[#E3E8EC] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
                      >
                        <Icon
                          className="mb-4 h-7 w-7 shrink-0 text-[#B84D1B] stroke-[1.75]"
                          aria-hidden="true"
                        />
                        <p className="min-h-[1.2em] font-heading text-[28px] font-bold leading-tight text-[#0A2340] tabular-nums sm:text-3xl lg:text-[32px] xl:text-4xl">
                          {index === 0 && (
                            <span className="whitespace-nowrap">
                              {specificationCounts.pallets} Pallets
                            </span>
                          )}
                          {index === 1 && specificationCounts.coldRooms}
                          {index === 2 && (
                            <span>
                              {specificationCounts.lowerTemperature}°C to +{specificationCounts.upperTemperature}°C
                            </span>
                          )}
                        </p>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-[#66717C] sm:text-base">
                          {specification.label}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <div id="facility-infrastructure" className="mt-14 sm:mt-16 border-t border-[#DDE3E8] pt-8 scroll-mt-24">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340] mb-6">
                {t.servicesPage.facilitySection.infrastructureTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {t.servicesPage.facilitySection.infrastructure.map((area) => (
                  <div key={area.name} className="border-b border-[#DDE3E8] py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#B84D1B] mb-1">{area.category}</p>
                    <p className="font-heading text-base sm:text-lg font-semibold text-[#0A2340]">{area.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services page contact form */}
        <section id="contact" className="bg-white scroll-mt-20">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden bg-[#EEF5F8] sm:min-h-[380px] lg:min-h-[620px]">
              <Image
                src="/images/services-contact-warehouse.jpg"
                alt={t.servicesPage.contactImageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div
              className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-20"
              dir={language === "AR" ? "rtl" : "ltr"}
            >
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#B84D1B] sm:text-4xl">
                {t.servicesPage.contactHeading}
              </h2>
              <PatternDivider className="mb-7 mt-3" color="#B84D1B" />

              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="services-contact-name" className="sr-only">
                    {t.servicesPage.contactNameLabel}
                  </label>
                  <input
                    id="services-contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={formIssue === "required"}
                    placeholder={t.servicesPage.contactNamePlaceholder}
                    value={formData.name}
                    dir={language === "AR" ? "rtl" : "ltr"}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setFormIssue(null);
                    }}
                    className="w-full border-0 border-b border-[#D1D7DD] bg-transparent px-0 py-3.5 text-base text-[#202B35] placeholder:text-[#8895A2] focus:border-[#B84D1B] focus:outline-hidden focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#B84D1B]/30"
                  />
                </div>

                <div>
                  <label htmlFor="services-contact-email" className="sr-only">
                    {t.servicesPage.contactEmailLabel}
                  </label>
                  <input
                    id="services-contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={formIssue === "required" || formIssue === "email"}
                    placeholder={t.servicesPage.contactEmailPlaceholder}
                    value={formData.email}
                    dir="ltr"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setFormIssue(null);
                    }}
                    className="w-full border-0 border-b border-[#D1D7DD] bg-transparent px-0 py-3.5 text-base text-[#202B35] placeholder:text-[#8895A2] focus:border-[#B84D1B] focus:outline-hidden focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#B84D1B]/30"
                  />
                </div>

                <div>
                  <label htmlFor="services-contact-message" className="sr-only">
                    {t.servicesPage.contactMessageLabel}
                  </label>
                  <textarea
                    id="services-contact-message"
                    name="message"
                    rows={5}
                    required
                    aria-invalid={formIssue === "required"}
                    placeholder={t.servicesPage.contactMessagePlaceholder}
                    value={formData.message}
                    dir={language === "AR" ? "rtl" : "ltr"}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setFormIssue(null);
                    }}
                    className="w-full resize-y border-0 border-b border-[#D1D7DD] bg-transparent px-0 py-3.5 text-base text-[#202B35] placeholder:text-[#8895A2] focus:border-[#B84D1B] focus:outline-hidden focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#B84D1B]/30"
                  />
                </div>

                {formIssue && (
                  <p role="alert" className="text-sm text-[#A34215]">
                    {formIssue === "required" && t.servicesPage.contactRequiredError}
                    {formIssue === "email" && t.servicesPage.contactEmailError}
                    {formIssue === "backend" && t.servicesPage.contactBackendNotice}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xs bg-[#B84D1B] px-6 py-4 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#A34215] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2340] active:scale-[0.99]"
                >
                  {t.servicesPage.contactSendBtn}
                </button>

                <p className="pt-2 text-sm text-[#8A95A0]">
                  {t.servicesPage.contactConfidential}
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. FACILITY DIRECTIONS
            - Displayed directly below Contact Information section
        ====================================================================== */}
        <section
          aria-label={t.contact.directionsHeading}
          className="w-full border-t border-[#E3E8EC] bg-white"
        >
          <div className="w-full">
            <GoogleMapsLocation
              title={t.contact.directionsHeading}
              directionsLabel={t.contact.mapDirectionsLabel}
              showDirections={false}
              mapClassName="h-[240px] sm:h-[280px] lg:h-[320px]"
            />
          </div>
        </section>

        {/* Interactive Pricing Plans Modal */}
        {pricingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-[#E3E8EC]">
              <button
                type="button"
                onClick={() => setPricingModalOpen(false)}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-[#66717C] hover:text-[#0A2340] rounded-full hover:bg-[#EEF5F8] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEF5F8] border border-[#D8E6ED] flex items-center justify-center text-[#B84D1B]">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0A2340]">
                  {t.servicesPage.pricingModalTitle}
                </h3>
              </div>

              <p className="text-sm text-[#5C6773] leading-relaxed mb-6">
                {t.servicesPage.pricingModalDesc}
              </p>

              <div className="space-y-3 bg-[#FAF7F2] p-4 rounded-lg border border-[#E5DDD0] mb-6 text-xs text-[#202B35]">
                <div className="flex justify-between font-semibold pb-2 border-b border-[#E5DDD0]">
                  <span>{t.servicesPage.pricingTierCol}</span>
                  <span>{t.servicesPage.pricingTermsCol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66717C]">{t.servicesPage.pricingTier1}</span>
                  <span className="font-medium">{t.servicesPage.pricingTerms1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66717C]">{t.servicesPage.pricingTier2}</span>
                  <span className="font-medium">{t.servicesPage.pricingTerms2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66717C]">{t.servicesPage.pricingTier3}</span>
                  <span className="font-medium">{t.servicesPage.pricingTerms3}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setPricingModalOpen(false);
                    scrollToContact(e);
                  }}
                  className="flex-1 text-center bg-[#B84D1B] hover:bg-[#A34215] text-white text-xs font-semibold py-3 px-4 rounded-sm transition-colors"
                >
                  {t.servicesPage.pricingRequestBtn}
                </a>
                <button
                  type="button"
                  onClick={() => setPricingModalOpen(false)}
                  className="sm:w-auto text-center border border-[#D1D7DD] text-[#202B35] hover:bg-slate-50 text-xs font-semibold py-3 px-4 rounded-sm transition-colors"
                >
                  {t.servicesPage.pricingCloseBtn}
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
