import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Card,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ClayPlus } from "@/components/ClayPlus";
import { HeroArt, HeroMobileChips } from "@/components/HeroArt";
import { Parallax } from "@/components/Parallax";
import { ProcessStrip } from "@/components/ProcessStrip";
import { Reveal, RevealStagger } from "@/components/Reveal";
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
      <section className="relative overflow-hidden">
        <Parallax
          speed={0.45}
          className="pointer-events-none absolute -right-24 top-0 motion-reduce:hidden"
        >
          <div
            aria-hidden="true"
            className="h-[28rem] w-[28rem] rounded-full bg-mist/30 blur-3xl"
          />
        </Parallax>
        <Parallax
          speed={0.2}
          className="pointer-events-none absolute -left-20 bottom-10 motion-reduce:hidden"
        >
          <div
            aria-hidden="true"
            className="h-64 w-64 rounded-full bg-slate/15 blur-3xl"
          />
        </Parallax>
        <Container className="relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 lg:py-28">
          <div className="hero-intro">
            <Eyebrow>Singapore · AI-driven fractional marketing</Eyebrow>
            <h1 className="mt-6 max-w-xl font-display text-[2.5rem] leading-[1.05] text-balance text-navy sm:text-6xl lg:text-[4.15rem]">
              Your marketing team — without hiring one.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-charcoal/75 sm:text-xl">
              Tagtin is the AI-driven fractional marketing partner for retail,
              ecommerce, and brands that need senior strategy and content, but
              don’t need a 10-person department.
            </p>
            <p className="mt-7 font-display text-2xl text-slate italic sm:text-[1.85rem]">
              {site.taglines.philosophy}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a 2-week Sprint</ButtonLink>
              <ButtonLink href="/studio" variant="ghost">
                Explore Tagtin Studio
              </ButtonLink>
            </div>
            <HeroMobileChips />
          </div>
          <HeroArt />
        </Container>
      </section>

      <Reveal as="section" aria-label="Brand experience">
        <Container className="pb-6 sm:pb-10">
          <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate">
            Work for brands the world already knows
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {proof.map((brand) => (
              <li
                key={brand}
                className="font-display text-xl tracking-tight text-navy/80 sm:text-[1.65rem]"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>

      <Reveal as="section" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The gap"
            title="You’re past DIY. You’re not ready for a full team."
            lede="Canva-and-hope has a ceiling. A head of marketing plus three hires is a six-figure decision you may not need yet. Fractional is the missing rung: senior people, AI-accelerated production, accountable to a calendar."
          />
        </Container>
      </Reveal>

      <section className="relative overflow-hidden pb-20 sm:pb-28">
        <Parallax
          speed={0.28}
          className="pointer-events-none absolute -right-24 top-8 motion-reduce:hidden"
        >
          <div className="h-72 w-72 rounded-full bg-mist/25 blur-3xl" />
        </Parallax>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we show up"
              title="Three ways in. One standard."
            />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-8"
              >
                {item.title === "Tagtin Studio" ? (
                  <ClayPlus
                    mist
                    size={128}
                    className="pointer-events-none absolute -bottom-7 -right-8 z-0 opacity-90 transition-transform duration-500 group-hover:translate-y-1 motion-reduce:transform-none"
                  />
                ) : null}
                <h3 className="relative z-[1] font-display text-[1.85rem] leading-tight text-navy group-hover:text-slate">
                  {item.title}
                </h3>
                <p className="relative z-[1] mt-2 text-sm font-medium text-slate">
                  {item.offer}
                </p>
                <p className="relative z-[1] mt-5 flex-1 text-[0.95rem] leading-relaxed text-charcoal/75">
                  {item.copy}
                </p>
                <span className="relative z-[1] mt-8 text-sm font-medium text-navy">
                  Learn more →
                </span>
              </Link>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <Reveal as="section" className="px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-cream sm:px-10 sm:py-20">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mist">
            The system
          </p>
          <div className="mt-5">
            <ProcessStrip invert />
          </div>
        </div>
      </Reveal>

      <section className="py-20 sm:py-28">
        <Container>
          <RevealStagger className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-3xl text-navy">Who it’s for</h2>
              <ul className="mt-6 space-y-3 text-[0.95rem] leading-relaxed text-charcoal/75">
                <li>Retail, ecommerce, and service brands under ~100 staff.</li>
                <li>Founders and operators with no marketing team — or a team stretched thin.</li>
                <li>People who want senior thinking, not more junior hands to brief.</li>
                <li>Teams ready to use AI as an engine, not as a personality.</li>
              </ul>
            </Card>
            <Card>
              <h2 className="font-display text-3xl text-navy">Who it’s not for</h2>
              <ul className="mt-6 space-y-3 text-[0.95rem] leading-relaxed text-charcoal/75">
                <li>Enterprises shopping for a 20-person roster and a pitch theatre.</li>
                <li>Brands whose strategy is “go viral.”</li>
                <li>Anyone hoping a model will replace the brief.</li>
                <li>Projects that need mystique more than a customer.</li>
              </ul>
            </Card>
          </RevealStagger>
        </Container>
      </section>

      <section className="relative overflow-hidden py-8 sm:py-12">
        <Parallax
          speed={0.24}
          className="pointer-events-none absolute -left-20 bottom-0 motion-reduce:hidden"
        >
          <div className="h-56 w-56 rounded-full bg-slate/10 blur-3xl" />
        </Parallax>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Story first. Then the numbers."
              lede="Campaigns for names people already trust — Pokémon, Disney, Robinsons, Hello Kitty. We publish results when they are real. We do not invent them."
            />
          </Reveal>
          <div className="mt-12">
            <WorkTeaser />
          </div>
          <Reveal delayMs={200} className="mt-10">
            <ButtonLink href="/work" variant="ghost">
              All work
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Tagtin"
              title="Global brand experience. Certified educator. Proven success."
            />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
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
          </RevealStagger>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ways to work"
              title="Sprint. Retainer. Studio."
              lede={site.taglines.offer}
            />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className="h-full rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] sm:p-8"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate">
                  {offer.time}
                </p>
                <h3 className="mt-3 font-display text-3xl text-navy">
                  {offer.name}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/75">
                  {offer.copy}
                </p>
              </article>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Why({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] sm:p-8">
      <h3 className="font-display text-2xl text-navy">{title}</h3>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/75">
        {copy}
      </p>
    </article>
  );
}
