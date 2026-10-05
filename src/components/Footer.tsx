import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES_LIST } from "@/data/site-content";

export function Footer() {
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
                  TAHSEEN JABER
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#D86A2D] uppercase mt-0.5">
                  Cold Storage
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
              Dependable cold storage and industrial refrigeration engineered to preserve
              product quality, freshness, and supply chain integrity for agricultural and
              commercial goods.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#D86A2D]" />
              <span>Standardized Thermal Protection Protocol</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
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
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Facility Contact Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D86A2D] mb-4">
              Facility Dispatch
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Direct Phone</span>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="hover:text-white font-medium"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Email</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-white font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D86A2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Facility Address</span>
                  <p>{SITE_CONFIG.address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Tahseen Jaber Cold Storage. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Modern Cold-Chain Architecture
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to home"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
