"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileText,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

type RegimeKey = "frozen" | "chilled" | "pharmaceutical" | "dry";
type Regime = {
  key: RegimeKey;
  name: string;
  min: number;
  max: number;
  range: string;
  reading: number;
  sample: number[];
};

const SAMPLE_TRACES: Record<RegimeKey, number[]> = {
  frozen: [-19.4, -19.1, -19.2, -18.9, -19.1, -18.8, -19.0, -19.3, -19.1, -19.4, -19.2, -19.0, -18.9],
  chilled: [1.2, 1.7, 2.0, 1.6, 2.4, 2.8, 2.1, 1.9, 2.6, 1.5, 2.0, 2.3, 2.1],
  pharmaceutical: [4.2, 4.4, 4.1, 4.6, 4.3, 4.8, 4.5, 4.2, 4.7, 4.4, 4.1, 4.5, 4.6],
  dry: [18.0, 18.4, 17.9, 19.1, 18.7, 19.2, 18.6, 18.1, 19.5, 19.1, 18.6, 18.9, 18.7],
};

const regimeDefinitions: Record<RegimeKey, { min: number; max: number }> = {
  frozen: { min: -20, max: -18 },
  chilled: { min: 0, max: 5 },
  pharmaceutical: { min: 2, max: 8 },
  dry: { min: 16, max: 20 },
};

const faqCopy = {
  en: [
    { q: "What temperature ranges are available?", a: "Our storage categories include Frozen (-20°C to -18°C), Chilled (0°C to +5°C), Pharmaceutical (+2°C to +8°C), and Dry (+16°C to +20°C). Contact our team to confirm suitability and availability for your products." },
    { q: "What products can be stored?", a: "Our facilities support suitable food products, packaged goods, and other products requiring temperature-controlled storage, subject to their handling requirements." },
    { q: "Can I request information about storage conditions?", a: "Please contact our team to discuss the monitoring information and documentation available for your consignment." },
    { q: "How can I arrange storage?", a: "Contact Tahseen Jaber Cold Storage with your product type, required temperature, quantity, and expected storage duration." },
    { q: "Where is the facility located?", a: "Our facility is located in the Uuayrij Industrial Area, Baghdad, Iraq." },
    { q: "What are the consignment acceptance hours?", a: "Consignments are accepted from 07:00 AM to 07:00 PM." },
  ],
  ar: [
    { q: "ما نطاقات درجات الحرارة المتاحة؟", a: "تشمل فئات التخزين لدينا المجمد (-20°م إلى -18°م)، والمبرد (0°م إلى +5°م)، والدوائي (+2°م إلى +8°م)، والجاف (+16°م إلى +20°م). تواصل مع فريقنا للتأكد من الملاءمة والتوفر لمنتجاتك." },
    { q: "ما المنتجات التي يمكن تخزينها؟", a: "تدعم مرافقنا تخزين المنتجات الغذائية المناسبة والبضائع المعبأة وغيرها من المنتجات التي تتطلب تخزيناً بدرجة حرارة مضبوطة، وفقاً لمتطلبات مناولتها." },
    { q: "هل يمكنني طلب معلومات عن ظروف التخزين؟", a: "يرجى التواصل مع فريقنا لمناقشة معلومات المراقبة والوثائق المتاحة لشحنتك." },
    { q: "كيف يمكنني ترتيب التخزين؟", a: "تواصل مع مخازن تحسين جابر الباردة وشارك نوع المنتج ودرجة الحرارة المطلوبة والكمية ومدة التخزين المتوقعة." },
    { q: "أين تقع المنشأة؟", a: "تقع منشأتنا في منطقة اليوسفية الصناعية، بغداد، العراق." },
    { q: "ما أوقات استلام الشحنات؟", a: "يتم استلام الشحنات من الساعة 07:00 صباحاً حتى 07:00 مساءً." },
  ],
};

function formatTemp(value: number, compact = false) {
  const fixed = Number.isInteger(value) ? `${value}` : value.toFixed(1);
  return `${value > 0 ? "+" : ""}${fixed}${compact ? "°" : "°C"}`;
}

