import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

const styles = {
  primary:
    "bg-orange-600 text-white hover:-translate-y-0.5 hover:bg-orange-700",
  secondary:
    "border border-orange-200 bg-white text-orange-700 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const buttonClassName = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`;
  const isExternalHref =
    href?.startsWith("http://") ||
    href?.startsWith("https://") ||
    href?.startsWith("tel:") ||
    href?.startsWith("mailto:");

  if (href && isExternalHref) {
    return (
      <a href={href} className={buttonClassName}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName}>
      {children}
    </button>
  );
}
