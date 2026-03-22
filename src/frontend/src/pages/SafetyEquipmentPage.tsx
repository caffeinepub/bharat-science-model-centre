import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const SUBCATEGORIES = [
  {
    name: "Gloves",
    img: "/assets/generated/safety-gloves-realistic.dim_400x300.jpg",
    desc: "Disposable nitrile, latex, and chemical-resistant gloves for full hand protection in lab environments.",
  },
  {
    name: "Face Masks",
    img: "/assets/generated/safety-face-masks-realistic.dim_400x300.jpg",
    desc: "Surgical masks, N95 respirators, and dust masks for respiratory protection in laboratories and classrooms.",
  },
  {
    name: "Safety Goggles",
    img: "/assets/generated/safety-goggles-realistic.dim_400x300.jpg",
    desc: "Clear protective goggles and safety glasses for eye protection against chemicals, splashes, and debris.",
  },
  {
    name: "Hand Sanitisers",
    img: "/assets/generated/safety-hand-sanitiser-realistic.dim_400x300.jpg",
    desc: "Alcohol-based hand sanitiser dispensers and refill bottles for hygiene maintenance in labs and schools.",
  },
  {
    name: "Lab Coat",
    img: "/assets/generated/safety-lab-coat-realistic.dim_400x300.jpg",
    desc: "White lab coats in various sizes for students and staff — durable, easy-to-clean, and professionally designed.",
  },
];

export default function SafetyEquipmentPage() {
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
              <ShieldCheck className="w-7 h-7 text-teal" />
            </div>
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
                Product Category
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Safety Equipment
              </h1>
              <p className="text-white/60 text-sm mt-1">
                Essential personal protective equipment for labs and classrooms
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
              Choose a Sub-Category
            </h2>
            <p className="text-muted-text text-sm">
              Select the type of safety equipment you need and send us an
              enquiry.
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
