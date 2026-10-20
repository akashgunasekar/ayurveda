import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];
  const jsonLd = generateBreadcrumbSchema(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`py-3 text-xs sm:text-sm text-dark-muted ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.url} className="inline-flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-leaf/50 shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-forest truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="inline-flex items-center gap-1 hover:text-forest transition-colors duration-200"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
