import BrandsMarquee from "@/components/BrandsMarquee";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
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
  viewCatalogue2Url?: string;
  checklistUrl?: string;
  dissertationUrl?: string;
  viewAllChartsUrl?: string;
  safetySubcategoriesUrl?: string;
  portraitsSubcategoriesUrl?: string;
  engineeringSubcategoriesUrl?: string;
  handwrittenProjectsUrl?: string;
  handwrittenPracticalFilesUrl?: string;
  ignoUrl?: string;
  medUrl?: string;
  downloadProjectsUrl?: string;
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
    pictorialCatalogueUrl:
      "https://drive.google.com/file/d/15bVLhfHobhqtuWoY9zA3k7V9eHrW13em/view?usp=sharing",
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
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1yfZcgx1Npc7K0Gu_N0iiteFyV5JQsLtw/view?usp=sharing",
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
    viewCatalogue2Url:
      "https://drive.google.com/file/d/16uOQ2fSEhsSg-5t05JFPLBsdMFuIa2qs/view?usp=sharing",
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
    checklistUrl:
      "https://drive.google.com/file/d/1Qx7a2b6r_RSp-kLbSU2OtX7A1a_rYhkz/view?usp=sharing",
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
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1zYkJvdLOj0JeMz8i1_w6r9NKPmdvwRqQ/view?usp=sharing",
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
    viewCatalogueUrl:
      "https://drive.google.com/file/d/1s1NURmkx-ENXFvAeC8TMeLBT54UW39kA/view?usp=drive_link",
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
    viewCatalogueUrl:
      "https://drive.google.com/file/d/11Tme3EXuSB9n06gbdyrBY5LE7TSDM9HU/view?usp=sharing",
  },
  {
    name: "Dissertation / Thesis",
    img: "/assets/generated/cat-dissertation-thesis.dim_400x300.jpg",
    desc: "Dissertation and thesis writing assistance, project reports, and academic research materials for students",
    dissertationUrl: "/dissertation-thesis",
  },
  {
    name: "M.Ed / B.Ed / D.El.Ed",
    img: "/assets/generated/cat-med-bed-education.dim_400x300.jpg",
    desc: "Teacher education materials, lesson plans, practice teaching records, and B.Ed/M.Ed project files",
    medUrl: "/med-bed-deled",
  },
  {
    name: "STEM Kits",
    img: "/assets/generated/cat-stem-kits-realistic.dim_400x300.jpg",
    desc: "Hands-on STEM activity kits covering Science, Technology, Engineering, and Mathematics for all school levels",
  },
  {
    name: "Download Project PDF",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    desc: "Download handwritten CBSE/ICSE project PDFs for ₹49. Physics, Chemistry, Biology, Economics & more.",
    downloadProjectsUrl: "/download-projects",
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

const HERO_IMAGE_ALTS = [
  "Biology lab equipment India",
  "Chemistry lab glassware supplier India",
  "Physics lab instruments for schools",
  "Microscope and telescope for schools India",
  "Laboratory glassware manufacturer India",
  "Electronics and robotics kits for schools",
  "Human anatomy models for schools India",
  "Laboratory reagents and chemicals India",
  "Analytical lab equipment India",
  "Pharma lab equipment India",
  "School lab package India",
  "Engineering lab instruments India",
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

  // Chemistry: show View List and Pictorial Catalogue
  if (cat.name === "Chemistry Lab Equipment" && cat.pictorialCatalogueUrl) {
    return (
      <div className="flex flex-col gap-2">
        <a
          href={cat.viewListUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid={`categories.viewlist_button.${i + 1}`}
        >
          View List
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

  // Mathematics: show View Catalogue, Pictorial Catalogue, and View Catalogue 2
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
        {cat.viewCatalogue2Url && (
          <a
            href={cat.viewCatalogue2Url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full text-center"
            data-ocid={`categories.catalogue2_button.${i + 1}`}
          >
            View Catalogue 2
          </a>
        )}
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

  if (cat.checklistUrl) {
    return (
      <div className="flex flex-col gap-2">
        <a
          href={cat.checklistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid={`categories.checklist_button.${i + 1}`}
        >
          View Checklist
        </a>
        <Link
          to="/enquiry"
          className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full text-center"
          data-ocid={`categories.enquiry_button.${i + 1}`}
        >
          Send Enquiry
        </Link>
      </div>
    );
  }

  if (cat.viewListUrl && cat.name !== "Chemistry Lab Equipment") {
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

  if (cat.dissertationUrl) {
    return (
      <Link
        to="/dissertation-thesis"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.dissertation.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.medUrl) {
    return (
      <Link
        to="/med-bed-deled"
        className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
        data-ocid="categories.med.button"
      >
        View Sub-Categories →
      </Link>
    );
  }

  if (cat.downloadProjectsUrl) {
    return (
      <a
        href={cat.downloadProjectsUrl}
        onClick={(e) => {
          e.preventDefault();
          (window as any).__router?.navigate({ to: cat.downloadProjectsUrl! });
          window.location.href = cat.downloadProjectsUrl!;
        }}
        className="block w-full text-center text-xs font-semibold py-2 px-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
        data-ocid="categories.download_projects.button"
      >
        ⬇️ Download PDF — ₹49
      </a>
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
  useSEO({
    title:
      "Bharat EduMart – School Lab Equipment, Microscopes & Science Models Supplier in India",
    description:
      "Bharat EduMart is the online sales initiative of Bharat Science Model Centre – India's trusted supplier of school lab equipment, microscopes, chemistry & physics apparatus, STEM kits, and science models. Serving 840+ schools since 1993. Gurugram, Haryana.",
    canonical: "https://bharatedumart.com/",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What lab equipment does Bharat Science Model Centre supply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BSMC supplies a comprehensive range of science lab equipment including biology lab instruments, chemistry glassware and apparatus, physics experiment kits, STEM kits, microscopes, telescopes, safety equipment, anatomy models, and complete school lab packages for CBSE and state board schools across India.",
          },
        },
        {
          "@type": "Question",
          name: "Does BSMC deliver lab equipment across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Bharat Science Model Centre offers pan-India delivery of all science lab equipment and educational supplies. We serve schools and institutions in Delhi NCR, Haryana, and all Indian states with same-day dispatch from our Gurugram warehouse.",
          },
        },
        {
          "@type": "Question",
          name: "Does BSMC offer CBSE-aligned school lab packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer complete CBSE-aligned lab packages for Chemistry, Physics, Biology, Mathematics, and Composite labs. These packages include all required instruments, chemicals, glassware, and models as per the CBSE curriculum for Classes 6-12.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get a price quote for bulk lab equipment orders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a customized price quote by calling us at +91 9999899973 or through our online enquiry form. We offer special wholesale pricing for bulk orders from schools, colleges, and government institutions.",
          },
        },
        {
          "@type": "Question",
          name: "What are BSMC's contact details and location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bharat Science Model Centre is located at 389/9 Shivpuri, Near Harish Bakery, Old Railway Road, Gurugram, Haryana 122001. Call us at +91 9999899973 (General Enquiry), +91 9810572634 (Mr. Vinod Kumar), or +91 9999799935 (Jatin Pahuja). We are open Monday to Saturday, 9 AM to 7 PM.",
          },
        },
      ],
    },
  });
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
                  alt="Bharat Science Model Centre Logo - Lab Equipment Supplier Gurugram"
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
                Science Lab Equipment &amp; Educational Supplies{" "}
                <span style={{ color: "rgba(28,202,196,0.95)" }}>
                  Gurugram, Haryana — Serving India Since 1993
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
                alt={
                  HERO_IMAGE_ALTS[HERO_IMAGES.indexOf(src)] ||
                  "Science lab equipment India"
                }
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
              Affordable Lab Equipment &amp; School Supplies — Bulk Orders
              Welcome
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
              Buy lab equipment, chemistry glassware, biology instruments, STEM
              kits &amp; school educational supplies online — all in one place.
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
                    alt={`${cat.name} - Educational Supplies India`}
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
                    alt={`${brand.name} laboratory chemicals and equipment catalogue India`}
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

      {/* SEO Content Section */}
      <section className="py-10 md:py-14 bg-section-alt" id="about-bsmc">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            India&apos;s Trusted School Lab Equipment Supplier Since 1993
          </h2>
          <p className="text-muted-text leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Bharat Science Model Centre (BSMC), established in 1993 in Gurugram,
            Haryana, has been a trusted partner for schools, colleges, and
            educational institutions across India. With over{" "}
            <strong>7,800+ products</strong> and{" "}
            <strong>840+ schools served</strong>, BSMC delivers comprehensive
            educational and laboratory solutions — from complete CBSE lab setups
            to individual scientific instruments — with same-day dispatch and
            pan-India delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-teal rounded-full inline-block" />
                Complete Range of Science Lab Equipment
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                BSMC supplies a comprehensive range of{" "}
                <strong>biology lab equipment</strong> including microscopes,
                prepared slides, specimens, and anatomy models;{" "}
                <strong>chemistry lab apparatus</strong> such as glassware,
                beakers, test tubes, burners, and chemical reagents;{" "}
                <strong>physics instruments</strong> covering optics kits,
                electricity boards, and mechanics apparatus; plus STEM kits,
                educational models, and safety equipment for every science
                department.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-teal rounded-full inline-block" />
                School Lab Packages for CBSE &amp; State Board Schools
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                Our complete, ready-to-use{" "}
                <strong>
                  lab packages for Chemistry, Physics, Biology, Mathematics, and
                  Composite science
                </strong>{" "}
                are fully aligned with CBSE curriculum requirements for Classes
                6–12. Each package includes all required instruments, glassware,
                chemicals, and models. Special wholesale pricing is available
                for bulk orders from government schools, private institutions,
                and educational boards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-teal rounded-full inline-block" />
                Microscopes, Telescopes &amp; Scientific Instruments
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                Browse our extensive range of{" "}
                <strong>
                  compound microscopes, stereo microscopes, and digital
                  microscopes
                </strong>{" "}
                for school observation labs — from 40x entry-level models to
                1000x advanced binocular microscopes. We also supply telescopes,
                binoculars, and precision scientific instruments for school
                astronomy and geography labs across India.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-teal rounded-full inline-block" />
                Serving Gurugram, Delhi NCR &amp; Pan India
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                Located in <strong>Shivpuri, Gurugram, Haryana</strong>, BSMC
                provides school lab equipment to institutions in{" "}
                <strong>
                  Gurgaon, Delhi NCR, Faridabad, Noida, and across all Indian
                  states
                </strong>
                . Search &quot;school lab equipment near me&quot; in Gurugram or
                Haryana — we are your local supplier with same-day dispatch and
                24/7 customer support for urgent laboratory requirements.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-card-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-teal rounded-full inline-block" />
              Why Schools Choose BSMC for Lab Equipment
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "30+ years of experience supplying school lab equipment across India",
                "CBSE-aligned products reviewed against the latest practical curriculum",
                "Competitive wholesale pricing for schools, colleges, and institutions",
                "Same-day dispatch from Gurugram warehouse with pan-India delivery",
                "840+ schools and institutions have trusted BSMC since 1993",
                "Expert consultation for complete lab setup and equipment selection",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-muted-text"
                >
                  <span className="w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-text mt-5 pt-5 border-t border-card-border">
              Contact us today at <strong>+91 9999899973</strong> or{" "}
              <Link
                to="/enquiry"
                className="text-teal hover:text-teal-hover font-medium underline"
                data-ocid="seo_section.link"
              >
                send an enquiry
              </Link>{" "}
              to get a customized quote for your school&apos;s laboratory
              requirements.
            </p>
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
              Why Schools Across India Choose BSMC for Lab Equipment
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
          <div className="text-center mt-6">
            <p className="text-sm text-white/60">
              Explore our{" "}
              <Link
                to="/school-lab-package"
                className="text-teal hover:underline"
              >
                school lab packages
              </Link>
              {", "}
              <Link to="/enquiry" className="text-teal hover:underline">
                request a bulk quote
              </Link>
              {", or "}
              <Link to="/about" className="text-teal hover:underline">
                learn about BSMC
              </Link>
              .
            </p>
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
        <div className="text-center mt-6">
          <p className="text-xs text-muted-text max-w-2xl mx-auto">
            Bharat Science Model Centre serves schools, colleges, universities,
            and research institutions across{" "}
            <strong>Gurugram, Delhi NCR, Haryana</strong>, and all over India.
            We supply biology lab equipment, chemistry glassware, physics
            instruments, STEM kits, and complete school laboratory packages —
            with same-day dispatch and pan-India delivery.
          </p>
        </div>
      </section>

      {/* Deep SEO Content Section */}
      <section id="about-bsmc-full" className="py-10 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
            Bharat EduMart – School Lab Equipment, Microscopes & Science Models
            Online
          </h2>
          <p className="text-muted-text leading-relaxed mb-7">
            <strong>Bharat EduMart</strong> (bharatedumart.com) is the online
            sales initiative of{" "}
            <strong>Bharat Science Model Centre (BSMC)</strong>, established in
            Gurugram, Haryana in 1993. Through bharatedumart.com, schools and
            institutions across India can order 7,800+ science lab equipment,
            educational supplies, and school project items online with same-day
            dispatch. Over three decades, we have served{" "}
            <strong>840+ schools, colleges, and institutions</strong> across
            India — supplying science lab apparatus, chemistry glassware,
            physics instruments, biology lab items, STEM kits, and comprehensive
            school educational solutions. From individual instruments to
            complete lab setups, Bharat EduMart is the preferred online partner
            for science education in India.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Science Lab Equipment for CBSE Schools
          </h3>
          <p className="text-muted-text leading-relaxed mb-6">
            BSMC supplies a complete range of{" "}
            <strong>Physics, Chemistry, and Biology lab apparatus</strong> fully
            aligned with NCERT curriculum requirements for Classes 6 to 12.
            Whether your school needs equipment for Class 9 practicals or a
            fully outfitted senior secondary science lab, our CBSE-compliant
            inventory covers everything. Through our <em>Bharat EduMart</em>{" "}
            online platform, schools and institutions across India can
            conveniently order science lab equipment with same-day dispatch from
            Gurugram. Explore our ready-to-order{" "}
            <a
              href="/school-lab-package"
              className="text-teal hover:underline font-medium"
            >
              school lab packages
            </a>{" "}
            designed for Chemistry, Physics, Biology, Mathematics, and Composite
            science labs.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Physics Lab Equipment
          </h3>
          <p className="text-muted-text leading-relaxed mb-6">
            Our physics lab instruments range covers{" "}
            <strong>
              vernier calipers, screw gauges, optical benches, convex and
              concave lenses, galvanometers, ammeters, voltmeters, rheostats,
              sonometers
            </strong>
            , and complete electricity and mechanics lab setups. BSMC stocks
            instruments for every topic in the CBSE Class 9–12 physics
            curriculum — from simple pendulum experiments to semiconductor
            devices. Schools looking to buy{" "}
            <strong>physics apparatus India</strong>-wide choose BSMC for
            reliable quality and competitive wholesale pricing.{" "}
            <a
              href="/enquiry"
              className="text-teal hover:underline font-medium"
            >
              Send an enquiry
            </a>{" "}
            for a detailed physics lab quotation.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Chemistry Lab Equipment
          </h3>
          <p className="text-muted-text leading-relaxed mb-6">
            BSMC is a trusted{" "}
            <strong>chemistry lab glassware supplier in India</strong>, stocking
            Borosil glassware, beakers, conical flasks, burettes, pipettes,
            measuring cylinders, and complete titration and electrolysis setups.
            We source chemical reagents from reputed brands including CDH,
            ensuring quality and safety. Our chemistry apparatus range covers
            all CBSE practical requirements — from basic Class 9 experiments to
            advanced Class 12 qualitative analysis. All glassware is
            heat-resistant borosilicate, and safety equipment (goggles, lab
            coats, gloves) is available alongside chemistry instruments.{" "}
            <a
              href="/enquiry"
              className="text-teal hover:underline font-medium"
            >
              Get a chemistry lab quote
            </a>{" "}
            for your school.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Biology Lab Equipment &amp; Microscopes
          </h3>
          <p className="text-muted-text leading-relaxed mb-6">
            Biology labs need more than microscopes — they need prepared slides,
            anatomy models, dissection kits, specimens, and printed charts. BSMC
            stocks{" "}
            <strong>
              compound microscopes (monocular and binocular), stereo microscopes
            </strong>
            , prepared slide sets, human anatomy models, biology charts, and
            dissection instruments. Students looking to{" "}
            <strong>buy school microscopes in India</strong> and institutions
            seeking <strong>biology lab equipment suppliers</strong> rely on
            BSMC for quality instruments at wholesale prices. Our microscope
            range covers all CBSE Class 10 and 12 biology practical
            requirements.{" "}
            <a
              href="/enquiry"
              className="text-teal hover:underline font-medium"
            >
              Enquire about microscopes
            </a>
            .
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Why Schools Choose BSMC
          </h3>
          <ul className="text-muted-text leading-relaxed mb-6 space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>Established 1993</strong> — 30+ years of trusted service
                to Indian schools and institutions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>840+ schools served</strong> across India — from
                government primary schools to prestigious private institutions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>7,800+ products</strong> — one of the widest ranges of
                school and lab supplies available from a single supplier
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>All India delivery</strong> — we ship to every state and
                union territory with fast, reliable courier services
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>Same-day dispatch</strong> from our Gurugram warehouse
                for orders confirmed before noon
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
              <span>
                <strong>Bharat EduMart online platform</strong> — order science
                lab equipment and educational supplies online with ease
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Lab Equipment Supplier in Gurgaon &amp; Across India
          </h3>
          <p className="text-muted-text leading-relaxed mb-6">
            As a leading <strong>lab equipment supplier in Gurgaon</strong>{" "}
            (Gurugram), BSMC is conveniently located at 389/9 Shivpuri,
            Gurugram, Haryana — 122001. Schools in Gurugram,{" "}
            <strong>Delhi</strong>, Faridabad, Noida, and the wider{" "}
            <strong>NCR region</strong> benefit from same-day or next-day
            delivery. Beyond NCR, we serve schools in Chandigarh, Jaipur, Agra,
            Lucknow, Patna, Bhopal, and all other major cities across India. If
            you are searching for a <strong>science shop near me</strong> in
            Haryana or a reliable{" "}
            <strong>school supplies supplier in Haryana</strong>, BSMC is your
            answer — with 30+ years of unmatched experience in educational lab
            supplies.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">
            Explore Our Blog for Science Education Resources
          </h3>
          <p className="text-muted-text leading-relaxed mb-8">
            Our{" "}
            <a href="/blog" className="text-teal hover:underline font-medium">
              science lab equipment blog
            </a>{" "}
            is a free resource for teachers, school administrators, and
            students. Read our in-depth guides including{" "}
            <em>CBSE Lab Equipment List for Class 12</em>,{" "}
            <em>Best Microscope for School Students in India</em>, and{" "}
            <em>Complete Physics Lab Setup Guide</em> — all packed with
            practical advice to help Indian schools build better science
            laboratories.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/enquiry" data-ocid="home.seo_enquiry_button">
              <button
                type="button"
                className="px-6 py-2.5 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors"
              >
                Send Enquiry
              </button>
            </a>
            <a href="/blog" data-ocid="home.seo_blog_button">
              <button
                type="button"
                className="px-6 py-2.5 rounded-full border border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-colors"
              >
                View Blog
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
