import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "white" | "mono";
};

const bubbleFill = {
  color: "#407898",
  white: "#FFFFFF",
  mono: "#303030",
} as const;

const nodeFill = {
  color: "#FFFFFF",
  white: "#183050",
  mono: "#FFFFFF",
} as const;

export function BrandMark({
  variant = "color",
  className,
  ...props
}: MarkProps) {
  const bubble = bubbleFill[variant];
  const node = nodeFill[variant];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill={bubble}
        d="M50 3.2c24.05 0 43.55 18.35 43.55 43.5 0 19.7-12.2 36.45-29.55 42.05l-8.2 7.35c-2.15 1.9-5.45-.15-5.25-2.85l.7-8.35C32.4 80.7 14.7 66.6 14.7 46.7 14.7 21.55 25.95 3.2 50 3.2Z"
      />
      <path
        fill={bubble}
        d="M28.6 78.2c-.1 4.4-1.55 10.2-7.7 16.05 8.35-2.05 14.55-6.15 18.05-11.35-4.05-.85-7.55-2.45-10.35-4.7Z"
      />
      <rect x="33.2" y="44.55" width="33.6" height="4.3" rx="2.15" fill={node} />
      <circle cx="34.2" cy="46.7" r="4.35" fill={node} />
      <circle cx="50" cy="46.7" r="4.35" fill={node} />
      <circle cx="65.8" cy="46.7" r="4.35" fill={node} />
    </svg>
  );
}
