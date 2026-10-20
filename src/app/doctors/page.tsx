import React from "react";
import Link from "next/link";
import { Sparkles, CalendarCheck, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctorsData, hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Ayurvedic Doctors in Chennai | Ayurkshetra Hospital",
  description:
    "Meet our senior medical team: Dr. K.S. Ajalkumar (M.D. Panchakarma, 27+ yrs exp, Jwala Ratna Award), Dr. V. Sharda Ajalkumar, and Dr. T.S. Aswin Raj at Ayurkshetra Hospital, Chennai.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Our Doctors", url: "/doctors" }]}
            className="text-beige/70 mb-4"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>OVER 27 YEARS OF DEDICATED CLINICAL LEADERSHIP</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Distinguished Ayurvedic{" "}
              <span className="italic text-gold font-normal">
                Physicians & Faculty
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Guided by senior practitioners from traditional medical lineages,
              combining classical diagnostic acuity with compassionate,
              individualized care.
            </p>
          </div>
        </Container>
      </div>

      {/* Doctors Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>

          {/* Hospital Clinical Team Standard */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-beige/80 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-semibold text-leaf uppercase tracking-wider">
                  CLINICAL INTEGRITY
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-forest">
                  Round-the-Clock Hospital Medical Care
                </h3>
                <p className="text-sm text-dark-muted leading-relaxed">
                  Unlike outpatient clinics where doctors are present for only a
                  few hours, Ayurkshetra operates as a full 36-bedded hospital
                  with resident medical officers and senior consultants on duty
                  around the clock. All Panchakarma procedures are administered
                  under continuous medical supervision.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3.5 rounded bg-forest hover:bg-botanical text-ivory text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  Book Doctor Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
