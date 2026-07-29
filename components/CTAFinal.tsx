"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/34601167585?text=Hola%2C%20quiero%20reservar%20El%20Corrihuelo%20para%20una%20celebraci%C3%B3n.";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="reservar"
      ref={ref}
      style={{ position: "relative", overflow: "hidden", minHeight: "clamp(480px, 65vh, 700px)", display: "flex", alignItems: "center" }}
    >
      {/* Parallax Bg */}
      <motion.div
        aria-hidden="true"
        style={{
          y, position: "absolute", inset: "-14%",
          backgroundImage: "url('/images/real/real-3.webp')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      />
      {/* Overlays */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(12,11,9,0.78)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 65%)" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "clamp(64px, 10vw, 120px) clamp(20px, 5vw, 60px)", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "clamp(20px, 3vw, 32px)" }}>
            <span style={{ height: "1px", width: "40px", background: "#C9A96E", display: "block" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E" }}>¿Lista tu celebración?</span>
            <span style={{ height: "1px", width: "40px", background: "#C9A96E", display: "block" }} />
          </div>

          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 400, color: "#fff", lineHeight: 1.05,
            margin: "0 0 clamp(16px, 3vw, 24px)",
            letterSpacing: "-0.01em",
          }}>
            Tu próxima celebración{" "}
            <em style={{ fontStyle: "italic", color: "#C9A96E", fontWeight: 500 }}>te espera</em>
            {" "}en El Corrihuelo
          </h2>

          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2.2vw, 18px)",
            color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.7,
            margin: "0 auto clamp(36px, 5vw, 56px)", maxWidth: "560px",
          }}>
            Escríbenos hoy, verificamos disponibilidad en minutos y juntos hacemos que tu celebración sea perfecta.
          </p>

          <div className="cta-btns" style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", justifyContent: "center" }}>
            <style>{`@media(min-width:540px){ .cta-btns { flex-direction: row !important; } }`}</style>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                background: "#C9A96E", color: "#111",
                padding: "18px 40px", borderRadius: "9999px",
                fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                boxShadow: "0 0 32px rgba(201,169,110,0.32)",
                transition: "all .35s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b278"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <MessageCircle size={18} /> Hablar por WhatsApp
            </a>
            <a
              href="tel:+34601167585"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                color: "#fff", padding: "17px 36px", borderRadius: "9999px",
                fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.22)",
                transition: "all .35s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Phone size={18} /> 601 167 585
            </a>
          </div>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.38)", fontWeight: 300, marginTop: "clamp(20px, 3vw, 28px)" }}>
            Respondemos en menos de 24 horas · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
