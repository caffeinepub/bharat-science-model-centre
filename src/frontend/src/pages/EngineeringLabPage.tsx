import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const SUBCATEGORIES = [
  {
    name: "Electrical Engineering Equipment",
    img: "/assets/generated/cat-electrical-eng-realistic.dim_400x300.jpg",
    desc: "Electrical panels, transformers, multimeters, oscilloscopes, and circuit testing equipment for engineering labs",
  },
  {
    name: "Civil & Surveying Instruments",
    img: "/assets/generated/cat-civil-surveying-realistic.dim_400x300.jpg",
    desc: "Theodolites, total stations, leveling staffs, survey tripods, and civil engineering instruments",
  },
  {
    name: "Mechanical Engineering Instruments",
    img: "/assets/generated/cat-mechanical-eng-realistic.dim_400x300.jpg",
    desc: "Vernier calipers, micrometers, torque tools, gear models, and precision mechanical testing instruments",
  },
];

export default function EngineeringLabPage() {
  useSEO({
    title:
      "Engineering Lab Equipment | Electrical, Civil & Mechanical Instruments | BSMC India",
    description:
      "Engineering lab instruments for colleges — Electrical Engineering Equipment, Civil & Surveying Instruments, Mechanical Engineering tools. Supplier in India — BSMC Gurugram.",
  });
  return (
    <div className="min-h-screen bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-teal hover:underline text-sm font-medium mb-8"
          data-ocid="engineering_lab.back_link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Categories
        </Link>

        <div className="text-center mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Engineering Lab Equipments
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Engineering Sub-Categories
          </h1>
          <p className="text-muted-text max-w-xl mx-auto text-sm">
            Specialized instruments and equipment for Electrical, Civil &
            Surveying, and Mechanical Engineering departments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SUBCATEGORIES.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
              data-ocid={`engineering_lab.item.${i + 1}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sub.img}
                  alt={`${sub.name} engineering lab equipment for colleges India`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                  {sub.name}
                </h3>
                <p className="text-xs text-muted-text leading-snug mb-3">
                  {sub.desc}
                </p>
                <Link
                  to="/enquiry"
                  data-ocid={`engineering_lab.enquiry_button.${i + 1}`}
                >
                  <Button
                    size="sm"
                    className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full text-xs"
                  >
                    Send Enquiry
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
