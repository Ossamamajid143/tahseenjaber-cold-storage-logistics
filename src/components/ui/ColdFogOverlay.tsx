"use client";

import { useEffect, useRef } from "react";

type NoiseGrid = {
  values: Float32Array;
  width: number;
  height: number;
};

function createNoiseGrid(baseWidth: number, baseHeight: number, seed: number): NoiseGrid {
  const width = baseWidth * 8;
  const height = baseHeight * 8;
  const values = new Float32Array(width * height);
  let state = seed >>> 0;

  for (let index = 0; index < values.length; index += 1) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    values[index] = (state >>> 0) / 4294967295;
  }

  return { values, width, height };
}

function smoothstep(value: number) {
  const clamped = Math.max(0, Math.min(1, value));
  return clamped * clamped * (3 - 2 * clamped);
}

function sampleNoise(grid: NoiseGrid, x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothstep(x - x0);
  const ty = smoothstep(y - y0);
  const wrappedX = ((x0 % grid.width) + grid.width) % grid.width;
  const wrappedY = ((y0 % grid.height) + grid.height) % grid.height;
  const nextX = wrappedX + 1 === grid.width ? 0 : wrappedX + 1;
  const nextY = wrappedY + 1 === grid.height ? 0 : wrappedY + 1;
  const topLeft = grid.values[wrappedY * grid.width + wrappedX];
  const topRight = grid.values[wrappedY * grid.width + nextX];
  const bottomLeft = grid.values[nextY * grid.width + wrappedX];
  const bottomRight = grid.values[nextY * grid.width + nextX];
  const top = topLeft + (topRight - topLeft) * tx;
  const bottom = bottomLeft + (bottomRight - bottomLeft) * tx;
  return top + (bottom - top) * ty;
}

function cloudNoise(grid: NoiseGrid, x: number, y: number, driftX: number, driftY: number) {
  let total = 0;
  let weight = 0;

  for (let octave = 0; octave < 4; octave += 1) {
    const frequency = 1 << octave;
    const octaveWeight = 1 / frequency;
    total += sampleNoise(
      grid,
      x * frequency + driftX * frequency,
      y * frequency + driftY * frequency
    ) * octaveWeight;
    weight += octaveWeight;
  }

  return total / weight;
}

export type FogIntensity = "strong" | "soft" | "moderate" | "subtle" | "gentle";
export type FogSpeed = "slow" | "medium" | "fast";
export type FogDirection = "left" | "right";

interface ColdFogOverlayProps {
  transitionColor?: "#FFFFFF" | "#F7F5F0";
  intensity?: FogIntensity;
  speed?: FogSpeed;
  direction?: FogDirection;
  floorFade?: boolean;
  edgesOnly?: boolean;
  opacity?: number;
}

