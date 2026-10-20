import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-3 rounded-full ${
            isDark
              ? "bg-forest/60 text-gold-light border border-gold/30"
              : "bg-leaf/10 text-leaf border border-leaf/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] ${
          isDark ? "text-ivory" : "text-dark"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="italic font-normal text-gold underline decoration-gold/40 decoration-1 underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-beige/80" : "text-dark-muted"
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-5 flex items-center gap-2 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-[2px] w-12 bg-gold/50 rounded-full" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold rounded-[1px]" />
        <span className="h-[2px] w-6 bg-gold/30 rounded-full" />
      </div>
    </div>
  );
}
