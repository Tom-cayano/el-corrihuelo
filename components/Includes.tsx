"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Waves, Home, Baby, Flame, Music, Calendar, Users, TreePine, MapPin } from "lucide-react";

const SERVICES = [
  { icon: Calendar, title: "Exclusividad", desc: "La finca completa solo para ti y tus invitados. Sin compartir espacios." },
  { icon: Waves, title: "Piscina Privada", desc: "Disponible en temporada cálida, con zona de césped y solárium." },
  { icon: Home, title: "Salón Climatizado", desc: "Más de 120m² adaptables para comidas, bailes o reuniones." },
  { icon: Flame, title: "Zona Gourmet", desc: "Cocina interior equipada y barbacoa exterior para tus asados." },
  { icon: Music, title: "Sonido y Karaoke", desc: "Equipo profesional listo para que pongas tu propia banda sonora." },
  { icon: TreePine, title: "Exteriores", desc: "Miles de metros de jardines cuidados al detalle y terrazas." },
  { icon: Baby, title: "Zona Infantil", desc: "Espacio seguro al aire libre para que los más pequeños disfruten." },
  { icon: Users, title: "Mobiliario", desc: "Mesas y sillas suficientes para organizar tu montaje a medida." },
  { icon: MapPin, title: "Aparcamiento", desc: "Zona privada de parking dentro de la finca para máxima comodidad." },
];

export default function Includes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="incluye" ref={ref} style={{ background: "#ffffff", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Qué Incluye
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.1,
            margin: "0 0 20px",
          }}>
            Todo preparado para que <em style={{ fontStyle: "italic", color: "#A8854A" }}>tú solo disfrutes</em>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
            color: "#5C5249", fontWeight: 300, lineHeight: 1.75, maxWidth: "600px", margin: "0 auto",
          }}>
            En El Corrihuelo no hay sorpresas. El alquiler incluye el uso exclusivo de todas nuestras instalaciones para que organices el evento a tu manera.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="includes-grid" style={{
          display: "grid", gap: "32px",
        }}>
          <style>{`
            .includes-grid { grid-template-columns: 1fr; }
            @media (min-width: 640px) { .includes-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; } }
            @media (min-width: 1024px) { .includes-grid { grid-template-columns: repeat(3, 1fr); gap: 56px 40px; } }
          `}</style>
          
          {SERVICES.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "#FAF8F4", border: "1px solid rgba(212,196,176,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "24px", color: "#C9A96E",
                transition: "transform .4s ease, background .4s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "#F5EDD8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#FAF8F4"; }}
              >
                <srv.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700,
                color: "#1C1A17", marginBottom: "12px",
              }}>
                {srv.title}
              </h3>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "14.5px", color: "#5C5249",
                lineHeight: 1.6, fontWeight: 300,
              }}>
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
