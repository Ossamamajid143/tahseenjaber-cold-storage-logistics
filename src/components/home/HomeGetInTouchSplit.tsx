"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeGetInTouchSplit() {
  const { t } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image Box matching Screenshot 4 */}
          <div className="lg:col-span-6">
            <RevealOnScroll animation="slide-left" duration={800}>
              <div className="relative rounded-[10px] overflow-hidden shadow-lg border border-[#12345B]/15 bg-slate-100 aspect-4/3 group">
                <Image
                  src="/images/refrigeration-tech.jpg"
                  alt="Tahseen Jaber Advanced Cold Storage & Refrigeration Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-[#12345B]/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Content matching Screenshot 4 */}
          <div className="lg:col-span-6 lg:pl-4 flex flex-col justify-center">
            <RevealOnScroll animation="fade-up" duration={800} delay={150}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#B84D1B] leading-tight mb-3">
                {t.home.getInTouch.title}
              </h2>

              <PatternDivider className="mb-6" color="#B84D1B" />

              <p className="text-[#202B35]/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {t.home.getInTouch.desc}
              </p>

              {/* Logo and Brand signature underneath matching screenshot */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#12345B]/15 bg-[#F7F5F0] shrink-0 shadow-xs">
                  <Image
                    src={SITE_CONFIG.logoPath}
                    alt={`${SITE_CONFIG.companyName} Logo`}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-[#0A2340] leading-none">
                    {t.brand.fullName}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-[#B84D1B] uppercase mt-1">
                    {t.brand.tagline}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#12345B] hover:text-[#B84D1B] transition-colors group cursor-pointer"
                >
                  <span>{t.home.getInTouch.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
