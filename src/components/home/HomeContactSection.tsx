"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2 } from "lucide-react";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { useLanguage } from "@/context/LanguageContext";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeContactSection() {
  const { t } = useLanguage();
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
    <section id="contact" className="bg-white py-20 sm:py-28 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <RevealOnScroll animation="fade-up" duration={800}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#B84D1B] leading-tight mb-4">
                {t.home.contactSection.title}
              </h2>

              <PatternDivider className="mb-6" color="#B84D1B" />

            <p className="text-[#202B35]/80 text-[15px] sm:text-base leading-relaxed mb-8">
              {t.home.contactSection.desc}
            </p>

            {/* Social Media Icons row */}
            <div className="flex items-center gap-4 text-[#B84D1B]">
              <a
                href="https://www.facebook.com/share/19xUcfxzZj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#B84D1B] hover:text-[#D86A2D] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#B84D1B] hover:text-[#D86A2D] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="md:col-span-6 lg:col-span-6 lg:pl-8 xl:pl-12 w-full">
            <RevealOnScroll animation="fade-up" duration={800} delay={150}>
            {submitted ? (
              <div className="py-8 text-center bg-[#F7F5F0]/60 rounded-[4px] p-6 border border-[#E3E8EC]">
                <CheckCircle2 className="w-10 h-10 text-[#B84D1B] mx-auto mb-2" />
                <h3 className="font-heading text-xl font-bold text-[#0A2340] mb-1">
                  {t.home.contactSection.thankYou}
                </h3>
                <p className="text-[#66717C] text-sm max-w-sm mx-auto mb-4">
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
                  className="inline-block text-xs font-semibold text-[#B84D1B] underline hover:text-[#0A2340] cursor-pointer"
                >
                  {t.home.contactSection.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.home.contactSection.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors"
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
                    className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.home.contactSection.descPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-gray-300 py-2.5 px-0 text-sm sm:text-base text-[#202B35] placeholder-gray-400 focus:border-[#B84D1B] focus:ring-0 focus:outline-hidden transition-colors resize-y min-h-[90px]"
                  />
                </div>

                {/* Lock Verification */}
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

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B84D1B] hover:bg-[#A34215] text-white h-9 flex items-center justify-center rounded-[2px] font-normal text-sm transition-colors shadow-2xs cursor-pointer"
                  >
                    {t.home.contactSection.sendBtn}
                  </button>
                </div>

                {/* Reassurance text */}
                <p className="text-[12px] text-gray-400 text-center pt-1">
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
