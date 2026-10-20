import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Users2,
  Clock,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck,
  Phone,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Ayurkshetra | 27+ Years of Authentic Ayurvedic Legacy in Chennai",
  description:
    "Learn about Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) — a 36-bedded Ayurvedic hospital in Arumbakkam, Chennai. 27+ years clinical leadership under Dr. K.S. Ajalkumar.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Editorial Page Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "About Hospital", url: "/about" }]}
            className="text-beige/70 mb-4"
          />
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>ESTABLISHED 27+ YEARS · CHENNAI, INDIA</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              A Heritage of Sacred Kerala Healing &{" "}
              <span className="italic text-gold font-normal">
                Clinical Research
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) is a trusted,
              well-established 36-bedded full-fledged Ayurvedic hospital with
              well-experienced medical practitioners and Panchakarma therapists
              round the clock.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Narrative & History */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                eyebrow="OUR FOUNDING LEGACY"
                title="Rooted in Generations of Traditional"
                highlight="Kerala Vaidya Wisdom"
                className="mb-4!"
              />

              <div className="prose prose-stone text-dark-muted text-base leading-relaxed space-y-4">
                <p>
                  Hailing from a revered family lineage of traditional Ayurvedic
                  physicians, allopaths, and homeopaths,{" "}
                  <strong>Dr. K. S. Ajalkumar</strong> established the Institute
                  of Ayurvedic Research Pvt. Ltd (Ayurkshetra) to bridge sacred
                  classical samhitas with modern clinical rigor.
                </p>
                <p>
                  Over the past 27 years, our hospital has touched the lives of
                  more than <strong>250,000 patients</strong> suffering from
                  chronic, debilitating, and metabolic conditions. Our practice
                  reflects generational expertise in authentic Keraliya
                  Panchakarma, personalized constitutional balance, and
                  rehabilitative medical care.
                </p>
                <p>
                  Conveniently situated in Amaravathi Nagar, Arumbakkam—easily
                  accessible from both Chennai International Airport and Chennai
                  Central Railway Station—Ayurkshetra provides a serene haven
                  where healing happens in harmony with nature.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-beige/80">
                  <p className="font-editorial text-3xl font-bold text-forest">
                    250K+
                  </p>
                  <p className="text-xs text-dark-muted mt-1">
                    Patients Consulted Across India & Globally
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-beige/80">
                  <p className="font-editorial text-3xl font-bold text-forest">
                    36 Beds
                  </p>
                  <p className="text-xs text-dark-muted mt-1">
                    Inpatient Facility with 24/7 Medical Care
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-beige shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Ayurkshetra Ayurvedic hospital clinical consultation room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 p-5 rounded-xl bg-forest text-ivory border border-gold/30">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <h2 className="text-sm font-semibold text-ivory">
                      Government Registered Clinical Establishment
                    </h2>
                    <p className="text-xs text-beige/80 mt-0.5">
                      Fully registered under the Government of Tamil Nadu for
                      both inpatient (IPD) and outpatient (OPD) healthcare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hospital Pillars */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-beige/60">
        <Container>
          <SectionHeading
            eyebrow="CORE PRINCIPLES"
            title="The Three Pillars of"
            highlight="Ayurkshetra Care"
            description="Our clinical operations are governed by three unwavering principles that ensure patient safety, authenticity, and enduring vitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-xl bg-ivory border border-beige/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-forest/10 text-forest flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-leaf" />
                </div>
                <h3 className="font-editorial text-2xl font-medium text-forest">
                  Pure Keraliya Authenticity
                </h3>
                <p className="mt-3 text-sm text-dark-muted leading-relaxed">
                  We use hand-carved medicinal wood Dronis crafted in Kerala and
                  source authentic classical medicines from time-honored
                  institutions (Kottakkal Arya Vaidya Sala, Vaidyaratnam) to
                  ensure that therapies are administered exactly as codified in
                  the Charaka and Sushruta Samhitas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-beige/60 text-xs font-semibold text-leaf">
                Zero Dilution or Compromise
              </div>
            </div>

            <div className="p-8 rounded-xl bg-ivory border border-beige/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-forest/10 text-forest flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-leaf" />
                </div>
                <h3 className="font-editorial text-2xl font-medium text-forest">
                  Individualized Chikitsa
                </h3>
                <p className="mt-3 text-sm text-dark-muted leading-relaxed">
                  No two patients receive identical prescriptions. Every therapy
                  regimen, medicated oil formulation, and dietary chart is
                  customized following in-depth pulse diagnosis (Nadi Pariksha)
                  and metabolic staging.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-beige/60 text-xs font-semibold text-leaf">
                Constitutional Prakriti Precision
              </div>
            </div>

            <div className="p-8 rounded-xl bg-ivory border border-beige/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-forest/10 text-forest flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-leaf" />
                </div>
                <h3 className="font-editorial text-2xl font-medium text-forest">
                  24/7 Clinical Safety
                </h3>
                <p className="mt-3 text-sm text-dark-muted leading-relaxed">
                  With 36 inpatient beds, our resident medical officers and
                  nursing staff maintain continuous clinical vigilance,
                  conducting daily physician rounds, vital sign logging, and
                  specialized sattvic nutrition.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-beige/60 text-xs font-semibold text-leaf">
                Round-the-Clock Supervision
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community & Research Contributions */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="p-8 sm:p-12 rounded-2xl bg-botanical text-ivory border border-gold/30">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                SOCIAL COMMITMENT & EMPOWERMENT
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-ivory">
                Pioneering Panchakarma Training for Visually Impaired Youths
              </h2>
              <p className="text-sm sm:text-base text-beige/85 leading-relaxed font-light">
                Under the visionary social mission of Dr. K.S. Ajalkumar,
                Ayurkshetra has spearheaded dedicated vocational programs
                training visually impaired students in the authentic art of
                Panchakarma massage and therapy. Recognizing their heightened
                tactile sensitivity, Dr. Ajalkumar personally guided them into
                becoming certified, highly sought-after therapists, empowering
                them with dignified careers and social independence.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3 rounded bg-gold hover:bg-gold-dark text-botanical text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                >
                  Consult Our Medical Team
                </Link>
                <Link
                  href="/doctors"
                  className="px-6 py-3 rounded bg-transparent hover:bg-white/10 text-ivory border border-white/30 text-xs font-medium tracking-wide transition-all"
                >
                  Meet Dr. K.S. Ajalkumar & Doctors
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
