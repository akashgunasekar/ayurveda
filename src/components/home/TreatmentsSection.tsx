import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatmentsData } from "@/lib/content";

export default function TreatmentsSection() {
  // Show featured treatments on homepage
  const featuredTreatments = treatmentsData.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            eyebrow="TREATMENTS & CLINICAL SPECIALITIES"
            title="Authentic Keraliya Panchakarma &"
            highlight="Clinical Therapies"
            description="All therapies are administered in specialized treatment suites equipped with authentic medicinal wood Dronis and supervised by qualified Ayurvedic physicians."
            className="mb-0!"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group"
            >
              <span>Explore All 12 Treatments</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-ivory border border-beige/80 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-editorial text-2xl font-medium text-forest">
              Unsure which therapy is suitable for your condition?
            </h4>
            <p className="text-sm text-dark-muted mt-1">
              Speak with our senior medical team for an individualized assessment.
            </p>
          </div>

          <Link
            href="/book-appointment"
            className="shrink-0 px-6 py-3 rounded bg-forest hover:bg-botanical text-ivory text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
          >
            Schedule Assessment
          </Link>
        </div>
      </Container>
    </section>
  );
}
