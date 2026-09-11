"use client";

import { useEffect, useRef } from "react";

export function Parallax({
  children,
  className = "",
  speed = 0.18,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel as a fraction of scrollY. Positive = linger (move down). */
  speed?: number;
  /** Extra rotation in degrees per pixel of scroll. */
  rotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const rot = rotate ? ` rotate(${y * rotate}deg)` : "";
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(2)}px, 0)${rot}`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, rotate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
