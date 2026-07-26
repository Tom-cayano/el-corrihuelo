"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Images: widest, most impressive shots first ─────── */
const SLIDES = [
  { src: "/images/hero-jardin.jpg",       alt: "Jardín y exteriores de El Corrihuelo" },
  { src: "/images/terraza-piscina.jpg",   alt: "Terraza y piscina de El Corrihuelo" },
  { src: "/images/detalle-piscina.jpg",   alt: "Piscina privada de El Corrihuelo" },
  { src: "/images/salon-decorado.jpg",    alt: "Salón de celebraciones decorado" },
  { src: "/images/flores-entrada.jpg",    alt: "Entrada de El Corrihuelo" },
];

/* Tiny golden laurel SVG ornament (inline so it can't be filtered) */
function Ornament() {
  return (
    <svg
      width="130" height="20"
      viewBox="0 0 130 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display:"block", margin:"0 auto" }}
    >
      {/* left line */}
      <line x1="0"  y1="10" x2="46" y2="10" stroke="#C9A96E" strokeWidth="0.8"/>
      {/* left leaf */}
      <path d="M48 10 C50 6.5,54 5,56 10 C54 15,50 13.5,48 10Z" fill="#C9A96E" opacity=".75"/>
      {/* centre leaf pair */}
      <path d="M57 10 C59 5.5,63.5 4,65 10 C63.5 16,59 14.5,57 10Z" fill="#C9A96E"/>
      <path d="M73 10 C71 5.5,66.5 4,65 10 C66.5 16,71 14.5,73 10Z" fill="#C9A96E"/>
      {/* right leaf */}
      <path d="M74 10 C76 6.5,80 5,82 10 C80 15,76 13.5,74 10Z" fill="#C9A96E" opacity=".75"/>
      {/* right line */}
      <line x1="84" y1="10" x2="130" y2="10" stroke="#C9A96E" strokeWidth="0.8"/>
    </svg>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 85, behavior:"smooth" });
    }
  };

  return (
    <section
      id="inicio"
      style={{
        position       : "relative",
        width          : "100%",
        height         : "100svh",
        minHeight      : "600px",
        overflow       : "hidden",
        background     : "#060606",
        display        : "flex",
        alignItems     : "center",
        justifyContent : "center",
      }}
    >
      {/* ════ BACKGROUND CAROUSEL ════ */}
      <div style={{ position:"absolute", inset:0, zIndex:0 }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={idx}
            initial={{ opacity:0, scale:1.06 }}
            animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0 }}
            transition={{
              opacity : { duration:1.8, ease:"easeInOut" },
              scale   : { duration:9,   ease:"linear" },
            }}
            style={{ position:"absolute", inset:0 }}
          >
            <Image
              src={SLIDES[idx].src}
              alt={SLIDES[idx].alt}
              fill
              priority={idx === 0}
              quality={93}
              style={{ objectFit:"cover", objectPosition:"center" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── DARK OVERLAY — exactly rgba(0,0,0,.45) ── */}
        <div style={{
          position   : "absolute",
          inset      : 0,
          background : "rgba(0,0,0,0.45)",
          zIndex     : 1,
        }}/>

        {/* ── gradient bottom for readability ── */}
        <div style={{
          position   : "absolute",
          bottom     : 0, left:0, right:0,
          height     : "38%",
          background : "linear-gradient(to bottom, transparent, rgba(0,0,0,0.62))",
          zIndex     : 2,
        }}/>
      </div>

      {/* ════ CONTENT ════ */}
      <div style={{
        position : "relative",
        zIndex   : 10,
        width    : "100%",
        padding  : "0 24px",
        display  : "flex",
        flexDirection  : "column",
        alignItems     : "center",
        justifyContent : "center",
        textAlign      : "center",
      }}>
        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1.1, delay:.45, ease:[.22,1,.36,1] }}
          style={{ maxWidth:"860px", display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}
        >

          {/* ── EYEBROW ── */}
          <p style={{
            color         : "#FFFFFF",
            fontWeight    : 500,
            letterSpacing : "8px",
            textTransform : "uppercase",
            fontSize      : "clamp(10px, 1.3vw, 13px)",
            fontFamily    : "Inter, sans-serif",
            margin        : "0 0 12px",
            lineHeight    : 1,
            /* never inherit any colour from outside */
            WebkitTextFillColor : "#FFFFFF",
          }}>
            Casa Vacacional y Celebraciones
          </p>

          {/* ── ORNAMENT ── */}
          <div style={{ marginBottom:"16px" }}>
            <Ornament/>
          </div>

          {/* ── H1 ── */}
          <h1 style={{
            color      : "#FFFFFF",
            fontFamily : "Cormorant Garamond, 'Playfair Display', Georgia, serif",
            fontSize   : "clamp(4rem, 12vw, 10.5rem)",
            fontWeight : 700,
            lineHeight : 0.92,
            letterSpacing : "-0.02em",
            margin     : "0 0 22px",
            textShadow : "0 4px 20px rgba(0,0,0,0.45)",
            WebkitTextFillColor : "#FFFFFF",
          }}>
            El Corrihuelo
          </h1>

          {/* ── SUBTITLE ── */}
          <p style={{
            color      : "#FFFFFF",
            fontFamily : "Inter, sans-serif",
            fontSize   : "clamp(14px, 1.8vw, 18px)",
            fontWeight : 300,
            lineHeight : 1.7,
            maxWidth   : "540px",
            margin     : "0 0 40px",
            textShadow : "0 2px 12px rgba(0,0,0,0.40)",
            WebkitTextFillColor : "#FFFFFF",
          }}>
            El lugar perfecto para disfrutar de la naturaleza, celebrar con tu familia y crear recuerdos inolvidables en un entorno exclusivo.
          </p>

          {/* ── BUTTONS ── */}
          <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", justifyContent:"center" }}>

            {/* PRIMARY — gold */}
            <a
              href="#reserva"
              onClick={(e) => { e.preventDefault(); scrollTo("#reserva"); }}
              style={{
                display       : "inline-block",
                background    : "#C9A96E",
                color         : "#111111",
                fontWeight    : 700,
                fontSize      : "13px",
                letterSpacing : "0.1em",
                textTransform : "uppercase",
                padding       : "16px 36px",
                borderRadius  : "9999px",
                textDecoration: "none",
                fontFamily    : "Inter, sans-serif",
                boxShadow     : "0 0 30px rgba(201,169,110,0.45), 0 4px 18px rgba(0,0,0,0.30)",
                transition    : "all .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background  = "#d8b87b";
                e.currentTarget.style.transform   = "translateY(-2px)";
                e.currentTarget.style.boxShadow   = "0 0 42px rgba(201,169,110,0.62), 0 6px 22px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background  = "#C9A96E";
                e.currentTarget.style.transform   = "translateY(0)";
                e.currentTarget.style.boxShadow   = "0 0 30px rgba(201,169,110,0.45), 0 4px 18px rgba(0,0,0,0.30)";
              }}
            >
              Reservar ahora
            </a>

            {/* SECONDARY — transparent white border */}
            <a
              href="#discover"
              onClick={(e) => { e.preventDefault(); scrollTo("#discover"); }}
              style={{
                display         : "inline-block",
                background      : "transparent",
                color           : "#FFFFFF",
                fontWeight      : 600,
                fontSize        : "13px",
                letterSpacing   : "0.1em",
                textTransform   : "uppercase",
                padding         : "16px 36px",
                borderRadius    : "9999px",
                textDecoration  : "none",
                fontFamily      : "Inter, sans-serif",
                border          : "1.5px solid rgba(255,255,255,0.72)",
                backdropFilter  : "blur(8px)",
                transition      : "all .3s",
                WebkitTextFillColor: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background   = "rgba(255,255,255,0.13)";
                e.currentTarget.style.borderColor  = "#ffffff";
                e.currentTarget.style.transform    = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background   = "transparent";
                e.currentTarget.style.borderColor  = "rgba(255,255,255,0.72)";
                e.currentTarget.style.transform    = "translateY(0)";
              }}
            >
              Descubrir instalaciones
            </a>
          </div>
        </motion.div>
      </div>

      {/* ════ SCROLL INDICATOR ════ */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:2, duration:1 }}
        style={{
          position      : "absolute",
          bottom        : "34px",
          left          : "50%",
          transform     : "translateX(-50%)",
          zIndex        : 10,
          display       : "flex",
          flexDirection : "column",
          alignItems    : "center",
          gap           : "8px",
        }}
      >
        <span style={{
          color        : "rgba(255,255,255,0.42)",
          fontSize     : "9px",
          letterSpacing: ".25em",
          textTransform: "uppercase",
          fontFamily   : "Inter, sans-serif",
          fontWeight   : 600,
        }}>
          Scroll
        </span>
        <div style={{ width:"1px", height:"46px", background:"rgba(255,255,255,0.14)", overflow:"hidden" }}>
          <motion.div
            animate={{ y:["-100%","100%"] }}
            transition={{ repeat:Infinity, duration:1.5, ease:"linear" }}
            style={{ width:"100%", height:"50%", background:"#C9A96E" }}
          />
        </div>
      </motion.div>

      {/* ════ CAROUSEL DOTS ════ */}
      <div style={{
        position : "absolute",
        bottom   : "34px",
        right    : "32px",
        zIndex   : 10,
        display  : "flex",
        gap      : "8px",
        alignItems:"center",
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Diapositiva ${i + 1}`}
            style={{
              width        : i === idx ? "22px" : "6px",
              height       : "6px",
              borderRadius : "9999px",
              background   : i === idx ? "#C9A96E" : "rgba(255,255,255,0.32)",
              border       : "none",
              cursor       : "pointer",
              padding      : 0,
              transition   : "all .4s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
