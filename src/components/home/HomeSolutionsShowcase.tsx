"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, Package, ShieldCheck, Snowflake, Thermometer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useNavbarHeight } from "@/components/useNavbarHeight";
import { HomeSectionEdgeFog } from "@/components/home/HomeSectionEdgeFog";

const SERVICE_ICONS = [Thermometer, ShieldCheck, Package, Activity];

export function HomeSolutionsShowcase() {
  const { t, isArabic } = useLanguage();
  const navbarHeight = useNavbarHeight();
  const services = [
    ...t.home.pillars,
    {
      tag: isArabic ? "حلول المخزون الذكية" : "Smart Inventory Solutions",
      title: t.home.benefits[3].title,
      desc: t.home.benefits[3].desc,
    },
  ];

  return (
    <section
      className="home-end-to-end relative isolate"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ "--home-viewport-height": `calc(100svh - ${navbarHeight}px)` } as React.CSSProperties}
    >
      <HomeSectionEdgeFog direction="left" />
      <div className="home-end-to-end-copy">
        <div className="home-end-to-end-grid" aria-hidden="true" />
        <div className="home-end-to-end-content">
          <RevealOnScroll animation="fade-up" duration={750}>
            <div className="home-end-to-end-kicker"><span />{isArabic ? "خدماتنا" : "Our Services"}</div>
            <h2 className="home-end-to-end-title">
              {isArabic ? <>حلول التخزين المبرد <span>المتكاملة</span></> : <>End-to-End<br /><span>Cold Storage</span> Solutions</>}
            </h2>
          </RevealOnScroll>

          <div className="home-end-to-end-timeline">
            <span className="home-end-to-end-rail" aria-hidden="true" />
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? Package;
              return (
                <RevealOnScroll
                  key={service.title}
                  className="home-end-to-end-entry"
                  animation={isArabic ? "slide-right" : "slide-left"}
                  delay={index * 90}
                  duration={650}
                >
                  <span className="home-end-to-end-icon"><Icon aria-hidden="true" /></span>
                  <div className="home-end-to-end-entry-copy">
                    <span className="home-end-to-end-tag">{service.tag}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <Link href="/services" className="home-service-cta group">
            <span>{t.home.solutions.btn}</span>
            <ArrowRight aria-hidden="true" className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isArabic ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </Link>
        </div>
      </div>

      <div className="home-end-to-end-warehouse">
        <Image
          src="/images/home-end-to-end-solutions.webp"
          alt={isArabic ? "أبواب غرف التبريد المعزولة ومعدات التبريد ورافعة شوكية في المستودع" : "Insulated cold-room doors, refrigeration equipment, and a forklift inside a cold-storage warehouse"}
          fill
          sizes="(max-width: 800px) 100vw, 52vw"
          className="home-end-to-end-photo"
        />
        <div className="home-end-to-end-photo-grade" aria-hidden="true" />
        <div className="home-end-to-end-floor-mist" aria-hidden="true" />
        <div className="home-end-to-end-monitor home-end-to-end-monitor-main" aria-label={isArabic ? "واجهة توضيحية لدرجة حرارة التخزين المجمد: ناقص 18 درجة مئوية" : "Illustrative frozen-storage temperature interface: minus 18 degrees Celsius"}>
          <div className="home-end-to-end-monitor-heading"><Snowflake /><span>{isArabic ? "تخزين مجمد" : "FROZEN STORAGE"}</span></div>
          <div className="home-end-to-end-monitor-reading"><Snowflake /><strong>−18°C</strong></div>
          <div className="home-end-to-end-monitor-chart"><svg viewBox="0 0 120 42" aria-hidden="true"><path d="M2 34 17 28 30 31 43 19 57 23 70 10 82 17 96 7 108 11 118 3" /></svg></div>
          <div className="home-end-to-end-monitor-note">{isArabic ? "قراءة توضيحية" : "Illustrative reading"}</div>
        </div>
        <div className="home-end-to-end-monitor home-end-to-end-monitor-secondary" aria-label={isArabic ? "واجهة توضيحية لدرجة حرارة المنطقة المبردة: 3 درجات مئوية" : "Illustrative chilled-zone temperature interface: 3 degrees Celsius"}>
          <div className="home-end-to-end-monitor-heading"><Thermometer /><span>{isArabic ? "المنطقة المبردة" : "CHILLED ZONE"}</span></div>
          <div className="home-end-to-end-monitor-reading"><Thermometer /><strong>3°C</strong></div>
          <div className="home-end-to-end-monitor-chart"><svg viewBox="0 0 120 42" aria-hidden="true"><path d="M2 34 17 28 30 31 43 19 57 23 70 10 82 17 96 7 108 11 118 3" /></svg></div>
          <div className="home-end-to-end-monitor-note">{isArabic ? "قراءة توضيحية" : "Illustrative reading"}</div>
        </div>
      </div>
    </section>
  );
}
