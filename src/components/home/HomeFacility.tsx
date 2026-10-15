"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Thermometer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useNavbarHeight } from "@/components/useNavbarHeight";
import { HomeSectionEdgeFog } from "@/components/home/HomeSectionEdgeFog";

export function HomeFacility() {
  const { t, isArabic } = useLanguage();
  const facility = t.home.benefits[0];
  const monitorRef = useRef<HTMLDivElement | null>(null);
  const navbarHeight = useNavbarHeight();
  const foodCategories = isArabic
    ? ["فواكه", "خضروات", "لحوم", "دجاج", "مأكولات بحرية"]
    : ["Fruits", "Vegetables", "Meat", "Chicken", "Seafood"];

  return (
    <section
      className="home-facility-scene relative isolate overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ "--facility-available-height": `calc(100svh - ${navbarHeight}px)` } as React.CSSProperties}
    >
      <HomeSectionEdgeFog direction="left" />
      <div className="grid grid-cols-1 lg:grid-cols-[44%_56%]">
        <div className="home-facility-copy relative z-10 flex items-center px-6 py-14 sm:px-10 lg:px-12 xl:pl-[max(3rem,calc((100vw-1280px)/2))] xl:pr-12">
          <RevealOnScroll animation={isArabic ? "slide-right" : "slide-left"} duration={850}>
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F36A21]">
                <span className="h-[2px] w-6 bg-[#F36A21]" />
                <span>{isArabic ? "منشأتنا" : "Our Facility"}</span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-[40px]">
                {isArabic ? (
                  <span className="text-white">{facility.title}</span>
                ) : (
                  <>
                    <span className="block text-[#F36A21]">State-of-the-Art</span>
                    <span className="block text-white">Facilities</span>
                  </>
                )}
              </h2>
              <p className="mt-4 max-w-[540px] text-sm leading-[1.55] text-slate-200 sm:text-[15px]">{facility.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2" aria-label={isArabic ? "أنواع المنتجات" : "Product categories"}>
                {foodCategories.map((category) => (
                  <span key={category} className="rounded-full border border-[#F36A21]/60 bg-[#061628]/35 px-3 py-1 text-[11px] font-medium text-slate-100">{category}</span>
                ))}
              </div>
              <Link href="/why-choose-us" className="home-service-cta group">
                <span>{facility.btn}</span>
                <ArrowRight aria-hidden="true" className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isArabic ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll animation="image-reveal" duration={1000} className="home-facility-image group relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/images/home-facility-cinematic.webp"
            alt={isArabic ? "مستودع تبريد بإضاءة صناعية ورفوف منتجات ومراوح تبريد" : "Bright refrigerated warehouse with ceiling cooling fans, produce pallets, and a reflective floor"}
            fill
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="home-parallax-image object-cover object-[64%_center] transition-transform duration-[1200ms] group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
          />
          <div className="home-facility-image-grade absolute inset-0" aria-hidden="true" />
          <div
            ref={monitorRef}
            className="home-temperature-panel absolute bottom-5 right-4 z-10 w-[196px] p-3 text-white sm:bottom-auto sm:right-[7%] sm:top-1/2 sm:w-[204px] sm:-translate-y-1/2"
            onPointerMove={(event) => {
              if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width - 0.5;
              const y = (event.clientY - bounds.top) / bounds.height - 0.5;
              event.currentTarget.style.setProperty("--monitor-rotate-x", `${(-y * 3).toFixed(2)}deg`);
              event.currentTarget.style.setProperty("--monitor-rotate-y", `${(x * 3).toFixed(2)}deg`);
            }}
            onPointerLeave={() => {
              monitorRef.current?.style.setProperty("--monitor-rotate-x", "0deg");
              monitorRef.current?.style.setProperty("--monitor-rotate-y", "0deg");
            }}
          >
            <div className="home-temperature-heading text-[9px] font-bold uppercase leading-[1.45] tracking-[0.08em] text-cyan-50">
              {isArabic ? <span>تحكم دقيق بدرجة الحرارة</span> : <><span>Precise</span><span>Temperature Control</span></>}
            </div>
            <div className="home-temperature-divider mt-2" />
            <div className="home-temperature-readout mt-2 flex items-center justify-between gap-2">
              <Thermometer aria-hidden="true" className="home-temperature-icon h-9 w-7 shrink-0 text-cyan-300" />
              <span className="font-heading text-[34px] font-semibold leading-none tracking-tight text-white">3°C</span>
              <svg aria-hidden="true" viewBox="0 0 54 27" className="home-temperature-chart h-7 w-[54px] shrink-0 text-cyan-300">
                <path d="M1 23h52M1 5h52" stroke="currentColor" strokeOpacity=".2" />
                <path className="home-temperature-chart-line" d="M2 20 9 18 14 20 20 12 26 15 32 9 37 12 43 5 52 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <svg aria-hidden="true" viewBox="0 0 148 25" className="home-temperature-wave mt-1 h-[22px] w-full text-cyan-300">
              <path d="M1 21h146" stroke="currentColor" strokeOpacity=".2" />
              <path className="home-temperature-wave-line" d="M2 17h13l4-2 4 5 5-15 5 18 5-8h12l4-2 4 6 4-14 5 17 5-8h15l4-2 4 5 5-10 5 14 5-5h10l4-2 4 1 4-6 4 8h9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mt-1 flex items-center justify-between gap-2 text-[8px] leading-tight text-sky-50/75">
              <span>{isArabic ? "قراءة توضيحية · مبرد" : "Illustrative chilled-zone reading"}</span>
              <span className="home-temperature-status h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            </div>
          </div>
          <div className="home-facility-edge-fog pointer-events-none absolute inset-x-0 bottom-0 h-28" aria-hidden="true" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
