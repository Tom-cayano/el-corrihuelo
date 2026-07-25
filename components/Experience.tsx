"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "80vh", minHeight: "600px" }}
      aria-label="Experiencia El Corrihuelo"
    >
      {/* ── PARALLAX BACKGROUND ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          scale,
          filter: blur,
          backgroundImage: "url('/images/baile-noche.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "124%",
          top: "-12%",
        }}
        aria-hidden="true"
      />

      {/* ── GRADIENT OVERLAYS ── */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: "linear-gradient(to right, rgba(28,26,23,0.85) 0%, rgba(28,26,23,0.5) 50%, rgba(28,26,23,0.85) 100%)" 
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: "linear-gradient(to bottom, var(--cream) 0%, transparent 20%, transparent 80%, var(--cream) 100%)" 
        }}
      />

      {/* ── CONTENT ── */}
      <div 
        ref={textRef}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--gold-light)", fontFamily: "Inter, sans-serif" }}
            >
              La Experiencia
            </span>
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
          </div>

          <h2
            className="font-serif text-white mb-10 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "-0.02em",
              textShadow: "0 10px 40px rgba(0,0,0,0.5)"
            }}
          >
            No alquilas un espacio.<br />
            <em className="italic" style={{ color: "var(--gold-light)" }}>
              Creas recuerdos.
            </em>
          </h2>

          <p
            className="text-lg md:text-xl text-white/90 mx-auto max-w-2xl font-light"
            style={{ 
              fontFamily: "Inter, sans-serif", 
              lineHeight: 1.8,
              textShadow: "0 4px 12px rgba(0,0,0,0.4)"
            }}
          >
            Nuestra mayor satisfacción es ver cómo El Corrihuelo se llena de risas,
            música y momentos especiales. Cuidamos cada detalle para que tú solo
            tengas que preocuparte de disfrutar con los tuyos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-14"
          >
            <button
              onClick={() => {
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              aria-label="Ir a la sección de contacto"
            >
              <span>Empieza tu historia</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
