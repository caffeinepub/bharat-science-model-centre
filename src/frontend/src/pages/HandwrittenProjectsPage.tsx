import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const PROJECTS = [
  {
    name: "Accountancy Project",
    img: "/assets/generated/proj-accountancy.dim_400x300.jpg",
    desc: "Neatly handwritten accountancy project files with journal entries, ledgers, trial balance, and financial statements.",
  },
  {
    name: "Business Studies Project",
    img: "/assets/generated/proj-business-studies.dim_400x300.jpg",
    desc: "Professional handwritten business studies projects covering business environment, finance, marketing, and management.",
  },
  {
    name: "Economics Project",
    img: "/assets/generated/proj-economics.dim_400x300.jpg",
    desc: "Well-structured economics projects with data analysis, graphs, and theoretical concepts as per CBSE guidelines.",
  },
  {
    name: "Entrepreneurship Project",
    img: "/assets/generated/proj-entrepreneurship.dim_400x300.jpg",
    desc: "Detailed entrepreneurship project files including business plans, market research, and startup analysis.",
  },
  {
    name: "Political Science Project",
    img: "/assets/generated/proj-political-science.dim_400x300.jpg",
    desc: "Comprehensive political science projects covering government systems, democracy, and contemporary issues.",
  },
  {
    name: "History Project",
    img: "/assets/generated/proj-history.dim_400x300.jpg",
    desc: "Illustrated history projects with timelines, maps, and detailed historical analysis and presentations.",
  },
  {
    name: "Psychology Project",
    img: "/assets/generated/proj-psychology.dim_400x300.jpg",
    desc: "Handwritten psychology projects covering human behavior, case studies, and psychological theories.",
  },
  {
    name: "Sociology Project",
    img: "/assets/generated/proj-sociology.dim_400x300.jpg",
    desc: "Neat sociology project files on social issues, institutions, and Indian society as per curriculum.",
  },
  {
    name: "English Project",
    img: "/assets/generated/proj-english.dim_400x300.jpg",
    desc: "Creative and literature-based English projects with proper formatting, analysis, and presentation.",
  },
  {
    name: "Hindi Project",
    img: "/assets/generated/proj-hindi.dim_400x300.jpg",
    desc: "Handwritten Hindi projects covering Hindi literature, grammar, and language topics in neat format.",
  },
  {
    name: "Physical Education Project",
    img: "/assets/generated/proj-physical-education.dim_400x300.jpg",
    desc: "Physical education project files covering fitness, sports, health, yoga, and related topics.",
  },
  {
    name: "Home Science Project",
    img: "/assets/generated/proj-home-science.dim_400x300.jpg",
    desc: "Home science projects on nutrition, food science, textiles, and family resource management.",
  },
  {
    name: "Fine Arts Project",
    img: "/assets/generated/proj-fine-arts.dim_400x300.jpg",
    desc: "Beautifully presented fine arts projects covering art history, techniques, and creative assignments.",
  },
];

export default function HandwrittenProjectsPage() {
  return (
    <div className="min-h-screen bg-section-alt">
      <div className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Handwritten Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Handwritten Projects Sub-Categories
          </h1>
          <p className="text-white/70 max-w-2xl">
            Choose your subject below and send an enquiry for neatly handwritten
            project files with proper diagrams and formatting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-text leading-snug mb-3 line-clamp-2">
                  {project.desc}
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
    </div>
  );
}
