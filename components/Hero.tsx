"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 82, behavior: "smooth" });
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 900], [0, 320]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "640px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080706",
      }}
    >
      {/* ── Parallax Background Image ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-60px",
          y: imgY,
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/real/real-52.webp"
          alt="Vista de la terraza y piscina privada de El Corrihuelo en Murcia"
          fill
          priority
          quality={95}
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          sizes="100vw"
        />
      </motion.div>

      {/* ── Multi-layer Dark Overlays ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0.65) 100%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.25) 100%)" }} />

      {/* ── Content ── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 clamp(20px, 5vw, 60px)",
          width: "100%",
          maxWidth: "960px",
          marginTop: "clamp(60px, 10vw, 100px)",
          opacity: contentOpacity,
        }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            display: "block",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#C9A96E",
            marginBottom: "clamp(16px, 3vw, 28px)",
          }}
        >
          Cabezo de la Plata · Murcia
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2.6rem, 7.5vw, 6rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            margin: "0 0 clamp(16px, 3vw, 28px)",
            textShadow: "0 8px 40px rgba(0,0,0,0.6)",
          }}
        >
          El espacio perfecto<br />
          para <em style={{ fontStyle: "italic", color: "#C9A96E", fontWeight: 500 }}>celebrar la vida</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "rgba(255,255,255,0.82)",
            fontWeight: 300,
            lineHeight: 1.65,
            maxWidth: "580px",
            margin: "0 auto clamp(36px, 6vw, 56px)",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          Reserva la finca completa en exclusividad. Piscina privada, salones, barbacoa, karaoke y jardines de ensueño.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          <div className="hero-btns" style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", justifyContent: "center" }}>
            <style>{`
              @media(min-width:540px){ .hero-btns { flex-direction: row !important; gap: 20px !important; } }
            `}</style>

            <a
              href="#reserva"
              onClick={(e) => scrollToSection(e, "#reserva")}
              id="hero-cta-reservar"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "#C9A96E", color: "#111",
                padding: "18px 44px", borderRadius: "9999px",
                fontFamily: "Inter, sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)",
                fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                textDecoration: "none", minWidth: "180px",
                boxShadow: "0 0 32px rgba(201,169,110,0.35)",
                transition: "all .35s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,169,110,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(201,169,110,0.35)"; }}
            >
              Reservar
            </a>

            <a
              href="#instalaciones"
              onClick={(e) => scrollToSection(e, "#instalaciones")}
              id="hero-cta-instalaciones"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.22)", color: "#fff",
                padding: "17px 44px", borderRadius: "9999px",
                fontFamily: "Inter, sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)",
                fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                textDecoration: "none", minWidth: "180px",
                transition: "all .35s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.16)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Ver Instalaciones
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.8 }}
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "clamp(24px, 5vw, 40px)", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}>Descubrir</span>
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
