"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/images/terraza-piscina.jpg",
  "/images/hero-jardin.jpg",
  "/images/detalle-piscina.jpg",
  "/images/hero-salon.jpg",
  "/images/salon-decorado.jpg",
  "/images/flores-entrada.jpg",
  "/images/mesa-gourmet.jpg",
  "/images/mesa-tapas.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // 5 segundos por imagen
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-dark">
      {/* Background Cinematic Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }, // Slow Ken Burns effect
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Instalaciones de El Corrihuelo"
              fill
              priority={currentIndex === 0}
              quality={90}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Luxury Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 block">
            Casa Vacacional y Celebraciones
          </span>
          <h1 className="font-serif text-[4.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
            El Corrihuelo
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            El lugar perfecto para disfrutar de la naturaleza, celebrar con tu familia y crear recuerdos inolvidables en un entorno exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a 
              href="#reserva" 
              className="btn-primary"
            >
              Reservar ahora
            </a>
            <a 
              href="#descubre" 
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold text-sm tracking-wide transition-all duration-300"
              style={{ borderRadius: "2rem", padding: "1rem 2.5rem" }}
            >
              Descubrir instalaciones
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
