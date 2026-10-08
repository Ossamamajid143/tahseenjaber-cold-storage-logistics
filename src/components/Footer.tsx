"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group mb-5 focus:outline-hidden"
              aria-label="Tahseen Jaber Cold Storage Home"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 bg-white shrink-0 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt="Tahseen Jaber Cold Storage Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  {t.brand.name}
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#D86A2D] uppercase mt-0.5">
                  {t.brand.tagline}
                </span>
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
          <div className="lg:col-span-3">
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

          {/* Col 4: Facility Contact Summary (2 cols) */}
          <div id="footer-contact-location" className="lg:col-span-2 scroll-mt-24">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "الهاتف المباشر" : "Direct Contact"}
                  </span>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="hover:text-white font-medium block"
                    dir="ltr"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "البريد الإلكتروني" : "Email Inquiries"}
                  </span>
                  <div className="space-y-0.5" dir="ltr">
                    {SITE_CONFIG.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="hover:text-white font-medium block whitespace-nowrap"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">
                    {isArabic ? "عنوان المنشأة" : "Facility Address"}
                  </span>
                  <p>{t.footer.address}</p>
                  <Link
                    href="/contact#contact-location"
                    className="hover:text-white font-medium block mt-0.5"
                  >
                    {t.contact.directionsLink}
                  </Link>
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
