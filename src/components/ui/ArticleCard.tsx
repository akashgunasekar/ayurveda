import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, UserCheck } from "lucide-react";
import { BlogPost } from "@/lib/types";

function formatDateString(dateStr: string): string {
  const parts = dateStr.split("-");
  if (parts.length < 3) return dateStr;
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const mIdx = parseInt(parts[1], 10) - 1;
  const month = monthNames[mIdx] || parts[1];
  const day = parseInt(parts[2], 10);
  return `${month} ${day}, ${parts[0]}`;
}

interface ArticleCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function ArticleCard({
  post,
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-xl border border-beige/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-400">
        <div className="relative aspect-16/10 lg:aspect-auto lg:col-span-7 overflow-hidden bg-forest/5 min-h-[280px]">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-forest text-gold-light border border-gold/40">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-dark-muted mb-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {formatDateString(post.publishedAt)}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {post.readTime}
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-forest group-hover:text-leaf transition-colors duration-200 leading-tight">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="mt-3 text-sm text-dark-muted leading-relaxed line-clamp-3">
              {post.summary}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-beige/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest font-serif font-bold text-xs">
                <UserCheck className="w-4 h-4 text-forest" />
              </div>
              <div>
                <p className="text-xs font-semibold text-dark leading-tight">
                  {post.author}
                </p>
                <p className="text-[11px] text-dark-muted leading-tight">
                  {post.authorRole}
                </p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest group-hover:text-gold transition-colors duration-200"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-white rounded-lg border border-beige/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-400">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-forest/5">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium tracking-wider uppercase rounded-full bg-forest/90 text-gold-light border border-gold/30">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-dark-muted mb-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gold" />
              {formatDateString(post.publishedAt)}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-editorial text-xl font-medium text-forest group-hover:text-leaf transition-colors duration-200 leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-dark-muted leading-relaxed line-clamp-2">
            {post.summary}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-beige/60 flex items-center justify-between text-xs">
          <span className="text-dark-muted font-medium truncate max-w-[130px]">
            By {post.author}
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-forest group-hover:text-gold transition-colors duration-200"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
