"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Users } from "lucide-react";
import { INSTALLATIONS_DATA } from "@/lib/installations";

// Map slugs without persons to use a landscape/nature shot where applicable
const CARD_IMAGES: Record<string, string> = {
  piscina:        "/images/terraza-piscina.jpg",
  salon:          "/images/salon-decorado.jpg",
  "zona-gourmet": "/images/mesa-gourmet.jpg",
  barbacoa:       "/images/paella2.jpg",
  jardines:       "/images/hero-jardin.jpg",
  "parque-infantil": "/images/flores-entrada.jpg",
  karaoke:        "/images/guitarrista.jpg",
  "ping-pong":    "/images/baile-dia.jpg",
  futbolin:       "/images/hero-salon.jpg",
};

function InstallationCard({ item, index }: { item: (typeof INSTALLATIONS_DATA)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const imgSrc = CARD_IMAGES[item.slug] ?? item.heroImage;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="inst-card"
      style={{
        display: "flex", flexDirection: "column",
        background: "#fff",
        borderRadius: "28px",
        overflow: "hidden",
        border: "1px solid rgba(212,196,176,0.35)",
        boxShadow: "0 8px 32px rgba(28,26,23,0.04)",
        transition: "transform .5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .5s ease",
      }}
    >
      <style>{`
        .inst-card:hover { transform: translateY(-10px); box-shadow: 0 28px 64px rgba(28,26,23,0.1) !important; }
        .inst-card:hover .inst-img { transform: scale(1.06); }
      `}</style>

      {/* Photo */}
      <Link href={`/instalaciones/${item.slug}`} style={{ display: "block", overflow: "hidden", position: "relative" }} aria-label={`Ver detalles de ${item.title}`}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
          <Image
            src={imgSrc}
            alt={`${item.title} — El Corrihuelo, Murcia`}
            fill
            className="inst-img"
            style={{ objectFit: "cover", transition: "transform .8s cubic-bezier(0.22, 1, 0.36, 1)" }}
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 55%)" }} />

          {/* Capacity Badge */}
          <div style={{
            position: "absolute", bottom: "16px", right: "16px",
            background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
            padding: "7px 14px", borderRadius: "9999px",
            display: "flex", alignItems: "center", gap: "6px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          }}>
            <Users size={13} color="#C9A96E" strokeWidth={2} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11.5px", fontWeight: 600, color: "#1C1A17" }}>
              {item.capacity}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", flexGrow: 1, gap: "0" }}>
        <h3 style={{
          fontFamily: "Playfair Display, serif", fontSize: "clamp(1.35rem, 2.5vw, 1.65rem)",
          fontWeight: 700, color: "#1C1A17", margin: "0 0 10px", lineHeight: 1.2,
        }}>
          {item.title}
        </h3>

        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B635A", fontWeight: 300, lineHeight: 1.65,
          margin: "0 0 22px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {item.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "9px", flexGrow: 1 }}>
          {item.features.slice(0, 3).map((feat, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div style={{
                width: "17px", height: "17px", borderRadius: "50%",
                background: "rgba(201,169,110,0.12)", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, marginTop: "2px",
              }}>
                <Check size={9} color="#C9A96E" strokeWidth={3} />
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#8B8276", lineHeight: 1.4 }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`/instalaciones/${item.slug}`}
          className="inst-btn"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
            width: "100%", padding: "15px", borderRadius: "14px",
            background: "#F7F3EE", color: "#1C1A17",
            fontFamily: "Inter, sans-serif", fontSize: "12.5px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            border: "1px solid rgba(212,196,176,0.45)",
            transition: "all .3s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1A17"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#1C1A17"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#F7F3EE"; e.currentTarget.style.color = "#1C1A17"; e.currentTarget.style.borderColor = "rgba(212,196,176,0.45)"; }}
        >
          Ver más <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function InstallationsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="instalaciones" style={{ background: "#F9F6F1", padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 88px)" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Nuestros Espacios
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.08,
            margin: "0 0 18px",
          }}>
            Cada espacio, <em style={{ fontStyle: "italic", color: "#A8854A" }}>una experiencia</em>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
            color: "#6B635A", fontWeight: 300, lineHeight: 1.78, maxWidth: "560px", margin: "0 auto",
          }}>
            9 áreas únicas diseñadas para que tu celebración sea exactamente como la imaginas. Todo incluido. Sin sorpresas.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
          {INSTALLATIONS_DATA.map((item, i) => (
            <InstallationCard key={item.slug} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
