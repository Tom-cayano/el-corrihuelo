"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "María José T.",
    event: "Cumpleaños 40",
    text: "La mejor celebración de mi vida. Alquilamos la finca para un fin de semana y todo fue espectacular. La exclusividad del lugar, la barbacoa, la piscina, el sonido... Repetiremos sin duda el año que viene.",
    date: "Hace 2 meses",
  },
  {
    id: 2,
    name: "Carlos Martínez",
    event: "Reunión Familiar",
    text: "Un lugar increíble para juntar a toda la familia. Los niños se lo pasaron en grande en el parque infantil y nosotros pudimos relajarnos tranquilamente sabiendo que estaban seguros. 10/10.",
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Elena G.",
    event: "Despedida",
    text: "La exclusividad del lugar es lo mejor. No compartes espacio con nadie. El karaoke dio muchísimo juego y los salones son súper amplios. Trato excelente y cercano por parte del propietario.",
    date: "Hace 3 semanas",
  },
  {
    id: 4,
    name: "Javier S.",
    event: "Evento de Empresa",
    text: "Buscábamos un espacio diferente para hacer un team building y fue todo un acierto. Instalaciones impecables, entorno tranquilo y todas las facilidades para organizar el catering.",
    date: "Hace 4 meses",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  };

  const review = REVIEWS[current];

  return (
    <section id="testimonios" ref={ref} style={{ background: "#FAF8F4", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Prueba Social
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.1,
            margin: "0",
          }}>
            Lo que dicen <em style={{ fontStyle: "italic", color: "#A8854A" }}>nuestros clientes</em>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div style={{ position: "relative", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "100%", maxWidth: "800px", margin: "0 auto", position: "relative" }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <div style={{
                background: "#fff",
                borderRadius: "32px",
                padding: "clamp(40px, 8vw, 64px) clamp(24px, 6vw, 64px)",
                border: "1px solid rgba(212,196,176,0.3)",
                boxShadow: "0 12px 48px rgba(28,26,23,0.06)",
                position: "relative",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              }}>
                <Quote size={56} style={{ color: "rgba(201,169,110,0.15)", position: "absolute", top: "32px", right: "40px" }} />
                
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "32px" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="#C9A96E" color="#C9A96E" />
                  ))}
                </div>

                {/* Text */}
                <p style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                  color: "#1C1A17",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "40px",
                }}>
                  "{review.text}"
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "#F8F4EE", display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#C9A96E",
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1C1A17" }}>
                      {review.name}
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#8DAF7A", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "2px" }}>
                      {review.event}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Desktop (Outside) */}
          <div className="testi-controls-desktop" style={{ position: "absolute", inset: "0 -80px", display: "flex", alignItems: "center", justifyContent: "space-between", pointerEvents: "none" }}>
            <style>{`
              @media(max-width: 1100px) { .testi-controls-desktop { display: none !important; } }
            `}</style>
            <button onClick={handlePrev} aria-label="Anterior" style={{ pointerEvents: "auto", width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid rgba(212,196,176,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#C9A96E"; }}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} aria-label="Siguiente" style={{ pointerEvents: "auto", width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid rgba(212,196,176,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A96E", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#C9A96E"; }}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Controls - Mobile/Dots */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginTop: "40px" }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              aria-label={`Ir a testimonio ${i + 1}`}
              style={{
                width: i === current ? "32px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === current ? "#C9A96E" : "rgba(212,196,176,0.6)",
                border: "none", cursor: "pointer",
                transition: "all .4s cubic-bezier(0.22, 1, 0.36, 1)",
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
