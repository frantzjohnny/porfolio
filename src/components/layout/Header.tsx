"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Processus" },
];

const mobileLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/process", label: "Processus" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");
  const pathname = usePathname();

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]/50"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">
            {/* Logo */}
            <Link
              href="/"
              className="text-[#080B12] font-bold text-lg lg:text-xl tracking-tight hover:opacity-75 transition-opacity"
            >
              Johnny F T Rene.
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#080B12] font-semibold"
                      : "text-[#6F737A] hover:text-[#080B12]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Menu button */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 h-[44px] px-[18px] bg-[#080B12] text-white text-[13px] font-medium rounded-full hover:bg-[#1a1f2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>Discutons ensemble</span>
                <span className="text-white/60">→</span>
              </Link>

              {/* Circular menu button (44px) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="w-[44px] h-[44px] rounded-full border border-[#D9DDE2] bg-white flex items-center justify-center hover:bg-[#F3F4F6] hover:border-[#080B12] transition-all cursor-pointer shadow-sm flex-shrink-0"
              >
                {menuOpen ? (
                  <X size={18} className="text-[#080B12]" />
                ) : (
                  <Menu size={18} className="text-[#080B12]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="flex flex-col h-full container-custom pt-24 pb-12">
              {/* Nav links */}
              <nav className="flex flex-col flex-1 justify-center">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-3xl sm:text-5xl font-bold text-[#080B12] hover:text-[#737373] py-4 border-b border-[#E5E7EB] transition-colors tracking-tight min-h-[56px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social links */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-[#E5E7EB]">
                {[
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/yourphonenumber",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/yourprofile",
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/yourprofile",
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com/yourprofile",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#737373] hover:text-[#080B12] transition-colors min-h-[44px] flex items-center"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
