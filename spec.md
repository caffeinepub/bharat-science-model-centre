# Bharat Science Model Centre — SEO Deep Optimization (Version 44)

## Current State
- Site has foundational SEO: meta tags, OG/Twitter, LocalBusiness+Organization schema in index.html, robots.txt, sitemap.xml, useSEO hook with canonical + per-page schema, 3 blog posts, location SEO, internal links.
- sitemap.xml dates are stuck at 2024-03-05 (stale)
- Blog has 3 posts but NOT the 3 specifically requested: 'CBSE Lab Equipment List Class 12', 'Best Microscope for School Students', 'Complete Physics Lab Setup Guide'
- Homepage has NO dedicated 800-1000 word SEO content section (H1/H2/H3 structured)
- No Google Search Console verification meta tag
- No product-level schema for key categories
- 'Bharat EduMart' initiative is not mentioned anywhere on the site
- FAQ schema on homepage exists but can be improved

## Requested Changes (Diff)

### Add
- Google Search Console verification meta tag placeholder in index.html (with comment instructions)
- 3 new blog posts with full 600-800 word content:
  1. 'CBSE Lab Equipment List for Class 12 Science Students' (slug: cbse-lab-equipment-list-class-12)
  2. 'Best Microscope for School Students in India 2024' (slug: best-microscope-for-school-students)
  3. 'Complete Physics Lab Setup Guide for Schools' (slug: complete-physics-lab-setup-guide)
- Homepage: 800-1000 word SEO content section with proper H1, H2, H3 headings, keywords naturally embedded, internal links to product pages, blog, and enquiry
- ProductCollection schema in index.html for key lab equipment categories
- Bharat EduMart mention in homepage and footer (online sales platform)
- Sitemap: add 3 new blog URLs, update all dates to 2026-03-26

### Modify
- Existing 3 blog posts: add 'CBSE Lab Equipment List Class 12' / 'Best Microscope for School Students' / 'Complete Physics Lab Setup Guide' TITLES to improve exact-match keyword targeting
- index.html: add Google Search Console meta placeholder, add BreadcrumbList schema for category pages
- robots.txt: add Crawl-delay hint and sitemap reference (already exists, verify)

### Remove
- Nothing

## Implementation Plan
1. Update blogPosts.ts: add 3 new full-content blog posts with keyword-rich content, proper structure, CTA links to /enquiry and category pages
2. Update HomePage.tsx: add SEO Content Section (after contact, before footer) — 800-1000 words with H1/H2/H3, Bharat EduMart mention, keyword-dense content, internal links
3. Update index.html: add Google Search Console placeholder meta, ProductCollection schema
4. Update public/sitemap.xml: add new blog URLs, update all lastmod to 2026-03-26
5. Validate and build
