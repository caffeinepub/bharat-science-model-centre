import { Link } from "@tanstack/react-router";
import { Atom, Mail, MapPin, Phone } from "lucide-react";

const CATALOGUE_URL =
  "https://drive.google.com/drive/folders/1oOjwm1w3VdTmJSINb_k6HAhO0H4dw5F_?usp=drive_link";

const MAPS_URL =
  "https://google.com/maps/dir//BHARAT+SCIENCE+MODEL+CENTRE,+Near+Harish+Bakery+,Old,+Shivpuri+Road,+Old+Railway+Rd,+Shivpuri,+Sector+7,+Gurugram,+Haryana+122001,+India/@28.4784191,77.0219015,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d19d3c7264cdb:0xf027b68e794f04b8!2m2!1d77.017996!2d28.47104?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Desktop / Tablet: full footer */}
      <div className="hidden sm:block max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-3 gap-8 mb-10">
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
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/bharat.store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                data-ocid="footer.facebook_link"
              >
                <FacebookIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/bharatstore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors"
                data-ocid="footer.instagram_link"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-footer-text hover:text-white transition-colors"
                  data-ocid="footer.home_link"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={CATALOGUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-footer-text hover:text-white transition-colors"
                  data-ocid="footer.catalogue_link"
                >
                  Catalogue
                </a>
              </li>
              <li>
                <Link
                  to="/enquiry"
                  className="text-sm text-footer-text hover:text-white transition-colors"
                  data-ocid="footer.enquiry_link"
                >
                  Enquiry
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-sm text-footer-text hover:text-white transition-colors"
                  data-ocid="footer.admin_link"
                >
                  Admin
                </Link>
              </li>
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
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-teal" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  389/9 Shivpuri, Gurugram,
                  <br />
                  Haryana — 122001
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-footer-text">
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
        <p className="text-xs text-white/40 text-center mt-2">
          India's trusted educational supplies &amp; science lab equipment
          supplier — Gurugram, Haryana since 1993.
        </p>
      </div>
      <div className="sm:hidden px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center shrink-0">
              <Atom className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-xs leading-tight">
                Bharat Science Model Centre
              </p>
              <p className="text-[10px] text-footer-text">
                Est. 1993 · GST: 06APQPK9109P2Z2
              </p>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/bharat.store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
              data-ocid="footer.facebook_link_mobile"
            >
              <FacebookIcon className="w-3.5 h-3.5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/bharatstore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
              data-ocid="footer.instagram_link_mobile"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick contact row */}
        <div className="flex items-center gap-3 mb-3 text-xs text-footer-text">
          <a
            href="tel:+919999899973"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>+91 99998 99973</span>
          </a>
          <span className="text-white/20">·</span>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <MapPin className="w-3 h-3 text-teal" />
            <span>Gurugram, HR</span>
          </a>
        </div>

        {/* Links row */}
        <div className="flex items-center gap-3 text-xs text-footer-text mb-3">
          <Link
            to="/"
            className="hover:text-white transition-colors"
            data-ocid="footer.home_link_mobile"
          >
            Home
          </Link>
          <span className="text-white/20">·</span>
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            data-ocid="footer.catalogue_link_mobile"
          >
            Catalogue
          </a>
          <span className="text-white/20">·</span>
          <Link
            to="/enquiry"
            className="hover:text-white transition-colors"
            data-ocid="footer.enquiry_link_mobile"
          >
            Enquiry
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="border-t border-white/10 pt-3 text-[10px] text-footer-text text-center">
          &copy; {new Date().getFullYear()} Bharat Science Model Centre
        </div>
      </div>
    </footer>
  );
}