function TraceChart({ regime, isArabic }: { regime: Regime; isArabic: boolean }) {
  const plot = { left: 58, right: 774, top: 28, bottom: 230 };
  const padding = regime.key === "frozen" ? 3 : 3;
  const domainMin = Math.floor(regime.min - padding);
  const domainMax = Math.ceil(regime.max + padding);
  const y = (value: number) => plot.top + ((domainMax - value) / (domainMax - domainMin)) * (plot.bottom - plot.top);
  const x = (index: number) => plot.left + (index / (regime.sample.length - 1)) * (plot.right - plot.left);
  const path = regime.sample.map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`).join(" ");
  const area = `${path} L ${plot.right} ${plot.bottom} L ${plot.left} ${plot.bottom} Z`;
  const ticks = [domainMax, (domainMax + domainMin) / 2, domainMin];
  const bandTop = y(regime.max);
  const bandBottom = y(regime.min);
  const tickLabels = isArabic ? ["00:00", "06:00", "12:00", "18:00", "24:00"] : ["00:00", "06:00", "12:00", "18:00", "24:00"];

  return (
    <svg className="block h-auto w-full overflow-visible" viewBox="0 0 800 290" role="img" aria-label={`${regime.name} illustrative sample temperature trace for 24 hours`}>
      <defs>
        <linearGradient id="traceFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#54779E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#54779E" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {ticks.map((tick, index) => (
        <g key={`${tick}-${index}`}>
          <line x1={plot.left} x2={plot.right} y1={y(tick)} y2={y(tick)} stroke="#E5EBF0" strokeDasharray={index === 1 ? "0" : "4 5"} />
          <text x={plot.left - 12} y={y(tick) + 4} textAnchor="end" className="fill-[#8493A4] text-[11px]">{formatTemp(tick)}</text>
        </g>
      ))}
      <rect x={plot.left} y={bandTop} width={plot.right - plot.left} height={Math.max(4, bandBottom - bandTop)} rx="5" fill="#B84D1B" opacity="0.10" />
      <line x1={plot.left} x2={plot.right} y1={bandTop} y2={bandTop} stroke="#B84D1B" strokeOpacity=".3" strokeDasharray="5 5" />
      <line x1={plot.left} x2={plot.right} y1={bandBottom} y2={bandBottom} stroke="#B84D1B" strokeOpacity=".3" strokeDasharray="5 5" />
      <path d={area} fill="url(#traceFill)" className="transition-all duration-500" />
      <path d={path} fill="none" stroke="#365A80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />
      <circle cx={x(regime.sample.length - 1)} cy={y(regime.sample[regime.sample.length - 1])} r="5" fill="#B84D1B" stroke="white" strokeWidth="3" />
      {tickLabels.map((label, index) => {
        const tickX = plot.left + (index / 4) * (plot.right - plot.left);
        return <text key={label} x={tickX} y="268" textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"} className="fill-[#8493A4] text-[11px]">{label}</text>;
      })}
    </svg>
  );
}

export default function MonitoringPage() {
  const { isArabic } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<RegimeKey>("frozen");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const selectedDefinition = regimeDefinitions[selectedKey];
  const selectedName = isArabic
    ? { frozen: "مجمد", chilled: "مبرد", pharmaceutical: "دوائي", dry: "جاف" }[selectedKey]
    : { frozen: "Frozen", chilled: "Chilled", pharmaceutical: "Pharmaceutical", dry: "Dry" }[selectedKey];
  const selectedRange = isArabic
    ? `${formatTemp(selectedDefinition.min)} إلى ${formatTemp(selectedDefinition.max)}`
    : `${formatTemp(selectedDefinition.min)} to ${formatTemp(selectedDefinition.max)}`;
  const selected: Regime = {
    ...selectedDefinition,
    key: selectedKey,
    name: selectedName,
    range: selectedRange,
    reading: SAMPLE_TRACES[selectedKey][SAMPLE_TRACES[selectedKey].length - 1],
    sample: SAMPLE_TRACES[selectedKey],
  };
  const stats = useMemo(() => ({
    low: Math.min(...selected.sample),
    high: Math.max(...selected.sample),
    average: selected.sample.reduce((sum, value) => sum + value, 0) / selected.sample.length,
  }), [selected.sample]);
  const categories: Array<{ key: RegimeKey; label: string }> = isArabic
    ? [
        { key: "frozen", label: "مجمد" },
        { key: "chilled", label: "مبرد" },
        { key: "pharmaceutical", label: "دوائي" },
        { key: "dry", label: "جاف" },
      ]
    : [
        { key: "frozen", label: "Frozen" },
        { key: "chilled", label: "Chilled" },
        { key: "pharmaceutical", label: "Pharmaceutical" },
        { key: "dry", label: "Dry" },
      ];
  const faqs = isArabic ? faqCopy.ar : faqCopy.en;
  const events = isArabic
    ? [
        { title: "مراجعة دورية لظروف التخزين", detail: "مثال توضيحي — ليس سجلاً فعلياً", icon: ClipboardCheck },
        { title: "فحص مجدول للمعدات", detail: "مثال توضيحي — ليس سجلاً فعلياً", icon: Thermometer },
        { title: "مراجعة دخول المستودع", detail: "مثال توضيحي — ليس سجلاً فعلياً", icon: LockKeyhole },
      ]
    : [
        { title: "Routine storage condition review", detail: "Illustrative example · not an actual record", icon: ClipboardCheck },
        { title: "Scheduled equipment inspection", detail: "Illustrative example · not an actual record", icon: Thermometer },
        { title: "Warehouse access review", detail: "Illustrative example · not an actual record", icon: LockKeyhole },
      ];
  const operations = isArabic
    ? ["مراقبة درجات الحرارة", "تنظيم مناولة المخزون", "إدارة ظروف التخزين", "أمن المنشأة"]
    : ["Temperature monitoring", "Organized inventory handling", "Storage condition management", "Facility security"];
  const navigationTiles = isArabic
    ? [
        { label: "المنشأة", href: "/why-choose-us", image: "/images/about-cold-storage-room.webp", alt: "ممر غرفة تخزين مبردة" },
        { label: "القدرات", href: "/about#capabilities", image: "/images/temperature-storage.jpg", alt: "منصات في مستودع تبريد" },
        { label: "أنظمة درجات الحرارة", href: "/temperature-regimes", image: "/images/home-facility-cinematic.png", alt: "مرفق تخزين بارد" },
      ]
    : [
        { label: "Facility", href: "/why-choose-us", image: "/images/about-cold-storage-room.webp", alt: "Clean refrigerated storage corridor" },
        { label: "Capabilities", href: "/about#capabilities", image: "/images/temperature-storage.jpg", alt: "Pallets inside a cold storage warehouse" },
        { label: "Temperature Regimes", href: "/temperature-regimes", image: "/images/home-facility-cinematic.png", alt: "Cold storage facility" },
      ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />
      <main className="flex-1">
        <PageHero
          title={isArabic ? "مراقبة مستمرة لظروف التخزين" : "Continuous Temperature Monitoring"}
          badge={isArabic ? "المراقبة" : "MONITORING"}
          description={isArabic ? "تدعم مراقبة درجات الحرارة ظروف تخزين متسقة ضمن فئات التخزين المجمد والمبرد والدوائي والجاف." : "Temperature monitoring supports consistent storage conditions across our frozen, chilled, pharmaceutical, and dry storage environments."}
          imageSrc="/images/services-temp-mgmt.jpg"
          imagePosition="center 52%"
          slides={[
            { src: "/images/services-temp-mgmt.jpg", alt: isArabic ? "عامل يتحقق من حرارة البضائع داخل مستودع مبرد" : "Worker checking product temperature in cold storage", position: "center 52%", mobilePosition: "60% center" },
            { src: "/images/refrigeration-tech.jpg", alt: isArabic ? "معدات أنظمة التبريد في غرفة تشغيل" : "Refrigeration system equipment in an operations room", position: "center 50%", mobilePosition: "58% center" },
            { src: "/images/contact-cleanroom-inspection.jpg", alt: isArabic ? "مناولة منتجات معبأة داخل غرفة مبردة" : "Packaged products handled in a refrigerated room", position: "center 48%", mobilePosition: "55% center" },
          ]}
        />

        <section className="bg-[#FCFDFE] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll animation="fade-up" duration={750}>
              <div className="mb-8 max-w-3xl sm:mb-10">
                <div className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#31577E]"><span className="h-[2px] w-6 bg-[#B84D1B]" />{isArabic ? "المراقبة والتوثيق" : "MONITORING & COMPLIANCE"}</div>
                <h2 className="font-heading text-3xl font-bold leading-tight text-[#203F65] sm:text-4xl">{isArabic ? "مراقبة مستمرة مع معلومات يمكن مشاركتها عند الطلب" : "Continuous monitoring with records you can hand to an auditor"}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#66788C] sm:text-base sm:leading-7">{isArabic ? "صُممت مرافق التخزين المضبوطة الحرارة لدعم المراقبة الموثوقة وتنظيم مناولة المخزون وظروف التخزين المناسبة لمتطلبات المنتجات المختلفة." : "Our temperature-controlled storage facilities are designed to support reliable monitoring, organized inventory handling, and appropriate storage conditions for different product requirements."}</p>
              </div>
            </RevealOnScroll>

            <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.9fr)]">
              <RevealOnScroll animation="fade-up" duration={800} className="h-full">
                <section className="h-full overflow-hidden rounded-xl border border-[#DDE5EC] bg-white shadow-[0_8px_26px_rgba(19,52,86,0.06)]" aria-labelledby="temperature-trace-title">
                  <div className="border-b border-[#EDF1F4] px-5 py-4 sm:px-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 id="temperature-trace-title" className="text-sm font-bold text-[#35577C]">{isArabic ? "مخطط درجات الحرارة · آخر 24 ساعة" : "Temperature trace · last 24 hours"}</h3>
                        <p className="mt-1 text-xs text-[#8090A3]">{isArabic ? "بيانات توضيحية فقط · ليست قراءات مباشرة" : "Illustrative sample data · not live facility readings"}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4F7FA] px-2.5 py-1 text-[10px] font-semibold text-[#60758D]"><Activity className="h-3.5 w-3.5 text-[#B84D1B]" />{isArabic ? "نطاق الفئة" : "Example operating range"}</span>
                    </div>
                    <div role="tablist" aria-label={isArabic ? "فئات التخزين" : "Storage categories"} className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {categories.map((category) => {
                        const active = selectedKey === category.key;
                        const range = regimeDefinitions[category.key];
                        return (
                          <button key={category.key} type="button" role="tab" aria-selected={active} aria-controls="monitoring-chart-panel" onClick={() => setSelectedKey(category.key)} className={`min-h-12 rounded-lg border px-2 py-2 text-center text-xs font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84D1B] ${active ? "border-[#CFDCE7] bg-[#F4F7FA] text-[#203F65] shadow-sm" : "border-transparent text-[#8090A3] hover:border-[#DDE5EC] hover:bg-[#F8FAFC]"}`}>
                            <span className="block">{category.label}</span>
                            <span className="mt-1 block text-[10px] font-medium text-[#9AA7B5]" dir="ltr">{formatTemp(range.min)} – {formatTemp(range.max)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div id="monitoring-chart-panel" role="tabpanel" aria-live="polite" className="px-3 pb-2 pt-4 sm:px-5">
                    <div className="mb-2 flex items-center justify-between px-1 text-[10px] text-[#8A98A9]"><span>{isArabic ? "درجة الحرارة" : "Temperature"} · °C</span><span>{selected.range}</span></div>
                    <TraceChart regime={selected} isArabic={isArabic} />
                  </div>
                  <div className="grid grid-cols-3 border-t border-[#EDF1F4] bg-[#FBFCFD]">
                    {[
                      { label: isArabic ? "أدنى مثال" : "Example low", value: formatTemp(stats.low) },
                      { label: isArabic ? "المتوسط" : "Sample average", value: formatTemp(stats.average) },
                      { label: isArabic ? "أعلى مثال" : "Example high", value: formatTemp(stats.high) },
                    ].map((item) => <div key={item.label} className="px-3 py-4 text-center sm:px-5"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#8A98A9]">{item.label}</p><p className="mt-1 text-sm font-bold tabular-nums text-[#35577C]" dir="ltr">{item.value}</p></div>)}
                  </div>
                </section>
              </RevealOnScroll>

              <div className="grid gap-5">
                <RevealOnScroll animation="fade-up" duration={800} delay={100}>
                  <section className="overflow-hidden rounded-xl border border-[#DDE5EC] bg-white shadow-[0_8px_26px_rgba(19,52,86,0.06)]" aria-live="polite">
                    <div className="flex items-center justify-between gap-3 border-b border-[#EDF1F4] px-5 py-4">
                      <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A98A9]">{isArabic ? "قراءة توضيحية" : "ILLUSTRATIVE READING"}</p><h3 className="mt-1 text-sm font-semibold text-[#35577C]">{isArabic ? `مثال ${selected.name}` : `${selected.name} · example`}</h3></div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#ECF8F4] px-2.5 py-1 text-[10px] font-semibold text-[#27856D]"><span className="h-1.5 w-1.5 rounded-full bg-[#27A982]" />{isArabic ? "ضمن النطاق التوضيحي" : "Within example range"}</span>
                    </div>
                    <div className="px-5 pb-4 pt-5">
                      <p className="font-heading text-4xl font-bold tabular-nums tracking-tight text-[#203F65] sm:text-5xl" dir="ltr">{formatTemp(selected.reading)}<span className="ml-1 text-lg font-semibold text-[#8A98A9]">C</span></p>
                      <p className="mt-2 text-xs text-[#8A98A9]">{isArabic ? "مثال تعليمي · نطاق التشغيل المطلوب" : "Sample illustration · example operating range"}: <span className="font-semibold text-[#60758D]" dir="ltr">{selected.range}</span></p>
                      <div className="relative mt-6 h-2 rounded-full bg-[#E8EDF2]">
                        <span className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#94B3CD] via-[#54779E] to-[#B84D1B]" style={{ width: "100%" }} />
                        <span className="absolute -top-1.5 h-5 w-1 -translate-x-1/2 rounded-full bg-[#203F65] ring-2 ring-white transition-all duration-500" style={{ left: `${Math.max(5, Math.min(95, ((selected.reading - (selected.min - 3)) / ((selected.max + 3) - (selected.min - 3))) * 100))}%` }} />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-[#8A98A9]" dir="ltr"><span>{formatTemp(selected.min - 3)}</span><span>{formatTemp(selected.min)} – {formatTemp(selected.max)}</span><span>{formatTemp(selected.max + 3)}</span></div>
                    </div>
                  </section>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" duration={800} delay={180}>
                  <section className="overflow-hidden rounded-xl border border-[#DDE5EC] bg-white shadow-[0_8px_26px_rgba(19,52,86,0.06)]">
                    <div className="flex items-center justify-between border-b border-[#EDF1F4] px-5 py-4"><h3 className="text-sm font-bold text-[#35577C]">{isArabic ? "أمثلة على أحداث المراقبة" : "Illustrative monitoring events"}</h3><span className="rounded-full bg-[#FFF4ED] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#B84D1B]">{isArabic ? "أمثلة" : "EXAMPLES"}</span></div>
                    <ol className="divide-y divide-[#EDF1F4]">
                      {events.map((event) => {
                        const Icon = event.icon;
                        return <li key={event.title} className="flex gap-3 px-5 py-3.5"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F6F9] text-[#54779E]"><Icon className="h-4 w-4" /></span><div><p className="text-xs font-semibold text-[#35577C]">{event.title}</p><p className="mt-1 text-[10px] leading-4 text-[#8997A7]">{event.detail}</p></div></li>;
                      })}
                    </ol>
                    <p className="flex gap-2 border-t border-[#EDF1F4] bg-[#F8FAFC] px-5 py-3 text-[10px] leading-4 text-[#8090A3]"><FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" />{isArabic ? "تواصل مع فريقنا لمعرفة معلومات ووثائق التخزين المتاحة لشحنتك." : "Contact our team to discuss monitoring information and documentation available for your consignment."}</p>
                  </section>
                </RevealOnScroll>
              </div>
            </div>

            <RevealOnScroll animation="fade-up" duration={850} className="mt-6">
              <section className="relative isolate overflow-hidden rounded-xl border border-[#DDE5EC] bg-[#0A2340] text-white shadow-[0_12px_32px_rgba(19,52,86,0.12)]">
                <Image src="/images/home-services-workers.png" alt={isArabic ? "فريق يتعامل مع المنتجات داخل مستودع مبرد" : "Team handling products in a refrigerated warehouse"} fill sizes="(max-width: 1024px) 100vw, 1152px" className="-z-20 object-cover object-center" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071D32]/95 via-[#0A2340]/85 to-[#0A2340]/40" />
                <div className="flex flex-col gap-6 px-5 py-7 sm:px-8 sm:py-9 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                  <div className="max-w-2xl">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8793D]"><LockKeyhole className="h-3.5 w-3.5" />{isArabic ? "معلومات للعملاء" : "CLIENT INFORMATION"}</div>
                    <h2 className="font-heading text-2xl font-bold sm:text-3xl">{isArabic ? "معلومات المراقبة لعملائنا" : "Monitoring Information for Our Clients"}</h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">{isArabic ? "تواصل مع فريقنا لمناقشة معلومات مراقبة درجات الحرارة ووثائق التخزين المتاحة لشحنتك." : "Contact our team to discuss temperature monitoring information and storage documentation for your consignment."}</p>
                  </div>
                  <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-[#203F65] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#F3F6F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{isArabic ? "اطلب معلومات المراقبة" : "Request Monitoring Information"}<ArrowUpRight className={`h-4 w-4 ${isArabic ? "rotate-[-90deg]" : ""}`} /></Link>
                </div>
              </section>
            </RevealOnScroll>
          </div>
        </section>

        <section className="border-y border-[#E4EAF0] bg-white px-4 py-7 sm:px-6 sm:py-8">
          <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#35577C]"><ShieldCheck className="h-4 w-4 text-[#B84D1B]" />{isArabic ? "ممارسات تشغيلية" : "Operational practices"}</div>
            {operations.map((item, index) => {
              const icons = [Thermometer, PackageCheck, ClipboardCheck, LockKeyhole];
              const Icon = icons[index];
              return <div key={item} className="flex items-center gap-2 border-l border-[#E8EDF2] pl-4 text-xs font-semibold text-[#526B85]"><Icon className="h-4 w-4 shrink-0 text-[#B84D1B]" />{item}</div>;
            })}
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <RevealOnScroll animation="fade-up" duration={750}>
              <div className="lg:sticky lg:top-28">
                <div className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#31577E]"><span className="h-[2px] w-6 bg-[#B84D1B]" />{isArabic ? "الأسئلة الشائعة" : "FREQUENTLY ASKED"}</div>
                <h2 className="font-heading text-3xl font-bold leading-tight text-[#203F65] sm:text-4xl">{isArabic ? "أسئلة قبل بدء التخزين" : "Questions asked before the first consignment"}</h2>
                <p className="mt-4 text-sm leading-6 text-[#66788C]">{isArabic ? "إذا لم تجد إجابة لسؤالك، تواصل مباشرة مع فريقنا." : "If your question is not covered here, our team can help directly."}</p>
                <div className="mt-7 rounded-xl border border-[#DFE7EE] bg-white p-5 shadow-sm">
                  <p className="flex items-center gap-2 text-sm font-bold text-[#35577C]"><Clock3 className="h-4 w-4 text-[#B84D1B]" />{isArabic ? "أوقات استلام الشحنات" : "Consignment acceptance hours"}</p>
                  <p className="mt-2 text-sm text-[#66788C]">{isArabic ? "من 07:00 صباحاً حتى 07:00 مساءً" : "07:00 AM to 07:00 PM"}</p>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#B84D1B] hover:text-[#913A15]">{isArabic ? "تواصل مع فريقنا" : "Contact our team"}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} /></Link>
                </div>
              </div>
            </RevealOnScroll>
            <div className="divide-y divide-[#E2E8EE] border-y border-[#E2E8EE]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const id = `monitoring-faq-answer-${index}`;
                return <article key={faq.q} className="py-1">
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-start font-heading text-base font-semibold text-[#28496D] transition-colors hover:text-[#B84D1B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84D1B] sm:text-lg">
                      {faq.q}<ChevronDown className={`h-5 w-5 shrink-0 text-[#B84D1B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  </h3>
                  <div id={id} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="max-w-3xl pb-5 text-sm leading-6 text-[#66788C]">{faq.a}</p></div>
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div><div className="mb-2 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#31577E]"><span className="h-[2px] w-6 bg-[#B84D1B]" />{isArabic ? "استكشف المزيد" : "EXPLORE MORE"}</div><h2 className="font-heading text-2xl font-bold text-[#203F65] sm:text-3xl">{isArabic ? "تابع استكشاف المرافق" : "Continue through the facility"}</h2></div>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-[#D3DDE6] px-4 py-2.5 text-sm font-semibold text-[#35577C] transition-colors hover:border-[#B84D1B] hover:text-[#B84D1B]">{isArabic ? "اطلب عرض سعر" : "Request a quotation"}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} /></Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {navigationTiles.map((tile, index) => <RevealOnScroll key={tile.label} animation="fade-up" duration={700} delay={index * 80} className="h-full">
                <Link href={tile.href} className="group relative flex min-h-[210px] h-full items-end overflow-hidden rounded-xl border border-[#DDE5EC] bg-[#0A2340] sm:min-h-[245px]">
                  <Image src={tile.image} alt={tile.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071D32]/90 via-[#071D32]/15 to-transparent" />
                  <span className="relative flex w-full items-center justify-between p-5 font-heading text-lg font-bold text-white">{tile.label}<ArrowUpRight className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isArabic ? "rotate-[-90deg]" : ""}`} /></span>
                </Link>
              </RevealOnScroll>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
