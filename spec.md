# Bharat Science Model Centre — SEO Optimization

## Current State
- index.html has an empty `<title>` tag and no meta description, Open Graph, or schema markup
- Images lack descriptive alt text with keywords
- H1/H2/H3 headings exist but lack targeted keyword-rich content for India/Gurgaon SEO
- No sitemap.xml or robots.txt in public/
- No JSON-LD structured data (LocalBusiness, Organization)
- No canonical URLs or Open Graph tags
- No Google Analytics or Search Console integration guidance
- Internal linking between pages is minimal
- Location-based SEO (Gurgaon, Haryana, India) is present in contact only, not in headings/meta

## Requested Changes (Diff)

### Add
- SEO-optimized `<title>`, `<meta name="description">`, Open Graph, Twitter Card, and canonical tags in index.html
- JSON-LD structured data blocks: LocalBusiness, Organization schemas in index.html
- `public/sitemap.xml` listing all pages with URLs and priorities
- `public/robots.txt` allowing all crawlers and pointing to sitemap
- Google Analytics / Google Search Console setup guidance as a visible banner or note in Admin page
- Keywords integrated naturally across: HomePage H1/H2/H3 headings, category descriptions, section sub-headings, About page, Distributor page, Enquiry page
- Location-based SEO text (Gurugram, Haryana, India) in hero H1, categories section subtitle, footer, and contact section
- Alt text with descriptive keywords on all `<img>` tags across all pages and components
- "breadcrumb" style keyword-rich page titles for subpages (useEffect to set document.title per route)

### Modify
- index.html: populate `<title>` and add all head meta tags
- HomePage: Update H1 to include keywords ("Lab Equipment & Educational Supplies | Gurugram, India"), update H2s with keyword-rich text, update section subtitles with location + category keywords, add descriptive alt text to all images
- All category `<img>` tags: add keyword-rich alt text
- AboutPage, DistributorPage, EnquiryPage, subpages: add `useEffect` to set `document.title` and `meta description` per page; add keyword-rich headings
- Footer: add brief keyword-rich tagline mentioning Gurugram, Haryana
- BrandsMarquee: add alt text to brand logos
- All subcategory pages (PrintedChartsPage, SafetyEquipmentPage, PortraitsPage, HandwrittenProjectsPage, HandwrittenPracticalFilesPage, IGNOUAssignmentsPage, SchoolLabPackagePage, EngineeringLabPage): add document.title, keyword-rich H1, and image alt text

### Remove
- Empty `<title></title>` in index.html (replaced with proper title)

## Implementation Plan
1. Update `src/frontend/index.html`: add meta title, description, keywords, Open Graph, Twitter Card, canonical, JSON-LD LocalBusiness + Organization schema, preconnect hints
2. Create `src/frontend/public/sitemap.xml` with all 14 routes
3. Create `src/frontend/public/robots.txt`
4. Update `src/frontend/src/pages/HomePage.tsx`: keyword-rich H1 (location + product focus), update H2 section headings, add alt text to all images, add location mentions in subtitle text, add internal navigation links in content
5. Create a `useSEO` hook (`src/frontend/src/hooks/useSEO.ts`) that sets document.title and meta description dynamically per page
6. Apply `useSEO` in all pages with page-specific titles/descriptions from the top-20 keyword list
7. Update `src/frontend/src/components/Footer.tsx`: add keyword-rich tagline, add structured NAP (Name, Address, Phone) markup
8. Update `src/frontend/src/components/BrandsMarquee.tsx`: add alt text to all brand logos
9. Update all subcategory pages with keyword-rich H1s and image alt text
10. Add a Google Analytics/Search Console setup note in AdminPage
