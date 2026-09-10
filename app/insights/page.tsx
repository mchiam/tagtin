import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, SectionHeading } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes from Tagtin on AI-assisted making, retail behaviour, and content that a customer will finish.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Useful, then clever."
        lede="Short notes on making, retail, and the difference between a tool and a story. Full essays will land here; these cards are the working set."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="From the desk"
            title="What we are thinking about."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {insights.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate">
                  {item.topic} · {item.date}
                </p>
                <h2 className="mt-3 font-display text-2xl text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {item.dek}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-charcoal/70">
            Want these applied to your calendar, not just read? A Sprint is the
            faster path.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contact">Book a 2-week Sprint</ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
