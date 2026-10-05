"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { ARTICLES_DATA } from "@/lib/articles-data";

const CATEGORIES = ["All", "Market Report", "Developer News", "Investment Guide", "Location Spotlight"];

export function InsightsList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    if (activeCategory === "All") return true;
    return article.category === activeCategory;
  });

  const featured = activeCategory === "All" 
    ? ARTICLES_DATA.find((a) => a.featured)
    : filteredArticles[0];

  const gridArticles = activeCategory === "All"
    ? filteredArticles.filter((a) => !a.featured)
    : filteredArticles.slice(1);

  return (
    <div>
      {/* Category filter */}
      <section className="border-b border-border bg-surface sticky top-20 z-20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 text-xs font-semibold uppercase tracking-widest pb-2 transition-all ${
                  cat === activeCategory
                    ? "text-brand border-b-2 border-brand"
                    : "text-muted hover:text-brand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="section-spacing border-b border-border">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-muted/40" /> Featured Story
            </div>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden hover:border-brand transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand text-white px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-surface">
                <h2 className="text-3xl md:text-4xl font-light text-brand mb-6 leading-tight group-hover:opacity-70 transition-opacity">
                  {featured.title}
                </h2>
                <p className="text-muted font-light leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-muted border-t border-border pt-6">
                  <span className="flex items-center gap-1.5">
                    <User size={12} /> {featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {gridArticles.length === 0 && !featured ? (
            <div className="text-center py-16 border border-dashed border-border bg-surface">
              <p className="text-brand font-light text-lg">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block border border-border bg-surface hover:border-brand transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-brand mb-3 leading-snug group-hover:opacity-70 transition-opacity line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted border-t border-border pt-4">
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-brand font-semibold group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
