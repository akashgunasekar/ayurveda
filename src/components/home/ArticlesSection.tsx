import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import { blogPostsData } from "@/lib/content";

export default function ArticlesSection() {
  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];
  const supportingPosts = blogPostsData
    .filter((p) => p.slug !== featuredPost.slug)
    .slice(0, 2);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            eyebrow="EDUCATIONAL & CLINICAL INSIGHTS"
            title="Ayurvedic Wisdom &"
            highlight="Panchakarma Science"
            description="Medically sound perspectives written by our physicians on chronic health management, authentic Panchakarma therapies, and preventive routines."
            className="mb-0!"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Featured Editorial Post */}
        <div className="mb-10">
          <ArticleCard post={featuredPost} featured={true} />
        </div>

        {/* Supporting Editorial Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
