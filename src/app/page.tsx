import React from "react";
import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import FAQSection from "@/components/home/FAQSection";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import { generateHospitalSchema, generateFAQSchema } from "@/lib/schema";
import { faqsData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ayurkshetra | 36-Bed Ayurvedic Hospital & Keraliya Panchakarma in Chennai",
  description:
    "Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) is a trusted 36-bedded Ayurvedic hospital in Arumbakkam, Chennai. 27+ years clinical legacy in authentic Keraliya Panchakarma, individualized pulse diagnosis, and round-the-clock doctor care under Dr. K.S. Ajalkumar.",
  alternates: {
    canonical: "https://www.ayurkshetra.com",
  },
};

export default function HomePage() {
  const hospitalSchema = generateHospitalSchema();
  const faqSchema = generateFAQSchema(faqsData.slice(0, 6));

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1 — CINEMATIC HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2 — TRUST AND HOSPITAL INTRODUCTION */}
      <AboutSection />

      {/* SECTION 3 — AYURVEDA PHILOSOPHY */}
      <PhilosophySection />

      {/* SECTION 4 — TREATMENTS AND SPECIALITIES */}
      <TreatmentsSection />

      {/* SECTION 5 — WHY CHOOSE AYURKSHETRA */}
      <WhyChooseSection />

      {/* SECTION 6 — DOCTORS AND PRACTITIONERS */}
      <DoctorsSection />

      {/* SECTION 7 — TREATMENT EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION 8 — FACILITIES AND HOSPITAL */}
      <FacilitiesSection />

      {/* SECTION 9 — EDUCATIONAL ARTICLES */}
      <ArticlesSection />

      {/* SECTION 10 — FAQ */}
      <FAQSection />

      {/* SECTION 11 — APPOINTMENT CTA */}
      <AppointmentCTA />
    </>
  );
}
