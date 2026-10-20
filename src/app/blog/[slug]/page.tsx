import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { blogPostsData, treatmentsData, hospitalInfo } from "@/lib/content";
import { generateBlogPostingSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return constructMetadata({
    title: `${post.title} | Ayurkshetra Clinical Blog`,
    description: post.summary,
    path: `/blog/${post.slug}`,
    image: post.imageUrl,
    type: "article",
    keywords: [post.category, post.title, "Ayurkshetra Blog", "Ayurveda Chennai"],
  });
}

function formatDateString(dateStr: string): string {
  const parts = dateStr.split("-");
  if (parts.length < 3) return dateStr;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const mIdx = parseInt(parts[1], 10) - 1;
  const month = monthNames[mIdx] || parts[1];
  const day = parseInt(parts[2], 10);
  return `${month} ${day}, ${parts[0]}`;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogSchema = generateBlogPostingSchema(post);
  const relatedTreatmentsList = treatmentsData.filter((t) =>
    post.relatedTreatments.includes(t.slug)
  );

  return (
    <div className="bg-ivory min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-4xl space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-forest text-gold-light border border-gold/30">
              {post.category}
            </span>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ivory tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              {post.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-beige/80 border-t border-forest/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {formatDateString(post.publishedAt)}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-gold-light font-medium">
                <UserCheck className="w-3.5 h-3.5 text-gold" />
                By {post.author} ({post.authorRole})
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Article Content */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-beige shadow-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Key Takeaways Box */}
              <div className="p-7 rounded-2xl bg-forest/10 border border-leaf/30 space-y-3">
                <h3 className="font-editorial text-xl font-semibold text-forest flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-leaf" />
                  <span>Clinical Key Takeaways</span>
                </h3>
                <ul className="space-y-2 pt-1">
                  {post.keyTakeaways.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-dark-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Article Body */}
              <div className="prose prose-stone max-w-none text-dark-muted text-base leading-relaxed space-y-6">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="p-6 rounded-xl bg-white border border-beige/80 shadow-2xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest text-gold-light font-editorial font-bold text-lg flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-semibold text-forest">
                    Reviewed by {post.author}
                  </h4>
                  <p className="text-xs text-dark-muted">
                    {post.authorRole} · Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Related Treatments & Booking */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Related Treatments Card */}
                {relatedTreatmentsList.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white border border-beige/80 shadow-sm space-y-4">
                    <h3 className="font-editorial text-xl font-semibold text-forest">
                      Associated Therapies
                    </h3>
                    <div className="space-y-3">
                      {relatedTreatmentsList.map((t) => (
                        <div
                          key={t.slug}
                          className="p-3.5 rounded-lg bg-ivory border border-beige/60 hover:border-gold/50 transition-colors"
                        >
                          <Link
                            href={`/treatments/${t.slug}`}
                            className="font-editorial text-base font-semibold text-forest hover:text-leaf block"
                          >
                            {t.title}
                          </Link>
                          <p className="text-xs text-dark-muted mt-1 line-clamp-2">
                            {t.shortDescription}
                          </p>
                          <Link
                            href={`/treatments/${t.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-gold mt-2 hover:underline"
                          >
                            <span>View Procedure</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Consultation Card */}
                <div className="p-7 rounded-2xl bg-botanical text-ivory border border-gold/30 shadow-lg space-y-4">
                  <h3 className="font-editorial text-2xl font-medium text-ivory">
                    Have Questions on This Condition?
                  </h3>
                  <p className="text-xs text-beige/85 leading-relaxed font-light">
                    Schedule an in-person or online consultation with Dr. K.S.
                    Ajalkumar and our senior medical team.
                  </p>
                  <Link
                    href="/book-appointment"
                    className="w-full py-3 px-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
