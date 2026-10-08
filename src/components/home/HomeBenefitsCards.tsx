"use client";

import React from "react";
import Link from "next/link";
import { Warehouse, Layers, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeBenefitsCards() {
  const { t, isArabic } = useLanguage();

  const foodCategories = isArabic
    ? ["فواكه", "خضروات", "لحوم", "دجاج", "مأكولات بحرية"]
    : ["Fruits", "Vegetables", "Meat", "Chicken", "Seafood"];

  const cardConfigs = [
    {
      icon: <Warehouse className="w-8 h-8 text-[#B84D1B]" />,
      buttonHref: "/why-choose-us",
      bgColor: "#FDEFE6",
      iconBgColor: "#F5DDD0",
      hasButton: true,
    },
    {
      icon: <Layers className="w-8 h-8 text-[#12345B]" />,
      buttonHref: "/services",
      bgColor: "#F4FCFD",
      iconBgColor: "#DFEFF3",
      hasButton: true,
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#B84D1B]" />,
      buttonHref: "/contact",
      bgColor: "#FFFAF0",
      iconBgColor: "#F5EAD4",
      hasButton: false, // User requested: Remove get in touch with security team tab
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#12345B]" />,
      buttonHref: "/services",
      bgColor: "#E7F3F7",
      iconBgColor: "#D0E4EC",
      hasButton: true,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cardConfigs.map((config, idx) => {
            const data = t.home.benefits[idx];
            return (
              <RevealOnScroll
                key={idx}
                animation="fade-up"
                delay={idx * 120}
                className="h-full"
              >
                <div
                  className="rounded-[12px] p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-black/5"
                  style={{ backgroundColor: config.bgColor }}
                >
                  <div>
                    <div
                      className="w-14 h-14 rounded-[10px] flex items-center justify-center mb-6 shadow-xs"
                      style={{ backgroundColor: config.iconBgColor }}
                    >
                      {config.icon}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-[26px] font-bold text-[#0A2340] mb-4">
                      {data.title}
                    </h3>

                    <p className="text-[#202B35]/80 text-[15px] sm:text-base leading-relaxed mb-6">
                      {data.desc}
                    </p>

                    {/* Specific category badges for State-of-the-art facilities */}
                    {idx === 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {foodCategories.map((cat, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#B84D1B] border border-[#B84D1B]/20 shadow-xs"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {config.hasButton && (
                    <div className="pt-2">
                      <Link
                        href={config.buttonHref}
                        className="inline-flex items-center gap-2 border-2 border-[#12345B] hover:border-[#B84D1B] text-[#12345B] hover:text-[#B84D1B] hover:bg-white/80 px-5 py-2.5 rounded-[6px] font-semibold text-sm transition-all duration-200 group shadow-xs"
                      >
                        <span>{data.btn}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                      </Link>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
