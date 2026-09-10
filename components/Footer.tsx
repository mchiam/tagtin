import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy text-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo onDark />
            <p className="mt-5 max-w-sm font-display text-xl text-cream">
              {site.taglines.philosophy}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
              AI-driven fractional marketing for retail, ecommerce, and brands
              in Singapore — and wherever the story needs to travel.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/85 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-white"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
              <li className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                <a
                  className="hover:text-white"
                  href={site.social.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:text-white"
                  href={site.social.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="hover:text-white"
                  href={site.social.facebook}
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.taglines.closer}
          </p>
          <p>Internal brand system locked · Voice: sharp, warm, story-first</p>
        </div>
      </Container>
    </footer>
  );
}
