import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Train,
  Plane,
  Building,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Ayurkshetra Hospital Chennai | Address, Phone & Route Directions",
  description:
    "Contact Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) in Arumbakkam, Chennai. Phone: +91 93810 26016, Email: dr.ksajalkumar@gmail.com. Complete route directions from Chennai Airport & Central.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Contact & Directions", url: "/contact" }]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>HOSPITAL LOCATION & 24/7 ADMISSIONS</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Reach Ayurkshetra in the{" "}
              <span className="italic text-gold font-normal">
                Heart of Chennai
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Centrally situated in Amaravathi Nagar, Arumbakkam with effortless
              transit from Chennai Airport, Central Railway Station, and
              Koyambedu.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Cards & Map Overview */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info & Transit Routes */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Contact Details */}
              <div className="p-8 rounded-2xl bg-white border border-beige/80 shadow-xs space-y-6">
                <h2 className="font-editorial text-2xl font-semibold text-forest border-b border-beige/60 pb-3">
                  Hospital Contact Desk
                </h2>

                <div className="space-y-4 text-sm text-dark-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-forest">Address:</p>
                      <address className="not-italic leading-relaxed mt-0.5">
                        {hospitalInfo.address.street},<br />
                        {hospitalInfo.address.locality},<br />
                        {hospitalInfo.address.city}, {hospitalInfo.address.state} –{" "}
                        {hospitalInfo.address.postalCode}, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">Direct Calling Line:</p>
                      <a
                        href={`tel:${hospitalInfo.contact.primaryPhone}`}
                        className="text-forest hover:text-gold font-semibold text-base transition-colors"
                      >
                        {hospitalInfo.contact.phoneDisplay}
                      </a>
                      <p className="text-xs text-dark-muted mt-0.5">
                        (Please add +91 before the number if calling internationally)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">Official Email:</p>
                      <a
                        href={`mailto:${hospitalInfo.contact.email}`}
                        className="text-forest hover:text-gold transition-colors break-all"
                      >
                        {hospitalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">Operational Timings:</p>
                      <p className="mt-0.5">OPD Consultations: 8:00 AM – 8:00 PM (Mon – Sun)</p>
                      <p className="text-xs text-leaf font-semibold mt-0.5">
                        Inpatient & Emergency Care: 24/7 Available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20enquire%20about%20hospital%20consultation`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>

                  <Link
                    href="/book-appointment"
                    className="w-full py-3 px-4 rounded bg-forest hover:bg-botanical text-ivory font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <CalendarCheck className="w-4 h-4 text-gold-light" />
                    <span>Book Consultation Slot</span>
                  </Link>
                </div>
              </div>

              {/* Transit & Accessibility Guide */}
              <div className="p-8 rounded-2xl bg-white border border-beige/80 shadow-xs space-y-4">
                <h3 className="font-editorial text-2xl font-semibold text-forest flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-gold" />
                  <span>Transit & Directions</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-dark-muted">
                  <div className="p-3.5 rounded-lg bg-ivory border border-beige/60 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-forest">
                      <Plane className="w-4 h-4 text-gold" />
                      <span>From Chennai International Airport (MAA)</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Distance: ~13 km. Easily reached via Inner Ring Road /
                      Jawaharlal Nehru Road in approximately 25–35 minutes by
                      taxi or auto.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-ivory border border-beige/60 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-forest">
                      <Train className="w-4 h-4 text-gold" />
                      <span>From Chennai Central / Egmore Railway Stations</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Distance: ~9 km. Direct connection via Poonamallee High
                      Road into Arumbakkam (20–25 minutes).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-ivory border border-beige/60 space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-forest">
                      <Building className="w-4 h-4 text-gold" />
                      <span>Koyambedu Metro & Bus Hub</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Distance: ~1.5 km. Proximity to Koyambedu Metro Station and
                      CMBT bus terminus provides swift connectivity for regional
                      travelers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Map & Live Navigation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 rounded-2xl bg-white border border-beige/80 shadow-xs space-y-4">
                <h3 className="font-editorial text-2xl font-semibold text-forest">
                  Hospital Location Map
                </h3>
                <p className="text-xs sm:text-sm text-dark-muted">
                  No. 5, Panjaliamman Koil Street, Amaravathi Nagar, Arumbakkam,
                  Chennai, Tamil Nadu 600106.
                </p>

                <div className="relative aspect-16/11 w-full rounded-xl overflow-hidden border border-beige shadow-inner bg-forest/5">
                  <iframe
                    title="Ayurkshetra Hospital Location Map Arumbakkam Chennai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4258953181827!2d80.2052445758223!3d13.069412512662057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668b812ef62b%3A0xc48c08cb404c0bc8!2sAyurkshetra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-dark-muted">
                  <span>Coordinates: 13.0694° N, 80.2078° E</span>
                  <a
                    href="https://maps.google.com/?q=Ayurkshetra+Arumbakkam+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hospital Amenities Card */}
              <div className="p-8 rounded-2xl bg-forest text-ivory border border-gold/30 space-y-3">
                <h4 className="font-editorial text-xl font-medium text-ivory">
                  Parking & Attendant Guidance
                </h4>
                <p className="text-xs sm:text-sm text-beige/85 leading-relaxed font-light">
                  Dedicated vehicle parking is available on hospital premises.
                  For outstation patients requiring overnight attendant
                  lodging, our hospital coordination desk will be pleased to
                  arrange comfortable hospital suite accommodations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
