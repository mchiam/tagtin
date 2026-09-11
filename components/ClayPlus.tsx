import { useId } from "react";

type ClayPlusProps = {
  className?: string;
  size?: number;
  mist?: boolean;
};

export function ClayPlus({ className = "", size = 148, mist = false }: ClayPlusProps) {
  const uid = useId().replace(/:/g, "");
  const fillId = `${uid}-fill`;

  return (
    <svg
      className={`drop-shadow-[8px_16px_24px_rgba(24,48,80,0.18)] ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id={fillId}
          cx="32"
          cy="26"
          r="78"
          gradientUnits="userSpaceOnUse"
        >
          {mist ? (
            <>
              <stop offset="0%" stopColor="#f4f7f9" />
              <stop offset="42%" stopColor="#a0b8c8" />
              <stop offset="100%" stopColor="#407898" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#d5e2eb" />
              <stop offset="48%" stopColor="#407898" />
              <stop offset="100%" stopColor="#183050" />
            </>
          )}
        </radialGradient>
      </defs>
      <g fill={`url(#${fillId})`}>
        <rect x="38" y="0" width="24" height="100" rx="12" />
        <rect x="0" y="38" width="100" height="24" rx="12" />
      </g>
      <ellipse cx="40" cy="34" rx="11" ry="8" fill="#fff" opacity="0.28" />
    </svg>
  );
}

export function ClaySphere({
  className = "",
  size = 160,
  mist = false,
}: {
  className?: string;
  size?: number;
  mist?: boolean;
}) {
  const fill = mist
    ? "bg-[radial-gradient(circle_at_30%_26%,#e8eef2_0%,#a0b8c8_45%,#407898_100%)] shadow-[inset_10px_12px_22px_rgba(255,255,255,0.4),inset_-12px_-16px_28px_rgba(64,120,152,0.35),8px_14px_32px_rgba(24,48,80,0.12)]"
    : "bg-[radial-gradient(circle_at_32%_28%,#c5d6e2_0%,#407898_55%,#183050_100%)] shadow-[inset_10px_12px_24px_rgba(255,255,255,0.28),inset_-14px_-18px_32px_rgba(24,48,80,0.38),10px_18px_40px_rgba(24,48,80,0.16)]";

  return (
    <div
      className={`rounded-full ${fill} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
