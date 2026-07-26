"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  
  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Smooth scroll for internal links
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 82, behavior: "smooth" });
  };

  return (
    <section 
      id="inicio" 
      ref={ref} 
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a"
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{
          position: "absolute",
          inset: -50, // Slight overflow to prevent edges showing on parallax
          y,
          opacity: 1 // Base opacity is handled by the wrapper if needed
        }}
      >
        <Image
          src="/images/terraza-piscina.jpg"
          alt="Vista exclusiva de El Corrihuelo"
          fill
          priority
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        
        {/* Cinematic Dark Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)" }} />
      </motion.div>

      {/* Content - Cinematic Reveal */}
      <motion.div 
        style={{ 
          position: "relative", 
          zIndex: 10, 
          textAlign: "center",
          padding: "0 24px",
          width: "100%",
          maxWidth: "1000px",
          marginTop: "40px", // Offset for navbar
          opacity
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "24px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            La exclusividad de lo privado
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 400, color: "#fff", lineHeight: 1.05,
            margin: "0 0 24px",
            letterSpacing: "-0.01em",
            textShadow: "0 10px 30px rgba(0,0,0,0.6)"
          }}
        >
          El espacio perfecto para <br/>
          <em style={{ fontStyle: "italic", color: "#C9A96E", fontWeight: 500 }}>celebrar la vida</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2.5vw, 19px)",
            color: "rgba(255,255,255,0.85)", fontWeight: 300, lineHeight: 1.6,
            maxWidth: "600px", margin: "0 auto 48px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          Reserva la finca en exclusividad y disfruta de instalaciones de alto nivel para tu próximo evento, rodeado de naturaleza.
        </motion.p>

        {/* Buttons aligned perfectly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          style={{
            display: "flex", flexDirection: "column", gap: "16px",
            alignItems: "center", justifyContent: "center"
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .hero-buttons { flex-direction: row !important; gap: 24px !important; }
            }
          `}</style>
          <div className="hero-buttons" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", justifyContent: "center", maxWidth: "500px", margin: "0 auto" }}>
            <a
              href="#reserva"
              onClick={(e) => scrollTo(e, "#reserva")}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                background: "#C9A96E", color: "#111",
                padding: "18px 40px", borderRadius: "9999px", textDecoration: "none",
                fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                boxShadow: "0 0 30px rgba(201,169,110,0.3)", transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
                width: "100%"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(201,169,110,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(201,169,110,0.3)"; }}
            >
              Reservar
            </a>
            
            <a
              href="#instalaciones"
              onClick={(e) => scrollTo(e, "#instalaciones")}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
                padding: "18px 40px", borderRadius: "9999px", textDecoration: "none",
                fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
                width: "100%"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Ver Instalaciones
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
          color: "rgba(255,255,255,0.5)", zIndex: 10
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Descubrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </section>
  );
}
