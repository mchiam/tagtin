import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow, SectionHeading } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ProcessStrip } from "@/components/ProcessStrip";
import { WorkTeaser } from "@/components/CaseCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Tagtin | AI-Driven Fractional Marketing for Retail & Brands",
  },
  description:
    "Tagtin is the AI-driven fractional marketing partner for retail, ecommerce, and brands that need senior strategy and content, but don’t need a 10-person department.",
};

const proof = ["Pokémon", "Disney", "Robinsons", "Hello Kitty"] as const;

const solutions = [
  {
    title: "Fractional Marketing",
    href: "/fractional-marketing",
    copy: "Senior strategy and content, part-time, on your business. A marketing function you can hold accountable — without hiring the department.",
    offer: site.taglines.offer,
  },
  {
    title: "AI Content Engine",
    href: "/fractional-marketing",
    copy: "Production that keeps up with retail calendars. Humans set the story; AI accelerates the making. Nothing ships that we would not put our name on.",
    offer: "Faster making. Same standards.",
  },
  {
    title: "Tagtin Studio",
    href: "/studio",
    copy: "Learn to go from prompt to publish in a day. Story first, tools second — then take a finished asset home.",
    offer: "From Prompt to Publish",
  },
] as const;

const offers = [
  {
    name: "Sprint",
    time: "2 weeks",
    copy: "Diagnose the gap, lock the story, and ship a first wave of work. The clean way to see how we think before a retainer.",
  },
  {
    name: "Retainer",
    time: "Fractional install",
    copy: "Ongoing senior capacity: strategy, content engine, channels, and measurement. We sit in the business and keep shipping.",
  },
  {
    name: "Studio",
    time: "One-day intensives",
    copy: "For teams who want the craft in-house. AI Video Producer and related curricula — B2C and B2B.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10">
        <Container className="py-16 sm:py-24 lg:py-28">
          <Eyebrow>Singapore · AI-driven fractional marketing</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] text-balance text-navy sm:text-6xl lg:text-[4.25rem]">
            Your marketing team — without hiring one.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
            Tagtin is the AI-driven fractional marketing partner for retail,
            ecommerce, and brands that need senior strategy and content, but
            don’t need a 10-person department.
          </p>
          <p className="mt-6 font-display text-2xl text-slate italic sm:text-3xl">
            {site.taglines.philosophy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Book a 2-week Sprint</ButtonLink>
            <ButtonLink href="/studio" variant="ghost">
              Explore Tagtin Studio
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section
        aria-label="Brand experience"
        className="border-b border-navy/10 bg-white/60"
      >
        <Container className="py-8">
          <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate">
            Work for brands the world already knows
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {proof.map((brand) => (
              <li
                key={brand}
                className="font-display text-xl tracking-tight text-navy sm:text-2xl"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The gap"
            title="You’re past DIY. You’re not ready for a full team."
            lede="Canva-and-hope has a ceiling. A head of marketing plus three hires is a six-figure decision you may not need yet. Fractional is the missing rung: senior people, AI-accelerated production, accountable to a calendar."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="How we show up"
            title="Three ways in. One standard."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {solutions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-colors hover:border-slate/50 sm:p-7"
              >
                <h3 className="font-display text-2xl text-navy group-hover:text-slate">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate">
                  {item.offer}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                  {item.copy}
                </p>
                <span className="mt-6 text-sm font-medium text-navy">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-cream sm:py-20">
        <Container>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
            The system
          </p>
          <div className="mt-4">
            <ProcessStrip invert />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="font-display text-3xl text-navy">Who it’s for</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/80">
                <li>Retail, ecommerce, and service brands under ~100 staff.</li>
                <li>Founders and operators with no marketing team — or a team stretched thin.</li>
                <li>People who want senior thinking, not more junior hands to brief.</li>
                <li>Teams ready to use AI as an engine, not as a personality.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-7">
              <h2 className="font-display text-3xl text-navy">Who it’s not for</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/80">
                <li>Enterprises shopping for a 20-person roster and a pitch theatre.</li>
                <li>Brands whose strategy is “go viral.”</li>
                <li>Anyone hoping a model will replace the brief.</li>
                <li>Projects that need mystique more than a customer.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white/50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Story first. Then the numbers."
            lede="Campaigns for names people already trust — Pokémon, Disney, Robinsons, Hello Kitty. We publish results when they are real. We do not invent them."
          />
          <div className="mt-10">
            <WorkTeaser />
          </div>
          <div className="mt-8">
            <ButtonLink href="/work" variant="ghost">
              All work
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Tagtin"
            title="Global brand experience. Certified educator. Proven success."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Why
              title="Global brand experience"
              copy="Campaigns and content for Pokémon, Disney, Robinsons, and Hello Kitty — plus the unglamorous retail work that makes licensed collections actually move."
            />
            <Why
              title="Certified educator"
              copy="Tagtin Studio is how we teach the craft: AI content curricula for people who still have to ship on Monday. Story before the prompt."
            />
            <Why
              title="Proven success"
              copy="Sell-through, PR value, traffic, and CRM lifts we can point to. If a number is on this site, it was earned on a real brief."
            />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Ways to work"
            title="Sprint. Retainer. Studio."
            lede={site.taglines.offer}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className="rounded-2xl bg-navy p-7 text-cream"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
                  {offer.time}
                </p>
                <h3 className="mt-2 font-display text-3xl">{offer.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">
                  {offer.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Why({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-white p-6">
      <h3 className="font-display text-2xl text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{copy}</p>
    </article>
  );
}
