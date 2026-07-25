"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Leaf, Star, Clock } from "lucide-react";

const counters = [
  { value: 200, suffix: "+", label: "Celebraciones realizadas", icon: Star },
  { value: 200, prefix: "Desde ", suffix: "€", label: "Precio de alquiler", icon: Leaf },
  { value: 12, suffix: "h", label: "De pura diversión", icon: Clock },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="counter-number">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre-nosotros"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="tag-badge">Sobre Nosotros</span>
            <div className="divider-gold-left" />
            <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
              Un lugar donde cada{" "}
              <em className="italic" style={{ color: "var(--gold-dark)" }}>
                celebración
              </em>{" "}
              se convierte en un recuerdo
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              El Corrihuelo es una finca privada enclavada en plena naturaleza murciana,
              en Cabezo de la Plata. Un espacio único donde el ambiente familiar, la
              autenticidad española y la alegría se fusionan para crear celebraciones
              verdaderamente inolvidables.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif", opacity: 0.85 }}
            >
              Desde cumpleaños épicos con ambiente flamenco hasta reuniones familiares
              íntimas rodeadas de olivos y pinos. Con piscina, barbacoa, zona infantil,
              karaoke y amplios salones, lo tienes todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/34601167585?text=Hola!%20Quiero%20información%20sobre%20El%20Corrihuelo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Consultar disponibilidad</span>
              </a>
              <a
                href="tel:601167585"
                className="btn-outline"
                style={{ color: "var(--dark)", borderColor: "var(--warm-dark)" }}
              >
                <span>601 167 585</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden img-hover-zoom"
              style={{ height: "520px", boxShadow: "var(--shadow-strong)" }}
            >
              <Image
                src="/images/hero-jardin.jpg"
                alt="Jardín y finca El Corrihuelo con flores y naturaleza murciana"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass absolute -bottom-6 -left-6 rounded-2xl p-5"
              style={{ boxShadow: "var(--shadow-medium)" }}
            >
              <div className="stars text-xl mb-1">★★★★★</div>
              <p className="text-sm font-semibold" style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif" }}>
                &ldquo;La mejor celebración de mi vida&rdquo;
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
                — María José, Murcia
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
              >
                <a href="#reserva" className="btn-primary inline-flex items-center">
                  Descubre la Finca
                </a>
              </motion.div>
            </motion.div>
            {/* Gold accent */}
            <div
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{ background: "var(--gold)" }}
            />
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16"
          style={{ borderTop: "1px solid var(--warm-dark)" }}
        >
          {counters.map(({ value, prefix, suffix, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "var(--green-pale)" }}
              >
                <Icon size={22} style={{ color: "var(--green)" }} />
              </div>
              <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
              <span
                className="text-sm"
                style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
