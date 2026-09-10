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
      className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate ${className}`}
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
        className={`mt-3 font-display text-3xl leading-tight text-balance sm:text-4xl ${invert ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${invert ? "text-cream/80" : "text-charcoal/80"}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
