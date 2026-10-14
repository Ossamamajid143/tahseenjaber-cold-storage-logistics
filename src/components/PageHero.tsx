"use client";

import { CinematicHeroSlideshow } from "@/components/CinematicHeroSlideshow";
import { useLanguage } from "@/context/LanguageContext";

type PageHeroImage = {
  src: string;
  alt: string;
  position?: string;
  mobilePosition?: string;
};

interface PageHeroProps {
  title: string;
  badge?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imagePosition?: string;
  slides?: PageHeroImage[];
  // Kept in the public prop shape for existing call sites. Hero visuals are
  // now intentionally unified across all routes.
  overlayGradient?: string;
  transitionColor?: "#FFFFFF" | "#F7F5F0";
  fogIntensity?: "strong" | "soft" | "moderate" | "subtle" | "gentle";
  layout?: "split" | "left";
}

export function PageHero({
  title,
  badge,
  description,
  ctaHref,
  ctaLabel,
  imageSrc = "/images/facility-exterior-wide.png",
  imagePosition = "center 40%",
  slides,
}: PageHeroProps) {
  const { t, isArabic } = useLanguage();
  const images = slides ?? [
    { src: imageSrc, alt: title, position: imagePosition },
    { src: "/images/home-facility-cinematic.png", alt: title, position: "center 50%" },
    { src: "/images/temperature-storage.jpg", alt: title, position: "center 45%" },
  ];
  const heroSlides = images.map((image) => ({
    imageSrc: image.src,
    imageAlt: image.alt,
    imagePosition: image.position ?? imagePosition,
    mobileImagePosition: image.mobilePosition,
    title,
    description,
    eyebrow: badge,
    ctaHref,
    ctaLabel,
  }));

  return (
    <CinematicHeroSlideshow
      slides={heroSlides}
      direction={isArabic ? "rtl" : "ltr"}
      homeHref="/"
      homeLabel={t.nav.home}
      breadcrumbLabel={title}
      previousLabel={isArabic ? "الشريحة السابقة" : "Previous slide"}
      nextLabel={isArabic ? "الشريحة التالية" : "Next slide"}
      slideLabel={(number, total) => isArabic ? `الشريحة ${number} من ${total}` : `Slide ${number} of ${total}`}
    />
  );
}
