"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

const CAPABILITY_IMAGES = [
  "/images/real-facility/storage-chamber-clean.jpg",
  "/images/real-facility/corridor-refrigerated.jpg",
  "/images/real-facility/storage-room-symmetrical.jpg",
  "/images/home-facility-cinematic.png",
  "/images/real-facility/forklifts-loading-bay.jpg",
  "/images/real-facility/entrance-illuminated.jpg",
] as const;

export function CapabilitiesCards() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className=" bg-white py-16 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up" duration={800}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
            <div className="max-w-3xl">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#12345B]">{t.about.servicesBadge}</span>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2340] sm:text-4xl lg:text-[42px]">{t.about.servicesHeading}</h2>
              <div className="my-5 h-1 w-20 rounded-full bg-[#B84D1B]" />
              <p className="text-base leading-relaxed text-[#66717C] sm:text-lg">{t.about.servicesSub}</p>
            </div>
            <Link href="/services#contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border border-[#D1D7DD] px-5 py-3 text-sm font-semibold text-[#0A2340] transition-colors hover:border-[#B84D1B] hover:text-[#B84D1B]">
              {t.about.discussRequirement}<ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.about.solutions.map((item, index) => (
            <RevealOnScroll key={item.title} animation="fade-up" delay={(index % 3) * 100} className="h-full">
              <Link href={item.href} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E3E8EC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EEF5F8]">
                  <Image src={CAPABILITY_IMAGES[index]} alt={item.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/40 to-transparent opacity-70 transition-opacity group-hover:opacity-40" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-bold text-[#0A2340] sm:text-xl">{item.title}</h3>
                    <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#B84D1B] transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#66717C] sm:text-[15px]">{item.desc}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
