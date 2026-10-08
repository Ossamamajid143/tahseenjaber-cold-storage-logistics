"use client";

import { useSyncExternalStore } from "react";

// Matches the header's unscrolled 48px content plus its vertical padding and border.
const INITIAL_NAVBAR_HEIGHT = 81;

function subscribeToNavbarSize(onChange: () => void) {
  const header = document.querySelector("header");
  if (!header) return () => {};

  const observer = new ResizeObserver(onChange);
  observer.observe(header);
  window.addEventListener("resize", onChange);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", onChange);
  };
}

function getNavbarHeight() {
  const header = document.querySelector("header");
  return header ? Math.ceil(header.getBoundingClientRect().height) : 0;
}

export function useNavbarHeight() {
  return useSyncExternalStore(
    subscribeToNavbarSize,
    getNavbarHeight,
    () => INITIAL_NAVBAR_HEIGHT,
  );
}
