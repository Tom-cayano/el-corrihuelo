"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Instalaciones", href: "#instalaciones" },
  { name: "Galería", href: "#galeria" },
  { name: "Eventos", href: "#eventos" },
  { name: "Precios", href: "#reserva" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navBg = scrolled
    ? "rgba(8, 8, 8, 0.96)"
    : "rgba(0, 0, 0, 0.45)";

  const navShadow = scrolled
    ? "0 4px 40px rgba(0,0,0,0.4)"
    : "none";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: scrolled ? "75px" : "90px",
          transition: "all 0.4s ease",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          backgroundColor: navBg,
          borderBottom: "1px solid rgba(201,169,110,0.15)",
          boxShadow: navShadow,
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 32px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── LOGO ── */}
          <a
            href="#inicio"
            onClick={(e) => scrollTo(e, "#inicio")}
            aria-label="El Corrihuelo — Inicio"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            {/*
              El logo oficial PNG tiene fondo blanco.
              Lo mostramos dentro de una píldora blanca
              para que contraste perfectamente sobre el header oscuro.
            */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.96)",
                borderRadius: "12px",
                padding: "6px 14px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.25)",
                transition: "all 0.4s ease",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-oficial.png"
                alt="El Corrihuelo — Casa Vacacional y Celebraciones"
                style={{
                  height: scrolled ? "54px" : "66px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                  transition: "height 0.4s ease",
                }}
              />
            </span>
          </a>

          {/* ── DESKTOP MENU ── */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "40px" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                  position: "relative",
                  paddingBottom: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C9A96E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.88)";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ── RESERVA BUTTON (Desktop) ── */}
          <div className="hidden lg:flex">
            <a
              href="#reserva"
              onClick={(e) => scrollTo(e, "#reserva")}
              style={{
                display: "inline-block",
                backgroundColor: "#C9A96E",
                color: "#111111",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: "9999px",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 0 24px rgba(201,169,110,0.4), 0 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d8b87b";
                e.currentTarget.style.boxShadow = "0 0 36px rgba(201,169,110,0.6), 0 4px 16px rgba(0,0,0,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A96E";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(201,169,110,0.4), 0 4px 12px rgba(0,0,0,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Reserva tu fecha
            </a>
          </div>

          {/* ── HAMBURGER (Mobile) ── */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              padding: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE FULL SCREEN MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              backgroundColor: "rgba(6,6,6,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              padding: "80px 24px 48px",
            }}
          >
            {/* Logo inside mobile menu */}
            <div style={{ marginBottom: "48px" }}>
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgba(255,255,255,0.96)",
                  borderRadius: "12px",
                  padding: "8px 20px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-oficial.png"
                  alt="El Corrihuelo"
                  style={{ height: "60px", width: "auto", display: "block" }}
                />
              </span>
            </div>

            {/* Nav Links */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", width: "100%" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    color: "#ffffff",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontFamily: "Cormorant Garamond, serif",
                    letterSpacing: "0.05em",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35 }}
                style={{
                  width: "100%",
                  paddingTop: "28px",
                  marginTop: "8px",
                  borderTop: "1px solid rgba(201,169,110,0.25)",
                }}
              >
                <a
                  href="#reserva"
                  onClick={(e) => scrollTo(e, "#reserva")}
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#C9A96E",
                    color: "#111111",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "18px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "0 0 28px rgba(201,169,110,0.45)",
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
