import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, MapPin, Phone, CalendarCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { facilitiesData, hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "36-Bed Hospital Facilities & Panchakarma Suites | Ayurkshetra Chennai",
  description:
    "Tour Ayurkshetra's 36-bedded Ayurvedic hospital infrastructure in Arumbakkam, Chennai: Inpatient suites, authentic wooden Droni Panchakarma theatres, in-house Kashaya pharmacy, and sattvic kitchen.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Hospital Facilities", url: "/facilities" }]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>36-BEDDED AYURVEDIC HOSPITAL INFRASTRUCTURE</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Sanctuary of Healing &{" "}
              <span className="italic text-gold font-normal">
                Clinical Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Designed to support deep physical detoxification and peaceful rest
              under 24/7 medical observation.
            </p>
          </div>
        </Container>
      </div>

      {/* Facilities List */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-16">
            {facilitiesData.map((facility, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={facility.id}
                  id={facility.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 rounded-2xl border border-beige/80 shadow-xs"
                >
                  <div
                    className={`lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden border border-beige/80 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={facility.imageUrl}
                      alt={facility.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-1">
                        {facility.subtitle}
                      </span>
                      <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-forest">
                        {facility.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-semibold text-leaf uppercase tracking-wider">
                        Facility Highlights:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {facility.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-dark-muted flex items-start gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location & Admission Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-botanical text-ivory border border-gold/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  INPATIENT ADMISSIONS & VISITS
                </span>
                <h3 className="font-editorial text-3xl font-medium text-ivory">
                  Planning an Inpatient Stay or Consultation?
                </h3>
                <p className="text-sm text-beige/85 leading-relaxed font-light">
                  Our hospital desk assists outstation and local patients with room
                  reservations, attendant accommodation details, and travel
                  logistics from Chennai Airport or Railway stations.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase text-center transition-all shadow-md"
                >
                  Book Inpatient Bed
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded bg-transparent hover:bg-white/10 text-ivory border border-white/30 text-xs font-medium tracking-wide text-center transition-all"
                >
                  View Route Directions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
