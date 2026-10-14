"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavbarHeight } from "@/components/useNavbarHeight";
import { ColdFogOverlay } from "@/components/ui/ColdFogOverlay";

export type CinematicHeroSlide = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  eyebrow?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

type CinematicHeroSlideshowProps = {
  slides: CinematicHeroSlide[];
  direction?: "ltr" | "rtl";
  homeHref?: string;
  homeLabel?: string;
  breadcrumbLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  slideLabel?: (slideNumber: number, total: number) => string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLtr?: boolean;
  fogEdgesOnly?: boolean;
};

const TRANSITION_MS = 1200;
const AUTOPLAY_MS = 4000;

function HeroSlideCopy({
  slide,
  rtl,
  secondaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaLtr,
  className,
}: {
  slide: CinematicHeroSlide;
  rtl: boolean;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLtr: boolean;
  className: string;
}) {
  return (
    <div className={className}>
      {slide.eyebrow && <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-xs"><span className="h-[2px] w-8 bg-[#D86A2D]" />{slide.eyebrow}</div>}
      <h1 className="hero-title max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">{slide.title}</h1>
      {slide.description && <p className="mt-5 max-w-2xl border-s-2 border-[#D86A2D] bg-[#061628]/25 px-4 py-2 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">{slide.description}</p>}
      {(slide.ctaHref && slide.ctaLabel || secondaryCtaHref && secondaryCtaLabel) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {slide.ctaHref && slide.ctaLabel && <Link href={slide.ctaHref} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0A2340] shadow-md transition-colors hover:bg-[#D86A2D] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{slide.ctaLabel}<ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" /></Link>}
          {secondaryCtaHref && secondaryCtaLabel && <Link href={secondaryCtaHref} className="inline-flex min-h-11 items-center rounded-md border border-white/45 bg-[#061628]/35 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" dir={secondaryCtaLtr ? "ltr" : undefined}>{secondaryCtaLabel}</Link>}
        </div>
      )}
    </div>
  );
}

export function CinematicHeroSlideshow({
  slides,
  direction = "ltr",
  homeHref,
  homeLabel,
  breadcrumbLabel,
  previousLabel,
  nextLabel,
  slideLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaLtr = false,
  fogEdgesOnly = false,
}: CinematicHeroSlideshowProps) {
  const navbarHeight = useNavbarHeight();
  const [activeIndex, setActiveIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [previousTextIndex, setPreviousTextIndex] = useState<number | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [incomingReady, setIncomingReady] = useState(true);
  const [paused, setPaused] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const activeSlide = slides[activeIndex] ?? slides[0];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];
  const textSlide = slides[textIndex] ?? activeSlide;
  const rtl = direction === "rtl";
  const resolvedPreviousLabel = previousLabel ?? (rtl ? "الشريحة السابقة" : "Previous slide");
  const resolvedNextLabel = nextLabel ?? (rtl ? "الشريحة التالية" : "Next slide");
  const resolvedSlideLabel = slideLabel ?? ((number, total) => rtl ? `الشريحة ${number} من ${total}` : `Slide ${number} of ${total}`);

  const goTo = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex || slides.length < 2) return;
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    setPreviousIndex((currentPrevious) => currentPrevious ?? activeIndex);
    setIncomingReady(false);
    setActiveIndex((nextIndex + slides.length) % slides.length);
  }, [activeIndex, slides.length]);

  const markIncomingReady = useCallback((index: number) => {
    if (index !== activeIndex) return;
    setIncomingReady(true);
    setPreviousTextIndex(textIndex === index ? null : textIndex);
    setTextIndex(index);
  }, [activeIndex, textIndex]);

  useEffect(() => {
    if (!incomingReady || previousIndex === null) return;
    transitionTimer.current = window.setTimeout(() => {
      setPreviousIndex(null);
      setPreviousTextIndex(null);
      transitionTimer.current = null;
    }, TRANSITION_MS);
    return () => {
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
        transitionTimer.current = null;
      }
    };
  }, [incomingReady, previousIndex]);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    const schedule = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      if (motionPreference.matches || document.hidden) return;
      timer = window.setTimeout(() => goTo((activeIndex + 1) % slides.length), AUTOPLAY_MS);
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    motionPreference.addEventListener("change", schedule);
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
      motionPreference.removeEventListener("change", schedule);
    };
  }, [activeIndex, goTo, paused, slides.length]);

  if (!slides.length) return null;
  const height = `max(calc(100vh - ${navbarHeight}px), calc(100svh - ${navbarHeight}px), calc(100dvh - ${navbarHeight}px))`;
  const imageStyle = (slide: CinematicHeroSlide) => ({
    "--cinematic-image-position": slide.imagePosition ?? "center 48%",
    "--cinematic-mobile-position": slide.mobileImagePosition ?? slide.imagePosition ?? "center 48%",
  }) as CSSProperties;

  return (
    <section
      className="relative isolate flex items-center overflow-hidden bg-[#071D32] text-white"
      style={{ minHeight: height }}
      dir={direction}
      aria-roledescription={rtl ? "عرض شرائح" : "carousel"}
      aria-label={rtl ? "صور ومعلومات التخزين المبرد" : "Cold-storage highlights"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#071D32]" aria-hidden="true">
        {previousSlide && (
          <Image
            key={`previous-${previousIndex}-${previousSlide.imageSrc}`}
            src={previousSlide.imageSrc}
            alt=""
            fill
            sizes="100vw"
            className={`cinematic-hero-photo object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out motion-reduce:transition-none ${incomingReady ? "scale-[1.035] opacity-0" : "scale-100 opacity-100"}`}
            style={imageStyle(previousSlide)}
            aria-hidden="true"
          />
        )}
        <Image
          key={`active-${activeIndex}-${activeSlide.imageSrc}`}
          src={activeSlide.imageSrc}
          alt=""
          fill
          sizes="100vw"
          preload={activeIndex === 0}
          loading={activeIndex === 0 ? undefined : "lazy"}
          onLoad={() => markIncomingReady(activeIndex)}
          onError={() => markIncomingReady(activeIndex)}
          className={`cinematic-hero-photo object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out motion-reduce:transition-none ${previousIndex === null || incomingReady ? "scale-[1.035] opacity-100" : "scale-100 opacity-0"}`}
          style={imageStyle(activeSlide)}
          aria-hidden="true"
        />
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-[#061628]/85 via-[#061628]/55 to-[#061628]/20" />
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-t from-[#061628]/65 via-transparent to-[#061628]/20" />
        <ColdFogOverlay transitionColor="#FFFFFF" intensity="subtle" speed="slow" direction="left" floorFade={false} edgesOnly={fogEdgesOnly} opacity={0.24} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-7xl flex-col justify-center px-5 pb-28 pt-16 sm:px-8 sm:pb-32 lg:px-12">
        <div className="relative max-w-3xl">
          {previousTextIndex !== null && <div aria-hidden="true"><HeroSlideCopy slide={slides[previousTextIndex]} rtl={rtl} secondaryCtaHref={secondaryCtaHref} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaLtr={secondaryCtaLtr} className="hero-copy-out pointer-events-none absolute inset-x-0 top-0 z-0 max-w-3xl" /></div>}
          <HeroSlideCopy key={`copy-${textIndex}`} slide={textSlide} rtl={rtl} secondaryCtaHref={secondaryCtaHref} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaLtr={secondaryCtaLtr} className="hero-copy-in relative z-10 max-w-3xl" />
        </div>
        {homeHref && breadcrumbLabel && <div className="mt-8 text-xs text-white/80"><Link href={homeHref} className="transition-colors hover:text-white">{homeLabel}</Link><span aria-hidden="true" className="mx-2 text-white/50">/</span><span className="font-semibold text-[#E8793D]">{breadcrumbLabel}</span></div>}
      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-5 bottom-6 z-20 flex items-center justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-12">
          <div className="flex items-center gap-2" role="group" aria-label={rtl ? "اختيار الشريحة" : "Choose a slide"}>
            {slides.map((slide, index) => <button key={`${slide.imageSrc}-${index}`} type="button" onClick={() => goTo(index)} aria-label={resolvedSlideLabel(index + 1, slides.length)} aria-current={activeIndex === index ? "true" : undefined} className="group flex min-h-11 min-w-7 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-9"><span className={`h-1 rounded-full transition-all duration-500 ${activeIndex === index ? "w-9 bg-white sm:w-12" : "w-5 bg-white/45 group-hover:bg-white/75 sm:w-7"}`} /></button>)}
            <span className="ms-2 min-w-12 text-xs font-semibold tabular-nums text-white/85" dir="ltr">{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => goTo((activeIndex - 1 + slides.length) % slides.length)} aria-label={resolvedPreviousLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#061628]/25 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft className={`h-5 w-5 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" /></button>
            <button type="button" onClick={() => goTo((activeIndex + 1) % slides.length)} aria-label={resolvedNextLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#061628]/25 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowRight className={`h-5 w-5 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </section>
  );
}
