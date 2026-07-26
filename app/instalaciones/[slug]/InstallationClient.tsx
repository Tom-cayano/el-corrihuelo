"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Users, ArrowLeft, MessageCircle } from "lucide-react";
import { INSTALLATIONS_DATA, Installation } from "@/lib/installations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InstallationPageClient({ item }: { item: Installation }) {
  const wa = `https://wa.me/34601167585?text=${encodeURIComponent(
    `Hola, me gustaría reservar El Corrihuelo. Me interesa especialmente ${item.title}.`
  )}`;

  return (
    <>
      <Navbar />

      <main style={{ background: "#FAF8F4", minHeight: "100vh", paddingTop: "90px" }}>

        {/* ── HERO ── */}
        <div style={{ position: "relative", width: "100%", height: "clamp(280px, 55vw, 600px)", overflow: "hidden" }}>
          <Image
            src={item.heroImage}
            alt={item.title}
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />

          {/* Back button */}
          <Link
            href="/#instalaciones"
            style={{
              position: "absolute", top: "24px", left: "24px",
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff", padding: "10px 18px", borderRadius: "9999px",
              textDecoration: "none", fontFamily: "Inter, sans-serif",
              fontSize: "13px", fontWeight: 600, transition: "all .3s",
            }}
          >
            <ArrowLeft size={14} /> Volver
          </Link>

          {/* Title */}
          <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "clamp(24px, 5vw, 48px)" }}>
            <span style={{
              display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
              fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#C9A96E", marginBottom: "10px",
            }}>
              {item.icon} Instalaciones
            </span>
            <h1 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.05,
              margin: "0 0 8px",
              textShadow: "0 4px 20px rgba(0,0,0,0.40)",
            }}>
              {item.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 2vw, 17px)", fontWeight: 300 }}>
              {item.headline}
            </p>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px, 6vw, 80px) 24px" }}>

          {/* Description + Capacity */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "clamp(40px, 6vw, 72px)" }} className="install-desc-grid">
            <style>{`@media(min-width:768px){ .install-desc-grid { grid-template-columns: 2fr 1fr !important; } }`}</style>

            <div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1C1A17", marginBottom: "18px" }}>
                Descripción
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)", color: "#3A352E", lineHeight: 1.8, fontWeight: 300 }}>
                {item.fullDescription}
              </p>
            </div>

            {/* Capacity badge */}
            <div style={{
              background: "#fff", borderRadius: "20px", padding: "28px",
              border: "1px solid rgba(212,196,176,0.4)",
              boxShadow: "0 4px 24px rgba(28,26,23,0.07)",
              display: "flex", flexDirection: "column", gap: "12px",
              alignSelf: "flex-start",
            }}>
              <div style={{ fontSize: "32px" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E", margin: 0 }}>
                Capacidad
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Users size={18} style={{ color: "#1C1A17" }} />
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1C1A17" }}>
                  {item.capacity}
                </span>
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  background: "#C9A96E", color: "#111", borderRadius: "9999px",
                  padding: "13px 20px", textDecoration: "none",
                  fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  boxShadow: "0 0 22px rgba(201,169,110,0.30)",
                }}
              >
                <MessageCircle size={16} /> Consultar
              </a>
            </div>
          </div>

          {/* Gallery */}
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1C1A17", marginBottom: "24px" }}>
            Galería
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "clamp(40px, 6vw, 72px)" }} className="gallery-grid">
            <style>{`@media(min-width:768px){ .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; } }`}</style>
            {item.gallery.map((img, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1/1", borderRadius: "14px", overflow: "hidden" }}>
                <Image src={img} alt={`${item.title} — foto ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>

          {/* Features */}
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1C1A17", marginBottom: "24px" }}>
            Características
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 clamp(40px, 6vw, 72px)", display: "grid", gridTemplateColumns: "1fr", gap: "12px" }} className="features-grid">
            <style>{`@media(min-width:640px){ .features-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media(min-width:1024px){ .features-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
            {item.features.map((feat, i) => (
              <li key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                background: "#fff", borderRadius: "14px", padding: "16px 18px",
                border: "1px solid rgba(212,196,176,0.35)",
                boxShadow: "0 2px 12px rgba(28,26,23,0.05)",
              }}>
                <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "#C9A96E", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                  <Check size={12} color="#111" strokeWidth={3} />
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#3A352E", lineHeight: 1.5 }}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Final */}
          <div style={{
            textAlign: "center", background: "#1C1A17", borderRadius: "24px",
            padding: "clamp(36px, 6vw, 64px) clamp(24px, 4vw, 48px)",
          }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              ¿Lista tu celebración?
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.70)", marginBottom: "32px", fontWeight: 300 }}>
              Contáctanos ahora y te confirmamos disponibilidad en minutos.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#C9A96E", color: "#111",
                  padding: "16px 36px", borderRadius: "9999px",
                  textDecoration: "none", fontFamily: "Inter, sans-serif",
                  fontSize: "14px", fontWeight: 700, letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  boxShadow: "0 0 28px rgba(201,169,110,0.40)",
                }}
              >
                <MessageCircle size={18} /> Reservar por WhatsApp
              </a>
              <Link
                href="/#instalaciones"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent", color: "rgba(255,255,255,0.80)",
                  padding: "15px 32px", borderRadius: "9999px",
                  textDecoration: "none", fontFamily: "Inter, sans-serif",
                  fontSize: "14px", fontWeight: 500,
                  border: "1.5px solid rgba(255,255,255,0.30)",
                }}
              >
                <ArrowLeft size={14} /> Volver a instalaciones
              </Link>
            </div>
          </div>

          {/* Other installations */}
          <div style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "#1C1A17", marginBottom: "20px" }}>
              Otros espacios
            </h3>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {INSTALLATIONS_DATA.filter((i) => i.slug !== item.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/instalaciones/${other.slug}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#fff", color: "#1C1A17",
                    padding: "11px 20px", borderRadius: "9999px",
                    textDecoration: "none", fontFamily: "Inter, sans-serif",
                    fontSize: "14px", fontWeight: 500,
                    border: "1px solid rgba(212,196,176,0.5)",
                    boxShadow: "0 2px 10px rgba(28,26,23,0.05)",
                    transition: "all .3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A96E"; e.currentTarget.style.color = "#C9A96E"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(212,196,176,0.5)"; e.currentTarget.style.color = "#1C1A17"; }}
                >
                  {other.icon} {other.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
