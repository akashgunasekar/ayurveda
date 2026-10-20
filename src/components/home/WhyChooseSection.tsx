import React from "react";
import {
  Award,
  Building2,
  Clock,
  Sparkles,
  HeartHandshake,
  BookOpenCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseSection() {
  const differentiators = [
    {
      icon: Award,
      title: "27+ Years Clinical Leadership",
      description:
        "Headed by Dr. K.S. Ajalkumar (recipient of Jwala Ratna Award 2022) with over 250,000 chronic and critical cases successfully managed with individualized care.",
    },
    {
      icon: Building2,
      title: "36-Bed Full-Fledged Hospital",
      description:
        "Registered under the Government of Tamil Nadu, featuring modern hygienic inpatient suites, sterile treatment rooms, and round-the-clock medical attention.",
    },
    {
      icon: Clock,
      title: "24/7 Physician & Therapist Care",
      description:
        "Continuous inpatient medical monitoring, resident medical officers, and experienced Panchakarma therapists ensuring uninterrupted clinical safety.",
    },
    {
      icon: Sparkles,
      title: "Classical Kerala Lineage",
      description:
        "Authentic Keraliya Panchakarma using hand-carved medicinal wood Dronis, classical bronze apparatus, and traditional synchronized therapy techniques.",
    },
    {
      icon: BookOpenCheck,
      title: "Pure Classical Kashaya Pharmacy",
      description:
        "Direct procurement of authentic formulations from certified classical Ayurvedic pharmacies (Kottakkal, Vaidyaratnam) alongside freshly brewed herbal decoctions.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Pathya Nutrition",
      description:
        "In-house sattvic culinary facility preparing fresh, physician-prescribed medicinal meals and therapeutic herbal water tailored to each patient's doshic state.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-b border-beige/60 relative">
      <Container>
        <SectionHeading
          eyebrow="WHY CHOOSE AYURKSHETRA"
          title="Clinical Credibility Grounded in"
          highlight="Authentic Tradition"
          description="We combine the precision of medical hospitalization with the restorative depth of sacred Kerala Ayurveda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {differentiators.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-white border border-beige/70 hover:border-gold/60 transition-all duration-300 shadow-2xs hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-forest/5 text-forest flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-gold-light transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-forest group-hover:text-leaf transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-beige/40 flex items-center text-xs font-semibold text-leaf">
                  <span>Verified Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
