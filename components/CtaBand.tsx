import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function CtaBand({
  title = site.taglines.closer,
  lede = "Senior marketing capacity, AI-accelerated making, and a story your customers will actually finish.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-navy py-20 text-cream sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
              {site.taglines.philosophy}
            </p>
            <h2 className="mt-3 font-display text-3xl text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-cream/80">{lede}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="inverse">
              Book a 2-week Sprint
            </ButtonLink>
            <ButtonLink href="/studio" variant="ghostInverse">
              Explore Tagtin Studio
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
