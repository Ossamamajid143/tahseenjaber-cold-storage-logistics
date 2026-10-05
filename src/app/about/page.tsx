import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Tahseen Jaber Cold Storage",
  description:
    "Learn about Tahseen Jaber Cold Storage, our commitment to product protection, and our dependable cold-chain logistics infrastructure.",
};

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Thermal Continuity",
      text: "From incoming truck docks to regulated chambers, our facility is engineered to prevent thermal shocks that compromise shelf life.",
    },
    {
      number: "02",
      title: "Quality Preservation",
      text: "We protect the texture, moisture, and market value of perishable goods through calibrated humidity and air circulation.",
    },
    {
      number: "03",
      title: "Disciplined Logistics",
      text: "Strict intake verification, orderly pallet staging, and prompt dock turnarounds ensure seamless freight handoffs.",
    },
    {
      number: "04",
      title: "Client Partnership",
      text: "We structure our storage allocation around harvest seasonality, supply fluctuations, and commercial distributor timelines.",
    },
  ];

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
                <span>About Tahseen Jaber</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2340] leading-tight tracking-tight">
                Built around reliability.{" "}
                <span className="text-[#B84D1B] block sm:inline">
                  Dedicated to preservation.
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#66717C] leading-relaxed">
                Tahseen Jaber Cold Storage provides dependable temperature-controlled
                warehousing designed to safeguard perishables and support efficient supply chains.
              </p>
            </div>
          </div>
        </section>

        {/* Large Facility Exterior Image */}
        <section className="bg-[#F7F5F0] py-12 sm:py-16 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[12px] overflow-hidden border border-[#12345B]/15 shadow-xl bg-slate-100 aspect-16/9 sm:aspect-21/9 group">
              <Image
                src="/images/facility-exterior.jpg"
                alt="Tahseen Jaber Modern Cold Storage Logistics Facility"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Company Purpose & Narrative */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                  Our Mission
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                  Safeguarding perishable value from storage to supply.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#66717C] leading-relaxed">
                <p>
                  Cold storage is more than square footage—it is an active defense against
                  product degradation. Agricultural commodities and sensitive freight require
                  unwavering temperature consistency to retain crispness, weight, and marketability.
                </p>
                <p>
                  At Tahseen Jaber Cold Storage, we combine robust industrial infrastructure with
                  disciplined warehouse management. We provide producers and distributors with the
                  operational confidence that their inventory remains secure from inbound arrival
                  through outbound cross-docking.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Editorial Principles (No cards) */}
        <section className="py-20 sm:py-28 bg-[#F7F5F0] border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B84D1B] block mb-3">
                Operating Principles
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A2340] leading-tight">
                How we deliver dependable storage.
              </h2>
            </div>

            <div className="border-t border-[#E3E8EC]">
              {principles.map((p) => (
                <div
                  key={p.number}
                  className="py-8 sm:py-10 border-b border-[#E3E8EC] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-4 flex items-baseline gap-6">
                    <span className="font-heading text-2xl font-bold text-[#B84D1B]">
                      {p.number}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A2340]">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-sm sm:text-base text-[#66717C] leading-relaxed max-w-2xl">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0A2340] text-white py-20 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s discuss your cold storage needs.
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Our operational team is ready to assist with pallet allocation, receiving schedules, and facility specifications.
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
