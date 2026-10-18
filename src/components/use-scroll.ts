"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

export function useScrolled(threshold = 16) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}

export function useActiveHref(hrefs: string[], fallback = "/") {
  return useSyncExternalStore(
    subscribe,
    () => {
      let active = fallback;
      for (const href of hrefs) {
        const el = href.startsWith("/#") ? document.getElementById(href.slice(2)) : null;
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) active = href;
      }
      return active;
    },
    () => fallback,
  );
}
