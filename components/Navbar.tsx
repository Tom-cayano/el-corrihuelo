"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nosotros",      href: "#discover" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Galería",       href: "#galeria" },
  { label: "Eventos",       href: "#eventos" },
  { label: "Precios",       href: "#reserva" },
  { label: "FAQ",           href: "#faq" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  if (href === "#inicio") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 82, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          height: scrolled ? "70px" : "88px",
          transition: "height .4s ease, background .4s ease, box-shadow .4s ease",
          background: scrolled
            ? "rgba(12, 11, 10, 0.96)"
            : "rgba(0, 0, 0, 0.38)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.18)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.50)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)",
          height: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "24px",
        }}>
          {/* ── LOGO (Overhanging style) ── */}
          <div style={{ flexShrink: 0, width: "clamp(220px, 32vw, 360px)", position: "relative", alignSelf: "flex-start" }}>
            <a
              href="#inicio"
              onClick={(e) => smoothScroll(e, "#inicio")}
              style={{
                position: "absolute",
                top: "12px",
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                // scale down slightly when scrolled so it doesn't take too much screen space? 
                // The user requested: "mismo tamaño actual"
              }}
              aria-label="Inicio"
            >
              <img
                src="/images/logo-house.png"
                alt="Ilustración El Corrihuelo"
                style={{
                  width: "clamp(180px, 25vw, 220px)",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.2))",
                }}
              />
              <div
                style={{
                  width: "clamp(220px, 32vw, 360px)",
                  height: "clamp(45px, 6vw, 70px)",
                  background: "linear-gradient(to bottom, #FFF8E6 0%, #E6C77A 50%, #B98C3F 100%)",
                  WebkitMaskImage: "url(/images/logo-text-cropped.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/images/logo-text-cropped.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  filter: "drop-shadow(0 0 1px #E6C77A) drop-shadow(0 2px 3px rgba(0,0,0,0.2)) contrast(1.25)",
                }}
                role="img"
              />
            </a>
          </div>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "clamp(20px, 2.5vw, 36px)", width: "100%", justifyContent: "flex-start" }} aria-label="Menú principal">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "12.5px", fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color .25s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex" style={{ flexShrink: 0 }}>
            <a
              href="#reserva"
              onClick={(e) => smoothScroll(e, "#reserva")}
              style={{
                display: "inline-flex", alignItems: "center",
                background: "#C9A96E", color: "#111",
                fontWeight: 700, fontSize: "12px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "12px 26px", borderRadius: "9999px",
                textDecoration: "none", fontFamily: "Inter, sans-serif",
                boxShadow: "0 0 20px rgba(201,169,110,0.38)",
                transition: "all .3s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Reserva
            </a>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "8px", display: "flex" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 190,
              background: "rgba(6,5,4,0.98)",
              backdropFilter: "blur(24px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "100px 32px 60px",
              gap: "0",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", width: "100%", marginTop: "20px" }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => { setMenuOpen(false); smoothScroll(e, href); }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: "block",
                    width: "100%", textAlign: "center",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "clamp(1.4rem, 5vw, 1.8rem)",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 400,
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "color .25s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  {label}
                </motion.a>
              ))}

              <motion.a
                href="#reserva"
                onClick={(e) => { setMenuOpen(false); smoothScroll(e, "#reserva"); }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                style={{
                  display: "block", textAlign: "center", marginTop: "32px",
                  background: "#C9A96E", color: "#111",
                  fontWeight: 700, fontSize: "14px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "18px 48px", borderRadius: "9999px",
                  textDecoration: "none", fontFamily: "Inter, sans-serif",
                  boxShadow: "0 0 28px rgba(201,169,110,0.40)",
                }}
              >
                Reserva tu fecha
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
