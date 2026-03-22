import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronRight,
  FileText,
  FlaskConical,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const IGNOU_CATEGORIES = [
  {
    id: "assignments",
    name: "IGNOU Assignments",
    icon: "📝",
    LucideIcon: FileText,
    color: "from-teal to-teal-hover",
    desc: "Handwritten IGNOU assignments for all programmes — BA, BCom, BSc, MA, MCom, MBA, BCA, MCA, BEd and more.",
    details: [
      "All Programmes Covered",
      "Hindi & English Medium",
      "Session-wise (July & Jan)",
      "All Course Codes",
    ],
  },
  {
    id: "synopsis",
    name: "IGNOU Synopsis",
    icon: "📋",
    LucideIcon: BookOpen,
    color: "from-navy to-navy-dark",
    desc: "Research proposal synopsis for IGNOU project work — properly structured as per IGNOU guidelines.",
    details: [
      "All Subjects",
      "Proper Format",
      "Plagiarism-free",
      "Quick Delivery",
    ],
  },
  {
    id: "project",
    name: "IGNOU Project",
    icon: "🎓",
    LucideIcon: GraduationCap,
    color: "from-teal to-teal-hover",
    desc: "Complete IGNOU project reports (MTTM, MEG, MHD, MSO, MPS, etc.) with proper chapters and bibliography.",
    details: [
      "All Programmes",
      "Proper Structure",
      "Bibliography Included",
      "Both Mediums",
    ],
  },
  {
    id: "practicals",
    name: "IGNOU Practicals",
    icon: "🔬",
    LucideIcon: FlaskConical,
    color: "from-navy to-navy-dark",
    desc: "Handwritten practical files for IGNOU science and computer programmes — BCA, BSc, MCA and more.",
    details: [
      "Science Programmes",
      "Computer Science",
      "Lab Records",
      "Observation Sheets",
    ],
  },
];

const ORDER_INFO = [
  { emoji: "📚", label: "Course Code", example: "e.g. BEGC-131" },
  { emoji: "🗓️", label: "Session", example: "July 2024 / Jan 2025" },
  { emoji: "🌐", label: "Medium", example: "Hindi / English" },
];

const PILL_TABS = [
  { label: "Assignments", id: "assignments", emoji: "📝" },
  { label: "Synopsis", id: "synopsis", emoji: "📋" },
  { label: "Project", id: "project", emoji: "🎓" },
  { label: "Practicals", id: "practicals", emoji: "🔬" },
];

export default function IGNOUAssignmentsPage() {
  return (
    <div className="min-h-screen bg-section-alt">
      {/* Page Header */}
      <section className="bg-navy relative overflow-hidden py-12 md:py-16">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(28,142,138,0.25) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal-hover to-teal" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-teal text-xs font-medium mb-5 transition-colors"
              data-ocid="ignou.back_link"
            >
              ← Back to Categories
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎓</span>
              <div>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">
                  IGNOU Services
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  IGNOU Assignments / Synopsis / Project / Practicals
                </h1>
              </div>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
              Complete handwritten IGNOU academic services — all subjects, all
              mediums, all sessions. Professional quality with timely delivery.
            </p>
          </motion.div>

          {/* Quick navigation pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
          >
            {PILL_TABS.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white/10 hover:bg-teal text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/15 hover:border-teal transition-all duration-200"
                data-ocid={`ignou.${tab.id}.tab`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Order Info Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-0 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="bg-white rounded-2xl border border-card-border shadow-card p-5 md:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-teal" />
            </div>
            <h2 className="font-bold text-foreground text-sm md:text-base">
              What to Share When Ordering
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {ORDER_INFO.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-2 bg-teal/8 border border-teal/20 rounded-xl px-4 py-2.5"
              >
                <span className="text-xl">{info.emoji}</span>
                <div>
                  <p className="text-xs font-bold text-teal">{info.label}</p>
                  <p className="text-xs text-muted-text">{info.example}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {IGNOU_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
              data-ocid={`ignou.${cat.id}.card`}
            >
              {/* Card Top Accent */}
              <div className={`h-2 bg-gradient-to-r ${cat.color}`} />

              <div className="p-5 md:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                    style={{ background: "rgba(28,142,138,0.10)" }}
                  >
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base leading-tight mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted-text leading-snug">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                {/* Details pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs font-medium bg-section-alt text-foreground/80 border border-border px-2.5 py-1 rounded-full"
                    >
                      ✓ {detail}
                    </span>
                  ))}
                </div>

                <Link
                  to="/enquiry"
                  className="w-full"
                  data-ocid={`ignou.${cat.id}.enquiry_button`}
                >
                  <Button className="w-full bg-teal hover:bg-teal-hover text-white font-semibold rounded-xl text-sm">
                    Send Enquiry
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-navy rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
        >
          <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 text-3xl">
            💬
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-base md:text-lg mb-1">
              Need help choosing? Contact us on WhatsApp
            </h3>
            <p className="text-white/60 text-sm">
              Share your Course Code, Session and Medium — we&apos;ll guide you
              to the right service.
            </p>
          </div>
          <a
            href="https://wa.me/919999899973"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="ignou.whatsapp_button"
          >
            <Button className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl px-6 py-3 flex items-center gap-2 whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white flex-shrink-0"
                role="img"
                aria-label="WhatsApp"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
