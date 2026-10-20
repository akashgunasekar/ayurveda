import { Doctor, Treatment, BlogPost, FAQItem } from "./types";
import { hospitalInfo } from "./content";
import { SITE_URL } from "./seo";

export function generateHospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalBusiness"],
    "@id": `${SITE_URL}#hospital`,
    name: hospitalInfo.name,
    legalName: hospitalInfo.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: "https://fplogoimages.withfloats.com/actual/69d3b5a09d53930e014ca0d7.jpeg",
      width: "500",
      height: "500",
    },
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) is a 36-bedded Ayurvedic hospital in Chennai with 27+ years of clinical excellence in authentic Keraliya Panchakarma, inpatient and outpatient care.",
    telephone: hospitalInfo.contact.primaryPhone,
    email: hospitalInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: hospitalInfo.address.street,
      addressLocality: hospitalInfo.address.locality,
      addressRegion: hospitalInfo.address.state,
      postalCode: hospitalInfo.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0694",
      longitude: "80.2078",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: [
      "AyurvedicMedicine",
      "Panchakarma",
      "PhysicalTherapy",
      "HolisticHealth",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Keraliya Panchakarma",
      },
      {
        "@type": "MedicalTherapy",
        name: "Uro Basti",
      },
      {
        "@type": "MedicalTherapy",
        name: "Navarakizhi (Shashtika Shali Pinda Sweda)",
      },
      {
        "@type": "MedicalTherapy",
        name: "Podikizhi (Churna Pinda Sweda)",
      },
      {
        "@type": "MedicalTherapy",
        name: "Shirodhara",
      },
    ],
    priceRange: "$$",
  };
}

export function generateDoctorSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.designation,
    description: doctor.bio,
    image: doctor.imageUrl,
    telephone: hospitalInfo.contact.primaryPhone,
    worksFor: {
      "@type": "Hospital",
      name: hospitalInfo.legalName,
      url: SITE_URL,
    },
    medicalSpecialty: doctor.specialities,
    url: `${SITE_URL}/doctors/${doctor.slug}`,
  };
}

export function generateTreatmentSchema(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    procedureType: "NonInvasiveProcedure",
    description: treatment.fullDescription,
    bodyLocation: "Full Body / Targeted",
    followup: "Follow-up consultation and Pathya diet regimen",
    howPerformed: treatment.procedureOverview.join(". "),
    url: `${SITE_URL}/treatments/${treatment.slug}`,
  };
}

export function generateBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: post.imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Hospital",
      name: hospitalInfo.name,
      logo: {
        "@type": "ImageObject",
        url: "https://fplogoimages.withfloats.com/actual/69d3b5a09d53930e014ca0d7.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
