"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-nosotros", label: "Nosotros" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
  { href: "#incluye", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll si el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(250,248,244,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(28,26,23,0.05)" : "1px solid transparent",
          padding: scrolled ? "0.75rem 0" : "1.5rem 0",
        }}
        role="navigation"
        aria-label="Menú principal"
      >
        <div className="container-max flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="relative z-50 flex items-center gap-3 group"
            aria-label="Ir a Inicio"
          >
            <div className={`transition-colors duration-300 w-32 md:w-40 h-10 relative ${scrolled ? "text-dark" : "text-white"}`}>
              <Image 
                src="/images/logo-corrihuelo.svg"
                alt="El Corrihuelo Logo"
                fill
                priority
                className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.filter((l) => l.href !== "#inicio").map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    scrolled ? "text-dark" : "text-white"
                  }`}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    textShadow: !scrolled ? "0 2px 10px rgba(0,0,0,0.5)" : "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(e, "#reserva");
              }}
              className="btn-primary"
              style={{ padding: "0.6rem 1.5rem", borderRadius: "2rem" }}
            >
              Reserva
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden relative z-50 p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-dark" />
            ) : (
              <Menu size={28} className={scrolled ? "text-dark" : "text-white"} style={!scrolled ? { filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" } : {}} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl text-dark"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-dark/10"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(e, "#reserva");
                  }}
                  className="btn-primary w-full justify-center text-lg py-4"
                  style={{ borderRadius: "1rem" }}
                >
                  Contactar ahora
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
