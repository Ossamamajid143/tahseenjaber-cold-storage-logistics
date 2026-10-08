"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  Snowflake,
  Thermometer,
  Truck,
  Warehouse,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

const ADVANTAGE_ICONS = [
  Thermometer,
  Warehouse,
  Truck,
  PackageCheck,
  Snowflake,
  CheckCircle2,
] as const;

export default function WhyChooseUsPage() {
  const { t, isArabic } = useLanguage();
  const content = t.whyChooseUs;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Keep the original Facilities hero layout and image; only the copy changes. */}
        <PageHero
          title={content.title}
          description={content.desc}
          imageSrc="/images/temperature-storage.jpg"
          imagePosition="center 45%"
        />

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                  {content.heading}
                </h2>
                <PatternDivider className="mx-auto mt-5 mb-6" color="#B84D1B" />
                <p className="text-base sm:text-lg text-[#66717C] leading-relaxed">
                  {content.intro}
                </p>
              </div>
            </RevealOnScroll>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {content.advantages.map((advantage, index) => {
                const Icon = ADVANTAGE_ICONS[index];
                return (
                  <RevealOnScroll
                    key={advantage.title}
                    animation="fade-up"
                    delay={index * 70}
                    className="h-full"
                  >
                    <article className="h-full rounded-lg border border-[#E3E8EC] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="w-12 h-12 rounded-md bg-[#EEF5F8] border border-[#D8E6ED] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#B84D1B]" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A2340] mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                        {advantage.description}
                      </p>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F5F0] border-y border-[#E3E8EC]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden bg-[#EEF5F8]">
              <Image
                src="/images/services-temp-mgmt.jpg"
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 xl:px-20">
              <div className="max-w-xl" dir={isArabic ? "rtl" : "ltr"}>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#B84D1B] leading-tight mb-4">
                  {content.supportTitle}
                </h2>
                <PatternDivider className="mb-6" color="#B84D1B" />
                <p className="text-base sm:text-lg text-[#66717C] leading-relaxed">
                  {content.supportDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0A2340] text-white py-14 sm:py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              {content.ctaTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              {content.ctaDesc}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-6 py-3 rounded-xs transition-colors"
            >
              {content.ctaBtn}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
