import { BLOG_POSTS } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSEO(
    post
      ? {
          title: post.title,
          description: post.excerpt,
          canonical: `https://bharatedumart.com/blog/${post.slug}`,
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "BSMC Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Bharat Science Model Centre",
              url: "https://bharatedumart.com",
              logo: {
                "@type": "ImageObject",
                url: "https://bharatedumart.com/assets/generated/bsmc-logo-transparent.dim_400x400.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://bharatedumart.com/blog/${slug}`,
            },
            keywords: post.keywords.join(", "),
          },
        }
      : {
          title: "Article Not Found | BSMC Blog",
          description: "This article could not be found.",
        },
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="text-teal hover:text-teal-hover font-medium"
            data-ocid="blog_post.link"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="blog_post.page">
      {/* Header */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                  data-ocid="blog_post.link"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition-colors"
                  data-ocid="blog_post.link"
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/80 truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
            <span className="text-teal font-medium">BSMC Team</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt / Lead */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-muted-text leading-relaxed border-l-4 border-teal pl-5 mb-10 font-medium"
          >
            {post.excerpt}
          </motion.p>

          {/* Rendered Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ArticleContent content={post.content} />
          </motion.div>

          {/* CTA Box */}
          <div className="mt-12 bg-section-alt border border-card-border rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Equip Your School Lab?
            </h3>
            <p className="text-muted-text mb-6">
              Contact BSMC today for a customized quote on school lab equipment,
              CBSE packages, and educational supplies with pan-India delivery.
            </p>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              data-ocid="blog_post.primary_button"
            >
              Send an Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-text hover:text-teal transition-colors"
              data-ocid="blog_post.link"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

function inlineMarkdown(text: string): string {
  let result = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(
    /(?<!\*)\*(?!\*)([^*]+)(?<!\*)\*(?!\*)/g,
    "<em>$1</em>",
  );
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-teal hover:text-teal-hover underline">$1</a>',
  );
  return result;
}

function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
          {line.slice(4)}
        </h3>,
      );
    } else if (line === "---") {
      elements.push(<hr key={i} className="my-8 border-card-border" />);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="list-disc list-outside pl-6 mb-6 space-y-2"
        >
          {items.map((item) => (
            <li
              key={item}
              className="text-muted-text leading-relaxed"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: safe static markdown
              dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }}
            />
          ))}
        </ul>,
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${i}`}
          className="list-decimal list-outside pl-6 mb-6 space-y-2"
        >
          {items.map((item) => (
            <li
              key={item}
              className="text-muted-text leading-relaxed"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: safe static markdown
              dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }}
            />
          ))}
        </ol>,
      );
      continue;
    } else {
      elements.push(
        <p
          key={i}
          className="text-muted-text leading-relaxed mb-5"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: safe static markdown
          dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }}
        />,
      );
    }

    i++;
  }

  return <div>{elements}</div>;
}
