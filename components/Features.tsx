"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trees, Waves, Users, MapPin, Smile, Banknote, Coffee, Key, Heart } from "lucide-react";

const features = [
  { icon: Trees, title: "Entorno Natural", desc: "Aislado del ruido, rodeado de naturaleza." },
  { icon: Waves, title: "Piscina Privada", desc: "Uso exclusivo en temporada cálida." },
  { icon: Users, title: "Espacios Amplios", desc: "Jardines y salones para grupos grandes." },
  { icon: Smile, title: "Zona Infantil", desc: "Parque seguro para los más pequeños." },
  { icon: Key, title: "Exclusividad Total", desc: "Toda la finca solo para vosotros." },
  { icon: Banknote, title: "Desde 200 €", desc: "Precios accesibles y transparentes." },
  { icon: Heart, title: "Atención Personal", desc: "Nos adaptamos a tus necesidades." },
  { icon: MapPin, title: "Fácil Acceso", desc: "Ubicación ideal a pocos minutos de Murcia." },
  { icon: Coffee, title: "Todas las Edades", desc: "Instalaciones para niños, jóvenes y adultos." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ventajas" ref={ref} className="section-padding" style={{ background: "var(--white)" }}>
      <div className="container-max">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="tag-badge">¿Por qué elegirnos?</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            El lugar perfecto para tu{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>celebración</em>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
            Todo ha sido diseñado pensando en tu comodidad. No compartes espacio, 
            no hay sorpresas, solo un entorno increíble para disfrutar al máximo.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-cream rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 cursor-default"
              style={{ border: "1px solid var(--border-light)" }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: "radial-gradient(circle at top right, rgba(201,169,110,0.1) 0%, transparent 70%)" }}
              />
              <div className="mb-5 relative z-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
                  style={{ background: "var(--white)", boxShadow: "var(--shadow-soft)" }}
                >
                  <feature.icon size={22} style={{ color: "var(--gold-dark)" }} />
                </div>
              </div>
              <h3 className="text-lg font-bold font-serif mb-2 relative z-10" style={{ color: "var(--dark)" }}>
                {feature.title}
              </h3>
              <p className="text-sm relative z-10" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Smart CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#reserva"
            className="btn-primary inline-flex items-center"
            style={{ borderRadius: "2rem" }}
          >
            Consulta tu fecha libre
          </a>
        </motion.div>

      </div>
    </section>
  );
}
