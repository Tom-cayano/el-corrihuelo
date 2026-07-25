"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" ref={ref} className="section-padding relative" style={{ background: "var(--white)" }}>
      <div className="container-max">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="tag-badge">Nuestra Ubicación</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            Fácil de llegar,{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>difícil de olvidar</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Tarjeta Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div 
              className="bg-cream rounded-3xl p-8 md:p-10"
              style={{ border: "1px solid var(--border-light)", boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center" style={{ boxShadow: "var(--shadow-xs)" }}>
                  <MapPin size={24} style={{ color: "var(--gold-dark)" }} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold" style={{ color: "var(--dark)" }}>El Corrihuelo</h3>
                  <p className="text-sm" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
                    Cabezo de la Plata, Murcia
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Car size={20} className="mt-1" style={{ color: "var(--gold-dark)" }} />
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>Aparcamiento Incluido</h4>
                    <p className="text-sm" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
                      Zona habilitada para aparcar varios vehículos con comodidad dentro de las inmediaciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-1" style={{ color: "var(--gold-dark)" }} />
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: "var(--dark)" }}>A pocos minutos de Murcia</h4>
                    <p className="text-sm" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
                      En un entorno natural aislado pero con un acceso por carretera rápido y sencillo.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center flex items-center gap-2 py-4"
                style={{ borderRadius: "1rem" }}
              >
                <Navigation size={18} />
                Cómo llegar en Google Maps
              </a>
            </div>
          </motion.div>

          {/* Mapa Interactio / Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative"
            style={{ boxShadow: "var(--shadow-medium)" }}
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl z-10" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24946.83!2d-1.158!3d38.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCabezo+de+la+Plata%2C+Murcia!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Corrihuelo en Cabezo de la Plata, Murcia"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
