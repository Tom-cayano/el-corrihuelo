"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "María José T.",
    event: "Cumpleaños 40",
    avatar: "M",
    rating: 5,
    text: "La mejor celebración de mi vida. Alquilamos la finca para un fin de semana y todo fue espectacular. La exclusividad del lugar, la barbacoa, la piscina, el sonido... repetiremos sin duda el año que viene.",
    date: "Hace 2 meses",
  },
  {
    name: "Carlos Martínez",
    event: "Reunión Familiar",
    avatar: "C",
    rating: 5,
    text: "Un lugar increíble para juntar a toda la familia. Los niños se lo pasaron en grande en el parque infantil y nosotros pudimos relajarnos tranquilamente sabiendo que estaban seguros. El entorno es precioso. 10/10.",
    date: "Hace 1 mes",
  },
  {
    name: "Elena G.",
    event: "Despedida de Soltera",
    avatar: "E",
    rating: 5,
    text: "La exclusividad del lugar es lo mejor. No compartes espacio con nadie. El karaoke dio muchísimo juego y los salones son súper amplios. Trato excelente y cercano por parte del propietario. Volveríamos sin dudarlo.",
    date: "Hace 3 semanas",
  },
  {
    name: "Javier S.",
    event: "Evento de Empresa",
    avatar: "J",
    rating: 5,
    text: "Buscábamos un espacio diferente para hacer un team building y fue todo un acierto. Instalaciones impecables, entorno tranquilo y todas las facilidades para organizar el catering y las actividades.",
    date: "Hace 4 meses",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleNext = useCallback(() => setCurrent((p) => (p + 1) % REVIEWS.length), []);
  const handlePrev = useCallback(() => setCurrent((p) => (p === 0 ? REVIEWS.length - 1 : p - 1)), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(handleNext, 6500);
    return () => clearInterval(t);
  }, [paused, handleNext]);

  const r = REVIEWS[current];

  return (
    <section id="testimonios" ref={ref} style={{ background: "#F9F6F1", padding: "clamp(80px, 12vw, 140px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 84px)" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Lo que dicen
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.08, margin: 0,
          }}>
            Clientes que ya <em style={{ fontStyle: "italic", color: "#A8854A" }}>lo vivieron</em>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -30, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "100%", maxWidth: "820px", margin: "0 auto",
              }}
            >
              <div style={{
                background: "#fff",
                borderRadius: "clamp(20px, 3vw, 36px)",
                padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)",
                border: "1px solid rgba(212,196,176,0.3)",
                boxShadow: "0 16px 56px rgba(28,26,23,0.06)",
                position: "relative", textAlign: "center",
              }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "5px", justifyContent: "center", marginBottom: "36px" }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={20} fill="#C9A96E" color="#C9A96E" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(1.1rem, 2.8vw, 1.65rem)",
                  color: "#1C1A17", lineHeight: 1.6, fontStyle: "italic",
                  margin: "0 0 clamp(28px, 4vw, 44px)",
                  quotes: "none",
                }}>
                  &quot;{r.text}&quot;
                </blockquote>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                  <div style={{
                    width: "50px", height: "50px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #C9A96E 0%, #A8854A 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Playfair Display, serif", fontSize: "1.3rem",
                    fontWeight: 700, color: "#fff",
                  }}>
                    {r.avatar}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1C1A17", margin: "0 0 3px" }}>
                      {r.name}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#C9A96E", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                      {r.event}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "clamp(28px, 4vw, 48px)" }}>
          <button onClick={handlePrev} aria-label="Testimonio anterior" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", border: "1px solid rgba(212,196,176,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#C9A96E"; }}>
            <ChevronLeft size={20} />
          </button>

          {/* Dot indicators */}
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(false); setCurrent(i); }}
              aria-label={`Ir al testimonio ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px", height: "8px", borderRadius: "9999px",
                background: i === current ? "#C9A96E" : "rgba(212,196,176,0.7)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          ))}

          <button onClick={handleNext} aria-label="Testimonio siguiente" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", border: "1px solid rgba(212,196,176,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#C9A96E"; }}>
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
