"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Instalaciones", href: "#instalaciones" },
  { name: "Galería", href: "#galeria" },
  { name: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.97)"
            : "rgba(255, 255, 255, 0.85)",
          borderBottom: "1px solid rgba(180, 150, 90, 0.2)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.12)"
            : "0 2px 15px rgba(0,0,0,0.06)",
          paddingTop: scrolled ? "8px" : "12px",
          paddingBottom: scrolled ? "8px" : "12px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>

          {/* MOBILE */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#2C3A2A" }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              aria-label="Ir a Inicio"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-oficial.png"
                alt="El Corrihuelo — Casa Vacacional y Celebraciones"
                style={{
                  height: "60px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>

            <div style={{ width: "44px" }} />
          </div>

          {/* DESKTOP */}
          <div style={{ display: "none", alignItems: "center", justifyContent: "space-between" }} className="hidden lg:flex">

            {/* LOGO */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              aria-label="Ir a Inicio"
              style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-oficial.png"
                alt="El Corrihuelo — Casa Vacacional y Celebraciones"
                style={{
                  height: scrolled ? "72px" : "88px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  transition: "height 0.5s ease",
                }}
              />
            </a>

            {/* NAV LINKS */}
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "#2C3A2A",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#2C3A2A")}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* RESERVA BUTTON */}
            <a
              href="#reserva"
              onClick={(e) => scrollToSection(e, "#reserva")}
              style={{
                backgroundColor: "#C9A96E",
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.05em",
                padding: "14px 32px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 0 20px rgba(201, 169, 110, 0.35)",
                transition: "all 0.3s ease",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d4b47a";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 169, 110, 0.55)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A96E";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(201, 169, 110, 0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Reserva tu fecha
            </a>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "80px",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingBottom: "48px",
            }}
            className="lg:hidden"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2rem",
                    color: "#2C3A2A",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#2C3A2A")}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ width: "100%", marginTop: "16px", paddingTop: "24px", borderTop: "1px solid rgba(201, 169, 110, 0.3)" }}
              >
                <a
                  href="#reserva"
                  onClick={(e) => scrollToSection(e, "#reserva")}
                  style={{
                    display: "block",
                    width: "100%",
                    backgroundColor: "#C9A96E",
                    color: "#1a1a1a",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "18px",
                    padding: "18px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    boxShadow: "0 0 25px rgba(201, 169, 110, 0.4)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Reserva tu fecha
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
