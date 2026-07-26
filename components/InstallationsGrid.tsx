"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Check } from "lucide-react";
import { INSTALLATIONS_DATA } from "@/lib/installations";

function InstallationCard({ item, index }: { item: (typeof INSTALLATIONS_DATA)[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="inst-card-wrap"
      style={{
        display: "flex", flexDirection: "column",
        background: "#fff",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(212,196,176,0.4)",
        boxShadow: "0 12px 32px rgba(28,26,23,0.04)",
        transition: "box-shadow .4s, transform .4s",
      }}
    >
      <style>{`
        .inst-card-wrap:hover { transform: translateY(-8px); box-shadow: 0 24px 64px rgba(28,26,23,0.08) !important; }
        .inst-card-wrap:hover .inst-card-img { transform: scale(1.05); }
      `}</style>

      {/* Image */}
      <Link href={`/instalaciones/${item.slug}`} style={{ display: "block", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
          <Image
            src={item.heroImage}
            alt={item.title}
            fill
            className="inst-card-img"
            style={{ objectFit: "cover", transition: "transform .8s cubic-bezier(0.22, 1, 0.36, 1)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle overlay gradient for luxury feel */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />
          
          {/* Floating capacity badge */}
          <div style={{
            position: "absolute", bottom: "16px", right: "16px",
            background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
            padding: "8px 12px", borderRadius: "9999px",
            display: "flex", alignItems: "center", gap: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}>
            <Users size={14} color="#1C1A17" />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "#1C1A17" }}>
              {item.capacity}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700, color: "#1C1A17", margin: "0 0 12px", lineHeight: 1.2 }}>
          {item.title}
        </h3>
        
        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "14.5px", color: "#5C5249", fontWeight: 300, lineHeight: 1.6,
          margin: "0 0 24px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {item.shortDescription}
        </p>

        {/* Feature list snippet */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
          {item.features.slice(0, 3).map((feat, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <Check size={10} color="#C9A96E" strokeWidth={3} />
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
          className="inst-card-btn"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
            width: "100%", padding: "16px", borderRadius: "12px",
            background: "#FAF8F4", color: "#1C1A17",
            fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            border: "1px solid rgba(212,196,176,0.5)",
            transition: "all .3s"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1A17"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#1C1A17"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#FAF8F4"; e.currentTarget.style.color = "#1C1A17"; e.currentTarget.style.borderColor = "rgba(212,196,176,0.5)"; }}
        >
          Ver más <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function InstallationsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="instalaciones" style={{ background: "#FAF8F4", padding: "120px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: "11px",
            fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "16px",
          }}>
            Nuestros Espacios
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#1C1A17", lineHeight: 1.1,
            margin: "0 0 20px",
          }}>
            Cada espacio, <em style={{ fontStyle: "italic", color: "#A8854A" }}>una experiencia</em>
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
            color: "#5C5249", fontWeight: 300, lineHeight: 1.75, maxWidth: "600px", margin: "0 auto",
          }}>
            Descubre las 9 áreas independientes que componen El Corrihuelo. Todas están diseñadas pensando en el confort y preparadas para convertir tu evento en un recuerdo imborrable.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="inst-grid" style={{ display: "grid", gap: "32px" }}>
          <style>{`
            .inst-grid { grid-template-columns: 1fr; }
            @media (min-width: 640px) { .inst-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1024px) { .inst-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; } }
          `}</style>
          
          {INSTALLATIONS_DATA.map((item, i) => (
            <InstallationCard key={item.slug} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
