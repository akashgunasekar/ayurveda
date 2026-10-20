import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(80, { message: "Name cannot exceed 80 characters." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit phone number." })
    .regex(/^[+]?[0-9\s-]{10,15}$/, {
      message: "Please enter a valid phone number with country code if outside India.",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  preferredDate: z
    .string()
    .min(1, { message: "Please select your preferred consultation date." }),
  treatmentSlug: z
    .string()
    .min(1, { message: "Please select a treatment or service of interest." }),
  preferredDoctor: z.string().optional(),
  consultationType: z.enum(
    ["inpatient", "outpatient", "online-video"],
    { message: "Please choose consultation type." }
  ),
  preferredContactMethod: z.enum(["whatsapp", "phone", "email"], {
    message: "Please choose preferred contact method.",
  }),
  message: z.string().max(500, { message: "Notes cannot exceed 500 characters." }).optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
