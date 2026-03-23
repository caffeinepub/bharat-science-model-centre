import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Building2,
  Eye,
  FlaskConical,
  Phone,
  ShieldCheck,
  Star,
  Target,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const ABOUT_HIGHLIGHTS = [
  {
    icon: Building2,
    label: "Established",
    value: "1993",
  },
  {
    icon: Users,
    label: "Schools Served",
    value: "500+",
  },
  {
    icon: ShieldCheck,
    label: "GST Registered",
    value: "Verified",
  },
  {
    icon: FlaskConical,
    label: "Product Categories",
    value: "28+",
  },
];

export default function AboutPage() {
  useSEO({
    title:
      "About Bharat Science Model Centre | Lab Equipment Supplier Since 1993 | Gurugram",
    description:
      "Learn about BSMC — India's trusted educational supplies and science lab equipment supplier since 1993. Serving 840+ schools and institutions across India from Gurugram, Haryana.",
  });
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="bg-navy py-16 md:py-24 relative overflow-hidden"
        data-ocid="about.page"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(28,142,138,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Bharat Science Model Centre — Educational Supplies &amp; Lab
              Equipment Supplier, Gurugram
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
              Learn about our story, team, and purpose.
            </p>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mt-5 text-sm text-white/50">
              <Link to="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/80">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Bharat Science Model Centre */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                About Bharat Science
                <span className="block text-teal">Model Centre</span>
              </h2>
              <p className="text-muted-text leading-relaxed mb-4">
                Established in 1993, Bharat Science Model Centre (BSMC) is one
                of Gurugram&apos;s most trusted names in science education
                supplies. For over three decades, we have been the go-to
                destination for schools, colleges, research institutions, and
                individual students across Haryana and the entire NCR region.
              </p>
              <p className="text-muted-text leading-relaxed mb-4">
                We offer a comprehensive range of laboratory equipment,
                chemicals, glassware, microscopes, charts, models, and
                stationery — everything a modern science lab requires, available
                under one roof. Our catalogue spans 28+ product categories
                sourced from India&apos;s most reputable scientific brands.
              </p>
              <p className="text-muted-text leading-relaxed mb-8">
                Our team of experienced professionals provides personalized
                guidance to help institutions select the right equipment for
                their needs and budget. We take pride in delivering quality,
                reliability, and exceptional service with every order.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full px-6"
                  onClick={() => navigate({ to: "/" })}
                  data-ocid="about.contact_button"
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-white rounded-full px-6"
                  onClick={() => navigate({ to: "/enquiry" })}
                  data-ocid="about.enquiry_button"
                >
                  Send Enquiry
                </Button>
              </div>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >
              {ABOUT_HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="bg-section-alt rounded-2xl p-6 flex flex-col items-center text-center border border-card-border hover:border-teal/40 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center mb-3">
                    <h.icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {h.value}
                  </p>
                  <p className="text-sm text-muted-text mt-1">{h.label}</p>
                </div>
              ))}

              {/* GST card spanning full width */}
              <div className="col-span-2 bg-navy rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wide">
                    GST Registration No.
                  </p>
                  <p className="text-white font-bold tracking-wider">
                    06APQPK9109P2Z2
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story Behind BSMC */}
      <section id="our-story" className="py-16 md:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Story Behind BSMC
            </h2>
            <div className="inline-flex items-center gap-2 bg-teal text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md mb-6">
              <Star className="w-4 h-4 fill-white" />
              30+ Years of Excellence · Since 1993
            </div>
            <p className="text-muted-text leading-relaxed max-w-2xl mx-auto mb-4">
              What began as a small endeavour in 1993 has grown into one of
              Gurugram&apos;s most respected science education suppliers. With
              over 30 years of dedication, Bharat Science Model Centre has
              served hundreds of schools, colleges, and institutions across
              India, delivering quality products and trusted guidance.
            </p>
            <p className="text-muted-text leading-relaxed max-w-2xl mx-auto">
              Today, under the continued guidance of our founder Mr. Vinod
              Kumar, the business is expanding with the new leadership of Jatin
              Pahuja — bringing fresh vision, energy, and a commitment to
              reaching every corner of India.
            </p>
          </motion.div>

          {/* Profile cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Vinod Kumar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white rounded-2xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col items-center text-center"
              data-ocid="about.founder_card"
            >
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-4 shadow-md">
                <User className="w-10 h-10 text-teal" />
              </div>
              <span className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Founder &amp; Director
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Mr. Vinod Kumar
              </h3>
              <p className="text-muted-text text-sm leading-relaxed mb-4">
                Visionary leader who established BSMC in 1993 and built three
                decades of trust in science education.
              </p>
              <a
                href="tel:+919810572634"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline"
                data-ocid="about.founder_phone"
              >
                <Phone className="w-4 h-4" />
                +91 98105 72634
              </a>
            </motion.div>

            {/* Jatin Pahuja */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-white rounded-2xl border border-card-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col items-center text-center"
              data-ocid="about.md_card"
            >
              <div className="w-20 h-20 rounded-full bg-teal flex items-center justify-center mb-4 shadow-md">
                <User className="w-10 h-10 text-white" />
              </div>
              <span className="inline-block bg-navy/10 text-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Managing Director
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Jatin Pahuja
              </h3>
              <p className="text-muted-text text-sm leading-relaxed mb-4">
                Carrying forward the legacy under Mr. Vinod Kumar&apos;s
                guidance, expanding BSMC&apos;s vision and reach across India.
              </p>
              <a
                href="tel:+919999799935"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline"
                data-ocid="about.md_phone"
              >
                <Phone className="w-4 h-4" />
                +91 99997 99935
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mission &amp; Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-navy rounded-2xl p-8 flex flex-col"
              data-ocid="about.mission_card"
            >
              <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide quality science education supplies — from basic lab
                kits to advanced analytical equipment — to every school and
                institution across India, making quality science accessible and
                affordable.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-teal rounded-2xl p-8 flex flex-col"
              data-ocid="about.vision_card"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/85 leading-relaxed">
                To become India&apos;s most trusted and comprehensive science
                education partner, expanding our reach to every corner of the
                country and empowering the next generation of scientists and
                innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
