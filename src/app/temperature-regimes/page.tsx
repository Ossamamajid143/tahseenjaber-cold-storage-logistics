"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatternDivider } from "@/components/ui/PatternDivider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CapabilitiesCards } from "@/components/CapabilitiesCards";
import { useLanguage } from "@/context/LanguageContext";

type RegimeKey = "frozen" | "chilled" | "pharmaceutical" | "dry";
type Regime = {
  key: RegimeKey;
  label: string;
  range: string;
  min: number;
  max: number;
  description: string;
  image: string;
  alt: string;
};

const SCALE_MIN = -22;
const SCALE_MAX = 22;

export default function TemperatureRegimesPage() {
  const { isArabic } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<RegimeKey>("frozen");
  const regimes: Regime[] = isArabic
    ? [
        { key: "frozen", label: "مجمد", range: "-20°م إلى -18°م", min: -20, max: -18, description: "تساعد بيئات التخزين المجمد على حفظ المنتجات التي تتطلب درجات حرارة منخفضة باستمرار. تدعم مرافقنا التخزين المنظم ومناولة المنتجات المجمدة وفقاً لمتطلباتها الخاصة.", image: "/images/temperature-storage.jpg", alt: "منصات بضائع في مستودع تخزين بارد" },
        { key: "chilled", label: "مبرد", range: "0°م إلى +5°م", min: 0, max: 5, description: "يوفر التخزين المبرد ظروفاً مضبوطة للمنتجات الحساسة لدرجات الحرارة، بما في ذلك المنتجات الطازجة المناسبة وغيرها من البضائع التي تتطلب التبريد.", image: "/images/refrigeration-tech.jpg", alt: "عامل يتحقق من البضائع في مستودع مبرد" },
        { key: "pharmaceutical", label: "الأدوية", range: "+2°م إلى +8°م", min: 2, max: 8, description: "يمكن لظروف التخزين المضبوطة الحرارة أن تدعم المنتجات الدوائية التي تتطلب التبريد، وفقاً لمتطلبات مناولة المنتج وتخزينه.", image: "/images/about-cold-storage-room.webp", alt: "غرفة تخزين مبردة ونظيفة" },
        { key: "dry", label: "جاف", range: "+16°م إلى +20°م", min: 16, max: 20, description: "يوفر التخزين الجاف مساحة مستودعات منظمة للبضائع المعبأة والمنتجات المناسبة التي لا تتطلب التجميد أو التبريد.", image: "/images/home-cold-storage-cinematic.png", alt: "بضائع معبأة ومناولة في مستودع" },
      ]
    : [
        { key: "frozen", label: "Frozen", range: "-20°C to -18°C", min: -20, max: -18, description: "Frozen storage environments help preserve products that require consistently low temperatures. Our facilities support organized storage and handling of frozen goods according to their specific requirements.", image: "/images/temperature-storage.jpg", alt: "Palletized goods in a refrigerated warehouse" },
        { key: "chilled", label: "Chilled", range: "0°C to +5°C", min: 0, max: 5, description: "Chilled storage provides controlled conditions for temperature-sensitive products, including suitable fresh produce and other goods that require refrigeration.", image: "/images/refrigeration-tech.jpg", alt: "Worker checking goods inside refrigerated storage" },
        { key: "pharmaceutical", label: "Pharmaceutical", range: "+2°C to +8°C", min: 2, max: 8, description: "Temperature-controlled storage conditions can support pharmaceutical products requiring refrigeration, subject to the product's handling and storage requirements.", image: "/images/about-cold-storage-room.webp", alt: "Clean, organized refrigerated storage room" },
        { key: "dry", label: "Dry", range: "+16°C to +20°C", min: 16, max: 20, description: "Dry storage provides organized warehouse space for suitable packaged goods and products that require storage without freezing or chilling.", image: "/images/home-cold-storage-cinematic.png", alt: "Packaged goods being handled at a warehouse" },
      ];

  const selected = regimes.find((regime) => regime.key === selectedKey) ?? regimes[0];
  const intervalLeft = ((selected.min - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
  const intervalWidth = ((selected.max - selected.min) / (SCALE_MAX - SCALE_MIN)) * 100;
  const markerPosition = ((selected.min + selected.max) / 2 - SCALE_MIN) / (SCALE_MAX - SCALE_MIN) * 100;
  const ticks = [-20, -10, 0, 10, 20];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <PageHero
          title={isArabic ? "غرف مستقلة التحكم لكل فئة من المنتجات" : "Independently controlled rooms for every product family"}
          badge={isArabic ? "التخزين" : "STORAGE"}
          description={isArabic ? "تدعم فئات التخزين المختلفة متطلبات المنتجات المتنوعة. تواصل مع فريقنا لتحديد ظروف التخزين المناسبة لبضائعك." : "Storage categories support different product requirements. Contact our team to confirm suitable storage conditions for your goods."}
          imageSrc="/images/real-facility/storage-room-symmetrical.jpg"
          imagePosition="center 48%"
          slides={[
            { src: "/images/real-facility/storage-room-symmetrical.jpg", alt: isArabic ? "غرفة تخزين مبردة مزودة بمبخرات سقفية" : "Cold-storage room with ceiling evaporators", position: "center 50%", mobilePosition: "54% center" },
            { src: "/images/real-facility/storage-chamber-clean.jpg", alt: isArabic ? "غرفة تخزين مبردة نظيفة" : "Clean refrigerated storage chamber", position: "center 50%", mobilePosition: "55% center" },
            { src: "/images/real-facility/corridor-refrigerated.jpg", alt: isArabic ? "ممر غرف التخزين المبردة" : "Corridor between refrigerated storage rooms", position: "center 50%", mobilePosition: "56% center" },
            { src: "/images/real-facility/corridor-numbered-doors.jpg", alt: isArabic ? "ممر غرف التخزين ذات الأبواب المرقمة" : "Cold-storage corridor with numbered doors", position: "center 50%", mobilePosition: "57% center" },
          ]}
          fogIntensity="soft"
          layout="left"
          overlayGradient="linear-gradient(90deg, rgba(6,22,40,0.78) 0%, rgba(10,35,64,0.45) 58%, rgba(6,22,40,0.18) 100%), linear-gradient(180deg, rgba(6,22,40,0.04) 0%, rgba(6,22,40,0.20) 100%)"
        />

        <section className=" bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={800}>
              <div className="mb-8 max-w-4xl sm:mb-10">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#12345B]">{isArabic ? "أنظمة درجات الحرارة" : "TEMPERATURE REGIMES"}</span>
                <h2 className="font-heading text-3xl font-bold leading-tight text-[#0A2340] sm:text-4xl">{isArabic ? "غرف مستقلة التحكم لكل فئة من المنتجات" : "Independently controlled rooms for every product family"}</h2>
                <PatternDivider className="my-5" color="#B84D1B" />
                <p className="text-base leading-relaxed text-[#66717C] sm:text-lg">{isArabic ? "اختر فئة التخزين المناسبة لمنتجك. هذه النطاقات تصف فئات التخزين وليست قراءات مباشرة لدرجة الحرارة." : "Select the storage category that suits your product. These ranges describe storage categories and are not live temperature readings."}</p>
              </div>
            </RevealOnScroll>

            <div role="tablist" aria-label={isArabic ? "فئات التخزين" : "Storage categories"} className="grid grid-cols-2 gap-2 rounded-xl border border-[#E3E8EC] bg-[#F2F6F8] p-2 sm:grid-cols-4 sm:gap-3">
              {regimes.map((regime) => {
                const active = selectedKey === regime.key;
                return <button key={regime.key} id={`regime-tab-${regime.key}`} type="button" role="tab" aria-selected={active} aria-controls="regime-panel" onClick={() => setSelectedKey(regime.key)} className={`min-h-14 rounded-lg border px-3 py-3 text-center text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84D1B] sm:px-4 ${active ? "border-[#D8E6ED] bg-white text-[#12345B] shadow-sm" : "border-transparent text-[#66717C] hover:border-[#D8E6ED] hover:bg-white/70"}`}>
                  <span className="block">{regime.label}</span>
                  <span dir="ltr" className={`mt-1 block text-xs font-semibold ${active ? "text-[#B84D1B]" : "text-[#8A95A0]"}`}>{regime.range}</span>
                </button>;
              })}
            </div>

            <div className="mt-6 rounded-xl border border-[#E3E8EC] bg-white p-4 shadow-sm sm:mt-7 sm:p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm">
                <p className="font-semibold text-[#12345B]">{isArabic ? "نطاق درجات الحرارة حسب الفئة" : "Temperature range by category"}</p>
                <p className="text-[#8A95A0]">{isArabic ? "الفئة المحددة مميزة" : "Selected category highlighted"}</p>
              </div>
              <div className="relative px-2 pb-7 pt-8 sm:px-4">
                <div className="absolute inset-x-2 top-0 h-7 sm:inset-x-4">
                  <span className="absolute -translate-x-1/2 whitespace-nowrap rounded-md bg-[#12345B] px-2.5 py-1 text-xs font-bold text-white shadow-sm" style={{ left: `${markerPosition}%` }} dir="ltr">{selected.range}</span>
                </div>
                <div className="relative h-3 rounded-full bg-gradient-to-r from-[#12345B]/90 via-[#6C8197] to-[#D7E0E7]">
                  <div className="absolute inset-y-[-5px] rounded-md border border-[#B84D1B] bg-[#B84D1B]/30 shadow-[0_0_0_2px_rgba(184,77,27,0.10)] transition-all duration-500" style={{ left: `${intervalLeft}%`, width: `${intervalWidth}%`, minWidth: "10px" }} />
                  <div className="absolute -top-[11px] h-[34px] w-[3px] -translate-x-1/2 rounded-full bg-[#0A2340] transition-all duration-500" style={{ left: `${markerPosition}%` }} />
                </div>
                <div className="relative mt-3 h-8">
                  {ticks.map((tick) => <span key={tick} dir="ltr" className="absolute -translate-x-1/2 text-[10px] font-medium text-[#8A95A0] sm:text-xs" style={{ left: `${((tick - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100}%` }}>{tick > 0 ? `+${tick}` : tick}°C</span>)}
                </div>
              </div>
            </div>

            <div id="regime-panel" role="tabpanel" aria-live="polite" aria-labelledby={`regime-tab-${selected.key}`} className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-[#E3E8EC] bg-white shadow-sm transition-all duration-300 lg:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden bg-[#EEF5F8] sm:min-h-[360px] lg:min-h-[440px]">
                <Image key={selected.image} src={selected.image} alt={selected.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition-opacity duration-500" priority />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A2340]/80 to-transparent px-5 pb-5 pt-16 sm:px-7">
                  <span className="inline-flex rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12345B]">{selected.label}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10" dir={isArabic ? "rtl" : "ltr"}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B84D1B]">{isArabic ? "نطاق الفئة" : "CATEGORY RANGE"}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#0A2340] sm:text-3xl">{selected.label} {isArabic ? "التخزين" : "Storage"}</h3>
                <p className="mt-3 font-heading text-3xl font-bold tabular-nums text-[#12345B] sm:text-4xl" dir="ltr">{selected.range}</p>
                <PatternDivider className="my-5" color="#B84D1B" />
                <p className="text-base leading-relaxed text-[#66717C] sm:text-lg">{selected.description}</p>
                <div className="mt-6 border-t border-[#E3E8EC] pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A95A0]">{isArabic ? "بيانات المنشأة الإجمالية" : "FACILITY-WIDE INFORMATION"}</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-[#66717C]">{isArabic ? "السعة" : "Storage capacity"}</dt><dd className="font-semibold text-[#12345B]">{isArabic ? "100 موقع منصة" : "100 pallet positions"}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#66717C]">{isArabic ? "غرف التخزين" : "Cold rooms"}</dt><dd className="font-semibold text-[#12345B]">18</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#66717C]">{isArabic ? "الموقع" : "Location"}</dt><dd className="text-end font-semibold text-[#12345B]">{isArabic ? "منطقة اليوسفية الصناعية، بغداد، العراق" : "Uuayrij Industrial Area, Baghdad, Iraq"}</dd></div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CapabilitiesCards />

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-[#0A2340] sm:text-3xl">{isArabic ? "تابع استكشاف المرافق" : "Continue through the facility"}</h2>
              <a href="/services#contact" className="inline-flex items-center gap-2 rounded-sm border border-[#D1D7DD] px-5 py-3 text-sm font-semibold text-[#0A2340] transition-colors hover:border-[#B84D1B] hover:text-[#B84D1B]">
                {isArabic ? "اطلب عرض سعر" : "Request a quotation"}<span aria-hidden="true" className={isArabic ? "rotate-180" : ""}>→</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: isArabic ? "القدرات" : "Capabilities", href: "/about#capabilities", image: "/images/about-cold-storage-room.webp" },
                { label: isArabic ? "أنظمة درجات الحرارة" : "Temperature Regimes", href: "/temperature-regimes", image: "/images/temperature-storage.jpg" },
                { label: isArabic ? "المراقبة" : "Monitoring", href: "/monitoring", image: "/images/refrigeration-tech.jpg" },
              ].map((item, index) => (
                <RevealOnScroll key={item.label} animation="fade-up" duration={700} delay={index * 100}>
                  <a href={item.href} className="group relative flex min-h-[220px] items-end overflow-hidden rounded-xl border border-[#DDE3E8] sm:min-h-[260px]">
                    <Image src={item.image} alt={item.label} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A2340]/85 via-[#0A2340]/15 to-transparent" />
                    <span className="relative flex items-center gap-2 p-5 font-heading text-xl font-bold text-white">{item.label}<span aria-hidden="true" className={isArabic ? "rotate-180" : ""}>→</span></span>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
