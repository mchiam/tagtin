import Link from "next/link";
import { Container } from "./Container";
import { Eyebrow } from "./Container";
import { ButtonLink } from "./ButtonLink";

export function PageHero({
  eyebrow,
  title,
  lede,
  offer,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  offer?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] text-balance text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {offer ? (
          <p className="mt-5 font-display text-xl text-slate sm:text-2xl">
            {offer}
          </p>
        ) : null}
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          {lede}
        </p>
        {children}
      </Container>
    </section>
  );
}

export function InlineCtas() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <ButtonLink href="/contact">Book a 2-week Sprint</ButtonLink>
      <ButtonLink href="/studio" variant="ghost">
        Explore Tagtin Studio
      </ButtonLink>
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-medium text-slate underline decoration-mist underline-offset-4 hover:text-navy"
    >
      {children}
    </Link>
  );
}
