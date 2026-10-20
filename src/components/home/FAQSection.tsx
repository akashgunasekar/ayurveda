import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqsData, hospitalInfo } from "@/lib/content";

export default function FAQSection() {
  const homeFaqs = faqsData.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-beige/60 relative">
      <Container>
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers to Your Consultation &"
          highlight="Hospital Queries"
          description="Everything you need to know about our medical consultations, Panchakarma therapy durations, and 36-bedded inpatient accommodations."
        />

        <div className="mt-12">
          <FAQAccordion items={homeFaqs} />
        </div>

        {/* Still have questions card */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-beige/80 text-center max-w-2xl mx-auto shadow-2xs">
          <h4 className="font-editorial text-xl sm:text-2xl font-medium text-forest">
            Have a specific clinical or admission query?
          </h4>
          <p className="text-xs sm:text-sm text-dark-muted mt-2">
            Our hospital desk is available 7 days a week to assist you with
            appointment bookings, bed availability, and travel guidance.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${hospitalInfo.contact.primaryPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-forest text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-botanical transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-light" />
              <span>Call: {hospitalInfo.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-forest hover:text-gold transition-colors"
            >
              <span>View Route Map & Contact Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
