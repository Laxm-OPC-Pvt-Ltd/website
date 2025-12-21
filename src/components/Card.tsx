import type { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "glass";
};

export default function Card({
  title,
  children,
  className = "",
  variant = "solid",
}: Props) {
  const base = "border rounded-lg p-6";
  const styles = variant === "glass" ? "glass-card" : "bg-white";
  return (
    <div className={`${base} ${styles} ${className}`}>
      {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
      {children ? <div className="mt-2">{children}</div> : null}
    </div>
  );
}
