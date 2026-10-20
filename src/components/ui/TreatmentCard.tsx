import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Treatment } from "@/lib/types";

interface TreatmentCardProps {
  treatment: Treatment;
  featured?: boolean;
}

export default function TreatmentCard({
  treatment,
  featured = false,
}: TreatmentCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-lg border border-beige/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-400">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-forest/5">
        <Image
          src={treatment.imageUrl}
          alt={treatment.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-botanical/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-botanical/85 text-gold-light border border-gold/30 backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-gold" />
            {treatment.category}
          </span>
        </div>

        {treatment.sanskritName && (
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-xs text-beige/90 tracking-wide font-serif italic">
              {treatment.sanskritName}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-editorial text-2xl font-medium text-forest group-hover:text-leaf transition-colors duration-200">
          <Link href={`/treatments/${treatment.slug}`}>
            {treatment.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-dark-muted line-clamp-3 leading-relaxed flex-1">
          {treatment.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-beige/60 flex items-center justify-between text-xs text-dark-muted">
          <div className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{treatment.duration}</span>
          </div>

          <Link
            href={`/treatments/${treatment.slug}`}
            className="inline-flex items-center gap-1 font-medium text-forest group-hover:text-gold transition-colors duration-200"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
