"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Waves, Home, Baby, Flame, Music, Calendar, Users, PartyPopper, TreePine
} from "lucide-react";

const services = [
  { icon: Waves, text: "Piscina Privada (temporada)" },
  { icon: Flame, text: "Barbacoa completa" },
  { icon: Home, text: "Salones acondicionados" },
  { icon: Music, text: "Equipo de sonido" },
  { icon: PartyPopper, text: "Futbolín y Ping Pong" },
  { icon: Baby, text: "Zona de juegos infantil" },
  { icon: TreePine, text: "Exteriores y jardín" },
  { icon: Users, text: "Mobiliario para eventos" },
  { icon: Calendar, text: "Exclusividad total" },
];

export default function Includes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="incluye"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--white)" }}
    >
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="tag-badge">Qué Incluye</span>
            <div className="divider-gold-left" />
            <h2
              className="text-section-title font-serif mb-6"
              style={{ color: "var(--dark)" }}
            >
              Todo preparado para que{" "}
              <em className="italic" style={{ color: "var(--gold-dark)" }}>
                tú solo disfrutes
              </em>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              En El Corrihuelo no hay sorpresas. El precio de alquiler incluye el
              uso exclusivo de todas nuestras instalaciones durante 12 horas completas.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-8 rounded-3xl relative overflow-hidden group"
              style={{
                background: "linear-gradient(145deg, var(--dark) 0%, var(--dark-secondary) 100%)",
                boxShadow: "var(--shadow-strong)"
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                style={{
                  background: "radial-gradient(circle at top right, rgba(201,169,110,0.15) 0%, transparent 60%)"
                }}
              />
              <span
                className="text-sm font-semibold tracking-widest uppercase block mb-3"
                style={{ color: "var(--gold-light)", fontFamily: "Inter, sans-serif" }}
              >
                Alquiler Completo
              </span>
              <div className="flex items-end gap-2 text-white">
                <span className="text-sm pb-2 opacity-80 font-medium">Desde</span>
                <span className="font-serif font-bold text-5xl md:text-6xl tracking-tight">200€</span>
              </div>
              <p
                className="mt-4 text-sm"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                * El precio final puede variar según el número de asistentes, tipo
                de evento y necesidades específicas.
              </p>
            </motion.div>
          </motion.div>

          {/* Grid de servicios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {services.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.6 }}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-medium)", borderColor: "var(--gold)" }}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 border border-transparent"
                  style={{
                    boxShadow: "var(--shadow-xs)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 hover:rotate-12"
                    style={{ background: "var(--cream-dark)" }}
                  >
                    <item.icon size={20} style={{ color: "var(--dark)" }} strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
