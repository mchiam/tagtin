import Link from "next/link";

const variants = {
  primary:
    "bg-navy text-cream hover:bg-slate focus-visible:ring-slate",
  inverse:
    "bg-cream text-navy hover:bg-white focus-visible:ring-cream",
  ghost:
    "bg-transparent text-navy ring-1 ring-inset ring-navy/20 hover:ring-navy/40 hover:bg-navy/5 focus-visible:ring-slate",
  ghostInverse:
    "bg-transparent text-cream ring-1 ring-inset ring-cream/35 hover:bg-white/10 focus-visible:ring-cream",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-reduce:transition-none ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
