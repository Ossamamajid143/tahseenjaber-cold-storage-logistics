"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  const { t, isArabic } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.facilities, href: "/why-choose-us" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-[#0A2340] text-white border-t border-white/10 arch-grid-pattern-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center group mb-5 focus:outline-hidden"
              aria-label="Tahseen Jaber Cold Storage Home"
            >
              <div className="relative h-[62px] w-[225px] max-w-full shrink-0 rounded-md overflow-hidden bg-white shadow-md group-hover:scale-[1.02] transition-transform duration-200">
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt="Tahseen Jaber Cold Storage"
                  width={898}
                  height={247}
                  sizes="225px"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.aboutDesc}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#D86A2D]" />
              <span>{isArabic ? "بروتوكول حماية حرارية قياسي" : "Standardized Thermal Protection Protocol"}</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              {t.nav.services}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.servicesPage.box1Title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.servicesPage.box2Title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.servicesPage.box3Title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.servicesPage.box4Title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Facility Contact Summary (4 cols for readable contact details) */}
          <div id="footer-contact-location" className="min-w-0 lg:col-span-4 scroll-mt-24">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-[#D86A2D]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "الهاتف المباشر" : "Direct Contact"}
                  </span>
                  <div className="flex min-w-0 items-center gap-1.5" dir="ltr">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="shrink-0 whitespace-nowrap font-medium hover:text-white"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <a
                      href="https://wa.me/9647768677775"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.nav.whatsappLabel}
                      title={t.nav.whatsappLabel}
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#D86A2D] transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-2.5">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label={t.nav.emailLabel}
                  title={t.nav.emailLabel}
                  className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-[#D86A2D] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="min-w-0">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "البريد الإلكتروني" : "Email Inquiries"}
                  </span>
                  <div className="space-y-0.5" dir="ltr">
                    {SITE_CONFIG.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block whitespace-normal font-medium [overflow-wrap:anywhere] hover:text-white lg:whitespace-nowrap lg:[overflow-wrap:normal]"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-[#D86A2D]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "عنوان المنشأة" : "Facility Address"}
                  </span>
                  <p className="leading-relaxed">{t.footer.address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex justify-center text-xs sm:text-sm text-slate-400 text-center">
          <p>© 2026 Tahseen Jaber Cold Storage. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
