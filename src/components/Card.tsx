import type { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "glass" | "glass-dark";
};

export default function Card({
  title,
  children,
  className = "",
  variant = "solid",
}: Props) {
  const base = "rounded-xl p-6 transition-all duration-300";

  let styles = "";
  if (variant === "glass") {
    styles = "glass-panel shadow-sm hover:shadow-md hover:-translate-y-1";
  } else if (variant === "glass-dark") {
    styles = "glass-card-dark text-white hover:bg-white/5";
  } else {
    styles =
      "bg-white border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--gold)]/30 hover:-translate-y-1";
  }

  return (
    <div className={`${base} ${styles} ${className}`}>
      {title ? <h3 className="text-xl font-bold mb-3">{title}</h3> : null}
      {children ? <div className="leading-relaxed">{children}</div> : null}
    </div>
  );
}
