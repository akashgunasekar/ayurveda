import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctorsData } from "@/lib/content";

export default function DoctorsSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            eyebrow="DISTINGUISHED MEDICAL FACULTY"
            title="Senior Physicians &"
            highlight="Clinical Leadership"
            description="Our physicians bring decades of clinical, academic, and hospital expertise to guide your healing trajectory."
            className="mb-0!"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group"
            >
              <span>View All Doctor Profiles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
