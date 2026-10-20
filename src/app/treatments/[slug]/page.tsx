import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Phone,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { treatmentsData, hospitalInfo } from "@/lib/content";
import { generateTreatmentSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatmentsData.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.slug === slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return constructMetadata({
    title: `${treatment.title} in Chennai | Ayurkshetra Hospital`,
    description: treatment.shortDescription,
    path: `/treatments/${treatment.slug}`,
    image: treatment.imageUrl,
    keywords: [
      treatment.title,
      `${treatment.title} Chennai`,
      `${treatment.title} Panchakarma`,
      "Ayurkshetra Arumbakkam",
    ],
  });
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const treatmentSchema = generateTreatmentSchema(treatment);
  const otherTreatments = treatmentsData
    .filter((t) => t.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <div className="bg-ivory min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentSchema) }}
      />

      {/* Hero Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Treatments", url: "/treatments" },
              { name: treatment.title, url: `/treatments/${treatment.slug}` },
            ]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-forest text-gold-light border border-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                {treatment.category}
              </span>
              {treatment.sanskritName && (
                <span className="text-sm font-serif italic text-gold-light/90 px-2 py-0.5">
                  {treatment.sanskritName}
                </span>
              )}
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              {treatment.title}
            </h1>

            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light max-w-3xl">
              {treatment.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gold-light">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-forest/80 border border-gold/20">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Session Duration: {treatment.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-forest/80 border border-gold/20">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Recommended Course: {treatment.recommendedSessions}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content & Clinical Overview */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Full Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* Feature Image */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-beige shadow-lg">
                <Image
                  src={treatment.imageUrl}
                  alt={treatment.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* In-depth Description */}
              <div className="space-y-4">
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-forest">
                  Clinical Overview & Classical Philosophy
                </h2>
                <div className="prose prose-stone text-dark-muted text-base leading-relaxed">
                  <p>{treatment.fullDescription}</p>
                </div>
              </div>

              {/* Clinical Indications */}
              <div className="p-8 rounded-2xl bg-white border border-beige/80 space-y-4 shadow-2xs">
                <h3 className="font-editorial text-2xl font-medium text-forest flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-gold" />
                  <span>Clinical Indications</span>
                </h3>
                <p className="text-xs text-dark-muted">
                  This therapy is commonly prescribed following clinical pulse
                  evaluation for the following conditions:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {treatment.indications.map((indication, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-dark-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                      <span>{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="space-y-6">
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-forest">
                  Procedural Stages (Krama)
                </h3>
                <div className="space-y-4">
                  {treatment.procedureOverview.map((step, idx) => {
                    const [stageName, ...stageDesc] = step.split(":");

                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-xl bg-white border border-beige/80 shadow-2xs flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-forest text-gold-light font-editorial font-bold text-sm flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-editorial text-lg font-semibold text-forest">
                            {stageName}
                          </h4>
                          <p className="text-sm text-dark-muted mt-1 leading-relaxed">
                            {stageDesc.join(":")}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="p-8 rounded-2xl bg-forest text-ivory space-y-4 border border-gold/30">
                <h3 className="font-editorial text-2xl font-medium text-ivory">
                  Therapeutic & Systemic Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {treatment.keyBenefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-beige/90"
                    >
                      <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Booking Card & Hospital Guarantee */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 p-7 rounded-2xl bg-white border border-beige/80 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-semibold text-leaf tracking-widest uppercase">
                    CLINICAL CONSULTATION
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-forest mt-1">
                    Book {treatment.title}
                  </h3>
                  <p className="text-xs text-dark-muted mt-1 leading-relaxed">
                    Consult our senior physicians at Ayurkshetra to confirm therapy
                    suitability and create your schedule.
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-beige/60 text-xs text-dark-muted">
                  <div className="flex justify-between py-1 border-b border-beige/40">
                    <span className="text-dark-muted font-medium">Session:</span>
                    <span className="font-semibold text-forest">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-beige/40">
                    <span className="text-dark-muted font-medium">Duration:</span>
                    <span className="font-semibold text-forest">{treatment.recommendedSessions}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-beige/40">
                    <span className="text-dark-muted font-medium">Location:</span>
                    <span className="font-semibold text-forest">Arumbakkam, Chennai</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href={`/book-appointment?service=${treatment.slug}`}
                    className="w-full py-3.5 px-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book This Treatment</span>
                  </Link>

                  <a
                    href={`tel:${hospitalInfo.contact.primaryPhone}`}
                    className="w-full py-3 px-4 rounded bg-forest hover:bg-botanical text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-light" />
                    <span>Call: {hospitalInfo.contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-ivory border border-beige text-[11px] text-dark-muted space-y-1">
                  <p className="font-semibold text-forest">
                    Hospital Inpatient Option Available:
                  </p>
                  <p>
                    Patients undergoing multiple-day Panchakarma can opt for
                    comfortable 36-bedded inpatient accommodation with 24/7 care
                    and sattvic meals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Treatments */}
      <section className="py-16 bg-white border-t border-beige/60">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-forest">
              Explore Related Therapies
            </h3>
            <Link
              href="/treatments"
              className="text-xs font-semibold text-forest hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTreatments.map((t) => (
              <div
                key={t.slug}
                className="p-6 rounded-xl bg-ivory border border-beige/80 hover:border-gold/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-medium text-gold uppercase tracking-wider">
                    {t.category}
                  </span>
                  <h4 className="font-editorial text-xl font-medium text-forest mt-1">
                    <Link href={`/treatments/${t.slug}`} className="hover:text-leaf">
                      {t.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-dark-muted mt-2 line-clamp-2">
                    {t.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-beige/60 flex items-center justify-between text-xs">
                  <span className="text-dark-muted">{t.duration}</span>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="font-semibold text-forest hover:text-gold inline-flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
