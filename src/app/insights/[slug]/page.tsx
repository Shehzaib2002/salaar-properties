import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Clock, User, ChevronRight, Share2, MessageCircle,
  Phone, ArrowLeft, ArrowRight, BookmarkCheck, CheckCircle2
} from "lucide-react";
import { ARTICLES_DATA, getArticleBySlug } from "@/lib/articles-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Market Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="flex flex-col min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[460px] w-full flex items-end">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 max-w-[1100px] pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/insights" className="hover:text-white transition-colors">Market Insights</Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium truncate">{article.category}</span>
          </nav>

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.25em] px-3.5 py-1 mb-4">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-white/80 font-light text-base md:text-lg max-w-3xl">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/20 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <User size={14} className="text-white" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-white" />
              <span>{article.readTime}</span>
            </div>
            <div>
              <span>Published on {article.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 max-w-[1100px] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Key Takeaways Card */}
            <div className="border border-border bg-surface p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-4">
                <BookmarkCheck size={18} className="text-brand" /> Executive Takeaways
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand/90 leading-relaxed font-light">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div className="space-y-10 prose prose-lg max-w-none text-brand/90">
              {article.contentSections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-light text-brand pt-4">
                    {sec.heading}
                  </h2>
                  {sec.body.map((para, pIdx) => (
                    <p key={pIdx} className="text-muted text-base md:text-lg leading-relaxed font-light">
                      {para}
                    </p>
                  ))}
                  {sec.quote && (
                    <blockquote className="my-8 border-l-2 border-brand pl-6 py-2 italic text-lg md:text-xl font-light text-brand bg-surface/50">
                      &ldquo;{sec.quote}&rdquo;
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {/* Author Footer Card */}
            <div className="border-t border-border pt-8 flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-border">
                <Image src={article.authorImage} alt={article.author} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-base font-medium text-brand">{article.author}</h4>
                <p className="text-xs uppercase tracking-wider text-muted mb-1">{article.authorRole}</p>
                <p className="text-xs text-muted font-light">
                  Providing institutional-grade market advisory and capital allocation strategies for prime Lahore real estate.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar CTA & Consultation (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Consultation Box */}
              <div className="border border-border bg-surface p-7 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                  Advisory Concierge
                </div>
                <h3 className="text-xl font-light text-brand mb-2">
                  Discuss This Market Brief
                </h3>
                <p className="text-muted text-xs font-light leading-relaxed mb-6">
                  Have questions about how these market trends impact your property portfolio in Lahore? Connect directly with our advisors.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/924211122333?text=${encodeURIComponent(
                      `Hi Salaar Properties, I just read your article "${article.title}" and would like to discuss investment options.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25d366] text-white py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#1ebe5d] transition-colors"
                  >
                    <MessageCircle size={15} /> WhatsApp Advisor
                  </a>
                  <a
                    href="tel:+924211122333"
                    className="flex items-center justify-center gap-2 border border-border py-3 text-xs font-semibold uppercase tracking-widest text-brand hover:border-brand transition-colors"
                  >
                    <Phone size={14} /> +92 42 111 223 333
                  </a>
                </div>
              </div>

              {/* Share Brief */}
              <div className="border border-border bg-surface p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-3 flex items-center gap-2">
                  <Share2 size={14} /> Share Market Insight
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${article.title} - Salaar Properties: https://salaarproperties.com/insights/${article.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-background border border-border text-xs font-medium text-brand hover:border-brand transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://salaarproperties.com/insights/${article.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-background border border-border text-xs font-medium text-brand hover:border-brand transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Back to all articles link */}
              <div>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand hover:text-brand/70 transition-colors"
                >
                  <ArrowLeft size={14} /> All Market Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Insights Grid */}
      <section className="bg-surface border-t border-border py-16">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Continue Reading</div>
              <h3 className="text-3xl font-light text-brand">Related Market Reports</h3>
            </div>
            <Link
              href="/insights"
              className="text-xs uppercase tracking-widest font-semibold text-brand border-b border-brand pb-1 hover:opacity-70 transition-opacity"
            >
              View All Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group border border-border bg-background hover:border-brand transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-brand text-[10px] uppercase font-semibold tracking-wider px-2 py-1">
                      {rel.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-light text-lg text-brand mb-2 line-clamp-2 group-hover:text-brand/80">
                      {rel.title}
                    </h4>
                    <p className="text-muted text-xs line-clamp-2 font-light">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 flex items-center justify-between text-xs text-brand font-medium">
                  <span>{rel.readTime}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
