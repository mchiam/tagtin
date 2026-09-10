import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, SectionHeading } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Sprint",
  description:
    "Book a 2-week Tagtin Sprint. Senior fractional marketing for retail, ecommerce, and brands in Singapore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a 2-week Sprint."
        lede="Two weeks to diagnose, lock the story, and ship a first wave. If a retainer is the right next step, we will say so. If hiring is the better move, we will say that too."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Start here"
              title="Tell us the business, not the buzzwords."
              lede="Retail, ecommerce, services — and whether you have a marketing team. We read every brief. We do not auto-reply with a drip sequence."
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-navy">Email</dt>
                <dd>
                  <a
                    className="text-slate hover:text-navy"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Phone / WhatsApp</dt>
                <dd>
                  <a className="text-slate hover:text-navy" href={site.phoneHref}>
                    {site.phone}
                  </a>
                  {" · "}
                  <a
                    className="text-slate hover:text-navy"
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Studio</dt>
                <dd className="text-charcoal/75">
                  For the AI Video Producer day, use the same form and pick up
                  the Studio page — or write “Studio” in the message.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Where</dt>
                <dd className="text-charcoal/75">{site.location}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <ContactForm heading="Sprint enquiry" />
          </div>
        </Container>
      </section>
    </>
  );
}
