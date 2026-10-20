"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export default function FAQAccordion({
  items,
  allowMultiple = false,
}: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const faqId = `faq-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={index}
            className={`rounded-lg border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-gold/50 shadow-sm"
                : "bg-white/80 border-beige/80 hover:border-beige hover:bg-white"
            }`}
          >
            <button
              id={faqId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <div className="flex items-start gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-colors duration-200 ${
                    isOpen ? "text-gold" : "text-leaf/60"
                  }`}
                />
                <span className="font-editorial text-lg sm:text-xl font-medium text-dark leading-snug">
                  {item.question}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isOpen
                    ? "bg-forest text-gold-light border-forest rotate-180"
                    : "bg-beige/40 text-forest border-beige"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={faqId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-dark-muted leading-relaxed border-t border-beige/40 pl-11 sm:pl-14">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
