const blobFill =
  "bg-[radial-gradient(circle_at_32%_28%,#c5d6e2_0%,#407898_55%,#183050_100%)] shadow-[inset_10px_12px_24px_rgba(255,255,255,0.28),inset_-14px_-18px_32px_rgba(24,48,80,0.38),10px_18px_40px_rgba(24,48,80,0.16)]";

const blobFillMist =
  "bg-[radial-gradient(circle_at_30%_26%,#e8eef2_0%,#a0b8c8_45%,#407898_100%)] shadow-[inset_10px_12px_22px_rgba(255,255,255,0.4),inset_-12px_-16px_28px_rgba(64,120,152,0.35),8px_14px_32px_rgba(24,48,80,0.12)]";

function PlusForm({
  className = "",
  size = 148,
  mist = false,
}: {
  className?: string;
  size?: number;
  mist?: boolean;
}) {
  const fill = mist ? blobFillMist : blobFill;
  const thick = size * 0.36;
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${fill}`}
        style={{ width: thick, height: size }}
      />
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${fill}`}
        style={{ width: size, height: thick }}
      />
    </div>
  );
}

function Sphere({
  className = "",
  size = 160,
  mist = false,
}: {
  className?: string;
  size?: number;
  mist?: boolean;
}) {
  return (
    <div
      className={`rounded-full ${mist ? blobFillMist : blobFill} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function FloatCard({
  children,
  className = "",
  delay = "0s",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl bg-white/95 p-3.5 shadow-[0_18px_50px_-20px_rgba(24,48,80,0.45)] ring-1 ring-navy/[0.06] backdrop-blur-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function HeroArt() {
  return (
    <div
      className="relative mx-auto hidden h-[32rem] w-full max-w-[34rem] pointer-events-none lg:block"
      aria-hidden="true"
    >
      <Sphere
        mist
        size={200}
        className="absolute right-[16%] top-[26%] z-0 animate-float-slow opacity-90"
      />
      <div className="absolute right-[-6%] top-[-2%] z-[1] animate-float">
        <PlusForm size={176} />
      </div>
      <div className="absolute bottom-[6%] left-[-8%] z-[1] animate-float-slow">
        <PlusForm mist size={118} className="rotate-45" />
      </div>
      <Sphere
        size={56}
        className="absolute bottom-[4%] right-[8%] z-[1] animate-float opacity-90"
      />

      <FloatCard className="left-0 top-6 z-[2] w-[15.5rem] animate-float" delay="0.2s">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
          The system
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          {["Attract", "Engage", "Retain"].map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              {i > 0 ? (
                <span className="h-px w-2.5 bg-mist" />
              ) : null}
              <span className="rounded-full bg-cream px-2.5 py-1 text-xs font-medium text-navy">
                {step}
              </span>
            </span>
          ))}
        </div>
      </FloatCard>

      <FloatCard
        className="right-0 top-16 z-[2] w-[11.5rem] animate-float-slow"
        delay="0.8s"
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
          Offer
        </p>
        <p className="mt-1.5 text-sm font-medium text-navy">Sprint · 2 weeks</p>
        <p className="mt-1 text-xs text-charcoal/65">Diagnose, lock, ship.</p>
      </FloatCard>

      <FloatCard
        className="right-2 top-[42%] z-[2] w-[13.5rem] animate-float"
        delay="0.4s"
      >
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
              Published
            </p>
            <p className="mt-1 font-display text-3xl leading-none text-navy">
              89%
            </p>
            <p className="mt-1 text-xs text-charcoal/65">
              Sell-through · Pokémon · 90 days
            </p>
          </div>
          <div className="flex h-12 items-end gap-1 pb-0.5">
            <span className="w-2.5 rounded-t bg-mist" style={{ height: "82%" }} />
            <span className="w-2.5 rounded-t bg-slate" style={{ height: "89%" }} />
          </div>
        </div>
      </FloatCard>

      <FloatCard
        className="bottom-[22%] left-4 z-[2] w-[15rem] animate-float-slow"
        delay="1.1s"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate text-[0.65rem] text-white">
            ✓
          </span>
          <div>
            <p className="text-sm font-medium text-navy">
              Story before the prompt
            </p>
            <p className="mt-0.5 text-xs text-charcoal/65">
              Tagtin Studio · From Prompt to Publish
            </p>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        className="bottom-4 right-6 z-[2] w-[14.5rem] animate-float"
        delay="0.6s"
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
          FairPrice collection
        </p>
        <p className="mt-1.5 text-sm font-medium text-navy">S$557K PR value</p>
        <p className="mt-1 text-xs text-charcoal/65">
          Print, online, and social — published.
        </p>
      </FloatCard>
    </div>
  );
}

export function HeroMobileChips() {
  return (
    <ul className="mt-8 flex flex-wrap gap-2 lg:hidden">
      <li className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-[0_10px_24px_-14px_rgba(24,48,80,0.5)] ring-1 ring-navy/[0.06]">
        Attract → Engage → Retain
      </li>
      <li className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-[0_10px_24px_-14px_rgba(24,48,80,0.5)] ring-1 ring-navy/[0.06]">
        Sprint · 2 weeks
      </li>
      <li className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-[0_10px_24px_-14px_rgba(24,48,80,0.5)] ring-1 ring-navy/[0.06]">
        Story before the prompt
      </li>
    </ul>
  );
}
