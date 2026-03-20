import { Link } from "@tanstack/react-router";
import { Atom, Mail, MapPin, Phone } from "lucide-react";

const categories = [
  "Biology Models",
  "Chemistry Lab",
  "Physics Lab",
  "Microscopes",
  "Human Anatomy",
  "Science Kits",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Bharat Science</p>
                <p className="text-xs text-footer-text">Model Centre</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-footer-text">
              India's trusted science education partner. Established 1993.
            </p>
            <p className="text-xs text-footer-text mt-2">
              GST: 06APQPK9109P2Z2
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Catalogue", to: "/catalogue" },
                { label: "Enquiry", to: "/enquiry" },
                { label: "Admin", to: "/admin" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-footer-text hover:text-white transition-colors"
                    data-ocid={`footer.${l.label.toLowerCase()}_link`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-footer-text">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-footer-text">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+919999899973"
                    className="hover:text-white transition-colors block"
                  >
                    +91 99998 99973
                  </a>
                  <a
                    href="tel:+919810572634"
                    className="hover:text-white transition-colors block"
                  >
                    +91 98105 72634
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-footer-text">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:edusupermart@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  edusupermart@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-footer-text">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Gurugram, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-footer-text">
          <span>
            &copy; {new Date().getFullYear()} Bharat Science Model Centre. All
            rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
