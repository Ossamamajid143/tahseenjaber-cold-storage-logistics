"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useNavbarHeight } from "@/components/useNavbarHeight";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PatternDivider } from "@/components/ui/PatternDivider";

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
      className="home-contact-scene relative isolate scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ "--home-viewport-height": `calc(100svh - ${navbarHeight}px)` } as React.CSSProperties}
    >
      <div className="home-contact-content relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div dir={isArabic ? "rtl" : "ltr"}>
            <RevealOnScroll animation="fade-up" duration={800}>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[#B84D1B] sm:text-4xl lg:text-[40px]">
                {t.home.contactSection.title}
              </h2>
              <PatternDivider className="mb-6 mt-4" color="#315257" />
            <p className="mt-8 max-w-xl text-base leading-8 text-[#596166] sm:text-lg">
              {t.home.contactSection.desc}
            </p>

            {/* Social Media Icons row */}
            <div className="home-contact-social mt-8 flex items-center gap-4 text-[#62676B] sm:gap-5">
              <a
                href="https://www.facebook.com/share/19xUcfxzZj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center text-[#62676B] transition-colors hover:text-[#B84D1B]"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center text-[#62676B] transition-colors hover:text-[#B84D1B]"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/9647768677775"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.nav.whatsappLabel}
                title={t.nav.whatsappLabel}
                className="flex h-8 w-8 items-center justify-center text-[#62676B] transition-colors hover:text-[#B84D1B]"
              >
                <WhatsAppIcon className="h-6 w-6 [&_path]:stroke-[2.5]" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label={t.nav.emailLabel}
                title={t.nav.emailLabel}
                className="flex h-8 w-8 items-center justify-center text-[#62676B] transition-colors hover:text-[#B84D1B]"
              >
                <Mail className="h-6 w-6 stroke-[2.5]" aria-hidden="true" />
              </a>
            </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="w-full md:flex md:justify-end">
            <RevealOnScroll animation="fade-up" duration={800} delay={150}>
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#F36A21] mx-auto mb-2" />
                <h3 className="mb-1 font-heading text-xl font-bold text-[#0A2340]">
                  {t.home.contactSection.thankYou}
                </h3>
                <p className="mx-auto mb-4 max-w-sm text-sm text-[#596166]">
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
                  className="inline-block cursor-pointer text-xs font-semibold text-[#B84D1B] underline hover:text-[#0A2340]"
                >
                  {t.home.contactSection.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} dir={isArabic ? "rtl" : "ltr"} className="home-contact-form w-full max-w-[460px] space-y-4">
                {/* Full Name Field */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.home.contactSection.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-0 border-b border-[#D2D4D4] bg-transparent px-3 py-3 text-sm text-[#263238] placeholder-[#A2A5A7] transition-colors focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden sm:text-base"
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
                    className="w-full border-0 border-b border-[#D2D4D4] bg-transparent px-3 py-3 text-sm text-[#263238] placeholder-[#A2A5A7] transition-colors focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden sm:text-base"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder={t.home.contactSection.descPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="h-[150px] w-full resize-y border-0 border-b border-[#D2D4D4] bg-transparent px-3 py-3 text-sm text-[#263238] placeholder-[#A2A5A7] transition-colors focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden sm:text-base"
                  />
                </div>

                {/* Lock Verification */}
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={handleLockClick}
                    aria-label="Unlock form"
                    className={`h-14 w-14 shrink-0 cursor-pointer rounded-full border-[3px] flex items-center justify-center transition-all ${
                      isUnlocked
                        ? "border-[#B84D1B] bg-[#B84D1B]/5 text-[#B84D1B]"
                        : "border-[#C7C9CA] text-[#A4A7A9] hover:border-[#B84D1B]"
                    }`}
                  >
                    <Lock className="h-5 w-5 stroke-[2.25]" />
                  </button>
                  <span className="text-xs leading-snug text-[#687176] sm:text-sm">
                    {isUnlocked
                      ? t.home.contactSection.unlockedText
                      : t.home.contactSection.lockedText}
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="home-contact-submit flex h-14 w-full cursor-pointer items-center justify-center rounded-[2px] bg-[#B84D1B] text-xs font-semibold text-white transition-colors hover:bg-[#A94316] sm:text-sm"
                  >
                    {t.home.contactSection.sendBtn}
                  </button>
                </div>

                {/* Reassurance text */}
                <p className="pt-1 text-center text-[11px] leading-relaxed text-[#A0A9AE] sm:text-xs">
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
