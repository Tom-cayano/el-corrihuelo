"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, Car, Clock, Phone } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="ubicacion" ref={ref} style={{ background: "#ffffff", padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 88px)" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Nuestra Ubicación
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.08, margin: 0,
          }}>
            Fácil de llegar, <em style={{ fontStyle: "italic", color: "#A8854A" }}>difícil de olvidar</em>
          </h2>
        </motion.div>

        <div className="loc-wrap" style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative" }}>
          <style>{`
            @media (min-width: 1024px) {
              .loc-wrap { flex-direction: row !important; align-items: stretch; }
              .loc-map-wrap { flex: 1; min-width: 0; }
              .loc-info-wrap { width: 420px; flex-shrink: 0; }
            }
          `}</style>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="loc-map-wrap"
          >
            <div style={{
              width: "100%", height: "clamp(300px, 50vw, 560px)", borderRadius: "clamp(16px, 2vw, 28px)",
              overflow: "hidden", border: "1px solid rgba(212,196,176,0.4)",
              boxShadow: "0 16px 48px rgba(28,26,23,0.06)",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25018.12!2d-1.158!3d38.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6348300000000%3A0x0!2sCabezo+de+la+Plata%2C+Murcia!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de El Corrihuelo en Cabezo de la Plata, Murcia"
              />
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="loc-info-wrap"
          >
            <div style={{
              background: "#1C1A17", borderRadius: "clamp(16px, 2vw, 28px)",
              padding: "clamp(36px, 5vw, 52px) clamp(28px, 4vw, 44px)",
              height: "100%", display: "flex", flexDirection: "column", gap: "0",
              boxShadow: "0 24px 64px rgba(28,26,23,0.2)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
              {/* Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "clamp(28px, 4vw, 44px)" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
                  background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.22)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPin size={22} color="#C9A96E" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
                    El Corrihuelo
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", fontWeight: 300, margin: 0 }}>
                    Cabezo de la Plata, Murcia
                  </p>
                </div>
              </div>

              {/* Info items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 28px)", flexGrow: 1, marginBottom: "clamp(32px, 5vw, 48px)" }}>
                {[
                  { icon: Car, title: "Aparcamiento incluido", desc: "Amplia zona habilitada para vehículos dentro de la propiedad privada." },
                  { icon: Clock, title: "A 15 minutos de Murcia", desc: "Acceso fácil por carretera asfaltada desde el centro de Murcia." },
                  { icon: Phone, title: "+34 601 167 585", desc: "Disponible en horario comercial. También en WhatsApp." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <item.icon size={18} color="#C9A96E" strokeWidth={1.5} style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 5px" }}>
                        {item.title}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  background: "#C9A96E", color: "#111",
                  padding: "18px 24px", borderRadius: "9999px", textDecoration: "none",
                  fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  boxShadow: "0 0 28px rgba(201,169,110,0.2)",
                  transition: "all .35s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Navigation size={16} /> Cómo llegar
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
