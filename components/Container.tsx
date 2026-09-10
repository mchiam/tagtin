export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <Eyebrow className={invert ? "text-mist" : ""}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.15] text-balance sm:text-[2.5rem] ${invert ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${invert ? "text-cream/80" : "text-charcoal/75"}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

const cardClass =
  "rounded-[1.75rem] bg-white p-7 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] sm:p-8";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${cardClass} ${className}`}>{children}</div>;
}

export { cardClass };
