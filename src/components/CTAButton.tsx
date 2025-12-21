import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
} & Omit<ComponentProps<"button">, "children">;

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  ...buttonProps
}: Props) {
  const base =
    "rounded-full px-6 py-3 text-sm font-semibold transition-colors shadow-lg";
  const variants: Record<string, string> = {
    primary:
      "bg-[#D4AF37] text-[#0B1F33] hover:opacity-90 shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 glow",
    outline:
      "border border-[#0B1F33] text-[#0B1F33] hover:bg-[#0B1F33] hover:text-white",
  };
  const cls = `${base} ${variants[variant]} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
