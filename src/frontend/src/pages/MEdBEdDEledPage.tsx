import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const SUBCATEGORIES = [
  {
    name: "M.Ed",
    fullName: "Master of Education",
    img: "/assets/generated/cat-med-degree.dim_400x300.jpg",
    desc: "M.Ed study materials, assignments, projects, and thesis assistance for Master of Education students. Covers teaching methodology, curriculum design, and educational research.",
  },
  {
    name: "B.Ed",
    fullName: "Bachelor of Education",
    img: "/assets/generated/cat-bed-degree.dim_400x300.jpg",
    desc: "B.Ed study materials, lesson plans, practical files, and assignments for Bachelor of Education students. Ideal for teacher training and school teaching practice.",
  },
  {
    name: "D.El.Ed",
    fullName: "Diploma in Elementary Education",
    img: "/assets/generated/cat-deled-degree.dim_400x300.jpg",
    desc: "D.El.Ed study materials, assignments, and practicals for Diploma in Elementary Education students. Covers primary school teaching, child development, and classroom management.",
  },
];

export default function MEdBEdDEledPage() {
  useSEO({
    title: "M.Ed / B.Ed / D.El.Ed Study Materials & Assignments | BSMC India",
    description:
      "Study materials, assignments, practical files, and thesis assistance for M.Ed, B.Ed, and D.El.Ed students. Bharat Science Model Centre, Gurugram, India.",
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
              <GraduationCap className="w-7 h-7 text-teal" />
            </div>
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
                Product Category
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                M.Ed / B.Ed / D.El.Ed
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Study materials and academic assistance for education degree
                programmes
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
              Select your education programme and send us an enquiry for study
              materials, assignments, and academic assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SUBCATEGORIES.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
                data-ocid={`meded.item.${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sub.img}
                    alt={`${sub.name} ${sub.fullName} study materials India`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-base mb-0.5">
                    {sub.name}
                  </h3>
                  <p className="text-teal text-xs font-medium mb-2">
                    {sub.fullName}
                  </p>
                  <p className="text-muted-text text-xs mb-3 line-clamp-3">
                    {sub.desc}
                  </p>
                  <Link
                    to="/enquiry"
                    className="inline-block w-full text-center text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
                    data-ocid={`meded.enquiry_button.${i + 1}`}
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
