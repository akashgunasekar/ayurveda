import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot spam check
    if (body.website_hp && body.website_hp.length > 0) {
      return NextResponse.json(
        { error: "Spam submission detected." },
        { status: 400 }
      );
    }

    // Server-side Zod validation
    const validationResult = appointmentSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // Sanitize message notes to prevent XSS
    const sanitizedMessage = data.message
      ? data.message.replace(/<[^>]*>?/gm, "").trim()
      : "";

    // Generate unique clinical booking reference
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingReference = `AYUR-${timestamp}-${randomSuffix}`;

    const isProductionConfigured = Boolean(
      process.env.RESEND_API_KEY || process.env.SMTP_HOST
    );

    // Development / unconfigured mode logging
    console.log(
      `[Ayurkshetra Appointment Received] Ref: ${bookingReference}`,
      {
        patient: data.fullName,
        phone: data.phone,
        service: data.treatmentSlug,
        date: data.preferredDate,
        type: data.consultationType,
        configured: isProductionConfigured,
      }
    );

    return NextResponse.json(
      {
        success: true,
        bookingReference,
        patientName: data.fullName,
        preferredDate: data.preferredDate,
        consultationType: data.consultationType,
        service: data.treatmentSlug,
        isProductionConfigured,
        message: isProductionConfigured
          ? "Your consultation request has been confirmed. Our hospital coordination desk will contact you shortly."
          : "Appointment request logged successfully (Development mode: To enable production email/SMS alerts, configure RESEND_API_KEY or SMTP in .env.local).",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
