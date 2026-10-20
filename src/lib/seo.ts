import { Metadata } from "next";

export const SITE_URL = "https://www.ayurkshetra.com";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  keywords = [],
  type = "website",
}: PageMetaOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  const defaultKeywords = [
    "Ayurvedic hospital in Chennai",
    "Panchakarma treatment Chennai",
    "Ayurkshetra",
    "Dr K S Ajalkumar",
    "Dr V Sharda Ajalkumar",
    "Keraliya Panchakarma",
    "Arumbakkam Ayurveda",
    "Ayurvedic doctor near me",
  ];

  return {
    title,
    description,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Ayurkshetra`,
      description,
      url: canonicalUrl,
      siteName: "Ayurkshetra Ayurveda Hospital",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ayurkshetra`,
      description,
      images: [image],
    },
  };
}
