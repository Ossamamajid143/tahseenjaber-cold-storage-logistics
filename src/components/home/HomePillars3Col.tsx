"use client";

import React from "react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

function VectorTemperaturePillar() {
  return (
    <svg className="w-14 h-14 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="1.5" />
      {/* Thermometer Tube */}
      <rect x="20" y="14" width="8" height="26" rx="4" className="fill-white stroke-[#0A2340]" strokeWidth="1.75" />
      <circle cx="24" cy="44" r="7" className="fill-[#B84D1B] stroke-[#0A2340]" strokeWidth="1.75" />
      <rect x="22.5" y="26" width="3" height="14" rx="1.5" className="fill-[#B84D1B]" />
      {/* Ticks */}
      <line x1="31" y1="18" x2="36" y2="18" stroke="#0A2340" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="31" y1="24" x2="38" y2="24" stroke="#0A2340" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="31" y1="30" x2="36" y2="30" stroke="#0A2340" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cold Snowflake Accent */}
      <path d="M46 16v10M41 21h10M42 17l8 8M50 17l-8 8" stroke="#12345B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="46" cy="21" r="1.5" fill="#B84D1B" />
      {/* Badge */}
      <rect x="38" y="36" width="18" height="11" rx="3" fill="#0A2340" />
      <text x="47" y="44.5" fill="white" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">-18°C</text>
    </svg>
  );
}

function VectorSecurityPillar() {
  return (
    <svg className="w-14 h-14 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="1.5" />
      {/* Shield */}
      <path
        d="M32 14l14 5.5v12.5c0 10.5-6.5 17.5-14 20-7.5-2.5-14-9.5-14-20V19.5L32 14z"
        className="fill-white stroke-[#0A2340]"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Inner Lock Accent */}
      <rect x="27" y="31" width="10" height="8" rx="2" className="fill-[#B84D1B]" />
      <path d="M29 31v-3a3 3 0 0 1 6 0v3" stroke="#0A2340" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="32" cy="35" r="1" fill="white" />
      {/* Safety Star Accent */}
      <path d="M46 14l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#D86A2D" />
    </svg>
  );
}

function VectorStoragePillar() {
  return (
    <svg className="w-14 h-14 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" className="fill-[#EEF5F8] stroke-[#D8E6ED]" strokeWidth="1.5" />
      {/* Pallet Rack Structure */}
      <rect x="14" y="16" width="36" height="34" rx="3" className="fill-white stroke-[#0A2340]" strokeWidth="1.75" />
      <line x1="14" y1="33" x2="50" y2="33" stroke="#0A2340" strokeWidth="1.75" />
      <line x1="32" y1="16" x2="32" y2="50" stroke="#0A2340" strokeWidth="1.75" />
      {/* Modular Boxes */}
      <rect x="18" y="21" width="10" height="8" rx="1.5" className="fill-[#B84D1B]" />
      <rect x="36" y="21" width="10" height="8" rx="1.5" className="fill-[#12345B]" />
      <rect x="18" y="38" width="10" height="8" rx="1.5" className="fill-[#12345B]" />
      <rect x="36" y="38" width="10" height="8" rx="1.5" className="fill-[#B84D1B]" />
      {/* Forklift Tine Guide */}
      <line x1="20" y1="25" x2="26" y2="25" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="38" y1="42" x2="44" y2="42" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function HomePillars3Col() {
  const { t } = useLanguage();
  const pillars = t.home.pillars;

  const pillarVectors = [
    <VectorTemperaturePillar key="temp" />,
    <VectorSecurityPillar key="sec" />,
    <VectorStoragePillar key="stor" />,
  ];

  return (
    <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E3E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((item, index) => (
            <RevealOnScroll
              key={index}
              animation="fade-up"
              delay={index * 150}
              className="flex flex-col group"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                {pillarVectors[index]}

                <span className="text-base sm:text-lg font-semibold text-[#12345B] mb-2 tracking-normal block">
                  {item.tag}
                </span>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#B84D1B] leading-tight mb-3">
                  {item.title}
                </h2>

                <PatternDivider className="mb-6" color="#B84D1B" />

                <p className="text-[#202B35]/80 text-[15px] sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
