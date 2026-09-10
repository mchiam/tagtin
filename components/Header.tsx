"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { nav, sprintHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.06] bg-cream/80 backdrop-blur-md">
      <Container className="flex h-[3.75rem] items-center justify-between gap-6 sm:h-[4.5rem] lg:h-20">
        <Logo priority />
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-[0.9375rem] tracking-tight transition-colors duration-200 motion-reduce:transition-none ${
                  active
                    ? "bg-mist/45 text-navy"
                    : "text-navy/70 hover:bg-navy/[0.04] hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={sprintHref}>Book a Sprint</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy ring-1 ring-navy/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h12M4 10h12M4 14h12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-navy/[0.06] bg-cream lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base text-navy hover:bg-navy/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div onClick={() => setOpen(false)}>
              <ButtonLink href={sprintHref} className="mt-2 w-full">
                Book a Sprint
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
