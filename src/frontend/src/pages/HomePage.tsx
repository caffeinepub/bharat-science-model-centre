import BrandsMarquee from "@/components/BrandsMarquee";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Atom,
  Award,
  BadgeCheck,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const CATEGORIES = [
  {
    name: "Biology Models",
    img: "/assets/generated/cat-biology.dim_400x300.jpg",
    desc: "Detailed cell models, DNA structures, and biological specimens for life science education",
  },
  {
    name: "Chemistry Lab Equipment",
    img: "/assets/generated/cat-chemistry.dim_400x300.jpg",
    desc: "Complete range of chemistry apparatus, reagents, and lab consumables",
  },
  {
    name: "Physics Lab Equipment",
    img: "/assets/generated/cat-physics.dim_400x300.jpg",
    desc: "Mechanics, electricity, optics and thermodynamics experimental setups",
  },
  {
    name: "Microscopes",
    img: "/assets/generated/cat-microscopes.dim_400x300.jpg",
    desc: "Compound, stereo, and digital microscopes for all academic levels",
  },
  {
    name: "Dissection Kits",
    img: "/assets/generated/cat-dissection.dim_400x300.jpg",
    desc: "Complete dissection instruments and preserved specimens for biology labs",
  },
  {
    name: "Glassware & Apparatus",
    img: "/assets/generated/cat-glassware.dim_400x300.jpg",
    desc: "Borosilicate glassware, flasks, beakers, and precision lab apparatus",
  },
  {
    name: "Electronics & Electrical",
    img: "/assets/generated/cat-electronics.dim_400x300.jpg",
    desc: "Circuit boards, breadboards, meters, and electrical experiment kits",
  },
  {
    name: "Earth Science Models",
    img: "/assets/generated/cat-earth-science.dim_400x300.jpg",
    desc: "Globes, geological models, and earth structure demonstration sets",
  },
  {
    name: "Astronomy Models",
    img: "/assets/generated/cat-astronomy.dim_400x300.jpg",
    desc: "Solar system models, telescopes, and celestial demonstration tools",
  },
  {
    name: "Mathematics Models",
    img: "/assets/generated/cat-mathematics.dim_400x300.jpg",
    desc: "3D geometric shapes, abacus, and mathematical demonstration tools",
  },
  {
    name: "Environmental Science",
    img: "/assets/generated/cat-environmental.dim_400x300.jpg",
    desc: "Ecology kits, water/soil testing equipment, and weather instruments",
  },
  {
    name: "Human Anatomy Models",
    img: "/assets/generated/cat-anatomy.dim_400x300.jpg",
    desc: "Detailed torso, organ, skeletal, and brain models for medical education",
  },
  {
    name: "Botanical Models",
    img: "/assets/generated/cat-botany.dim_400x300.jpg",
    desc: "Plant cell models, flower dissection sets, and root system displays",
  },
  {
    name: "Zoology Models",
    img: "/assets/generated/cat-zoology.dim_400x300.jpg",
    desc: "Animal specimens, insect collections, and zoological demonstration models",
  },
  {
    name: "Charts & Diagrams",
    img: "/assets/generated/cat-charts.dim_400x300.jpg",
    desc: "High-quality laminated science charts for biology, chemistry, and physics",
  },
  {
    name: "Educational Kits",
    img: "/assets/generated/cat-edu-kits.dim_400x300.jpg",
    desc: "All-in-one activity kits for hands-on science learning at all levels",
  },
  {
    name: "Safety Equipment",
    img: "/assets/generated/cat-safety.dim_400x300.jpg",
    desc: "Lab safety goggles, gloves, aprons, fire blankets, and first aid kits",
  },
  {
    name: "Measuring Instruments",
    img: "/assets/generated/cat-measuring.dim_400x300.jpg",
    desc: "Digital balances, thermometers, vernier calipers, and precision meters",
  },
  {
    name: "Optical Equipment",
    img: "/assets/generated/cat-optical.dim_400x300.jpg",
    desc: "Lenses, prisms, optical benches, and light experiment apparatus",
  },
  {
    name: "Geological Specimens",
    img: "/assets/generated/cat-geology.dim_400x300.jpg",
    desc: "Rock samples, mineral specimens, crystal sets, and fossil collections",
  },
  {
    name: "Science Kits & Experiments",
    img: "/assets/generated/cat-science-kits.dim_400x300.jpg",
    desc: "Ready-to-use experiment kits for chemistry, robotics, and STEM learning",
  },
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
        className="relative overflow-hidden min-h-[560px] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #1F2F44 0%, #1a3a50 60%, #1C8E8A 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(28,142,138,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                <Atom className="w-3.5 h-3.5" />
                Established 1993 · GST: 06APQPK9109P2Z2
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                India&apos;s Trusted
                <span
                  className="block"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Science Education
                </span>
                <span
                  className="block"
                  style={{ color: "rgba(28,202,196,0.95)" }}
                >
                  Partner
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                Supplying quality science models, lab equipment, educational
                kits, and teaching aids to schools and colleges across India
                since 1993.
              </p>
              <div className="flex flex-wrap gap-4">
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

      {/* Stats bar */}
      <div className="bg-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "1993", label: "Established" },
              { value: "21+", label: "Product Categories" },
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
                  <Link
                    to="/enquiry"
                    className="text-xs font-semibold text-teal hover:text-teal-hover transition-colors"
                    data-ocid={`categories.view_button.${i + 1}`}
                  >
                    View Category →
                  </Link>
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
              <Link to="/catalogue">
                <Button
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full"
                  data-ocid="home.catalogue_button"
                >
                  View Catalogues
                </Button>
              </Link>
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
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-card-border p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Phone</h4>
              <div className="space-y-1">
                <a
                  href="tel:+919999899973"
                  className="block text-sm text-teal hover:underline"
                  data-ocid="contact.phone1_link"
                >
                  +91 99998 99973
                </a>
                <a
                  href="tel:+919810572634"
                  className="block text-sm text-teal hover:underline"
                  data-ocid="contact.phone2_link"
                >
                  +91 98105 72634
                </a>
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
              <p className="text-sm text-muted-text">
                Gurugram, Haryana, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
