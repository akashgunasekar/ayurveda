import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilitiesData } from "@/lib/content";

export default function FacilitiesSection() {
  const previewFacilities = facilitiesData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-ivory relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            eyebrow="HOSPITAL INFRASTRUCTURE"
            title="Designed for Clinical Rest &"
            highlight="Holistic Rejuvenation"
            description="Our 36-bedded hospital combines strict medical hygiene standards with the serene calm of traditional healing sanctuaries."
            className="mb-0!"
          />

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-leaf hover:text-forest transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </Link>

            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group"
            >
              <span>View All Facilities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-xl border border-beige/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-forest/5">
                  <Image
                    src={facility.imageUrl}
                    alt={facility.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-botanical/60 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-gold tracking-wider uppercase block mb-1">
                    {facility.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-forest group-hover:text-leaf transition-colors leading-snug">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm text-dark-muted leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 pt-4 border-t border-beige/60">
                    {facility.features.slice(0, 2).map((feat, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-dark-muted flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-gold transition-colors"
                >
                  <span>Explore Facility Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
