"use client";

export function ColdFogOverlay() {
  const fogTexture = {
    backgroundImage: "url('/images/bg-fog-bottom.png')",
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto 100%",
  } as const;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[100px] overflow-hidden sm:h-[135px] lg:h-[170px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.48)_24%,rgba(255,255,255,0.08)_66%,transparent_100%)]" />
      <div
        className="cold-fog-layer cold-fog-layer-back absolute -bottom-1 left-[-5%] h-[86%] w-[110%] opacity-35 sm:opacity-40"
        style={fogTexture}
      />
      <div
        className="cold-fog-layer cold-fog-layer-front absolute -bottom-2 left-[-7%] h-[70%] w-[114%] opacity-25 sm:opacity-30"
        style={fogTexture}
      />
      <div
        className="cold-fog-layer cold-fog-layer-high absolute bottom-[12%] left-[-4%] h-[58%] w-[108%] opacity-20"
        style={fogTexture}
      />
    </div>
  );
}
