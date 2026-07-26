"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Users, Utensils } from "lucide-react";

const INSTALLATIONS = [
  {
    title: "Piscina Privada",
    description: "Amplia zona de baño con solárium, perfecta para refrescarse y relajarse bajo el sol.",
    icon: Waves,
    image: "/images/detalle-piscina.jpg"
  },
  {
    title: "Gran Salón",
    description: "Espacio diáfano con capacidad para grandes grupos, climatizado y con decoración rústica moderna.",
    icon: Users,
    image: "/images/hero-salon.jpg"
  },
  {
    title: "Zona Gourmet",
    description: "Cocina completamente equipada e integrada para facilitar el servicio de catering o cocina propia.",
    icon: Utensils,
    image: "/images/mesa-gourmet.jpg"
  }
];

export default function Installations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="instalaciones" className="py-24 md:py-32 bg-dark text-white relative" ref={ref}>
      <div className="container-max mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Equipamiento Boutique
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Todo lo que necesitas, y mucho más
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Hemos cuidado cada rincón para ofrecerte una experiencia completa, fusionando el encanto rural con las comodidades más exclusivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {INSTALLATIONS.map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden card-3d"
              style={{ borderRadius: "24px", minHeight: "340px" }}
            >
              {/* Background Image */}
              <Image 
                src={inst.image}
                alt={inst.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay — always visible, more contrast */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 55%, transparent 100%)" }} />
              
              {/* Content — always visible on mobile */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:"rgba(201,169,110,0.92)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"12px" }}>
                  <inst.icon size={22} color="#111" />
                </div>
                <h3 style={{ fontFamily:"Playfair Display, serif", fontSize:"1.4rem", fontWeight:700, color:"#fff", marginBottom:"8px", textShadow:"0 2px 8px rgba(0,0,0,0.4)" }}>
                  {inst.title}
                </h3>
                <p style={{ fontSize:"14px", color:"rgba(255,255,255,0.85)", fontWeight:300, lineHeight:1.6, fontFamily:"Inter, sans-serif" }}>
                  {inst.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
