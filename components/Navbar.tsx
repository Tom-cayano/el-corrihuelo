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
  if (href === "#inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.querySelector(href);
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── styles ──────────────────────────────────────────── */
  const NAV_BG   = scrolled ? "rgba(5,5,5,0.97)"  : "rgba(0,0,0,0.52)";
  const NAV_H    = scrolled ? "72px"               : "90px";
  const BLUR     = "blur(22px)";
  const BORDER   = "1px solid rgba(201,169,110,0.14)";
  const SHADOW   = scrolled ? "0 6px 36px rgba(0,0,0,0.45)" : "none";

  const NAV_LINK_STYLE: React.CSSProperties = {
    color          : "rgba(255,255,255,0.88)",
    fontSize       : "13px",
    fontWeight     : 500,
    fontFamily     : "Inter, sans-serif",
    letterSpacing  : "0.07em",
    textTransform  : "uppercase",
    textDecoration : "none",
    transition     : "color .25s",
    padding        : "4px 0",
  };

  const GOLD_BTN: React.CSSProperties = {
    display        : "inline-block",
    background     : "#C9A96E",
    color          : "#111",
    fontWeight     : 700,
    fontSize       : "13px",
    fontFamily     : "Inter, sans-serif",
    letterSpacing  : "0.09em",
    textTransform  : "uppercase",
    textDecoration : "none",
    padding        : "13px 28px",
    borderRadius   : "9999px",
    boxShadow      : "0 0 22px rgba(201,169,110,0.40)",
    transition     : "all .3s",
    whiteSpace     : "nowrap",
  };

  /* ─── render ───────────────────────────────────────────── */
  return (
    <>
      {/* ════════════════ NAVBAR ════════════════ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: .7, ease: [.22,1,.36,1] }}
        style={{
          position       : "fixed",
          top            : 0,
          left           : 0,
          right          : 0,
          zIndex         : 200,
          height         : NAV_H,
          background     : NAV_BG,
          backdropFilter : BLUR,
          WebkitBackdropFilter: BLUR,
          borderBottom   : BORDER,
          boxShadow      : SHADOW,
          transition     : "height .4s ease, background .4s ease, box-shadow .4s ease",
        }}
      >
        <div style={{
          maxWidth       : "1440px",
          margin         : "0 auto",
          padding        : "0 40px",
          height         : "100%",
          display        : "flex",
          alignItems     : "center",
          justifyContent : "space-between",
          gap            : "24px",
        }}>

          {/* ── LOGO ── */}
          <a
            href="#inicio"
            onClick={(e) => smoothScroll(e, "#inicio")}
            aria-label="El Corrihuelo — Inicio"
            style={{ flexShrink: 0, textDecoration: "none", display:"flex", alignItems:"center" }}
          >
            <span style={{
              display         : "inline-flex",
              alignItems      : "center",
              background      : "rgba(255,255,255,0.95)",
              borderRadius    : "10px",
              padding         : "5px 12px",
              boxShadow       : "0 2px 20px rgba(0,0,0,0.30)",
              transition      : "all .4s",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-oficial.png"
                alt="El Corrihuelo — Casa Vacacional y Celebraciones"
                style={{
                  height         : scrolled ? "52px" : "64px",
                  width          : "auto",
                  display        : "block",
                  objectFit      : "contain",
                  transition     : "height .4s",
                }}
              />
            </span>
          </a>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex" style={{ alignItems:"center", gap:"32px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                style={NAV_LINK_STYLE}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── RESERVA ── */}
          <div className="hidden lg:flex">
            <a
              href="#reserva"
              onClick={(e) => smoothScroll(e, "#reserva")}
              style={GOLD_BTN}
              onMouseEnter={(e) => {
                e.currentTarget.style.background  = "#d8b87b";
                e.currentTarget.style.boxShadow   = "0 0 36px rgba(201,169,110,0.60)";
                e.currentTarget.style.transform   = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background  = "#C9A96E";
                e.currentTarget.style.boxShadow   = "0 0 22px rgba(201,169,110,0.40)";
                e.currentTarget.style.transform   = "translateY(0)";
              }}
            >
              Reserva
            </a>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            style={{ background:"none", border:"none", cursor:"pointer", color:"#fff", padding:"8px", display:"flex" }}
          >
            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </motion.nav>

      {/* ════════════════ MOBILE MENU ════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:.28 }}
            style={{
              position       : "fixed",
              inset          : 0,
              zIndex         : 190,
              background     : "rgba(4,4,4,0.97)",
              backdropFilter : "blur(24px)",
              display        : "flex",
              flexDirection  : "column",
              alignItems     : "center",
              justifyContent : "center",
              gap            : "0",
              padding        : "90px 24px 48px",
            }}
          >
            {/* Logo inside mobile */}
            <div style={{ marginBottom:"40px" }}>
              <span style={{
                display      : "inline-flex",
                background   : "rgba(255,255,255,0.96)",
                borderRadius : "10px",
                padding      : "7px 16px",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo-oficial.png" alt="El Corrihuelo" style={{ height:"58px", width:"auto" }}/>
              </span>
            </div>

            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => { setMenuOpen(false); smoothScroll(e, href); }}
                initial={{ opacity:0, y:22 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: i * .07 }}
                style={{
                  color          : "#fff",
                  fontSize       : "1.6rem",
                  fontFamily     : "Cormorant Garamond, serif",
                  textDecoration : "none",
                  padding        : "10px 0",
                  transition     : "color .25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color="#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color="#fff")}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="#reserva"
              onClick={(e) => { setMenuOpen(false); smoothScroll(e, "#reserva"); }}
              initial={{ opacity:0, y:22 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:.45 }}
              style={{
                ...GOLD_BTN,
                marginTop  : "32px",
                padding    : "16px 48px",
                fontSize   : "15px",
                textAlign  : "center",
              }}
            >
              Reserva tu fecha
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
