"use client";

import { CinematicHeroSlideshow } from "@/components/CinematicHeroSlideshow";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

const HOME_SLIDE_IMAGES = [
  { src: "/images/facility-exterior-wide.png", altEn: "Tahseen Jaber Cold Storage facility exterior", altAr: "الواجهة الخارجية لمنشأة تحسين جابر للتخزين المبرد", position: "center 48%", mobile: "64% center" },
  { src: "/images/facility-loading-bays.png", altEn: "Loading bays at the Tahseen Jaber cold storage facility", altAr: "أرصفة التحميل في منشأة تحسين جابر للتخزين المبرد", position: "center 50%", mobile: "62% center" },
  { src: "/images/service-cold-storage-leasing.webp", altEn: "Cold storage warehouse", altAr: "مستودع تخزين مبرد", position: "center 50%", mobile: "56% center" },
  { src: "/images/temperature-storage.jpg", altEn: "Temperature controlled storage rooms", altAr: "غرف تخزين مضبوطة الحرارة", position: "center 48%", mobile: "60% center" },
  { src: "/images/hero-warehouse.jpg", altEn: "Interior of the Tahseen Jaber cold storage warehouse", altAr: "الجزء الداخلي لمستودع تحسين جابر للتخزين المبرد", position: "center 50%", mobile: "64% center" },
];

const HOME_SLIDE_COPY = {
  en: [
    { title: "Keep the cold chain unbroken", description: "Frozen, Chiller, Dry and validated Pharmaceutical Cold rooms – Monitored around the clock in Baghdad." },
    { title: "Careful handling at every transfer", description: "Sealed loading bays and organized receiving support temperature-sensitive goods through the cold chain." },
    { title: "Storage built around your needs", description: "Flexible cold storage for perishable and temperature-sensitive products, with professional facility operations." },
    { title: "A range of storage conditions", description: "Chilled and frozen chambers support product requirements across the documented facility temperature range." },
    { title: "Reliable cold storage in Baghdad", description: "Professional storage and handling help protect products from receiving through dispatch." },
  ],
  ar: [
    { title: "حافظ على سلسلة التبريد دون انقطاع", description: "غرف تخزين بارد مجمدة ومبردة وجافة ودوائية معتمدة، تتم مراقبتها على مدار الساعة في بغداد." },
    { title: "مناولة دقيقة في كل عملية نقل", description: "تدعم بوابات التحميل المغلقة واستلام البضائع المنظم حركة المنتجات الحساسة للحرارة عبر سلسلة التبريد." },
    { title: "تخزين مصمم لتلبية احتياجاتك", description: "تخزين مبرد مرن للمنتجات القابلة للتلف والحساسة للحرارة، مع عمليات منشأة احترافية." },
    { title: "مجموعة من ظروف التخزين", description: "تدعم غرف التخزين المبرد والمجمد متطلبات المنتجات ضمن نطاقات التخزين المعتمدة." },
    { title: "تخزين مبرد موثوق في بغداد", description: "تساعد خدمات التخزين والمناولة المهنية على حماية المنتجات من الاستلام حتى الإرسال." },
  ],
};

export function HomeHero() {
  const { t, isArabic } = useLanguage();
  const localeCopy = isArabic ? HOME_SLIDE_COPY.ar : HOME_SLIDE_COPY.en;
  const slides = HOME_SLIDE_IMAGES.map((image, index) => ({
    imageSrc: image.src,
    imageAlt: isArabic ? image.altAr : image.altEn,
    imagePosition: image.position,
    mobileImagePosition: image.mobile,
    eyebrow: isArabic ? "منطقة اليوسفية الصناعية، بغداد، العراق" : "Uuayrij Industrial Area, Baghdad, Iraq",
    eyebrowClassName: "text-[#D86A2D]",
    title: index === 0 ? t.home.hero.title : localeCopy[index].title,
    description: index === 0 ? t.home.hero.desc : localeCopy[index].description,
    ctaHref: "/contact",
    ctaLabel: t.home.hero.cta,
  }));

  return (
    <CinematicHeroSlideshow
      slides={slides}
      backgroundVideoSrc="/videos/home-hero.mp4"
      direction={isArabic ? "rtl" : "ltr"}
      secondaryCtaHref="https://wa.me/9647768677775"
      secondaryCtaLabel={SITE_CONFIG.phoneDisplay}
      secondaryCtaLtr
      previousLabel={isArabic ? "الشريحة السابقة" : "Previous slide"}
      nextLabel={isArabic ? "الشريحة التالية" : "Next slide"}
      slideLabel={(number, total) => isArabic ? `الشريحة ${number} من ${total}` : `Slide ${number} of ${total}`}
    />
  );
}
