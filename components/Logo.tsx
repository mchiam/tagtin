import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

type LogoProps = {
  href?: string;
  onDark?: boolean;
  /** Speech-bubble mark only (favicon-style). Not used in the site header. */
  markOnly?: boolean;
  className?: string;
  priority?: boolean;
};

export function Logo({
  href = "/",
  onDark = false,
  markOnly = false,
  className = "",
  priority = false,
}: LogoProps) {
  const content = markOnly ? (
    <span className={`inline-flex items-center ${className}`}>
      <BrandMark variant="color" className="h-9 w-9" />
      <span className="sr-only">Tagtin</span>
    </span>
  ) : (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={onDark ? "/brand/wordmark-white.png" : "/brand/wordmark.png"}
        alt="Tagtin"
        width={1647}
        height={382}
        className="h-7 w-auto sm:h-8 lg:h-9"
        priority={priority}
      />
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      {content}
    </Link>
  );
}
