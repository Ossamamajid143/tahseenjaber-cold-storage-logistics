"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Box,
  Check,
  CircleCheck,
  Headphones,
  Package,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ColdFogOverlay } from "@/components/ui/ColdFogOverlay";
import { useLanguage } from "@/context/LanguageContext";

type TemperatureKey = "chilled" | "frozen" | "dry";

interface PricingCopy {
  eyebrow: string;
  title: string;
  description: string;
  heroCta: string;
  featuresTitle: string;
  featuresDescription: string;
  benefits: { title: string; description: string }[];
  pricingTitle: string;
  pricingEyebrow: string;
  pricingDescription: string;
  temperatures: { id: TemperatureKey; label: string; range: string }[];
  products: {
    id: string;
    title: string;
    description: string;
    image: string;
    rates?: Record<TemperatureKey, string>;
    customQuote?: boolean;
    features: string[];
    unit: string;
    cta: string;
  }[];
  monthly: string;
  customQuote: string;
  generatorTitle: string;
  generatorAccent: string;
  generatorDescription: string;
  generatorSpecs: { label: string; value: string }[];
  chargesTitle: string;
  chargesSubtitle: string;
  serviceLabel: string;
  priceLabel: string;
  notesLabel: string;
  chargeRows: { service: string; price: string; notes: string }[];
  includedTitle: string;
  includedItems: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  quoteAria: string;
}

