import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, SectionHeading } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { InlineCtas, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fractional Marketing",
  description:
    "Senior marketing capacity, part-time and accountable. Fractional marketing and full storytelling for retail, ecommerce, and brands in Singapore.",
};

const modules = [
  {
    title: "Brand & story platform",
    copy: "Who it is for, what it should feel like, and the one line everything else has to serve. Without this, AI just makes more of the wrong thing.",
  },
  {
    title: "Content engine",
    copy: "A human brief, an AI-accelerated production line, and an edit that still sounds like you. Social, email, web, in-store — same voice.",
  },
  {
    title: "Channel plan",
    copy: "Where Attract, Engage, and Retain actually happen. We pick fewer channels and run them properly.",
  },
  {
    title: "Campaigns & retail",
    copy: "Launches, collections, activations, and the unglamorous calendar that keeps a store moving.",
  },
  {
    title: "Measurement",
    copy: "A short list of numbers that match the brief. We will not decorate a dashboard you do not use.",
  },
  {
    title: "Enablement",
    copy: "If your people should own more of this later, Studio sits alongside the retainer — same language, same standards.",
  },
] as const;

const run = [
  {
    name: "Sprint",
    copy: "Two weeks. Diagnose, decide, ship a first wave. You leave with a story platform and work in market — not a 90-page deck.",
  },
  {
    name: "Install",
    copy: "We plug into your tools, calendar, and decision-makers. Roles are explicit. You always know who is doing what.",
  },
  {
    name: "Ship",
    copy: "Weekly making. Strategy that shows up as assets, not slides. AI where it speeds the work; humans where it is the work.",
  },
  {
    name: "Measure",
    copy: "A simple scorecard against the brief. Keep, cut, or change — in language a founder can use.",
  },
  {
    name: "Expand",
    copy: "More channels, more markets, or Studio for the in-house team. We grow the system only when the last layer is earning its keep.",
  },
] as const;

const faqs = [
  {
    q: "What does ‘fractional’ actually mean here?",
    a: "You get a senior marketing partner at a slice of a full-time hire — typically a retained number of days, not an intern with a fancy title. We set the system, we ship, and we stay answerable to the brief. It is not a freelancer you have to re-brief every Monday.",
  },
  {
    q: "How is this different from a traditional agency?",
    a: "Agencies often sell a campaign, then disappear into production. Fractional means we behave like your marketing function: priorities, calendar, content engine, and the awkward conversations about what to stop. You are not buying a pitch. You are buying capacity.",
  },
  {
    q: "Will you replace a hire I should make?",
    a: "If you already need a full-time head of marketing and a team underneath them, hire them. We are for the gap before that — or beside a lean team that needs senior lift. We will say so if a Sprint shows you should hire instead of retain us.",
  },
  {
    q: "Where does AI show up — and where does it not?",
    a: "AI accelerates drafts, variants, cutdowns, and research once the story is locked. It does not choose the customer, the tension, or the line. If a piece could have been made by anyone with a login, it does not ship.",
  },
  {
    q: "Do you only work in Singapore?",
    a: "We are based in Singapore. A lot of the work is regional or global brands sold locally. Remote collaboration is normal; retail and shoots still happen on the ground when the brief needs it.",
  },
  {
    q: "How does pricing work?",
    a: "The Sprint is a fixed, scoped two weeks. Retainers are set after we have seen the work — days, modules, and outcomes — not a menu of invented packages. We will not publish dummy dollar figures. If you want a number, book the Sprint and we will put one on a page you can sign.",
  },
  {
    q: "Can you work with our existing designer / media / ecom lead?",
    a: "Yes. Fractional is meant to sit with the people you already have. We would rather make your stack coherent than replace it for sport.",
  },
  {
    q: "What do you need from us?",
    a: "A decision-maker who can answer in days, not weeks. Access to the channels you want us to run. Honesty about what has already failed. That is enough to start a Sprint.",
  },
];

export default function FractionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Fractional marketing"
        title="Senior marketing capacity. Part-time. Accountable."
        offer={site.taglines.offer}
        lede="You do not need a department. You need someone who has run the work, can still make the work, and will stay on the hook for whether it landed."
      >
        <InlineCtas />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Hiring is slow. Freelancers are drift. DIY has a ceiling."
            lede="Most brands we meet are stuck between those three. They have a product people could love, a calendar that will not wait, and no senior owner of the story. Fractional is how you get the owner without the org chart."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-3xl bg-navy px-6 py-10 text-cream sm:px-10 sm:py-14">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
              What fractional means
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl sm:text-4xl">
              We sit in the business. We do not visit it.
            </h2>
            <p className="mt-5 max-w-2xl text-cream/80">
              A retained senior partner, a content engine, and a weekly rhythm.
              You get strategy that shows up as shipping — campaigns, channels,
              and the unglamorous follow-through that turns Attract into Retain.
            </p>
            <p className="mt-4 max-w-2xl font-display text-xl text-mist">
              {site.taglines.philosophy}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Included modules"
            title="Pick the stack. Keep the standard."
            lede="Not every retainer is every module. The Sprint tells us which ones you actually need."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-white p-6"
              >
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white/50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it runs"
            title="Sprint → Install → Ship → Measure → Expand"
          />
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {run.map((step, i) => (
              <li
                key={step.name}
                className="rounded-2xl border border-navy/10 bg-white p-5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-navy">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Proof"
            title="This is not theoretical capacity."
            lede="Pokémon, Disney, Robinsons, Hello Kitty — plus the retail and ecommerce work behind the names. See the case cards for published results. We do not pad them."
          />
          <div className="mt-8">
            <ButtonLink href="/work" variant="ghost">
              Read the work
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading eyebrow="Fit check" title="A useful two-minute filter." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-navy/10">
              <h3 className="font-display text-2xl text-navy">Good fit</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-charcoal/80">
                <li>Retail, ecommerce, or services, roughly under 100 people.</li>
                <li>No marketing team — or a small one that needs a senior spine.</li>
                <li>You can make decisions in the Sprint, not after it.</li>
                <li>You want Attract → Engage → Retain as an operating system, not a slogan.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-cream p-7 ring-1 ring-navy/10">
              <h3 className="font-display text-2xl text-navy">Poor fit</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-charcoal/80">
                <li>You need a 24/7 always-on media buying floor on day one.</li>
                <li>The brief is “make us famous” with no customer in mind.</li>
                <li>You want us to rubber-stamp work another vendor already made.</li>
                <li>You are shopping for the cheapest prompt operator in the market.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing, without theatre"
            title="Scoped after we have seen the work."
            lede="We will not invent a public rate card in dollars we have not discussed with you. The Sprint is the priced first move. Retainers follow the modules we actually install. If that feels grown-up rather than mysterious, we will get along."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Straight answers." />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with two weeks."
        lede="A Sprint is enough to see the story, the engine, and whether we should keep going."
      />
    </>
  );
}
