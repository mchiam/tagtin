export function Faq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-navy/10 rounded-[1.75rem] bg-white shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05]">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="cursor-pointer list-none font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span
                aria-hidden="true"
                className="mt-0.5 text-slate transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/80">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