const COPY: Record<"EN" | "AR", PricingCopy> = {
  EN: {
    eyebrow: "TAHSEEN JABER COLD STORAGE",
    title: "Cold Storage Pricing",
    description: "Flexible storage solutions tailored to your business needs.",
    heroCta: "Explore Storage Rates",
    featuresTitle: "Pricing",
    featuresDescription: "Flexible and transparent pricing for cold storage solutions, designed to meet the needs of your business.",
    benefits: [
      { title: "Advanced Temperature Control", description: "Reliable temperature management and continuous monitoring." },
      { title: "Secure Warehousing", description: "Protected facilities with around-the-clock security systems." },
      { title: "Flexible Storage Options", description: "Warehouse, container, and pallet-based storage solutions." },
      { title: "Dedicated Customer Support", description: "Practical assistance for your storage and logistics requirements." },
    ],
    pricingTitle: "Cold Storage Solutions Pricing",
    pricingEyebrow: "OUR PLANS",
    pricingDescription: "Choose your storage type and temperature requirements.",
    temperatures: [
      { id: "chilled", label: "Chilled", range: "0°C to +5°C" },
      { id: "frozen", label: "Frozen", range: "−20°C" },
      { id: "dry", label: "Dry", range: "+16°C to +20°C" },
    ],
    products: [
      {
        id: "warehouse",
        title: "Full Warehouse",
        description: "Dedicated warehouse storage for larger operations.",
        image: "/images/hero-warehouse.jpg",
        rates: { chilled: "5,000,000", frozen: "6,000,000", dry: "4,000,000" },
        features: ["Dedicated warehouse storage", "Temperature control and monitoring", "Secure warehousing"],
        unit: "per month",
        cta: "Request a Quote",
      },
      {
        id: "barad",
        title: "Barad / Container",
        description: "Flexible refrigerated container storage.",
        image: "/images/service-cold-storage-leasing.webp",
        rates: { chilled: "1,000,000", frozen: "1,200,000", dry: "900,000" },
        features: ["Flexible container storage", "Chilled, frozen, or dry options", "Temperature monitoring"],
        unit: "per month",
        cta: "Request a Quote",
      },
      {
        id: "pallet",
        title: "Pallet Storage",
        description: "Cost-effective storage for individual pallet loads.",
        image: "/images/temperature-storage.jpg",
        rates: { chilled: "50,000", frozen: "60,000", dry: "45,000" },
        features: ["Individual pallet storage", "Chilled, frozen, or dry options", "Inventory tracking"],
        unit: "per pallet / month",
        cta: "Request a Quote",
      },
      {
        id: "custom",
        title: "Custom Storage Solution",
        description: "Tailored options for larger or specialized storage requirements.",
        image: "/images/cold-storage-warehouse-floor.jpg",
        customQuote: true,
        features: ["Storage plan tailored to your needs", "Choose chilled, frozen, or dry", "Contact our team for a quote"],
        unit: "",
        cta: "Contact Sales",
      },
    ],
    monthly: "Monthly rate",
    customQuote: "Custom Quote",
    generatorTitle: "Backup Power Generators",
    generatorAccent: "Power Backup System",
    generatorDescription: "The cold storage facility is supported by two 500 kVA generators (1 MVA total capacity). The system operates with one active generator and one dedicated standby generator, ensuring uninterrupted refrigeration and product protection during any power outage.",
    generatorSpecs: [
      { label: "Total Generators", value: "2 Units" },
      { label: "Capacity per Generator", value: "500 kVA" },
      { label: "Total Capacity", value: "1 MVA" },
      { label: "Duty Generator", value: "1 Unit" },
      { label: "Standby Generator", value: "1 Unit" },
      { label: "Backup Status", value: "Always Available" },
      { label: "Reliability", value: "N+1 Redundancy" },
    ],
    chargesTitle: "Additional Charges",
    chargesSubtitle: "Handling & Value-Added Services",
    serviceLabel: "Service",
    priceLabel: "Rate (IQD)",
    notesLabel: "Unit / Notes",
    chargeRows: [
      { service: "Loading / Unloading Labor", price: "15,000 IQD", notes: "2 Ton Truck (Boxes)" },
      { service: "Loading / Unloading Labor", price: "150,000 IQD", notes: "Full Barad (Boxes)" },
    ],
    includedTitle: "Rental services including:",
    includedItems: [
      "Advanced temperature control with continuous monitoring.",
      "Site visit access and dedicated client support during business hours.",
      "Real-time inventory system and tracking.",
      "Comprehensive 24/7 security and compliance systems.",
      "Backup power generators during electric power outages.",
    ],
    ctaTitle: "Need a custom plan?",
    ctaDescription: "Contact our team for tailored pricing based on your specific storage requirements.",
    ctaButton: "Request a quotation",
    quoteAria: "Request a quotation for storage",
  },
  AR: {
    eyebrow: "تحسين جابر للتخزين المبرد",
    title: "أسعار التخزين المبرد",
    description: "حلول تخزين مرنة مصممة لتلبية احتياجات أعمالكم.",
    heroCta: "استكشف أسعار التخزين",
    featuresTitle: "الأسعار",
    featuresDescription: "أسعار مرنة وشفافة لحلول التخزين المبرد، مصممة لتلبية احتياجات أعمالكم.",
    benefits: [
      { title: "تحكم متقدم بدرجات الحرارة", description: "إدارة موثوقة لدرجات الحرارة ومراقبة مستمرة." },
      { title: "تخزين آمن", description: "مرافق محمية وأنظمة أمنية على مدار الساعة." },
      { title: "خيارات تخزين مرنة", description: "حلول تخزين للمستودعات والبرادات والطبليات." },
      { title: "دعم مخصص للعملاء", description: "مساعدة عملية لاحتياجات التخزين والخدمات اللوجستية." },
    ],
    pricingTitle: "أسعار حلول التخزين المبرد",
    pricingEyebrow: "خطط التخزين",
    pricingDescription: "اختر نوع التخزين ودرجة الحرارة المناسبة.",
    temperatures: [
      { id: "chilled", label: "مبرد", range: "من 0 إلى +5°م" },
      { id: "frozen", label: "مجمد", range: "−20°م" },
      { id: "dry", label: "جاف", range: "من +16 إلى +20°م" },
    ],
    products: [
      {
        id: "warehouse",
        title: "مستودع كامل",
        description: "مساحة مستودع مخصصة للعمليات الكبيرة.",
        image: "/images/hero-warehouse.jpg",
        rates: { chilled: "5,000,000", frozen: "6,000,000", dry: "4,000,000" },
        features: ["تخزين مخصص في المستودع", "التحكم بدرجات الحرارة ومراقبتها", "تخزين آمن"],
        unit: "شهرياً",
        cta: "اطلب عرض سعر",
      },
      {
        id: "barad",
        title: "براد / حاوية",
        description: "مساحة تخزين مرنة داخل براد مبرد.",
        image: "/images/service-cold-storage-leasing.webp",
        rates: { chilled: "1,000,000", frozen: "1,200,000", dry: "900,000" },
        features: ["تخزين مرن في البرادات", "خيارات مبردة أو مجمدة أو جافة", "مراقبة درجات الحرارة"],
        unit: "شهرياً",
        cta: "اطلب عرض سعر",
      },
      {
        id: "pallet",
        title: "تخزين الطبليات",
        description: "تخزين اقتصادي لأحمال الطبليات الفردية.",
        image: "/images/temperature-storage.jpg",
        rates: { chilled: "50,000", frozen: "60,000", dry: "45,000" },
        features: ["تخزين الطبليات الفردية", "خيارات مبردة أو مجمدة أو جافة", "تتبع المخزون"],
        unit: "للطبلية / شهرياً",
        cta: "اطلب عرض سعر",
      },
      {
        id: "custom",
        title: "حل تخزين مخصص",
        description: "خيارات مصممة لاحتياجات التخزين الكبيرة أو المتخصصة.",
        image: "/images/cold-storage-warehouse-floor.jpg",
        customQuote: true,
        features: ["خطة تخزين تناسب احتياجاتك", "خيارات مبردة أو مجمدة أو جافة", "تواصل مع فريقنا لعرض السعر"],
        unit: "",
        cta: "تواصل مع فريق المبيعات",
      },
    ],
    monthly: "السعر الشهري",
    customQuote: "عرض سعر مخصص",
    generatorTitle: "مولدات الطاقة الاحتياطية",
    generatorAccent: "نظام الطاقة الاحتياطي",
    generatorDescription: "تدعم منشأة التخزين المبرد مولدان بقدرة 500 كيلو فولت أمبير لكل منهما، بإجمالي قدرة مركبة تبلغ 1 ميغا فولت أمبير. يعمل أحدهما كوحدة تشغيل ويبقى الثاني احتياطياً لدعم استمرار التبريد عند انقطاع الكهرباء.",
    generatorSpecs: [
      { label: "إجمالي المولدات", value: "2" },
      { label: "قدرة المولد الواحد", value: "500 kVA" },
      { label: "إجمالي القدرة", value: "1 MVA" },
      { label: "مولد التشغيل", value: "1" },
      { label: "المولد الاحتياطي", value: "1" },
      { label: "حالة الطاقة الاحتياطية", value: "متاحة دائماً" },
      { label: "الموثوقية", value: "تكرار N+1" },
    ],
    chargesTitle: "رسوم إضافية",
    chargesSubtitle: "خدمات المناولة والقيمة المضافة",
    serviceLabel: "الخدمة",
    priceLabel: "السعر (د.ع)",
    notesLabel: "الوحدة / ملاحظات",
    chargeRows: [
      { service: "أجور التحميل والتنزيل", price: "15,000 IQD", notes: "شاحنة 2 طن (كراتين)" },
      { service: "أجور التحميل والتنزيل", price: "150,000 IQD", notes: "براد كامل (كراتين)" },
    ],
    includedTitle: "خدمات الإيجار تشمل:",
    includedItems: [
      "تحكم متقدم بدرجات الحرارة مع مراقبة مستمرة.",
      "إمكانية زيارة الموقع ودعم مخصص للعملاء خلال ساعات العمل.",
      "نظام للمخزون والتتبع في الوقت الفعلي.",
      "أنظمة أمن وامتثال شاملة على مدار الساعة.",
      "مولدات طاقة احتياطية عند انقطاع الكهرباء.",
    ],
    ctaTitle: "هل تحتاج إلى خطة مخصصة؟",
    ctaDescription: "تواصل مع فريقنا للحصول على أسعار مناسبة لاحتياجات التخزين الخاصة بك.",
    ctaButton: "اطلب عرض سعر",
    quoteAria: "اطلب عرض سعر للتخزين",
  },
};

