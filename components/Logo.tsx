import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

type LogoProps = {
  href?: string;
  onDark?: boolean;
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
      <BrandMark
        variant={onDark ? "color" : "color"}
        className="h-9 w-9"
      />
      <span className="sr-only">Tagtin</span>
    </span>
  ) : (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark variant="color" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      <Image
        src={onDark ? "/brand/wordmark-white.png" : "/brand/wordmark.png"}
        alt="Tagtin"
        width={1680}
        height={480}
        className="h-6 w-auto sm:h-7"
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
