import BrandsMarquee from "@/components/BrandsMarquee";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Atom,
  Award,
  BadgeCheck,
  BookOpen,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const CATALOGUE_URL =
  "https://drive.google.com/drive/folders/1oOjwm1w3VdTmJSINb_k6HAhO0H4dw5F_?usp=drive_link";

const MAPS_URL =
  "https://google.com/maps/dir//BHARAT+SCIENCE+MODEL+CENTRE,+Near+Harish+Bakery+,Old,+Shivpuri+Road,+Old+Railway+Rd,+Shivpuri,+Sector+7,+Gurugram,+Haryana+122001,+India/@28.4784191,77.0219015,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d19d3c7264cdb:0xf027b68e794f04b8!2m2!1d77.017996!2d28.47104?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

const CATEGORIES = [
  {
    name: "Biology Lab Equipment",
    img: "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
    desc: "Detailed cell models, DNA structures, and biological specimens for life science education",
  },
  {
    name: "Chemistry Lab Equipment",
    img: "/assets/generated/cat-chemistry-realistic.dim_400x300.jpg",
    desc: "Complete range of chemistry apparatus, reagents, and lab consumables",
  },
  {
    name: "Physics Lab Equipment",
    img: "/assets/generated/cat-physics-realistic.dim_400x300.jpg",
    desc: "Mechanics, electricity, optics and thermodynamics experimental setups",
  },
  {
    name: "Microscopes",
    img: "/assets/generated/cat-microscopes-realistic.dim_400x300.jpg",
    desc: "Compound, stereo, and digital microscopes for all academic levels",
  },
  {
    name: "Glassware & Apparatus",
    img: "/assets/generated/cat-glassware-realistic.dim_400x300.jpg",
    desc: "Borosilicate glassware, flasks, beakers, and precision lab apparatus",
  },
  {
    name: "Electronics & Robotics",
    img: "/assets/generated/cat-electronics-realistic.dim_400x300.jpg",
    desc: "Circuit boards, breadboards, meters, and robotics experiment kits",
  },
  {
    name: "Geography Lab Equipment",
    img: "/assets/generated/cat-earth-science-realistic.dim_400x300.jpg",
    desc: "Globes, geographical models, and earth structure demonstration sets",
  },
  {
    name: "Mathematic Lab Equipment",
    img: "/assets/generated/cat-mathematics-realistic.dim_400x300.jpg",
    desc: "3D geometric shapes, abacus, and mathematical demonstration tools",
  },
  {
    name: "Human Anatomy Models",
    img: "/assets/generated/cat-anatomy-realistic.dim_400x300.jpg",
    desc: "Detailed torso, organ, skeletal, and brain models for medical education",
  },
  {
    name: "Printed Charts",
    img: "/assets/generated/charts-biology-realistic.dim_400x300.jpg",
    desc: "High-quality laminated science charts for biology, chemistry, and physics",
  },
  {
    name: "Educational Kits",
    img: "/assets/generated/cat-school-lab-package-realistic.dim_400x300.jpg",
    desc: "All-in-one activity kits for hands-on science learning at all levels",
  },
  {
    name: "Safety Equipment",
    img: "/assets/generated/cat-chemistry-realistic.dim_400x300.jpg",
    desc: "Lab safety goggles, gloves, aprons, fire blankets, and first aid kits",
  },
  {
    name: "Science Kits & Experiments",
    img: "/assets/generated/cat-biology-realistic.dim_400x300.jpg",
    desc: "Ready-to-use experiment kits for chemistry, robotics, and STEM learning",
  },
  {
    name: "Stationery",
    img: "/assets/generated/cat-stationery.dim_400x300.jpg",
    desc: "Pens, pencils, notebooks, rulers, graph paper, and all academic stationery supplies",
  },
  {
    name: "Plasticware",
    img: "/assets/generated/cat-plasticware-realistic.dim_400x300.jpg",
    desc: "Plastic beakers, test tube racks, petri dishes, funnels, and lab plastic consumables",
  },
  {
    name: "Lab Reagents and Chemicals",
    img: "/assets/generated/cat-reagents-realistic.dim_400x300.jpg",
    desc: "High-purity lab reagents, indicators, solvents, and chemical compounds for all experiments",
  },
  {
    name: "Pharma Lab Equipments",
    img: "/assets/generated/cat-pharma-realistic.dim_400x300.jpg",
    desc: "Pharmaceutical-grade analytical instruments, dissolution apparatus, and pharma lab tools",
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
  },
  {
    name: "Handmade Charts",
    img: "/assets/generated/cat-handmade-charts.dim_400x300.jpg",
    desc: "Hand-drawn and hand-painted educational science charts with neat labeling for classrooms",
  },
  {
    name: "Portraits of Scientist",
    img: "/assets/generated/cat-scientist-portraits.dim_400x300.jpg",
    desc: "Framed portraits of famous scientists — Einstein, Newton, Marie Curie, and more for labs and halls",
  },
  {
    name: "Handwritten Projects",
    img: "/assets/generated/cat-handwritten-projects.dim_400x300.jpg",
    desc: "Neatly handwritten school science project files with diagrams, charts, and professional presentation",
  },
  {
    name: "Handwritten Practical Files",
    img: "/assets/generated/cat-practical-files.dim_400x300.jpg",
    desc: "Complete handwritten practical files with experiments, observations, and results for all classes",
  },
  {
    name: "Handwritten Assignments",
    img: "/assets/generated/cat-assignments.dim_400x300.jpg",
    desc: "Neatly handwritten science assignments with diagrams and proper formatting for school submissions",
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
  },
  {
    name: "Silica Wares",
    img: "/assets/generated/cat-silica-wares-realistic.dim_400x300.jpg",
    desc: "Silica crucibles, evaporating dishes, silica ware for high-temperature applications in advanced labs",
  },
  {
    name: "Analytical Lab Equipments",
    img: "/assets/generated/cat-analytical-lab-realistic.dim_400x300.jpg",
    desc: "Analytical balances, spectrophotometers, pH meters, and precision analytical instruments for research labs",
  },
  {
    name: "Electrical Engineering Equipment",
    img: "/assets/generated/cat-electrical-eng-realistic.dim_400x300.jpg",
    desc: "Electrical panels, transformers, multimeters, oscilloscopes, and circuit testing equipment for engineering labs",
  },
  {
    name: "Forensic Lab Equipments",
    img: "/assets/generated/cat-forensic-realistic.dim_400x300.jpg",
    desc: "Fingerprint kits, evidence collection tools, forensic light sources, and sample analysis equipment",
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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-[600px] md:min-h-[680px] flex items-center"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10 w-full">
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="bg-white rounded-2xl p-2 inline-flex shadow-xl">
                <img
                  src="/assets/generated/bsmc-logo-transparent.dim_400x400.png"
                  alt="Bharat Science Model Centre Logo"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                <Atom className="w-3.5 h-3.5" />
                Established 1993 · GST: 06APQPK9109P2Z2
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Complete Educational &amp;
                <span
                  className="block"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                >
                  Laboratory Solutions
                </span>
                <span
                  className="block"
                  style={{ color: "rgba(28,202,196,0.95)" }}
                >
                  Under One Roof
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
                Serving India&apos;s schools, institutions, and students since
                1993.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full px-8"
                  onClick={() => scrollTo("categories")}
                  data-ocid="hero.explore_button"
                >
                  <FlaskConical className="w-5 h-5 mr-2" />
                  Explore Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/15 rounded-full px-8 bg-transparent"
                  onClick={() => navigate({ to: "/enquiry" })}
                  data-ocid="hero.quote_button"
                >
                  Get Quote
                </Button>
              </div>
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
              { value: "32+", label: "Product Categories" },
              { value: "500+", label: "Schools Served" },
              { value: "10,000+", label: "Products Available" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Marquee */}
      <BrandsMarquee />

      {/* Categories */}
      <section id="categories" className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Product Categories
            </h2>
            <p className="text-muted-text max-w-xl mx-auto text-sm">
              Comprehensive science education supplies for schools, colleges,
              and research institutions.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
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
                <div className="p-4">
                  <h3 className="font-bold text-sm text-foreground mb-1 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-text leading-snug mb-3 line-clamp-2">
                    {cat.desc}
                  </p>
                  {cat.name === "Printed Charts" ||
                  cat.name === "Package for Schools Laboratories" ? (
                    <Link
                      to={
                        cat.name === "Package for Schools Laboratories"
                          ? "/school-lab-package"
                          : "/printed-charts"
                      }
                      className="inline-block text-xs font-semibold border border-teal text-teal hover:bg-teal hover:text-white transition-colors px-3 py-1.5 rounded-full"
                      data-ocid="categories.printed_charts.button"
                    >
                      View Sub-Categories →
                    </Link>
                  ) : cat.name === "Mathematic Lab Equipment" ? (
                    <a
                      href="https://drive.google.com/file/d/1g8ROCjNN7HNW-rP36pWARjItKq1hDsRM/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
                      data-ocid={`categories.catalogue_button.${i + 1}`}
                    >
                      View Catalogue
                    </a>
                  ) : (
                    <Link
                      to="/enquiry"
                      className="inline-block text-xs font-semibold bg-teal text-white hover:bg-teal-hover transition-colors px-3 py-1.5 rounded-full"
                      data-ocid={`categories.enquiry_button.${i + 1}`}
                    >
                      Send Enquiry
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Our Strengths
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Why Choose BSMC?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Three decades of excellence in science education supplies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue + Enquiry Split */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Download Our Catalogues
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
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

            <div className="bg-white rounded-2xl border border-card-border p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Send an Enquiry
                </h3>
                <p className="text-muted-text text-sm leading-relaxed mb-6">
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
      <section id="contact" className="py-16 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Reach Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Contact Us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-card-border p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Phone</h4>
              <div className="space-y-2 w-full">
                <div>
                  <p className="text-xs text-muted-text mb-0.5">
                    General Enquiry
                  </p>
                  <a
                    href="tel:+919999899973"
                    className="block text-sm text-teal hover:underline font-medium"
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
                    className="block text-sm text-teal hover:underline font-medium"
                    data-ocid="contact.phone2_link"
                  >
                    +91 98105 72634
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-text mb-0.5">Jatin Pahuja</p>
                  <a
                    href="tel:+919999799935"
                    className="block text-sm text-teal hover:underline font-medium"
                    data-ocid="contact.phone3_link"
                  >
                    +91 99997 99935
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Mail className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Email</h4>
              <a
                href="mailto:edusupermart@gmail.com"
                className="text-sm text-teal hover:underline"
                data-ocid="contact.email_link"
              >
                edusupermart@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <MapPin className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Address</h4>
              <p className="text-sm text-muted-text leading-relaxed">
                389/9 Shivpuri,
                <br />
                Gurugram, Haryana
                <br />
                Pin Code — 122001
              </p>
            </div>
            <div className="bg-white rounded-xl border border-card-border p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Navigation className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">
                Get Directions
              </h4>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-teal hover:underline font-medium"
                data-ocid="contact.maps_link"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
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
