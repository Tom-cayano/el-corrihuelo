"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuál es el precio de alquiler de El Corrihuelo?",
    a: "El alquiler comienza desde 200€. El precio final depende del número de asistentes, el tipo de celebración y las necesidades específicas. Contáctanos sin compromiso para un presupuesto a medida.",
  },
  {
    q: "¿Podemos llevar nuestra propia comida y bebida?",
    a: "¡Por supuesto! Alquilamos el espacio en exclusividad para vosotros. Podéis usar la barbacoa, traer vuestra comida o incluso contratar un servicio de catering externo. Vosotros decidís cómo organizar el menú.",
  },
  {
    q: "¿El uso de la piscina está incluido?",
    a: "Sí, el uso de la piscina privada está incluido en el precio durante la temporada cálida (normalmente de mayo a octubre). Contamos con césped natural y zona de solárium.",
  },
  {
    q: "¿Podemos poner música y decorar el espacio?",
    a: "Sí, disponemos de equipo de sonido y karaoke para que pongáis vuestra propia música. También podéis decorar los salones y zonas exteriores a vuestro gusto para fiestas temáticas o cumpleaños, siempre que no se dañen las instalaciones.",
  },
  {
    q: "¿Se admiten mascotas?",
    a: "Sabemos que son parte de la familia. Por lo general admitimos mascotas bien educadas en las zonas exteriores, pero por favor, consúltanos previamente al hacer tu reserva para confirmar los detalles.",
  },
  {
    q: "¿Hay espacio para aparcar?",
    a: "Sí, disponemos de una amplia zona habilitada para que podáis aparcar varios vehículos con total comodidad y seguridad dentro del perímetro de la finca.",
  },
  {
    q: "¿Cuál es la política de cancelación o modificación?",
    a: "Entendemos que los planes pueden cambiar. Te explicaremos nuestra política de flexibilidad y plazos de preaviso durante el proceso de reserva para que tengas total tranquilidad.",
  },
  {
    q: "¿Cuál es el horario de uso de la finca?",
    a: "El horario estándar es de 12:00 a 24:00 horas, ofreciendo 12 horas completas de disfrute privado.",
  },
  {
    q: "¿Cómo hago una reserva?",
    a: "Puedes utilizar el formulario de esta web para consultar disponibilidad. Te responderemos inmediatamente por WhatsApp para confirmar la fecha y formalizar la reserva.",
  },
];

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof faqs[0], index: number, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="faq-item group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-expanded={isOpen}
      style={{
        borderBottom: "1px solid var(--border-light)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="py-6 flex justify-between items-center gap-4">
        <h3
          className="text-lg font-semibold font-serif transition-colors duration-300"
          style={{ color: isOpen ? "var(--gold-dark)" : "var(--dark)" }}
        >
          {faq.q}
        </h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background: isOpen ? "var(--gold)" : "var(--cream-dark)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
          }}
        >
          {isOpen ? (
            <Minus size={16} color="var(--dark)" />
          ) : (
            <Plus size={16} color="var(--dark)" />
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-8 text-[0.95rem] leading-relaxed"
              style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-max max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="tag-badge">Preguntas Frecuentes</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            Resolvemos tus{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>
              dudas
            </em>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div 
          className="bg-white rounded-3xl p-6 md:p-10 shadow-sm"
          style={{ border: "1px solid var(--border-light)", boxShadow: "var(--shadow-soft)" }}
        >
          {faqs.map((faq, index) => (
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
    </section>
  );
}
