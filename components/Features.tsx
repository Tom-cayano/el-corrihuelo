"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Leaf, UtensilsCrossed, Sparkles, UserCheck, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Exclusividad Total",
    desc: "Un solo evento por día. La finca al completo es tuya durante 12 horas. Sin extraños, sin interrupciones, solo tu grupo.",
  },
  {
    icon: Leaf,
    title: "Entorno Natural",
    desc: "Cinco mil metros cuadrados de naturaleza mediterránea a pocos minutos de Murcia. Silencio, aire limpio y cielos estrellados.",
  },
  {
    icon: UtensilsCrossed,
    title: "Libertad Gastronómica",
    desc: "Cocina tú mismo en nuestra zona gourmet, usa la barbacoa exterior o trae el servicio de catering que prefieras. Sin restricciones.",
  },
  {
    icon: Sparkles,
    title: "Instalaciones Premium",
    desc: "Piscina, salón climatizado, karaoke profesional, ping pong, futbolín y parque infantil. Todo en perfecto estado.",
  },
  {
    icon: UserCheck,
    title: "Trato Directo",
    desc: "Hablas directamente con la propiedad. Te asesoramos sin intermediarios para que cada detalle de tu evento sea perfecto.",
  },
  {
    icon: Lock,
    title: "Privacidad Garantizada",
    desc: "Finca totalmente vallada y segura. Los niños juegan libres mientras los adultos disfrutan con total tranquilidad.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="ventajas" ref={ref} style={{ background: "#0C0B09", padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: "center", marginBottom: "clamp(56px, 9vw, 96px)" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Por qué elegirnos
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.08,
            margin: "0 0 18px",
          }}>
            La diferencia está en <em style={{ fontStyle: "italic", color: "#C9A96E" }}>los detalles</em>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
            color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.75,
            maxWidth: "520px", margin: "0 auto",
          }}>
            No somos una sala de alquiler genérica. Somos el espacio exclusivo que hace que tu celebración sea exactamente como la imaginabas.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(20px, 3vw, 36px)",
        }}>
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="feat-card"
              style={{
                background: "rgba(255,255,255,0.035)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "clamp(18px, 2vw, 28px)",
                padding: "clamp(36px, 4vw, 56px) clamp(28px, 3vw, 44px)",
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                transition: "all .45s ease",
              }}
            >
              <style>{`
                .feat-card:hover {
                  transform: translateY(-10px);
                  background: rgba(255,255,255,0.055) !important;
                  border-color: rgba(201,169,110,0.28) !important;
                }
              `}</style>

              {/* Icon */}
              <div style={{
                width: "clamp(52px, 6vw, 68px)", height: "clamp(52px, 6vw, 68px)",
                borderRadius: "16px",
                background: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "clamp(24px, 3vw, 36px)",
              }}>
                <feat.icon size={26} color="#C9A96E" strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.55rem)",
                fontWeight: 700, color: "#fff",
                margin: "0 0 clamp(12px, 1.5vw, 16px)", lineHeight: 1.2,
              }}>
                {feat.title}
              </h3>

              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.6vw, 15.5px)",
                color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, margin: 0,
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
