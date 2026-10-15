"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const iconButton = "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-[#D86A2D] hover:bg-white/5 hover:text-[#D86A2D]";
const linkStyle = "block text-sm leading-6 text-slate-300 transition-colors hover:text-[#D86A2D]";

export function Footer() {
  const { isArabic } = useLanguage();
  const copy = isArabic ? {
    description: "مرافق تخزين مبرد وخدمات لوجستية لسلسلة التبريد في بغداد.",
    capabilities: "الخدمات", frozen: "التخزين المجمد والمبرد", pharma: "غرف المنتجات الدوائية", monitoring: "المراقبة",
    contact: "التواصل", facility: "المنشأة", frozenFacility: "المجمد", dryGoods: "البضائع الجافة", chiller: "المبرد", pharmaceutical: "الأدوية", facilityMonitoring: "المراقبة", company: "الشركة", whyChooseUs: "لماذا تختارنا", pricing: "الأسعار", consignmentHours: "استلام الشحنات من 07:00 صباحاً إلى 07:00 مساءً", operatingSince: "العمل منذ 2026",
    book: "ترتيب زيارة للمنشأة", quote: "طلب عرض سعر", contactUs: "اتصل بنا",
    updates: "تحديثات السعة وسلسلة التبريد", updatesDesc: "رسالة واحدة شهرياً: السعة المتاحة والغرف الجديدة والإرشادات الموسمية.", unavailable: "الاشتراك بالبريد الإلكتروني غير متاح حالياً.", emailPlaceholder: "you@company.com", subscribe: "اشتراك",
    copyright: "جميع الحقوق محفوظة.", terms: "شروط الخدمة", privacy: "سياسة الخصوصية", coldChain: "سياسة سلسلة التبريد",
  } : {
    description: "Temperature-controlled warehousing and cold-chain logistics in Baghdad.",
    capabilities: "Capabilities", frozen: "Frozen & chilled storage", pharma: "Pharmaceutical rooms", monitoring: "Monitoring",
    contact: "Contact", facility: "Facility", frozenFacility: "Frozen", dryGoods: "Dry goods", chiller: "Chiller", pharmaceutical: "Pharmaceutical", facilityMonitoring: "Monitoring", company: "Company", whyChooseUs: "Why Choose Us", pricing: "Pricing", consignmentHours: "Accepting consignments from 07:00am to 07:00pm", operatingSince: "Operating since 2026",
    book: "Book a site visit", quote: "Request a quotation", contactUs: "Contact",
    updates: "Capacity and cold-chain updates", updatesDesc: "One email a month: available capacity, new rooms, seasonal guidance.", unavailable: "Email subscriptions are not available yet.", emailPlaceholder: "you@company.com", subscribe: "Subscribe",
    copyright: "All rights reserved.", terms: "Terms of service", privacy: "Privacy policy", coldChain: "Cold-chain policy",
  };
  const mapUrl = `https://www.google.com/maps?q=${SITE_CONFIG.googleMapsLocation.latitude},${SITE_CONFIG.googleMapsLocation.longitude}`;
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/share/19xUcfxzZj/?mibextid=wwXIfr", icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
    { label: "Instagram", href: "https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn", icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.011 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.013 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.012-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.439-.645 1.439-1.44-.644-1.44-1.439-1.44z" /></svg> },
    { label: "WhatsApp", href: "https://wa.me/9647768677775", icon: <WhatsAppIcon className="h-5 w-5" /> },
    { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: <Mail className="h-5 w-5" aria-hidden="true" /> },
  ];

  return (
    <footer dir={isArabic ? "rtl" : "ltr"} className="relative overflow-hidden border-t border-white/10 bg-[#081a30] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_42%,rgba(107,126,147,0.32),transparent_42%),radial-gradient(ellipse_at_78%_18%,rgba(74,94,116,0.28),transparent_40%),linear-gradient(115deg,#172c45_0%,#091b32_54%,#07172b_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.9fr_1fr_1fr] lg:gap-x-12 lg:pb-12">
          <section className="min-w-0">
            <Link href="/" aria-label="Tahseen Jaber Cold Storage home" className="mb-5 inline-flex">
              <Image src={SITE_CONFIG.logoPath} alt="Tahseen Jaber Cold Storage" width={2170} height={725} sizes="220px" className="h-[62px] w-[220px] object-contain" />
            </Link>
            <p className="mb-5 max-w-sm text-sm leading-6 text-slate-300">{copy.description}</p>
            <address className="not-italic text-sm leading-6 text-slate-300">
              <a dir="ltr" title={SITE_CONFIG.phoneDisplay} className="mb-2 inline-flex items-center gap-3 transition-colors hover:text-[#D86A2D]" href={`tel:${SITE_CONFIG.phone}`}><Phone className="h-4 w-4 shrink-0 text-slate-400" />{SITE_CONFIG.phoneDisplay}</a>
              <div className="mb-2 flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                <div dir="ltr" className="min-w-0">
                  {[SITE_CONFIG.email, SITE_CONFIG.secondaryEmail].map((email) => <a key={email} title={email} className="block break-all transition-colors hover:text-[#D86A2D]" href={`mailto:${email}`}>{email}</a>)}
                </div>
              </div>
              <a title={isArabic ? SITE_CONFIG.address : "Tahseen Jaber Cold Storage, Uuayrij Industrial Area, Baghdad, Iraq"} className="flex items-start gap-3 transition-colors hover:text-[#D86A2D]" href={mapUrl} target="_blank" rel="noreferrer"><MapPin className="mt-1 h-4 w-4 shrink-0 text-slate-400" /><span>{isArabic ? SITE_CONFIG.address : "Tahseen Jaber Cold Storage, Uuayrij Industrial Area, Baghdad, Iraq"}</span></a>
            </address>
            <div className="mt-5 flex gap-2.5" aria-label={isArabic ? "روابط التواصل الاجتماعي" : "Social links"}>
              {socialLinks.map((item) => <a key={item.label} href={item.href} aria-label={item.label} title={item.label} className={iconButton} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>{item.icon}</a>)}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{copy.capabilities}</h2>
            <ul className="space-y-2.5">
              <li><Link title={copy.frozen} className={linkStyle} href="/services">{copy.frozen}</Link></li>
              <li><Link title={copy.pharma} className={linkStyle} href="/services">{copy.pharma}</Link></li>
              <li><Link title={copy.monitoring} className={linkStyle} href="/monitoring">{copy.monitoring}</Link></li>
            </ul>
            <h2 className="mb-4 mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{copy.contact}</h2>
            <div className="flex gap-2.5">
              <a title={isArabic ? SITE_CONFIG.phoneDisplay : "Call " + SITE_CONFIG.phoneDisplay} className={iconButton} href={`tel:${SITE_CONFIG.phone}`} aria-label={copy.contactUs}><Phone className="h-4 w-4" /></a>
              <a title={isArabic ? "البريد الإلكتروني" : "Email Tahseen Jaber Cold Storage"} className={iconButton} href={`mailto:${SITE_CONFIG.email}`} aria-label={isArabic ? "البريد الإلكتروني" : "Email us"}><Mail className="h-4 w-4" /></a>
              <a title={isArabic ? "واتساب" : "Chat on WhatsApp"} className={iconButton} href="https://wa.me/9647768677775" aria-label={isArabic ? "واتساب" : "WhatsApp"} target="_blank" rel="noreferrer"><WhatsAppIcon className="h-4 w-4" /></a>
              <a title={isArabic ? "الموقع" : "View facility location on map"} className={iconButton} href={mapUrl} aria-label={isArabic ? "الموقع" : "Facility location"} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /></a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-300"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />{copy.consignmentHours}</p>
          </section>

          <section>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{copy.facility}</h2>
            <ul className="space-y-2.5">
              <li><Link title={copy.frozenFacility} className={linkStyle} href="/services">{copy.frozenFacility}</Link></li>
              <li><Link title={copy.dryGoods} className={linkStyle} href="/services">{copy.dryGoods}</Link></li>
              <li><Link title={copy.chiller} className={linkStyle} href="/services">{copy.chiller}</Link></li>
              <li><Link title={copy.pharmaceutical} className={linkStyle} href="/services">{copy.pharmaceutical}</Link></li>
              <li><Link title={copy.facilityMonitoring} className={linkStyle} href="/services">{copy.facilityMonitoring}</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{copy.company}</h2>
            <ul className="space-y-2.5">
              <li><Link title={copy.whyChooseUs} className={linkStyle} href="/why-choose-us">{copy.whyChooseUs}</Link></li>
              <li><Link title={copy.pricing} className={linkStyle} href="/pricing">{copy.pricing}</Link></li>
              <li><Link title={copy.contactUs} className={linkStyle} href="/contact">{copy.contactUs}</Link></li>
              <li><Link title={copy.book} className={linkStyle} href="/contact#contact-location">{copy.book}</Link></li>
              <li><Link title={copy.quote} className={linkStyle} href="/contact#contact-location">{copy.quote}</Link></li>
            </ul>
          </section>
        </div>

        <section className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-white">{copy.updates}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-400">{copy.updatesDesc}</p>
            <p className="mt-1 text-xs text-slate-500">{copy.unavailable}</p>
          </div>
          <form className="flex w-full gap-2 sm:max-w-md" onSubmit={(event) => event.preventDefault()}>
            <input type="email" disabled aria-label={copy.emailPlaceholder} placeholder={copy.emailPlaceholder} className="h-11 min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 disabled:cursor-not-allowed" />
            <button type="submit" disabled className="h-11 shrink-0 rounded-lg bg-white px-5 text-sm font-semibold text-[#17304b] disabled:cursor-not-allowed">{copy.subscribe}</button>
          </form>
        </section>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-xs text-slate-500 sm:flex-row sm:gap-6 sm:text-start">
          <p>© 2026 Tahseen Jaber Cold Storage. {copy.copyright}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end" aria-label={isArabic ? "السياسات" : "Policies"}>
            <li>{copy.terms}</li>
            <li>{copy.privacy}</li>
            <li>{copy.coldChain}</li>
            <li>{copy.operatingSince}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
