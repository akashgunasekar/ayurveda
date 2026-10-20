import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { hospitalInfo } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Healthcare Privacy Policy | Ayurkshetra Hospital Chennai",
  description:
    "Patient confidentiality, medical records security, and privacy policy of Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd), Chennai.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30">
        <Container>
          <Breadcrumbs
            items={[{ name: "Privacy Policy", url: "/privacy-policy" }]}
            className="text-beige/70 mb-4"
          />
          <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-ivory tracking-tight">
            Patient Confidentiality & Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-beige/80 mt-2 font-light">
            Effective Date: October 2026 · {hospitalInfo.legalName}
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20">
        <Container size="narrow">
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-beige/80 shadow-xs prose prose-stone max-w-none text-dark-muted space-y-6 leading-relaxed">
            <h2 className="font-editorial text-2xl font-semibold text-forest">
              1. Our Clinical Privacy Commitment
            </h2>
            <p>
              At {hospitalInfo.legalName} (&quot;Ayurkshetra&quot;), patient trust and
              medical confidentiality form the cornerstone of our ethical practice.
              This Privacy Policy explains how we collect, handle, safeguard, and
              utilize patient information when you visit our 36-bedded hospital,
              receive outpatient consultations, or interact with our digital
              platform.
            </p>

            <h2 className="font-editorial text-2xl font-semibold text-forest">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to deliver personalized,
              safe Ayurvedic medical care:
            </p>
            <ul>
              <li>
                <strong>Patient Identity & Contact Data:</strong> Full name,
                telephone number, email address, emergency contact, and residential
                location.
              </li>
              <li>
                <strong>Clinical & Health History:</strong> Chief complaints,
                pulse evaluation observations, past medical records, laboratory
                investigations, dietary habits, and ongoing medications.
              </li>
              <li>
                <strong>Appointment & Inpatient Records:</strong> Consultation
                dates, attending physicians, prescribed Panchakarma procedures,
                and room admission schedules.
              </li>
            </ul>

            <h2 className="font-editorial text-2xl font-semibold text-forest">
              3. Protection of Patient Health Records
            </h2>
            <p>
              All clinical records, pulse diagnosis notes, and diagnostic scans are
              maintained under strict healthcare data confidentiality. Access is
              restricted strictly to attending Ayurvedic physicians, licensed
              medical officers, and authorized hospital nursing staff directly
              involved in your therapeutic care.
            </p>
            <p>
              We do <strong>not</strong> sell, lease, rent, or trade your personal
              or medical details to any third-party marketing or commercial entities.
            </p>

            <h2 className="font-editorial text-2xl font-semibold text-forest">
              4. Digital Security & Spam Protection
            </h2>
            <p>
              When you submit consultation requests through our digital portal,
              submissions are encrypted using Industry Standard Transport Layer
              Security (TLS). Automated anti-spam safeguards (such as honeypots)
              protect our servers from malicious automated traffic without compromising
              your personal privacy.
            </p>

            <h2 className="font-editorial text-2xl font-semibold text-forest">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions regarding your medical records or wish to
              request an update to your patient contact file, please write to:
            </p>
            <div className="p-4 rounded-lg bg-ivory border border-beige/80 text-sm not-prose">
              <p className="font-semibold text-forest">{hospitalInfo.legalName}</p>
              <p className="text-dark-muted">
                {hospitalInfo.address.street}, {hospitalInfo.address.locality},{" "}
                {hospitalInfo.address.city}, {hospitalInfo.address.state} –{" "}
                {hospitalInfo.address.postalCode}
              </p>
              <p className="text-dark-muted mt-1">
                Email:{" "}
                <a
                  href={`mailto:${hospitalInfo.contact.email}`}
                  className="text-forest underline"
                >
                  {hospitalInfo.contact.email}
                </a>
              </p>
              <p className="text-dark-muted">
                Phone: {hospitalInfo.contact.phoneDisplay}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
