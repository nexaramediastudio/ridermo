"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

/** Reset scroll when changing routes — Lenis overrides the browser default. */
export default function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isFirst = useRef(true);

  useEffect(() => {
    const scrollTop = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    if (isFirst.current) {
      isFirst.current = false;
      scrollTop();
      return;
    }

    scrollTop();
    requestAnimationFrame(scrollTop);
  }, [pathname, lenis]);

  return null;
}
