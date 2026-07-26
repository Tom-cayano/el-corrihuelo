"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

/* ── Data ── */
const PHOTOS = [
  { src: "/images/terraza-piscina.jpg",   alt: "Terraza con piscina privada",     cat: "Instalaciones" },
  { src: "/images/hero-salon.jpg",        alt: "Gran salón decorado",             cat: "Instalaciones" },
  { src: "/images/mesa-gourmet.jpg",      alt: "Mesa gourmet para celebración",   cat: "Gastronomía"   },
  { src: "/images/baile-noche.jpg",       alt: "Fiesta y baile nocturno",         cat: "Celebraciones" },
  { src: "/images/paella-grupo.jpg",      alt: "Paella con grupo de amigos",      cat: "Gastronomía"   },
  { src: "/images/grupo-flamenca.jpg",    alt: "Celebración flamenca",            cat: "Celebraciones" },
  { src: "/images/guitarrista.jpg",       alt: "Guitarrista en actuación",        cat: "Entretenimiento" },
  { src: "/images/baile-exterior.jpg",    alt: "Baile en exterior",               cat: "Celebraciones" },
  { src: "/images/salon-decorado.jpg",    alt: "Salón decorado con guirnaldas",   cat: "Instalaciones" },
  { src: "/images/flores-salon.jpg",      alt: "Detalles florales",               cat: "Detalles"      },
  { src: "/images/grupo-exterior.jpg",    alt: "Grupo en el exterior",            cat: "Celebraciones" },
  { src: "/images/paella2.jpg",           alt: "Paella tradicional murciana",     cat: "Gastronomía"   },
  { src: "/images/baile-dia.jpg",         alt: "Baile y fiesta de día",           cat: "Celebraciones" },
  { src: "/images/flores-entrada.jpg",    alt: "Entrada con flores",              cat: "Detalles"      },
  { src: "/images/evento-grupo.jpg",      alt: "Evento privado de grupo",         cat: "Celebraciones" },
  { src: "/images/hero-jardin.jpg",       alt: "Jardines de la finca",            cat: "Instalaciones" },
];

const CATS = ["Todas", "Instalaciones", "Celebraciones", "Gastronomía", "Entretenimiento", "Detalles"];

/* ── Lightbox ── */
function Lightbox({ images, current, onClose, onPrev, onNext }: {
  images: typeof PHOTOS; current: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
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

  const img = images[current];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(4,4,4,0.97)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "clamp(16px, 4vw, 48px)",
      }}
      onClick={onClose}
    >
      {/* Controls */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Cerrar"
        style={{
          position: "absolute", top: "20px", right: "20px",
          background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%", width: "48px", height: "48px",
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", backdropFilter: "blur(12px)", transition: "all .3s",
        }}
      >
        <X size={20} />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", width: "100%",
          maxWidth: "min(90vw, 1000px)",
          maxHeight: "70vh",
          aspectRatio: "3/2",
          borderRadius: "16px", overflow: "hidden",
        }}
      >
        <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} quality={90} />
        {/* Caption */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)",
          padding: "24px 20px 16px",
        }}>
          <p style={{ color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400 }}>{img.alt}</p>
          <p style={{ color: "#C9A96E", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>{img.cat}</p>
        </div>
      </motion.div>

      {/* Prev / Next */}
      {[{ fn: onPrev, pos: "left", icon: <ChevronLeft size={22} />, label: "Anterior" },
        { fn: onNext, pos: "right", icon: <ChevronRight size={22} />, label: "Siguiente" }].map(({ fn, pos, icon, label }) => (
        <button
          key={pos}
          onClick={(e) => { e.stopPropagation(); fn(); }}
          aria-label={label}
          style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            [pos]: "clamp(12px, 3vw, 32px)",
            background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: "52px", height: "52px",
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", backdropFilter: "blur(12px)", transition: "all .3s",
          }}
        >
          {icon}
        </button>
      ))}

      {/* Thumbnails */}
      <div style={{
        display: "flex", gap: "8px", marginTop: "20px",
        overflowX: "auto", maxWidth: "min(90vw, 960px)",
        padding: "4px 0",
        scrollbarWidth: "none",
      }}>
        {images.map((im, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); }}
            style={{
              flexShrink: 0, width: "64px", height: "44px",
              borderRadius: "6px", overflow: "hidden", position: "relative",
              border: i === current ? "2px solid #C9A96E" : "2px solid transparent",
              transition: "border .25s", cursor: "pointer", background: "none", padding: 0,
              opacity: i === current ? 1 : 0.5,
            }}
          >
            <Image src={im.src} alt={im.alt} fill style={{ objectFit: "cover" }} sizes="64px" />
          </button>
        ))}
      </div>

      {/* Counter */}
      <p style={{ color: "rgba(255,255,255,0.50)", fontFamily: "Inter, sans-serif", fontSize: "13px", marginTop: "12px" }}>
        {current + 1} / {images.length}
      </p>
    </motion.div>
  );
}

