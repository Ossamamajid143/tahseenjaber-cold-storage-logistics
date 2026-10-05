"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, ShieldCheck } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site-content";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top subtle utility strip */}
      <div className="bg-[#0A2340] text-slate-300 text-xs py-2 px-4 sm:px-6 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B84D1B]" />
              Industrial Cold Storage & Logistics
            </span>
            <span className="h-3 w-[1px] bg-white/20" />
            <span className="text-slate-400">
              Receiving: 24/7 By Scheduled Appointment
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B84D1B]" />
              <span>Direct: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
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
                  TAHSEEN JABER
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B84D1B] uppercase mt-1">
                  Cold Storage
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#202B35]">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
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

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white text-sm font-semibold px-5 py-2.5 rounded-[7px] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
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
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
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
              <div className="pt-3 border-t border-[#E3E8EC]">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#B84D1B] text-white text-center py-3 rounded-[7px] font-semibold shadow-xs"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
