"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Mail, Menu, Phone, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19xUcfxzZj/?mibextid=wwXIfr",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9647768677775",
    icon: <WhatsAppIcon className="h-5 w-5" />,
    external: true,
  },
  {
    label: "Phone",
    href: `tel:${SITE_CONFIG.phone}`,
    icon: <Phone className="h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: <Mail className="h-5 w-5" aria-hidden="true" />,
    external: false,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const selectLanguage = (nextLanguage: "EN" | "AR") => {
    setLanguage(nextLanguage);
    setLanguageMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.temperatureRegimes, href: "/temperature-regimes" },
    { label: t.nav.monitoring, href: "/monitoring" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#061628]/98 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] py-3 border-b border-white/15"
            : "bg-[#061628] py-4 border-b border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B] rounded-md"
              aria-label="Tahseen Jaber Cold Storage Home"
            >
              <div className="relative h-10 w-[145px] shrink-0 sm:h-12 sm:w-[175px] lg:w-[205px] group-hover:scale-[1.02] transition-transform duration-200">
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-[18%] inset-y-[20%] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.08)_48%,transparent_78%)] blur-md" />
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt="Tahseen Jaber Cold Storage"
                  fill
                  sizes="(max-width: 640px) 145px, (max-width: 1023px) 175px, 205px"
                  className="z-10 object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-[15px] font-semibold text-white">
              {navItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-all duration-200 hover:text-[#D86A2D] hover:-translate-y-0.5 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B84D1B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Social Media Icons and Language Switcher */}
            <div className="hidden xl:flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 md:gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label === "WhatsApp" ? t.nav.whatsappLabel : item.label === "Email" ? t.nav.emailLabel : item.label}
                    title={item.label === "WhatsApp" ? t.nav.whatsappLabel : item.label === "Email" ? t.nav.emailLabel : item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-[#D86A2D]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* Language Switcher: AR / EN next to social platforms */}
              <div className="relative ml-1 border-l border-white/20 pl-3">
                <button
                  type="button"
                  onClick={() => setLanguageMenuOpen((open) => !open)}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-semibold text-white transition-colors hover:text-[#D86A2D]"
                  aria-label="Choose language"
                  aria-expanded={languageMenuOpen}
                  aria-haspopup="menu"
                  title="Choose language"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  <span>{language}</span>
                </button>
                {languageMenuOpen && (
                  <div role="menu" className="absolute right-0 top-full z-50 mt-2 min-w-36 rounded-lg border border-white/10 bg-[#061628] p-1.5 shadow-xl">
                    <button type="button" role="menuitem" onClick={() => selectLanguage("EN")} className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 hover:text-[#D86A2D] ${language === "EN" ? "text-[#D86A2D]" : "text-white"}`}>English (EN)</button>
                    <button type="button" role="menuitem" onClick={() => selectLanguage("AR")} className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 hover:text-[#D86A2D] ${language === "AR" ? "text-[#D86A2D]" : "text-white"}`}>العربية (AR)</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#D86A2D] focus:outline-hidden rounded-md transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#061628] border-b border-white/15 shadow-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-base font-semibold rounded-md transition-all duration-200 hover:text-[#D86A2D] hover:-translate-y-0.5 ${
                      isActive
                        ? "bg-white/10 text-white font-semibold"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Language Switcher & Social Media Icons */}
              <div className="pt-4 border-t border-white/15 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => setLanguageMenuOpen((open) => !open)}
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-white transition-colors hover:bg-white/15 hover:text-[#D86A2D]"
                    aria-label="Choose language"
                    aria-expanded={languageMenuOpen}
                    aria-haspopup="menu"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    {language === "EN" ? "English (EN)" : "العربية (AR)"}
                  </button>
                  {languageMenuOpen && (
                    <div role="menu" className="flex gap-2">
                      <button type="button" role="menuitem" onClick={() => selectLanguage("EN")} className={`rounded-md px-3 py-2 text-xs transition-colors hover:text-[#D86A2D] ${language === "EN" ? "bg-white/15 text-[#D86A2D]" : "bg-white/5 text-white"}`}>English (EN)</button>
                      <button type="button" role="menuitem" onClick={() => selectLanguage("AR")} className={`rounded-md px-3 py-2 text-xs transition-colors hover:text-[#D86A2D] ${language === "AR" ? "bg-white/15 text-[#D86A2D]" : "bg-white/5 text-white"}`}>العربية (AR)</button>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      aria-label={item.label === "WhatsApp" ? t.nav.whatsappLabel : item.label === "Email" ? t.nav.emailLabel : item.label}
                      title={item.label === "WhatsApp" ? t.nav.whatsappLabel : item.label === "Email" ? t.nav.emailLabel : item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-105 hover:bg-white/15 hover:text-[#D86A2D]"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
