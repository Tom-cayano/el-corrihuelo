"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Data ── */
const PHOTOS = [
  { src: "/images/hero-salon.jpg", alt: "Gran salón decorado para evento" },
  { src: "/images/terraza-piscina.jpg", alt: "Terraza exterior con piscina" },
  { src: "/images/paella-grupo.jpg", alt: "Preparación de paella al aire libre" },
  { src: "/images/baile-noche.jpg", alt: "Fiesta y baile nocturno" },
  { src: "/images/mesa-gourmet.jpg", alt: "Mesa gourmet preparada" },
  { src: "/images/guitarrista.jpg", alt: "Actuación en directo" },
  { src: "/images/hero-jardin.jpg", alt: "Jardines y zonas verdes" },
  { src: "/images/salon-decorado.jpg", alt: "Salón principal con iluminación cálida" },
  { src: "/images/grupo-exterior.jpg", alt: "Grupo disfrutando en exteriores" },
  { src: "/images/baile-dia.jpg", alt: "Fiesta y música durante el día" }
];

/* ── Fullscreen Lightbox ── */
function Lightbox({ current, onClose, onPrev, onNext }: { current: number, onClose: () => void, onPrev: () => void, onNext: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  const img = PHOTOS[current];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(4,4,4,0.97)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "clamp(16px, 4vw, 48px)",
      }}
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Cerrar"
        style={{
          position: "absolute", top: "24px", right: "24px",
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "50%", width: "48px", height: "48px", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          backdropFilter: "blur(12px)", zIndex: 10,
        }}
      >
        <X size={20} />
      </button>

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", width: "100%", maxWidth: "min(90vw, 1200px)",
          maxHeight: "80vh", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden",
        }}
      >
        <Image src={img.src} alt={img.alt} fill style={{ objectFit: "contain" }} quality={100} />
      </motion.div>

      {[{ fn: onPrev, pos: "left", icon: <ChevronLeft size={24} /> },
        { fn: onNext, pos: "right", icon: <ChevronRight size={24} /> }].map(({ fn, pos, icon }) => (
        <button
          key={pos} onClick={(e) => { e.stopPropagation(); fn(); }}
          style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)", [pos]: "clamp(12px, 3vw, 32px)",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: "56px", height: "56px", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            backdropFilter: "blur(12px)", zIndex: 10,
          }}
        >
          {icon}
        </button>
      ))}
      <div style={{ position: "absolute", bottom: "32px", color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "13px" }}>
        {current + 1} / {PHOTOS.length}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const thumbScrollRef = useRef<HTMLDivElement>(null);

  const mainImg = PHOTOS[current];

  // Auto scroll thumbnails to keep active in view
  useEffect(() => {
    if (thumbScrollRef.current) {
      const activeThumb = thumbScrollRef.current.children[current] as HTMLElement;
      if (activeThumb) {
        const scrollLeft = activeThumb.offsetLeft - (thumbScrollRef.current.clientWidth / 2) + (activeThumb.clientWidth / 2);
        thumbScrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [current]);

  /* Touch swipe on main image */
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
    touchStart.current = null;
  };

  const handleNext = () => setCurrent((p) => (p + 1) % PHOTOS.length);
  const handlePrev = () => setCurrent((p) => (p === 0 ? PHOTOS.length - 1 : p - 1));

  return (
    <section id="galeria" ref={ref} style={{ background: "#0a0a0a", padding: "120px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Galería
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.1,
            margin: "0 0 20px",
          }}>
            Espacios que <em style={{ fontStyle: "italic", color: "#C9A96E" }}>inspiran</em>
          </h2>
        </motion.div>

        {/* Master Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", width: "100%", aspectRatio: "16/9", maxHeight: "75vh", borderRadius: "24px", overflow: "hidden", marginBottom: "24px", background: "#111" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image src={mainImg.src} alt={mainImg.alt} fill priority style={{ objectFit: "cover" }} sizes="100vw" quality={90} />
            </motion.div>
          </AnimatePresence>

          {/* Overlays and Controls on Master */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)", pointerEvents: "none" }} />
          
          <button
            onClick={() => setLightboxOpen(true)}
            aria-label="Ver a pantalla completa"
            style={{
              position: "absolute", top: "24px", right: "24px",
              background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: "48px", height: "48px", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              backdropFilter: "blur(12px)", transition: "all .3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.7)"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <Expand size={20} />
          </button>

          <div style={{ position: "absolute", bottom: "32px", left: "32px" }}>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "#fff", margin: 0, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
              {mainImg.alt}
            </p>
          </div>
        </motion.div>

        {/* Thumbnails Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            ref={thumbScrollRef}
            style={{ 
              display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "16px",
              scrollbarWidth: "none", msOverflowStyle: "none" // Hide scrollbar for clean look
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {PHOTOS.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ver foto ${i + 1}`}
                style={{
                  flexShrink: 0, position: "relative",
                  width: "clamp(100px, 15vw, 160px)", aspectRatio: "16/9",
                  borderRadius: "12px", overflow: "hidden",
                  border: i === current ? "2px solid #C9A96E" : "2px solid transparent",
                  padding: 0, cursor: "pointer", background: "#111",
                  transition: "all .3s ease",
                  opacity: i === current ? 1 : 0.4
                }}
                onMouseEnter={(e) => { if (i !== current) e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { if (i !== current) e.currentTarget.style.opacity = "0.4"; }}
              >
                <Image src={img.src} alt={`Miniatura ${i+1}`} fill style={{ objectFit: "cover" }} sizes="160px" />
              </button>
            ))}
          </div>
        </motion.div>

      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox current={current} onClose={() => setLightboxOpen(false)} onPrev={handlePrev} onNext={handleNext} />
        )}
      </AnimatePresence>
    </section>
  );
}
