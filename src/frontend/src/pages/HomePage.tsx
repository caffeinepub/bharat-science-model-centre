import BrandsMarquee from "@/components/BrandsMarquee";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Atom,
  Award,
  BadgeCheck,
  BookOpen,
  Clock,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Navigation,
  Package,
  Phone,
  Rocket,
  Star,
  Tag,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

const CATALOGUE_URL =
  "https://drive.google.com/drive/folders/1oOjwm1w3VdTmJSINb_k6HAhO0H4dw5F_?usp=drive_link";

const MAPS_URL =
  "https://google.com/maps/dir//BHARAT+SCIENCE+MODEL+CENTRE,+Near+Harish+Bakery+,Old,+Shivpuri+Road,+Old+Railway+Rd,+Shivpuri,+Sector+7,+Gurugram,+Haryana+122001,+India/@28.4784191,77.0219015,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d19d3c7264cdb:0xf027b68e794f04b8!2m2!1d77.017996!2d28.47104?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

const BRAND_CATALOGUES = [
  {
    name: "Avantor",
    logo: "/assets/generated/avantor-logo-transparent.dim_300x150.png",
    url: "https://drive.google.com/file/d/1brLGFoG2LuAsT132zskD8S-Cw8VHaRi4/view?usp=sharing",
  },
  {
    name: "Borosil",
    logo: "/assets/generated/borosil-logo-transparent.dim_300x150.png",
    url: "https://drive.google.com/file/d/1875HGyE05FPDefLCkWO4IfTfd5T0kXAD/view?usp=sharing",
  },
  {
    name: "CDH",
    logo: "/assets/uploads/cdh-organic-compound-31-08-2021-2340-240406232-7m0k9-4.jpg",
    url: "https://drive.google.com/file/d/1esxEHlFe0UPy1VdUsFtqUcAICsJG8GUy/view?usp=sharing",
  },
  {
    name: "HiMedia",
    logo: "/assets/uploads/images-1--5.png",
    url: "https://drive.google.com/file/d/1fgNICmP--WhbMSSpbW6tRKaItj00_fT9/view?usp=sharing",
  },
  {
    name: "Qualigens",
    logo: "/assets/uploads/QUALIGENS-11.jpg",
    url: "https://drive.google.com/file/d/1i6jc8rCXfVyJQWCeqBNBgrCZKftAlbt7/view?usp=sharing",
  },
  {
    name: "REMI",
    logo: "/assets/uploads/REMI-13.jpeg",
    url: "https://drive.google.com/file/d/1fcLDqgQSp7kBvqsHJUrt-D8wLGLR4GqZ/view?usp=sharing",
  },
];

type Category = {
  name: string;
  img: string;
  desc: string;
  viewListUrl?: string;
  viewCatalogueUrl?: string;
  pictorialCatalogueUrl?: string;
  viewAllChartsUrl?: string;
  safetySubcategoriesUrl?: string;
  portraitsSubcategoriesUrl?: string;
  engineeringSubcategoriesUrl?: string;
  handwrittenProjectsUrl?: string;
  handwrittenPracticalFilesUrl?: string;
  ignoUrl?: string;
};

