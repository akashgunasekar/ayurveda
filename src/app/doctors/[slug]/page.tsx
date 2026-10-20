import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Award,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { doctorsData, hospitalInfo } from "@/lib/content";
import { generateDoctorSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctorsData.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);
  if (!doctor) return { title: "Doctor Not Found" };

  return constructMetadata({
    title: `${doctor.name} - ${doctor.designation} | Ayurkshetra Chennai`,
    description: doctor.bio.substring(0, 160),
    path: `/doctors/${doctor.slug}`,
    image: doctor.imageUrl,
    keywords: [
      doctor.name,
      `${doctor.name} Chennai`,
      "Ayurvedic Doctor Arumbakkam",
      "Ayurkshetra Chief Physician",
    ],
  });
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const doctorSchema = generateDoctorSchema(doctor);

  return (
    <div className="bg-ivory min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />

      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Our Doctors", url: "/doctors" },
              { name: doctor.name, url: `/doctors/${doctor.slug}` },
            ]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-forest text-gold-light border border-gold/30">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span>{doctor.experienceYears}+ YEARS CLINICAL PRACTICE</span>
            </span>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ivory tracking-tight">
              {doctor.name}
            </h1>

            <p className="text-sm font-sans tracking-wider uppercase text-gold-light">
              {doctor.qualifications} · {doctor.designation}
            </p>
          </div>
        </Container>
      </div>

      {/* Profile Details */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Portrait & Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-beige shadow-xl bg-forest/10">
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Consultation Timing Card */}
              <div className="p-6 rounded-xl bg-white border border-beige/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-forest">
                  <Clock className="w-4 h-4 text-gold" />
                  <h3 className="font-editorial text-lg font-semibold">
                    Consultation Hours
                  </h3>
                </div>
                <p className="text-xs text-dark-muted leading-relaxed">
                  {doctor.consultationDays}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/book-appointment?doctor=${doctor.slug}`}
                    className="w-full py-3 px-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Appointment with {doctor.name.split(" ")[1] || "Doctor"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Specialities */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-forest">
                  Physician Biography & Clinical Journey
                </h2>
                <div className="prose prose-stone text-dark-muted text-base leading-relaxed">
                  <p>{doctor.bio}</p>
                </div>
              </div>

              {/* Clinical Specialities */}
              <div className="p-8 rounded-2xl bg-white border border-beige/80 space-y-4 shadow-2xs">
                <h3 className="font-editorial text-2xl font-medium text-forest">
                  Specialized Clinical Focus
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {doctor.specialities.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-dark-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Milestones */}
              {doctor.achievements && doctor.achievements.length > 0 && (
                <div className="p-8 rounded-2xl bg-forest text-ivory space-y-4 border border-gold/30">
                  <h3 className="font-editorial text-2xl font-medium text-ivory">
                    Distinctions & Clinical Contributions
                  </h3>
                  <ul className="space-y-3 pt-2">
                    {doctor.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-beige/90"
                      >
                        <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
