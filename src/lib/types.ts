export interface Treatment {
  slug: string;
  title: string;
  sanskritName?: string;
  category: "Panchakarma" | "Clinical Speciality" | "Wellness & Prevention";
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  procedureOverview: string[];
  duration: string;
  recommendedSessions: string;
  keyBenefits: string[];
  imageUrl: string;
  imageAlt: string;
  homeFeatured?: boolean;
}

export interface Doctor {
  slug: string;
  name: string;
  qualifications: string;
  designation: string;
  experienceYears: number;
  totalPatientsTreated?: string;
  specialities: string[];
  bio: string;
  achievements?: string[];
  consultationDays: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedTreatments: string[];
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Consultation" | "Panchakarma" | "Hospital Stay";
}

export interface HospitalInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedYears: number;
  bedsCount: number;
  experienceYears: number;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    landmark: string;
  };
  contact: {
    primaryPhone: string;
    phoneDisplay: string;
    whatsapp: string;
    email: string;
  };
  timings: {
    opdDays: string;
    opdHours: string;
    ipdAvailability: string;
  };
  accreditation: string;
}
