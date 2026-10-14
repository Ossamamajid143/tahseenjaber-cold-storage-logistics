"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, Headphones, Package, ShieldCheck, Thermometer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HomeSectionEdgeFog } from "@/components/home/HomeSectionEdgeFog";

const OFFERING_ICONS = [Thermometer, ShieldCheck, Package, Headphones];
const OFFERING_COPY = {
  EN: [
    ["Advanced Temperature Control", "Reliable temperature management and continuous monitoring."],
    ["Secure Warehousing", "Protected facilities with around-the-clock security systems."],
    ["Flexible Storage Options", "Warehouse, container, and pallet-based storage solutions."],
    ["Dedicated Customer Support", "Practical assistance for your storage and logistics requirements."],
  ],
  AR: [
    ["تحكم متقدم بدرجات الحرارة", "إدارة موثوقة لدرجات الحرارة ومراقبة مستمرة."],
    ["تخزين آمن", "مرافق محمية وأنظمة أمنية على مدار الساعة."],
    ["خيارات تخزين مرنة", "حلول تخزين للمستودعات والبرادات والطبليات."],
    ["دعم مخصص للعملاء", "مساعدة عملية لاحتياجات التخزين والخدمات اللوجستية."],
  ],
} as const;

export function HomeComprehensiveServices() {
  const { t, isArabic } = useLanguage();
  const sceneRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const offerings = isArabic ? OFFERING_COPY.AR : OFFERING_COPY.EN;

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sceneRef} className={`home-offerings-scene ${isInView ? "is-in-view" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <HomeSectionEdgeFog direction="right" />
      <Image src="/images/home-service-offerings-cinematic.png" alt="" fill priority={false} sizes="100vw" className="home-offerings-photo" />
      <div className="home-offerings-grade" aria-hidden="true" />
      <div className="home-offerings-floor-glow" aria-hidden="true" />
      <div className="home-offerings-fog" aria-hidden="true" />
      <div className="home-offerings-layout">
        <RevealOnScroll className="home-offerings-intro" animation="fade-up" duration={850}>
          <div className="home-cinematic-kicker"><span />{isArabic ? "مزايا خدماتنا" : "Our Key Advantages"}</div>
          <h2 className="home-offerings-title">
            {isArabic ? <>{t.home.comprehensive.title}</> : <>Comprehensive<br /><span>Service</span> Offerings</>}
          </h2>
          <p>{t.home.comprehensive.desc}</p>
          <Link href="/services" className="home-offerings-link">
            <span>{t.home.comprehensive.btn}</span>
            <ArrowRight aria-hidden="true" className={isArabic ? "rotate-180" : ""} />
          </Link>
        </RevealOnScroll>

        <div className="home-offerings-timeline" aria-label={isArabic ? "مزايا خدماتنا" : "Service benefits"}>
          <svg className="home-offerings-path" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
            <path className="home-offerings-path-glow" d="M40 75 C125 75 138 125 250 125 S375 65 500 85 S625 140 750 112 S875 76 960 92" />
            <path className="home-offerings-path-flow" d="M40 75 C125 75 138 125 250 125 S375 65 500 85 S625 140 750 112 S875 76 960 92" />
          </svg>
          <div className="home-offerings-points">
            {offerings.map(([title, description], index) => {
              const Icon = OFFERING_ICONS[index] ?? Activity;
              return (
                <RevealOnScroll key={title} className="home-offering-point" animation="fade-up" delay={index * 100} duration={700}>
                  <div className="home-offering-marker">
                    <span className="home-offering-orbit" />
                    <Icon aria-hidden="true" />
                  </div>
                  <span className="home-offering-connector" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
