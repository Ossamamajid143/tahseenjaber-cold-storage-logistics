"use client";

import React from "react";
import { Headphones, Package, ShieldCheck, Thermometer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const HIGHLIGHTS = {
  EN: [
    { title: "Advanced Temperature Control", description: "Reliable temperature management and continuous monitoring.", icon: Thermometer },
    { title: "Secure Warehousing", description: "Protected facilities with around-the-clock security systems.", icon: ShieldCheck },
    { title: "Flexible Storage Options", description: "Warehouse, container, and pallet-based storage solutions.", icon: Package },
    { title: "Dedicated Customer Support", description: "Practical assistance for your storage and logistics requirements.", icon: Headphones },
  ],
  AR: [
    { title: "تحكم متقدم بدرجات الحرارة", description: "إدارة موثوقة لدرجات الحرارة ومراقبة مستمرة.", icon: Thermometer },
    { title: "تخزين آمن", description: "مرافق محمية وأنظمة أمنية على مدار الساعة.", icon: ShieldCheck },
    { title: "خيارات تخزين مرنة", description: "حلول تخزين للمستودعات والبرادات والطبليات.", icon: Package },
    { title: "دعم مخصص للعملاء", description: "مساعدة عملية لاحتياجات التخزين والخدمات اللوجستية.", icon: Headphones },
  ],
} as const;

export function HomeBenefitsCards() {
  const { isArabic } = useLanguage();
  const highlights = isArabic ? HIGHLIGHTS.AR : HIGHLIGHTS.EN;

  return (
    <section className="home-benefits-scene relative isolate overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8" dir={isArabic ? "rtl" : "ltr"}>
      <div className="home-benefits-atmosphere" aria-hidden="true" />
      <div className="home-benefits-glass relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-sky-100/15 rounded-xl border border-sky-100/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {highlights.map(({ title, description, icon: Icon }, index) => (
          <RevealOnScroll key={title} animation="fade-up" delay={index * 90} className="h-full">
            <article className="home-benefit-item group flex h-full items-start gap-4 px-5 py-5 sm:px-6 lg:px-5 xl:px-7">
              <div className="home-benefit-icon shrink-0 text-[#F36A21] transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(243,106,33,0.65)]">
                <Icon aria-hidden="true" className="h-8 w-8 stroke-[1.7]" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold leading-snug text-white">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
