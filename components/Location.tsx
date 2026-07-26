"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="ubicacion" ref={ref} style={{ background: "#ffffff", padding: "120px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
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
            Nuestra Ubicación
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.1,
            margin: "0",
          }}>
            Fácil de llegar, <em style={{ fontStyle: "italic", color: "#A8854A" }}>difícil de olvidar</em>
          </h2>
        </motion.div>

        <div className="loc-layout" style={{
          position: "relative",
          display: "flex", flexDirection: "column", gap: "24px",
        }}>
          <style>{`
            @media (min-width: 1024px) {
              .loc-layout { flex-direction: row !important; align-items: center; }
              .loc-map { flex: 1; height: 600px !important; margin-right: 80px; border-radius: 32px !important; }
              .loc-card { position: absolute; right: 0; width: 440px; z-index: 10; }
            }
          `}</style>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="loc-map"
            style={{
              width: "100%", height: "400px", borderRadius: "24px",
              overflow: "hidden", position: "relative",
              boxShadow: "0 24px 64px rgba(28,26,23,0.06)",
              border: "1px solid rgba(212,196,176,0.4)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24946.83!2d-1.158!3d38.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCabezo+de+la+Plata%2C+Murcia!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Corrihuelo"
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="loc-card"
          >
            <div style={{
              background: "#1C1A17",
              borderRadius: "32px",
              padding: "clamp(32px, 5vw, 48px)",
              color: "#fff",
              boxShadow: "0 24px 64px rgba(28,26,23,0.25)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "40px" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
                  background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(201,169,110,0.25)",
                }}>
                  <MapPin size={24} color="#C9A96E" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.7rem", fontWeight: 700, margin: "0 0 4px" }}>
                    El Corrihuelo
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
                    Cabezo de la Plata, Murcia
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <Car size={20} color="#C9A96E" style={{ marginTop: "2px" }} strokeWidth={1.5} />
                  <div>
                    <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 6px" }}>
                      Aparcamiento Incluido
                    </h4>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                      Zona habilitada para aparcar varios vehículos con total comodidad dentro de la propiedad.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <Clock size={20} color="#C9A96E" style={{ marginTop: "2px" }} strokeWidth={1.5} />
                  <div>
                    <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: "0 0 6px" }}>
                      A pocos minutos de Murcia
                    </h4>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                      En un entorno natural aislado pero con acceso rápido y asfaltado hasta la puerta.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  width: "100%", background: "#C9A96E", color: "#111",
                  padding: "18px 24px", borderRadius: "9999px", textDecoration: "none",
                  fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700,
                  letterSpacing: "0.05em", transition: "all .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Navigation size={18} />
                Cómo llegar en Maps
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
