"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuál es el precio de alquiler de El Corrihuelo?",
    a: "El alquiler comienza desde 200€. El precio final depende del número de asistentes, el tipo de celebración y las necesidades específicas. Contáctanos sin compromiso para un presupuesto a medida.",
  },
  {
    q: "¿Podemos llevar nuestra propia comida y bebida?",
    a: "¡Por supuesto! Alquilamos el espacio en exclusividad. Podéis usar la barbacoa, la cocina, traer vuestra comida o incluso contratar un servicio de catering externo. Vosotros decidís cómo organizar el menú.",
  },
  {
    q: "¿El uso de la piscina está incluido?",
    a: "Sí, el uso de la piscina privada está totalmente incluido en el precio durante la temporada cálida (generalmente de mayo a octubre). Contamos con césped natural y zona de solárium.",
  },
  {
    q: "¿Podemos poner música y decorar el espacio?",
    a: "Sí, disponemos de equipo de sonido profesional para que pongáis vuestra propia música. También podéis decorar los salones y exteriores a vuestro gusto para fiestas temáticas, siempre que no se dañen las instalaciones.",
  },
  {
    q: "¿Se admiten mascotas?",
    a: "Sabemos que son parte de la familia. Por lo general admitimos mascotas bien educadas en las zonas exteriores, pero por favor, consúltanos previamente al hacer tu reserva para confirmar los detalles.",
  },
  {
    q: "¿Cuál es el horario de uso de la finca?",
    a: "El horario estándar es de 12:00 a 24:00 horas, ofreciendo 12 horas completas de disfrute privado. Consúltanos si necesitas horarios especiales o días adicionales.",
  },
];

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0], index: number, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        borderBottom: "1px solid rgba(212,196,176,0.6)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          padding: "32px 0", cursor: "pointer", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: "24px", color: isOpen ? "#C9A96E" : "#1C1A17",
          transition: "color .3s ease",
        }}
        onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.color = "#A8854A"; }}
        onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.color = "#1C1A17"; }}
      >
        <span style={{
          fontFamily: "Playfair Display, serif", fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
          fontWeight: 600, lineHeight: 1.3,
        }}>
          {faq.q}
        </span>
        <div style={{
          flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%",
          background: isOpen ? "#C9A96E" : "transparent",
          border: isOpen ? "none" : "1px solid rgba(212,196,176,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isOpen ? "#fff" : "#1C1A17", transition: "all .4s ease",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              paddingBottom: "32px", paddingRight: "clamp(24px, 10vw, 80px)",
              fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.8vw, 16px)",
              color: "#5C5249", lineHeight: 1.8, fontWeight: 300,
            }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="faq" ref={ref} style={{ background: "#FAF8F4", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        <div className="faq-grid" style={{ display: "grid", gap: "64px" }}>
          <style>{`
            .faq-grid { grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .faq-grid { grid-template-columns: 1fr 1.5fr; gap: 80px; } }
          `}</style>
          
          {/* Header Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div className="faq-sticky" style={{ position: "sticky", top: "120px" }}>
              <span style={{
                display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
                fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#C9A96E", marginBottom: "16px",
              }}>
                FAQ
              </span>
              <h2 style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700, color: "#1C1A17", lineHeight: 1.1,
                margin: "0 0 20px",
              }}>
                Preguntas <em style={{ fontStyle: "italic", color: "#A8854A" }}>frecuentes</em>
              </h2>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
                color: "#5C5249", fontWeight: 300, lineHeight: 1.75, maxWidth: "400px",
              }}>
                Resolvemos tus dudas principales para que puedas planificar tu evento con total tranquilidad y transparencia.
              </p>
            </div>
          </motion.div>

          {/* Accordion Column */}
          <div style={{ borderTop: "1px solid rgba(212,196,176,0.6)" }}>
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
