import { BLOG_POSTS } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  useSEO({
    title: "Science Lab Equipment Blog | Bharat Science Model Centre",
    description:
      "Expert articles on school lab equipment, microscopes, CBSE lab requirements, and educational supplies for Indian schools and colleges.",
    canonical: "https://bharatedumart.com/blog",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "BSMC Science Lab Blog",
      url: "https://bharatedumart.com/blog",
      description:
        "Expert articles on school lab equipment, microscopes, CBSE lab requirements, and educational supplies for Indian schools and colleges.",
      publisher: {
        "@type": "Organization",
        name: "Bharat Science Model Centre",
        url: "https://bharatedumart.com",
      },
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-navy py-14 px-4" data-ocid="blog.page">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Knowledge Centre
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Science Lab Equipment Blog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert guidance on school lab equipment, CBSE requirements,
            microscopes, and educational supplies for Indian schools and
            colleges.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="bg-section-alt border-b border-card-border py-3 px-4"
        aria-label="Breadcrumb"
      >
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-text">
            <li>
              <Link
                to="/"
                className="hover:text-teal transition-colors"
                data-ocid="blog.link"
              >
                Home
              </Link>
            </li>
            <li className="text-muted-text">/</li>
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Blog Listing */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="blog.list"
          >
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-200 flex flex-col"
                data-ocid={`blog.item.${i + 1}`}
              >
                {/* Card Top Accent */}
                <div className="h-1.5 bg-gradient-to-r from-teal to-navy rounded-t-xl" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-text mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-text leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-hover transition-colors group"
                    data-ocid="blog.link"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Blog CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-navy rounded-2xl p-8 text-center"
          >
            <BookOpen className="w-10 h-10 text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Need Science Lab Equipment for Your School?
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              BSMC has been supplying CBSE-aligned lab equipment to 840+ schools
              across India since 1993. Get a customized quote today.
            </p>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              data-ocid="blog.primary_button"
            >
              Send an Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-8" />
    </div>
  );
}
