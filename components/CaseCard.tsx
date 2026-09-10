import Link from "next/link";
import { cases, type CaseStudy } from "@/lib/work";
import { ButtonLink } from "./ButtonLink";

export function CaseCard({
  item,
  featured = false,
}: {
  item: CaseStudy;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] ${featured ? "sm:p-9" : "sm:p-8"}`}
    >
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate">
        {item.brand}
      </p>
      <h3 className="mt-2 font-display text-2xl text-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
        {item.summary}
      </p>
      <dl className="mt-6 space-y-4 text-sm">
        <Block term="Problem" detail={item.problem} />
        <Block term="Story choice" detail={item.story} />
        {item.aiAssist ? (
          <Block term="AI assist" detail={item.aiAssist} />
        ) : null}
        <Block term="Result" detail={item.result} />
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-cream px-3 py-1 text-xs text-navy/80"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Block({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="font-medium text-navy">{term}</dt>
      <dd className="mt-1 leading-relaxed text-charcoal/75">{detail}</dd>
    </div>
  );
}

export function WorkTeaser() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {cases.slice(0, 3).map((item) => (
        <Link
          key={item.slug}
          href="/work"
          className="group flex flex-col rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-8"
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate">
            {item.brand}
          </p>
          <h3 className="mt-2 font-display text-2xl text-navy group-hover:text-slate">
            {item.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
            {item.summary}
          </p>
          <p className="mt-5 text-sm font-medium text-slate">Read the work →</p>
        </Link>
      ))}
    </div>
  );
}

export function WorkIndex() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cases.map((item) => (
        <CaseCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export function WorkCta() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <ButtonLink href="/work">See the work</ButtonLink>
      <ButtonLink href="/contact" variant="ghost">
        Book a 2-week Sprint
      </ButtonLink>
    </div>
  );
}
