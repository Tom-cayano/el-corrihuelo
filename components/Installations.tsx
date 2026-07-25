"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Flame, Tent, Gamepad2, Users, Utensils } from "lucide-react";

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
    title: "Zona Barbacoa",
    description: "Auténtica barbacoa de obra equipada para cocinar al aire libre con la mejor compañía.",
    icon: Flame,
    image: "/images/barbacoa-premium.jpg"
  },
  {
    title: "Parque Infantil",
    description: "Área segura y acotada con juegos para que los más pequeños se diviertan sin preocupaciones.",
    icon: Tent,
    image: "/images/parque-infantil.jpg"
  },
  {
    title: "Sala de Juegos",
    description: "Futbolín, ping pong y diana. El lugar perfecto para el entretenimiento de adultos y niños.",
    icon: Gamepad2,
    image: "/images/sala-juegos.jpg"
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
              className="group relative h-80 rounded-3xl overflow-hidden card-3d"
            >
              {/* Background Image */}
              <Image 
                src={inst.image}
                alt={inst.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center text-dark transform group-hover:-translate-y-2 transition-transform duration-300">
                  <inst.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  {inst.title}
                </h3>
                <p className="text-sm text-white/80 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
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
