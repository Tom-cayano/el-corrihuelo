"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuál es el precio de alquiler de El Corrihuelo?",
    a: "El alquiler comienza desde 200€. El precio final depende del número de asistentes, el tipo de celebración y las necesidades específicas. Contáctanos sin compromiso para recibir un presupuesto personalizado en el momento.",
  },
  {
    q: "¿Podemos llevar nuestra propia comida y bebida?",
    a: "¡Por supuesto! La finca se alquila en exclusividad. Podéis usar la barbacoa y la cocina interior equipada, traer vuestra propia comida o incluso contratar un servicio de catering externo sin ninguna restricción.",
  },
  {
    q: "¿El uso de la piscina está incluido en el precio?",
    a: "Sí, el uso de la piscina privada está totalmente incluido durante la temporada cálida (generalmente de mayo a octubre). Cuenta con zona de solárium con tumbonas y duchas exteriores.",
  },
  {
    q: "¿Podemos poner música y decorar los salones?",
    a: "Sí. Disponemos de equipo de sonido profesional y karaoke. También podéis decorar los espacios a vuestro gusto para fiestas temáticas, siempre que no se dañen las instalaciones.",
  },
  {
    q: "¿Se admiten mascotas en la finca?",
    a: "En general admitimos mascotas bien educadas en las zonas exteriores. Consúltanos previamente al realizar tu reserva para confirmar los detalles y condiciones según el tipo de evento.",
  },
  {
    q: "¿Cuál es el horario de uso de la finca?",
    a: "El horario estándar es de 12:00 a 24:00 horas, ofreciendo 12 horas completas. Si necesitas horarios especiales o jornadas adicionales, consúltanos directamente y buscamos la solución.",
  },
  {
    q: "¿Tienen disponibilidad en temporada alta?",
    a: "Las fechas de verano y fin de semana se reservan con mucha antelación. Te recomendamos contactar con al menos 2-3 meses de antelación para asegurar tu fecha. Respondemos en menos de 24 horas.",
  },
];

function FAQItem({ faq, open, onToggle, index }: { faq: (typeof FAQS)[0]; open: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.07 }}
      style={{ borderBottom: "1px solid rgba(212,196,176,0.55)" }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          padding: "clamp(24px, 3vw, 36px) 0", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px",
          color: open ? "#C9A96E" : "#1C1A17",
          transition: "color .3s ease",
        }}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.color = "#A8854A"; }}
        onMouseLeave={(e) => { if (!open) e.currentTarget.style.color = "#1C1A17"; }}
      >
        <span style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
          fontWeight: 600, lineHeight: 1.3,
        }}>
          {faq.q}
        </span>
        <div style={{
          flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%",
          background: open ? "#C9A96E" : "transparent",
          border: open ? "none" : "1px solid rgba(212,196,176,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: open ? "#fff" : "#1C1A17",
          transition: "all .4s ease",
        }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              paddingBottom: "clamp(24px, 3vw, 36px)",
              paddingRight: "clamp(20px, 8vw, 80px)",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(14.5px, 1.8vw, 16px)",
              color: "#5C5249", lineHeight: 1.8, fontWeight: 300, margin: 0,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="faq" ref={ref} style={{ background: "#F9F6F1", padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        <div className="faq-layout" style={{ display: "grid", gap: "clamp(48px, 8vw, 80px)" }}>
          <style>{`
            .faq-layout { grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .faq-layout { grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start; } }
            .faq-sticky { position: sticky; top: 110px; }
          `}</style>

          {/* Left: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            <div className="faq-sticky">
              <span style={{
                display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
                fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#C9A96E", marginBottom: "16px",
              }}>
                FAQ
              </span>
              <h2 style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
                fontWeight: 700, color: "#1C1A17", lineHeight: 1.08,
                margin: "0 0 20px",
              }}>
                Preguntas <em style={{ fontStyle: "italic", color: "#A8854A" }}>frecuentes</em>
              </h2>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.8vw, 17px)",
                color: "#6B635A", fontWeight: 300, lineHeight: 1.75, maxWidth: "380px", margin: 0,
              }}>
                Todo lo que necesitas saber antes de reservar. Si tienes más dudas, escríbenos por WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <div style={{ borderTop: "1px solid rgba(212,196,176,0.55)" }}>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
