import React from "react";
import Link from "next/link";
import { Wind, Flame, Droplets, Sparkles, HeartPulse, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PhilosophySection() {
  const doshas = [
    {
      name: "Vata Dosha",
      elements: "Space (Akasha) + Air (Vayu)",
      role: "The Principle of Movement",
      description:
        "Governs cellular communication, breathing, nervous impulses, circulation, and physical agility. When balanced, it fosters mental creativity and vitality; when aggravated, it manifests as joint stiffness, anxiety, and sleeplessness.",
      icon: Wind,
      color: "border-sky-700/40 bg-sky-950/20 text-sky-300",
    },
    {
      name: "Pitta Dosha",
      elements: "Fire (Agni) + Water (Jala)",
      role: "The Principle of Transformation",
      description:
        "Controls digestion, enzymatic metabolism, cellular nutrition, body temperature, and cognitive intelligence. Imbalance produces hyperacidity, skin inflammations, irritability, and tissue burn-out.",
      icon: Flame,
      color: "border-amber-700/40 bg-amber-950/20 text-amber-300",
    },
    {
      name: "Kapha Dosha",
      elements: "Earth (Prithvi) + Water (Jala)",
      role: "The Principle of Cohesion & Structure",
      description:
        "Provides biological stability, joint lubrication, immunity (Ojas), and tissue regeneration. When congested, it results in metabolic lethargy, lymphatic stagnation, and respiratory heaviness.",
      icon: Droplets,
      color: "border-emerald-700/40 bg-emerald-950/20 text-emerald-300",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-botanical text-ivory relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest/30 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          theme="dark"
          eyebrow="HOLISTIC AYURVEDIC PRINCIPLES"
          title="Rooted in Nature. Guided by"
          highlight="Timeless Samhitas"
          description="Ayurveda does not merely suppress symptomatic discomfort. It identifies the root disharmony in your innate biological constitution (Prakriti) and clears accumulated metabolic residues (Ama) through classical therapies."
        />

        {/* Dosha Trio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {doshas.map((dosha, i) => {
            const Icon = dosha.icon;

            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center border ${dosha.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-gold-light uppercase">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-ivory group-hover:text-gold transition-colors">
                    {dosha.name}
                  </h3>
                  <p className="text-xs text-gold-light tracking-wide uppercase mt-1 font-medium">
                    {dosha.role}
                  </p>
                  <p className="text-xs text-beige/60 font-mono mt-0.5">
                    {dosha.elements}
                  </p>

                  <p className="mt-4 text-sm text-beige/80 leading-relaxed">
                    {dosha.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest flex items-center justify-between text-xs text-gold-light">
                  <span>Constitutional Balance</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Pillars Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-forest/60 border border-gold/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                THE AYURKSHETRA APPROACH
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-ivory">
                Nadi Pariksha & Personalized Chikitsa
              </h3>
              <p className="text-sm sm:text-base text-beige/80 leading-relaxed font-light">
                Every healing journey begins with a meticulous pulse diagnosis
                (Nadi Pariksha) by our senior physicians. By assessing the
                subtle vibrations of your radial artery, we discern constitutional
                dosha ratios, organ vitality, metabolic fire (Agni), and mental
                stress levels, charting a tailored path of recovery.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-sm tracking-wide uppercase transition-all shadow-md group"
              >
                <span>Book Pulse Diagnosis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
