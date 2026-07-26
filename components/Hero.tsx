"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/images/terraza-piscina.jpg",
  "/images/hero-jardin.jpg",
  "/images/detalle-piscina.jpg",
  "/images/hero-salon.jpg",
  "/images/salon-decorado.jpg",
  "/images/flores-entrada.jpg",
];

const scrollToSection = (href: string) => {
  if (href === "#reserva") {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  } else {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#080808",
      }}
    >
      {/* ── BACKGROUND CAROUSEL ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.8, ease: "easeInOut" },
              scale: { duration: 9, ease: "linear" },
            }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="El Corrihuelo — Instalaciones"
              fill
              priority={currentIndex === 0}
              quality={92}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── DARK OVERLAY exactamente rgba(0,0,0,.45) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1,
          }}
        />

        {/* ── GRADIENT BOTTOM (para legibilidad) ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.65))",
            zIndex: 2,
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: "860px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* EYEBROW — CASA VACACIONAL Y CELEBRACIONES */}
          <span
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontSize: "clamp(11px, 1.5vw, 14px)",
              fontFamily: "Inter, sans-serif",
              marginBottom: "20px",
              display: "block",
              opacity: 1,
            }}
          >
            Casa Vacacional y Celebraciones
          </span>

          {/* TITLE — EL CORRIHUELO */}
          <h1
            style={{
              color: "#FFFFFF",
              fontFamily: "Cormorant Garamond, 'Playfair Display', serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              textShadow: "0 4px 20px rgba(0,0,0,0.45)",
            }}
          >
            El Corrihuelo
          </h1>

          {/* SUBTITLE */}
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "580px",
              margin: "0 0 44px",
              opacity: 0.92,
              textShadow: "0 2px 10px rgba(0,0,0,0.35)",
            }}
          >
            El espacio perfecto para celebrar con quienes más quieres.
            Piscina privada, naturaleza y exclusividad total en Cabezo de la Plata, Murcia.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* PRIMARY — DORADO */}
            <a
              href="#reserva"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#reserva");
              }}
              style={{
                display: "inline-block",
                backgroundColor: "#C9A96E",
                color: "#111111",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "17px 40px",
                borderRadius: "9999px",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 0 32px rgba(201,169,110,0.45), 0 4px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d8b87b";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 44px rgba(201,169,110,0.6), 0 6px 24px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A96E";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(201,169,110,0.45), 0 4px 20px rgba(0,0,0,0.3)";
              }}
            >
              Reservar ahora
            </a>

            {/* SECONDARY — BORDE BLANCO */}
            <a
              href="#descubre"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#descubre");
              }}
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "17px 40px",
                borderRadius: "9999px",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                border: "1.5px solid rgba(255,255,255,0.7)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Descubrir instalaciones
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            backgroundColor: "rgba(255,255,255,0.15)",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            style={{ width: "100%", height: "50%", backgroundColor: "#C9A96E" }}
          />
        </div>
      </motion.div>

      {/* ── CAROUSEL DOTS ── */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "32px",
          zIndex: 10,
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Imagen ${i + 1}`}
            style={{
              width: i === currentIndex ? "24px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              backgroundColor: i === currentIndex ? "#C9A96E" : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
