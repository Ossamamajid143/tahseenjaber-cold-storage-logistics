"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useNavbarHeight } from "@/components/useNavbarHeight";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HomeSectionEdgeFog } from "@/components/home/HomeSectionEdgeFog";

export function HomeContactSection() {
  const { t, isArabic } = useLanguage();
  const navbarHeight = useNavbarHeight();
  const [submitted, setSubmitted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockClicks, setUnlockClicks] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleLockClick = () => {
    const nextCount = unlockClicks + 1;
    setUnlockClicks(nextCount);
    if (nextCount >= 2) {
      setIsUnlocked(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      dir="ltr"
      className="home-contact-scene relative isolate scroll-mt-20 overflow-hidden py-12 sm:py-14 lg:py-16"
      style={{ "--home-viewport-height": `calc(100svh - ${navbarHeight}px)` } as React.CSSProperties}
    >
      <HomeSectionEdgeFog direction="right" />
      <div className="home-contact-atmosphere" aria-hidden="true" />
      <div className="home-contact-content relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-14">
          {/* Left Column */}
          <div className="md:col-span-5" dir={isArabic ? "rtl" : "ltr"}>
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                <span className="h-[3px] w-6 rounded-full bg-[#F36A21]" />
                <span>{isArabic ? "تواصل معنا" : "Get in Touch"}</span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[#F36A21] sm:text-4xl lg:text-[40px]">
                {t.home.contactSection.title}
              </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              {t.home.contactSection.desc}
            </p>

            <div className="mt-6 space-y-3.5 text-base text-slate-200 sm:mt-7 sm:space-y-4 sm:text-lg">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-[#F36A21]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-[#F36A21]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[#F36A21]" />
                <span>{isArabic ? "منطقة عويريج الصناعية، بغداد، العراق" : "Uuayrij Industrial Area, Baghdad, Iraq"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-[#F36A21]" />
                <span>{isArabic ? "استلام الشحنات من 07:00 صباحاً إلى 07:00 مساءً" : "Consignments accepted 07:00 AM–07:00 PM"}</span>
              </div>
            </div>

            {/* Social Media Icons row */}
            <div className="home-contact-social mt-8 flex items-center gap-3 text-white sm:gap-4">
              <a
                href="https://www.facebook.com/share/19xUcfxzZj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-100/20 text-white transition-all hover:scale-105 hover:border-[#F36A21] hover:bg-[#F36A21]/10 hover:text-[#F36A21] sm:h-14 sm:w-14"
              >
                <svg className="h-6 w-6 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-100/20 text-white transition-all hover:scale-105 hover:border-[#F36A21] hover:bg-[#F36A21]/10 hover:text-[#F36A21] sm:h-14 sm:w-14"
              >
                <svg className="h-6 w-6 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/9647768677775"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.nav.whatsappLabel}
                title={t.nav.whatsappLabel}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-100/20 text-white transition-all hover:scale-105 hover:border-[#F36A21] hover:bg-[#F36A21]/10 hover:text-[#F36A21] sm:h-14 sm:w-14"
              >
                <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label={t.nav.emailLabel}
                title={t.nav.emailLabel}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-100/20 text-white transition-all hover:scale-105 hover:border-[#F36A21] hover:bg-[#F36A21]/10 hover:text-[#F36A21] sm:h-14 sm:w-14"
              >
                <Mail className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              </a>
            </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="w-full md:col-span-7 md:translate-x-8 lg:translate-x-12">
            <RevealOnScroll animation="fade-up" duration={800} delay={150}>
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#F36A21] mx-auto mb-2" />
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {t.home.contactSection.thankYou}
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto mb-4">
                  {t.home.contactSection.thankYouDesc}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                    setIsUnlocked(false);
                    setUnlockClicks(0);
                  }}
                  className="inline-block text-xs font-semibold text-[#F36A21] underline hover:text-white cursor-pointer"
                >
                  {t.home.contactSection.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} dir={isArabic ? "rtl" : "ltr"} className="home-contact-form max-w-xl space-y-5">
                {/* Full Name Field */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.home.contactSection.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-0 border-b border-sky-100/30 bg-white/[0.035] px-0 py-3 text-base text-white placeholder-slate-400 transition-colors focus:border-[#F36A21] focus:ring-0 focus:outline-hidden sm:text-lg"
                  />
                </div>

                {/* Email Address Field */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder={t.home.contactSection.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-0 border-b border-sky-100/30 bg-white/[0.035] px-0 py-3 text-base text-white placeholder-slate-400 transition-colors focus:border-[#F36A21] focus:ring-0 focus:outline-hidden sm:text-lg"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder={t.home.contactSection.descPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[104px] resize-y border-0 border-b border-sky-100/30 bg-white/[0.035] px-0 py-3 text-base text-white placeholder-slate-400 transition-colors focus:border-[#F36A21] focus:ring-0 focus:outline-hidden sm:text-lg"
                  />
                </div>

                {/* Lock Verification */}
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={handleLockClick}
                    aria-label="Unlock form"
                    className={`h-12 w-12 shrink-0 cursor-pointer rounded-full border-2 flex items-center justify-center transition-all ${
                      isUnlocked
                        ? "border-[#F36A21] text-[#F36A21] bg-[#F36A21]/10"
                        : "border-slate-400 text-slate-300 hover:border-[#F36A21]"
                    }`}
                  >
                    <Lock className="h-6 w-6 stroke-[1.75]" />
                  </button>
                  <span className="text-sm leading-snug text-slate-300 sm:text-base">
                    {isUnlocked
                      ? t.home.contactSection.unlockedText
                      : t.home.contactSection.lockedText}
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="home-contact-submit h-12 w-full cursor-pointer flex items-center justify-center rounded-[4px] bg-[#E9571D] text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#F36A21] sm:text-base"
                  >
                    {t.home.contactSection.sendBtn}
                  </button>
                </div>

                {/* Reassurance text */}
                <p className="pt-2 text-center text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {t.home.contactSection.confidential}
                </p>
              </form>
            )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
