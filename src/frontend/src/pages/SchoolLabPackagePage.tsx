import { Link } from "@tanstack/react-router";
import { ArrowLeft, Package } from "lucide-react";
import { motion } from "motion/react";

const SUBCATEGORIES = [
  {
    name: "Chemistry Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-chemistry-realistic.dim_400x300.jpg",
    desc: "Complete CBSE-aligned chemistry lab setup with all glassware, chemicals, reagents, and equipment required for Classes 9–12.",
  },
  {
    name: "Physics Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-physics-realistic.dim_400x300.jpg",
    desc: "Full CBSE physics lab package covering mechanics, optics, electricity, and magnetism experiments for school labs.",
  },
  {
    name: "Biology Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-biology-realistic.dim_400x300.jpg",
    desc: "Comprehensive CBSE biology lab kit with microscopes, slides, specimens, models, and dissection tools for all classes.",
  },
  {
    name: "Mathematics Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-maths-realistic.dim_400x300.jpg",
    desc: "CBSE mathematics activity lab package with 3D shapes, geoboards, measuring tools, and activity-based learning materials.",
  },
  {
    name: "Composite Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-composite-realistic.dim_400x300.jpg",
    desc: "All-in-one composite lab package covering Physics, Chemistry, Biology, and Maths — ideal for junior and senior secondary schools.",
  },
  {
    name: "Geography Lab Package according to CBSE",
    img: "/assets/generated/school-pkg-geography-realistic.dim_400x300.jpg",
    desc: "CBSE geography lab set with globes, maps, surveying instruments, soil testing kits, and physical geography models.",
  },
];

export default function SchoolLabPackagePage() {
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
              <Package className="w-7 h-7 text-teal" />
            </div>
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
                Product Category
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Package for Schools Laboratories
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Let our expert lab consultants help you with customized lab
                packages as per your requirement and budget
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
              Choose a Lab Package
            </h2>
            <p className="text-muted-text text-sm max-w-xl mx-auto">
              Let our expert lab consultants help you with customized lab
              packages as per your requirement and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SUBCATEGORIES.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sub.img}
                    alt={sub.name}
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
