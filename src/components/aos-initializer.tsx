"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AosInitializer() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    let cancelled = false;

    void import("aos").then(({ default: aos }) => {
      if (cancelled) {
        return;
      }

      if (!initialized.current) {
        aos.init({
          duration: 750,
          easing: "ease-out-cubic",
          offset: 80,
          once: true,
          disable: () =>
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
        initialized.current = true;
      }

      aos.refreshHard();
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
