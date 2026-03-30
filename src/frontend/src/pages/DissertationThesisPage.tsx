import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const SUBCATEGORIES = [
  {
    name: "MBA / BBA",
    img: "/assets/generated/cat-dissertation-mba-bba.dim_400x300.jpg",
    desc: "Professional dissertation and thesis writing for MBA and BBA students covering management, marketing, HR, and finance topics.",
  },
  {
    name: "LAW",
    img: "/assets/generated/cat-dissertation-law.dim_400x300.jpg",
    desc: "Legal research dissertations and thesis projects covering constitutional law, criminal law, corporate law, and more.",
  },
  {
    name: "PSYCHOLOGY",
    img: "/assets/generated/cat-dissertation-psychology.dim_400x300.jpg",
    desc: "Psychology research dissertations covering clinical, educational, and organizational psychology topics with proper referencing.",
  },
  {
    name: "ENGLISH HONOURS",
    img: "/assets/generated/cat-dissertation-english-honours.dim_400x300.jpg",
    desc: "English literature and language dissertations for Honours students — critical analysis, literary theory, and research projects.",
  },
  {
    name: "ENGINEERING",
    img: "/assets/generated/cat-dissertation-engineering.dim_400x300.jpg",
    desc: "Technical thesis projects for engineering students in CSE, ECE, Mechanical, Civil, and other engineering disciplines.",
  },
  {
    name: "B.SC / M.SC",
    img: "/assets/generated/cat-dissertation-bsc-msc.dim_400x300.jpg",
    desc: "Science research dissertations and thesis for B.Sc and M.Sc students in Physics, Chemistry, Biology, and Mathematics.",
  },
  {
    name: "B.COM / M.COM",
    img: "/assets/generated/cat-dissertation-bcom-mcom.dim_400x300.jpg",
    desc: "Commerce research projects and dissertations for B.Com and M.Com students in accounting, finance, and taxation.",
  },
];

export default function DissertationThesisPage() {
  useSEO({
    title:
      "Dissertation & Thesis Writing Assistance | MBA, Law, Engineering | BSMC India",
    description:
      "Professional dissertation and thesis writing assistance for MBA/BBA, Law, Psychology, English Honours, Engineering, B.Sc/M.Sc, and B.Com/M.Com students. BSMC Gurugram, India.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-section-alt">
      {/* Page Header */}
      <div className="bg-navy py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-teal" />
            </div>
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
                Product Category
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Dissertation / Thesis
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Professional academic writing assistance for all disciplines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Choose Your Programme
            </h2>
            <p className="text-muted-text text-sm">
              Select your academic programme and send us an enquiry for
              customised dissertation/thesis assistance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {SUBCATEGORIES.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
                data-ocid={`dissertation.item.${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sub.img}
                    alt={`${sub.name} dissertation thesis assistance India`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">
                    {sub.name}
                  </h3>
                  <p className="text-muted-text text-xs mb-3 line-clamp-3">
                    {sub.desc}
                  </p>
                  <Link
                    to="/enquiry"
                    className="inline-block w-full text-center text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
                    data-ocid={`dissertation.enquiry_button.${i + 1}`}
                  >
                    Send Enquiry
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
