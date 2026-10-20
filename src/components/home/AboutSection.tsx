import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Users2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-beige shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
                alt="Panchakarma treatment session at Ayurkshetra Ayurveda Hospital Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical/60 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 bg-white p-5 sm:p-6 rounded-xl border border-beige/80 shadow-2xl max-w-[270px] sm:max-w-[310px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-forest text-gold-light flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-editorial text-2xl font-bold text-forest leading-none">
                    27+ Years
                  </p>
                  <p className="text-xs text-dark-muted font-sans mt-0.5">
                    Clinical Healing Legacy
                  </p>
                </div>
              </div>
              <p className="text-xs text-dark-muted mt-3 pt-3 border-t border-beige/60 leading-relaxed">
                Registered under the Government of Tamil Nadu · Over 250,000
                patients served.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Verified Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="ABOUT AYURKSHETRA"
              title="A Sanctuary of Classical Healing in the"
              highlight="Heart of Chennai"
              description="Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) is a trusted, well-established 36-bedded full-fledged Ayurvedic hospital with well-experienced medical practitioners and Panchakarma therapists round the clock."
              className="mb-6!"
            />

            <div className="prose prose-stone text-dark-muted text-base leading-relaxed space-y-4">
              <p>
                Known as an authentic <strong>abode of Keraliya Panchakarma</strong>,
                our hospital is located in Amaravathi Nagar, Arumbakkam—easily
                accessible from both Chennai International Airport and Chennai
                Central Railway Station.
              </p>
              <p>
                We provide both comprehensive inpatient (IPD) and outpatient
                (OPD) care, uniting the timeless classical wisdom of the
                Ayurvedic samhitas with more than 27 years of dedicated clinical
                research under <strong>Dr. K. S. Ajalkumar</strong> and{" "}
                <strong>Dr. V. Sharda Ajalkumar</strong>.
              </p>
            </div>

            {/* Capability Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige/80">
              <div className="p-4 rounded-lg bg-white/70 border border-beige/60">
                <div className="flex items-center gap-2 text-forest mb-1">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span className="font-editorial text-xl font-semibold">
                    36 Inpatient Beds
                  </span>
                </div>
                <p className="text-xs text-dark-muted leading-relaxed">
                  Private suites, semi-private, and wards with 24/7 nursing and
                  resident medical officer supervision.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/70 border border-beige/60">
                <div className="flex items-center gap-2 text-forest mb-1">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="font-editorial text-xl font-semibold">
                    24/7 Medical Care
                  </span>
                </div>
                <p className="text-xs text-dark-muted leading-relaxed">
                  Round-the-clock doctor availability and synchronized Kerala
                  Panchakarma therapists.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-forest hover:bg-botanical text-ivory text-sm font-medium tracking-wide transition-all shadow-sm group"
              >
                <span>Read Full Hospital Legacy</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white hover:bg-beige/40 text-forest border border-beige text-sm font-medium transition-colors"
              >
                <span>Tour Hospital Facilities</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
