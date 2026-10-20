import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { hospitalInfo, treatmentsData, doctorsData } from "@/lib/content";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-botanical text-ivory border-t border-forest/80 relative overflow-hidden">
      {/* Decorative subtle botanical background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Hospital Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/70 bg-white shrink-0">
                <Image
                  src="https://fplogoimages.withfloats.com/actual/69d3b5a09d53930e014ca0d7.jpeg"
                  alt="Ayurkshetra Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>

              <div>
                <span className="font-editorial text-2xl font-bold tracking-wide text-ivory block leading-none">
                  AYURKSHETRA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-light font-medium block mt-1">
                  Institute of Ayurvedic Research Pvt. Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-beige/80 leading-relaxed pt-2">
              A trusted, 36-bedded full-fledged Ayurvedic hospital located in
              the heart of Chennai. Registered under the Government of Tamil
              Nadu, blending authentic Keraliya Panchakarma with over 27 years of
              dedicated clinical experience under Dr. K.S. Ajalkumar and senior
              practitioners.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-gold-light/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>36-Bed Inpatient & 24/7 Medical Care</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Govt. of Tamil Nadu Clinical Establishment Reg.</span>
              </div>
            </div>

            {/* Quick WhatsApp connect */}
            <div className="pt-3">
              <a
                href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20consult%20an%20Ayurvedic%20doctor`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Keraliya Panchakarma & Treatments */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-editorial text-lg font-semibold tracking-wider text-gold-light uppercase border-b border-forest pb-2">
              Featured Treatments
            </h3>
            <ul className="space-y-2 text-sm text-beige/80">
              {treatmentsData.slice(0, 6).map((treatment) => (
                <li key={treatment.slug}>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-leaf/60 group-hover:translate-x-0.5 group-hover:text-gold transition-all" />
                    <span className="line-clamp-1">{treatment.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/treatments"
                  className="text-xs font-semibold text-gold-light hover:underline inline-flex items-center gap-1"
                >
                  <span>View All 12 Treatments</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Hospital Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-editorial text-lg font-semibold tracking-wider text-gold-light uppercase border-b border-forest pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-beige/80">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Ayurkshetra
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-gold transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-gold transition-colors">
                  36-Bed Facilities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Ayurveda Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact & Map
                </Link>
              </li>
              <li>
                <Link
                  href="/book-appointment"
                  className="text-gold font-medium hover:underline"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hospital Address */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-editorial text-lg font-semibold tracking-wider text-gold-light uppercase border-b border-forest pb-2">
              Contact & Location
            </h3>

            <div className="space-y-3 text-sm text-beige/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {hospitalInfo.address.street},<br />
                  {hospitalInfo.address.locality},<br />
                  {hospitalInfo.address.city}, {hospitalInfo.address.state} –{" "}
                  {hospitalInfo.address.postalCode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${hospitalInfo.contact.primaryPhone}`}
                  className="hover:text-gold transition-colors font-medium text-ivory"
                >
                  {hospitalInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${hospitalInfo.contact.email}`}
                  className="hover:text-gold transition-colors truncate"
                >
                  {hospitalInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-beige/70">
                <Clock className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ivory">OPD Hours:</p>
                  <p>Mon – Sun: 8:00 AM – 8:00 PM</p>
                  <p className="text-gold-light mt-0.5">
                    Inpatient & Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="mt-12 pt-8 border-t border-forest/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/70">
          <p>
            © {currentYear} {hospitalInfo.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Directions & Route Map
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
