import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { Container, SectionHeading } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tagtin Studio",
  description:
    "Tagtin Studio: AI Video Producer — From Prompt to Publish. One-day intensives. Leave with a finished asset. Story before the prompt.",
};

const day = [
  {
    title: "Story before the prompt",
    copy: "Who it is for, what should change in their head, and the one narrative decision everything else hangs on. If this is fuzzy, the tool will not save you.",
  },
  {
    title: "Prompt with a brief, not a vibe",
    copy: "We build prompts from the story platform — voice, constraints, references — so the model has a job. Playtime is scheduled. Wandering is not the curriculum.",
  },
  {
    title: "Make, edit, decide",
    copy: "You will cut, reject, and lock. Taste is the skill. The software is the speed.",
  },
  {
    title: "Publish",
    copy: "Leave with a finished asset and a repeatable method. Not a folder of almosts.",
  },
] as const;

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Tagtin Studio"
        title="AI Video Producer — From Prompt to Publish"
        offer="One day. Limited seats. You leave with a finished asset."
        lede="A practical intensive for marketers, founders, and in-house teams who need video on the calendar — without pretending a tool is a director. Story-led. AI-driven. Human always."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#register">Register interest</ButtonLink>
          <ButtonLink href="/fractional-marketing" variant="ghost">
            Need this as a system?
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The point"
                title="Story before the prompt."
                lede="Most AI video workshops start in the interface. We start with the customer, the tension, and the cut you are trying to land. Then we use the tools hard. You should walk out with something you would actually post — and the judgement to do it again on a Tuesday."
              />
            </div>
            <aside className="rounded-2xl bg-navy p-7 text-cream lg:col-span-5">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mist">
                Format
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/85">
                <li>One-day intensive, small room, limited seats.</li>
                <li>B2C and B2B tracks — same standard, different stories.</li>
                <li>Certified educator in the room, not a product demo in disguise.</li>
                <li>Bring a real brief if you have one. We prefer live ammunition.</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white/50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How the day runs" title="Four moves. One film." />
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {day.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-white p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {item.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="After the room"
            title="A workshop is a day. Fractional is the operating system."
            lede="If the intensive works, the next question is usually: who keeps this going when the calendar gets rude? That is the retainer. Same story platform, same engine, on your business every week."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/fractional-marketing">
              Fractional marketing
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Book a 2-week Sprint
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="register" className="pb-16 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Seats"
              title="Register interest."
              lede={`Dates are announced to this list first. Prefer email? ${site.email}. Prefer a call? ${site.phone}.`}
            />
          </div>
          <div className="lg:col-span-7">
            <ContactForm intent="studio" heading="Studio interest" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Learn it. Then install it."
        lede="Studio for the craft. Sprint for the business. Both under the same roof."
      />
    </>
  );
}
