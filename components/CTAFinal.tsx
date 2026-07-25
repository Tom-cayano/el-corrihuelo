"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="reservar"
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "60vh" }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          y,
          position: "absolute",
          inset: "-12%",
          backgroundImage: "url('/images/evento-grupo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(28,26,23,0.88) 0%, rgba(61,107,79,0.55) 60%, rgba(28,26,23,0.88) 100%)",
        }}
      />

      {/* Gold vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 section-padding flex flex-col items-center justify-center text-center"
        style={{ minHeight: "60vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--gold-light)", fontFamily: "Inter, sans-serif" }}
            >
              ¿Lista tu celebración?
            </span>
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
          </div>

          <h2
            className="font-serif text-white mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Tu próxima celebración{" "}
            <em className="italic" style={{ color: "var(--gold-light)" }}>
              te espera
            </em>
            <br />
            en El Corrihuelo
          </h2>

          <p
            className="text-lg text-white/80 mb-12 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
          >
            No esperes más. Escríbenos hoy, verificamos disponibilidad en
            minutos y juntos hacemos que tu celebración sea perfecta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34601167585?text=Hola!%20Quiero%20reservar%20El%20Corrihuelo%20para%20una%20celebración"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              <MessageCircle size={22} />
              Hablar por WhatsApp
            </a>
            <a
              href="tel:601167585"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold border-2 text-white transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={20} />
              601 167 585
            </a>
          </div>

          <p
            className="mt-8 text-sm text-white/50"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Respondemos en menos de 24 horas · Sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
