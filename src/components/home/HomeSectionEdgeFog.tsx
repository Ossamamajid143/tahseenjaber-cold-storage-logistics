"use client";

import { ColdFogOverlay } from "@/components/ui/ColdFogOverlay";

export function HomeSectionEdgeFog({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <ColdFogOverlay
      intensity="subtle"
      speed="slow"
      direction={direction}
      floorFade={false}
      edgesOnly
      opacity={0.38}
    />
  );
}
