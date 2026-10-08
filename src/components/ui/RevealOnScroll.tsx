"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10";
      case "scale-up":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      case "slide-left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10";
      case "slide-right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";
      case "fade-in":
      default:
        return isVisible ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all transform-gpu ease-out ${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
