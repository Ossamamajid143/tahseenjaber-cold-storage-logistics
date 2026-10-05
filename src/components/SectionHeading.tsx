import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  highlightText,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 ${
            isDark ? "text-[#D86A2D]" : "text-[#B84D1B]"
          }`}
        >
          <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
          <span>{kicker}</span>
          {isCenter && <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />}
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
          isDark ? "text-white" : "text-[#0A2340]"
        }`}
      >
        {title}{" "}
        {highlightText && (
          <span className={isDark ? "text-[#D86A2D]" : "text-[#B84D1B]"}>
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#66717C]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