export function ColdFogOverlay({
  transitionColor = "#FFFFFF",
  intensity = "moderate",
  speed = "medium",
  direction = "left",
  floorFade = true,
  edgesOnly = false,
  opacity,
}: ColdFogOverlayProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomFogRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const bottomFog = bottomFogRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!container || !bottomFog || !canvas) return;
    if (!context) {
      container.dataset.fogStatic = "true";
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let motionReduced = reducedMotion.matches;
    if (motionReduced) container.dataset.fogStatic = "true";

    const slowClouds = createNoiseGrid(12, 4, 15731);
    const rollingClouds = createNoiseGrid(16, 5, 61907);
    let imageData = context.createImageData(canvas.width, canvas.height);
    let frameId = 0;
    let parallaxFrameId = 0;
    let lastPaint = 0;
    let visible = true;
    let disposed = false;

    const syncFullAnimation = () => {
      if (visible && !motionReduced && !document.hidden) {
        container.dataset.fogRunning = "true";
      } else {
        delete container.dataset.fogRunning;
      }
    };

    const updateScrollParallax = () => {
      if (parallaxFrameId || motionReduced || !visible || document.hidden) return;
      parallaxFrameId = window.requestAnimationFrame(() => {
        parallaxFrameId = 0;
        const bounds = container.getBoundingClientRect();
        const distanceFromViewportCenter = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
        const offset = Math.max(-14, Math.min(14, distanceFromViewportCenter * 0.012));
        container.style.setProperty("--fog-parallax-offset", `${offset.toFixed(2)}px`);
      });
    };

    const resizeCanvas = () => {
      // Render the same rolling fog over the whole hero. The alpha profile in
      // render() keeps it strongest at the bottom and lets it thin as it rises.
      const width = Math.max(220, Math.min(520, Math.ceil(container.clientWidth * 0.38)));
      const height = Math.max(80, Math.min(220, Math.ceil(container.clientHeight * 0.36)));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        imageData = context.createImageData(width, height);
      }
    };

    const render = (timestamp: number) => {
      frameId = 0;
      if (disposed || motionReduced || !visible || document.hidden) return;
      if (timestamp - lastPaint >= 42) {
        resizeCanvas();
        const width = canvas.width;
        const height = canvas.height;
        const pixels = imageData.data;
        const seconds = timestamp / 1000;
        const slowDriftX = seconds * 0.24;
        const slowDriftY = seconds * 0.035;
        const rollingDriftX = -seconds * 0.19;
        const rollingDriftY = -seconds * 0.055;

        for (let y = 0; y < height; y += 1) {
          const vertical = y / (height - 1);
          const risingFade = smoothstep((vertical - 0.08) / 0.82);
          for (let x = 0; x < width; x += 1) {
            const horizontal = x / width;
            const first = cloudNoise(
              slowClouds,
              horizontal * 12,
              vertical * 4,
              slowDriftX,
              slowDriftY
            );
            const second = cloudNoise(
              rollingClouds,
              horizontal * 16,
              vertical * 5,
              rollingDriftX,
              rollingDriftY
            );
            const firstDensity = smoothstep((first - 0.38) / 0.34) * 0.34;
            const secondDensity = smoothstep((second - 0.4) / 0.33) * 0.28;
            const alpha = (1 - (1 - firstDensity) * (1 - secondDensity)) * risingFade;
            const pixel = (y * width + x) * 4;
            pixels[pixel] = 245;
            pixels[pixel + 1] = 249;
            pixels[pixel + 2] = 252;
            pixels[pixel + 3] = Math.round(alpha * 255);
          }
        }

        context.putImageData(imageData, 0, 0);
        lastPaint = timestamp;
      }

      frameId = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (!frameId && !motionReduced && visible && !document.hidden) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncFullAnimation();
      if (visible) {
        updateScrollParallax();
        start();
      } else if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    });

    const handleVisibilityChange = () => {
      syncFullAnimation();
      if (document.hidden && frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      } else {
        start();
      }
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      motionReduced = event.matches;
      syncFullAnimation();
      if (motionReduced) {
        container.dataset.fogStatic = "true";
        if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
      } else {
        delete container.dataset.fogStatic;
        lastPaint = 0;
        start();
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeCanvas();
    resizeObserver.observe(container);
    observer.observe(container);
    syncFullAnimation();
    window.addEventListener("scroll", updateScrollParallax, { passive: true });
    window.addEventListener("resize", updateScrollParallax, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", handleMotionPreferenceChange);
    start();

    return () => {
      disposed = true;
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateScrollParallax);
      window.removeEventListener("resize", updateScrollParallax);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", handleMotionPreferenceChange);
      if (frameId) window.cancelAnimationFrame(frameId);
      if (parallaxFrameId) window.cancelAnimationFrame(parallaxFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-fog-intensity={intensity}
      data-fog-speed={speed}
      data-fog-direction={direction}
      data-fog-placement={edgesOnly ? "edges" : "full"}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      style={opacity === undefined ? undefined : { opacity: Math.max(0, Math.min(1, opacity)) }}
    >
      <div className="cold-fog-fullscreen absolute inset-0">
        <div className="cold-fog-full-layer cold-fog-full-haze absolute" />
        <div className="cold-fog-full-layer cold-fog-full-mid absolute" />
        <div className="cold-fog-full-layer cold-fog-full-front absolute" />
      </div>
      <canvas ref={canvasRef} className="cold-fog-canvas absolute inset-0 z-[2] h-full w-full" />
      <div ref={bottomFogRef} className="absolute inset-x-0 bottom-0 z-[2] h-[100px] overflow-hidden sm:h-[135px] lg:h-[170px]">
        <div className="cold-fog-static absolute inset-x-[-5%] bottom-0 hidden h-[86%] bg-[url('/images/bg-fog-bottom.png')] bg-repeat-x opacity-40 [background-size:auto_100%]" />
        <div
          className="absolute inset-0"
          style={{
            background: floorFade
              ? `linear-gradient(to top, color-mix(in srgb, ${transitionColor} 32%, transparent) 0%, color-mix(in srgb, ${transitionColor} 22%, transparent) 18%, color-mix(in srgb, ${transitionColor} 10%, transparent) 42%, color-mix(in srgb, ${transitionColor} 4%, transparent) 70%, transparent 100%)`
              : "transparent",
          }}
        />
      </div>
    </div>
  );
}
