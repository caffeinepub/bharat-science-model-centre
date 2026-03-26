import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  IndianRupee,
  MapPin,
  Megaphone,
  Package,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Strong Market Demand",
    desc: "Educational institutions continuously require science models, lab equipment, and teaching aids — a market that never stops growing.",
  },
  {
    icon: Award,
    title: "30+ Years of Industry Experience",
    desc: "Established in 1993, we bring trust, reliability, and proven expertise that our distribution partners can leverage.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    desc: "From school-level kits to advanced lab equipment — 28+ categories and thousands of products under one roof.",
  },
  {
    icon: IndianRupee,
    title: "Attractive Margins",
    desc: "Competitive pricing and profitable distribution opportunities designed to grow your business sustainably.",
  },
  {
    icon: MapPin,
    title: "Pan-India Network",
    desc: "Join a growing network of distributors serving schools and institutions across all states of India.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Get product catalogues, samples, and promotional materials to help you sell better and faster.",
  },
];

const IDEAL_PROFILE = [
  "Local market reach in the education sector",
  "Existing network of schools, colleges, or institutions",
  "Passion for education and science",
  "Warehouse or storage facility available",
  "Dedicated sales team or ability to build one",
];

const STEPS = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Fill out our enquiry form with your details, business background, and target region.",
  },
  {
    num: "02",
    title: "Review & Contact",
    desc: "Our team reviews your application and contacts you within 48 hours to discuss the opportunity.",
  },
  {
    num: "03",
    title: "Onboard & Launch",
    desc: "Get onboarding, product training, and initial samples to kickstart your distribution business.",
  },
];

export default function DistributorPage() {
  useSEO({
    title: "Become a Distributor | Bharat Science Model Centre Lab Equipment",
    description:
      "Join BSMC's distributor network for science lab equipment in India. High margins, 7800+ products, and 30+ years brand trust. Apply today.",
    canonical: "https://bharatsciencemodel.in/distributor",
  });
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-navy min-h-[480px] flex items-center"
        data-ocid="distributor.page"
      >
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(28,142,138,0.18) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(28,142,138,0.08) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-teal/15 text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-teal/30">
                <Users className="w-3.5 h-3.5" />
                Become a Distributor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Partner With Us —
              <span className="block text-teal mt-1">
                Become an Authorised Distributor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              At Bharat Science Model Centre, we are expanding our network and
              looking for dedicated distributors across India to help deliver
              quality educational and laboratory products to every corner of the
              country. If you have strong local market reach and a passion for
              education, we invite you to grow with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/enquiry">
                <Button
                  size="lg"
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full px-8"
                  data-ocid="distributor.apply_button"
                >
                  Apply Now
                </Button>
              </Link>
              <a href="tel:+919999899973">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/15 rounded-full px-8 bg-transparent"
                  data-ocid="distributor.call_button"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Become Our Distributor */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
              Why Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Become Our Distributor?
            </h2>
            <p className="text-muted-text max-w-xl mx-auto">
              Join a 30+ year legacy of science education excellence and build a
              sustainable, profitable business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-section-alt rounded-2xl border border-card-border p-7 hover:border-teal/40 hover:shadow-card-hover transition-all duration-200 group"
                data-ocid={`distributor.benefit_card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <b.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
                Eligibility
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Who Can Apply?
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                We are looking for motivated business partners who understand
                their local market and are committed to promoting quality
                science education. If you match the profile below, we would love
                to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {IDEAL_PROFILE.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 bg-white/6 rounded-xl px-5 py-4 border border-white/10 hover:border-teal/40 transition-colors"
                  data-ocid={`distributor.profile_item.${i + 1}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <p className="text-white/85 text-sm leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-text max-w-xl mx-auto">
              Getting started as a BSMC distributor is straightforward. Here's
              the three-step path.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-teal/25"
              aria-hidden="true"
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-2xl border border-card-border p-8 text-center hover:shadow-card-hover transition-shadow"
                data-ocid={`distributor.step_card.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-teal text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(28,142,138,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/15 mb-6">
              <Users className="w-8 h-8 text-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward building a profitable, purpose-driven
              distribution business with Bharat Science Model Centre — trusted
              since 1993.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/enquiry">
                <Button
                  size="lg"
                  className="bg-teal hover:bg-teal-hover text-white font-semibold rounded-full px-10"
                  data-ocid="distributor.cta_apply_button"
                >
                  Apply Now
                </Button>
              </Link>
              <a href="tel:+919999899973">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/15 rounded-full px-10 bg-transparent"
                  data-ocid="distributor.cta_call_button"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact strip */}
      <div className="bg-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium">
            <a
              href="tel:+919999899973"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
              data-ocid="distributor.contact_phone1_link"
            >
              <Phone className="w-4 h-4" />
              +91 99998 99973
            </a>
            <span className="hidden sm:block opacity-40">|</span>
            <a
              href="tel:+919810572634"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
              data-ocid="distributor.contact_phone2_link"
            >
              <Phone className="w-4 h-4" />
              +91 98105 72634
            </a>
            <span className="hidden sm:block opacity-40">|</span>
            <a
              href="https://wa.me/919999899973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
              data-ocid="distributor.whatsapp_link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
