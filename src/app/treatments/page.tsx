import React from "react";
import Link from "next/link";
import { Sparkles, CalendarCheck, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatmentsData, hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Panchakarma & Ayurvedic Treatments in Chennai | Ayurkshetra Hospital",
  description:
    "Explore authentic Keraliya Panchakarma treatments at Ayurkshetra: Uro Basti, Navarakizhi, Podikizhi, Avagaha Sweda, Shirodhara, Gastrointestinal care, Acne treatment, and Migraine relief in Arumbakkam, Chennai.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  const panchakarmaTreatments = treatmentsData.filter(
    (t) => t.category === "Panchakarma"
  );
  const clinicalTreatments = treatmentsData.filter(
    (t) => t.category === "Clinical Speciality"
  );
  const wellnessTreatments = treatmentsData.filter(
    (t) => t.category === "Wellness & Prevention"
  );

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Treatments & Specialities", url: "/treatments" }]}
            className="text-beige/70 mb-4"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>AUTHENTIC KERALIYA PANCHAKARMA & CLINICAL CARE</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Sacred Purification &{" "}
              <span className="italic text-gold font-normal">
                Clinical Specialities
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Administered in classical wooden Droni suites by trained Kerala
              therapists under the round-the-clock supervision of experienced
              Ayurvedic physicians.
            </p>
          </div>
        </Container>
      </div>

      {/* Section 1: Keraliya Panchakarma Therapies */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              CATEGORY 01
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-forest mt-1">
              Keraliya Panchakarma Therapies
            </h2>
            <p className="text-sm text-dark-muted mt-2 max-w-2xl">
              Classical shodhana and brimhana therapies designed to cleanse deep
              metabolic toxins (Ama), calm aggravated Vata, and regenerate
              cellular tissues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panchakarmaTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2: Clinical Medical Specialities */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-beige/60">
        <Container>
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              CATEGORY 02
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-forest mt-1">
              Clinical Medical Specialities
            </h2>
            <p className="text-sm text-dark-muted mt-2 max-w-2xl">
              Targeted Ayurvedic protocols for chronic metabolic,
              dermatological, neurological, and reproductive disorders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Wellness & Preventive Nutrition */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              CATEGORY 03
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-forest mt-1">
              Preventive Health & Dinacharya
            </h2>
            <p className="text-sm text-dark-muted mt-2 max-w-2xl">
              Preserving constitutional harmony and digestive vitality through
              tailored food regimes and seasonal purification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="pb-20">
        <Container>
          <div className="p-8 sm:p-12 rounded-2xl bg-botanical text-ivory border border-gold/30 text-center max-w-4xl mx-auto space-y-4">
            <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-ivory">
              Ready to Discuss Your Treatment Plan?
            </h3>
            <p className="text-sm sm:text-base text-beige/85 max-w-xl mx-auto">
              Our physicians will evaluate your constitutional doshic state and
              recommend the exact Panchakarma duration suited to your recovery.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-appointment"
                className="px-8 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                Schedule Pulse Diagnosis
              </Link>
              <a
                href={`tel:${hospitalInfo.contact.primaryPhone}`}
                className="px-6 py-3.5 rounded bg-forest/80 hover:bg-forest text-ivory border border-gold/40 text-xs font-medium uppercase tracking-wider transition-all"
              >
                Call: {hospitalInfo.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
