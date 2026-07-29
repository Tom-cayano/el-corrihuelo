"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  { src: "/images/real/real-52.webp",  alt: "Piscina privada al atardecer" },
  { src: "/images/real/real-16.webp",  alt: "Jardines preparados para ceremonia" },
  { src: "/images/real/real-40.webp",  alt: "Elaboración de paellas gigantes para eventos" },
  { src: "/images/real/real-54.webp",  alt: "Gran Salón principal decorado" },
  { src: "/images/real/real-41.webp",  alt: "Celebraciones con música en vivo y flamenco" },
  { src: "/images/real/real-1.webp",   alt: "Terraza exterior con mesas largas" },
  { src: "/images/real/real-58.webp",  alt: "Zona gourmet con aperitivos premium" },
  { src: "/images/real/real-17.webp",  alt: "Detalles decorativos en los jardines" },
  { src: "/images/real/real-53.webp",  alt: "Fiestas personalizadas con decoración" },
  { src: "/images/real/real-2.webp",   alt: "Zonas de ocio y mesas de ping pong" },
  { src: "/images/real/real-55.webp",  alt: "Espacios seguros para los más pequeños" },
  { src: "/images/real/real-59.webp",  alt: "Amplitud y confort en nuestros salones interiores" },
];

function Lightbox({
  index, onClose, onPrev, onNext, total
}: { index: number; onClose: () => void; onPrev: () => void; onNext: () => void; total: number }) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [handleKey]);

  const img = PHOTOS[index];
  const touchStart = useRef<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(3,3,3,0.97)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}
      onClick={onClose}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { diff > 0 ? onNext() : onPrev(); }
        touchStart.current = null;
      }}
    >
      {/* Close */}
      <button onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Cerrar galería" style={{
        position: "absolute", top: "20px", right: "20px",
        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "50%", width: "44px", height: "44px", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        backdropFilter: "blur(12px)", zIndex: 10,
        transition: "background .2s",
      }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.18)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
        <X size={18} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "min(92vw, 1280px)",
            maxHeight: "78vh",
            aspectRatio: "16/9",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <Image src={img.src} alt={img.alt} fill style={{ objectFit: "contain" }} quality={95} sizes="92vw" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <p style={{
        fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)",
        marginTop: "20px", fontStyle: "italic",
      }}>
        {img.alt}
      </p>

      {/* Prev / Next */}
      {[{ fn: onPrev, pos: "left", icon: <ChevronLeft size={22} />, label: "Anterior" },
        { fn: onNext, pos: "right", icon: <ChevronRight size={22} />, label: "Siguiente" }]
        .map(({ fn, pos, icon, label }) => (
          <button key={pos} onClick={(e) => { e.stopPropagation(); fn(); }} aria-label={label} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            [pos]: "clamp(10px, 3vw, 32px)",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: "52px", height: "52px", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            backdropFilter: "blur(12px)", zIndex: 10, transition: "background .2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
          >{icon}</button>
        ))}

      {/* Counter */}
      <div style={{
        position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)",
        fontFamily: "Inter, sans-serif", fontSize: "12px",
        color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em",
      }}>
        {index + 1} / {total}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const thumbTrack = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const touchStart = useRef<number | null>(null);

  const handleNext = useCallback(() => setCurrent((p) => (p + 1) % PHOTOS.length), []);
  const handlePrev = useCallback(() => setCurrent((p) => (p === 0 ? PHOTOS.length - 1 : p - 1)), []);

  // Keep active thumbnail in view
  useEffect(() => {
    const track = thumbTrack.current;
    if (!track) return;
    const thumb = track.children[current] as HTMLElement;
    if (thumb) {
      const offset = thumb.offsetLeft - track.clientWidth / 2 + thumb.clientWidth / 2;
      track.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [current]);

  const main = PHOTOS[current];

  return (
    <section id="galeria" ref={ref} style={{ background: "#0C0B09", padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 72px)" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Galería
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.08, margin: 0,
          }}>
            Espacios que <em style={{ fontStyle: "italic", color: "#C9A96E" }}>inspiran</em>
          </h2>
        </motion.div>

        {/* Master Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative", width: "100%",
            aspectRatio: "16/9", maxHeight: "76vh",
            borderRadius: "clamp(16px, 2vw, 24px)", overflow: "hidden",
            marginBottom: "clamp(16px, 2.5vw, 24px)", background: "#1a1a1a",
          }}
          onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const d = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(d) > 50) d > 0 ? handleNext() : handlePrev();
            touchStart.current = null;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={main.src} alt={main.alt} fill priority={current === 0}
                style={{ objectFit: "cover" }} sizes="100vw" quality={90}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)", pointerEvents: "none" }} />

          {/* Caption bottom-left */}
          <div style={{ position: "absolute", bottom: "clamp(20px, 3vw, 32px)", left: "clamp(20px, 3vw, 32px)", pointerEvents: "none" }}>
            <p style={{
              fontFamily: "Playfair Display, serif", fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "#fff",
              margin: 0, textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}>
              {main.alt}
            </p>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={() => setLightbox(true)}
            aria-label="Ver en pantalla completa"
            style={{
              position: "absolute", top: "clamp(16px, 2vw, 24px)", right: "clamp(16px, 2vw, 24px)",
              background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
              width: "46px", height: "46px", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all .3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.7)"; e.currentTarget.style.transform = "scale(1.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <Expand size={18} />
          </button>

          {/* Prev / Next on master */}
          <button onClick={handlePrev} aria-label="Anterior" style={{ position: "absolute", left: "clamp(12px, 2vw, 20px)", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%", width: "44px", height: "44px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all .3s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.65)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.35)"}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} aria-label="Siguiente" style={{ position: "absolute", right: "clamp(12px, 2vw, 20px)", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%", width: "44px", height: "44px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all .3s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.65)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.35)"}>
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Thumbnail Track */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div
            ref={thumbTrack}
            role="tablist"
            aria-label="Miniaturas de la galería"
            style={{
              display: "flex", gap: "clamp(8px, 1.5vw, 14px)",
              overflowX: "auto", paddingBottom: "8px",
              scrollbarWidth: "none",
            }}
          >
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
            {PHOTOS.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                onClick={() => setCurrent(i)}
                aria-label={`Ver: ${img.alt}`}
                style={{
                  flexShrink: 0, position: "relative",
                  width: "clamp(80px, 12vw, 148px)", aspectRatio: "16/9",
                  borderRadius: "10px", overflow: "hidden", padding: 0, cursor: "pointer",
                  border: i === current ? "2px solid #C9A96E" : "2px solid transparent",
                  opacity: i === current ? 1 : 0.38,
                  background: "#1a1a1a",
                  transition: "all .35s ease",
                }}
                onMouseEnter={(e) => { if (i !== current) e.currentTarget.style.opacity = "0.72"; }}
                onMouseLeave={(e) => { if (i !== current) e.currentTarget.style.opacity = "0.38"; }}
              >
                <Image src={img.src} alt={`Miniatura: ${img.alt}`} fill style={{ objectFit: "cover" }} sizes="148px" />
              </button>
            ))}
          </div>
        </motion.div>

      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox index={current} total={PHOTOS.length} onClose={() => setLightbox(false)} onPrev={handlePrev} onNext={handleNext} />
        )}
      </AnimatePresence>
    </section>
  );
}
