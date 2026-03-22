import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const PRACTICAL_FILES = [
  {
    name: "Physics Practical File",
    img: "/assets/generated/cat-physics-realistic.dim_400x300.jpg",
    desc: "Complete handwritten physics practical file with experiments, observations, calculations, and results as per CBSE curriculum.",
  },
  {
    name: "Chemistry Practical File",
    img: "/assets/generated/cat-chemistry-realistic.dim_400x300.jpg",
    desc: "Neat chemistry practical file covering qualitative analysis, titrations, and organic chemistry practicals.",
  },
  {
    name: "Biology Practical File",
    img: "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
    desc: "Detailed biology practical file with diagrams, microscopy observations, dissection records, and experiments.",
  },
  {
    name: "Computer Science Practical File",
    img: "/assets/generated/prac-computer-science.dim_400x300.jpg",
    desc: "Handwritten computer science practical file with programs, algorithms, flowcharts, and output screenshots.",
  },
  {
    name: "Informatics Practices Practical File",
    img: "/assets/generated/prac-informatics-practices.dim_400x300.jpg",
    desc: "Neatly compiled informatics practices practical file with Python programs, SQL queries, and outputs.",
  },
  {
    name: "Geography Practical File",
    img: "/assets/generated/cat-earth-science-realistic.dim_400x300.jpg",
    desc: "Geography practical file with maps, graphs, data interpretation, and fieldwork reports as per syllabus.",
  },
  {
    name: "Psychology Practical File",
    img: "/assets/generated/prac-psychology.dim_400x300.jpg",
    desc: "Psychology practical file with case studies, psychological tests, observations, and analysis records.",
  },
  {
    name: "Physical Education Practical File",
    img: "/assets/generated/prac-physical-education.dim_400x300.jpg",
    desc: "Physical education practical file covering fitness tests, yoga poses, game rules, and health records.",
  },
  {
    name: "Home Science Practical File",
    img: "/assets/generated/prac-home-science.dim_400x300.jpg",
    desc: "Home science practical file with food science experiments, textile tests, and family resource management records.",
  },
  {
    name: "Fine Arts Practical File",
    img: "/assets/generated/prac-fine-arts.dim_400x300.jpg",
    desc: "Fine arts practical file with art work, sketches, painting records, and art theory assignments.",
  },
];

export default function HandwrittenPracticalFilesPage() {
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
            Handwritten Practical Files
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Handwritten Practical Files Sub-Categories
          </h1>
          <p className="text-white/70 max-w-2xl">
            Choose your subject below and send an enquiry for complete
            handwritten practical files with neat diagrams and proper
            formatting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRACTICAL_FILES.map((file, i) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={file.img}
                  alt={file.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                  {file.name}
                </h3>
                <p className="text-xs text-muted-text leading-snug mb-3 line-clamp-2">
                  {file.desc}
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
