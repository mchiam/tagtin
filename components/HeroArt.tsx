import { ClayPlus, ClaySphere } from "./ClayPlus";

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
      className={`absolute rounded-2xl bg-white/95 p-3.5 shadow-[0_18px_50px_-20px_rgba(24,48,80,0.45)] ring-1 ring-navy/[0.06] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function HeroArt() {
  return (
    <div
      className="relative mx-auto hidden h-[34rem] w-full max-w-[36rem] lg:block"
      aria-hidden="true"
    >
      <ClaySphere
        mist
        size={168}
        className="pointer-events-none absolute right-[18%] top-[30%] z-0 animate-float-slow opacity-90"
      />
      <ClayPlus
        size={210}
        className="pointer-events-none absolute -right-3 top-[-6%] z-[1] animate-float-slow"
      />
      <ClayPlus
        mist
        size={128}
        className="pointer-events-none absolute bottom-[4%] left-[-10%] z-[1] rotate-45 animate-float"
      />
      <ClaySphere
        size={48}
        className="pointer-events-none absolute bottom-[2%] right-[10%] z-[1] animate-float opacity-90"
      />

      <FloatCard className="left-0 top-5 z-[2] w-[15.5rem] animate-float" delay="0.2s">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
          The system
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          {["Attract", "Engage", "Retain"].map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              {i > 0 ? <span className="h-px w-2.5 bg-mist" /> : null}
              <span className="rounded-full bg-cream px-2.5 py-1 text-xs font-medium text-navy">
                {step}
              </span>
            </span>
          ))}
        </div>
      </FloatCard>

      <FloatCard
        className="right-[22%] top-[18%] z-[2] w-[11.5rem] animate-float-slow"
        delay="0.8s"
      >
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate">
          Offer
        </p>
        <p className="mt-1.5 text-sm font-medium text-navy">Sprint · 2 weeks</p>
        <p className="mt-1 text-xs text-charcoal/65">Diagnose, lock, ship.</p>
      </FloatCard>

      <FloatCard
        className="right-1 top-[44%] z-[2] w-[13.5rem] animate-float"
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
        className="bottom-[24%] left-2 z-[2] w-[15rem] animate-float-slow"
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
        className="bottom-3 right-4 z-[2] w-[14.5rem] animate-float"
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
