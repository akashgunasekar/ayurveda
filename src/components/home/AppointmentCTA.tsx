import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { hospitalInfo } from "@/lib/content";

export default function AppointmentCTA() {
  return (
    <section className="py-20 md:py-24 bg-botanical text-ivory relative overflow-hidden border-t border-gold/30">
      {/* Decorative botanical glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest border border-gold/40 text-gold-light text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>COMMENCE YOUR HEALING AT AYURKSHETRA</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ivory leading-tight">
            Rediscover Health Through{" "}
            <span className="italic text-gold font-normal">
              Authentic Ayurveda
            </span>
          </h2>

          <p className="text-base sm:text-lg text-beige/85 max-w-2xl mx-auto leading-relaxed font-light">
            Consult Dr. K.S. Ajalkumar, Dr. V. Sharda Ajalkumar, and our senior
            practitioners for personalized pulse evaluation, authentic
            Panchakarma therapies, and 36-bedded inpatient care.
          </p>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl hover:text-ivory active:scale-95"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={`tel:${hospitalInfo.contact.primaryPhone}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded bg-forest/90 hover:bg-forest text-ivory border border-gold/40 hover:border-gold text-sm font-medium tracking-wide transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4.5 h-4.5 text-gold-light" />
              <span>Call: {hospitalInfo.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20schedule%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-[#25D366]/20 hover:bg-[#25D366]/30 text-ivory border border-[#25D366]/50 text-sm font-medium transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Quick Hospital Highlights */}
          <div className="pt-8 mt-6 border-t border-forest/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-beige/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Amaravathi Nagar, Arumbakkam, Chennai</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Open 7 Days a Week · 8 AM to 8 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Govt. of Tamil Nadu Registered Hospital</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
