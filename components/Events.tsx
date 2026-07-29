"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall } from "lucide-react";

const EVENT_TYPES = [
  {
    title: "Cumpleaños y Fiestas",
    description: "Espacios amplios para montar música en vivo, castillos hinchables y animación. Sorprende a los tuyos con una fiesta que recordarán siempre.",
    image: "/images/real/real-41.webp",
    message: "Hola, me gustaría reservar El Corrihuelo para celebrar un cumpleaños o fiesta."
  },
  {
    title: "Reuniones Familiares",
    description: "Zonas diferenciadas para que los niños jueguen mientras los adultos disfrutan de una paella gigante o barbacoa en la terraza cubierta.",
    image: "/images/real/real-40.webp",
    message: "Hola, me gustaría reservar El Corrihuelo para una reunión familiar con comida/paella."
  },
  {
    title: "Bodas y Ceremonias",
    description: "Bodas íntimas, ceremonias al aire libre o eventos de empresa. Absoluta privacidad, montaje en los jardines y exclusividad para tu grupo.",
    image: "/images/real/real-16.webp",
    message: "Hola, me gustaría reservar El Corrihuelo para una boda íntima o evento privado."
  }
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="eventos" className="py-24 md:py-32 bg-cream text-dark" ref={ref}>
      <div className="container-max mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Imagina tu celebración
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Dinos qué celebras, nosotros ponemos el lugar
          </h2>
          <p className="text-lg text-dark-secondary font-light max-w-2xl mx-auto">
            Contacta con nosotros directamente por WhatsApp para consultar fechas y contarnos los detalles de tu evento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_TYPES.map((event, index) => {
            const whatsappUrl = `https://wa.me/34123456789?text=${encodeURIComponent(event.message)}`;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl overflow-hidden card-3d flex flex-col h-full"
                style={{ border: "1px solid var(--border-light)" }}
              >
                <div className="relative w-full overflow-hidden" style={{ height: "clamp(200px, 55vw, 320px)" }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white drop-shadow-md">
                    {event.title}
                  </h3>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <p className="text-dark-secondary font-light mb-8 flex-grow leading-relaxed">
                    {event.description}
                  </p>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-4 text-dark font-bold rounded-full transition-all gap-2"
                    style={{
                      background: "#C9A96E",
                      fontSize: "14px",
                      letterSpacing: "0.05em",
                      fontFamily: "Inter, sans-serif",
                      boxShadow: "0 0 20px rgba(201,169,110,0.3)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#d8b87b"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <PhoneCall size={18} />
                    Consultar disponibilidad
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
