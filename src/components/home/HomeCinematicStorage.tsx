"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, MapPin, Snowflake, Thermometer, Warehouse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HomeBenefitsCards } from "@/components/home/HomeBenefitsCards";
import { HomeSectionEdgeFog } from "@/components/home/HomeSectionEdgeFog";

const STATISTICS = {
  EN: [
    { type: "capacity", label: "Storage Capacity", Icon: Warehouse },
    { type: "rooms", label: "Number of Cold Rooms", Icon: Snowflake },
    { type: "range", label: "Temperature Range", Icon: Thermometer },
    { type: "location", label: "Easy Access for Distribution", Icon: MapPin },
  ],
  AR: [
    { type: "capacity", label: "سعة التخزين", Icon: Warehouse },
    { type: "rooms", label: "عدد غرف التبريد", Icon: Snowflake },
    { type: "range", label: "نطاق درجات الحرارة", Icon: Thermometer },
    { type: "location", label: "سهولة الوصول والتوزيع", Icon: MapPin },
  ],
} as const;

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setValue(target));
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = window.requestAnimationFrame(update);
    };
    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [active, target]);

  return <>{value}</>;
}

export function HomeCinematicStorage() {
  const { isArabic } = useLanguage();
  const statistics = isArabic ? STATISTICS.AR : STATISTICS.EN;
  const statisticsRef = useRef<HTMLDivElement>(null);
  const [statisticsActive, setStatisticsActive] = useState(false);

  useEffect(() => {
    const node = statisticsRef.current;
    if (!node || statisticsActive) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatisticsActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [statisticsActive]);

  return (
    <section className="home-cinematic-storage relative isolate flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#061628] text-white" dir={isArabic ? "rtl" : "ltr"} aria-labelledby="home-cinematic-title">
      <Image src="/images/real-facility/corridor-refrigerated.jpg" alt="A clean refrigerated storage corridor with numbered cold rooms" fill sizes="100vw" className="home-cinematic-photo object-cover" priority={false} />
      <div aria-hidden="true" className="home-cinematic-text-backdrop absolute inset-y-0 left-0" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,31,0.82)_0%,rgba(4,16,31,0.56)_38%,rgba(4,16,31,0.14)_74%,rgba(4,16,31,0.42)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,15,29,0.72)_0%,transparent_46%,rgba(3,15,29,0.1)_100%)]" />
      <div aria-hidden="true" className="home-cinematic-floor-fog absolute inset-x-[-12%] bottom-0 h-[48%]" />
      <HomeSectionEdgeFog direction="right" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 content-center gap-8 px-5 pb-10 pt-14 sm:px-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:items-center lg:px-12 lg:pb-10 lg:pt-14">
        <div className="home-cinematic-copy max-w-[650px]">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.12em] text-slate-100 sm:text-xs"><span className="h-[3px] w-8 rounded-full bg-[#F36A21]" />{isArabic ? "حلول تخزين مبرد متميزة" : "Premium Cold Storage Solutions"}</div>
          <div className="flex items-center gap-5">
            <div className="min-w-0">
              <h2 id="home-cinematic-title" className="font-heading text-4xl font-bold leading-tight tracking-[.02em] text-white sm:text-5xl lg:text-[3.65rem]">{isArabic ? "تحسين جابر" : "Tahseen Jaber"}</h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#F36A21]">{isArabic ? "مخازن تبريد" : "Cold Storage"}</p>
            </div>
            <span aria-hidden="true" className="hidden h-[68px] w-[2px] shrink-0 bg-[#F36A21] sm:block" />
          </div>
          <p className="mt-5 max-w-[570px] text-sm leading-[1.55] text-slate-100 sm:text-base">
            {isArabic
              ? "نقدم خدمات تخزين مبرد عالية المستوى للحفاظ على بضائعكم القابلة للتلف بدقة وعناية. تضمن مرافقنا التحكم الأمثل بدرجات الحرارة والنظافة، وتدعم أعمالكم بكفاءة وأمان في مخازن تحسين جابر. ثقوا بنا للحفاظ على منتجاتكم طازجة وآمنة."
              : "Experience top-tier cold storage services designed to preserve your perishable goods with precision and care. Our facilities ensure optimal temperature control and hygiene, supporting your business needs efficiently and securely at Tahseen Jaber Cold Storage. Trust us to keep your products fresh and safe."}
          </p>
          <Link href="/temperature-regimes" className="home-cinematic-cta mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#F36A21] px-5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff7b32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {isArabic ? "أنظمة درجات الحرارة" : "Temperature Regimes"}<span aria-hidden="true">→</span>
          </Link>

          <aside className="home-cinematic-temperature mt-6 w-full max-w-[570px] rounded-xl border border-sky-200/30 bg-[#061628]/50 px-4 py-1 shadow-[0_0_26px_rgba(58,156,220,0.16)] backdrop-blur-md" aria-label={isArabic ? "مؤشرات فئات درجات التخزين التوضيحية" : "Illustrative storage category indicators"}>
            {[
              { label: isArabic ? "تخزين مجمد" : "Frozen Storage", value: "-20°C", Icon: Snowflake },
              { label: isArabic ? "تخزين مبرد" : "Chilled Storage", value: "3°C", Icon: Thermometer },
              { label: isArabic ? "تخزين جاف" : "Dry Storage", value: "18°C", Icon: Box },
            ].map(({ label, value, Icon }, index) => (
              <div key={label} className={`flex items-center gap-3 py-2.5 ${index < 2 ? "border-b border-sky-100/20" : ""}`}>
                <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-sky-300" strokeWidth={1.6} />
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3"><div><p className="text-xs font-medium text-sky-200/90 sm:text-sm">{label}</p><p className="mt-0.5 text-[10px] text-slate-300/85">{isArabic ? "مؤشر توضيحي للفئة" : "Illustrative category indicator"}</p></div><span className="font-heading text-lg font-bold text-white sm:text-xl" dir="ltr">{value}</span></div>
              </div>
            ))}
          </aside>
        </div>

        <div className="home-cinematic-feature-list w-full max-w-[620px] justify-self-end">
          <HomeBenefitsCards variant="compact" />
        </div>
      </div>

      <div ref={statisticsRef} className="home-cinematic-statistics relative z-10 w-full bg-[#061628]/75 backdrop-blur-sm">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 divide-y divide-sky-100/20 px-5 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:px-8 lg:grid-cols-4 lg:px-12">
          {statistics.map(({ type, label, Icon }, index) => (
            <article key={label} className={`home-cinematic-stat flex flex-col items-center justify-center px-4 py-5 text-center sm:py-6 ${index > 0 ? "sm:border-sky-100/20" : ""}`}>
              <Icon aria-hidden="true" className="mb-2 h-7 w-7 text-[#F36A21]" strokeWidth={1.8} />
              <h3 className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl" dir={type === "range" ? "ltr" : undefined}>
                {type === "capacity" && <><CountUp target={100} active={statisticsActive} /> {isArabic ? "منصة تخزين" : "Pallets"}</>}
                {type === "rooms" && <CountUp target={18} active={statisticsActive} />}
                {type === "range" && <>-<CountUp target={20} active={statisticsActive} />°C to +<CountUp target={16} active={statisticsActive} />°C</>}
                {type === "location" && (isArabic ? "موقع استراتيجي" : "Strategic Location")}
              </h3>
              <p className="mt-1 text-xs leading-snug text-sky-100/80 sm:text-sm">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
