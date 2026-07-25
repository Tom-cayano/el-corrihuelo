"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DISCOVER_DATA = [
  {
    title: "La Piscina",
    description: "Un oasis cristalino diseñado para el descanso absoluto bajo el sol mediterráneo. Rodeada de exuberante vegetación y áreas de sombra perfectas.",
    image: "/images/terraza-piscina.jpg",
  },
  {
    title: "El Gran Salón",
    description: "Un espacio diáfano y elegante donde los detalles arquitectónicos se funden con el máximo confort. Ideal para acoger a todos tus invitados con estilo.",
    image: "/images/hero-salon.jpg",
  },
  {
    title: "Jardines",
    description: "Miles de metros cuadrados de naturaleza cuidada al milímetro. Un entorno de paz exclusivo que aísla tu celebración del mundo exterior.",
    image: "/images/hero-jardin.jpg",
  },
  {
    title: "Gastronomía",
    description: "Espacios pensados para el disfrute culinario. Ya sea contratando un catering profesional o preparando tus propias elaboraciones con todas las comodidades.",
    image: "/images/mesa-gourmet.jpg",
  }
];

interface DiscoverItem {
  title: string;
  description: string;
  image: string;
}

function DiscoverRow({ item, index }: { item: DiscoverItem, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[70vh] lg:h-[80vh] w-full`}
    >
      {/* Image Half */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Text Half */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            0{index + 1}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-dark">
            {item.title}
          </h2>
          <p className="text-lg text-dark-secondary font-light leading-relaxed mb-8">
            {item.description}
          </p>
          <a href="#instalaciones" className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-gold transition-colors">
            Ver más detalles <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function Discover() {
  return (
    <section id="descubre" className="w-full bg-cream">
      {DISCOVER_DATA.map((item, index) => (
        <DiscoverRow key={index} item={item} index={index} />
      ))}
    </section>
  );
}
