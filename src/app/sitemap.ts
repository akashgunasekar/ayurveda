import { MetadataRoute } from "next";
import { treatmentsData, doctorsData, blogPostsData } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: "2026-10-20",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: "2026-10-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/treatments`,
      lastModified: "2026-10-20",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/doctors`,
      lastModified: "2026-10-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/facilities`,
      lastModified: "2026-10-20",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: "2026-10-20",
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: "2026-10-20",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/book-appointment`,
      lastModified: "2026-10-20",
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: "2026-10-20",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const treatmentPages: MetadataRoute.Sitemap = treatmentsData.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
    lastModified: "2026-10-20",
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const doctorPages: MetadataRoute.Sitemap = doctorsData.map((d) => ({
    url: `${SITE_URL}/doctors/${d.slug}`,
    lastModified: "2026-10-20",
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPostsData.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...treatmentPages, ...doctorPages, ...blogPages];
}
