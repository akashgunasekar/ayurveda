import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Activity,
  Sparkles,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  const steps = [
    {
      number: "01",
      icon: Stethoscope,
      title: "Rogi-Roga Pareeksha & Pulse Diagnosis",
      description:
        "Comprehensive 45-minute clinical evaluation incorporating Nadi Pariksha, tongue diagnosis, digestive fire analysis (Agni), and detailed review of past medical investigations.",
    },
    {
      number: "02",
      icon: Activity,
      title: "Prakriti & Dosha Mapping",
      description:
        "Identification of your baseline constitution (Prakriti), the current state of biological imbalance (Vikriti), and tissue-level toxic stagnation (Ama).",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Supervised Panchakarma Chikitsa",
      description:
        "Administration of synchronized herbal therapies in classical wooden Droni suites, supervised twice daily by attending physicians with vital sign checks.",
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Pathya Ahara & Long-Term Rasayana",
      description:
        "Prescription of medicinal nutrition, seasonal dinacharya rhythms, and rejuvenating Rasayanas to maintain durable wellness and prevent recurrence.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-botanical text-ivory relative overflow-hidden">
      <Container>
        <SectionHeading
          theme="dark"
          eyebrow="THE HEALING PATHWAY"
          title="The Ayurkshetra Clinical"
          highlight="Patient Journey"
          description="A structured, medically ethical progression designed to restore internal homeostasis and long-term vitality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="relative p-7 rounded-xl bg-forest/40 border border-gold/25 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold-light border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-botanical transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-editorial text-3xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-ivory group-hover:text-gold-light transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-beige/80 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest text-xs text-gold-light/80 font-mono">
                  Phase 0{i + 1} of Healing
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-forest/80 border border-gold/30 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-ivory">
            Begin Your Personalized Treatment Journey
          </h3>
          <p className="text-sm text-beige/80 max-w-xl mx-auto">
            Consultations available in person at our Arumbakkam Chennai hospital
            or via scheduled online video appointments.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase transition-all shadow-md group"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
