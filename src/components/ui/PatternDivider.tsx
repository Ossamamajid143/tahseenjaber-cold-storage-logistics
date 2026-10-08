import React from "react";

interface PatternDividerProps {
  className?: string;
  color?: string; // hex or tailwind text color
}

/**
 * Signature 3-pill dash divider (__ _ .) matching the demo design layout
 */
export function PatternDivider({
  className = "mb-6",
  color = "#B84D1B",
}: PatternDividerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 0 100 20"
      width="100"
      className={className}
      role="img"
      aria-label="decorative separator"
    >
      <title>sep</title>
      <path
        d="m2 8h64c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-64c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2zm72 0h16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2zm24 0c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
