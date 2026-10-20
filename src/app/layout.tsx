import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B2418",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayurkshetra.com"),
  title: {
    default: "Ayurkshetra | Premier 36-Bed Ayurvedic Hospital & Keraliya Panchakarma in Chennai",
    template: "%s | Ayurkshetra Ayurveda Hospital Chennai",
  },
  description:
    "Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd) is a trusted 36-bedded Ayurvedic hospital in Arumbakkam, Chennai. 27+ years of clinical excellence in authentic Keraliya Panchakarma, personalized consultations, and round-the-clock doctor care.",
  keywords: [
    "Ayurvedic hospital in Chennai",
    "Panchakarma treatment Chennai",
    "Ayurkshetra",
    "Ayurvedic doctor Chennai",
    "Keraliya Panchakarma",
    "Uro Basti Chennai",
    "Navarakizhi Chennai",
    "Podikizhi Chennai",
    "Arumbakkam Ayurveda clinic",
    "Dr K S Ajalkumar",
    "Dr V Sharda Ajalkumar",
  ],
  authors: [{ name: "Ayurkshetra Medical Board" }],
  creator: "Ayurkshetra",
  publisher: "Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "https://fpfaviconimages.withfloats.com/actual/69d3c4b7414bfe708187bc39.jpeg",
    shortcut: "https://fpfaviconimages.withfloats.com/actual/69d3c4b7414bfe708187bc39.jpeg",
    apple: "https://fpfaviconimages.withfloats.com/actual/69d3c4b7414bfe708187bc39.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ayurkshetra.com",
    siteName: "Ayurkshetra Ayurveda Hospital",
    title: "Ayurkshetra | Authentic Ayurveda Hospital & Panchakarma Centre in Chennai",
    description:
      "27+ years of healing legacy. 36-bedded full-fledged Ayurvedic hospital offering authentic Keraliya Panchakarma, inpatient and outpatient care in Chennai.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ayurkshetra Ayurvedic Hospital Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurkshetra | Premier Ayurvedic Hospital in Chennai",
    description:
      "36-bedded hospital, authentic Keraliya Panchakarma, 27+ years clinical experience under Dr. K.S. Ajalkumar.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-dark selection:bg-forest selection:text-gold-light antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
