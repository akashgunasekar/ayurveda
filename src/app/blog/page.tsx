import React from "react";
import Link from "next/link";
import { Sparkles, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleCard from "@/components/ui/ArticleCard";
import { blogPostsData } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Ayurveda & Panchakarma Clinical Blog | Ayurkshetra Chennai",
  description:
    "Educational articles written by Ayurvedic physicians on Uro Basti, Navarakizhi, Podikizhi, Prakriti analysis, and holistic health science at Ayurkshetra Hospital.",
  path: "/blog",
});

export default function BlogPage() {
  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];
  const regularPosts = blogPostsData.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-botanical text-ivory pt-12 pb-16 border-b border-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ name: "Blog & Insights", url: "/blog" }]}
            className="text-beige/70 mb-4"
          />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-gold-light text-xs font-semibold tracking-widest uppercase border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>PHYSICIAN-WRITTEN CLINICAL ARTICLES & WISDOM</span>
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-ivory tracking-tight leading-[1.1]">
              Ayurvedic Science &{" "}
              <span className="italic text-gold font-normal">
                Panchakarma Insights
              </span>
            </h1>
            <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-light">
              Deepen your understanding of traditional therapies, doshic
              balance, and practical daily routines to sustain vibrant health.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Blog Feed */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Featured Article */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              <BookOpen className="w-4 h-4" />
              <span>Featured Editorial</span>
            </div>
            <ArticleCard post={featuredPost} featured={true} />
          </div>

          {/* Regular Articles Grid */}
          <div className="space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-forest border-b border-beige/80 pb-3">
              All Educational Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
