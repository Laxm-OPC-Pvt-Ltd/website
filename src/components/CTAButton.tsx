import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
} & Omit<ComponentProps<"button">, "children">;

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
  ...buttonProps
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 active:scale-95";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-white shadow-lg shadow-[var(--gold)]/25 hover:shadow-[var(--gold)]/40 hover:brightness-110",
    outline:
      "border border-current bg-transparent hover:bg-white/10 backdrop-blur-sm",
    ghost: "bg-transparent hover:bg-white/5 text-current",
  };

  const cls = `${base} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-full">
          <div className="absolute left-0 top-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-transform duration-500 group-hover:translate-x-[100%] group-hover:opacity-100" />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...buttonProps}>
      {content}
    </button>
  );
}
