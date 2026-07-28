"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";

const WA = "https://wa.me/34601167585?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20y%20precio%20para%20una%20celebraci%C3%B3n.";

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="reserva"
      ref={ref}
      style={{
        position: "relative",
        padding: "clamp(80px, 14vw, 160px) 0",
        overflow: "hidden",
        background: "#0C0B09",
      }}
    >
      {/* Background accent */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw", height: "80vw", maxWidth: "800px", maxHeight: "800px",
        background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)", position: "relative", zIndex: 1 }}>

        <div className="book-layout" style={{ display: "grid", gap: "clamp(48px, 8vw, 80px)", alignItems: "center" }}>
          <style>{`
            .book-layout { grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .book-layout { grid-template-columns: 1fr 1fr; } }
          `}</style>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{
              display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
              fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#C9A96E", marginBottom: "16px",
            }}>
              Reservas
            </span>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.05,
              margin: "0 0 24px",
            }}>
              Asegura tu<br />
              <em style={{ fontStyle: "italic", color: "#C9A96E" }}>fecha ideal</em>
            </h2>
            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.72)", fontWeight: 300, lineHeight: 1.72,
              margin: "0 0 clamp(32px, 5vw, 48px)", maxWidth: "480px",
            }}>
              Las fechas de fin de semana y temporada alta se reservan con meses de antelación. Escríbenos hoy para confirmar tu fecha sin compromiso.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { icon: CalendarCheck, text: "Sin compromiso — Verificamos disponibilidad al momento" },
                { icon: MessageCircle, text: "Respuesta inmediata en menos de 1 hora en horario comercial" },
                { icon: Phone, text: "Asesoramiento personalizado directo con la propiedad" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                    background: "rgba(201,169,110,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <item.icon size={13} color="#C9A96E" strokeWidth={2} />
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.6vw, 15.5px)", color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.6 }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "clamp(20px, 3vw, 36px)",
              padding: "clamp(44px, 6vw, 68px) clamp(28px, 5vw, 56px)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
              position: "relative", overflow: "hidden",
              textAlign: "center",
            }}>
              {/* Glow */}
              <div aria-hidden="true" style={{
                position: "absolute", top: "-40%", right: "-40%", width: "80%", height: "80%",
                background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 65%)",
                borderRadius: "50%", pointerEvents: "none",
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  width: "76px", height: "76px", borderRadius: "50%",
                  background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto clamp(28px, 4vw, 36px)",
                }}>
                  <MessageCircle size={30} color="#C9A96E" strokeWidth={1.5} />
                </div>

                <h3 style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700, color: "#fff", margin: "0 0 16px",
                }}>
                  Consulta por WhatsApp
                </h3>
                <p style={{
                  fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.8vw, 15.5px)",
                  color: "rgba(255,255,255,0.65)", fontWeight: 300, lineHeight: 1.7,
                  margin: "0 0 clamp(32px, 5vw, 44px)", maxWidth: "340px", marginLeft: "auto", marginRight: "auto",
                }}>
                  Es la forma más rápida y directa de comunicarte con nosotros. Dinos la fecha, el tipo de evento y el número de asistentes.
                </p>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="booking-cta-whatsapp"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    width: "100%", background: "#C9A96E", color: "#111",
                    padding: "20px 32px", borderRadius: "9999px", textDecoration: "none",
                    fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    boxShadow: "0 0 40px rgba(201,169,110,0.28)",
                    transition: "all .4s ease", marginBottom: "16px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 48px rgba(201,169,110,0.45)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(201,169,110,0.28)"; }}
                >
                  <MessageCircle size={18} />
                  Abrir WhatsApp
                </a>

                <a
                  href="tel:+34601167585"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    width: "100%", color: "rgba(255,255,255,0.65)",
                    padding: "16px 24px", borderRadius: "9999px", textDecoration: "none",
                    fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500,
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                >
                  <Phone size={16} />
                  601 167 585
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
