import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useRouterState } from "@tanstack/react-router";
import { Atom, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/#categories" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Enquiry", to: "/enquiry" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const queryClient = useQueryClient();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to.replace(/#.*/, ""));
  };

  const handleAuth = async () => {
    if (identity) {
      await clear();
      queryClient.clear();
    } else {
      await login();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-card-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.brand_button"
        >
          <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center">
            <Atom className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-navy text-sm leading-tight">BSMC</p>
            <p className="text-xs text-muted-text font-medium">
              Bharat Science Model Centre
            </p>
          </div>
          <span className="font-bold text-navy text-base sm:hidden">BSMC</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to.includes("#") ? "/" : link.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive(link.to)
                  ? "text-teal"
                  : "text-foreground hover:text-teal"
              }`}
              data-ocid={`nav.${link.label.toLowerCase()}_link`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Auth button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleAuth}
            disabled={loginStatus === "logging-in"}
            className="border-teal text-teal hover:bg-teal hover:text-white transition-colors"
            data-ocid="nav.login_button"
          >
            <LogIn className="w-4 h-4 mr-1.5" />
            {loginStatus === "logging-in"
              ? "Logging in..."
              : identity
                ? "Logout"
                : "Admin Login"}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-section-alt transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.menu_toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-card-border px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to.includes("#") ? "/" : link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(link.to)
                  ? "text-teal bg-teal-light"
                  : "text-foreground hover:bg-section-alt"
              }`}
              onClick={() => setMenuOpen(false)}
              data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              handleAuth();
              setMenuOpen(false);
            }}
            disabled={loginStatus === "logging-in"}
            className="border-teal text-teal hover:bg-teal hover:text-white mt-2 w-fit"
            data-ocid="nav.mobile_login_button"
          >
            <LogIn className="w-4 h-4 mr-1.5" />
            {identity ? "Logout" : "Admin Login"}
          </Button>
        </div>
      )}
    </header>
  );
}
