"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarCheck,
  Phone,
  Mail,
  User,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { appointmentSchema, AppointmentFormData } from "@/lib/validation";
import { hospitalInfo, treatmentsData, doctorsData } from "@/lib/content";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedDoctor = searchParams.get("doctor") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    bookingReference?: string;
    message?: string;
    isProductionConfigured?: boolean;
    error?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      treatmentSlug: preselectedService || "general-consultation",
      preferredDoctor: preselectedDoctor || "any",
      consultationType: "outpatient",
      preferredContactMethod: "phone",
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("treatmentSlug", preselectedService);
    }
    if (preselectedDoctor) {
      setValue("preferredDoctor", preselectedDoctor);
    }
  }, [preselectedService, preselectedDoctor, setValue]);

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          website_hp: "", // Honeypot field
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionResult({
          success: true,
          bookingReference: result.bookingReference,
          message: result.message,
          isProductionConfigured: result.isProductionConfigured,
        });
        reset();
      } else {
        setSubmissionResult({
          success: false,
          error:
            result.error ||
            "Unable to submit appointment request. Please verify inputs or call the hospital directly.",
        });
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        error:
          "Network connectivity issue. Please dial +91 93810 26016 for immediate booking.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Clinical Form */}
      <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-2xl border border-beige/80 shadow-md">
        <div className="mb-8">
          <span className="text-xs font-semibold text-leaf tracking-widest uppercase">
            PATIENT REGISTRATION
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-forest mt-1">
            Schedule Your Consultation
          </h2>
          <p className="text-xs sm:text-sm text-dark-muted mt-2">
            Please fill in your contact information and consultation preferences.
            Our clinical coordination team will confirm your slot within 2 hours.
          </p>
        </div>

        {/* Success Banner */}
        {submissionResult?.success && (
          <div
            className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3"
            role="alert"
          >
            <div className="flex items-center gap-2 font-editorial text-xl font-semibold text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Consultation Request Confirmed</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Booking Reference:{" "}
              <strong className="font-mono text-emerald-800 text-sm">
                {submissionResult.bookingReference}
              </strong>
            </p>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {submissionResult.message}
            </p>
            {!submissionResult.isProductionConfigured && (
              <div className="pt-2 border-t border-emerald-200 text-[11px] text-emerald-700">
                <strong>Deployment Note:</strong> Running in development mode.
                To dispatch automated patient SMS and emails in production,
                supply <code className="bg-emerald-100 px-1 rounded">RESEND_API_KEY</code> or{" "}
                <code className="bg-emerald-100 px-1 rounded">SMTP_HOST</code> in environment variables.
              </div>
            )}
          </div>
        )}

        {/* Error Banner */}
        {submissionResult?.success === false && (
          <div
            className="mb-8 p-5 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 flex items-start gap-3"
            role="alert"
          >
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-rose-900">Submission Error</p>
              <p className="mt-1">{submissionResult.error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? "border-rose-400 focus:ring-rose-300"
                      : "border-beige/90 focus:ring-gold/60 focus:border-gold"
                  }`}
                />
                <User className="w-4 h-4 text-dark-muted absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  {...register("phone")}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-rose-400 focus:ring-rose-300"
                      : "border-beige/90 focus:ring-gold/60 focus:border-gold"
                  }`}
                />
                <Phone className="w-4 h-4 text-dark-muted absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Email Address <span className="text-dark-muted text-[11px]">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-rose-400 focus:ring-rose-300"
                      : "border-beige/90 focus:ring-gold/60 focus:border-gold"
                  }`}
                />
                <Mail className="w-4 h-4 text-dark-muted absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Preferred Date <span className="text-rose-600">*</span>
              </label>
              <input
                id="preferredDate"
                type="date"
                {...register("preferredDate")}
                className={`w-full px-4 py-3 rounded-lg border text-sm bg-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.preferredDate
                    ? "border-rose-400 focus:ring-rose-300"
                    : "border-beige/90 focus:ring-gold/60 focus:border-gold"
                }`}
              />
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-rose-600">{errors.preferredDate.message}</p>
              )}
            </div>
          </div>

          {/* Treatment or Speciality & Doctor Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="treatmentSlug"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Treatment / Service of Interest <span className="text-rose-600">*</span>
              </label>
              <select
                id="treatmentSlug"
                {...register("treatmentSlug")}
                className="w-full px-4 py-3 rounded-lg border border-beige/90 bg-ivory/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold"
              >
                <option value="general-consultation">
                  General Consultation & Pulse Diagnosis (Nadi Pariksha)
                </option>
                {treatmentsData.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.title} ({t.category})
                  </option>
                ))}
              </select>
              {errors.treatmentSlug && (
                <p className="mt-1 text-xs text-rose-600">{errors.treatmentSlug.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredDoctor"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Preferred Senior Physician
              </label>
              <select
                id="preferredDoctor"
                {...register("preferredDoctor")}
                className="w-full px-4 py-3 rounded-lg border border-beige/90 bg-ivory/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold"
              >
                <option value="any">First Available Senior Consultant</option>
                {doctorsData.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} ({d.qualifications})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Consultation Type & Preferred Contact Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="consultationType"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Consultation Type <span className="text-rose-600">*</span>
              </label>
              <select
                id="consultationType"
                {...register("consultationType")}
                className="w-full px-4 py-3 rounded-lg border border-beige/90 bg-ivory/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold"
              >
                <option value="outpatient">Outpatient Hospital Visit (OPD)</option>
                <option value="inpatient">Inpatient Admission Request (36-Bed IPD)</option>
                <option value="online-video">Online Video Consultation (Domestic/Overseas)</option>
              </select>
              {errors.consultationType && (
                <p className="mt-1 text-xs text-rose-600">{errors.consultationType.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredContactMethod"
                className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
              >
                Preferred Contact Method <span className="text-rose-600">*</span>
              </label>
              <select
                id="preferredContactMethod"
                {...register("preferredContactMethod")}
                className="w-full px-4 py-3 rounded-lg border border-beige/90 bg-ivory/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold"
              >
                <option value="phone">Direct Phone Call</option>
                <option value="whatsapp">WhatsApp Message</option>
                <option value="email">Email Confirmation</option>
              </select>
              {errors.preferredContactMethod && (
                <p className="mt-1 text-xs text-rose-600">{errors.preferredContactMethod.message}</p>
              )}
            </div>
          </div>

          {/* Message / Symptoms Notes */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2"
            >
              Health Concerns / Symptoms Notes{" "}
              <span className="text-dark-muted text-[11px]">(Optional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Briefly describe your symptoms, chronic condition history, or preferred appointment time slot..."
              {...register("message")}
              className="w-full px-4 py-3 rounded-lg border border-beige/90 bg-ivory/40 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>
            )}
            <p className="text-[11px] text-dark-muted mt-1">
              Your medical information is kept strictly confidential according to
              clinical healthcare privacy standards.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md hover:text-ivory disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{isSubmitting ? "Submitting Request..." : "Confirm Consultation Request"}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Right Column: Contact Guarantees & Hospital Timings */}
      <div className="lg:col-span-4 space-y-6">
        <div className="p-7 rounded-2xl bg-botanical text-ivory border border-gold/30 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-gold-light text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>NEED IMMEDIATE ASSISTANCE?</span>
          </div>

          <h3 className="font-editorial text-2xl font-medium text-ivory">
            Direct Calling & Walk-In Desk
          </h3>

          <p className="text-xs sm:text-sm text-beige/85 leading-relaxed font-light">
            If you need urgent medical admission, bed reservation, or same-day
            consultation, please call our hospital desk directly.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href={`tel:${hospitalInfo.contact.primaryPhone}`}
              className="w-full py-3 px-4 rounded bg-forest hover:bg-botanical text-ivory border border-gold/40 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-gold-light" />
              <span>Call: {hospitalInfo.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20book%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Instant Message</span>
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-beige/80 space-y-3 shadow-2xs text-xs text-dark-muted">
          <h4 className="font-editorial text-lg font-semibold text-forest">
            What to bring for your visit:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
              <span>Past blood reports, scans, or allopathic discharge summaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
              <span>Current medication list (allopathy, homeopathy, supplements).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
              <span>Comfortable, loose cotton clothing for pulse and joint evaluation.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Book Appointment", url: "/book-appointment" }]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>CLINICAL CONSULTATION & INPATIENT ADMISSIONS</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Consult Senior Ayurvedic{" "}
              <span className="italic text-gold font-normal">
                Physicians
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Available for Outpatient hospital visits in Arumbakkam, 36-bed
              Inpatient admissions, or structured Online Video consultations.
            </p>
          </div>
        </Container>
      </div>

      {/* Appointment Suite */}
      <section className="py-16 md:py-24">
        <Container>
          <Suspense fallback={<div className="text-center py-12 text-forest">Loading appointment suite...</div>}>
            <AppointmentFormContent />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
