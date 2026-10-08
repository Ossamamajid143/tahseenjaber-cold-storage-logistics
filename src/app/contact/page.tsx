"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Thermometer,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleMapsLocation } from "@/components/GoogleMapsLocation";

// Smooth Counting Number Component triggered by scroll visibility
function CountUpNumber({
  end,
  duration = 1800,
  isVisible,
}: {
  end: number;
  duration?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Intersection Observer to trigger number count up when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setCountersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION
        ====================================================================== */}
        <PageHero
          title={t.contact.title}
          description={t.contact.desc}
          imageSrc="/images/services-contact-warehouse.jpg"
          imagePosition="center 40%"
        />

        {/* =====================================================================
            2. BENEFITS 3-COLUMN SECTION (Clean & Unboxed)
        ====================================================================== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-[#B84D1B] mt-1">
                  <Thermometer className="w-10 h-10 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#202B35] mb-3">
                    {t.contact.benefits[0].title}
                  </h3>
                  <p className="text-sm text-[#66717C] leading-relaxed">
                    {t.contact.benefits[0].desc}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-[#B84D1B] mt-1">
                  <ShieldCheck className="w-10 h-10 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#202B35] mb-3">
                    {t.contact.benefits[1].title}
                  </h3>
                  <p className="text-sm text-[#66717C] leading-relaxed">
                    {t.contact.benefits[1].desc}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-[#B84D1B] mt-1">
                  <PackageCheck className="w-10 h-10 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#202B35] mb-3">
                    {t.contact.benefits[2].title}
                  </h3>
                  <p className="text-sm text-[#66717C] leading-relaxed">
                    {t.contact.benefits[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. "REACH OUT TODAY" SECTION
        ====================================================================== */}
        <section className="bg-white border-t border-[#E3E8EC]">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
              {/* Left Column: Clean Form */}
              <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-20 max-w-2xl mx-auto lg:mr-0 rtl:lg:mr-auto rtl:lg:ml-0 w-full">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#B84D1B] mb-4">
                  {t.contact.formHeading}
                </h2>
                <p className="text-sm sm:text-base text-[#66717C] leading-relaxed mb-8">
                  {t.contact.formDesc}
                </p>

                {submitted ? (
                  <div className="py-8 text-left rtl:text-right bg-[#EEF5F8] rounded-lg p-6 border border-[#D8E6ED]">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <h3 className="font-heading text-lg font-bold text-[#0A2340]">
                        {t.contact.successTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-[#66717C] leading-relaxed mb-4">
                      {t.contact.successDesc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#B84D1B] hover:text-[#A34215] underline cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3.5 border-b border-[#D1D7DD] bg-transparent text-sm text-[#202B35] placeholder:text-[#8895A2] focus:outline-hidden focus:border-[#B84D1B] transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full py-3.5 border-b border-[#D1D7DD] bg-transparent text-sm text-[#202B35] placeholder:text-[#8895A2] focus:outline-hidden focus:border-[#B84D1B] transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={5}
                        required
                        placeholder={t.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full py-3.5 border-b border-[#D1D7DD] bg-transparent text-sm text-[#202B35] placeholder:text-[#8895A2] focus:outline-hidden focus:border-[#B84D1B] transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold text-sm px-10 py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
                      >
                        {t.contact.sendBtn}
                      </button>
                    </div>

                    <p className="text-xs text-[#8A95A0] pt-2">
                      {t.contact.confidential}
                    </p>
                  </form>
                )}
              </div>

              {/* Right Column: Full-Height Clean Image beside form */}
              <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-[580px] bg-slate-900 overflow-hidden">
                <Image
                  src="/images/warehouse-inventory.jpg"
                  alt="Warehouse professional organizing inventory on shelves"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. 5-COLUMN COUNTER SECTION
        ====================================================================== */}
        <section
          ref={counterRef}
          className="relative bg-[#1A1A1A] text-white py-10 sm:py-14 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-15">
            <Image
              src="/images/facility-exterior-wide.png"
              alt="Cold Storage Metrics"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 text-center">
              {/* Metric 1 */}
              <div className="flex flex-col items-center">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <CountUpNumber end={80} isVisible={countersVisible} />+
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-snug max-w-[150px]">
                  {t.contact.metrics.m1}
                </p>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <CountUpNumber end={48} isVisible={countersVisible} />+
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-snug max-w-[150px]">
                  {t.contact.metrics.m2}
                </p>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center col-span-2 sm:col-span-1">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <CountUpNumber end={304} isVisible={countersVisible} />+
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-snug max-w-[150px]">
                  {t.contact.metrics.m3}
                </p>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col items-center">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <CountUpNumber end={46} isVisible={countersVisible} />+
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-snug max-w-[150px]">
                  {t.contact.metrics.m4}
                </p>
              </div>

              {/* Metric 5 */}
              <div className="flex flex-col items-center">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <CountUpNumber end={127} isVisible={countersVisible} />+
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-snug max-w-[150px]">
                  {t.contact.metrics.m5}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. "GET IN TOUCH" AND FACILITY DIRECTIONS
        ====================================================================== */}
        <section
          id="contact-location"
          aria-labelledby="contact-location-heading"
          className="bg-white border-b border-[#E3E8EC] scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[100svh] bg-[#F1F5F9]">
              <GoogleMapsLocation
                title={t.contact.directionsHeading}
                directionsLabel={t.contact.mapDirectionsLabel}
                showDirections={false}
                grayscale
                mapClassName="h-[360px] sm:h-[460px] lg:h-[100svh] border-0 rounded-none"
              />
            </div>
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 lg:py-20">
              <h2 id="contact-location-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B84D1B] mb-5 tracking-tight">
                {t.contact.getInTouchHeading}
              </h2>
              <p className="text-base text-[#66717C] leading-relaxed mb-8 max-w-xl">
                {t.contact.getInTouchDesc}
              </p>
              <div className="space-y-5 text-sm sm:text-base text-[#202B35]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B84D1B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0A2340]">{t.contact.locationLabel} </span>
                    <span className="text-[#66717C]">{t.footer.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#B84D1B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0A2340]">{t.contact.emailLabel} </span>
                    <span className="text-[#66717C]">
                      <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#B84D1B] transition-colors">{SITE_CONFIG.email}</a>
                      {" • "}
                      <a href={`mailto:${SITE_CONFIG.secondaryEmail}`} className="hover:text-[#B84D1B] transition-colors">{SITE_CONFIG.secondaryEmail}</a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B84D1B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0A2340]">{t.contact.phoneLabel} </span>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#66717C] hover:text-[#B84D1B] transition-colors font-medium">{SITE_CONFIG.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#B84D1B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0A2340]">{t.contact.hoursLabel} </span>
                    <span className="text-[#66717C]">{t.footer.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
