import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";

const DRIVE_SUBCATEGORIES_URL =
  "https://drive.google.com/drive/folders/1ybDzOinS-ti18r58IRgXDX7BlRDf0Ylv?usp=drive_link";

const SUBCATEGORIES = [
  {
    name: "Physics Printed Charts",
    img: "/assets/generated/charts-physics-realistic.dim_400x300.jpg",
    desc: "Newton's laws, electromagnetic spectrum, mechanics, optics, and thermodynamics charts for physics labs.",
  },
  {
    name: "Chemistry Printed Charts",
    img: "/assets/generated/charts-chemistry-realistic.dim_400x300.jpg",
    desc: "Periodic table, chemical bonding, molecular structures, and reaction charts for chemistry classrooms.",
  },
  {
    name: "General Science Printed Charts",
    img: "/assets/generated/charts-biology-realistic.dim_400x300.jpg",
    desc: "Comprehensive general science charts covering scientific method, mixed subject overviews, and key concepts.",
  },
  {
    name: "Biology Printed Charts",
    img: "/assets/generated/charts-biology-realistic.dim_400x300.jpg",
    desc: "Human body systems, cell structure, plant anatomy, and life cycle charts for biology classrooms.",
  },
  {
    name: "Mathematics Printed Charts",
    img: "/assets/generated/cat-mathematics-realistic.dim_400x300.jpg",
    desc: "Geometry shapes, algebra formulas, multiplication tables, and number system charts for maths labs.",
  },
  {
    name: "Social Studies Printed Charts",
    img: "/assets/generated/charts-maps-realistic.dim_400x300.jpg",
    desc: "World history timelines, civics diagrams, government structure, and geography charts for social studies.",
  },
  {
    name: "Maps",
    img: "/assets/generated/charts-maps-realistic.dim_400x300.jpg",
    desc: "India political & physical maps, world maps, continent maps — laminated and durable for classroom walls.",
  },
  {
    name: "English Printed Charts",
    img: "/assets/generated/charts-english-realistic.dim_400x300.jpg",
    desc: "Grammar rules, parts of speech, tenses, vocabulary, and sentence structure charts for English classrooms.",
  },
  {
    name: "Hindi Printed Charts",
    img: "/assets/generated/charts-hindi-realistic.dim_400x300.jpg",
    desc: "Hindi varnamala, grammar, Devanagari script, and vocabulary charts for Hindi language classrooms.",
  },
  {
    name: "Sanskrit Printed Charts",
    img: "/assets/generated/charts-sanskrit-realistic.dim_400x300.jpg",
    desc: "Sanskrit alphabet, grammar rules, shlokas, and script charts for Sanskrit language classrooms.",
  },
  {
    name: "Primary Printed Charts",
    img: "/assets/generated/charts-primary-realistic.dim_400x300.jpg",
    desc: "Colorful alphabet, numbers, animals, shapes, and basic concept charts designed for primary school students.",
  },
];

export default function PrintedChartsPage() {
  useSEO({
    title: "Printed Educational Charts for Schools | BSMC",
    description:
      "High-quality printed charts for Physics, Chemistry, Biology, Mathematics, and all school subjects. Wholesale pricing for schools across India.",
    canonical: "https://bharatsciencemodel.in/printed-charts",
  });
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center">
                <FileText className="w-7 h-7 text-teal" />
              </div>
              <div>
                <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
                  Product Category
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Printed Educational Charts — Science, Language &amp; Subject
                  Charts for Schools
                </h1>
                <p className="text-white/60 text-sm mt-1">
                  High-quality laminated educational charts for all subjects
                </p>
              </div>
            </div>
            <a
              href={DRIVE_SUBCATEGORIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors self-start sm:self-auto"
            >
              <ExternalLink className="w-4 h-4" />
              View Sub-Categories
            </a>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Choose a Sub-Category
            </h2>
            <p className="text-muted-text text-sm">
              Select the type of printed charts you need and send us an enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {SUBCATEGORIES.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sub.img}
                    alt={`${sub.name} educational chart supplier India`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-muted-text leading-snug mb-3 line-clamp-2">
                    {sub.desc}
                  </p>
                  <Link
                    to="/enquiry"
                    className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
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
