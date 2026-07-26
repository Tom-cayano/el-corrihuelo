"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Leaf, UtensilsCrossed, Sparkles, UserCheck, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Exclusividad Total",
    desc: "Solo un evento por día. La finca entera es tuya durante 12 horas para que disfrutes sin prisas ni personas ajenas a tu celebración."
  },
  {
    icon: Leaf,
    title: "Entorno Natural",
    desc: "Aislados del ruido urbano pero a pocos minutos de Murcia. Disfruta del aire puro, vegetación mediterránea y cielos estrellados."
  },
  {
    icon: UtensilsCrossed,
    title: "Libertad Gastronómica",
    desc: "Tú decides: utiliza nuestras barbacoas y cocinas para hacer tu propia comida, o contrata un servicio de catering externo sin comisiones."
  },
  {
    icon: Sparkles,
    title: "Instalaciones Premium",
    desc: "Desde salones completamente climatizados hasta equipos de sonido e iluminación profesional. Todo cuidado al mínimo detalle."
  },
  {
    icon: UserCheck,
    title: "Atención Cercana",
    desc: "Trato directo con la propiedad. Te ayudamos en la planificación, distribución del espacio y resolución de dudas sin intermediarios."
  },
  {
    icon: Lock,
    title: "Privacidad Garantizada",
    desc: "Finca perimetrada y segura. Perfecta para que los niños jueguen en libertad mientras los adultos disfrutan con total tranquilidad."
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="ventajas" ref={ref} style={{ background: "#0a0a0a", padding: "140px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
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
            Por qué elegirnos
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.1,
            margin: "0 0 20px",
          }}>
            La diferencia está en <em style={{ fontStyle: "italic", color: "#C9A96E" }}>los detalles</em>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="feat-grid" style={{ display: "grid", gap: "40px" }}>
          <style>{`
            .feat-grid { grid-template-columns: 1fr; }
            @media (min-width: 640px) { .feat-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
            @media (min-width: 1024px) { .feat-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; } }
          `}</style>

          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="feat-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "clamp(40px, 4vw, 56px) clamp(32px, 3vw, 40px)",
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                transition: "all .4s ease",
              }}
            >
              <style>{`
                .feat-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.06) !important; border-color: rgba(201,169,110,0.3) !important; }
              `}</style>
              
              <div style={{
                width: "64px", height: "64px", borderRadius: "16px",
                background: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "32px",
              }}>
                <feat.icon size={28} color="#C9A96E" strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700,
                color: "#fff", margin: "0 0 16px", lineHeight: 1.2,
              }}>
                {feat.title}
              </h3>
              
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7, fontWeight: 300, margin: 0,
              }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
