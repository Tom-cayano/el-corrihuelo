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
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      className={isEven ? "discover-row-even" : "discover-row-odd"}
    >
      <style>{`
        @media (min-width: 1024px) {
          .discover-row-even { flex-direction: row !important; }
          .discover-row-odd  { flex-direction: row-reverse !important; }
          .discover-img { height: 70vh !important; min-height: 500px; }
          .discover-text { padding: 80px !important; }
        }
      `}</style>

      {/* Image */}
      <div className="discover-img" style={{ width: "100%", height: "55vw", minHeight: "260px", maxHeight: "520px", position: "relative", overflow: "hidden" }}>
        <motion.div
          initial={{ scale: 1.15 }}
          animate={isInView ? { scale: 1 } : { scale: 1.15 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Text */}
      <div
        className="discover-text"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          background: "var(--cream, #FAF8F4)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "480px", width: "100%" }}
        >
          <span style={{
            color: "#C9A96E",
            fontWeight: 700,
            letterSpacing: "0.2em",
            fontSize: "12px",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
            display: "block",
            marginBottom: "14px",
          }}>
            0{index + 1}
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#1C1A17",
            marginBottom: "20px",
          }}>
            {item.title}
          </h2>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "#5C5249",
            fontWeight: 300,
            lineHeight: 1.75,
            fontFamily: "Inter, sans-serif",
            marginBottom: "28px",
          }}>
            {item.description}
          </p>
          <a
            href="#instalaciones"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1C1A17",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              transition: "color .25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1C1A17")}
          >
            Ver más detalles <span>→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function Discover() {
  return (
    <section id="discover" style={{ width: "100%", background: "var(--cream, #FAF8F4)" }}>
      {DISCOVER_DATA.map((item, index) => (
        <DiscoverRow key={index} item={item} index={index} />
      ))}
    </section>
  );
}