/* ── Main Gallery ── */
export default function Gallery() {
  const [cat, setCat] = useState("Todas");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = cat === "Todas" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  const openAt = useCallback((i: number) => setLightboxIdx(i), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const goPrev = useCallback(() => setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);
  const goNext = useCallback(() => setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length)), [filtered.length]);

  /* Touch swipe in lightbox */
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStart.current = null;
  };

  return (
    <section id="galeria" style={{ background: "#0E0D0B", padding: "80px 0 96px" }}>
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        style={{ textAlign: "center", marginBottom: "48px", padding: "0 20px" }}
      >
        <span style={{ display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "14px" }}>
          Galería
        </span>
        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 12px" }}>
          Momentos que inspiran
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.55)", fontWeight: 300, maxWidth: "480px", margin: "0 auto 36px" }}>
          Cada imagen cuenta una historia. La tuya está por escribirse.
        </p>

        {/* Category filters */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", padding: "0 20px" }}>
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                padding: "9px 18px", borderRadius: "9999px", cursor: "pointer",
                fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600,
                letterSpacing: "0.08em", border: "none",
                background: cat === c ? "#C9A96E" : "rgba(255,255,255,0.07)",
                color: cat === c ? "#111" : "rgba(255,255,255,0.60)",
                transition: "all .3s",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 48px)" }}>
        <div style={{ columns: "2", columnGap: "12px" }} className="gallery-masonry">
          <style>{`
            @media(min-width:640px)  { .gallery-masonry { columns: 3 !important; } }
            @media(min-width:1024px) { .gallery-masonry { columns: 4 !important; } }
          `}</style>
          {filtered.map((img, i) => (
            <motion.div
              key={`${cat}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              style={{ breakInside: "avoid", marginBottom: "12px", display: "block" }}
            >
              <div
                onClick={() => openAt(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openAt(i)}
                aria-label={`Abrir: ${img.alt}`}
                style={{ position: "relative", borderRadius: "12px", overflow: "hidden", cursor: "zoom-in", display: "block" }}
                className="gallery-thumb-wrap"
              >
                <style>{`
                  .gallery-thumb-wrap:hover .gallery-thumb-overlay { opacity: 1 !important; }
                  .gallery-thumb-wrap:hover img { transform: scale(1.04); }
                `}</style>
                <div style={{ position: "relative", width: "100%", paddingBottom: i % 3 === 0 ? "125%" : "75%", background: "#1a1a1a" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    style={{ objectFit: "cover", transition: "transform .5s ease" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="gallery-thumb-overlay"
                    style={{
                      position: "absolute", inset: 0, opacity: 0,
                      background: "rgba(0,0,0,0.45)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "opacity .3s",
                    }}
                  >
                    <div style={{
                      background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "50%", width: "48px", height: "48px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff",
                    }}>
                      <Expand size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Lightbox
              images={filtered}
              current={lightboxIdx}
              onClose={closeLightbox}
              onPrev={goPrev}
              onNext={goNext}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
