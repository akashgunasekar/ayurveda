import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  external = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 rounded-sm gap-1.5",
    md: "text-sm px-6 py-3 rounded gap-2",
    lg: "text-base px-8 py-3.5 rounded gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-forest hover:bg-botanical text-ivory border border-forest/80 shadow-sm hover:shadow-md hover:border-gold/50 active:scale-[0.99]",
    gold: "bg-gold hover:bg-gold-dark text-botanical font-semibold shadow-sm hover:shadow-md hover:text-ivory active:scale-[0.99]",
    secondary:
      "bg-ivory hover:bg-beige text-forest border border-leaf/30 shadow-2xs hover:border-leaf active:scale-[0.99]",
    outline:
      "bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white shadow-2xs backdrop-blur-xs active:scale-[0.99]",
    ghost:
      "bg-transparent text-forest hover:text-leaf hover:bg-leaf/5 px-2 py-1",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