const BENEFIT_ICONS = [Thermometer, ShieldCheck, Package, Headphones];
const GENERATOR_ICONS = [Activity, Zap, BatteryCharging, Activity, BatteryCharging, Check, ShieldCheck];

export default function PricingPage() {
  const { isArabic } = useLanguage();
  const copy = isArabic ? COPY.AR : COPY.EN;
  const [temperature, setTemperature] = useState<TemperatureKey>("chilled");

  return (
    <div className="pricing-page flex min-h-screen flex-col bg-white">
      <Navbar />
      <main dir={isArabic ? "rtl" : "ltr"} className="flex-1">
        <PageHero
          title={copy.title}
          badge={copy.eyebrow}
          description={copy.description}
          imageSrc="/images/hero-warehouse.jpg"
          imagePosition="center 45%"
          slides={[
            { src: "/images/hero-warehouse.jpg", alt: isArabic ? "داخل مستودع تخزين مبرد" : "Interior of a refrigerated warehouse", position: "center 45%", mobilePosition: "60% center" },
            { src: "/images/temperature-storage.jpg", alt: isArabic ? "منصات منظمة داخل غرف التخزين البارد" : "Organized pallets inside cold storage rooms", position: "center 48%", mobilePosition: "58% center" },
            { src: "/images/facility-loading-bays.png", alt: isArabic ? "منطقة استلام في منشأة التخزين" : "Receiving area at the storage facility", position: "center 50%", mobilePosition: "62% center" },
            { src: "/images/home-facility-cinematic.png", alt: isArabic ? "مناولة المنتجات في مرفق مبرد" : "Product handling in a refrigerated facility", position: "center 50%", mobilePosition: "58% center" },
          ]}
          fogIntensity="strong"
          ctaHref="#pricing"
          ctaLabel={copy.heroCta}
        />

        <section aria-labelledby="pricing-features-heading" className="pricing-features-scene relative isolate flex min-h-[570px] flex-col justify-between overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-12 lg:min-h-[520px] lg:px-8 lg:py-14">
          <Image src="/images/pricing-features-cinematic.png" alt="" fill sizes="100vw" className="pricing-features-background object-cover" aria-hidden="true" />
          <div className="pricing-features-shade" aria-hidden="true" />
          <ColdFogOverlay intensity="subtle" speed="slow" direction="right" floorFade={false} edgesOnly opacity={0.38} />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <RevealOnScroll animation="fade-up" duration={700}>
              <h2 id="pricing-features-heading" className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">{copy.featuresTitle}</h2>
              <p className="mt-3 max-w-[620px] text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">{copy.featuresDescription}</p>
            </RevealOnScroll>
          </div>
          <div className="pricing-features-glass relative z-10 mx-auto mt-10 w-full max-w-7xl rounded-xl border border-sky-100/20 bg-[#092441]/55 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <div className="grid grid-cols-1 divide-y divide-sky-100/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {copy.benefits.map((benefit, index) => {
                const Icon = BENEFIT_ICONS[index];
                return (
                  <RevealOnScroll key={benefit.title} animation="fade-up" delay={index * 60} className="h-full">
                    <article className="group flex h-full items-start gap-4 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-6">
                      <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#F07832]" strokeWidth={1.7} aria-hidden="true" />
                      <div>
                        <h3 className="font-heading text-base font-bold leading-snug text-white sm:text-lg">{benefit.title}</h3>
                        <p className="mt-1.5 text-sm leading-5 text-slate-200">{benefit.description}</p>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-heading" className="pricing-plans-atmosphere scroll-mt-24 py-12 text-white sm:py-16 lg:py-18">
          <ColdFogOverlay intensity="subtle" speed="slow" direction="left" floorFade={false} edgesOnly opacity={0.38} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={750} className="relative z-10 mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">{copy.pricingEyebrow}</p>
                <h2 id="pricing-heading" className="mt-1.5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{copy.pricingTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">{copy.pricingDescription}</p>
                <span aria-hidden="true" className="mt-3 block h-0.5 w-16 bg-[#F07832]" />
              </div>
              <div role="tablist" aria-label={isArabic ? "اختر درجة الحرارة" : "Select storage temperature"} className="relative inline-flex w-full rounded-lg border border-white/20 bg-[#061628]/70 p-1 shadow-lg sm:w-auto">
                {copy.temperatures.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={temperature === item.id}
                    aria-controls="pricing-cards"
                    onClick={() => setTemperature(item.id)}
                    className={`min-w-0 flex-1 rounded-md px-3 py-2 text-xs font-semibold transition-all duration-200 sm:flex-initial sm:px-5 ${temperature === item.id ? "bg-[#B84D1B] text-white shadow-[0_4px_16px_rgba(184,77,27,0.32)]" : "text-slate-200 hover:bg-white/10 hover:text-white"}`}
                  >
                    <span className="block">{item.label}</span>
                    <span className="mt-0.5 block whitespace-nowrap text-[9px] font-normal opacity-80">{item.range}</span>
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            <div id="pricing-cards" role="tabpanel" className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {copy.products.map((product) => (
                <RevealOnScroll key={product.id} animation="fade-up" className="h-full">
                  <article className="group relative flex h-full min-h-[450px] flex-col overflow-hidden rounded-xl border border-sky-200/20 bg-[#0a2038]/85 shadow-[0_14px_34px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D86A2D]/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_22px_rgba(184,77,27,0.12)]">
                    <div className="relative h-[150px] overflow-hidden sm:h-[165px]">
                      <Image src={product.image} alt={product.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182c] via-[#07182c]/15 to-transparent" />
                      {!product.customQuote && <span className="absolute bottom-3 start-4 rounded-full border border-white/25 bg-[#061628]/75 px-3 py-1 text-[10px] font-medium text-slate-100 backdrop-blur-sm">{copy.temperatures.find((item) => item.id === temperature)?.label} · {copy.temperatures.find((item) => item.id === temperature)?.range}</span>}
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-5">
                      <h3 className="font-heading text-lg font-bold leading-snug text-white">{product.title}</h3>
                      <p className="mt-1.5 min-h-11 text-sm leading-5 text-slate-300">{product.description}</p>
                      <div key={`${product.id}-${temperature}`} className="pricing-number-in my-3 border-y border-white/10 py-3">
                        {product.customQuote ? (
                          <p className="font-heading text-2xl font-bold text-[#F07832]">{copy.customQuote}</p>
                        ) : (
                          <>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">{copy.monthly}</p>
                            <div className="mt-1 flex flex-wrap items-baseline gap-x-2" dir="ltr">
                              <span className="font-heading text-2xl font-bold tabular-nums text-[#F07832]">{product.rates?.[temperature]}</span>
                              <span className="text-xs font-semibold text-white">IQD</span>
                            </div>
                            <p className="mt-0.5 text-xs text-slate-300">{product.unit}</p>
                          </>
                        )}
                      </div>
                      <ul className="mb-4 space-y-2.5">
                        {product.features.map((feature, index) => (
                          <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-200">
                            <CircleCheck className={`mt-0.5 h-4 w-4 shrink-0 ${index === 0 ? "text-[#F07832]" : "text-slate-300"}`} aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact#contact-location" className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-[7px] border border-white/30 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] hover:border-[#D86A2D] hover:bg-[#B84D1B] hover:shadow-lg focus-visible:scale-[1.02] active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none">
                        {product.cta}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="generator-heading" className="generator-feature relative isolate min-h-[680px] overflow-hidden text-white sm:min-h-[700px]">
          <Image src="/images/pricing-generator.png" alt="" fill sizes="100vw" priority={false} className="generator-feature-background object-cover" aria-hidden="true" />
          <div className="generator-feature-overlay" aria-hidden="true" />
          <div className="generator-feature-atmosphere" aria-hidden="true" />
          <ColdFogOverlay intensity="subtle" speed="medium" direction="right" floorFade={false} edgesOnly opacity={0.38} />
          <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="w-full max-w-[620px]">
              <RevealOnScroll animation="fade-up" duration={750}>
                <h2 id="generator-heading" className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{copy.generatorTitle}</h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#F07832] sm:text-base">{copy.generatorAccent}</p>
              </RevealOnScroll>

              <dl className="generator-feature-specs mt-5 max-w-[580px] sm:mt-6">
              {copy.generatorSpecs.map((spec, index) => {
                const Icon = GENERATOR_ICONS[index];
                return (
                  <RevealOnScroll key={spec.label} animation="fade-up" delay={index * 45} className="generator-feature-row">
                    <Icon className="h-[19px] w-[19px] shrink-0 text-slate-100" strokeWidth={1.7} aria-hidden="true" />
                    <dt className="text-slate-300">{spec.label}</dt>
                    <dd className="text-end font-bold text-white">{spec.value}</dd>
                  </RevealOnScroll>
                );
              })}
              </dl>

              <RevealOnScroll animation="fade-up" delay={180} className="mt-5 max-w-[600px]">
                <p className="text-sm leading-6 text-slate-300">{copy.generatorDescription}</p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section aria-labelledby="charges-heading" className="pricing-plans-atmosphere scroll-mt-24 py-12 text-white sm:py-16 lg:py-18">
          <ColdFogOverlay intensity="subtle" speed="slow" direction="left" floorFade={false} edgesOnly opacity={0.38} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll animation="fade-up" duration={700}>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-200/35 bg-[#061628]/55 text-[#F07832] shadow-[0_0_22px_rgba(71,133,184,0.16)]">
                  <Box className="h-7 w-7" strokeWidth={1.65} aria-hidden="true" />
                </div>
                <div>
                  <h2 id="charges-heading" className="font-heading text-3xl font-bold text-white sm:text-4xl">{copy.chargesTitle}</h2>
                  <p className="mt-1 text-sm text-slate-300">{copy.chargesSubtitle}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-sky-200/20 bg-[#061628]/60 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse text-start text-sm">
                    <thead className="bg-[#142b44]/95 text-white">
                      <tr>
                        <th scope="col" className="w-[34%] px-4 py-3 text-start font-semibold sm:px-5">{copy.serviceLabel}</th>
                        <th scope="col" className="w-[31%] border-s border-white/10 px-4 py-3 text-start font-semibold sm:px-5">{copy.priceLabel}</th>
                        <th scope="col" className="w-[35%] border-s border-white/10 px-4 py-3 text-start font-semibold sm:px-5">{copy.notesLabel}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-100/10">
                      {copy.products.filter((product) => !product.customQuote).map((product) => (
                        <tr key={product.id} className="transition-colors hover:bg-white/[0.035]">
                          <th scope="row" className="px-4 py-3.5 text-start align-top font-medium leading-5 text-slate-100 sm:px-5">{product.title}</th>
                          <td className="border-s border-white/10 px-4 py-3.5 align-top sm:px-5">
                            <div className="space-y-2">
                              {copy.temperatures.map((item) => (
                                <div key={item.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                                  <span className="text-xs text-slate-300">{item.label}</span>
                                  <span dir="ltr" className="whitespace-nowrap text-end font-semibold tabular-nums text-[#F07832]">{product.rates?.[item.id]} IQD</span>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="border-s border-white/10 px-4 py-3.5 align-top sm:px-5">
                            <div className="space-y-2">
                              {copy.temperatures.map((item) => (
                                <div key={item.id} className="text-xs font-semibold leading-5 text-slate-200">{item.range} · {product.unit}</div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {copy.chargeRows.map((row, index) => (
                        <tr key={`${row.notes}-${index}`} className="transition-colors hover:bg-white/[0.035]">
                          <th scope="row" className="px-4 py-3.5 text-start font-medium leading-5 text-slate-100 sm:px-5">{row.service}</th>
                          <td dir="ltr" className="whitespace-nowrap border-s border-white/10 px-4 py-3.5 text-end font-semibold tabular-nums text-[#F07832] sm:px-5">{row.price}</td>
                          <td className="border-s border-white/10 px-4 py-3.5 font-semibold text-slate-200 sm:px-5">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </RevealOnScroll>

            <div className="mt-5 max-w-3xl">
              <h3 className="font-heading text-base font-bold text-white">{copy.includedTitle}</h3>
              <RevealOnScroll animation="fade-up" delay={100}>
                <ul className="mt-2 space-y-1.5">
                  {copy.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#F07832]" strokeWidth={2.5} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section aria-labelledby="pricing-cta-heading" className="pricing-cta relative isolate overflow-hidden border-y border-sky-100/20 px-4 py-4 text-white sm:px-6 sm:py-5 lg:px-8">
          <div aria-hidden="true" className="pricing-cta-background absolute inset-0 -z-10" />
          <div aria-hidden="true" className="pricing-cta-light absolute inset-y-0 end-0 -z-10 w-1/2" />
          <ColdFogOverlay intensity="subtle" speed="slow" direction="right" floorFade={false} edgesOnly opacity={0.28} />
          <div className="relative z-10 mx-auto flex min-h-14 max-w-7xl flex-col items-stretch gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <div className="pricing-cta-icon flex h-12 w-12 shrink-0 items-center justify-center" aria-hidden="true">
                <Headphones className="h-11 w-11 text-[#F07832]" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h2 id="pricing-cta-heading" className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">{copy.ctaTitle}</h2>
                <p className="mt-1 text-sm leading-5 text-slate-200">{copy.ctaDescription}</p>
              </div>
            </div>
            <Link aria-label={copy.quoteAria} href="/contact#contact-location" className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-[7px] border border-[#F08A43] bg-[#B84D1B] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(184,77,27,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#D86A2D] hover:shadow-[0_7px_24px_rgba(240,120,50,0.38)] sm:w-[232px]">
              {copy.ctaButton}<ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
