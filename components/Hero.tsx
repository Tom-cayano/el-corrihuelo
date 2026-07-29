"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 1000], [0, 250]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 40]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      ref={ref}
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "700px",
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
          src="/images/real/real-54.webp"
          alt="El Gran Salón preparado de El Corrihuelo, finca de celebraciones premium en Murcia"
          fill
          priority
          quality={95}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="100vw"
        />
      </motion.div>

      {/* ── Soft Dark Overlay ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)" }} />

      {/* ── Content ── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 clamp(20px, 5vw, 60px)",
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        {/* LOGO COMPUESTO PREMIUM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginBottom: "clamp(32px, 5vw, 48px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Nueva Ilustración: Grabado a mano de Finca y Olivo */}
          <div
            style={{
              width: "clamp(120px, 18vw, 160px)",
              height: "clamp(120px, 18vw, 160px)",
              background: "linear-gradient(135deg, #FFFBF0 0%, #E5D0A1 60%, #C9A96E 100%)",
              WebkitMaskImage: "url(/images/logo-illustration.png)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/images/logo-illustration.png)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.65))",
            }}
            aria-hidden="true"
          />

          {/* Tipografía Original Restaurada */}
          <div
            style={{
              width: "clamp(220px, 32vw, 360px)",
              height: "clamp(45px, 6vw, 70px)",
              background: "linear-gradient(90deg, #FFFBF0 0%, #E5D0A1 50%, #C9A96E 100%)",
              WebkitMaskImage: "url(/images/logo-text-cropped.png)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/images/logo-text-cropped.png)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              // El drop-shadow con el mismo color del degradado añade un ~5% de grosor a las letras
              // El contrast(1.2) aumenta la nitidez
              filter: "drop-shadow(0 0 1px #E5D0A1) drop-shadow(0 4px 12px rgba(0,0,0,0.65)) contrast(1.2)",
            }}
            aria-label="El Corrihuelo - Casa Vacacional & Celebraciones"
            role="img"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            margin: "0 0 clamp(16px, 3vw, 24px)",
            textShadow: "0 4px 24px rgba(0,0,0,0.6)",
          }}
        >
          El lujo de celebrar <br />
          <em style={{ fontStyle: "italic", color: "#C9A96E" }}>en plena naturaleza</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto clamp(40px, 6vw, 60px)",
            letterSpacing: "0.05em",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          Reserva la finca completa en exclusividad para tu evento privado.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
        >
          <a
            href="#reserva"
            onClick={(e) => scrollToSection(e, "#reserva")}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#C9A96E", color: "#111",
              padding: "16px 48px", borderRadius: "2px",
              fontFamily: "Inter, sans-serif", fontSize: "12px",
              fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", minWidth: "200px",
              transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#111"; }}
          >
            Reservar
          </a>

          <a
            href="#instalaciones"
            onClick={(e) => scrollToSection(e, "#instalaciones")}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "16px 48px", borderRadius: "2px",
              fontFamily: "Inter, sans-serif", fontSize: "12px",
              fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", minWidth: "200px",
              transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
          >
            Ver Instalaciones
          </a>
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
