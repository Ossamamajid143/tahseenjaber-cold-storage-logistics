import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES_LIST } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services | Tahseen Jaber Cold Storage",
  description:
    "Explore our temperature-controlled storage, industrial warehousing, cold-chain support, and agricultural produce preservation services.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
                <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
                <span>Our Services</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2340] leading-tight tracking-tight">
                Cold storage solutions{" "}
                <span className="text-[#B84D1B] block sm:inline">
                  engineered for precision.
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#66717C] leading-relaxed">
                Reliable temperature preservation, high-density warehousing, and seamless
                cross-dock logistics structured around your supply chain requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Services List (Horizontal rows, zero card grids) */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-[#E3E8EC]">
              {SERVICES_LIST.map((service) => (
                <div
                  key={service.id}
                  className="py-12 sm:py-16 border-b border-[#E3E8EC] transition-colors duration-300 hover:bg-[#EEF5F8]/40 px-4 sm:px-8 rounded-[8px] group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Number, Title, Badge */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-heading text-2xl sm:text-3xl font-black text-[#B84D1B]">
                          {service.number}
                        </span>
                        <span className="text-xs font-semibold text-[#12345B] uppercase tracking-wider bg-[#12345B]/10 px-2.5 py-1 rounded-[4px]">
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A2340] group-hover:text-[#12345B] transition-colors">
                        {service.title}
                      </h2>
                    </div>

                    {/* Middle: Short Description & Bullet Highlights */}
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-base text-[#66717C] leading-relaxed">
                        {service.shortDesc}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202B35]">
                            <span className="w-4 h-4 rounded-full bg-[#12345B]/10 text-[#12345B] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Inquire Action */}
                    <div className="lg:col-span-2 flex lg:justify-end items-center pt-4 lg:pt-0">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#12345B] group-hover:text-[#B84D1B] transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Large Visual Photography Showcase */}
        <section className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/9 sm:aspect-21/9 group">
              <Image
                src="/images/temperature-storage.jpg"
                alt="Tahseen Jaber Temperature-Controlled Cold Storage"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0A2340] text-white py-20 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Need custom storage terms or pallet allocation?
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Contact our facility team today to discuss capacity availability and receiving schedules.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold px-7 py-3.5 rounded-[7px] transition-all shadow-md hover:shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