const CATEGORIES: Category[] = [
  {
    name: "Biology Lab Equipment",
    img: "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
    desc: "Detailed cell models, DNA structures, and biological specimens for life science education",
    viewListUrl:
      "https://drive.google.com/file/d/12PJUT_QXhlWuju324eIbH2dGymUPIVbo/view?usp=sharing",
  },
  {
    name: "Chemistry Lab Equipment",
    img: "/assets/generated/cat-chemistry-realistic.dim_400x300.jpg",
    desc: "Complete range of chemistry apparatus, reagents, and lab consumables",
    viewListUrl:
      "https://drive.google.com/file/d/1cAl3VqH-_zuhwZPQM2z2_WebNyMBDmwR/view?usp=sharing",
  },
  {
    name: "Physics Lab Equipment",
    img: "/assets/generated/cat-physics-realistic.dim_400x300.jpg",
    desc: "Mechanics, electricity, optics and thermodynamics experimental setups",
    viewListUrl:
      "https://drive.google.com/file/d/1EK8fJBUyTjujeuRsQf9ZQaCHS-CoglRn/view?usp=sharing",
  },
  {
    name: "Microscope, Telescope & Binoculars",
    img: "/assets/generated/microscope-telescope-binoculars.dim_600x400.jpg",
    desc: "Compound microscopes, telescopes, and binoculars for scientific observation and astronomy education",
  },
  {
    name: "Glassware",
    img: "/assets/generated/cat-glassware-realistic.dim_400x300.jpg",
    desc: "Borosilicate glassware, flasks, beakers, and precision lab apparatus",
    viewListUrl:
      "https://drive.google.com/file/d/1UfMp_9y4CRfPOkgAYegKSH0U7fjclL-I/view?usp=sharing",
  },
  {
    name: "Electronics & Robotics",
    img: "/assets/generated/cat-electronics-realistic.dim_400x300.jpg",
    desc: "Circuit boards, breadboards, meters, and robotics experiment kits",
    viewListUrl:
      "https://drive.google.com/file/d/18_KS_sIjIDsGrNMifs95N_bybspijTwv/view?usp=sharing",
  },
  {
    name: "Geography Lab Equipment",
    img: "/assets/generated/cat-earth-science-realistic.dim_400x300.jpg",
    desc: "Globes, geographical models, and earth structure demonstration sets",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1bihoEn0zDUDfeMEfIEsEM-YwSI4XnyRt/view?usp=sharing",
  },
  {
    name: "Mathematic Lab Equipment",
    img: "/assets/generated/cat-mathematics-realistic.dim_400x300.jpg",
    desc: "3D geometric shapes, abacus, and mathematical demonstration tools",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1g8ROCjNN7HNW-rP36pWARjItKq1hDsRM/view?usp=sharing",
    pictorialCatalogueUrl:
      "https://drive.google.com/file/d/1Qz0r49JOqDTbmfp9SPgilOSkOd4mNplt/view?usp=sharing",
  },
  {
    name: "Human Anatomy Models",
    img: "/assets/generated/cat-anatomy-realistic.dim_400x300.jpg",
    desc: "Detailed torso, organ, skeletal, and brain models for medical education",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1E1kHv5zgpNr0ylby1-x0DsWDPf3_2PRf/view?usp=sharing",
  },
  {
    name: "Printed Charts",
    img: "/assets/generated/charts-biology-realistic.dim_400x300.jpg",
    desc: "High-quality laminated science charts for biology, chemistry, and physics",
    viewAllChartsUrl:
      "https://drive.google.com/file/d/19B8UMNX1RsmDmhuJ9V2G-NNp8oelKQ0N/view?usp=sharing",
  },
  {
    name: "Lab Models",
    img: "/assets/generated/cat-lab-models-realistic.dim_400x300.jpg",
    desc: "All-in-one activity kits, 3D science models, and hands-on learning aids at all levels",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1_K3fhqdBDtAWvYZldxQGV-qhwz8BoBY3/view?usp=sharing",
  },
  {
    name: "Safety Equipment",
    img: "/assets/generated/safety-goggles-realistic.dim_400x300.jpg",
    desc: "Lab safety goggles, gloves, face masks, hand sanitisers, and lab coats for full protection",
    safetySubcategoriesUrl: "/safety-equipment",
  },
  {
    name: "Science Lab Material",
    img: "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
    desc: "Ready-to-use experiment kits for chemistry, robotics, and STEM learning",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1mDAyPNUepo2ByK2xiRqUPfMMKqshoBpY/view?usp=sharing",
  },
  {
    name: "Stationery",
    img: "/assets/generated/cat-stationery.dim_400x300.jpg",
    desc: "We provide stationery to schools, colleges, and institutions at wholesale price. For instant quotation, provide us with your requirement list.",
  },
  {
    name: "Plasticware",
    img: "/assets/generated/cat-plasticware-realistic.dim_400x300.jpg",
    desc: "Plastic beakers, test tube racks, petri dishes, funnels, and lab plastic consumables",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1s6Zqr7DFCDPkjZQZieJVijs30RbJvvG_/view?usp=sharing",
  },
  {
    name: "Lab Reagents and Chemicals",
    img: "/assets/generated/cat-reagents-realistic.dim_400x300.jpg",
    desc: "High-purity lab reagents, indicators, solvents, and chemical compounds for all experiments",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1HfAoj-1MuGBAoYwWnzUOQYWZ3Szbhinc/view?usp=sharing",
  },
  {
    name: "Pharma Lab Equipments",
    img: "/assets/generated/cat-pharma-realistic.dim_400x300.jpg",
    desc: "Pharmaceutical-grade analytical instruments, dissolution apparatus, and pharma lab tools",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/13v7kf4kz3W0ik7ieMszOGPhbI4o2reDn/view?usp=sharing",
  },
  {
    name: "Model Making Material",
    img: "/assets/generated/cat-model-making.dim_400x300.jpg",
    desc: "Thermocol, cardboard, craft foam, paints, clay, and all materials for building science models",
  },
  {
    name: "Handmade Models",
    img: "/assets/generated/cat-handmade-models.dim_400x300.jpg",
    desc: "Custom handcrafted science models of solar system, anatomy, DNA, and more for school exhibitions",
    viewCatalogueUrl:
      "https://drive.google.com/drive/folders/1jpLBtdc6TA6NVWAcxtItN705JHmcom5d?usp=drive_link",
  },
  {
    name: "Handmade Charts",
    img: "/assets/generated/cat-handmade-charts.dim_400x300.jpg",
    desc: "Hand-drawn and hand-painted educational science charts with neat labeling for classrooms",
  },
  {
    name: "Portraits",
    img: "/assets/generated/cat-portraits-realistic.dim_400x300.jpg",
    desc: "Framed portraits of great scientists, mathematicians, writers, psychologists, and computer science pioneers for schools and labs",
    portraitsSubcategoriesUrl: "/portraits",
  },
  {
    name: "Handwritten Projects",
    img: "/assets/generated/cat-handwritten-projects.dim_400x300.jpg",
    desc: "Neatly handwritten school science project files with diagrams, charts, and professional presentation",
    handwrittenProjectsUrl: "/handwritten-projects",
  },
  {
    name: "Handwritten Practical Files",
    img: "/assets/generated/cat-practical-files.dim_400x300.jpg",
    desc: "Complete handwritten practical files with experiments, observations, and results for all classes",
    handwrittenPracticalFilesUrl: "/handwritten-practical-files",
  },
  {
    name: "IGNOU Assignments/Synopsis/Project/Practicals",
    img: "/assets/generated/ignou-logo.dim_600x400.jpg",
    desc: "Complete IGNOU handwritten Assignments, Synopsis, Projects & Practicals — all subjects, all mediums. Course Code and Session-wise service.",
    ignoUrl: "/ignou-assignments",
  },
  {
    name: "Package for Schools Laboratories",
    img: "/assets/generated/cat-school-lab-package-realistic.dim_400x300.jpg",
    desc: "Complete turnkey lab setup packages with all equipment, chemicals, and furniture for school labs",
  },
  {
    name: "Primary School Items",
    img: "/assets/generated/cat-primary-school.dim_400x300.jpg",
    desc: "Colorful science toys, basic experiment kits, magnets, and fun learning aids for young children",
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1WEsaN3rzSZJBKL_xKCce02SPXL-3Z8OW/view?usp=sharing",
  },
  {
    name: "Analytical Lab Equipments",
    img: "/assets/generated/cat-analytical-lab-realistic.dim_400x300.jpg",
    desc: "Analytical balances, spectrophotometers, pH meters, and precision analytical instruments for research labs",
  },
  {
    name: "Engineering Lab Equipments",
    img: "/assets/generated/cat-electrical-eng-realistic.dim_400x300.jpg",
    desc: "Electrical, Civil & Surveying, and Mechanical engineering instruments for technical institutions",
    engineeringSubcategoriesUrl: "/engineering-lab",
  },
  {
    name: "Forensic Lab Equipments",
    img: "/assets/generated/cat-forensic-realistic.dim_400x300.jpg",
    desc: "Fingerprint kits, evidence collection tools, forensic light sources, and sample analysis equipment",
  },
  {
    name: "Dissertation / Thesis",
    img: "/assets/generated/cat-dissertation-thesis.dim_400x300.jpg",
    desc: "Dissertation and thesis writing assistance, project reports, and academic research materials for students",
  },
  {
    name: "M.Ed / B.Ed / D.El.Ed",
    img: "/assets/generated/cat-med-bed-education.dim_400x300.jpg",
    desc: "Teacher education materials, lesson plans, practice teaching records, and B.Ed/M.Ed project files",
  },
  {
    name: "STEM Kits",
    img: "/assets/generated/cat-stem-kits-realistic.dim_400x300.jpg",
    desc: "Hands-on STEM activity kits covering Science, Technology, Engineering, and Mathematics for all school levels",
  },
];

