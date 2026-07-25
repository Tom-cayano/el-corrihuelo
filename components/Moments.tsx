"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MOMENTS_IMAGES = [
  "/images/baile-dia.jpg",
  "/images/evento-grupo.jpg",
  "/images/grupo-flamenca.jpg",
  "/images/paella-grupo.jpg",
  "/images/guitarrista.jpg",
  "/images/grupo-exterior.jpg",
];

export default function Moments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 md:py-32 bg-dark text-white overflow-hidden" ref={ref}>
      <div className="container-max mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Emociones reales
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Momentos que se viven en El Corrihuelo
          </h2>
          <p className="text-lg text-white/70 font-light max-w-xl mx-auto">
            No vendemos solo un espacio. Ofrecemos el escenario perfecto donde se crean los recuerdos que durarán toda la vida.
          </p>
        </motion.div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {MOMENTS_IMAGES.map((src, index) => {
            const isLarge = index === 0 || index === 3; // Make some images span taller
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group ${isLarge ? 'h-[400px] md:h-[600px]' : 'h-[300px] md:h-[400px]'}`}
              >
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image
                  src={src}
                  alt="Momento de celebración"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
