"use client";

import { CinematicHeroSlideshow } from "@/components/CinematicHeroSlideshow";
import { SITE_CONFIG } from "@/data/site-content";
import { useLanguage } from "@/context/LanguageContext";

const HOME_HERO_POSTER = "/images/home-hero-video-poster.jpg";
const HOME_HERO_COPY = {
  EN: [
    {
      title: "Keep the cold chain unbroken",
      description: "Frozen, Chiller, Dry and validated Pharmaceutical Cold rooms – Monitored around the clock in Baghdad.",
    },
    {
      title: "Careful handling at every transfer",
      description: "Sealed loading bays and organized receiving support temperature-sensitive goods through the cold chain.",
    },
    {
      title: "Precision cooling. Complete confidence.",
      description: "From frozen storage to temperature-controlled pharmaceutical facilities, we protect your products with reliable monitoring and carefully managed storage conditions.",
    },
    {
      title: "Your products deserve better protection",
      description: "Secure cold storage, dependable temperature management, and professional handling solutions designed to protect product quality at every stage.",
    },
  ],
  AR: [
    {
      title: "حافظ على استمرارية سلسلة التبريد",
      description: "غرف تخزين مجمدة ومبردة وجافة وصيدلانية معتمدة، تُراقب على مدار الساعة في بغداد.",
    },
    {
      title: "عناية دقيقة عند كل عملية نقل",
      description: "تدعم بوابات التحميل المغلقة والاستلام المنظم نقل البضائع الحساسة لدرجات الحرارة عبر سلسلة التبريد.",
    },
    {
      title: "تبريد دقيق. ثقة تامة.",
      description: "من التخزين المجمد إلى مرافق الأدوية المضبوطة الحرارة، نحمي منتجاتكم بمراقبة موثوقة وظروف تخزين مُدارة بعناية.",
    },
    {
      title: "منتجاتكم تستحق حماية أفضل",
      description: "تخزين مبرد آمن، وإدارة موثوقة لدرجات الحرارة، وحلول مناولة احترافية لحماية جودة المنتجات في كل مرحلة.",
    },
  ],
} as const;

export function HomeHero() {
  const { t, isArabic } = useLanguage();
  const location = isArabic ? "منطقة اليوسفية الصناعية، بغداد، العراق" : "UUAYRIJ INDUSTRIAL AREA, BAGHDAD, IRAQ";
  const slides = (isArabic ? HOME_HERO_COPY.AR : HOME_HERO_COPY.EN).map((copy) => ({
    imageSrc: HOME_HERO_POSTER,
    imageAlt: "",
    imagePosition: "center 48%",
    eyebrow: location,
    eyebrowClassName: "text-[#D86A2D]",
    title: copy.title,
    description: copy.description,
    ctaHref: "/contact",
    ctaLabel: t.home.hero.cta,
  }));

  return (
    <CinematicHeroSlideshow
      slides={slides}
      videoOnly
      textAutoplayOnly
      autoplayIntervalMs={5000}
      backgroundVideoSrc="/videos/home-hero.mp4"
      backgroundVideoPosterSrc={HOME_HERO_POSTER}
      direction={isArabic ? "rtl" : "ltr"}
      secondaryCtaHref="https://wa.me/9647768677775"
      secondaryCtaLabel={SITE_CONFIG.phoneDisplay}
      secondaryCtaLtr
    />
  );
}
