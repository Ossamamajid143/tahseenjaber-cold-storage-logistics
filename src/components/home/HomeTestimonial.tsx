"use client";

import React from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HomeTestimonial() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F7F5F0] py-20 sm:py-28 lg:py-32 border-b border-[#E3E8EC] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Icon Avatar Circle */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-[#12345B]/15 shadow-sm mx-auto flex items-center justify-center mb-8">
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#B84D1B] fill-[#B84D1B]/15" />
        </div>

        {/* Large Testimonial Statement */}
        <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2340] leading-snug tracking-tight mb-8">
          &ldquo;{t.home.testimonial.quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg text-[#B84D1B]">
            {t.home.testimonial.author}
          </p>
          <p className="text-sm text-[#66717C] mt-0.5">
            {t.home.testimonial.role}
          </p>
        </div>
      </div>
    </section>
  );
}
