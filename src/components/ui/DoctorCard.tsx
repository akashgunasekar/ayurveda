import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Doctor } from "@/lib/types";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-lg border border-beige/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-400">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-forest/10">
        <Image
          src={doctor.imageUrl}
          alt={doctor.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-botanical/90 via-botanical/20 to-transparent" />

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-gold text-botanical shadow-xs">
            <Award className="w-3.5 h-3.5" />
            {doctor.experienceYears}+ Years Clinical Exp
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-xs uppercase tracking-widest text-gold-light font-medium block">
            {doctor.qualifications}
          </span>
          <h3 className="font-editorial text-2xl font-medium text-ivory mt-0.5">
            <Link href={`/doctors/${doctor.slug}`}>
              {doctor.name}
            </Link>
          </h3>
          <p className="text-xs text-beige/80 mt-0.5 line-clamp-1">
            {doctor.designation}
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <div className="text-xs font-semibold text-leaf uppercase tracking-wider mb-2">
            Clinical Focus
          </div>
          <ul className="space-y-1.5 mb-4">
            {doctor.specialities.slice(0, 3).map((spec, i) => (
              <li
                key={i}
                className="text-xs text-dark-muted flex items-start gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
                <span className="line-clamp-1">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-beige/60 flex items-center justify-between gap-2">
          <Link
            href={`/doctors/${doctor.slug}`}
            className="text-xs font-medium text-forest hover:text-leaf underline underline-offset-4 transition-colors"
          >
            View Full Profile
          </Link>

          <Link
            href={`/book-appointment?doctor=${doctor.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-forest text-ivory hover:bg-botanical rounded transition-all duration-200"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-gold-light" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
