"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTALLATIONS_DATA } from "@/lib/installations";

function InstallationCard({
  item,
  index,
}: {
  item: (typeof INSTALLATIONS_DATA)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(212,196,176,0.35)",
        boxShadow: "0 4px 24px rgba(28,26,23,0.07)",
        display: "flex",
        flexDirection: "column",
        transition: "transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(28,26,23,0.13)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(28,26,23,0.07)";
      }}
    >
      {/* Image */}
      <Link
        href={`/instalaciones/${item.slug}`}
        aria-label={`Ver más sobre ${item.title}`}
        style={{ display: "block", position: "relative", overflow: "hidden", flexShrink: 0 }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
          <Image
            src={item.heroImage}
            alt={item.title}
            fill
            style={{ objectFit: "cover", transition: "transform .8s ease" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="installation-card-img"
          />
          {/* Subtle gradient overlay on image */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)",
          }} />
          {/* Icon badge */}
          <div style={{
            position: "absolute", top: "14px", left: "14px",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "50%",
            width: "40px", height: "40px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}>
            {item.icon}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
        <h3 style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)",
          fontWeight: 700,
          color: "#1C1A17",
          lineHeight: 1.2,
          margin: 0,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          color: "#5C5249",
          fontWeight: 300,
          lineHeight: 1.65,
          margin: 0,
          /* Limit to 3 lines */
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {item.shortDescription}
        </p>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }} />

        {/* CTA */}
        <Link
          href={`/instalaciones/${item.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "4px",
            padding: "12px 22px",
            borderRadius: "9999px",
            background: "#1C1A17",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "background .3s, transform .3s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C9A96E";
            e.currentTarget.style.color = "#111";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1C1A17";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          Ver más <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function InstallationsGrid() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section id="instalaciones" style={{ background: "#FAF8F4", padding: "80px 0" }}>
      <style>{`
        .installation-card-img:hover { transform: scale(1.04); }
        @media (max-width: 639px) {
          .installations-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .installations-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .installations-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span style={{
            display: "block",
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C9A96E",
            marginBottom: "14px",
          }}>
            Nuestros espacios
          </span>
          <h2 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(1.9rem, 5vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#1C1A17",
            margin: "0 0 18px",
          }}>
            Cada espacio, una experiencia
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "#5C5249",
            fontWeight: 300,
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            Explora cada instalación en detalle y descubre todo lo que El Corrihuelo pone a tu disposición.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="installations-grid"
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {INSTALLATIONS_DATA.map((item, index) => (
            <InstallationCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
