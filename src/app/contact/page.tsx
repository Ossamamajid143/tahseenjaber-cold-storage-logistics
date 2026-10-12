"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Thermometer,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleMapsLocation } from "@/components/GoogleMapsLocation";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function ContactPage() {
  const { t, isArabic } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockClicks, setUnlockClicks] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLockClick = () => {
    const nextCount = unlockClicks + 1;
    setUnlockClicks(nextCount);
    if (nextCount >= 2) setIsUnlocked(true);
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
          fogIntensity="gentle"
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
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                        setIsUnlocked(false);
                        setUnlockClicks(0);
                      }}
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
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        required
                        placeholder={t.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors resize-y min-h-[90px]"
                      />
                    </div>

                    <div className="flex items-center gap-3.5 pt-1">
                      <button
                        type="button"
                        onClick={handleLockClick}
                        aria-label="Unlock form"
                        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                          isUnlocked
                            ? "border-[#B84D1B] text-[#B84D1B] bg-[#FDEFE6]"
                            : "border-gray-300 text-gray-400 hover:border-gray-400"
                        }`}
                      >
                        <Lock className="w-5 h-5 stroke-[1.75]" />
                      </button>
                      <span className="text-[12px] sm:text-[13px] text-gray-500">
                        {isUnlocked
                          ? t.home.contactSection.unlockedText
                          : t.home.contactSection.lockedText}
                      </span>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#B84D1B] hover:bg-[#A34215] text-white h-9 flex items-center justify-center rounded-[2px] font-normal text-sm transition-colors shadow-2xs cursor-pointer"
                      >
                        {t.contact.sendBtn}
                      </button>
                    </div>

                    <p className="text-[12px] text-gray-400 text-center pt-1">
                      {t.contact.confidential}
                    </p>
                  </form>
                )}
              </div>

              {/* Right Column: Full-Height Clean Image beside form */}
              <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-[580px] bg-slate-900 overflow-hidden">
                <Image
                  src="/images/contact-cleanroom-inspection.jpg"
                  alt="Cold storage facility cleanroom inspection"
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
            4. "GET IN TOUCH" AND FACILITY DIRECTIONS
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
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    aria-label={t.nav.emailLabel}
                    title={t.nav.emailLabel}
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#B84D1B] transition-colors hover:bg-[#EEF5F8] hover:text-[#D86A2D]"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </a>
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
                    <div className="flex items-center gap-2">
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#66717C] hover:text-[#B84D1B] transition-colors font-medium">{SITE_CONFIG.phoneDisplay}</a>
                      <a
                        href="https://wa.me/9647768677775"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.nav.whatsappLabel}
                        title={t.nav.whatsappLabel}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#B84D1B] transition-colors hover:bg-[#EEF5F8] hover:text-[#D86A2D]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                      </a>
                    </div>
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

        <section
          aria-label={isArabic ? "شهادة عميل" : "Customer testimonial"}
          className="bg-white px-6 py-8 text-center sm:py-10 lg:py-12"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div
              className="mb-4 flex items-center justify-center gap-1"
              aria-label={isArabic ? "٥ من ٥ نجوم" : "5 out of 5 stars"}
              role="img"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} aria-hidden="true" className="h-5 w-5 fill-[#B84D1B] text-[#B84D1B]" />
              ))}
            </div>
            <p
              className="mb-5 text-[#B84D1B]"
              style={{
                fontFamily: "var(--font-roboto-slab), Georgia, serif",
                fontSize: "clamp(21px, calc(16px + 1.5vw), 40px)",
                fontWeight: 300,
                letterSpacing: "0.005em",
                lineHeight: 1.25,
              }}
            >
              {t.contact.closingTestimonial}
            </p>
            <Image
              src={SITE_CONFIG.logoPath}
              alt="Tahseen Jaber Cold Storage"
              width={898}
              height={247}
              sizes="190px"
              className="h-[52px] w-[190px] object-contain sm:h-[56px] sm:w-[204px]"
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