const HERO_IMAGES = [
  "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
  "/assets/generated/cat-chemistry-realistic.dim_400x300.jpg",
  "/assets/generated/cat-physics-realistic.dim_400x300.jpg",
  "/assets/generated/cat-microscopes-realistic.dim_400x300.jpg",
  "/assets/generated/cat-glassware-realistic.dim_400x300.jpg",
  "/assets/generated/cat-electronics-realistic.dim_400x300.jpg",
  "/assets/generated/cat-anatomy-realistic.dim_400x300.jpg",
  "/assets/generated/cat-reagents-realistic.dim_400x300.jpg",
  "/assets/generated/cat-analytical-lab-realistic.dim_400x300.jpg",
  "/assets/generated/cat-pharma-realistic.dim_400x300.jpg",
  "/assets/generated/cat-school-lab-package-realistic.dim_400x300.jpg",
  "/assets/generated/cat-electrical-eng-realistic.dim_400x300.jpg",
];

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Quality Products",
    desc: "Only trusted, durable science supplies for every lab and classroom need.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick dispatch across India with reliable logistics partners.",
  },
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    desc: "Knowledgeable staff to help choose the right products for your needs.",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
    desc: "Trusted science education partner since 1993 with a proven track record.",
  },
];

const USP_POINTS = [
  {
    Icon: Rocket,
    label: "Same Day Dispatch",
    sub: "Order today, shipped today",
    accent: "#25d366",
  },
  {
    Icon: Truck,
    label: "All India Delivery",
    sub: "Pan-India shipping available",
    accent: "#f59e0b",
  },
  {
    Icon: Clock,
    label: "24/7 Customer Support",
    sub: "Always here to help you",
    accent: "#60a5fa",
  },
  {
    Icon: SiWhatsapp,
    label: "Order on WhatsApp",
    sub: "Instant ordering online",
    accent: "#25d366",
  },
  {
    Icon: Tag,
    label: "Bulk Order Offers",
    sub: "Special prices for bulk buyers",
    accent: "#f472b6",
  },
  {
    Icon: Heart,
    label: "Customer Satisfaction",
    sub: "Our motto, our promise",
    accent: "#fb923c",
  },
];

