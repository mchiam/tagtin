"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealTag = "div" | "section" | "article" | "li" | "ul";

type RevealProps = {
  as?: RevealTag;
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
} & Omit<React.HTMLAttributes<HTMLElement>, "children">;

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delayMs = 0,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      {...rest}
      style={{ transitionDelay: `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function RevealStagger({
  children,
  className = "",
  stepMs = 110,
  childClassName = "h-full",
}: {
  children: React.ReactNode;
  className?: string;
  stepMs?: number;
  childClassName?: string;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delayMs={i * stepMs} className={childClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
