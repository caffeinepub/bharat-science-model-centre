import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";

const SUBJECTS = [
  {
    key: "physics",
    name: "Physics",
    emoji: "⚛️",
    desc: "Mechanics, optics, electricity & thermodynamics projects",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    key: "chemistry",
    name: "Chemistry",
    emoji: "🧪",
    desc: "Organic, inorganic & physical chemistry investigation projects",
    color: "bg-green-50 border-green-200 hover:border-green-400",
  },
  {
    key: "biology",
    name: "Biology",
    emoji: "🧬",
    desc: "Ecology, genetics, physiology & botany research projects",
    color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  },
  {
    key: "economics",
    name: "Economics",
    emoji: "📊",
    desc: "Microeconomics, macroeconomics & Indian economy projects",
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
  },
  {
    key: "accountancy",
    name: "Accountancy",
    emoji: "📒",
    desc: "Financial accounting, partnership & cash flow projects",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
  },
  {
    key: "business-studies",
    name: "Business Studies",
    emoji: "💼",
    desc: "Business management, marketing & entrepreneurship projects",
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
  },
  {
    key: "physical-education",
    name: "Physical Education",
    emoji: "🏃",
    desc: "Sports science, fitness & yoga research projects",
    color: "bg-red-50 border-red-200 hover:border-red-400",
  },
  {
    key: "political-science",
    name: "Political Science",
    emoji: "🏛️",
    desc: "Indian constitution, democracy & international relations projects",
    color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
  },
  {
    key: "sociology",
    name: "Sociology",
    emoji: "👥",
    desc: "Social institutions, culture & social change projects",
    color: "bg-pink-50 border-pink-200 hover:border-pink-400",
  },
  {
    key: "psychology",
    name: "Psychology",
    emoji: "🧠",
    desc: "Cognitive behavior, personality & mental health projects",
    color: "bg-violet-50 border-violet-200 hover:border-violet-400",
  },
  {
    key: "history",
    name: "History",
    emoji: "📜",
    desc: "Ancient, medieval & modern India history research projects",
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
];

export default function DownloadProjectsPage() {
  const navigate = useNavigate();

  useSEO({
    title:
      "Download Project PDFs – ₹49 | CBSE/ICSE Handwritten Projects | Bharat EduMart",
    description:
      "Download ready-made handwritten CBSE/ICSE project PDFs for ₹49. Choose from Physics, Chemistry, Biology, Economics, Accountancy, Business Studies, and more.",
    canonical: "https://bharatedumart.com/download-projects",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <span>📥</span>
              <span>Instant PDF Download</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              Download Project PDFs
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Handwritten project PDFs for CBSE/ICSE students. Pay{" "}
              <span className="font-bold text-teal">₹49</span> and download
              instantly. Choose your subject below.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-white/70">
              <span className="flex items-center gap-1">
                ✅ Instant download
              </span>
              <span className="flex items-center gap-1">
                ✅ CBSE/ICSE format
              </span>
              <span className="flex items-center gap-1">
                ✅ Handwritten style
              </span>
              <span className="flex items-center gap-1">
                ✅ Ready to submit
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subject Grid */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-foreground mb-6 text-center">
          Select Your Subject
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          data-ocid="download_projects.list"
        >
          {SUBJECTS.map((subject, i) => (
            <motion.button
              key={subject.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() =>
                navigate({
                  to: "/download-projects/$subject",
                  params: { subject: subject.key },
                })
              }
              className={`flex flex-col items-center text-center p-4 rounded-xl border-2 transition-all cursor-pointer ${subject.color}`}
              data-ocid={`download_projects.item.${i + 1}`}
            >
              <span className="text-3xl mb-2">{subject.emoji}</span>
              <span className="font-bold text-sm text-foreground mb-1">
                {subject.name}
              </span>
              <span className="text-xs text-muted-foreground leading-tight hidden sm:block">
                {subject.desc}
              </span>
              <span className="mt-2 text-xs font-semibold text-teal">
                ₹49 / project
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-muted/50 border-t border-border py-6 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us on{" "}
            <a
              href="https://wa.me/919999899973"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-semibold hover:underline"
            >
              WhatsApp: 9999899973
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
