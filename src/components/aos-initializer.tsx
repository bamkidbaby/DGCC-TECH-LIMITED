"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AosInitializer() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    let cancelled = false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("aos-enabled");
      return;
    }

    void import("aos").then(({ default: aos }) => {
      if (cancelled) {
        return;
      }

      if (!initialized.current) {
        aos.init({
          duration: 650,
          easing: "ease-out-cubic",
          offset: 65,
          once: true,
          mirror: false,
        });
        initialized.current = true;
      }

      aos.refreshHard();
      document.documentElement.classList.add("aos-enabled");
    }).catch((error: unknown) => {
      if (cancelled) {
        return;
      }

      document.documentElement.classList.remove("aos-enabled");
      console.error("Failed to initialize AOS animations:", error);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
