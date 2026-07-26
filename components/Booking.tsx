"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const wa = "https://wa.me/34601167585?text=Hola,%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20y%20precios%20para%20una%20celebraci%C3%B3n.";

  return (
    <section id="reserva" ref={ref} style={{
      position: "relative",
      padding: "160px 0",
      background: "url('/images/hero-jardin.jpg') center/cover fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Dark overlay for contrast */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.75)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10, width: "100%" }}>
        
        <div className="book-layout" style={{ display: "grid", gap: "64px", alignItems: "center" }}>
          <style>{`
            .book-layout { grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .book-layout { grid-template-columns: 1fr 1fr; gap: 80px; } }
          `}</style>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span style={{
              display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
              fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#C9A96E", marginBottom: "16px",
            }}>
              Reservas
            </span>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.1,
              margin: "0 0 24px",
            }}>
              Asegura tu <br/>
              <em style={{ fontStyle: "italic", color: "#C9A96E" }}>fecha ideal</em>
            </h2>
            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)",
              color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.7,
              marginBottom: "40px", maxWidth: "480px"
            }}>
              Las fechas de temporada alta se reservan con meses de antelación. Contáctanos por WhatsApp para consultar disponibilidad y recibir un presupuesto adaptado a tus necesidades.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Sin compromiso ni costes ocultos", "Respuesta inmediata en horario comercial", "Asesoramiento personalizado incluido"].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.9)", fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 300 }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Calendar size={12} color="#C9A96E" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "32px",
              padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 48px)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Decorative glow */}
              <div style={{ position: "absolute", top: "-50%", right: "-50%", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
              
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%", background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 32px"
                }}>
                  <MessageCircle size={32} color="#C9A96E" strokeWidth={1.5} />
                </div>

                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
                  Consulta por WhatsApp
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.7)", fontWeight: 300, lineHeight: 1.6, marginBottom: "40px" }}>
                  Es la forma más rápida y directa de comunicarte con nosotros. Te daremos disponibilidad y precio en el momento.
                </p>

                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    width: "100%", background: "#C9A96E", color: "#111",
                    padding: "20px 32px", borderRadius: "9999px", textDecoration: "none",
                    fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    boxShadow: "0 0 40px rgba(201,169,110,0.25)",
                    transition: "all .4s ease"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Abrir chat <ArrowRight size={18} />
                </a>

                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 300, marginTop: "24px" }}>
                  Típicamente respondemos en menos de 1 hora.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
