"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.facilities, href: "/facilities" },
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
    <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E3E8EC]"
            : "bg-white py-4 border-b border-[#E3E8EC]/60"
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
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#12345B]/15 bg-[#F7F5F0] shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt="Tahseen Jaber Cold Storage Logo"
                  fill
                  sizes="(max-width: 640px) 44px, 48px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#0A2340] leading-none tracking-tight">
                  {t.brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B84D1B] uppercase mt-1">
                  {t.brand.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#202B35]">
              {navItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isActive
                        ? "text-[#B84D1B] font-semibold"
                        : "text-[#202B35] hover:text-[#12345B]"
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
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 md:gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#B84D1B] hover:text-[#D86A2D] hover:bg-[#EEF5F8] transition-colors duration-200"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* Language Switcher: AR / EN next to social platforms */}
              <div className="flex items-center pl-2 ml-1 border-l border-[#D8E6ED] text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === "EN"
                      ? "bg-[#0A2340] text-white shadow-xs"
                      : "text-[#66717C] hover:text-[#0A2340]"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span className="text-[#C0CBD3] px-0.5 select-none">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage("AR")}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === "AR"
                      ? "bg-[#B84D1B] text-white shadow-xs"
                      : "text-[#66717C] hover:text-[#B84D1B]"
                  }`}
                  aria-label="التبديل إلى اللغة العربية"
                >
                  AR
                </button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0A2340] hover:text-[#B84D1B] focus:outline-hidden rounded-md transition-colors"
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
          <div className="lg:hidden bg-white border-b border-[#E3E8EC] shadow-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-[#EEF5F8] text-[#B84D1B] font-semibold"
                        : "text-[#202B35] hover:bg-[#EEF5F8] hover:text-[#12345B]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Language Switcher & Social Media Icons */}
              <div className="pt-4 border-t border-[#E3E8EC] flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-xs text-[#66717C]">Language:</span>
                  <button
                    type="button"
                    onClick={() => setLanguage("EN")}
                    className={`px-3 py-1 rounded text-xs transition-colors ${
                      language === "EN"
                        ? "bg-[#0A2340] text-white"
                        : "text-[#66717C] bg-slate-100"
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("AR")}
                    className={`px-3 py-1 rounded text-xs transition-colors font-arabic ${
                      language === "AR"
                        ? "bg-[#B84D1B] text-white"
                        : "text-[#66717C] bg-slate-100"
                    }`}
                  >
                    العربية (AR)
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full text-[#B84D1B] hover:text-[#D86A2D] bg-[#EEF5F8] transition-colors"
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
  );
}