function CategoryButton({ cat, i }: { cat: Category; i: number }) {
  if (cat.name === "Printed Charts") {
    return (
      <div className="flex flex-col gap-2">
        <Link
          to="/printed-charts"
          className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid="categories.printed_charts.subcategories_button"
        >
          View Sub-Categories →
        </Link>
        <a
          href={cat.viewAllChartsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid="categories.printed_charts.viewall_button"
        >
          View All Charts
        </a>
      </div>
    );
  }

  if (cat.name === "Package for Schools Laboratories") {
    return (
      <Link
        to="/school-lab-package"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.school_lab.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.name === "Engineering Lab Equipments") {
    return (
      <Link
        to="/engineering-lab"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.engineering_lab.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.safetySubcategoriesUrl) {
    return (
      <Link
        to="/safety-equipment"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.safety_equipment.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.portraitsSubcategoriesUrl) {
    return (
      <Link
        to="/portraits"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.portraits.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  // Mathematics: show both View Catalogue and Pictorial Catalogue
  if (cat.name === "Mathematic Lab Equipment" && cat.pictorialCatalogueUrl) {
    return (
      <div className="flex flex-col gap-2">
        <a
          href={cat.viewCatalogueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid={`categories.catalogue_button.${i + 1}`}
        >
          View Catalogue
        </a>
        <a
          href={cat.pictorialCatalogueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid={`categories.pictorial_catalogue_button.${i + 1}`}
        >
          Pictorial Catalogue
        </a>
      </div>
    );
  }

  if (cat.viewCatalogueUrl) {
    return (
      <a
        href={cat.viewCatalogueUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
        data-ocid={`categories.catalogue_button.${i + 1}`}
      >
        View Catalogue
      </a>
    );
  }

  if (cat.handwrittenProjectsUrl) {
    return (
      <Link
        to="/handwritten-projects"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.handwritten_projects.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.handwrittenPracticalFilesUrl) {
    return (
      <Link
        to="/handwritten-practical-files"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.handwritten_practical_files.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.viewListUrl) {
    return (
      <a
        href={cat.viewListUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
        data-ocid={`categories.viewlist_button.${i + 1}`}
      >
        View List
      </a>
    );
  }

  if (cat.ignoUrl) {
    return (
      <Link
        to="/ignou-assignments"
        className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.ignou.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  return (
    <Link
      to="/enquiry"
      className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
      data-ocid={`categories.enquiry_button.${i + 1}`}
    >
      Send Enquiry
    </Link>
  );
}

export default function HomePage() {
  useEffect(() => {
    const el = document.getElementById("bsmc-promise");
    if (el) {
      el.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden h-[25vh] flex items-center"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-collage.dim_1600x700.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,28,44,0.90) 0%, rgba(15,35,52,0.84) 55%, rgba(10,50,60,0.78) 100%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(28,142,138,0.18) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 relative z-10 w-full">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <div className="bg-white rounded-xl p-1 inline-flex shadow-xl">
                <img
                  src="/assets/generated/bsmc-logo-transparent.dim_400x400.png"
                  alt="Bharat Science Model Centre Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                Complete Educational &amp;{" "}
                <span style={{ color: "rgba(28,202,196,0.95)" }}>
                  Laboratory Solutions
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Product Image Marquee */}
      <div
        className="bg-navy-dark overflow-hidden py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <style>{`
          @keyframes hero-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hero-marquee-track {
            display: flex;
            width: max-content;
            animation: hero-marquee 30s linear infinite;
          }
          .hero-marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="hero-marquee-track">
          {[
            ...HERO_IMAGES.map((s, i) => ({ src: s, k: `a${i}` })),
            ...HERO_IMAGES.map((s, i) => ({ src: s, k: `b${i}` })),
          ].map(({ src, k }) => (
            <div
              key={k}
              className="flex-shrink-0 mx-1.5 rounded-lg overflow-hidden"
              style={{ width: 160, height: 108 }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "1993", label: "Established" },
              { value: "30+", label: "Product Categories" },
              { value: "840+", label: "Schools Served" },
              { value: "7800+", label: "Products Available" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── USP / Brand Promise Strip ── */}
      <section
        id="bsmc-promise"
        data-ocid="usp.section"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1c2e 0%, #0a3240 60%, #0d2535 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(28,202,196,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #1ccac4 30%, #f59e0b 60%, #25d366 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
                The BSMC Promise
              </span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why Thousands of Schools Trust Us
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {USP_POINTS.map(({ Icon, label, sub, accent }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group flex flex-col items-center text-center px-3 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 cursor-default"
                data-ocid={`usp.item.${idx + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                  style={{
                    background: `${accent}22`,
                    border: `2px solid ${accent}55`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <p className="text-white font-bold text-sm leading-tight mb-1">
                  {label}
                </p>
                <p className="text-white/50 text-xs leading-snug">{sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile ticker */}
          <div className="md:hidden overflow-hidden">
            <style>{`
              @keyframes usp-ticker {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .usp-ticker-track {
                display: flex;
                width: max-content;
                animation: usp-ticker 22s linear infinite;
              }
              .usp-ticker-track:hover { animation-play-state: paused; }
            `}</style>
            <div className="usp-ticker-track">
              {[...USP_POINTS, ...USP_POINTS].map(
                ({ Icon, label, sub, accent }, idx) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: intentional duplicate for marquee
                    key={idx}
                    className="flex-shrink-0 mx-2 flex flex-col items-center text-center px-5 py-4 rounded-2xl border border-white/10 bg-white/5"
                    style={{ width: 148 }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2.5"
                      style={{
                        background: `${accent}22`,
                        border: `2px solid ${accent}55`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <p className="text-white font-bold text-xs leading-tight mb-1">
                      {label}
                    </p>
                    <p className="text-white/50 text-[10px] leading-snug">
                      {sub}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(28,202,196,0.4) 50%, transparent 100%)",
          }}
        />
      </section>

      {/* Categories */}
      <section id="categories" className="py-6 md:py-10 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Our Products
            </h2>
            <p className="text-sm text-muted-text mt-1">
              Browse our complete range of science education categories
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
            data-ocid="categories.list"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden group"
                data-ocid={`categories.item.${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-text leading-snug mb-3 line-clamp-2">
                    {cat.desc}
                  </p>
                  <CategoryButton cat={cat} i={i} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Deal In — below categories */}
      <div className="bg-section-alt py-4 text-center border-t border-card-border">
        <BrandsMarquee />
      </div>

      {/* Brand Catalogues */}
      <section id="brand-catalogues" className="py-6 md:py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Trusted Brands
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Download Latest Brand Catalogues
            </h2>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5"
            data-ocid="brand_catalogues.list"
          >
            {BRAND_CATALOGUES.map((brand, i) => (
              <motion.a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex flex-col items-center bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-200 p-5 cursor-pointer"
                data-ocid={`brand_catalogues.item.${i + 1}`}
              >
                <div className="w-full h-20 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground mb-3 text-center">
                  {brand.name}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-teal group-hover:text-teal-hover transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Catalogue</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-6 md:py-10 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Our Strengths
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why Choose BSMC?
            </h2>
          </div>
          {/* 2×2 on mobile, 4 across on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center p-3 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-teal/20 flex items-center justify-center mb-2 sm:mb-4">
                  <f.icon className="w-5 h-5 sm:w-7 sm:h-7 text-teal" />
                </div>
                <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                  {f.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue + Enquiry Split */}
      <section className="py-6 md:py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-navy rounded-xl p-3 sm:p-8 flex flex-col justify-between min-h-fit">
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-teal/20 flex items-center justify-center mb-2 sm:mb-3">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-teal" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Download Our Catalogues
                </h3>
                <p className="hidden sm:block text-white/60 text-sm leading-relaxed mb-4">
                  Browse and download our product catalogues to explore our
                  complete range of science education equipment.
                </p>
              </div>
              <a href={CATALOGUE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full"
                  data-ocid="home.catalogue_button"
                >
                  View Catalogues
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-xl border border-card-border p-3 sm:p-8 flex flex-col justify-between min-h-fit">
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-teal-light flex items-center justify-center mb-2 sm:mb-3">
                  <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-teal" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                  Send an Enquiry
                </h3>
                <p className="hidden sm:block text-muted-text text-sm leading-relaxed mb-4">
                  Tell us what you need. We&apos;ll get back to you with a
                  customized quote for your school or institution.
                </p>
              </div>
              <Link to="/enquiry">
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-white rounded-full"
                  data-ocid="home.enquiry_button"
                >
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-6 md:py-10 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Reach Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Contact Us
            </h2>
          </div>
          {/* 2×2 on mobile, 4 across on lg+ */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white rounded-xl border border-card-border p-3 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Phone</h4>
              <div className="space-y-1.5 w-full">
                <div>
                  <p className="text-xs text-muted-text mb-0.5">
                    General Enquiry
                  </p>
                  <a
                    href="tel:+919999899973"
                    className="block text-xs sm:text-sm text-teal hover:underline font-medium"
                    data-ocid="contact.phone1_link"
                  >
                    +91 99998 99973
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-text mb-0.5">
                    Mr. Vinod Kumar
                  </p>
                  <a
                    href="tel:+919810572634"
                    className="block text-xs sm:text-sm text-teal hover:underline font-medium"
                    data-ocid="contact.phone2_link"
                  >
                    +91 98105 72634
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-text mb-0.5">Jatin Pahuja</p>
                  <a
                    href="tel:+919999799935"
                    className="block text-xs sm:text-sm text-teal hover:underline font-medium"
                    data-ocid="contact.phone3_link"
                  >
                    +91 99997 99935
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-3 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Email</h4>
              <a
                href="mailto:edusupermart@gmail.com"
                className="text-xs sm:text-sm text-teal hover:underline break-all"
                data-ocid="contact.email_link"
              >
                edusupermart@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-3 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-light flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Address</h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                389/9 Shivpuri,
                <br />
                Gurugram, Haryana
                <br />
                Pin Code — 122001
              </p>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-3 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">
                Get Directions
              </h4>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs sm:text-sm text-teal hover:underline font-medium"
                data-ocid="contact.maps_link"
              >
                Open in Google Maps
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
              <p className="text-xs text-muted-text">
                Near Harish Bakery, Old Railway Rd, Shivpuri, Sector 7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
