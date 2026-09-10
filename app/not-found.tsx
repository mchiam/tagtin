import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-lg text-charcoal/75">
        The story is still on the site. Try home, or skip to a Sprint if you
        already know why you are here.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Book a Sprint
        </ButtonLink>
      </div>
    </Container>
  );
}
