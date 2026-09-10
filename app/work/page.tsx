import type { Metadata } from "next";
import { WorkIndex } from "@/components/CaseCard";
import { Container, SectionHeading } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Tagtin work for Pokémon, Disney, Robinsons, and Hello Kitty — problem, story choice, and published results. No invented metrics.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Problem. Story. Then the result."
        lede="Licensed retail, department-store ecommerce, collections that had to sell through — not just look good in a recap. Where numbers are published, they came from the campaign. Where they are not, we say so."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Case cards"
            title="Four brands. One way of working."
            lede="Each card is the same shape: the problem, the story we chose, whether AI was a lever, and what happened. Older collections were human-led in the room. The engine we run now is built so the next one does not take a small army."
          />
          <div className="mt-10">
            <WorkIndex />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Bring us a brief that has to move product."
        lede="A 2-week Sprint is enough to see if the story holds — and whether we should stay."
      />
    </>
  );
}
