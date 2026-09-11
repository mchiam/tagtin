import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const steps = [
  {
    name: "Attract",
    copy: "Find the people who will actually buy — not a vanity audience. Targeting is the whole point of the name.",
  },
  {
    name: "Engage",
    copy: "Talk like a person on the other end of the tin. Stories, offers, and content that sound like your brand, not a broadcast.",
  },
  {
    name: "Retain",
    copy: "Keep them. Loyalty, CRM, and follow-through so the second purchase is easier than the first.",
  },
] as const;

export function ProcessStrip({ invert = false }: { invert?: boolean }) {
  return (
    <div>
      <p
        className={`font-display text-2xl sm:text-3xl ${invert ? "text-cream" : "text-navy"}`}
      >
        {site.taglines.system}
      </p>
      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal as="li" key={step.name} delayMs={index * 120} className="relative">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${invert ? "bg-cream text-navy" : "bg-navy text-cream"}`}
              >
                {index + 1}
              </span>
              {index < steps.length - 1 ? (
                <span
                  className={`hidden h-px flex-1 md:block ${invert ? "bg-cream/25" : "bg-mist"}`}
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <h3
              className={`mt-4 font-display text-2xl ${invert ? "text-cream" : "text-navy"}`}
            >
              {step.name}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${invert ? "text-cream/80" : "text-charcoal/75"}`}
            >
              {step.copy}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
